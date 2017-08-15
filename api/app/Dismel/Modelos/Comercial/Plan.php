<?php

namespace Modelos\Comercial;

use Modelos\Intermediate;
use Modelos\Configuracion\Estado;

class Plan extends Intermediate
{
    protected $table = 'planes';
    protected $fillable = [

    ];

    public function estado()
    {
    	// belongsTo(RelatedModel, foreignKey = estado_id, keyOnRelatedModel = id)
    	return $this->belongsTo(Estado::class, 'estado_id', 'id');
    }
    public function getEstado()
    {
    	return $this->estado_id;
    }
    
}