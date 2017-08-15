/*
	configuracion y peticiones del logueo de usuarios
*/
angular.module('login', [])
.controller('loginCtrl', ['$scope', 'helpers','$state', '$timeout', 'USUARIO', function($scope, helpers, $state, $timeout, USUARIO){
	$scope.peticionActiva = false;
	// $timeout(function () {
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
	// }, 500);
		
	$scope.inicioSesionDos = function (datos) 
	{
		var data = {
			grant_type: 'password',
			client_id: 2,
			client_secret: 'tzJDdHggqXKg8Q5hPduxKxYhjNfs6008H67h0f4g',
			username: datos.mail/*'admin@email.com'*/,
			password: datos.pw /*'admin'*/,
			scope: ''
	    };
	    
	    
	    $scope.peticionActiva = true;
		helpers.peticion('oauth/token').login(data)
			.$promise.then(function(result) 
			{
					window.localStorage.setItem('auth', JSON.stringify(result));
					setTimeout(function () {
			            window.location.reload();
			        },500);
					
					helpers.notificaciones('Bienvenido!', 'success');


			}, function (error) {
				$scope.peticionActiva = false;
				helpers.notificaciones('Verifique sus datos', 'error');
			});
	}
	
	

}]);
