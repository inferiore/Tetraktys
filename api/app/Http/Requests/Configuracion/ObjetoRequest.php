<?php

namespace Validaciones\Configuracion;

use Illuminate\Foundation\Http\FormRequest;
use Validaciones\ApiRequest;
use Illuminate\Validation\rule;


class ObjetoRequest extends ApiRequest
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
                     'Controlador' => "required|",Rule::unique('Objetos')->ignore($this->objeto, 'Id'),
                     'Nombre' => 'required|opcional_class_exist',
                     'Notificacion' => 'opcional_class_exist',
                     'ColEstado'=>'required_with:Notificacion'
                ];
            case 'POST':
                return [
                    'Controlador' => 'required|class_exist|unique:Objetos,Controlador',
                    'Nombre' => 'required|class_exist|unique:Objetos,Nombre',
                    'Notificacion' => 'unique:Objetos,Notificacion|opcional_class_exist',
                    'ColEstado'=>'required_with:Notificacion'

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
