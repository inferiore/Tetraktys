<?php

namespace App\Http\Controllers\Configuracion;

use Auth;
use Illuminate\Http\Request;
use Modelos\Configuracion\Rol;
use Modelos\Configuracion\User;
use App\Http\Controllers\Controller;
use Modelos\Configuracion\EstadoGenerico;
use Validaciones\Configuracion\RolRequest;


class RolController extends Controller 
{

    protected $rol;
    protected $estado;
    protected $usuario;


    public function __construct(Rol $rol, EstadoGenerico $estado)
    {
        $this->rol = $rol;
        $this->estado = $estado;

           
    }
    /**
    * Display a listing of the resource.
    *
    * @return Response
    */

    public function index()
    {
        $roles = $this->rol->with('estado')->filter(request()->all())->get();
        $estados = $this->estado->all();
        // dd($estados);
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('roles', 'estados'),
            'inputs' => request()->all()
        ];

        return response($respuesta,200);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return Response
    */
    public function create()
    {
        $estados = $this->estado->all();
         
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('estados')
        ];
        return response($respuesta, 200);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @return Response
    */
    public function store(RolRequest $Request)
    {
    $rol = $this->rol->fill($Request->all());
    $rol->RolIdUsuarioEdicion=Auth::user()->UId;
    $rol->RolIdUsuarioRegistro=Auth::user()->UId;
    $rol->RolIdEstadoAux=1;
    $rol->save();
    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso
    ];
    return response($respuesta, 200);
    }

    /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return Response
    */
    public function show($id)
    {

    $rol = $this->rol->findOrfail($id);
    $estados = $this->estado->all();
    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('rol', 'estados')
    ];

    return response($respuesta, 200);
    }

    /**
    * Show the form for editing the specified resource.
    *
    * @param  int  $id
    * @return Response
    */
    public function edit($id)
    {
    $rol = $this->rol->findOrfail($id);
    $estados = EstadoGenerico::all();
    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('rol', 'estados')
    ];

    return response($respuesta,200);

    }

    /**
    * Update the specified resource in storage.
    *
    * @param  int  $id
    * @return Response
    */
    public function update(RolRequest $request, $id)
    {
        $rol = $this->rol->findOrfail($id);
        $rol->fill($request->all());
        $rol->RolIdUsuarioEdicion = Auth::user()->UId;
        $rol->save();

        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('rol')
              
        ];

        return response($respuesta, 200);
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return Response
    */
    public function destroy(Request $request, $id)
    {

        $rol = $this->rol->findOrfail($id);
        $rol->RolIdEstadoAux = $request->input('RolIdEstadoAux');
        $rol->save();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('rol')
        ];
        return response($respuesta, 200);
    }
}
