<?php

use Illuminate\Http\Request;


Route::group(
	['middleware' => ['auth:api','permisos']], function () {
	Route::get('rutas/permiso/{nombre}', ['as' => 'rutas.permiso', 'uses' => 'Configuracion\RutaController@permiso']);
	Route::get('home', ['as' => 'app.default', 'uses' => 'Configuracion\HomeController@index']);

});	
Route::group(['middleware' => [
	'auth:api', 
	'permisos','activo']], function () {
	
	Route::resource('notificaciones', 'Configuracion\NotificacionController', ['only' => ['index', 'show']]);
	Route::resource('rutas', 'Configuracion\RutaController');
	Route::patch('usuarios/{id}/password', ['as' => 'usuario.password', 'uses' => 'Configuracion\UsuarioController@password']);
	Route::resource('usuarios', 'Configuracion\UsuarioController');
	Route::resource('roles', 'Configuracion\RolController');
	Route::resource('permisos', 'Configuracion\PermisoController');	
	Route::resource('configuraciones', 'Configuracion\ConfiguracionController');
	Route::resource('pqr', 'Herramientas\PqrController');
	Route::get("objetos/{id}/getattres", ['as' => 'objetos.getattres', 'uses' =>'Configuracion\ObjetoController@getAtters']);
	Route::resource('objetos', 'Configuracion\ObjetoController');
	Route::get('menu/listar/{rol_id?}', ['as' => 'menu.listar', 'uses' => 'Configuracion\MenuController@listar']);
	Route::put('menu/copiar/{id}', ['as' => 'menu.copiar', 'uses' => 'Configuracion\MenuController@copiar']);
	Route::resource('menu', 'Configuracion\MenuController');
	Route::resource('menurol', 'Configuracion\MenuRolController');

	Route::resource('permisosporestado', 'Configuracion\PermisoPorEstadoController');


});	
	


	

