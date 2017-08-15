<?php

namespace Modelos\Configuracion;
use Modelos\Intermediate;

class PermisoPorEstado extends Intermediate 
{

    protected $table = 'PermisosPorEstados';
     protected $primaryKey = 'Id';
    public $timestamps = true;
    protected $fillable = array('IdRuta', 'IdObjeto', 'IdRol', 'IdEstado');
    protected $hidden = array('created_at', 'updated_at');
    

     public function scopeTables($query)
    {
            $query->join("rutas","rutas.Id","=","IdRuta");
            $query->join("Objetos","Objetos.Id","=","IdObjeto");
            $query->join("Roles","RolId","=","IdRol");
     		$query->join(conexion("Actividades")."Act_Estados","EstId","=","IdEstado");
    }
    public function scopeFilter($query, $inputs)
    {
        if($tmp = @$inputs['nombre'])
            $query->where('rutas.nombre', 'like', '%'.$tmp.'%');
        if($tmp = @$inputs['Nombre'])
            $query->where('Objeto.Nombre', 'like', '%'.$tmp.'%');
        if($tmp = @$inputs['EstNombre'])
            $query->where('EstNombre', 'like', '%'.$tmp.'%');
        if ($tmp=@$inputs["IdEstado"])
            $query->whereIn('IdEstado', explode(',', $inputs["IdEstado"]));
        if ($tmp=@$inputs["IdObjeto"])
            $query->whereIn('IdObjeto', explode(',', $inputs["IdObjeto"]));
        if ($tmp=@$inputs["IdRol"])
            $query->whereIn('IdRol', explode(',', $inputs["IdRol"]));
        
		  // $query->where("RolIdEstadoAux","=",1);
        return $query;
    }
    public function scopeColumnas($query)
    {	
    	$query->select("PermisosPorEstados.Id","RolNombre","EstNombre","Objetos.Nombre","Rutas.Nombre as RNombre");
        
        return $query;
    }

}