<?php

namespace Observers\Configuracion;

use Carbon\Carbon;

class UserObserver
{
    public function updating($user)
    {
    	// $user->UsFechaRegistro = Carbon::now()->format('d-m-Y H:i:s');
    	// $user->UNumeroId = 10;
    	debug('prueba');
    }
}
