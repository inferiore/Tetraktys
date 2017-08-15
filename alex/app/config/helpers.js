angular.module('helpers', []).factory('helpers', ['$q' ,'URL_BASE', '$http', '$resource', 'Notification', 'SweetAlert', function($q, URL_BASE, $http, $resource, Notification, SweetAlert) {
    var helpers = {}, deferr = '';
    helpers.peticion = function(url, parametros) {
        deferr = $q.defer();
        return $resource(URL_BASE + url, parametros, {
            get: {
                method: "GET",
                headers: helpers.getHeaders(),
                interceptor: helpers.intercepta
            },
            post: {
                method: "POST",
                headers: helpers.getHeaders(),
                interceptor: helpers.intercepta
            },
            login: {
                method: "POST",
                headers: helpers.getHeaders()
            },
            put: {
                method: "PUT",
                headers: helpers.getHeaders(),
                interceptor: helpers.intercepta
            },
            delete: {
                method: "DELETE",
                headers: helpers.getHeaders(),
                interceptor: helpers.intercepta
            },
            patch: {
                method: "PATCH",
                headers: helpers.getHeaders(),
                interceptor: helpers.intercepta
            },
            pagination: {
                method: 'GET',
                params: {
                    id: "@id",
                }
            },
            notificacion: {
                method: 'POST',
                ignoreLoadingBar: true,
                params: {
                    id: "@id",
                },
                interceptor: helpers.intercepta
            }
        });
    };

    helpers.intercepta = {
        'request':  function (config) {
            return config;
        },
        'responseError': function (response) {
            if (response.status == 401) {
                helpers.logout();
            }
           
            
            if(response.status == 400 | response.status== 409 |response.status == 403){
                if(response.data.error){
                    helpers.notificaciones(response.data.error, 'error');
                }else{ 
                    for (i in response.data.errors) {
                        for (j in response.data.errors[i]) {
                            helpers.notificaciones(response.data.errors[i][j], 'error'); 
                        }
                    }
                }
            }

            deferr.reject(response);
            return deferr.promise;
        }
    };
    helpers.notificaciones = function(msj, tipo) {
        Notification({
            message: msj,
            positionX: 'right',
            positionY: 'top'
        }, tipo);
    };
    helpers.notificar = function(msj, tipo) {
        Notification({
            message: msj,
            positionX: 'right',
            positionY: 'top'
        }, tipo);
    };
    helpers.logout = function() {
        window.localStorage.removeItem('auth');
        setTimeout(function() {
            window.location.reload();
        }, 500);
    };
    helpers.calcelPeticion = function() {
        angular.forEach($http.pendingRequests, function(request) {
            if (request.cancel && request.timeout) {
                request.cancel.resolve();
            }
        });
    };
    helpers.getHeaders = function() {
        var data = window.localStorage.getItem('auth');
        var tokenData = JSON.parse(data);
        var headers = {};
        if (data) {
            headers = {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + tokenData.access_token
            };
        }
        return headers;
    };
    helpers.confirmar = function(titulo, mensaje, tipoVentana /*success, danger, warning, info, etc*/ ) {
        SweetAlert.swal(titulo, mensaje, tipoVentana);
    };
    helpers.confirmarAccion = function(titulo, mensaje, tipoVentana /*success, danger, warning, info, etc*/ , accionBtn /*texto del boton eliminar*/ , callback) {
        SweetAlert.swal({
            title: titulo,
            text: mensaje,
            type: tipoVentana,
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: accionBtn,
            closeOnConfirm: false
        }, function(isConfirm) {
            callback(isConfirm);
        });
    };
    helpers.confirmarPeticion = function(titulo, mensaje, tipoVentana /*success, danger, warning, info, etc*/ , callbak) {
        SweetAlert.swal({
            title: titulo,
            text: mensaje,
            type: tipoVentana,
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, function(isConfirm) {
            callbak(isConfirm);
        });
    };
    helpers.toArray = function(data, indice) {
        var tmp = '';
        angular.forEach(data, function(value, key) {
            if (key == 0) tmp += value[indice];
            else tmp += ',' + value[indice];
        });
        return tmp;
    };
    helpers.retornaObjeto = function(data, indice, valor) {
        var tmp = {};
        angular.forEach(data, function(value, key) {
            if (value[indice] == valor) tmp = value;
        });
        return tmp;
    }
    return helpers;
}]);