<?php

namespace Modelos\Configuracion;

use Route;
use Modelos\Intermediate;

class Ruta extends Intermediate
{
    protected $table = 'rutas';
    protected $fillable = ['nombre', 'controlador', 'libre', 'activo'];
    protected $casts = [
        'libre' => 'bool',
        'activo' => 'bool'
    ];

    public $timestamps = false;
    
    public function scopeFilter($query, $inputs)
    {
       
        if($tmp = @$inputs['nombre'])
            $query->where('nombre', 'like', '%'.$tmp.'%');
        if($tmp = @$inputs['controlador'])
            $query->where('controlador', 'like', '%'.$tmp.'%');
        if($tmp = @$inputs["libre"])
            $query->whereIn($inputs["libre"]);
    }

    public function setLibreAttribute($value)
    {
        $this->attributes['libre'] = $value == 'true' ? 1 : 0 ;
    }

    public function setActivoAttribute($value)
    {
        $this->attributes['activo'] = $value == 'true' ? 1 : 0 ;
    }

    public function rutas()
    {
        return $this->belongsToMany('Modelos\Configuracion\Rol', 'permisos', 'ruta_id', 'rol_id');
    }

    public static function updateRutas(){
        $rutas = Route::getRoutes();
        foreach ($rutas as $key => $ruta) 
        {
            if($ruta->getPrefix() == 'api')
            {
                $controlador = $ruta->getActionName();
                $attr = [
                    'nombre'      => $ruta->getName(),
                    'controlador' => $controlador
                ];
                $ruta = Ruta::firstOrNew(['controlador' => $controlador]);
                $ruta->fill($attr);
                $ruta->save();
            }
        }
    } 
}