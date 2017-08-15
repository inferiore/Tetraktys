<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateConfiguracionesTable extends Migration {

	public function up()
	{
		Schema::create('Configuraciones', function(Blueprint $table) {
			$table->increments('Id');
			$table->integer('IdPadre')->unsigned();
			$table->integer('IdHijo')->unsigned();
			$table->string('Foranea');
			$table->string('Primaria');
			$table->timestamps();
			$table->integer('IdUsuarioRegistro');
			$table->integer('IdUsuarioEdicion');
		});
	}

	public function down()
	{
		Schema::drop('Configuraciones');
	}
}