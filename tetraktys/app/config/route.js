var onRedireccion = function () {
    if (window.localStorage.getItem('auth')) {
        return "app.default";
    }else{
        return 'login';
    };
};
angular.module('route', [])
.constant('NAVEGACION', [
    {
        estado: 'login',
        file: ['app/modulos/login/js/login.js'                  
            ],
        config: {
            url: "/login",
            templateUrl: "app/modulos/login/login.html",
            controller: 'loginCtrl',
            data: {
                 permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    },{
        estado: 'recordar',
        file: [],
        config: {
            url: "/recuperar/password",
            templateUrl: "app/modulos/login/nuevoPassword.html",
            controller: '',
            data: {
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    },{
        estado: 'app',
        file: [
            'js/angular-sanitize.min.js',
            'app/modulos/layout/js/app.js',
            'js/angular-ui-router-breadcrumbs.min.js',
            '../bower_components/bootstrap-multiselect/dist/css/bootstrap-multiselect.css',
            '../bower_components/isteven-angular-multiselect/isteven-multi-select.css',
            '../bower_components/isteven-angular-multiselect/isteven-multi-select.js',
            'assets/plugins/multi-select/js/multi-select.js',
            '../bower_components/select2/dist/css/select2.min.css',
            'assets/plugins/select2/css/select.css',
            'assets/plugins/select2/js/select.js',
        ],
        config: {
            url: "/",
            templateUrl: "app/modulos/layout/index.html",
            controller: 'appCtrl',
            abstract: true,
            // data: {
            //     permissions: {
            //         only: ['isAuthorized'],
            //         redirectTo: 'login'
            //       }
            // }
        }
    },{
        estado: 'app.default',
        file: [],
        config: {
            url: "",
            templateUrl: "app/modulos/dashboard/index.html",
            breadcrumb:  'Home',
            data: {
                ruta: 'app.default',
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    }
    // ,{
    //     estado: 'app.configuracion',
    //     file: [],
    //     config: {
    //         url: "configuracion",
    //         template: "<main data-ui-view ></main>",
    //         controller: '',
    //         breadcrumb:  'Configuracion',
    //         data: {
    //             permissions: {
    //                 only: ['isAuthorized'],
    //                 // redirectTo: 'login'
    //               }
    //         }
    //     }
    // }
    ,{
        estado: 'app.usuarios',
        file: [
            '../bower_components/ng-mk-modal-effect/dist/mkModal.js',
            '../bower_components/ng-mk-modal-effect/dist/mkModal.css',
            'assets/plugins/modal/css/component.css', 
            '../bower_components/switchery/dist/switchery.min.css',
            '../bower_components/switchery/dist/switchery.min.js',
            '../bower_components/ng-switchery/src/ng-switchery.js',
            'app/modulos/configuracion/js/usuarioCtrl.js'
        ],
        config: {
            url: "usuarios",
            templateUrl: "app/modulos/configuracion/usuarios.html",
            controller: 'usuarioCtrl',
            breadcrumb:  'Usuarios',
            data: {
                ruta: 'usuarios.index',
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    },{
        estado: 'app.menu',
        file: [
            // 'assets/plugins/nestable/css/nestable.css',
            // '../bower_components/Nestable/dist/js/jquery.nestable.js',
            // '../bower_components/angular-nestable/src/angular-nestable.js',
            '../bower_components/angular-ui-tree/angular-ui-tree.css',
            '../bower_components/angular-ui-tree/angular-ui-tree.min.js',
            'app/modulos/configuracion/js/menuConfigCtrl.js',
        ],
        config: {
            url: "menu/",
            templateUrl: "app/modulos/configuracion/menu.html",
            controller: 'menuConfigCtrl',
            breadcrumb:  'Menu',
            data: {
                ruta: 'menu.index',
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    },{
        estado: 'app.menu.tareas',
        file: [
        ],
        config: {
            url: "menu/:id/tareas",
            templateUrl: "app/modulos/configuracion/menu.html",
            controller: 'menuConfigCtrl',
            breadcrumb:  'tareas',
            
        }
    },{
        estado: 'app.roles',
        file: [
               
                '../bower_components/ng-mk-modal-effect/dist/mkModal.js',
                '../bower_components/ng-mk-modal-effect/dist/mkModal.css',
                'assets/plugins/modal/css/component.css', 
                '../bower_components/switchery/dist/switchery.min.css',
                '../bower_components/switchery/dist/switchery.min.js',
                '../bower_components/ng-switchery/src/ng-switchery.js',
                '../bower_components/select2/dist/css/select2.min.css',
                'assets/plugins/select2/css/s2-docs.css',
                'assets/plugins/select2/js/select.js',
                'assets/plugins/select2/css/select.css',
                'app/modulos/configuracion/js/rolesCtrl.js'

            ]
        ,
        config: {
            url: "roles",
            // params:  {
            //   id: {
            //         value: null,
            //         squash: true
            //     }
            // },
            templateUrl: "app/modulos/configuracion/roles.html",
            controller: 'rolesCtrl',
            breadcrumb:  'Roles',
            data: {
                ruta: 'roles.index',
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    },{
        estado: 'app.rutas',
        file: [
                
                '../bower_components/ngSweetAlert/SweetAlert.js',
                '../bower_components/ng-mk-modal-effect/dist/mkModal.js',
                '../bower_components/ng-mk-modal-effect/dist/mkModal.css',
                'assets/plugins/modal/css/component.css', 
                'app/modulos/configuracion/js/rutasCtrl.js',
                '../bower_components/switchery/dist/switchery.min.css',
                '../bower_components/switchery/dist/switchery.min.js',
                '../bower_components/ng-switchery/src/ng-switchery.js', 
                '../bower_components/angular-xeditable/dist/js/xeditable.min.js',
                '../bower_components/angular-xeditable/dist/css/xeditable.min.css',
                'assets/modules/editable-table-module.js',
                ],
        config: {
            url: "rutas/:id",
            params:  {
              id: {
                    value: null,
                    squash: true
                }
            },
            templateUrl: "app/modulos/configuracion/rutas.html",
            controller: 'rutasCtrl',
            breadcrumb:  'Rutas',
            data: {
                ruta: 'rutas.index',
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    },{
        estado: 'app.objetos',
        file: [
                
                '../bower_components/ngSweetAlert/SweetAlert.js',
                '../bower_components/ng-mk-modal-effect/dist/mkModal.js',
                '../bower_components/ng-mk-modal-effect/dist/mkModal.css',
                'assets/plugins/modal/css/component.css', 
                '../bower_components/switchery/dist/switchery.min.css',
                '../bower_components/switchery/dist/switchery.min.js',
                '../bower_components/ng-switchery/src/ng-switchery.js', 
                '../bower_components/angular-xeditable/dist/js/xeditable.min.js',
                '../bower_components/angular-xeditable/dist/css/xeditable.min.css',
                'assets/modules/editable-table-module.js',
                '../bower_components/switchery/dist/switchery.min.css',
                '../bower_components/switchery/dist/switchery.min.js',
                '../bower_components/ng-switchery/src/ng-switchery.js',
                '../bower_components/select2/dist/css/select2.min.css',
                'assets/plugins/select2/css/s2-docs.css',
                'assets/plugins/select2/js/select.js',
                'assets/plugins/select2/css/select.css',
                 'app/modulos/configuracion/js/objetosCtrl.js',
                ],
        config: {
            url: "objetos/:id",
            params:  {
              id: {
                    value: null,
                    squash: true
                }
            },
            templateUrl: "app/modulos/configuracion/objetos.html",
            controller: 'objetosCtrl',
            breadcrumb:  'Objetos',
            data: {
                ruta: 'objetos.index',
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    },{
        estado: 'app.configuraciones',
        file: [                
                '../bower_components/ngSweetAlert/SweetAlert.js',
                '../bower_components/ng-mk-modal-effect/dist/mkModal.js',
                '../bower_components/ng-mk-modal-effect/dist/mkModal.css',
                'assets/plugins/modal/css/component.css', 
                '../bower_components/switchery/dist/switchery.min.css',
                '../bower_components/switchery/dist/switchery.min.js',
                '../bower_components/ng-switchery/src/ng-switchery.js', 
                '../bower_components/angular-xeditable/dist/js/xeditable.min.js',
                '../bower_components/angular-xeditable/dist/css/xeditable.min.css',
                'assets/modules/editable-table-module.js',
                '../bower_components/switchery/dist/switchery.min.css',
                '../bower_components/switchery/dist/switchery.min.js',
                '../bower_components/ng-switchery/src/ng-switchery.js',
                '../bower_components/select2/dist/css/select2.min.css',
                'assets/plugins/select2/css/s2-docs.css',
                'assets/plugins/select2/js/select.js',
                'assets/plugins/select2/css/select.css',
                 'app/modulos/configuracion/js/configuracionesCtrl.js',
                ],
        config: {
            url: "configuraciones/:id",
            params:  {
              id: {
                    value: null,
                    squash: true
                }
            },
            templateUrl: "app/modulos/configuracion/configuraciones.html",
            controller: 'configuracionesCtrl',
            breadcrumb:  'Configuraciones',
            data: {
                ruta: 'configuraciones.index',
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    },{
        estado: 'app.permisosPorEstado',
        file: [                
                '../bower_components/ngSweetAlert/SweetAlert.js',
                '../bower_components/ng-mk-modal-effect/dist/mkModal.js',
                '../bower_components/ng-mk-modal-effect/dist/mkModal.css',
                'assets/plugins/modal/css/component.css', 
                '../bower_components/switchery/dist/switchery.min.css',
                '../bower_components/switchery/dist/switchery.min.js',
                '../bower_components/ng-switchery/src/ng-switchery.js', 
                '../bower_components/angular-xeditable/dist/js/xeditable.min.js',
                '../bower_components/angular-xeditable/dist/css/xeditable.min.css',
                'assets/modules/editable-table-module.js',
                '../bower_components/switchery/dist/switchery.min.css',
                '../bower_components/switchery/dist/switchery.min.js',
                '../bower_components/ng-switchery/src/ng-switchery.js',
                '../bower_components/select2/dist/css/select2.min.css',
                'assets/plugins/select2/css/s2-docs.css',
                'assets/plugins/select2/js/select.js',
                'assets/plugins/select2/css/select.css',
                 'app/modulos/configuracion/js/permisosPorEstadoCtrl.js',
                ],
        config: {
            url: "permisosporestado/:id",
            params:  {
              id: {
                    value: null,
                    squash: true
                }
            },
            templateUrl: "app/modulos/configuracion/permisosPorEstado.html",
            controller: 'permisosPorEstadoCtrl',
            breadcrumb:  'Permisos por estado',
            data: {
                ruta: 'permisosporestado.index',
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: onRedireccion
                  }
            }
        }
    },{
        estado: 'app.pqr',
        file: [
            'assets/plugins/datepicker/js/moment-with-locales.min.js',
            'assets/plugins/datepicker/js/datetimepicker.js',
            'assets/plugins/datepicker/js/datetimepicker.templates.js',
            'assets/plugins/datepicker/css/datetimepicker.css',
            'assets/plugins/datepicker/js/bootstrap-material-datetimepicker.js',
            'app/modulos/herramientas/js/pqrCtrl.js'

        ],
        config: {
            url: "pqr",
            // params:  {
            //   id: {
            //         value: null,
            //         squash: true
            //     }
            // },
            templateUrl: "app/modulos/herramientas/pqr.html",
            controller: 'pqrCtrl',
            breadcrumb:  'pqr',
            data: {
                // ruta: 'pqr.index',
                // permissions: {
                //     only: ['isAuthorized'],
                //     // redirectTo: 'login'
                //   }
            }
        }
    }

    ])


.config(['NAVEGACION','$provide', '$stateProvider', '$urlRouterProvider',  function(NAVEGACION, $provide, $stateProvider, $urlRouterProvider){

	// mostrar vista inicial
	// $urlRouterProvider.otherwise('login');

    // creacion de vistas dinamicas
	angular.forEach(NAVEGACION, function(value, key) {
        if(value.file.length){
            value.config.resolve = {
                deps: ['$ocLazyLoad',function  ($ocLazyLoad) {
                    return $ocLazyLoad.load([{serie: true, files: value.file }]);
                }]
            }
        }
        $stateProvider.state(value.estado, value.config);
    });

    // le decimos a angular que las vistas se cargaran asincronamente
    $urlRouterProvider.deferIntercept();

    // modificamos los estados para que funcionen junto al modulo de permission
    $urlRouterProvider.otherwise(function($injector, $location) {
        var $state = $injector.get("$state");
        setTimeout(function() {
            $location.path('/');
        }, 1000);
    });

}])
.run(['$timeout','$state','$rootScope', 'PermPermissionStore', '$urlRouter','USUARIO', 'helpers', '$q', '$http', function($timeout, $state, $rootScope, PermPermissionStore, $urlRouter, USUARIO, helpers, $q, $http){
    $rootScope.allDisable = false;
    // var regreso = function (dato) {
    //         var dato, tiempo = false;
    //         for (var i = 0; i == 1) {
    //             console.log("que es esto")
    //             if (!tiempo) {
    //                 tiempo = true;
    //                 setTimeout(function () {
    //                     dato = 'nuevo';
    //                 },500);
    //             };
    //         };
            
            
    //         return dato;
    //     };
    //  console.log("luego: ", regreso())
   // definicion de permisos
    PermPermissionStore.definePermission('isAuthorized', function (role, vista) {
        var token = window.localStorage.getItem('auth');
        // verificar si existe el token
        if(token)
        {
            if(vista.toState.name == 'login'){
                $state.transitionTo('app.default');
                return false;
            }else {
                var deferred = $q.defer();
                $rootScope.allDisable = true;
                helpers.peticion('api/rutas/permiso/:nombre').get({nombre: vista.toState.data.ruta})
                    .$promise.then(function(result){
                        deferred.resolve(true);
                        // console.log('resultado', result)
                    }, function (error) {    
                        deferred.reject(false);
                        // console.log('test', error);
                        helpers.notificaciones(error.data.error, 'warning');
                    });
                        
                    $timeout(function () {
                        $rootScope.allDisable = false;
                    },500);
                return deferred.promise;
            }
        }else if(vista.toState.name == 'login'){
            return true;
        }else if (vista.toState.name != 'login') {
            return false;
        }

        return false;
        
    });

    // evento que se lanza cuando inicia el proceso de cambio de vista
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, options) { 
        // cancela la peticion que se esta haciendo cuando ocurre un cambio de vista
        helpers.calcelPeticion();
    });

    //lanzar la vista una vez que este lista
    $urlRouter.sync(); 
    $urlRouter.listen();

    // $state.transitionTo('app');
    // $state.transitionTo('login');
}]);