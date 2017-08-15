<?php 

namespace Repositorios\Configuracion;

use Modelos\Configuracion\User;

class UsuarioRepositorio extends Repositorio
{
	public function getModel()
	{
		return new User;
	}	
}