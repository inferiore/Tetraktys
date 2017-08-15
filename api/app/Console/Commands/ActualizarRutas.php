<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Modelos\Configuracion\Ruta;

class ActualizarRutas extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'actualizar_rutas';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Comando para actualizar rutas del sistema';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // $rutas = \Route::getRoutes();
        // foreach ($rutas as $key => $ruta) 
        // {
        //     if($ruta->getPrefix() == 'api')
        //     {
        //         $controlador = $ruta->getActionName();
        //         $attr = [
        //             'nombre'      => $ruta->getName(),
        //             'controlador' => $controlador,
        //             'libre'       => 0
        //         ];
        //         $ruta = Ruta::firstOrNew(['controlador' => $controlador]);
        //         $ruta->fill($attr);
        //         $ruta->save();
        //     }
        // }
       Ruta::updateRutas();   
    }
}
