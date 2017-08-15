<?php

namespace Validaciones\Configuracion;

use Illuminate\Foundation\Http\FormRequest;
use Validaciones\ApiRequest;
use Illuminate\Validation\rule;


class RolRequest extends ApiRequest
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
                     'RolNombre' => "required",//Rule::unique('Roles')->ignore($this->rol, 'RolId'),
                     'RolDescripccion' => 'required|min:4',
                     'RolIdEstado' => 'required'



                ];
            case 'POST':
                return [
                    'RolNombre' => 'required|unique:roles,RolNombre',
                    'RolDescripccion' => 'required',
                    'RolIdEstado' => 'required'
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
