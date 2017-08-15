angular.module('AppObjetos', [])
.controller('objetosCtrl', ['$scope', 'helpers', '$timeout', function($scope, helpers, $timeout){
    console.log("objetos")
    $scope.objetos = [];
    $scope.modelos = [];
    $scope.controladores = [];
    $scope.notificaciones = [];
    $scope.objeto = {};

    $scope.getIndex = function (data={})
    {
        helpers.peticion('api/objetos', data).get()
            .$promise.then(function(result)
            {  

                $scope.objetos = result.data.objetos.data;
               
            }, function (error) {
               
            });
    };
    $scope.getCrear = function (data={})
    {
        helpers.peticion('api/objetos/create', data).get()
            .$promise.then(function(result)
            {
                $scope.objeto={};
                $scope.modelos=result.data.modelos;
                $scope.controladores=result.data.controladores;
                $scope.notificaciones=result.data.notificaciones;
                
            }, function (result) {
               
            });
    };
     $scope.postCrear = function (data={})
    {   
         helpers.peticion('api/objetos', data).post()
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
        helpers.peticion('api/objetos/:Id/edit', data).get()
            .$promise.then(function(result)
            {
                $scope.objeto=result.data.objeto;
                $scope.modelos=result.data.modelos;
                $scope.controladores=result.data.controladores;
                $scope.notificaciones=result.data.notificaciones;
            }, function (result) {
               
            });
    };
    

    $scope.putEditar = function (data) 
    {   
        helpers.peticion('api/objetos/:Id',data).put()
            .$promise.then(function(result) {
                $scope.objeto=result.data.objeto;
                angular.element('#modal-editar').modal('hide');
                helpers.notificaciones(result.message, 'success');
            }, function (error) {
                /* body... */
            }).finally(function () {
                $scope.getIndex();
            });

    } 
    
    $scope.eliminar = function (data, index)
    {
        helpers.peticion('api/objetos/:Id').delete(data)
            .$promise.then(function(result) {
                helpers.notificaciones(result.message, 'success');
            }, function (result) {
                 
            }).finally(function () {
                $scope.getIndex();
            });
    }
  
    $scope.getIndex();
    
}]);
