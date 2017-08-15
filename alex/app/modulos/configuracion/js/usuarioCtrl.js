angular.module('AppUsuario', [])
    .controller('usuarioCtrl', ['$scope', 'helpers', function($scope, helpers){

        var url = 'api/usuarios/';
        $scope.data = [];
        $scope.roles = [];
        $scope.filtros = {};
        $scope.show = false;
        $scope.usuario = {};
        $scope.canales = [];
        $scope.usuarios = {};
        $scope.proveedores = [];
        $scope.errores = {};
        $scope.dni = [];

        $scope.listar = function (tipo, page)
        {
            $scope.show = false;
             console.log("scope.filtros",$scope.filtros);
            var data = angular.copy($scope.filtros);
            data.UsIdRol = helpers.toArray(data.UsIdRol, 'RolId');
            data.UsIdCanal = helpers.toArray(data.UsIdCanal, 'CaId');
            data.page = page;
            console.log("data",data);
            helpers.peticion(url, data).get().$promise
                .then(function (result) {
                   
                    $scope.usuarios = result.data.usuarios;
                    if(page == null && tipo == null){
                        $scope.data = result.data;
                    }
                }, function (error) {
                    // console.log(error);
                });
        };

        $scope.crear = function () 
        {
            $scope.errores = {};
            helpers.peticion(url + 'create').get().$promise
                .then(function (result) {
                    $scope.dni = result.data.dni;
                    $scope.roles = result.data.roles;
                    $scope.proveedores = result.data.proveedores;
                    $scope.canales = result.data.canales;
                    
                }, function (error) {
                    // console.log(error);
                });
        };

        $scope.guardar = function (data) 
        {
            console.log('guardar', data);
            $scope.errores = {};
            helpers.peticion(url, data).post().$promise
                .then(function (result) {
                    angular.element('#modal-crear').modal('hide');
                    console.log('store', result);
                }, function (result) {
                    $scope.errores = result.data.errors;
                    // console.log(result);
                }); 
        }

        $scope.editar = function (id)
        {
            $scope.errores = {};
            helpers.peticion(url + ':UId/edit', {UId: id}).get().$promise
                .then(function (result) {
                    $scope.usuario = result.data.usuario;
                    $scope.canales = result.data.canales;
                    $scope.proveedores = result.data.proveedores;
                    $scope.roles = result.data.roles;
                    $scope.dni = result.data.dni;
                    console.log('editar', result);
                }, function (result) {
                    // console.log(result);
                });
        }

        $scope.actualizar = function () 
        {
            // console.log('actualizar', $scope.usuario);
            helpers.peticion(url + ':UId', $scope.usuario).put().$promise
                .then(function (result) {
                    console.log('actualizar', result);
                    helpers.notificaciones(result.message, 'success');
                    angular.element('#modal-editar').modal('hide');
                }, function (result) {
                    // console.log('error_actualizar', result);
                    $scope.errores = result.data.errors;
                }).finally(function () {
                    $scope.listar();
                });
        }
        $scope.password = function () 
        {
            // console.log('actualizar', $scope.usuario);
            helpers.peticion(url + ':UId/password', $scope.usuario).patch().$promise
                .then(function (result) {
                    console.log('actualizar_password', result);
                    helpers.notificaciones(result.message, 'success');
                    angular.element('#modal-password').modal('hide');
                }, function (result) {
                    // console.log(result);
                }).finally(function () {
                    $scope.listar();
                });
        }

        $scope.eliminar = function (data, index)
        {
            // console.log('eliminar', data);
            var campo = {UId: data.UId, UsIdEstadoAux: data.UsIdEstadoAux};
            helpers.peticion(url + ':UId', campo).delete().$promise
                .then(function(result) {
                    $scope.usuarios[index] = result.data.usuario;
                    $scope.usuarios[index].rol = data.rol;
                    helpers.notificaciones(result.message, 'success');
                }, function (error) {
                    // helpers.notificaciones(error.data.message, 'error');
                }).finally(function () {
                    $scope.listar();
                });
        }
        $scope.listar();
    }]);
