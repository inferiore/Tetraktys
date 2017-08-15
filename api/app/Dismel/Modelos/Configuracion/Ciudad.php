<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class Ciudad extends Intermediate
{
    protected $table = 'ciudades';
    protected $fillable = ['nombre', 'abreviatura'];

    
}
