<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;

class Configuracion extends Intermediate 
{

    protected $table = 'Configuraciones';
    protected $primaryKey = 'Id';
    public $timestamps = true;
    protected $fillable = array('IdPadre', 'IdHijo', 'Foranea', 'Primaria');
    protected $hidden = ['created_at', 'updated_at'];



public function scopeFilter($query, $inputs)
    {
        if($tmp = @$inputs['Controlador']){
            $query->where(function($where) use($tmp) { 
            	$where->where('p.Controlador', 'like', '%'.$tmp.'%')
            		->orWhere('h.Controlador', 'like', '%'.$tmp.'%');
            	});
        }
        if($tmp = @$inputs['Nombre']){
        	$query->where(function($where)  use($tmp){ 
            	$where->where('p.Nombre', 'like', '%'.$tmp.'%')
            	->orWhere('h.Nombre', 'like', '%'.$tmp.'%');
            });
        }	
        
  //       if ($tmp=@$inputs["Notificacion"])
  //           $query->where('Notificacion', 'like', '%'.$tmp.'%');
		// if ($tmp=@$inputs["ColEstado"])
  //           $query->where('ColEstado','like',  '%'.$tmp.'%');


        return $query;
    }

public function scopeTables($query)
    {

    	$query->join('Objetos as p','p.Id','=','IdPadre')
    	->join('Objetos as h','h.Id','=','IdHijo');
        return $query;
    }

  public function scopeSelectIndex($query)
  	{
  		$query->select(
  			\DB::raw(
  				"Configuraciones.*,p.Controlador,p.Nombre,p.Notificacion,p.ColEstado,h.Controlador as hControlador,h.Nombre as hNombre,h.Notificacion as hNotificacion,h.ColEstado as hColEstado"));
  	}  



}