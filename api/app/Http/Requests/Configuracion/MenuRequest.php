<?php

namespace Validaciones\Configuracion;

use Validaciones\ApiRequest;
use Illuminate\Foundation\Http\FormRequest;

class MenuRequest extends ApiRequest
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
        switch ($this->method()) {
            case 'PUT':
                return [
                    
                    'nombre'    => 'required',
                    'icono'     => 'required',
                    'estado'    => 'required'
                ];
            case 'PATCH':
                return [
                    
                    'nombre'    => 'required',
                    'icono'     => 'required',
                    'estado'    => 'required'
                ];
            case 'POST':
                return [
                    
                    'nombre'    => 'required',
                    'icono'     => 'required',
                    'estado'    => 'required'
                ];
            default: break;
        }
    }

    public function response(array $errors)
    {    
        $respuesta = [   
                        'status'  => 'Bad Request',
                        'errors'  => $errors
                    ];
         return response($respuesta, 400);
    }
}
