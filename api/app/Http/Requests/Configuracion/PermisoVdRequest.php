<?php

namespace Validaciones\Configuracion;

use Illuminate\Foundation\Http\FormRequest;
use Validaciones\ApiRequest;
use Illuminate\Validation\rule;


class PermisoVdRequest extends ApiRequest
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
                    'PvdIdRol' => 'required',//Rule::unique('Roles')->ignore($this->rol, 'RolId'),
                    'PvdIdVista' => 'required',
                    'PvdIdPermiso' => 'required',
                    'PvdIdEstado' => 'required',
                    'PvdActivo' => 'required',
                      
                ];
            case 'POST':
                return [
                    'PvdIdRol' => 'required',//Rule::unique('Roles')->ignore($this->rol, 'RolId'),
                    'PvdIdVista' => 'required',
                    'PvdIdPermiso' => 'required',
                    'PvdIdEstado' => 'required',
                    'PvdActivo' => 'required',
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
