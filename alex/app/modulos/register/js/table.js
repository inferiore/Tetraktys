var app= angular.module('cliente', []);
app.controller('clienteController', function($scope,  DTOptionsBuilder) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('full_numbers')
        .withBootstrap()
        .withOption('bLengthChange', false)
        .withButtons([
            'copy', 'excel', 'csv', 'pdf', 'print'
        ]);
});