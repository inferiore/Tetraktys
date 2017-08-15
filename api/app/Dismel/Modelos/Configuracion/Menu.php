<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class Menu extends Intermediate
{
    protected $table = 'menu';
    protected $fillable = [
         'padre_id', 'nombre', 'activo', 'icono', 'prioridad', 'estado'
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $casts = [
        'activo'
    ];

    // //hayder
    // public function children()
    // {
    // 	// hasMany(RelatedModel, foreignKeyOnRelatedModel = menu_id, localKey = id)
    // 	return $this->hasMany('Modelos\Configuracion\Menu', 'padre_id', 'id')
    //                 // ->where('activo', '1')
    //                 ->with('children')
    //                 ->orderBy('prioridad');
    // }

    // //hayder
    // public function hijos()
    // {
    //     // hasMany(RelatedModel, foreignKeyOnRelatedModel = menu_id, localKey = id)
    //     return $this->hasMany('Modelos\Configuracion\Menu', 'padre_id', 'id')
    //                 // ->where('activo', '1')
    //                 ->with('hijos')
    //                 ->orderBy('prioridad');
    // }

    public function children()
    {
        // hasMany(RelatedModel, foreignKeyOnRelatedModel = menu_id, localKey = id)
        return $this->hasMany('Modelos\Configuracion\Menu', 'padre_id', 'id')
                    //->where('padre_Id', '1')
                     ->with('children')
                    ->orderBy('prioridad');
    }

    public function scopeActivo($query)
    {
        return $query->where('activo', '1');
    }

}
