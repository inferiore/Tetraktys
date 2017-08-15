var app= angular.module('detallecliente', []);

app.controller('detalleClienteController', function($scope,  $interval) {

    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    var progression1 = 0;
    var progression2 = 0;
    var progression3 = 0;
    var progression4 = 0;
    var progression5 = 0;

    $scope.progress = $interval(function() {

        angular.element('.progress .faq-text1').text(progression1 + '%');
        angular.element('.progress .faq-text1').css({ 'left': progression1 + '%' });
        angular.element('.progress .faq-text1').css({ 'top': '-20px' });
        angular.element('.progress .faq-bar1').css({ 'width': progression1 + '%' });

        if (progression1 == 70) {
            $interval.cancel($scope.progress);

        } else
            progression1 += 1;

    }, 100);

    $scope.progress1 = $interval(function() {
        angular.element('.progress .faq-text2').text(progression2 + '%');
        angular.element('.progress .faq-text2').css({ 'left': progression2 + '%' });
        angular.element('.progress .faq-text2').css({ 'top': '-20px' });
        angular.element('.progress .faq-bar2').css({ 'width': progression2 + '%' });
        if (progression2 == 85) {
            $interval.cancel($scope.progress1);

        } else
            progression2 += 1;

    }, 100);
    $scope.progress2 = $interval(function() {
        angular.element('.progress .faq-text3').text(progression3 + '%');
        angular.element('.progress .faq-text3').css({ 'left': progression3 + '%' });
        angular.element('.progress .faq-text3').css({ 'top': '-20px' });
        angular.element('.progress .faq-bar3').css({ 'width': progression3 + '%' });
        if (progression3 == 50) {
            $interval.cancel($scope.progress2);

        } else
            progression3 += 1;

    }, 100);
    $scope.progress3 = $interval(function() {
        angular.element('.progress .faq-text4').text(progression4 + '%');
        angular.element('.progress .faq-text4').css({ 'left': progression4 + '%' });
        angular.element('.progress .faq-text4').css({ 'top': '-20px' });
        angular.element('.progress .faq-bar4').css({ 'width': progression4 + '%' });
        if (progression4 == 95) {
            $interval.cancel($scope.progress3);

        } else
            progression4 += 1;

    }, 100);
    $scope.progress4 = $interval(function() {
        angular.element('.progress .faq-text5').text(progression5 + '%');
        angular.element('.progress .faq-text5').css({ 'left': progression5 + '%' });
        angular.element('.progress .faq-text5').css({ 'top': '-20px' });
        angular.element('.progress .faq-bar5').css({ 'width': progression5 + '%' });
        if (progression5 == 65) {
            $interval.cancel($scope.progress4);

        } else
            progression5 += 1;

    }, 100);

     // oculta la ventana de edicion de los campos de general  
    $scope.editCancelBtn = function() {
        var c = angular.element('#edit-btn').find("i");
        c.removeClass('icofont-close');
        c.addClass('icofont-edit');
        $scope.IsHidden = $scope.IsHidden ? false : true;
        $scope.IsHiddenInfo = $scope.IsHiddenInfo ? false : true;
    };

    // oculta la ventana de edicion de los campos de cartera
    $scope.editCancelBtn1 = function() {
        var c = angular.element('#edit-btn1').find("i");
        c.removeClass('icofont-close');
        c.addClass('icofont-edit');
        $scope.IsHidden1 = $scope.IsHidden1 ? false : true;
        $scope.IsHiddenInfo1 = $scope.IsHiddenInfo1 ? false : true;
    };

    // oculta la ventana de edicion de los campos de logistica
     $scope.editCancelBtn2 = function() {
        var c = angular.element('#edit-btn2').find("i");
        c.removeClass('icofont-close');
        c.addClass('icofont-edit');
        $scope.IsHidden2 = $scope.IsHidden2 ? false : true;
        $scope.IsHiddenInfo2 = $scope.IsHiddenInfo2 ? false : true;
    };

     $scope.editCancelBtn = function() {
        var c = angular.element('#edit-btn').find("i");
        c.removeClass('icofont-close');
        c.addClass('icofont-edit');
        $scope.IsHidden = $scope.IsHidden ? false : true;
        $scope.IsHiddenInfo = $scope.IsHiddenInfo ? false : true;
    };

    // Muestra u oculta la ventana de edicion de campos de general
    $scope.IsHidden = true;
    $scope.IsHiddenInfo = false;
    $scope.editBtn = function() {
        $scope.IsHidden = $scope.IsHidden ? false : true;
        $scope.IsHiddenInfo = $scope.IsHiddenInfo ? false : true;
        var b = angular.element('#edit-btn').find("i");
        var edit_class = b.attr('class');
        if (edit_class == "icofont icofont-edit") {
            b.removeClass('icofont-edit');
            b.addClass('icofont-close');
        } else {
            b.removeClass('icofont-close');
            b.addClass('icofont-edit');
        }
    };
    
    // Muestra u oculta la ventana de edicion de campos de cartera
    $scope.IsHidden1 = true;
    $scope.IsHiddenInfo1 = false;
    $scope.editBtn1 = function() {
        $scope.IsHidden1 = $scope.IsHidden1 ? false : true;
        $scope.IsHiddenInfo1 = $scope.IsHiddenInfo1 ? false : true;
        var b = angular.element('#edit-btn1').find("i");
        var edit_class = b.attr('class');
        if (edit_class == "icofont icofont-edit") {
            b.removeClass('icofont-edit');
            b.addClass('icofont-close');
        } else {
            b.removeClass('icofont-close');
            b.addClass('icofont-edit');
        }
    };
    
    // Muestra u oculta la ventana de edicion de campos de logistica
     $scope.IsHidden2 = true;
    $scope.IsHiddenInfo2 = false;
    $scope.editBtn2 = function() {
        $scope.IsHidden2 = $scope.IsHidden2 ? false : true;
        $scope.IsHiddenInfo2 = $scope.IsHiddenInfo2 ? false : true;
        var b = angular.element('#edit-btn2').find("i");
        var edit_class = b.attr('class');
        if (edit_class == "icofont icofont-edit") {
            b.removeClass('icofont-edit');
            b.addClass('icofont-close');
        } else {
            b.removeClass('icofont-close');
            b.addClass('icofont-edit');
        }
    };
    
    // Muestra u oculta la ventana de edicion de campos de Ventas
    $scope.IsHidden3 = true;
    $scope.IsHiddenInfo3 = false;
    $scope.editBtn3 = function() {
        $scope.IsHidden3 = $scope.IsHidden3 ? false : true;
        $scope.IsHiddenInfo3 = $scope.IsHiddenInfo3 ? false : true;
        var b = angular.element('#edit-btn3').find("i");
        var edit_class = b.attr('class');
        if (edit_class == "icofont icofont-edit") {
            b.removeClass('icofont-edit');
            b.addClass('icofont-close');
        } else {
            b.removeClass('icofont-close');
            b.addClass('icofont-edit');
        }
    };

    //accordion start
    $scope.oneAtATime = false;
    $scope.status = {
        single1Open: true,
        singlelclose: false,
        single2close: false,
        single3close: false,
        single4close: false,
        single5close: false,
        single6close: false,
        single7close: false,
        second1Open: true,
        secondlclose: false,
        second2close: false,
        second3close: false,
        second4close: false,
        second5close: false,
        second6close: false,
        second7close: false
    };
    // Opciones de dias para el recibo de mercancia
    $scope.multiple = {};
    $scope.opcion = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie','Sab'];
    
    // Opciones de objetos para el ingreso del personal
    $scope.multiple1 = {};
    $scope.opcion1 = ['Casco','Capucha','Gafas','Camisa','Overol','Guantes','Botas','Chaleco Reflectivo'];

    // Opciones de documentacion para el ingreso del personal
    $scope.multiple2 = {};
    $scope.opcion2 = ['ARL','Orde de Ingreso','Orden de Compra']
});