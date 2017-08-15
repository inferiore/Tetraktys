<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class EstadoUsuario extends Intermediate
{
    protected $table = 'estado_usuario';
    protected $fillable = ['estado_id', 'usuario_id'];

}
