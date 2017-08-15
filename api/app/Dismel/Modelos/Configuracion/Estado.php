<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class Estado extends Intermediate
{
    protected $table = 'Act_Estados';
    protected $primaryKey = 'EstId';
    protected $connection='Actividades';
    protected $fillable = array('EstNombre', 'EstDescripcion', 'EstIdEstado','EstIdTipoObjeto'
        ,'EstClass','EstMensaje','EstFinalizacion');
    const CREATED_AT = 'EstFechaRegistro';
    const UPDATED_AT = 'EstFechaEdicion';
    // protected $dates = ['RolFechaRegistro', 'RolFechaEdicion'];

    public function scopeFilter($query, $inputs)
    {
        if($tmp = @$inputs['EstNombre'])
            $query->where('EstNombre', 'like', '%'.$tmp.'%');

        if($tmp = @$inputs['EstDescripcion'])
            $query->where('EstDescripcion', 'like', '%'.$tmp.'%');
        
        if ($tmp=@$inputs["EstIdTipoObjeto"] && is_array($inputs["EstIdTipoObjeto"]) ){
            $query->whereIn('EstIdTipoObjeto',$inputs["EstIdTipoObjeto"]);
            
        }
        // if ($tmp=@$inputs["EstIdTipoObjeto"] && !is_array($inputs["EstIdTipoObjeto"]) ){
        //     $query->where('EstIdTipoObjeto',"=",$inputs["EstIdTipoObjeto"]);
        // }

    }
}
