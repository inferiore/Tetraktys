<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $domains = ['http://192.168.1.113:82', 'http://localhost'];
        // header('Access-Control-Allow-Origin: *');
        // header('Access-Control-Allow-Headers: Origin, Content-type, Authorization');
        // header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
        // if(isset($request->server()['HTTP_ORIGIN']))
        // {
        //     $origin = $request->server()['HTTP_ORIGIN'];
        //     if(in_array($origin, $domains))
        //     {
                // header('Access-Control-Allow-Origin: '. $origin);
        //         header('Access-Control-Allow-Headers: Origin, Content-type, Authorization');
        //     }
        // }
        return $next($request);
    }
}
