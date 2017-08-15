<?php

namespace App\Http\Controllers\Herramientas;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PqrController extends Controller
{
    public function index(Request $request)
    {
    	// dd($request);
        return response(['dashboard' => 'data'], 200);
    }
}
