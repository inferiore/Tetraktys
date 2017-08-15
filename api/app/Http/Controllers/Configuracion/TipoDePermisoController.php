<?php 

namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\Controller;
use Modelos\Configuracion\TipoDePermiso;
use Modelos\Configuracion\EstadoGenerico;
use Modelos\Configuracion\User;
use Illuminate\Http\Request;
use Validaciones\Configuracion\TipoDePermisoRequest;


class TipoDePermisoController extends Controller 
{

  protected $TipoDePermiso;
  protected $IdSesion;


  public function __construct(TipoDePermiso $TipoDePermiso)
  {
    $IdSesion=45;
    $this->TipoDePermiso = $TipoDePermiso;
  }
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function index()
  {
    $tipo_permiso = $this->TipoDePermiso->filter(request()->all())->get();
    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('tipo_permiso')
    ];

    return response($tipo_permiso,200);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  public function create()
  {
    $estados = EstadoGenerico::all();
    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('estados')
    ];
     return response($respuesta ,200);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @return Response
   */
  public function store(TipoDePermisoRequest $request)
  {
    $this->TipoDePermiso->fill($request->all());
    $this->TipoDePermiso->save();
    
    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso
    ];
  return response($respuesta,200);

  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return Response
   */
  public function show($id)
  {  
    $tipo_permiso = $this->TipoDePermiso->findOrfail($id);
    $estados = EstadoGenerico::all();
    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('tipo_permiso', 'estados')
    ];
    
    return response($respuesta,200);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return Response
   */
  public function edit($id)
  {

    $tipo_permiso = $this->TipoDePermiso->findOrfail($id);

    $estados = EstadoGenerico::all();
    $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso,
        'data' => compact('tipo_permiso', 'estados')
    ];
    
     
     return response($respuesta,200);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function update(TipoDePermisoRequest $request, $id)
  { 
      $tipo_permiso = $this->TipoDePermiso->findOrfail($id);
      $tipo_permiso->fill($request->all());
      $tipo_permiso->update();
       $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso
    ];
     return response($respuesta,200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function destroy($id)
  {
     $tipo_permiso = $this->TipoDePermiso->findOrfail($id);
      $tipo_permiso->TdpIdEstadoAux=0;
      $tipo_permiso->update();

       $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso
    ];
      return response($respuesta,200);
  
    
  }
  
}

?>