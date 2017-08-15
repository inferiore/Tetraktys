<?php

namespace Modelos\Configuracion;

use Carbon\Carbon;
use Jenssegers\Date\Date;
use Modelos\Configuracion\Estado;
use Modelos\Configuracion\Objeto;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    
    protected $table = 'Usuarios';
    protected $primaryKey = 'UId';
    public $timestamps = true;
    const UPDATED_AT = 'UsFechaEdicion';
    const CREATED_AT = 'UsFechaRegistro';
    protected $dateFormat = 'Y-m-d H:i:s.u';
    protected $fillable = ['UNombres', 'UApellido', 'USApellido', 'UsCorreo', 'UsCodigo', 'UsIdRol', 'UsIdTipoId', 'UNumeroId', 'UsIdProveedor', 'UsIdCanal', 'password', 'UsIdEstadoAux'];
    protected $hidden = [
        'password', 'remember_token',
        'UsFechaRegistro', 'UsFechaEdicion'
    ];
    protected $casts = [
        'UsIdEstadoAux' => 'bool'
    ];
    public function fromDateTime($value)
    {
        return Carbon::parse(parent::fromDateTime($value))->format('Y-d-m H:i:s');
    }
    public function scopeFilter($query, $inputs)
    {
        if($tmp = @$inputs['UNombres'])
        {
            $query->where(function($q) use ($tmp){
                $q->orWhere('UNombres', 'like', '%'.$tmp.'%');
                $q->orWhere('UApellido', 'like', '%'.$tmp.'%');
            });
        }
        if($tmp = @$inputs['UsIdRol'])
            $query->whereIn('UsIdRol', explode(',', $inputs['UsIdRol']));
        if($tmp = @$inputs['UsIdCanal'])
            $query->whereIn('UsIdCanal', explode(',', $inputs['UsIdCanal']));
        if($tmp = @$inputs['UsCodigo'])
            $query->where('UsCodigo', 'like', '%'.$inputs['UsCodigo'].'%');
        if($tmp = @$inputs['UsCorreo'])
            $query->where('UsCorreo', 'like', '%'.$inputs['UsCorreo'].'%');
        return $query;
    }
    public function rol()
    {
        return $this->belongsTo('Modelos\Configuracion\Rol', 'UsIdRol', 'RolId');
    }

    public function canal()
    {
        // belongsTo(RelatedModel, foreignKey = canal_id, keyOnRelatedModel = id)
        return $this->belongsTo('Modelos\Configuracion\Canal', 'UsIdCanal', 'CaId');
    }

    public function proveedor()
    {
        // belongsTo(RelatedModel, foreignKey = canal_id, keyOnRelatedModel = id)
        return $this->belongsTo('Modelos\Configuracion\Proveedor', 'UsIdProveedor', 'PrvId');
    }

    public function dni()
    {
        return $this->belongsTo('Modelos\Configuracion\TipoIdentificacion', 'UsIdTipoId', 'TdipId');
    }

    public function findForPassport($username)
    {
        return $this->where('UsCorreo', $username)->first();
    }
    // public function getUsFechaEdicionAttribute($value)
    // {
    //     return new Date($value);
    // }
    public function getId()
    {
        return $this->UId;
    }
    public function setPasswordAttribute($value='')
    {
        $this->attributes['password'] = bcrypt($value);
    }


}
