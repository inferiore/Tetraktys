<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class Canal extends Intermediate
{
    protected $table = 'Pre_Canales';
    protected $primaryKey = 'CaId';
    protected $fillable = [];
    const CREATED_AT = 'CaFechaRegistro';
    const UPDATED_AT = 'CaFechaEdicion';
    protected $hidden = ['CaFechaRegistro', 'CaFechaEdicion'];
    protected $casts = [
        'CaIdEstado' => 'bool'
    ];

    public function scopeFilter($query, $inputs)
    {
        // if($tmp = @$inputs['RolNombre'])
        //     $query->where('Rolnombre', 'like', '%'.$tmp.'%');
        // if($tmp = @$inputs['RolDescripcion'])
        //     $query->where('RolDescripcion', 'like', '%'.$tmp.'%');
        // if ($tmp=@$inputs["RolIdEstado"])
        //     $query->whereIn('RolIdEstado', explode(',', $inputs["RolIdEstado"]));
        return $query;
    }

    public function scopeActivo($query)
    {
        return $query->where('CaIdEstado', '1')->orderBy('CaNombreCanal');
    }

}
