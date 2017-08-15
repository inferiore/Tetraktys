angular.module('AppTetraktys', [])
// .config(['',function() {
    
// }])
.controller('appCtrl', ['USUARIO','$state', '$scope', '$ocLazyLoad', '$location', '$window', 'helpers', function(USUARIO, $state, $scope, $ocLazyLoad, $location, $window, helpers){

    
    $scope.localLang = {
        selectAll       : "Todos",
        selectNone      : "Solo 1",
        reset           : "Deshacer",
        search          : "Buscar",
        nothingSelected : "Nada seleccionado"      
    };

    $scope.miNotificacion = [{
        msj: 'tienes un nuevo evento',
        fecha: '2017-05-16 12:30 am'
    }];
    $scope.menus = [];
    helpers.peticion('api/menu/:id').get({id: 123})
    .$promise.then(function (result) {
            $scope.menus = result.data.menu;
            USUARIO = result.data.usuario;
            $scope.usuario = USUARIO;

        }, function (error) {
            console.log(error);
        });
    $scope.logout = function () {
        helpers.logout();
        // $state.transitionTo('login');
    };

    $scope.notificame = function () {
        setInterval(function () {
            // helpers.peticion().notificacion().
            // .$promise.then(function(data) {
            //         $scope.miNotificacion.push();
            //         helpers.notificaciones('Bienvenido fulano', 'success');
            //     }, function (error) {
            //         helpers.notificaciones('Favor verificar los datos de acceso.', 'error');
            //     });
        },30000);
    };

    $scope.notificame();

    $scope.windowWidth = $(window);

    /*chatbar js start*/
    /*chat box scroll*/
    var a = $scope.windowWidth.height() - 50;
    $scope.friendListScroll = {
        height: a,
        allowPageScroll: false,
        wheelStep: 1,
        color: '#1b8bf9'
    };

    // search
    angular.element("#search-friends").on("keyup", function() {
        $scope.g = $(this).val().toLowerCase();
        angular.element(".friendlist-box .media-body .friend-header").each(function() {

            $scope.s = $(this).text().toLowerCase();
            $(this).closest('.friendlist-box')[$scope.s.indexOf($scope.g) !== -1 ? 'show' : 'hide']();
        });
    });

    // open chat box
    $scope.displayChatBox = function() {
        $scope.options = {
            direction: 'right'
        };
        angular.element('.showChat').toggle('slide', $scope.options, 500);
    };
    //open friend chat
    $scope.friendListBox = function() {
        $scope.options = {
            direction: 'right'
        };
        angular.element('.showChat_inner').toggle('slide', $scope.options, 500);
    };
    //back to main chatbar
    $scope.backChatBox = function() {
        $scope.options = {
            direction: 'right'
        };
        angular.element('.showChat_inner').toggle('slide', $scope.options, 500);
        angular.element('.showChat').css('display', 'block');
    };
    /*chatbar js ends*/

    //sidebar dropdown open
    $scope.designation = function() {
        angular.element(".extra-profile-list").slideToggle();
    };


    // toggle full screen
    $scope.toggleFullScreen = function() {
        if (!document.fullscreenElement && // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }
    
}])
.controller('menuCtrl', ['$scope', '$location', '$window','$document', function($scope, $location, $window,$document) {
    /*    //$controller('globalController', { $scope: $scope, $log: $log, $timeout: $timeout, $state: $state });*/
    /*chat box scroll*/
    angular.element('aside.main-sidebar').height($('body').height() - 50);

    angular.element('.sidebar-toggle').on('click', function() {
        console.log("finales")
        var $window = $(window);
        if ($window.width() < 767) {
            $scope.setMenu();
        } else {
            if (angular.element("body").hasClass("sidebar-collapse") == true) {
                $scope.sidebar = {
                        destroy: true
                    };

                if (angular.element("body").hasClass("box-layout") == true) {
                    angular.element("body").removeClass("fixed");
                } else {
                    angular.element("body").addClass("fixed");
                    angular.element("body").addClass("header-fixed");
                }
                angular.element(".sidebar").css('overflow', 'visible');
                angular.element(".sidebar-menu").css('overflow', 'visible');
                angular.element(".sidebar-menu").css('height', 'auto');
            } else {

                var a = $(window).height() - 70;
                angular.element('#sidebar-scroll').height($(window).height() - 70);
                $scope.sidebar = {
                    height: a,
                    allowPageScroll: false,
                    wheelStep: 5,
                    color: '#000'
                };

                angular.element("body").removeClass("header-fixed");
                if (angular.element("body").hasClass("box-layout") == true) {
                    angular.element("body").removeClass("fixed");
                } else {
                    angular.element("body").addClass("fixed");
                }
                angular.element("#sidebar-scroll").css('width', '100%');
                angular.element(".sidebar").css('overflow', 'inherit');
                angular.element(".sidebar-menu").css('overflow', 'inherit');
            }
        }
    });

    //for menu
    var w = angular.element($window);

    w.bind('resize', function() {
        $scope.setMenu();
    });
    $scope.setMenu = function() {
        var $window = $(window);
        if ($window.width() < 1024 && $window.width() >= 767) {
            if (angular.element("body").hasClass("container") == true) {
                angular.element("body").addClass("container");
            }
            $scope.sidebar = { destroy: true };
            angular.element("body").removeClass("fixed");
            angular.element("body").addClass("sidebar-collapse");
            angular.element(".sidebar").css('overflow', 'visible');
            angular.element(".sidebar-menu").css('overflow', 'visible');
            angular.element(".sidebar-menu").css('height', 'auto');
        } else if ($window.width() < 540 && $window.width() < 767) {
            if (angular.element("body").hasClass("box-layout") == true) {
                angular.element("body").removeClass("container");
            }
            angular.element(".main-header").css('margin-top', '50px');
            $scope.sidebar = { destroy: true };
            angular.element("body").removeClass("fixed");
            angular.element("body").addClass("sidebar-collapse");
            angular.element(".sidebar").css('overflow', 'visible');
            angular.element(".sidebar-menu").css('overflow', 'visible');
            angular.element(".sidebar-menu").css('height', 'auto');
        } else if ($window.width() > 540 && $window.width() < 767) {
            if (angular.element("body").hasClass("box-layout") == true) {
                angular.element("body").removeClass("container");
            }
            angular.element(".main-header").css('margin-top', '0px');
            $scope.sidebar = { destroy: true };
            angular.element("body").removeClass("fixed");
            angular.element("body").addClass("sidebar-collapse");
            angular.element(".sidebar").css('overflow', 'visible');
            angular.element(".sidebar-menu").css('overflow', 'visible');
            angular.element(".sidebar-menu").css('height', 'auto');
        } else if ($window.width() >= 1024) {
            var a = $(window).height() - 70;
            $('#sidebar-scroll').height($(window).height() - 70);
            $scope.sidebar = {
                height: a,
                allowPageScroll: false,
                wheelStep: 5,
                color: '#000'
            };
            angular.element(".main-header").css('margin-top', '0px');
            if (angular.element("body").hasClass("box-layout") == true) {
                angular.element("body").removeClass("fixed");
                angular.element("body").addClass("container");
            } else {
                angular.element("body").addClass("fixed");
            }
            angular.element("body").removeClass("sidebar-collapse");
            angular.element("#sidebar-scroll").css('width', '100%');
            angular.element(".sidebar").css('overflow', 'inherit');
            angular.element(".sidebar-menu").css('overflow', 'inherit');
        } else {

            angular.element("body").removeClass("sidebar-collapse");
            if (angular.element("body").hasClass("box-layout") == true) {
                angular.element("body").removeClass("fixed");
                angular.element("body").addClass("container");
            } else {
                angular.element("body").addClass("fixed");
            }
        }
    };
   $scope.tree = function(menu) {
        var _this = this;
        var animationSpeed = 200;
        $scope.openTree=function(event) {
           
            //Get the clicked link and the next element
            var $this = $(event.currentTarget);
            var checkElement =$(event.currentTarget).children()[1];

            //Check if the next element is a menu and is visible
            if ((checkElement.className== "treeview-menu") && (checkElement.className== ":visible")){
                //Close the menu
                $(checkElement).slideUp(animationSpeed, function() {
                    checkElement.removeClass('menu-open');
                    //Fix the layout in case the sidebar stretches over the height of the window
                    //_this.layout.fix();
                });
                checkElement.parent("li").removeClass("active-tree");
            }
            //If the menu is not visible
            else if ((checkElement.className== "treeview-menu") && (checkElement.className!= ":visible")) {
                //Get the parent menu
                var parent = $this.parents('ul').first();
                //Close all open menus within the parent
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                //Remove the menu-open class from the parent
                ul.removeClass('menu-open');
                //Get the parent li
                var parent_li = $this.parent("li");

                //Open the target menu and add the menu-open class
                $(checkElement).slideDown(animationSpeed, function() {
                    //Add the class active to the parent li
                    $(checkElement).addClass('menu-open');
                    parent.find('li.active-tree').removeClass('active-tree');
                    parent_li.addClass('active-tree');
                });
            }
            //if this isn't a link, prevent the page from being redirected
            if (checkElement.className== "treeview-menu") {
                
            }
        };
    };
    // Activate sidenav treemenu
   /* $.tree('.sidebar');*/
   $scope.tree('.sidebar');
}])

// .controller('rolesCtrl', ['$scope', 'helpers', function($scope, helpers){
    
//     $scope.rolesAll = [];

//     helpers.peticion('api/roles').get()
//     .$promise.then(function(data) 
//     {
//         $scope.rolesAll = data.data.roles;
//     }, function (error) {
//         helpers.notificaciones(error.data.message, 'error');
//     });

//     $scope.rolesEditar = function () {
       
//     }

// }]);





