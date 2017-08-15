<?php

namespace Validaciones\Configuracion;

use Illuminate\Foundation\Http\FormRequest;
use Validaciones\ApiRequest;
use Illuminate\Validation\rule;


class PermisoPorEstadoRequest extends ApiRequest
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
     * @return array array('IdRuta', 'IdObjeto', 'IdRol', 'IdEstado');
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'PUT':
                return [
                    'IdEstado'=>'required',
                    'IdRol'=>'required',
                    'IdRuta'=>'required',
                    'IdObjeto'=>'required'
                ];
            case 'POST':
                return [
                    'IdEstado'=>'required',
                    'IdRol'=>'required',
                    'IdRuta'=>'required',
                    'IdObjeto'=>'required'
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
