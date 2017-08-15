angular.module('AppConfiguraciones', [])
.controller('configuracionesCtrl', ['$scope', 'helpers', '$timeout', function($scope, helpers, $timeout){
    $scope.configuraciones = [];
    $scope.objetos = [];
    $scope.primarias = [];
    $scope.foraneas = [];
    $scope.notificaciones = [];
    $scope.objeto = {};

    $scope.pagination = {
        current: 1
    };

    

    $scope.filtrar = function (data) {
        var aux = angular.copy(data);
        aux.RolIdEstado = helpers.toArray(data.RolIdEstado, 'StId');
        // console.log('data', data);
       
        $scope.listar(aux);
    }

    $scope.getIndex = function (data={})
    {
        helpers.peticion('api/configuraciones', data).get()
            .$promise.then(function(result)
            {  
                $scope.configuraciones = result.data.configuraciones.data;
              
            }, function (error) {
                helpers.notificaciones(error.data.error, 'error');
            });
    };
    $scope.getCrear = function (data={})
    {
        helpers.peticion('api/configuraciones/create', data).get()
            .$promise.then(function(result)
            {
                $scope.objeto={};
                $scope.objetos=result.data.objetos;
               
               
                
            }, function (result) {
                helpers.notificaciones(result.data.message, 'error');
            });
    };
    $scope.getAttrs = function (data,tipo)
    {
      
        helpers.peticion('api/objetos/'+data+'/getattres', data).get()
            .$promise.then(function(result)
            {
                if(tipo=='P'){
                    $scope.primarias=(result.data.attres);
                    $scope.objeto.Primaria=null;

                    }
                if (tipo=='H'){
                    $scope.foraneas=result.data.attres;                   
                    $scope.objeto.Foranea=null;
                    
                    }
               
            }, function (result) {
                helpers.notificaciones(result.data.message, 'error');
            });
    };


     $scope.postCrear = function (data={})
    {   
         helpers.peticion('api/configuraciones', data).post()
            .$promise.then(function(result)
            {
                angular.element('#modal-crear').modal('hide');
                helpers.notificaciones(result.message, 'success');

            }, function (result) {
                 if(result.data.error){
                    helpers.notificaciones(result.data.error, 'error');
                }else{ 
                    for (i in result.data.errors) {
                        for (j in result.data.errors[i]) {
                            console.log(result.data.errors[i][j])
                            helpers.notificaciones(result.data.errors[i][j], 'error'); 
                        }
                    }
                }
            }).finally(function () {
                $scope.getIndex();
            });;
    };
    $scope.getEditar = function (data={})
    {
        helpers.peticion('api/configuraciones/:Id/edit', data).get()
            .$promise.then(function(result)
            {   
                $scope.primarias=(result.data.primarias);
                $scope.foraneas=result.data.foraneas;  
                $scope.objetos = result.data.objetos;
                $scope.objeto = result.data.configuracion;             

            }, function (result) {
                helpers.notificaciones(result.data.message, 'error');
            });
    };
    

    $scope.putEditar = function (data) 
    {   
        
        helpers.peticion('api/configuraciones/:Id',data).put()
            .$promise.then(function(result) {
                $scope.objeto=result.data.objeto;
                angular.element('#modal-editar').modal('hide');
                helpers.notificaciones(result.message, 'success');
            }, function (result) {
                 if(result.data.error){
                    helpers.notificaciones(result.data.error, 'error');
                }else{ 
                    for (i in result.data.errors) {
                        for (j in result.data.errors[i]) {
                            helpers.notificaciones(result.data.errors[i][j], 'error'); 
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
                    helpers.peticion('api/configuraciones/:Id').delete(data)
                        .$promise.then(function(result) {
                             helpers.confirmar('Listo', 'este elemento fue eliminado con exito', 'success');
                        }, function (result) {
                              if(result.data.error){
                                 helpers.confirmar('Error', result.data.error, 'warning');
                               
                            }else{ 
                                var textError='';                               
                                for (i in result.data.errors) {
                                    for (j in result.data.errors[i]) {
                                       textError+=(result.data.errors[i][j]); 
                                    }
                                }                                
                                  helpers.confirmar('Error', textError, 'error');
                               
                             }
                        }).finally(function () {
                            $scope.getIndex();
                        });
                }else{
                    setTimeout(function () {
                        helpers.confirmar('Error', 'No se modifico', 'warning');
                    },5000)
                };
                    }) 
    }
    $scope.getIndex();
}]);
