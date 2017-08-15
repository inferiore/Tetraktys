@component('mail::message')
# {{ $plan->nombre }}

El siguiente plan a pasado a estado de ejecucion.
- Usuario creación: Prueba
- Usuario edicion: Prueba
@component('mail::button', ['url' => ''])
Ingresar
@endcomponent

Agradecemos su pronta gesti&oacute;n,<br>
# {{ config('app.name') }}
@endcomponent
