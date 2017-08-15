<?php

namespace Modelos\Configuracion;

use Modelos\Intermediate;
use DirectoryIterator;
class Objeto extends Intermediate 
{

    protected $table = 'Objetos';
    protected $primaryKey = 'Id';
    public $timestamps = false;
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['Controlador', 'Nombre', 'Notificacion','ColEstado'];
    protected $path;
    protected $folderModel;


public function __construct()
    {
        $this->path = base_path().'\App\Dismel\Modelos';
        $this->folderModel = 'Modelos';
    }

public function getAtters(){
    $clase=$this->Nombre;
    $attres=$clase::first()->toArray();
    return array_keys($attres);
}
public function setPath($path){
        $this->path = base_path().$path;
    }

public function setFolderModel($name){
        $this->folderModel = $name;
    }

public function getPath(){
        return $this->path;
    }

public function getFolderModel(){
       return $this->folderModel;
    }

public function scopeFilter($query, $inputs)
    {
        if($tmp = @$inputs['Controlador'])
            $query->where('Controlador', 'like', '%'.$tmp.'%');
        if($tmp = @$inputs['Nombre'])
            $query->where('Nombre', 'like', '%'.$tmp.'%');
        if ($tmp=@$inputs["Notificacion"])
            $query->where('Notificacion', 'like', '%'.$tmp.'%');
		if ($tmp=@$inputs["ColEstado"])
            $query->where('ColEstado','like',  '%'.$tmp.'%');

        return $query;
    }
 public  function listarModelos()
    {
        $modelos=[];
        foreach (new DirectoryIterator($this->path) as $file)
        {
            if (!$file->isFile()){
                if($file->getBasename() != '.' && $file->getBasename() != '..'){
                    foreach (new DirectoryIterator($file->getPathname()) as $subfile) {
                        if ($subfile->isFile()) {
                            $path = $file->getPathname();
                            $namespace = $this->folderModel.(explode($this->folderModel, $path)[1]);
                            $filename = str_replace('.php', '', $subfile->getFilename());
                            $class_name = $namespace.'\\'.$filename;
                            /*no todos se pueden instanciar ya que no todos son modelos, unos son controller,otras archivos de notificacion
                            $class_object = new $class_name;*/
                            //Guardar datos del modelo 
                            $attr = [
                                'nombre' => $class_name
                            ];
                            $modelos[]=['nombre' => $class_name];
                            // $modelo = Objeto::firstOrNew(['nombre' => $class_name]);
                            // $modelo->fill($attr);
                            // echo $modelo;
                            // echo "\r\n";
                            // $modelo->save();
                        }
                    }
                }
            }
        }
        return $modelos;            
    }
}