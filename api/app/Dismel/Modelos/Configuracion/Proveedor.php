<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class Proveedor extends Intermediate
{
    protected $table = 'Pre_Proveedores';
    protected $fillable = [];
    protected $casts = [
        
    ];

    // public $timestamps = false;
    
    public function scopeFilter($query, $inputs)
    {
        if($tmp = @$inputs['nombre'])
            $query->where('nombre', 'like', '%'.$tmp.'%');
    }

    public function scopeActivo($query)
    {
        return $query->where('PrvIdEstado', '1')
                    ->where('PrvIdEstadoAux', '1')
                    ->orderBy('PrvNombre');
    }

}