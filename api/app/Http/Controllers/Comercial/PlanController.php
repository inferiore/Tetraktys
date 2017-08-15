<?php

namespace App\Http\Controllers\Comercial;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Repositorios\Comercial\PlanRepo;
use \DB;
// use Validaciones\Comercial\PlanRequest;

class PlanController extends Controller
{
    protected $plan;

    public function __construct(PlanRepo $plan)
    {
        $this->plan = new $plan;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $planes = $this->plan->select('PlaId', 'PlaNombre', 'PlaVigencia_FechaInicial', 'PlaVigencia_FechaFinal', 'PrvNombre', 'PlaInversion', 'CiuAbrebiatura', 'EstClass', 'EstNombre', DB::raw('sum(isnull(Ejecutado,0)) as Ejecutado'), DB::raw('sum(isnull(Pagado,0)) as Pagado'), DB::raw('sum(isnull(XPagar,0)) as XPagar') )
                    ->join('Act_Estados', function ($q)
                    {
                        $q->on('PlaIdEstado', '=', 'EstId');
                        $q->on('PlaIdObjeto', '=', 'EstIdTipoObjeto');
                    })
                    ->join('_sigav.dbo.V_Proveedores', 'PlaIdProveedor', '=', 'PrvId')
                    ->join('_sigav.dbo.Ciudades', 'CiuId', '=', 'PlaIdCiudad')
                    ->leftJoin('V_ContabilidadDeActividades', 'AccIdPLan', '=', 'PlaId')
                    ->where('PlaIdEstadoAux', '1')
                    ->where('CiuIdEstadoActividad', '1')
                    ->groupBy('PlaNombre', 'PlaVigencia_FechaInicial', 'PlaVigencia_FechaFinal', 'PrvNombre', 'PlaInversion', 'CiuAbrebiatura', 'EstClass', 'EstNombre', 'PlaId', 'PlaIdCiudad')
                    ->orderBy('PlaId')
                    ->paginate();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('planes')
        ];
        return response($respuesta, 200);
    }

    // /**
    //  * Show the form for creating a new resource.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function create()
    // {
    //     //
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
    //  */
    // public function store(PlanRequest $request)
    // {
    //     $this->plan->fill($request->all());
    //     $estado = $this->plan->save();
    //     $codigo = 200;
    //     $respuesta = [];
    //     if($estado){
    //         $respuesta = [
    //             'status' => 'ok',
    //             'message' => $this->mensaje_exitoso
    //         ];
    //     }else{
    //         $respuesta = [
    //             'status' => 'Internal Server Error',
    //             'message' => 'La solicitud del navegador no se ha podido completar porque se ha producido un error inesperado en el servidor.'
    //         ];
    //         $codigo = 500;
    //     }
    //     return response($respuesta, $codigo);
    // }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function show($id)
    // {
    //     $menu = $this->plan->findOrFail($id);
    //     $respuesta = [
    //         'status' => 'ok',
    //         'message' => $this->mensaje_exitoso,
    //         'data' => $menu
    //     ];
    //     return response($respuesta, 200);
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function edit($id)
    // {
    //     $menu = $this->plan->findOrFail($id);
    //     $respuesta = [
    //         'status' => 'ok',
    //         'message' => $this->mensaje_exitoso,
    //         'data' => $menu
    //     ];
    //     return response($respuesta, 200);
    // }

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function update(PlanRequest $request, $id)
    // {
    //     $menu = $this->plan->findOrFail($id);
    //     $menu->fill($request->all());
    //     $estado = $menu->save();
    //     if($estado){
    //         $respuesta = [
    //             'status' => 'ok',
    //             'message' => $this->mensaje_exitoso
    //         ];
    //         $codigo = 200;
    //     }else{
    //         $respuesta = [
    //             'status' => 'Internal Server Error',
    //             'message' => 'La solicitud del navegador no se ha podido completar porque se ha producido un error inesperado en el servidor.'
    //         ];
    //         $codigo = 500;
    //     }
    //     return response($respuesta, $codigo);
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy($id)
    // {
    //     $menu = $this->plan->findOrFail($id);
    //     $menu->delete();
    //     $respuesta = [
    //         'status' => 'ok',
    //         'message' => 'El recurso se ha eliminado exitosamente',
    //     ];
    //     return response($respuesta, 200);
    // }
}
