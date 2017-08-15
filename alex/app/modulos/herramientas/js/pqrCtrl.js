angular.module('AppPqr', []).controller('pqrCtrl', ['$scope', 'helpers', '$timeout', '$window', function($scope, helpers, $timeout, $window) {
    // helpers.confirmarAccion('¿Desea eliminar este elemento?', 'Gusano de polen', 'warning', 'Eliminar', function () {
    //  helpers.confirmar('Accion Ejecutada', 'este elemento fue modificado con exito', 'success');
    // });
    // helpers.confirmarPeticion('¿Desea eliminar este elemento?', 'Gusano de polen', 'warning', function  (result) {
    //     if (!result) {
    //         setTimeout(function () {
    //             helpers.confirmar('Accion Ejecutada', 'este elemento fue modificado con exito', 'success');
    //         },5000)
    //     }else{
    //         setTimeout(function () {
    //             helpers.confirmar('pailass', 'este elemento fue modificado con exito', 'warning');
    //         },5000)
    //     };
    // });
    
    var url = 'api/pqr/'

    $scope.listar = function (data){
        helpers.peticion(url, data).get()
        .$promise.then(function (result) {
                console.log("pqr result: ", result);
            }, function (result) {
                console.log('listar error :', result);
            });
    }

    $scope.listar();

    var appWindow = angular.element($window);
    appWindow.bind('resize', function() {
        $scope.setContactBox();
    });
    appWindow.bind('load', function() {
        $scope.setContactBox();
    });
    $scope.setContactBox = function() {
        if (appWindow.width() < 991) {
            angular.element(".contact-box").css('display', 'none');
            angular.element(".contact-btn").css('display', 'block');
        } else {
            angular.element('.contact-box').css('display', 'block');;
            angular.element(".contact-btn").css('display', 'none');
        }
    };

    /*toggle button click*/
    $('.contact-btn').on('click', function() {
        var options = {
            direction: 'right'
        };
        $('.contact-box').toggle('slide', options, 500);
    });

}]);