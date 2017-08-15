<?php

namespace Modelos\Configuracion;
use DB;
use Modelos\Intermediate;

class Permiso extends Intermediate
{
    protected $table = 'permisos';
    protected $fillable = ['rol_id', 'ruta_id', 'activo'];
    protected $hidden = ['updated_at', 'created_at'];
    
    public function scopeFilter($query, $inputs)
    {
        if($tmp = @$inputs['RolNombre'])
            $query->where('RolNombre', 'like', '%'.$tmp.'%');

        if($tmp = @$inputs['RolDescripcion'])
            $query->where('RolDescripcion', 'like', '%'.$tmp.'%');
        
        if ($tmp=@$inputs["RolIdEstado"])
            $query->whereIn($inputs["RolIdEstado"]);

        if ($tmp=@$inputs["nombre"])
            $query->where("rutas.nombre","like","%".$inputs["nombre"]."%");
        
        if ($tmp=@$inputs["controlador"])
             $query->where("rutas.controlador","like","%".$inputs["controlador"]."%");

        if ($tmp=@$inputs["RolId"])
             $query->where("RolId","=",$inputs["RolId"]);

        if (isset($inputs["libre"])) {
             $query->where("rutas.libre","=",$inputs["libre"]);         
            }
        
    }
     public function scopeColumnas($query)
    {
        $query->select("permisos.Id","rol_id","rutas.Id as IdRuta","ruta_id","permisos.activo","nombre","controlador","libre");
    }
    
     public function scopeTables($query,$inputs)
    {
        if($tmp=@$inputs["rol_id"]){
    	   $query->join("Roles","RolId","=","rol_id")
                ->rightJoin("rutas",function($query) use ($inputs) {
                    $query->on("rutas.Id","=","ruta_id")
                        ->On(function($on) use ($inputs){
                            $on->on("permisos.rol_id", "=", DB::raw($inputs["rol_id"]));
                            $on->orWhereNull("permisos.id");
                });
           });
        }else{
            $query->join("Roles","RolId","=","rol_id")
                ->join("rutas",function($query) use ($inputs) {
                    $query->on("rutas.Id","=","ruta_id")
                        ->on("permisos.rol_id", "=", "RolId");
           });
        }      
	}
    public function tienePermiso($request){
            if(Auth::check())
        {
            $route = $request->route();
            $rol = Auth::user()->rol->getId();
            if(!is_null($route) && $rol != 1)
            {
                $controlador = $route->getActionName();
                $ruta = $this->ruta->where('controlador', $controlador)
                                    ->first();
                if(is_null($ruta)){
                    //return abort(404,'La ruta no se encuentra registrada.');
                    return responseError($response, '404', 'La ruta no se encuentra registrada.');
                }
                //$response = respuesta($response, $rol);
                if(!$ruta->libre){
                    $permiso = $this->permiso->where('ruta_id', $ruta->id)
                                            ->where('rol_id', $rol)
                                            ->where('activo', '1')
                                            ->count();
                    if($permiso == 0)
                    return new PermisoException();
                    //return abort(403,'Acceso no autorizado');
                    //return responseError($response, '403', 'Acceso no autorizado');
                }
            }
        }
    }

}
