<?php
namespace Modelos\Configuracion;

use Modelos\Intermediate;

class TipoDePermiso extends Intermediate
{

    //protected $layout = 'layouts.master';
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'TdpTiposDePermisos';
    protected $primaryKey = 'TdpId';
    protected $ColNombre = 'TdpNombre';
    protected $NombreModelo = ' Tipos de Permiso';
    protected $NombreUrl = 'tiposdepermiso';
    public $NombreModeloPlural = ' Tipos De Permiso';
    protected $fillable = ['TdpNombre', 'TdpDescripcion', 'TdpNombreUrl', 'TdpNombreUrlAux', 'TdpIdEstadoAux','TdpComportamiento','TdpComportamientoAux'];
    public $timestamps = false;

    // const CREATED_AT = 'created_at';
    // const UPDATED_AT = 'updated_at';


    public function scopeFilter($query, $inputs)
    {
        $query->where("TdpIdEstadoAux",1);
        if($test = @$inputs['Tdpnombre'])
            $query->where('Tdpnombre', 'like', '%'.$test.'%');

        if($test = @$inputs['Descripcion'])
            $query->where('TdpDescripcion', 'like', '%'.$test.'%');
    
    }
    
}
