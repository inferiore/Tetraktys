<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class EstadoGenerico extends Intermediate
{
    protected $table = 'Estado';
    protected $fillable = ['StNameState', 'StIdState'];
    protected $primaryKey = 'StId';
}
