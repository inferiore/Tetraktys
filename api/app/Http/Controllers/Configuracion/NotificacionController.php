<?php

namespace App\Http\Controllers\Configuracion;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NotificacionController extends Controller
{

    public function __construct()
    {

    }

    public function index()
    {
        $notificaciones = Auth::user()->unreadNotifications;
    	return response(compact('notificaciones'), 200);
    }

    public function show($id)
    {
    	
    }
    
}
