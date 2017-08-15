<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class RulesServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

        //valida si el valor de un campo es un clase existente puede ser nulo
        Validator::extend('opcional_class_exist', function ($attribute, $value, $parameters, $validator) {
             return((class_exists($value) or is_null($value))?true:false);
        });
       
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
