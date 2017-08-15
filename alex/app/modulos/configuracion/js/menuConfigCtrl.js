angular.module('AppMenuxxx', [])
    .controller('menuConfigCtrl', ['$scope', 'helpers', '$timeout', function($scope, helpers, $timeout){
        var url = 'api/menu/';
        $scope.data =   {};
        $scope.menu = {};
        $scope.padre = {};
        $scope.roles = [];
        $scope.menu_left = [];
        $scope.menu_right = [];
        $scope.errores = {};
        $scope.opcion = {};
        $scope.opcion_copia = {};
        $scope.inputsdrc = {};

        $scope.opciones = 
        {
            // dragStop: function(event) 
            // {
            //     var data = event.source.cloneModel;
            //     var destino = event.dest.nodesScope.$parent.$modelValue;
            //     data.rol_id=$scope.inputsdrc.rol_id;
            //     // console.log(data);   
            //     // data.children = '';
            //     // if(destino)
            //     // {
            //     //     data.padre_id = destino.id;
            //     //     data.rol_id = destino.rol_id;
            //     // }else{
            //     //     data.padre_id = 0;
            //     // }
            //     // data.prioridad = event.dest.index + 1; 
            //     // // console.log('nodo', data);
            //     helpers.peticion(url+'copiar/:id', data).put().$promise
            //         .then(function (result) {
            //             console.log(result);
            //             helpers.notificar(result.message, 'success');
            //         }, function (result) {
            //             // console.log(result);
            //         });
            //     return true;
            // }
        };

        $scope.listar = function (data, lado = null) 
        {
            // console.log(data, lado);
            helpers.peticion(url, data).get().$promise
                .then(function (result) {

                    for(var d in result.data.menu){
                        // if (result.data.menu[d].children.length > 0) {
                            console.log("un dia: ", result.data.menu[d]);
                        // };
                    }

                    if(lado == 'izquierda'){
                        $scope.menu_left = result.data.menu;
                    }else if(lado == 'derecha'){
                        $scope.menu_right = result.data.menu;
                    }else{
                        $scope.menu_left = [];
                        $scope.menu_right = [];
                    }
                    $scope.roles = result.data.roles;
                }, function (result) {
                    // console.log('listar error :', result);
                });
        }

        $scope.crear = function (nodo = null, tipo = null)
        {   
            $scope.data = {};
            $scope.errores = {};
            (tipo == 'hijo') ? $scope.hijo = 0 : $scope.hijo = 1;
            var nodeData = {};
            if(nodo != null)
                nodeData = nodo.$modelValue;
            $scope.padre = nodeData;
            helpers.peticion(url + 'create').get().$promise
                .then(function (result) {
                    // console.log('menu crear:', result);
                    $scope.roles = result.data.roles;
                }, function (result) {
                    // console.log('menu_error:', result);
                });
        };
        
        $scope.guardar = function (data)
        {
            if(!$.isEmptyObject($scope.padre))
            {
                data.rol_id = $scope.padre.rol_id;
                data.padre_id = $scope.padre.id;
            }
            // console.log('guardar', data);
            helpers.peticion(url , data).post().$promise
                .then(function (result) {
                    // console.log('menu save:', result);
                    (!$.isEmptyObject($scope.padre)) ? $scope.padre.children.push(result.data.menu): '';
                    angular.element('#modal-crear').modal('hide');
                }, function (result) {
                    $scope.errores = result.data.errors;
                });
        }

        $scope.editar = function (nodo) 
        {
            // console.log(nodo.$index)
            $scope.opcion_copia = nodo.$modelValue;
            $scope.errores = {};
            helpers.peticion(url + ':id/edit', {id: $scope.opcion_copia.id}).get().$promise
                .then(function (result) {
                    $scope.opcion = result.data.opcion;
                    console.log('editar', result);
                }, function (result) {
                    // console.log(result);
                });
        }   

        $scope.actualizar = function (nodo) 
        {
            helpers.peticion(url + ':id', $scope.opcion).put().$promise
                .then(function (result) {
                    $scope.opcion_copia.nombre = result.data.opcion.nombre;
                    $scope.opcion_copia.icono = result.data.opcion.icono;
                    angular.element('#modal-editar').modal('hide');
                    helpers.notificar(result.message, 'success');
                }, function (result) {
                    // console.log(result);
                });
        }

        $scope.eliminar = function (nodo)
        {
            helpers.peticion('api/menurol/:id', nodo).delete().$promise
                .then(function (result) {
                    console.log("hola: ", result)
                    nodo.activo = result.data.menu.activo;
                    helpers.notificar(result.message, 'success');
                }, function (result) {
                    // console.log(result);
                });
        };

        // $scope.toggle = function (scope)
        // {
        //     scope.toggle();
        // };

        // $scope.moveLastToTheBeginning = function ()
        // {
        //     var a = $scope.data.pop();
        //     $scope.data.splice(0, 0, a);
        // };

        // $scope.collapseAll = function ()
        // {
        //     $scope.$broadcast('angular-ui-tree:collapse-all');
        // };

        // $scope.expandAll = function ()
        // {
        //     $scope.$broadcast('angular-ui-tree:expand-all');
        // };

        $scope.listar();
    }])
    .directive('ven', ['$timeout', function($timeout){
        // Runs during compile
        return {
            link: function($scope, iElm, iAttrs, controller) {
               
                iElm.bind('click',function () {
                    console.log("ven paca")
                })
            }
        };
    }]);
