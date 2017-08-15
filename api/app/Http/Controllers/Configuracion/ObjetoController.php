<?php

namespace App\Http\Controllers\Configuracion;

use Auth;
use Illuminate\Http\Request;
use Modelos\Configuracion\Objeto;
use Modelos\Configuracion\User;
use App\Http\Controllers\Controller;
use Validaciones\Configuracion\ObjetoRequest;


class ObjetoController extends Controller 
{

    
    protected $objeto;


    public function __construct(Objeto $objeto)
    {
        $this->objeto = $objeto;

           
    }
    /**
    * Display a listing of the resource.
    *
    * @return Response
    */

    public function index()
    {

        $objetos = $this->objeto->filter(request()->all())->paginate($this->objeto->perPage);
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('objetos'),
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
     
    $modelos= $this->objeto->listarModelos();

    $this->objeto->setPath('\App\Http\Controllers');
    $this->objeto->setFolderModel('App');    
    $controladores= $this->objeto->listarModelos();
    
    $this->objeto->setPath('\App\Notifications');
    $this->objeto->setFolderModel('Notifications');    
    
    $notificaciones= $this->objeto->listarModelos();

    

    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('modelos','controladores','notificaciones')
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
    $objeto = $this->objeto->fill($Request->all());
    $objeto->IdUsuarioEdicion=Auth::user()->getId();
    $objeto->IdUsuarioRegistro=Auth::user()->getId();    
    $objeto->save();

    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('objeto')
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

    $objeto = $this->objeto->findOrfail($id);
    
    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('objeto')
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
    $objeto = $this->objeto->findOrfail($id);
    $modelos= $this->objeto->listarModelos();
     $this->objeto->setPath('\App\Http\Controllers');
    $this->objeto->setFolderModel('App');  
    $controladores= $this->objeto->listarModelos();
    
    $this->objeto->setPath('\App\Notifications');
    $this->objeto->setFolderModel('Notifications');  
    $notificaciones= $this->objeto->listarModelos();
   
    $respuesta = [
    'status' => 'ok',
    'message' => $this->mensaje_exitoso,
    'data' => compact('objeto','modelos','controladores','notificaciones')
    ];

    return response($respuesta,200);

    }

    /**
    * Update the specified resource in storage.
    *
    * @param  int  $id
    * @return Response
    */
    public function update(ObjetoRequest $request, $id)
    {
        $objeto = $this->objeto->findOrfail($id);
        $objeto->fill($request->all());
        $objeto->IdUsuarioEdicion = Auth::user()->getId();
       
        $objeto->save();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('objeto')
              
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

        $objeto = $this->objeto->findOrfail($id);
        $objeto->delete();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            ];
        return response($respuesta, 200);
    }

    public function getAtters($id)
    {

        $attres=$this->objeto->findOrfail($id)->getAtters();

        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('attres')
            ];
        return response($respuesta, 200);
    }
       
}
