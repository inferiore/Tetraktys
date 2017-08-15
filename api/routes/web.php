<?php

use Modelos\Configuracion\Configuracion;
use Modelos\Configuracion\Objeto;
use Modelos\Configuracion\Rol;
use Modelos\Configuracion\Menu;
use Modelos\Configuracion\MenuRol;
use Modelos\Comercial\Plan;
use Validaciones\Configuracion\ObjetoRequest;

	$thiss=Rol::findOrFail(1);
	//opciones padres   
    $menusRoles=DB::table("menu_rol")
    ->join("menu","menu.id","=","menu_rol.menu_id")
    ->where("menu_rol.activo",Db::raw(1))->where("menu.padre_id",Db::raw(0))
    ->where("menu_rol.rol_id",Db::raw($thiss->getId()))->get();

     //dd(($menusRoles->toArray()));
    //opciones hijas,nietas...
    $subMenusRoles=DB::table("menu_rol")
    ->join("menu","menu.id","=","menu_rol.menu_id")
    ->where("menu_rol.activo",Db::raw(1))->where("menu.padre_id","<>",Db::raw(0))
    ->where("menu_rol.rol_id",Db::raw($thiss->getId()))->get();
    
    $menu=[0,1,2];

Route::get('/', function () {	
	global $menusRoles ;
	global $subMenusRoles;
    	$i=0;
     	function hijos() {
     	 global $menu ;

     	 dd($menu);	
    	foreach ($menusRoles->toArray() as $key =>  $value) {
        	$hijos=[];
       		$nietos=[];
        	echo "padre:".$value->nombre."<br>";
        	$menu[$key] = $value;
         		foreach ($subMenusRoles->toArray() as $subValue) {
         			 if($value->id==$subValue->padre_id){
		                $hijos[]=$subValue;
		                echo 'hijo:'.$subValue->nombre.'<br>';
		                  foreach ($subMenusRoles->toArray() as  $subSubValue) {
		                     if($subValue->id==$subSubValue->padre_id){
		                          $nietos[]=$subSubValue;
		                	 		echo 'nieto:'.$subSubValue->nombre.'<br>';
		                      }    
		                  }
		                 $subValue->children=$nietos;
		             }
         		}
        	$menu[$key]->children =$hijos;
    	}
	 }
	hijos($menusRoles,$subMenusRoles);
	dd($menu);
	die();
    
    


});
