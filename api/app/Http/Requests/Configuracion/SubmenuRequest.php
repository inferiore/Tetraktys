<?php

namespace Validaciones\Configuracion;

use Illuminate\Foundation\Http\FormRequest;
use Validaciones\ApiRequest;


class SubmenuRequest extends ApiRequest
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
        return [
            'menu_id'  => 'required|numeric',
            'nombre'      => 'required',
            'descripcion' => 'required',
            'icono'       => 'required'
        ];
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
