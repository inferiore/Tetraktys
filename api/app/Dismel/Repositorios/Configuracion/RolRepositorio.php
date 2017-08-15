<?php 

namespace Repositorios\Configuracion;

use Modelos\Configuracion\Rol;

class RolRepositorio extends Repositorio
{
	public function getModel()
	{
		return new Rol;
	}

	public function active()
	{
		return $this->model;
	}

}