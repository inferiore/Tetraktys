<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class MenuRol extends Intermediate
{
    protected $table = 'menu_rol';
    public $timestamps=false;
    protected $fillable = [
        'menu_id', 'rol_id', 'activo'];
    protected $hidden = [
        'created_at', 'updated_at'
    ];


 public function rol()
    {
        // belongsTo(RelatedModel, foreignKey = estado_id, keyOnRelatedModel = id)
        return $this->belongsTo('Modelos\Configuracion\menu', 'rol_id', 'id')
          ->with('menu');
    }


}
