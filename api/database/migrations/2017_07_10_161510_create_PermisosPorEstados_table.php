<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePermisosPorEstadosTable extends Migration {

	public function up()
	{
		Schema::create('PermisosPorEstados', function(Blueprint $table) {
			$table->increments('Id');
			$table->integer('IdRuta');
			$table->integer('IdObjeto')->unsigned();
			$table->integer('IdRol');
			$table->integer('IdEstado')->default('1');
			$table->integer('IdUsuarioRegistro');
			$table->integer('IdUsuarioEdicion');
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('PermisosPorEstados');
	}
}