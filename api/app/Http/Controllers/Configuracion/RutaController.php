<?php

namespace App\Http\Controllers\Configuracion;

use Illuminate\Http\Request;
use Modelos\Configuracion\User;
use Modelos\Configuracion\Ruta;
use Modelos\Configuracion\Permiso;
use App\Http\Controllers\Controller;
use Validaciones\Configuracion\RutaRequest;
use DB;

class RutaController extends Controller 
{

    protected $ruta;
    protected $permiso;

    public function __construct(Ruta $ruta, Permiso $permiso)
    {
        $this->ruta = $ruta;
        $this->permiso = $permiso;
    }

    public function index()
    {

        $rutas = $this->ruta->filter(request()->all())->get();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('rutas')
        ];    
        return response($respuesta, 200);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return Response
    */
    public function create()
    {
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso
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
        
        $this->ruta->updateRutas();
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
        $ruta = $this->ruta->findOrfail($id);
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('Ruta')
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
        $ruta = $this->ruta->findOrfail($id);
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('Ruta')
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
        $ruta = $this->ruta->findOrfail($id);
        $ruta->fill($request->all());
        $ruta->save();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('ruta'),
            'inputs' => $request->all()
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

        $ruta = $this->ruta->findOrfail($id);
        $ruta->delete();
        $respuesta = [
        'status' => 'ok',
        'message' => $this->mensaje_exitoso
        ];

    }

    public function permiso($nombre)
    {   

        $ruta = $this->ruta->where('nombre', $nombre)->first();

        //Existe la ruta
        $permisos = null;
        $respuesta = [];
        if(is_null($ruta)){
            return response(['error' => 'La ruta no se encuentra registrada.', 'estado' => false], 404);
        }else if(!$ruta->libre){
            $rol = \Auth::user()->rol->getId();
           
            if($rol==1){
                $permisos = Db::table($this->ruta->getTable())->select("nombre")
                        //->join($this->permiso->getTable(),$this->ruta->getTable().".id","ruta_id")
                        ->where($this->ruta->getTable().'.activo', '1')
                        //->where("rol_id",Db::raw($rol))
                        ->where($this->ruta->getTable().".nombre","like",Db::raw("'".explode(".",$nombre)[0]."%'"))
                        // ->orWhere(function($query){
                        //         $query->where("libre",1);
                        //     })
                        ->get();
            }else{
                $permisos = Db::table($this->ruta->getTable())->select("nombre")
                        ->join($this->permiso->getTable(),$this->ruta->getTable().".id","ruta_id")
                        ->where($this->ruta->getTable().'.activo', '1')
                        ->where("rol_id",Db::raw($rol))
                        ->where($this->ruta->getTable().".nombre","like",Db::raw("'".explode(".",$nombre)[0]."%'"))
                        ->orWhere(function($query){
                                $query->where("libre",1);
                            })
                        ->get();
            
            }                     

            if($rol != 1)
            {
                $existe_permiso = $this->permiso->where('ruta_id', $ruta->id)
                                                ->where('rol_id', $rol)
                                                 ->where('activo', '1')
                                                ->first();
                if(is_null($existe_permiso)){
                    return response(['error' => 'Usted no posee permiso a esta seccion.', 'estado' => false,"licenses"=>$permisos], 403);
                }
            }
        }
        return  response(['status' => 'Ok', 'message' => 'Permiso concedido', 'estado' => true,"licenses"=>$permisos], 200);
    }
}
