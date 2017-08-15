<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class EloquentListener
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

    /**
     * Handle the event.
     *
     * @param  eloquent.saved  $event
     * @return void
     */
    public function handle($name, $model)
    {
        $modelo = $model[0];
        // $modelo = $modelo->find($modelo->getKey());
        // session()->flash('objeto', $modelo);
        // debug($model->getTimestamp());
    }
}
