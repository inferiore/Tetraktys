<?php

namespace App\Http\Controllers\Configuracion;

use Illuminate\Http\Request;
use Modelos\Configuracion\Rol;
use Modelos\Configuracion\Ruta;
use Modelos\Configuracion\PermisoPorEstado;
use Modelos\Configuracion\Objeto;
use App\Http\Controllers\Controller;
use Modelos\Configuracion\Estado;
use Validaciones\Configuracion\PermisoPorEstadoRequest;
use Auth;
class PermisoPorEstadoController extends Controller 
{

  protected $rol;
  protected $ruta;
  protected $permiso;
  protected $estado;

  public function __construct(Rol $rol,Ruta $ruta,PermisoPorEstado $permiso,Estado $estado,Objeto $objeto)
  {
    $this->rol = $rol;
    $this->ruta = $ruta;
    $this->permiso= $permiso; 
    $this->estado= $estado; 
    $this->objeto= $objeto; 


     
  }
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */

  public function index()
  {
   
    $roles = $this->rol->filter(request()->all())->get();
    $rutas = $this->ruta->filter(request()->all())->get();
    $estados = $this->estado->filter(request()->all())->get();//pluck("EstNombre","EstId");
    $objetos = $this->objeto->filter(request()->all())->get();//pluck("EstNombre","EstId");
    
    $permisos = $this->permiso->tables(request()->all())->Columnas()->filter(request()->all())->paginate($this->permiso->perPage);
    //dd($permisos);

    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'inputs'=>request()->all(),
        'data' => compact('roles','rutas','objetos','permisos','estados')
    ];
    
    return response($respuesta,200);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  public function create(Request $request)
  {
    $objetos = $this->objeto->pluck("nombre","id");
    
    if(isset($request->all()["IdObjeto"])){
      $this->objeto=Objeto::findOrFail($request->all()["IdObjeto"]);
    }
    
    $roles = $this->rol->pluck("RolNombre","RolId"); 
    $estados = $this->estado->filter(['EstIdTipoObjeto'=>$this->objeto->Id])->pluck("EstNombre","EstId");
    $rutas = $this->ruta->filter(['controlador'=>$this->objeto->Controlador])->pluck("nombre","id");

    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('roles','rutas','estados','objetos')
    ];
     return response($respuesta, 200);

     
  }

  /**
   * Store a newly created resource in storage.
   *
   * @return Response
   */
  public function store(PermisoPorEstadoRequest $Request)
  {    
    $permiso= $this->permiso->fill($Request->all());
    $permiso->IdUsuarioRegistro=Auth::user()->UId;
    $permiso->IdUsuarioEdicion=Auth::user()->UId;
    $permiso->save();

    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data'=>compact("permiso")
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
   
    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact(null)
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
    
    $permiso = $this->permiso->findOrfail($id); 
    $objetos = $this->objeto->pluck("nombre","id");
    $this->objeto=$this->objeto->findOrFail($permiso->IdObjeto);
    // if(isset(request()["IdObjeto"])){
    //   $this->objeto=Objeto::findOrFail(request()->all()["IdObjeto"]);
    // }
    
    $roles = $this->rol->pluck("RolNombre","RolId"); 
    $estados = $this->estado->filter(['EstIdTipoObjeto'=>$this->objeto->Id])->pluck("EstNombre","EstId");
    $rutas = $this->ruta->filter(['controlador'=>$this->objeto->Controlador])->pluck("nombre","id");

   

    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('objetos','roles', 'permiso','rutas','estados')
    ];
    
     return response($respuesta,200);

  }

  /**
   * Update the specified resource in storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function update(PermisoPorEstadoRequest $request,$id)
  {
     $permiso = $this->permiso->findOrfail($id);
     $permiso->fill($request->all());      
     $permiso->update();
     $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso      
     ];
    return response($respuesta, 200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function destroy($id)
  {
    
    $permiso = $this->permiso->findOrfail($id);
    $permiso->delete();
    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso
    ];
     return response($respuesta, 200);
  }
  
}
