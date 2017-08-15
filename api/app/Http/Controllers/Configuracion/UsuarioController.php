<?php

namespace App\Http\Controllers\Configuracion;

use Illuminate\Http\Request;
use Modelos\Configuracion\Rol;
use Modelos\Configuracion\User;
use Modelos\Configuracion\Canal;
use App\Http\Controllers\Controller;
use Modelos\Configuracion\Proveedor;
use Modelos\Configuracion\TipoIdentificacion;
use Validaciones\Configuracion\UsuarioRequest;

class UsuarioController extends Controller
{
    protected $usuario;
    protected $rol;
    protected $canal;
    protected $proveedor;
    protected $dni;

    public function __construct(User $usuario, Rol $rol, Canal $canal, Proveedor $proveedor, TipoIdentificacion $dni)
    {
        $this->usuario = $usuario;
        $this->rol = $rol;
        $this->canal = $canal;
        $this->proveedor = $proveedor;
        $this->dni = $dni;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $usuarios = $this->usuario->with('rol', 'canal')
                                ->filter($request->all())
                                ->orderBy('UNombres')
                                ->paginate();
        $roles = $this->rol->activo()->get();
        $canales = $this->canal->activo()->get();
        $respuesta = [
            'status' => 'ok',
            'data' => compact('usuarios', 'roles', 'canales'),
            'inputs' => $request->all()
        ];
        return response($respuesta);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = $this->rol->activo()->pluck('RolNombre', 'RolId');
        $canales = $this->canal->activo()->pluck('CaNombreCanal', 'CaId');
        $proveedores = $this->proveedor->activo()->pluck('PrvNombre', 'PrvId');
        $dni = $this->dni->activo()->get();
        $respuesta = [
            'status' => 'ok',
            'data' => compact('roles', 'canales', 'dni', 'proveedores')
        ];
        return response($respuesta);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UsuarioRequest $request)
    {
        $this->usuario->fill($request->all());
        $estado = $this->usuario->save();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso
        ];
        return response($respuesta, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $usuario = $this->usuario->findOrFail($id);
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('usuario')
        ];
        return response($respuesta);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $usuario = $this->usuario->findOrFail($id);
        $roles = $this->rol->activo()->pluck('RolNombre', 'RolId');
        $canales = $this->canal->activo()->pluck('CaNombreCanal', 'CaId');
        $proveedores = $this->proveedor->activo()->pluck('PrvNombre', 'PrvId');
        $dni = $this->dni->activo()->pluck('TdipNombre', 'TdipId');
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('usuario', 'roles', 'canales', 'dni', 'proveedores')
        ];
        return response($respuesta);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UsuarioRequest $request, $id)
    {
        $usuario = $this->usuario->findOrFail($id);
        $usuario->fill($request->all());
        $usuario->save();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso
        ];
        
        return response($respuesta);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $usuario = $this->usuario->findOrFail($id);
        $usuario->UsIdEstadoAux = $request->input('UsIdEstadoAux');
        $usuario->save();
        $respuesta = [
            'status' => 'ok',
            'data' => compact('usuario'),
            'message' => 'El recurso se ha eliminado exitosamente',
        ];
        return response($respuesta);
    }

    public function password(UsuarioRequest $request, $id)
    {
        $usuario = $this->usuario->findOrFail($id);
        $usuario->fill($request->all());
        $usuario->save();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso
        ];
        return response($respuesta);
    }

}
