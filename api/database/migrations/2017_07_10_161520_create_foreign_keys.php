<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateForeignKeys extends Migration {

	public function up()
	{
		Schema::table('PermisosPorEstados', function(Blueprint $table) {
			$table->foreign('IdObjeto')->references('Id')->on('Objetos')
						->onDelete('no action')
						->onUpdate('no action');
		});
		Schema::table('Configuraciones', function(Blueprint $table) {
			$table->foreign('IdPadre')->references('Id')->on('Objetos')
						->onDelete('no action')
						->onUpdate('no action');
		});
		Schema::table('Configuraciones', function(Blueprint $table) {
			$table->foreign('IdHijo')->references('Id')->on('Objetos')
						->onDelete('no action')
						->onUpdate('no action');
		});

		Schema::table('PermisosPorEstados', function(Blueprint $table) {
			$table->foreign('IdRuta')->references('Id')->on('Rutas')
						->onDelete('no action')
						->onUpdate('no action');
		});
			
	}

	public function down()
	{
		Schema::table('PermisosPorEstados', function(Blueprint $table) {
			$table->dropForeign('PermisosPorEstados_IdObjeto_foreign');
		});
		Schema::table('Configuraciones', function(Blueprint $table) {
			$table->dropForeign('Configuraciones_IdPadre_foreign');
		});
		Schema::table('Configuraciones', function(Blueprint $table) {
			$table->dropForeign('Configuraciones_IdHijo_foreign');
		});

		Schema::table('PermisosPorEstados', function(Blueprint $table) {
			$table->dropForeign('PermisosPorEstados_IdRuta_foreign');
		});
			
	}
}