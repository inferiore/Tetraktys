<?php

namespace Validaciones\Configuracion;

use Validaciones\ApiRequest;
use Illuminate\Validation\rule;
use Illuminate\Foundation\Http\FormRequest;


class RutaRequest extends ApiRequest
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
                'nombre'=>'required',
                'controlador'=>'required',
                'libre'=>'required',
                    
                ];
            case 'POST':
                return [
                    'nombre'=>'required',
                    'controlador'=>'required',
                    'libre'=>'required',
                
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
