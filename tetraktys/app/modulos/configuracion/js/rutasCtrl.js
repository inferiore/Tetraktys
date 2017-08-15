angular.module('AppRutas', [])
.controller('rutasCtrl', ['$scope', 'helpers', function($scope, helpers)
{   
    var url = 'api/rutas/';
    $scope.rutas = [];
    $scope.filtros = {};

    $scope.listar = function (data)
    {
        helpers.peticion('api/rutas').get()
            .$promise.then(function(result){
                $scope.rutas = result.data.rutas;
            }, function (error) {
                // helpers.notificaciones(error.message, 'error');
            });
    }
    $scope.listar = function (tipo, page)
        {
            $scope.show = false;
            var data = angular.copy($scope.filtros);
            data.page = page;
            // console.log(data);
            helpers.peticion(url, data).get().$promise
                .then(function (result) {
                    console.log('listar', result);
                    $scope.rutas = result.data.rutas;
                    if(page == null && tipo == null){
                        $scope.data = result.data;
                    }
                }, function (error) {
                    // console.log(error);
                });
        };

   
    $scope.editar = function(data, index)
    {
        console.log(data);
        helpers.peticion('api/rutas/:id', data).put()
            .$promise.then(function (result) {
                console.log(result)
                $scope.rutas[index] = result.data.ruta;
                helpers.notificaciones(result.message, 'success');
            }, function (error) {
                // helpers.notificaciones(error.data.message, 'error');
            });
    }

    $scope.crear = function ()
    {
        helpers.peticion('api/rutas').post()
            .$promise.then(function (result) {
                helpers.notificaciones(result.message, 'success');
            }, function (error) {
                // helpers.notificaciones(error.data.message, 'error');
            });

    }
    
    
    $scope.listar();
    
}]);
