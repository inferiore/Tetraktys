/*
	apicacion inicial
*/
// json de inicio

var InitTetraktys = {
    onPermisos: function (opciones) {
        return opciones.usu & opciones.vista;
    },
	onInit: function () {
        // console = undefined;
		// $.ajax({
	 //        url: parametro
	 //    }).then(function(data) {
	 //       eval(data.runApp)[0].exe();
	 //    });
		this.onApp();
        // console.log("final: ", this.onPermisos({usu: 2, vista: 4}))
	},
	// angular
	onApp: function () {
		angular.module('tetraktys', [
            'ui.router',
            'permission',
            'permission.ui',
            'angular-loading-bar',
            'ngPassword',
            'ui.tree',
            'ngCacheBuster',
            'ngResource',
            'oc.lazyLoad',
            'ui.bootstrap',
            'ui.slimscroll',
            'angularRipple',
            'selectionModel'])
        .constant('URL_BASE', 'http://rolf.dismelltda.com/api/public/')
        .constant('USUARIO', {rol: 'nombre_rol'})
    //     {
    //     nombre: 'Henry Torres',
    //     id: 12,
    //     cargo: 'Desarrollador web',
    //     rol: 'jubilado'
    // }
		.config(['$locationProvider', 'httpRequestInterceptorCacheBusterProvider', function($locationProvider, httpRequestInterceptorCacheBusterProvider){

			// administrar el cache de la aplicacion
            
			httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*app.*/], true);

			// formato de url sin #!
			$locationProvider.html5Mode(true); 
		}])
        .run(['$ocLazyLoad', function($ocLazyLoad){
            // importar dependencias de la vista de forma asincrona
            $ocLazyLoad.load([
                'js/dirPagination.js',
                '../bower_components/sweetalert/dist/sweetalert.css',
                '../bower_components/sweetalert/dist/sweetalert.min.js',
                '../bower_components/ngSweetAlert/SweetAlert.js',
                '../bower_components/angular-ui-notification/dist/angular-ui-notification.css',
                '../bower_components/angular-ui-notification/dist/angular-ui-notification.js',
                '../bower_components/angular-animate/angular-animate.js',
                '../bower_components/animate.css/animate.css',
                'assets/icon/ion-icon/css/ionicons.min.css',
                'css/animate.min.css',
                'app/config/helpers.js',
                'app/config/route.js',
                'assets/js/funciones.js',
                /*,'assets/modules/notification-module.js'*/ ],{serie: true});
        }])
        // controlador global de la app
        .controller('globalCtrl', ['$scope', '$ocLazyLoad', '$window', '$timeout', function($scope, $ocLazyLoad, $window, $timeout){
            
            $scope.windowWidth = $(window);
            $scope.init = function() {
                angular.element('.loader-bar').animate({ width: $scope.windowWidth.width() }, 2000);
                $timeout(function() {
                    while (angular.element('.loader-bar').width() == $scope.windowWidth.width()) {
                        removeloader();
                        break;
                    }

                }, 2500);
                angular.element('.loader-bg').fadeOut('slow');
            };

        }])
        .directive('ajusteLabel', ['$timeout', function($timeout){
            // Runs during compile
            return {
                link: function($scope, iElm, iAttrs, controller) {
                    angular.element(".md-form-control").each(function() {
                            $(this).parent().append('<span class="md-line"></span>');
                        });
                    angular.element(".md-form-control").change(function() {
                        if ($(this).val() == "") {
                            $(this).removeClass("md-valid");
                        } else {
                            $(this).addClass("md-valid");
                        }
                    });
                }
            };
        }]);
		// lanzar la aplicacion
		angular.bootstrap(document, ['tetraktys']);
	}
};





