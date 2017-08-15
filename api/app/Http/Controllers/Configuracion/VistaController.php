<?php 

namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\Controller;
use Modelos\Configuracion\Vista;
use Validaciones\Configuracion\VistaRequest;

class VistaController extends Controller 
{

    protected $vista;

    public function __construct(Vista $vista)
    {
        $this->vista = $vista;
    }

    /**
    * Display a listing of the resource.
    *
    * @return Response
    */
    public function index()
    {
        $vistas = $this->vista->filter(request()->all())->get();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('vistas')
        ];
        return response($respuesta, 200);
    }

    public function show($nombre)
    {
        $vista = $this->vista->where('nombre', $nombre)
                            ->first();
        if(is_null($vista))
        {
            return response(['status' => false,'message' => 'La vista no se encuentra registrada']);
        }
        return response(['prueba'], 200);
    }

    public function create(Request $request)
    {
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => ''
        ];
        return response($respuesta, 200);   
    }

    public function store(VistaRequest $request)
    {
        $this->vista->fill($request->all());
        $this->vista->save();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso
        ];
        return response($respuesta, 200);
    }

    public function edit($id)
    {
        # code...
    }

    public function update(VistaRequest $request, $id)
    {
        $this->vista->find($id);
        $this->vista->fill($request->all());
        $this->vista->save();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso
        ];
        return response($respuesta, 200);   
    }


}