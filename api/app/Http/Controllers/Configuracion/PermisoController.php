<?php

namespace App\Http\Controllers\Configuracion;

use Illuminate\Http\Request;
use Modelos\Configuracion\Rol;
use Modelos\Configuracion\Ruta;
use Modelos\Configuracion\Permiso;
use App\Http\Controllers\Controller;
use Modelos\Configuracion\EstadoGenerico;
use Validaciones\Configuracion\PermisoRequest;

class PermisoController extends Controller 
{

  protected $Rol;
  protected $Ruta;
  protected $Permiso;
  protected $Estado;

  public function __construct(Rol $Rol,Ruta $Ruta,Permiso $Permiso,EstadoGenerico $Estado)
  {
    $this->Rol = $Rol;
    $this->Ruta = $Ruta;
    $this->Permiso= $Permiso; 
    $this->Estado= $Estado; 
     
  }
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */

  public function index()
  {
   
    $roles = $this->Rol->filter(request()->all())->get();
    $rutas = $this->Ruta->filter(request()->all())->get();
    $permiso = $this->Permiso->tables(request()->all())->filter(request()->all())->Columnas()->paginate($this->Permiso->perPage);
    $Sql = $this->Permiso->tables(request()->all())->filter(request()->all())->Columnas()->toSql();

    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('roles','rutas','permiso','Sql')
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
    $roles = $this->Rol->filter(request()->all())->get();
    $rutas = $this->Ruta->filter(request()->all())->get();

    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('roles','rutas')
    ];
     return response($respuesta, 200);

     
  }

  /**
   * Store a newly created resource in storage.
   *
   * @return Response
   */
  public function store(PermisoRequest $Request)
  {    
    $permiso=$this->Permiso->firstOrNew(
      [ 
        "ruta_id"=>Request()->all()["ruta_id"],
        "rol_id"=>Request()->all()["rol_id"]
      ]
      );
    $permiso->fill(Request()->all());
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
    $permiso = $this->Permiso->findOrfail($id);
    $rol = $this->Rol->findOrFail($permiso->rol_id);
    $ruta = $this->Ruta->findOrFail($permiso->ruta_id);
    
    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('permiso', 'ruta','rol')
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
    $permiso = $this->Permiso->findOrfail($id);
    $roles = $this->Rol->filter(request()->all())->get();
    $rutas = $this->Ruta->filter(request()->all())->get();

    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('roles', 'permiso','rutas')
    ];
    
     return response($respuesta,200);

  }

  /**
   * Update the specified resource in storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function update(PermisoRequest $request,$id)
  {
     $permiso = $this->Permiso->findOrfail($id);
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
    
    $permiso = $this->Permiso->findOrfail($id);
    $permiso->delete();
    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso
    ];
     return response($respuesta, 200);
  }
  
}
