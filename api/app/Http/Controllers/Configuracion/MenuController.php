<?php

namespace App\Http\Controllers\Configuracion;

use Auth;
use Illuminate\Http\Request;
use Modelos\Configuracion\Rol;
use Modelos\Configuracion\User;
use Modelos\Configuracion\Menu;
use Modelos\Configuracion\MenuRol;
use App\Http\Controllers\Controller;
use Validaciones\Configuracion\MenuRequest;

class MenuController extends Controller
{
    protected $menu;
    protected $rol;

    public function __construct(Menu $menu, Rol $rol)
    {
        $this->menu =  $menu;
        $this->rol =  $rol;
    }

    public function listar($rol_id=null)
    {
        $rol = Auth::user()->rol;
        if($rol_id!=null){
            $rol=Rol::find($rol_id);
        }
        $roles = $this->rol->activo()->pluck('RolNombre', 'RolId');
        $menu=$rol->getMenuForAdmin();
        $user = Auth::user();
        $usuario = [
                    'nombre'     => strtolower($user->UNombres.' '.$user->UApellido),
                    'correo'     => $user->UsCorreo,
                    'rol_id'     => $user->rol->RolId,
                    'nombre_rol' => $user->rol->RolNombre
                ];

        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('menu', 'usuario','roles')
        ];
        return response($respuesta, 200);
    }
    public function index(Request $request)
    {
        $menu = $this->menu->get();
        if($rol = @$request->input('rol_id'))
        {
            $rol = $this->rol->findOrFail($rol);
            $menu = $rol->getMenuForAdmin();
        }
        $roles = $this->rol->activo()->pluck('RolNombre', 'RolId');
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('menu', 'roles', 'sql')
        ];
        return response($respuesta, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = $this->rol->activo()->pluck('RolNombre', 'RolId');
        $respuesta = [
                        'status'    => 'ok',
                        'data'      => compact('roles')
                    ];
        return response($respuesta);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MenuRequest $request)
    {
        $menu =  $this->menu->fill($request->all());
        $menu->save();

        if($menu->exists) {
            $attr= ['menu_id'=>$menu->id, 'rol_id'=>1, 'activo'=>1];
            $menuRol=  (new MenuRol())->fill($attr); 
            $menuRol->save();
        }

        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('menu')
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
        

        $usuario= Auth::user();
        $usuario->nombre= Auth::user()->UNombres." ".Auth::user()->UPApellido;
        $rol = Auth::user()->rol;
        $menu = $rol->getMenu();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' =>  compact('menu','usuario')
        ];
        return response($respuesta, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $opcion = $this->menu->findOrFail($id);
        $roles = $this->rol->activo();
        $respuesta = [
            'status' => 'ok',
            'message' => $this->mensaje_exitoso,
            'data' => compact('opcion', 'roles')
        ];
        return response($respuesta, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(MenuRequest $request, $id)
    {

        
        $opcion = $this->menu->findOrFail($id);
        $opcion->fill($request->all());
        $opcion->save();
        $respuesta = [
                        'status' => 'ok',
                        'message' => $this->mensaje_exitoso,
                        'data' => compact('opcion')
                    ];
        return response($respuesta);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $menu = $this->menu->findOrFail($id);
        if($menu->activo == 1)
            $menu->activo = 0;
        else
            $menu->activo = 1;

        $menu->save();
        $respuesta = [
            'status' => 'ok',
            'message' => 'El recurso se ha desactivado exitosamente',
            'data' => compact('menu')
        ];
        return response($respuesta, 200);
    }
     public function copiar($id)
    {
        //insert padre
        $menuRol = (new MenuRol)->firstOrNew([
        'menu_id'=>$id, 'rol_id'=>Request()->all()["rol_id"]]);
        $menuRol->activo=1;
         $menu = $this->menu->findOrFail($id);
        $menuRol->save();
        
        //insert hijo
        foreach ($menu->children as $value) {

            $menuRol = (new MenuRol)->firstOrNew([
            'menu_id'=>$value->id, 'rol_id'=>Request()->all()["rol_id"]]);
            $menuRol->activo=1;
            $menuRol->save();
               
        }
        $menu=$this->rol->findOrFail(Request()->all()["rol_id"])->getMenu();


        
        $respuesta = [
            'status' => 'ok',
            'message' => 'El recurso se ha desactivado exitosamente',
            'data' => compact('menu')
        ];
        return response($respuesta, 200);
    }
}
