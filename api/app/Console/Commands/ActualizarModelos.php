<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Modelos\Configuracion\Objeto;

class ActualizarModelos extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'actualizar_modelos';
    protected $objeto;
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Actualizar Tabla de Modelos';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Objeto $objeto)
    {
        parent::__construct();
        $this->objeto = $objeto;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $objetos = $this->objeto->updateFiles();
    }
}
