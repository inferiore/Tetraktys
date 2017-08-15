<?php

namespace Validaciones\Configuracion;

use Illuminate\Foundation\Http\FormRequest;
use Validaciones\ApiRequest;


class UsuarioRequest extends ApiRequest
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
                    'UsIdRol' => 'required|numeric',
                    'UNombres' => 'required',
                    'UApellido' => 'required',
                    'USApellido' => 'required',
                    'UNumeroId' => 'required|numeric',
                    'UsCorreo' => 'required|unique:Usuarios,UsCorreo,'.$this->usuario.',UId',
                    'UsCodigo' => 'required|numeric',
                    'UsIdProveedor' => 'required|numeric',
                    'UsIdCanal' => 'required|numeric',
                    'UsIdTipoId' => 'required|numeric'
                ];
            case 'PATCH':
                return [
                    'password' => 'required',
                    'confirmar_password' => 'required|same:password'
                ];
            case 'POST':
                return [
                    'UsIdRol' => 'required|numeric',
                    'UNombres' => 'required',
                    'UApellido' => 'required',
                    'USApellido' => 'required',
                    'UNumeroId' => 'required|numeric',
                    'UsCorreo' => 'required|unique:Usuarios,UsCorreo',
                    'UsCodigo' => 'required|numeric',
                    'password' => 'required',
                    'confirmar_password' => 'required|same:password',
                    'UsIdProveedor' => 'required|numeric',
                    'UsIdCanal' => 'required|numeric',
                    'UsIdTipoId' => 'required|numeric'
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
