angular.module('AppPermisosPorEstado', [])
.controller('permisosPorEstadoCtrl', ['$scope', 'helpers', '$timeout', function($scope, helpers, $timeout){

    $scope.permisos = [];
    $scope.objetos = [];
    $scope.rutas = [];
    $scope.roles = [];
    $scope.estados = [];
    $scope.objeto = {};
    $scope.filtros = {};
    $scope.inputs = [];
    $scope.show = false;

    $scope.pagination = {
        current: 1
    };

    $scope.getIndex = function (tipo)
    {
        $scope.show = false;

        console.log("scope.filtros",$scope.filtros)
        var data = angular.copy($scope.filtros);
        data.IdEstado = helpers.toArray(data.IdEstado, 'EstId');
        data.IdObjeto = helpers.toArray(data.IdObjeto, 'Id');
        data.IdRol = helpers.toArray(data.IdRol, 'RolId');
        // console.log("data",data);
        // console.log("scope.filtros",$scope.filtros)
        
        helpers.peticion('api/permisosporestado', data).get()
            .$promise.then(function(result)
            {  
                $scope.permisos = result.data.permisos.data;
                if(tipo==null){
                    $scope.inputs.estados = result.data.estados;
                    $scope.inputs.objetos = result.data.objetos;
                    $scope.inputs.roles = result.data.roles;
                }
                
            }, function (error) {
                // helpers.notificaciones(error.data.error, 'error');
            });
    };
    $scope.getCrear = function (data,p=null)
    {
        helpers.peticion('api/permisosporestado/create', data).get()
            .$promise.then(function(result)
            {
                if(p=='o'){
                    $scope.rutas=result.data.rutas;
                    $scope.estados=result.data.estados;
                }
                if (p==null){               
                $scope.objetos=result.data.objetos;
                $scope.roles=result.data.roles;
                $scope.estados=result.data.estados;
                $scope.rutas=result.data.rutas;
                }
            }, function (result) {
                // helpers.notificaciones(result.data.message, 'error');
            });
    };
    
     $scope.postCrear = function (data)
    {   
          
         helpers.peticion('api/permisosporestado', data).post()
            .$promise.then(function(result)
            {
                angular.element('#modal-crear').modal('hide');
                helpers.notificaciones(result.message, 'success');

            }, function (result) {
                
            }).finally(function () {
                $scope.getIndex();
            });;
    };
    $scope.getEditar = function (data={})
    {
        helpers.peticion('api/permisosporestado/:Id/edit', data).get()
            .$promise.then(function(result)
            {   
                $scope.objeto=result.data.permiso;
                $scope.objetos=result.data.objetos;
                $scope.rutas=result.data.rutas;
                $scope.roles=result.data.roles;
                $scope.estados=result.data.estados;
                $scope.rutas=result.data.rutas;                          

            }, function (result) {
                // helpers.notificaciones(result.data.message, 'error');
            });
    };
    

    $scope.putEditar = function (data) 
    {   
        
        helpers.peticion('api/permisosporestado/:Id',data).put()
            .$promise.then(function(result) {
                $scope.objeto=result.data.objeto;
                angular.element('#modal-editar').modal('hide');
                helpers.notificaciones(result.message, 'success');
            }, function (result) {
                 if(result.data.error){
                    // helpers.notificaciones(result.data.error, 'error');
                }else{ 
                    for (i in result.data.errors) {
                        for (j in result.data.errors[i]) {
                            // helpers.notificaciones(result.data.errors[i][j], 'error'); 
                        }
                    }
                }
            }).finally(function () {
                $scope.getIndex();
            });

    } 
    

    $scope.delEliminar = function (data)
    {
         helpers.confirmarPeticion('Eliminar configuracion', 'Esta accion podria conceder o eliminar acceso a las vistas del sistema cuando se tiene configrado permisos por estado.'
            , 'warning' /*success, danger, warning, info, etc*/ , function(result){
               if (result) {
                    helpers.peticion('api/permisosporestado/:Id').delete(data)
                        .$promise.then(function(result) {
                             helpers.confirmar('Listo', 'este elemento fue eliminado con exito', 'success');
                        }, function (result) {
                              if(result.data.error){
                                 // helpers.confirmar('Error', result.data.error, 'warning');
                               
                            }else{ 
                                var textError='';                               
                                for (i in result.data.errors) {
                                    for (j in result.data.errors[i]) {
                                       textError+=(result.data.errors[i][j]); 
                                    }
                                }                                
                                  // helpers.confirmar('Error', textError, 'error');
                               
                             }
                        }).finally(function () {
                            $scope.getIndex();
                        });
                }else{
                    setTimeout(function () {
                        // helpers.confirmar('Error', 'No se modifico', 'warning');
                    },5000)
                };
                    }) 
    }
    $scope.getIndex();
}]);
