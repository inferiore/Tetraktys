<?php

namespace App\Http\Controllers\Configuracion;

use Auth;
use Illuminate\Http\Request;
use Modelos\Configuracion\Configuracion;
use Modelos\Configuracion\User;
use App\Http\Controllers\Controller;
use Modelos\Configuracion\Objeto;

//use Validaciones\Configuracion\ConfiguracionRequest;


class ConfiguracionController extends Controller 
{

    protected $configuracion;
    protected $objeto;
    protected $usuario;


    public function __construct(Configuracion $configuracion,Objeto $objeto)
    {
        $this->configuracion = $configuracion;
        $this->objeto = $objeto;

           
    }
    /**
    * Display a listing of the resource.
    *
    * @return Response
    */

    public function index()
    {

        $configuraciones = $this->configuracion->tables()->filter(request()->all())->selectIndex()->paginate(5);

        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('configuraciones'),
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
    $objetos = $this->objeto->all();
     
    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('objetos')
    ];
    return response($respuesta, 200);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @return Response
    */
    public function store(Request $Request)
    {
    $configuracion = $this->configuracion->fill($Request->all());
    $configuracion->IdUsuarioEdicion=Auth::user()->UId;
    $configuracion->IdUsuarioRegistro=Auth::user()->UId;
    // $rol->RolIdEstadoAux=1;
    $configuracion->save();
    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('configuracion')
    
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

    $configuracion = $this->configuracion->findOrfail($id);
    
    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('configuracion')
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
    $configuracion = $this->configuracion->findOrfail($id);
    $objetos = Objeto::pluck("Nombre","Id");  
    
    $primarias=$this->objeto->findOrfail($configuracion->IdPadre)->getAtters();
    $foraneas=$this->objeto->findOrfail($configuracion->IdPadre)->getAtters();
        
    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('foraneas', 'primarias','objetos','configuracion')
    ];

    return response($respuesta,200);

    }

    /**
    * Update the specified resource in storage.
    *
    * @param  int  $id
    * @return Response
    */
    public function update(Request $request, $id)
    {
        $configuracion = $this->configuracion->findOrfail($id);
        $configuracion->fill($request->all());
        $configuracion->IdUsuarioEdicion = Auth::user()->UId;
        $configuracion->save();

        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('configuracion')
              
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
        $configuracion = $this->configuracion->findOrfail($id);
        //$configuracion->delete();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso
            ];
        return response($respuesta, 200);
    }
}
