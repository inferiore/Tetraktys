<?php

namespace Validaciones\Configuracion;

use Illuminate\Foundation\Http\FormRequest;
use Validaciones\ApiRequest;

class TipoDePermisoRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return 
            [
             'TdpNombre' => "required", 
             'TdpDescripcion' => "required",
             'TdpNombreUrl' => 'required',
             'TdpNombreUrlAux'=>'required',
             'TdpComportamientoAux'=>'required',
             'TdpComportamientoAux'=>'required',
             'TdpComportamiento'=>'required'];

    }

    
}
