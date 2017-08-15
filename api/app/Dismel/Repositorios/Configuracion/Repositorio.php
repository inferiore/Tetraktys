<?php 

namespace Repositorios\Configuracion;

use Illuminate\Database\Eloquent\Scope;

abstract class Repositorio
{
	protected $model;

	function __construct()
	{
		$this->model = $this->getModel();
	}
	
	abstract public function getModel();
}