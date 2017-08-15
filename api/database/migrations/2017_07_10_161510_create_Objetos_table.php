<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateObjetosTable extends Migration {

	public function up()
	{
		Schema::create('objetos', function(Blueprint $table) {
			$table->increments('Id');
			$table->string('Controlador');
			$table->string('Nombre');
			$table->string('Notificacion');
			$table->string('ColEstado');
			$table->integer('IdUsuarioRegistro');
			$table->integer('IdUsuarioEdicion');
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('Objetos');
	}
}