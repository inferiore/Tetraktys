<?php 

function str_spacecase($slug)
{
    return str_replace("_", " ", $slug);
}

function convert($size)
{
   $unit=array('b','kb','mb','gb','tb','pb');
   return @round($size/pow(1024,($i=floor(log($size,1024)))),2).' '.$unit[$i];
}
function conexion($nombre)
{
    return ( config('database.connections.'.$nombre)[ "database" ] . ".dbo." );
}

function respuesta($response, $data="")
{
    $content = json_decode($response->content(), true);
    //Check if the response is JSON
    if (json_last_error() == JSON_ERROR_NONE) {
        return $response->setContent( ['test' => $data ] + $content);
    }
}

function responseError($response, $codigo = '404', $mensaje = "Pagina no encontrada")
{
	$response = $response->setStatusCode($codigo, $mensaje);
    $response = $response->setContent(['error' => $mensaje]);
    return $response;
}