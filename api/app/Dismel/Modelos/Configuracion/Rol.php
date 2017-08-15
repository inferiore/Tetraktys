<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;
use DB;

class Rol extends Intermediate
{
    protected $table = 'Roles';
    protected $primaryKey = 'RolId';
    protected $fillable = ['RolNombre', 'RolDescripccion', 'RolIdEstado'];
    const CREATED_AT = 'RolFechaRegistro';
    const UPDATED_AT = 'RolFechaEdicion';
    protected $hidden = ['RolFechaRegistro', 'RolFechaEdicion'];
    protected $casts = [
        'RolIdEstadoAux' => 'bool'
    ];

    public function scopeFilter($query, $inputs)
    {
        if($tmp = @$inputs['RolNombre'])
            $query->where('Rolnombre', 'like', '%'.$tmp.'%');
        if($tmp = @$inputs['RolDescripcion'])
            $query->where('RolDescripcion', 'like', '%'.$tmp.'%');
        if ($tmp=@$inputs["RolIdEstado"])
            $query->whereIn('RolIdEstado', explode(',', $inputs["RolIdEstado"]));

         // $query->where("RolIdEstadoAux","=",1);

        return $query;
    }
    public function scopeActivo($query)
    {
        return $query->where('RolIdEstadoAux', '1')->orderBy('RolNombre');
    }
    public function scopeTables($query)
    {
            $query->join("Estados","RolIdEstado","=","EsId");
    }
    public function estado()
    {
        // belongsTo(RelatedModel, foreignKey = estado_id, keyOnRelatedModel = id)
        return $this->belongsTo('Modelos\Configuracion\EstadoGenerico', 'RolIdEstado', 'StId');
    }

    // public function menuPadre()
    // {
    //     return $this->belongsToMany('Modelos\Configuracion\Menu', 'menu_rol', 'rol_id', 'menu_id')
    //                 ->where('padre_id', 0)
    //                 ->orderBy('prioridad');
    // }

    public function menusRoles()
    {
        // hasMany(RelatedModel, foreignKeyOnRelatedModel = menu_id, localKey = id)
        return $this->hasMany('Modelos\Configuracion\MenuRol', 'rol_Id', 'RolId')->where("Activo","=",1);
    }

    
    public function setRolIdEstadoAuxAttribute($value)
    {
        $this->attributes['RolIdEstadoAux'] = ($value == 'true'|$value == 1) ? 1 : 0;
    }

    public function rutas()
    {
        return $this->belongsToMany('Modelos\Configuracion\Ruta', 'permisos', 'rol_id', 'ruta_id');
    }
    public function getMenu(){

     //opciones padres   
       $menusRoles=DB::table("menu_rol")
    ->join("menu","menu.id","=","menu_rol.menu_id")
    ->where("menu_rol.activo",Db::raw(1))->where("menu.padre_id",Db::raw(0))
    ->where("menu_rol.rol_id",Db::raw($this->getId()))->get();

    
    //opciones hijas
    $subMenusRoles=DB::table("menu_rol")
    ->join("menu","menu.id","=","menu_rol.menu_id")
    ->where("menu_rol.activo",Db::raw(1))->where("menu.padre_id","<>",Db::raw(0))
    ->where("menu_rol.rol_id",Db::raw($this->getId()))->get();
    //dd($subMenusRoles);
    //dd($subMenusRoles->toArray());
    
    $menu=[];
    foreach ($menusRoles->toArray() as $key =>  $value) {
        $hijos=[];
        $nietos=[];
         foreach ($subMenusRoles->toArray() as $subValue) {
             if($subValue->padre_id==$value->id){
                foreach ($subMenusRoles as  $subSubValue) {
                    if($subValue->id==$subSubValue->padre_id){
                        $nietos[]=$subSubValue;                
                    }    
                 }
                 $hijos[]=$subValue;
                 $subValue->children=$nietos;
             }

         }
        $menu[$key] = $value;
        $menu[$key]->children =$hijos;
    }
    return $menu;
    
    }
     public function getMenuForAdmin(){

       $menusRoles=DB::table("menu_rol")
    ->join("menu","menu.id","=","menu_rol.menu_id")
    ->where("menu.padre_id",Db::raw(0))->where("menu_rol.rol_id",Db::raw($this->getId()))->get();

    //dd($menusRoles->toArray());
    $subMenusRoles=DB::table("menu_rol")
    ->join("menu","menu.id","=","menu_rol.menu_id")
    ->where("menu.padre_id","<>",Db::raw(0))->where("menu_rol.rol_id",Db::raw($this->getId()))->get();
    //dd($subMenusRoles);
    //dd($subMenusRoles->toArray());
    
    $menu=[];
    foreach ($menusRoles->toArray() as $key =>  $value) {
        $hijos=[];
        $nietos=[];
         foreach ($subMenusRoles->toArray() as $subValue) {            
             if($subValue->padre_id==$value->id){
                
                 foreach ($subMenusRoles as  $subSubValue) {
                    if($subValue->id==$subSubValue->padre_id){
                        $nietos[]=$subSubValue;                
                    }    
                 }
                 $hijos[]=$subValue;
                 $subValue->children=$nietos;
             }
         }
        $menu[$key] = $value;
        $menu[$key]->children =$hijos;
    }
    return $menu;
    
    }

}
