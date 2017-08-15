angular.module('AppRoles', [])
.controller('rolesCtrl', ['$scope', 'helpers', '$timeout', function($scope, helpers, $timeout){
    
    $scope.roles = [];
    $scope.Permisos = [];
    $scope.estados = [];
    $scope.estadosForList = [];
    $scope.rol = {};

    $scope.pagination = {
        current: 1
    };

    
    $scope.filtrar = function (data) {
        var aux = angular.copy(data);
        aux.RolIdEstado = helpers.toArray(data.RolIdEstado, 'StId');
        $scope.listar(aux);
    }

    $scope.listar = function (data)
    {
        helpers.peticion('api/roles', data).get()
            .$promise.then(function(result)
            {
                $scope.estados = result.data.estados;
                $scope.roles = result.data.roles;
            }, function (error) {
                // helpers.notificaciones(error.data.message, 'error');
            });
    };
    $scope.getCrearRol = function (data)
    {
        helpers.peticion('api/roles/create', data).get()
            .$promise.then(function(result)
            {
                //console.log(result.data);
                //console.log(result)
            }, function (result) {
                // helpers.notificaciones(result.data.message, 'error');
            });
    };
     $scope.postCrearRol = function (data)
    {   
        //console.log(data);
         data.RolIdEstado=data.RolIdEstado.StId;
         data.RolIdEstadoAux=1;
         
        console.log(data);
         // helpers.peticion('api/roles', data).post()
         //    .$promise.then(function(result)
         //    {
         //        angular.element('#modal-crear').modal('hide');
         //        helpers.notificaciones(result.message, 'success');

         //    }, function (error) {
         //         if(error.data.error){
         //            helpers.notificaciones(result.data.error, 'error');

         //        }else{ 
         //            var errors = ObjectToArray(error.data.errors);
         //            for (var i = 0; i <  errors.length; i++) {
         //                for (var j = 0; j <  errors[i].length; j++) {
         //                    helpers.notificaciones(errors[i][j], 'error'); 
         //                }
         //            };
         //         }
                
               
         //    }).finally(function () {
         //        $scope.listar();
         //    });
    };
    $scope.getEditarRol = function (data)
    {

        helpers.peticion('api/roles/:RolId/edit', data).get()
            .$promise.then(function(result)
            {

                $scope.rol=result.data.rol;               
                $scope.estados=result.data.estados;                 
                
            }, function (result) {
                // helpers.notificaciones(result.data.message, 'error');
            });

    };
    function ObjectToArray(obj) {
      return Object.keys(obj).map((key) => obj[key])
    }

    $scope.editarFuncion = function (data,index) 
    {   
        // var estado=data.RolIdEstado;
        // data.RolIdEstado=data.StId;  
            helpers.peticion('api/roles/:RolId',data).put()
            .$promise.then(function(result) {
                // data = result.data.rol;
                $scope.rol=result.data.rol;
                // result.data.rol.RolIdEstado=$scope.estados[result.data.rol.RolIdEstado-1];
                angular.element('#modal-permisos').modal('hide');
                helpers.notificaciones(result.message, 'success');
            }, function (result) {
                // data.RolIdEstado=estado;
                //  if(result.data.error){
                //     helpers.notificaciones(result.data.error, 'error');
                // }else{ 
                //     var errors = ObjectToArray(result.data.errors);
                //     for (var i = 0; i <  errors.length; i++) {
                //         for (var j = 0; j <  errors[i].length; j++) {
                //             helpers.notificaciones(errors[i][j], 'error'); 
                //         }
                //     };
                //  }
            }).finally(function () {
                $scope.listar();
            });

    } 
    
    $scope.eliminar = function (data, index)
    {
        helpers.peticion('api/roles/:RolId').delete(data)
            .$promise.then(function(result) {
                $scope.roles[index] = result.data.rol;
                $scope.roles[index].estado = data.estado;
                helpers.notificaciones(result.message, 'success');
            }, function (error) {
                // helpers.notificaciones(error.data.message, 'error');
            }).finally(function () {
                $scope.listar();
            });
    }

    //*Gestion permisos*//
    $scope.paginaPermisos = {total: 0, perPage: 0};
    $scope.listarPermisos = function (rol, pagina)
    {   
        
       var data={rol_id:rol.RolId,libre:0, page: pagina}
         helpers.peticion('api/permisos',data).get()

            .$promise.then(function(result)
            {
                $scope.Permisos = result.data.permiso.data;
                $scope.paginaPermisos.total = result.data.permiso.total;
                $scope.paginaPermisos.perPage = result.data.permiso.per_page;
            }, function (error) {
                // helpers.notificaciones(error.data.message, 'error');
            });
    };

    $scope.cambiarPaginaPermisos = function (pagina, rol) {
        $scope.listarPermisos(rol, pagina);
    }

    $scope.delAdd = function (rol,valor,Indice) 
    {  
        var data= { 
            rol_id:rol.RolId,
            ruta_id:$scope.Permisos[Indice].IdRuta,
            activo:(valor ? 1 : 0)
        }; 
        //console.log("Rol:",rol.RolId);
        //console.log("Data Vista:",data);
        
        
         helpers.peticion('api/permisos').post(data)
             .$promise.then(function(result) {
                data = result.data.permiso;
                data.nombre=$scope.Permisos[Indice].nombre;
                data.Id=result.data.permiso.id;
                data.IdRuta=result.data.permiso.ruta_id;
                //console.log("result:",result.data.permiso);
                $scope.Permisos[Indice]=data;
                //console.log("Scope:",$scope.Permisos[Indice])
             }, function (error) {
                 // helpers.notificaciones(error.data.message, 'error');
             })
             // .finally(function(data){
             //    console.log("finalizado",data);
             // });
    } 
    //End gestion de permisos*//

    $scope.listar();

}]);
