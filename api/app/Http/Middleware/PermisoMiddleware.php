<?php
/* this middleware check if  role user has permission */
namespace App\Http\Middleware;

use \Auth;
use Closure;
use Modelos\Configuracion\User;
use Modelos\Configuracion\Ruta;
use Modelos\Configuracion\Permiso;
use App\Exceptions\PermisoException;


class PermisoMiddleware
{
    protected $ruta;
    protected $permiso;

    public function __construct(Ruta $ruta, Permiso $permiso)
    {
        $this->ruta = $ruta;
        $this->permiso = $permiso;
    }
    public function handle($request, Closure $next)
    {
       
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
                     throw new PermisoException("Acceso no autorizado",403,null);
                    //return abort(403,'Acceso no autorizado');
                    //return responseError($response, '403', 'Acceso no autorizado');
                }
            }
        }
         
        return $next($request);
    }
}
