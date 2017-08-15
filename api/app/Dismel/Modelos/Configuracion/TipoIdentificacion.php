<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class TipoIdentificacion extends Intermediate
{
    protected $table = 'TdITiposId';
    protected $primaryKey = 'TdipId';
    protected $fillable = [];
    const CREATED_AT = 'TdipFechaRegistro';
    const UPDATED_AT = 'TdipFehaEdicion';
    // protected $hidden = ['CaFechaRegistro', 'CaFechaEdicion'];
    protected $casts = [
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
        return $query->where('TdipIdEstadoAux', '1')->orderBy('TdipId', 'desc');
    }

}
