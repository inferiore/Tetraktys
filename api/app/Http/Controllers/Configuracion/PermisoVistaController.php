<?php

namespace App\Http\Controllers\Configuracion;

use Illuminate\Http\Request;
use Modelos\Configuracion\Vista;
use App\Http\Controllers\Controller;
use Modelos\Configuracion\PermisoVista;

class PermisoVistaController extends Controller
{
    protected $vista;
    protected $permiso;

    public function __construct(Vista $vista, PermisoVista $permiso)
    {
        $this->vista = new $vista;
        $this->permiso = new $permiso;
    }

    public function index()
    {
    	
    }
   
}
