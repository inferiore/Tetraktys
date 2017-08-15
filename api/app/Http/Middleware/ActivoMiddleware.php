<?php

/* this middleware check if  user or user role is active*/
namespace App\Http\Middleware;

use \Auth;
use Closure;
use Modelos\Configuracion\User;
use Modelos\Configuracion\Ruta;
use Modelos\Configuracion\Permiso;
use App\Exceptions\PermisoException;


class ActivoMiddleware
{
    protected $ruta;
    protected $permiso;

    public function handle($request, Closure $next)
    {
      
        if(Auth::check())
        {
            
            $rol = Auth::user()->rol;
            if($rol->RolIdEstado!=1 || $rol->RolIdEstado != 1)
            {
                throw new PermisoException("Rol Inactivo",401,null);
                //return responseError($response, '200', 'El rol se encuentra inactivo.');
            }
            if(Auth::user()->UsIdEstadoAux=!1 || Auth::user()->UIdEstado=!1 ){
                throw new PermisoException("Usuario Desabilitado",403,null);
                //return responseError($response, '200', 'El Usuario se encuentra Deshabilitado del sistema.');
                    //return new PermisoException();
                    //return abort(403,'Acceso no autorizado');
                    //return responseError($response, '403', 'Acceso no autorizado');
            }

        }
         return $next($request);

    }
}
