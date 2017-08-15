<?php

namespace App\Http\Middleware;

use Closure;

class MemoryMiddleware
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
        $response = $next($request);
        $content = json_decode($response->content(), true);
        //Check if the response is JSON
        if (json_last_error() == JSON_ERROR_NONE) {
            $response->setContent( ['memory' => convert(memory_get_usage(true)) ] + $content);
        }
        return $response;
    }
}
