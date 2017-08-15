<?php

namespace App\Exceptions;

/* 
	This class is used to manage exceptions about system control access, for example not permission, user role disabled and disabled user
 	for used only call a new instance for example 
 	throw new PermisoException(String $message,long $code);
	please show handler.php file
	good luck
 */

class PermisoException extends \Exception {


}