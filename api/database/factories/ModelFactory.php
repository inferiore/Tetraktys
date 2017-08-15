<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(Modelos\Configuracion\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'rol_id' => rand(1, 4),
        'nombre' => $faker->name,
        'primer_apellido' => $faker->name,
        'segundo_apellido' => $faker->name,
        'identificacion' => '123456',
        'email' => $faker->unique()->safeEmail,
        'codigo' => rand(1, 10),
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});
