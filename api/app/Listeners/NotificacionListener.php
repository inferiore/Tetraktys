<?php

namespace App\Listeners;

use Modelos\Intermediate;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotificacionListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    
    public function handle($name, $model)
    {
        $modelo = $model[0];
        if($modelo instanceof Intermediate)
        {
            $objeto =  $modelo->getObjeto();
            if(!is_null($objeto->class_email))
            {
                $estado_actual = session('objeto');
                $estado_nuevo = $modelo::find($modelo->id);
                if($estado_actual->getEstado() != $estado_nuevo->getEstado())
                {
                    $users = $modelo->estado->usuarios()->get();
                    \Notification::send($users, new $objeto->class_email($modelo));
                }
                session()->forget('objeto');
            }
        }
    }
}
