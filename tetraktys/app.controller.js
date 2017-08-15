ableApp.controller('globalController', function($scope, $timeout, $state) {
    $scope.$state = $state;
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
        /*
        // chat-sidebar
        var ost = 0;
        $(window).scroll(function() {
            var windowHeight = $scope.windowWidth.innerHeight();
            if ($scope.windowWidth.width() <= 767) {
                var cOst = $(this).scrollTop();
                if (cOst == 0) {
                    angular.element('.showChat').removeClass('top-showChat').addClass('fix-showChat');
                } else if (cOst > ost) {
                    angular.element('.showChat').removeClass('fix-showChat').addClass('top-showChat');
                }
                ost = cOst;
            }
        });

        // Start [ Menu-bottom ]
            angular.element(".dropup-mega, .dropup").hover(function() {
                var dropdownMenu = $(this).children(".dropdown-menu");
                $(this).toggleClass("open");
            });
        // End [ Menu ]*/

    //element js 
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
});

ableApp.controller('commonController', function($scope) {
     /* --------------------------------------------------------
       Color picker - demo only
       --------------------------------------------------------   */
    angular.element('<div class="color-picker"><a href="#" class="handle"><i class="icofont icofont-color-bucket"></i></a><div class="settings-header"><h3>Setting panel</h3></div><div class="section"><h3 class="color">Normal color schemes:</h3><div class="colors"><a href="#" class="color-1" ></a><a href="#" class="color-2" ></a><a href="#" class="color-3" ></a><a href="#" class="color-4" ></a><a href="#" class="color-5"></a></div></div><div class="section"><h3 class="color">Inverse color:</h3><div><a href="#" class="color-inverse"><img class="img img-fluid img-thumbnail" src="assets/images/inverse-layout.jpg" /></a></div></div></div>').appendTo($('body'));

      /*Gradient Color*/
      /*Normal Color */
      angular.element(".color-1").on('click',function() {
          angular.element("#color").attr("href", "assets/css/color/color-1.css");
          return false;
      });
      angular.element(".color-2").on('click',function() {
          angular.element("#color").attr("href", "assets/css/color/color-2.css");
          return false;
      });
      angular.element(".color-3").on('click',function() {
          angular.element("#color").attr("href", "assets/css/color/color-3.css");
          return false;
      });
      angular.element(".color-4").on('click',function() {
          angular.element("#color").attr("href", "assets/css/color/color-4.css");
          return false;
      });
      angular.element(".color-5").on('click',function() {
          angular.element("#color").attr("href", "assets/css/color/color-5.css");
          return false;
      });
        angular.element(".color-inverse").on('click',function() {
            angular.element("#color").attr("href", "assets/css/color/inverse.css");
            return false;
        });


      angular.element('.color-picker').animate({
          right: '-239px'
      });

      angular.element('.color-picker a.handle').click(function(e) {
          e.preventDefault();
          var div = angular.element('.color-picker');
          if (div.css('right') === '-239px') {
              angular.element('.color-picker').animate({
                  right: '0px'
              });
          } else {
              angular.element('.color-picker').animate({
                  right: '-239px'
              });
          }
      });

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
});

ableApp
.controller('menuController', function($scope, $location, $window,$document) {
/*    //$controller('globalController', { $scope: $scope, $log: $log, $timeout: $timeout, $state: $state });*/
    /*chat box scroll*/
    angular.element('aside.main-sidebar').height($('body').height() - 50);

    angular.element('.sidebar-toggle').on('click', function() {
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
});

ableApp.controller('megaMenuController', function($scope, $location, $window) {
    //$controller('globalController', { $scope: $scope, $log: $log, $timeout: $timeout, $state: $state });
    /*chat box scroll*/
    angular.element('aside.main-sidebar').height($('body').height() - 50);

    angular.element('.sidebar-toggle').on('click', function() {
        var $window = $(window);
        if ($window.width() < 767) {
            $scope.setMenu();
        } else {
            if (angular.element("body").hasClass("sidebar-collapse") == true) {

                angular.element("#sidebar-scroll").slimScroll({ destroy: true });

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
        if ($(window).width() > 767) {

            angular.element("body").addClass('fixed');
        } else if ($window.width() < 540 && $window.width() < 767) {
            angular.element(".main-header").css('margin-top', '50px');
            angular.element("body").removeClass("fixed");
        } else if ($window.width() > 540 && $window.width() < 767) {
            angular.element(".main-header").css('margin-top', '0px');
            angular.element("body").removeClass("fixed");
        }
    };

});

ableApp.controller('menuFooterFixedController', function($scope,$location, $window) {
    //$controller('globalController', { $scope: $scope, $log: $log, $timeout: $timeout, $state: $state });
    /*chat box scroll*/
    angular.element('aside.main-sidebar').height($('body').height() - 50);

    angular.element('.sidebar-toggle').on('click', function() {
        var $window = $(window);
        if ($window.width() < 767) {
            $scope.setMenu();
        } else {
            if (angular.element("body").hasClass("sidebar-collapse") == true) {

                 $scope.sidebar = { destroy: true };

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

    var w = angular.element($window);
    w.bind('resize', function() {
        $scope.setMenu();
    });
    $scope.setMenu = function() {

        if ($(window).height() > $('body').height())
            angular.element('.footer-bg').css('position', 'fixed');
        else
            angular.element('.footer-bg').css('position', 'absolute');
    };

});

ableApp.controller('menuHeaderFixedController', function($scope, $location, $window) {
    //$controller('globalController', { $scope: $scope, $log: $log, $timeout: $timeout, $state: $state });
    /*chat box scroll*/
    angular.element('aside.main-sidebar').height($('body').height() - 50);

    angular.element('.sidebar-toggle').on('click', function() {
        var $window = $(window);
        if ($window.width() < 767) {
            $scope.setMenu();
        } else {
            if (angular.element("body").hasClass("sidebar-collapse") == true) {

                $scope.sidebar = { destroy: true };

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

    var w = angular.element($window);
    w.bind('resize', function() {
        $scope.setMenu();
    });
    $scope.setMenu = function() {

        var $window = $(window);
        if ($window.width() < 1024 && $window.width() >= 767) {
            angular.element("body").addClass("sidebar-collapse");
            angular.element("body").removeClass("fixed");
            angular.element("#sidebar-scroll").css('width', '100%');
           $scope.sidebar = {
                    destroy: true
                };
            angular.element(".sidebar").css('overflow', 'visible');
            angular.element(".sidebar-menu").css('overflow', 'visible');
        } else if ($window.width() >= 1024) {
            angular.element("#sidebar-scroll").css('width', '100%');
             $scope.sidebar = {
                    destroy: true
                };
            angular.element(".sidebar").css('overflow', 'visible');
            angular.element(".sidebar-menu").css('overflow', 'visible');
            angular.element("body").removeClass("fixed");
        } else if ($window.width() < 767) {

            angular.element("body").addClass("sidebar-collapse");
            angular.element("body").removeClass("fixed");
            angular.element("#sidebar-scroll").css('width', '100%');
            $scope.sidebar = {
                    destroy: true
                };
            angular.element(".sidebar").css('overflow', 'visible');
            angular.element(".sidebar-menu").css('overflow', 'visible');
        } else {
            angular.element("body").removeClass("sidebar-collapse");
            angular.element("body").addClass("fixed");
            var a = $(window).height() - 70;
            angular.element('#sidebar-scroll').height($(window).height() - 70);
            $scope.sidebar = {
                height: a,
                allowPageScroll: false,
                wheelStep: 5,
                color: '#000'
            };
            angular.element("#sidebar-scroll").css('width', '100%');
            angular.element(".sidebar").css('overflow', 'inherit');
            angular.element(".sidebar-menu").css('overflow', 'inherit');
        }
    };

});

ableApp.controller('menuHorizontalController', function($scope, $location, $window) {
    if($(window).width() < (767)) {
    
        angular.element("body").removeClass("fixed");
      angular.element('aside.main-sidebar').height($('body').height()+90);
      
    }
    var w = angular.element($window);

    w.bind('resize', function() {
        $scope.setMenu();
    });
    $scope.setMenu = function() {
        if($(window).width()>767){
        angular.element("body").addClass('fixed');
        angular.element('.sidebar-menu').find('li.active').removeClass('active');
        angular.element('.sidebar-menu').find('ul.menu-open').removeClass('menu-open');
    }
    else{
        var a= $(window).height()-70;
      angular.element(".sidebar").css('height',a);
            angular.element("body").removeClass('fixed');
        }
    };

});

ableApp.controller('menuHorizontalIconFixedController', function($scope, $location, $window) {
     $(window).scroll(function(){
      if($(window).width()>767){
      var sidbar_top =50 - $(window).scrollTop();
      if($(window).scrollTop()>50){
        angular.element('.main-sidebar').css('position','fixed');
            angular.element('.main-sidebar').css('top','0');
        angular.element('.main-sidebar').css('padding-top','0');
      }
      else{
        angular.element('.main-sidebar').css('position','absolute');
        angular.element('.main-sidebar').css('padding-top','50px');
        }
      }
      else{
        angular.element('.main-sidebar').css('position','absolute');
        angular.element('.main-sidebar').css('padding-top','100px');
      }
     });
});

ableApp.controller('menuSidebarStickyController', function($scope, $location, $window) {
    //$controller('globalController', { $scope: $scope, $log: $log, $timeout: $timeout, $state: $state });
    /*chat box scroll*/
    angular.element('aside.main-sidebar').height($('body').height() - 50);

    angular.element('.sidebar-toggle').on('click', function() {
        var $window = $(window);
        if ($window.width() < 767) {
            $scope.setMenu();
        } else {
            if (angular.element("body").hasClass("sidebar-collapse") == true) {

               $scope.sidebar = { destroy: true };

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

    $(window).scroll(function() {
        if ($("body").hasClass("sidebar-collapse") == false) {
            if ($(window).width() < 767)
                var sidbar_top = 100 - $(window).scrollTop();
            else
                var sidbar_top = 50 - $(window).scrollTop();
            setMenuscroll(sidbar_top);
        } else {
            $('.main-sidebar').css('position', 'absolute');
        }
    });

    function setMenuscroll(sidbar_top) {
        if (sidbar_top > 0) {
            $('.main-sidebar').css('padding-top', sidbar_top);
            $('.main-sidebar').css('top', '0');
            $('.main-sidebar').css('position', 'fixed');
        } else {
            $('.main-sidebar').css('padding-top', '0');
            $('.main-sidebar').css('top', '0');
            $('.main-sidebar').css('position', 'fixed');
        }
    }
    $('.sidebar-toggle').on('click', function() {
        var $window = $(window);
        if ($window.width() < 767) {
            setMenu();
        } else {
            if ($("body").hasClass("sidebar-collapse") == true) {
                $("#sidebar-scroll").slimScroll({ destroy: true });
                $("body").removeClass("fixed");
                $("body").addClass("header-fixed");
                $(".sidebar").css('overflow', 'visible');
                $(".sidebar-menu").css('overflow', 'visible');
                $(".sidebar-menu").css('height', 'auto');
            } else {
                var a = $(window).height() - 70;
                $('#sidebar-scroll').height($(window).height() - 70);
                $("#sidebar-scroll").slimScroll({
                    height: a,
                    allowPageScroll: false,
                    wheelStep: 5,
                    color: '#fff'
                });
                $("body").removeClass("header-fixed");
                $("body").addClass("fixed");
                $("#sidebar-scroll").css('width', '100%');
                $(".sidebar").css('overflow', 'inherit');
                $(".sidebar-menu").css('overflow', 'inherit');
            }
        }
    });

    var w = angular.element($window);
    w.bind('resize', function() {
        $scope.setMenu();
    });
    $scope.setMenu = function() {

        var $window = $(window);
        if ($window.width() < 1024 && $window.width() >= 767) {
          $scope.sidebar = { destroy: true };
            $("body").removeClass("fixed");
            $("body").addClass("sidebar-collapse");
            $(".sidebar").css('overflow', 'visible');
            $(".sidebar-menu").css('overflow', 'visible');
            $(".sidebar-menu").css('height', 'auto');
            var sidbar_top = 50 - $(window).scrollTop();
            setMenuscroll(sidbar_top);
        } else if ($window.width() < 767) {

            $scope.sidebar = { destroy: true };
            $("body").removeClass("fixed");
            $("body").addClass("sidebar-collapse");
            $(".sidebar").css('overflow', 'visible');
            $(".sidebar-menu").css('overflow', 'visible');
            $(".sidebar-menu").css('height', 'auto');

        } else if ($window.width() >= 1024) {

            var a = $(window).height() - 70;
            $('#sidebar-scroll').height($(window).height() - 70);
            $scope.sidebar = {
                height: a,
                allowPageScroll: false,
                wheelStep: 5,
                color: '#000'
            };
            $("body").addClass("fixed");
            $("body").removeClass("sidebar-collapse");
            $("#sidebar-scroll").css('width', '100%');
            $(".sidebar").css('overflow', 'inherit');
            $(".sidebar-menu").css('overflow', 'inherit');
            var sidbar_top = 50 - $(window).scrollTop();
            setMenuscroll(sidbar_top);
        } else {
            $("body").removeClass("sidebar-collapse");
            $("body").addClass("fixed");
            var sidbar_top = 100 - $(window).scrollTop();
            setMenuscroll(sidbar_top);
        }
    };

});

ableApp.controller('menuStaticController', function($scope, $location, $window) {
    //$controller('globalController', { $scope: $scope, $log: $log, $timeout: $timeout, $state: $state });
    /*chat box scroll*/
    angular.element('aside.main-sidebar').height($('body').height() - 50);

    angular.element('.sidebar-toggle').on('click', function() {
        var $window = $(window);
        if ($window.width() < 767) {
            $scope.setMenu();
        } else {
            
            if (angular.element("body").hasClass("sidebar-collapse") == true) {

                $scope.sidebar = { destroy: true };

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
        debugger;
        var $window = $(window);
        if ($window.width() < 1024 && $window.width() >= 767) {
            $("body").addClass("sidebar-collapse");
            $("body").removeClass("fixed");
        } else if ($window.width() >= 1024) {
            $("#sidebar-scroll").css('width', '100%');
            $scope.sidebar = { destroy: true };
            $(".sidebar").css('overflow', 'visible');
            $(".sidebar-menu").css('overflow', 'visible');
            $("body").removeClass("fixed");
        } else if ($window.width() < 767) {
            $("body").addClass("sidebar-collapse");
            $("body").removeClass("fixed");
        } else {
             debugger;
            $("body").removeClass("sidebar-collapse");
            $("body").addClass("fixed");
            var a = $(window).height() - 70;
            $('#sidebar-scroll').height($(window).height() - 70);
            $("#sidebar-scroll").slimScroll({
                height: a,
                allowPageScroll: false,
                wheelStep: 5,
                color: '#000'
            });
            $("#sidebar-scroll").css('width', '100%');
            $(".sidebar").css('overflow', 'inherit');
            $(".sidebar-menu").css('overflow', 'inherit');
        }
    };

});


ableApp.controller("accordionController", function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });

    // Accordion 
    $scope.oneAtATime = false;
    $scope.status = {
        multiple1Open: true,
        multiplelclose: false,
        multiple2close: false,
        single1Open: true,
        singlelclose: false,
        single2close: false,
        scale1Open: true,
        scalelclose: false,
        scale2close: false,
        color1Open: true,
        colorlclose: false,
        color2close: false
    };
});

ableApp.controller('commonController', function($scope) {

    /* --------------------------------------------------------
       Color picker - demo only
       --------------------------------------------------------   */
    angular.element('<div class="color-picker"><a href="" class="handle"><i class="icofont icofont-color-bucket"></i></a><div class="settings-header"><h3>Setting panel</h3></div><div class="section"><h3 class="color">Normal color schemes:</h3><div class="colors"><a href="" class="color-1" ></a><a href="" class="color-2" ></a><a href="" class="color-3" ></a><a href="" class="color-4" ></a><a href="" class="color-5"></a></div></div><div class="section"><h3 class="color">Inverse color:</h3><div><a href="" class="color-inverse"><img class="img img-fluid img-thumbnail" src="assets/images/inverse-layout.jpg" /></a></div></div></div>').appendTo($('body'));

    /*Gradient Color*/
    /*Normal Color */
    angular.element(".color-1").on('click', function() {
        angular.element("#color").attr("href", "assets/css/color/color-1.css");
        return false;
    });
    angular.element(".color-2").on('click', function() {
        angular.element("#color").attr("href", "assets/css/color/color-2.css");
        return false;
    });
    angular.element(".color-3").on('click', function() {
        angular.element("#color").attr("href", "assets/css/color/color-3.css");
        return false;
    });
    angular.element(".color-4").on('click', function() {
        angular.element("#color").attr("href", "assets/css/color/color-4.css");
        return false;
    });
    angular.element(".color-5").on('click', function() {
        angular.element("#color").attr("href", "assets/css/color/color-5.css");
        return false;
    });
    angular.element(".color-inverse").on('click', function() {
        angular.element("#color").attr("href", "assets/css/color/inverse.css");
        return false;
    });


    angular.element('.color-picker').animate({
        right: '-239px'
    });

    angular.element('.color-picker a.handle').click(function(e) {
        e.preventDefault();
        var div = angular.element('.color-picker');
        if (div.css('right') === '-239px') {
            angular.element('.color-picker').animate({
                right: '0px'
            });
        } else {
            angular.element('.color-picker').animate({
                right: '-239px'
            });
        }
    });

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
});

ableApp.controller('aceEditorController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.editor = ace.edit("editor");
    $scope.editor.setTheme("ace/theme/xcode");
    $scope.editor.session.setMode("ace/mode/javascript");
    $scope.editor.getSession().on('change', function(e) {
        $scope.update(a);
    });
    $scope.update = function(a) {
        $scope.editor.session.setMode(a);
    };
    angular.element("#mode").on('change', function(event) {
        $scope.currentMode = this.value;
        var a = "ace/mode/" + $scope.currentMode;
        $scope.editor.session.setMode(a);
        $scope.update(a);
    });
});

ableApp.controller('animationController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.transitions = "bounce";
    $scope.init = function() {
        $scope.a = $scope.transitions;
        $scope.name = angular.element(".item").addClass("animated " + $scope.a);
        $(".item").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            angular.element(".item").removeClass("animated " + $scope.a);
        });
    }

    $scope.animate = function(t) {

        $scope.a = $scope.transitions;
        $scope.name = angular.element(".item").addClass("animated " + $scope.a);
        $(".item").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            angular.element(".item").removeClass("animated " + $scope.a);
        });
    };
    $scope.Clickanimate = function() {

        $scope.a = $scope.transitions;
        $scope.name = angular.element(".item").addClass("animated " + $scope.a);
        $(".item").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            angular.element(".item").removeClass("animated " + $scope.a);
        });
    };
});

ableApp.controller('buttonFabController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    // toolbar button
    angular.element(".fab-icon").click(function() {
        angular.element(".fab-icon i").toggleClass("toolbar-active");
    });

    // SPEED DIAL button
    angular.element(".jfab_main_btn").click(function() {
        angular.element(".jfab_btns_wrapper").removeClass("speed-btn");
        angular.element(".jfab_btns_wrapper").toggleClass("speed-dial-btn");

    });

    // Radial button
    angular.element('.fab').click(function() {
        angular.element('.radial').toggleClass('open');
    });

    /*floating action button*/
    angular.element(".popout .btn").click(function() {

        angular.element(this).toggleClass("active");
        angular.element(this).closest(".popout").find(".panel").toggleClass("active");
    });
    angular.element(document).click(function() {
        angular.element(".popout .panel").removeClass("active");
        angular.element(".popout .btn").removeClass("active");
    });
    angular.element(".popout .panel").click(function(event) {

        event.stopPropagation();
    });
    angular.element(".popout .btn").click(function(event) {
        event.stopPropagation();
    });

    // FAB-EXPAND-ANIMATION
    $scope.fab = $('#fab-expand');
    $scope.isExpanded = false;

    $scope.fab.on('click', function() {

        if (!$scope.isExpanded) {
            $scope.fab.addClass('is-expanding');

            setTimeout(function() {
                $scope.fab.find('.icofont').removeClass('icofont-plus').addClass('icofont-ui-close expand-close');
                $scope.fab.removeClass('is-expanding').addClass('expanded');
                $scope.isExpanded = true;
                $scope.fab.trigger('expanded');
            }, 500);
        }
    });

    $scope.fab.on('click', '.expand-close', function(e) {

        $scope.close = $(this);
        e.stopPropagation();
        $scope.fab.find('.inner-content').remove();
        $scope.fab.removeClass('expanded').addClass('is-closing');

        setTimeout(function() {
            $scope.close.removeClass('icofont-ui-close pull-right expand-close').addClass('icofont-plus');
            $scope.fab.removeClass('is-closing');
            $scope.isExpanded = false;
        }, 500);
    });

    $scope.fab.on('expanded', function() {
        $scope.fab.append('<h1 class="inner-content">Content<h1/>');
    });
});

ableApp.controller('chartController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    // Doughnut Chart
    $scope.labels = ["A", "B", "C", "D "];
    $scope.series = ["A", "B", "C", "D "];
    $scope.data = [40, 10, 40, 10];
    $scope.colors = ["#2196F3", "#ff5252", "#4CAF50", "#f57c00"];
    $scope.options = {
        legend: { display: true }
    };

    // rader chart
    $scope.radarlabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
    $scope.radardata = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];
    $scope.radarcolors = ["#2196F3", "#ff5252"];
    $scope.radaroptions = {
        legend: { display: true },
        scale: {
            reverse: true,
            ticks: {
                beginAtZero: true
            }
        }
    };
    $scope.radarseries = ["My First dataset", "My Second dataset"];

    // Polar chart
    $scope.polarlabels = ["Blue", "Red", "Green", "Pink", "Orange"];
    $scope.polardata = [11, 16, 7, 3, 14];
    $scope.polarseries = ["Blue", "Red", "Green", "Pink", "Orange"];
    $scope.polarcolors = ["#2196F3", "#ff5252", "#4CAF50", "#FF0084", "#f57c00"];
    $scope.polaroptions = {
        legend: { display: true },
        elements: {
            arc: {
                borderColor: "#000000"
            }
        }
    };

    //pie chart
    $scope.pielabels = ["Red", "Blue"];
    $scope.piedata = [30, 50];
    $scope.piecolors = ["#ff5252", "#2196F3"];
    $scope.pieseries = ["Red", "Blue"];
    $scope.pieoptions = {
        legend: { display: true }
    };

    // bar chart
    $scope.barlabels = [0, 1, 2, 3, 4, 5, 6, 7];
    $scope.barseries = ['My First dataset', 'My second dataset'];
    $scope.bardata = [
        [65, 59, 80, 81, 56, 55, 50],
        [60, 69, 85, 91, 58, 50, 45]
    ];
    $scope.barcolors = ["#f57c00", "#40c4ff"];
    $scope.baroptions = {
        barValueSpacing: 20,
        legend: { display: true }
    };
});

ableApp.controller('ckEditorController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    // setup editor options
    $scope.editorOptions = {
        language: 'en',
        uiColor: '#ffffff'
    };
    $scope.modelName = '<figure class="image image-illustration" style="float:left"> <img alt="" height="266" src="http://c.cksource.com/a/1/img/demo/brownie.jpg" width="400" /> <figcaption>Bon App&eacute;tit!</figcaption> </figure> <h2>Brownies</h2> <h3>Ingredients:</h3> <ul> <li>½ cup flour</li> <li>1 cup sugar</li> <li>½ cup butter, melted</li> <li>2 eggs</li> <li>1/3 cup cocoa powder</li> </ul> <p>Preheat the oven to <strong>350°F</strong> and grease the baking pan. Combine the flour, sugar and cocoa powder in a medium bowl. In another small bowl, whisk together the butter and eggs. Stir the two mixtures until just combined. Bake the brownies for 25 to 35 minutes. Remove from the oven and let it cool for 5 minutes. </p>';
    $scope.modelName1 = '<h1 style="text-align:center"><span style="font-family:Georgia,serif"><span style="color:#006699">Recognition of Achievement</span></span></h1> <p style="text-align:justify"><span style="font-family:Georgia,serif">This letter acknowledges the invaluable input <strong>you</strong>, as a member of our <em>Innovation Team</em>,&nbsp;have provided in the &ldquo;Implement Rich Text Editor&rdquo;&nbsp;project. The Management would like to hereby thank you for this great accomplishment that was delivered in a timely fashion, up to the highest company standards, and with great results:</span></p> <table border="1" bordercolor="#ccc" cellpadding="5" cellspacing="0" style="border-collapse:collapse;width:100%" summary="Project Schedule"> <thead> <tr> <th scope="col" style="background-color:#cccccc"><span style="font-family:Georgia,serif">Project Phase</span></th> <th scope="col" style="background-color:#cccccc"><span style="font-family:Georgia,serif">Deadline</span></th> <th scope="col" style="background-color:#cccccc"><span style="font-family:Georgia,serif">Status</span></th> </tr> </thead> <tbody> <tr> <td><span style="font-family:Georgia,serif">Phase 1: Market research</span></td> <td style="text-align:center"><span style="font-family:Georgia,serif">2016-10-15</span></td> <td style="text-align:center"><span style="font-family:Georgia,serif"><span style="color:#19b159">✓</span></span></td> </tr> <tr> <td style="background-color:#eeeeee"><span style="font-family:Georgia,serif">Phase 2: Editor implementation</span></td> <td style="background-color:#eeeeee; text-align:center"><span style="font-family:Georgia,serif">2016-10-20</span></td> <td style="background-color:#eeeeee; text-align:center"><span style="font-family:Georgia,serif"><span style="color:#19b159">✓</span></span></td> </tr> <tr> <td><span style="font-family:Georgia,serif">Phase 3: Rollout to Production</span></td> <td style="text-align:center"><span style="font-family:Georgia,serif">2016-10-22</span></td> <td style="text-align:center"><span style="font-family:Georgia,serif"><span style="color:#19b159">✓</span></span></td> </tr> </tbody> </table> <p style="text-align:justify"><span style="font-family:Georgia,serif">The project that you participated in is of utmost importance to the future success of our platform. &nbsp;We are very proud to share that&nbsp;the&nbsp;CKEditor implementation was a huge success and brought congratulations from both the key Stakeholders and the Customers:</span></p> <blockquote> <p style="text-align:center">This new editor has totally changed our content creation experience!</p> <p style="text-align:center">&mdash; John F. Smith, CEO, The New Web</p> </blockquote> <p style="text-align:justify"><span style="font-family:Georgia,serif">This letter recognizes that much of our success is directly attributable to your efforts.&nbsp;You deserve to be proud of your achievement. May your future efforts be equally successful and rewarding.</span></p> <p style="text-align:justify"><span style="font-family:Georgia,serif">I am sure we will be seeing and hearing a great deal more about your accomplishments in the future. Keep up the good work!</span></p> <p>&nbsp;</p> <p><span style="font-family:Georgia,serif">Best regards,</span></p> <p><span style="font-family:Georgia,serif"><em>The Management</em></span></p>';
});

ableApp.controller('contactDetailController', function($scope, $window) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
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
    // search
    $("#search-users").on("keyup", function() {

        var g = $(this).val().toLowerCase();
        $(".contact-box .media-body .users-header").each(function() {

            var s = $(this).text().toLowerCase();
            $(this).closest('.contact-list-box')[s.indexOf(g) !== -1 ? 'show' : 'hide']();
        });
    });
});

ableApp.controller('dataTableController', function($scope,  DTOptionsBuilder) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('full_numbers')
        .withBootstrap()
        .withOption('bLengthChange', false)
        .withButtons([
            'copy', 'excel', 'csv', 'pdf', 'print'
        ]);
});

ableApp.controller('crmDashboardController', function($scope, $interval, DTOptionsBuilder) {
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

    $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('scrollY', 572);

    /* $scope.tableScroll={
           height: 675,
            allowPageScroll: false,
            wheelStep:5,
            color: '#000'
      };*/
});

ableApp.controller('dashboardController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //counter start    
    $scope.countFrom = 0;
    $scope.countTo = 4500;
    $scope.countTo1 = 3521;
    $scope.countTo2 = 1085;
    $scope.countTo3 = 4800;
    $scope.countTo4 = 37500;
    //Counter end

    //timer code start

    $scope.format = 'dd-MMM-yyyy hh:mm:ss a';
    //timer code end

    //area chart
    var pageload = {
        name: 'Users',
        datapoints: [
            { x: 'Monday', y: 10 },
            { x: 'Tuesday', y: 12 },
            { x: 'Wednesday', y: 21 },
            { x: 'Thrusday', y: 54 },
            { x: 'Friday', y: 260 },
            { x: 'Saturday', y: 830 },
            { x: 'Sunday', y: 710 }
        ]
    };

    var firstPaint = {
        name: 'PagesVisits',
        datapoints: [
            { x: 'Monday', y: 30 },
            { x: 'Tuesday', y: 182 },
            { x: 'Wednesday', y: 434 },
            { x: 'Thrusday', y: 791 },
            { x: 'Friday', y: 390 },
            { x: 'Saturday', y: 30 },
            { x: 'Sunday', y: 10 }
        ]
    };
    var secondPaint = {
        name: 'Visits',
        datapoints: [
            { x: 'Monday', y: 1320 },
            { x: 'Tuesday', y: 1132 },
            { x: 'Wednesday', y: 601 },
            { x: 'Thrusday', y: 234 },
            { x: 'Friday', y: 120 },
            { x: 'Saturday', y: 90 },
            { x: 'Sunday', y: 20 }
        ]
    };

    $scope.areadata = [pageload, firstPaint, secondPaint];
    $scope.areaconfig = {
        yAxis: { scale: false },
        debug: true,
        stack: true,
        color: ["#1B8BF9", "#BBC9EC", "#49C1F7"],
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: false
        },
        calculable: true,
    };

    //  Resource bar
    $(".resource-barchart").sparkline([5, 6, 2, 4, 9, 1, 2, 8, 3, 6, 4, 2, 1, 5], {
        type: 'bar',
        barWidth: '15px',
        height: '80px',
        barColor: '#fff',
        tooltipClassname: 'abc'
    });

});

ableApp.controller('dashboard2Controller', function($scope, $interval) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //counter start
    $scope.countFrom = 0;
    $scope.countTo = 4500;
    $scope.countTo1 = 3521;
    $scope.countTo2 = 1085;
    $scope.countTo3 = 2587;
    $scope.countTo4 = 5987;
    $scope.countTo6 = 6734;
    $scope.countTo7 = 58789;
    $scope.countTo8 = 658;
    $scope.countTo9 = 85749;
    //Counter end

    //area chart start

    $scope.areaoptions = {
        renderer: 'area'
    };

    $scope.areaseries = [{
        color: '#2f80e7',
        data: [
            { x: 0, y: 2 },
            { x: 1, y: 5 },
            { x: 2, y: 3 },
            { x: 3, y: 7 },
            { x: 4, y: 4 },
            { x: 5, y: 5 },
        ]

    }];
    $scope.areaseries1 = [{
        color: '#4ca250',
        data: [
            { x: 0, y: 2 },
            { x: 1, y: 5 },
            { x: 2, y: 1 },
            { x: 3, y: 7 },
            { x: 4, y: 2 },
            { x: 5, y: 5 },
        ]

    }];
    $scope.areaseries2 = [{
        color: '#de7203',
        data: [
            { x: 0, y: 1 },
            { x: 1, y: 5 },
            { x: 2, y: 3 },
            { x: 3, y: 7 },
            { x: 4, y: 3 },
            { x: 5, y: 5 },
        ]

    }];
    //area chart end

    //updating chart
    $scope.LineChartDashboard = {
        data: [5, 3, 6, 4, 2, 10, 2, 3, 9, 1, 2, 8],
        options: {
            width: 716,
            height: 200,
            fill: "#2196F3",
            stroke: "#2196F3"
        }
    };


    $interval(function() {
        $scope.random = Math.round(Math.random() * 10);
        $scope.values = $scope.LineChartDashboard.data;
        $scope.values.shift();
        $scope.values.push($scope.random);
    }, 1000);

    //Jquery code start
    // Live chart js
    function generateNumber(min, max) {
        min = typeof min !== 'undefined' ? min : 1;
        max = typeof max !== 'undefined' ? max : 100;

        return Math.floor((Math.random() * max) + min);
    }

    var chart,
        categories = ['Categorie 1', 'Categorie 2', 'Categorie 3', 'Categorie 4', 'ategorie 5', 'Categorie 6', 'ategorie 7', 'Categorie 8', 'Categorie 9', 'Categorie 10', 'Categorie 11', 'Categorie 12', 'Categorie 13', 'Categorie 14', 'Categorie 15', 'Categorie 16', 'Categorie 17', 'Categorie 18', 'Categorie 19', 'Categorie 20', 'Categorie 21', 'Categorie 22', 'Categorie 23', 'Categorie 24', 'Categorie 25', 'Categorie 26', 'Categorie 27', 'Categorie 28', 'Categorie 29', 'Categorie 30'],
        serie1 = [13, 13, 46, 61, 23, 12, 24, 16, 14, 12, 12, 24, 19, 13, 11, 11, 14, 11, 11, 11, 11, 13, 22, 10, 18, 15, 24, 31, 19, 10],
        serie2 = [52, 41, 58, 63, 55, 46, 45, 41, 38, 54, 50, 39, 48, 70, 63, 60, 58, 63, 83, 89, 83, 79, 83, 100, 104, 108, 52, 46, 83, 89],
        $aapls;



    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'graph',
            type: 'column',
            backgroundColor: 'transparent',
            height: 151,
            marginLeft: 3,
            marginRight: 3,
            marginBottom: 0,
            marginTop: 0
        },
        title: {
            text: ''
        },
        xAxis: {
            lineWidth: 0,
            tickWidth: 0,
            labels: {
                enabled: false
            },
            categories: categories
        },
        yAxis: {
            labels: {
                enabled: false
            },
            gridLineWidth: 0,
            title: {
                text: null,
            },
        },
        series: [{
            name: 'Awesomness',
            data: serie1
        }, {
            name: 'More Awesomness',
            color: '#fff',
            type: 'line',
            data: serie2
        }],
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                color: '#3d9e68',
                shadow: false
            },
            line: {
                marker: {
                    enabled: false
                },
                lineWidth: 3
            }
        },
        tooltip: {
            enabled: false
        }
    });

    setInterval(function() {
        chart.series[0].addPoint(generateNumber(), true, true);
        chart.series[1].addPoint(generateNumber(50, 150), true, true);
    }, 1000);



    setInterval(function() {
        $('.info-aapl span').each(function(index, elem) {
            $(elem).animate({
                height: generateNumber(1, 40)
            });
        });
    }, 3000);



    // Clock with calender js
    var info = {};
    var cities = [{
        name: 'Athens',
        utc: '+3'
    }, {
        name: 'London',
        utc: '+1'
    }, {
        name: 'Berlin',
        utc: '+2'
    }, {
        name: 'Paris',
        utc: '+2'
    }, {
        name: 'Taipei',
        utc: '+8'
    }, {
        name: 'Bangkok',
        utc: '+7'
    }, {
        name: 'Singapore',
        utc: '+8'
    }, {
        name: 'Prague',
        utc: '+2'
    }, {
        name: 'Toronto',
        utc: '-4'
    }, {
        name: 'Seoul',
        utc: '+9'
    }, {
        name: 'Rome',
        utc: '+2'
    }, {
        name: 'New York',
        utc: '-4'
    }, {
        name: 'Shanghai',
        utc: '+8'
    }, {
        name: 'Barcelona',
        utc: '+2'
    }, {
        name: 'Milan',
        utc: '+2'
    }, {
        name: 'Amsterdam',
        utc: '+2'
    }, {
        name: 'Vienna',
        utc: '+2'
    }, {
        name: 'Beijing',
        utc: '+8'
    }];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var current = 0;




    function init() {
        var date = new Date();
        $('.date').text(monthNames[date.getMonth()] + ' ' + date.getDate());
        $('.year').text(date.getFullYear());

        //fetch weather data
        for (var i = 0; i < cities.length; i++) {
            var date = new Date();
            $.getJSON('http://api.openweathermap.org/data/2.5/weather?APPID=c458144dcb333ecebc0dca40460acf7b&q=' + cities[i].name + '&callback=?&units=metric', null,
                function(data) {
                    if (data.cod == '404') return;
                    info[data.name] = {
                        name: data.name,
                        country: data.sys.country,
                        temp: data.main.temp,
                        weather: data.weather[0].main,
                        des: data.weather[0].description,
                        hum: data.main.humidity,
                        wind: data.wind.speed
                    };
                }).done(function(data) {
                if (data.name == 'Beijing')
                    update();

            });
        }

    }
    setTimes();
    init();


    //set the local times in degrees so it shows in the clock
    function setTimes() {
        var date = new Date();
        for (var j = 0; j < cities.length; j++) {
            var hours = (date.getUTCHours() > 11) ? date.getUTCHours() - 12 + parseInt(cities[j].utc, 10) : date.getUTCHours() + parseInt(cities[j].utc, 10);
            cities[j].hours = (hours / 12) * 360;
            cities[j].minoutes = (date.getUTCMinutes() / 60) * 360;

        }

    }

    //update all information for each place
    function update() {
        $('.update').addClass('anim');
        var city = info[cities[current].name];

        $('.place').text(city.name + ',' + city.country);
        $('.temp span').html(city.temp + '<sup>o</sup>C');
        $('.main').text(city.weather);
        $('.des').text(city.des);
        $('.wind span').html(city.wind + 'm/s');
        $('.humidity span').html(city.hum + '%');
        $('.hour').css('transform', 'rotate(' + cities[current].hours + 'deg)');
        $('.min').css('transform', 'rotate(' + cities[current].minoutes + 'deg)');
        current = (current + 1) % 18;
        setTimeout(update, 6000);
    }

    //after fade animation has finished remove the class that caused it so it can be reused
    $('.update').on('webkitAnimationEnd oAnimationEnd msAnimationEnd animationend', function() {
        $('.anim').removeClass('anim');
    });

    //  Resource bar
    $(".resource-barchart").sparkline([5, 6, 2, 4, 9, 1, 2, 8, 3, 6, 4, 2, 9, 8, 5, 7, 8], {
        type: 'bar',
        barWidth: '15px',
        height: '80px',
        barColor: '#fff',
        tooltipClassname: 'abc'
    });


    function digclock() {
        var d = new Date()
        var t = d.toLocaleTimeString()

        /* document.getElementById("system-clock").innerHTML = t;*/
    }

    setInterval(function() {
        digclock()
    }, 1000);
    //Jquery code end
});

ableApp.controller('dashboard3Controller', function($scope, $interval) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //counter start
    $scope.countFrom = 0;
    $scope.countTo = 8765;
    $scope.countTo1 = 2100;
    $scope.countTo2 = 258;
    //Counter end

    /*Bar*/
    $(".barchart").sparkline([5, 6, 2, 4, 9, 1, 2, 8, 3, 6, 4, 2, 9, 6, 4, 8, 6, 4], {
        type: 'bar',
        barWidth: '10px',
        height: '50px',
        barSpacing: '5px',
        tooltipClassname: 'abc'
    });

    //area chart
    var pageload = {
        datapoints: [
            { x: 'Chrome', y: 500 },
            { x: 'Firefox', y: 200 },
            { x: 'Safari', y: 322 },
            { x: 'Opera', y: 212 },
            { x: 'IE', y: 99 }
        ]
    };
    $scope.areadata = [pageload];
    $scope.areaconfig = {
        grid: {
            zlevel: 0,
            x: 20,
            x2: 20,
            y: 20,
            y2: 20,
            borderWidth: 0,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow', // line|shadow
                lineStyle: {
                    color: 'rgba(0,0,0,.5)',
                    width: 1
                },
                shadowStyle: {
                    color: 'rgba(0,0,0,.1)'
                }
            }
        },
        legend: {
            data: []
        },
        toolbox: {
            orient: 'vertical',
            show: true,
            showTitle: true,
            color: ['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd'],
            feature: {
                mark: {
                    show: false
                },
                dataZoom: {
                    show: true,
                    title: {
                        dataZoom: 'Data Zoom',
                        dataZoomReset: 'Reset Zoom'
                    }
                },
                dataView: {
                    show: false,
                    readOnly: true
                },
                magicType: {
                    show: true,
                    itemSize: 12,
                    itemGap: 12,
                    title: {
                        line: 'Area',
                        bar: 'Bar'
                    },
                    type: ['line', 'bar']
                },
                restore: {
                    show: false
                },
                saveAsImage: {
                    show: true,
                    title: 'Save as Image'
                }
            }
        },

        // Enable drag recalculate
        calculable: true,

        // Horizontal axis
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE'],
            axisLine: {
                show: false,
                onZero: true,
                lineStyle: {
                    color: 'rgba(63,81,181,1.0)',
                    type: 'solid',
                    width: '2',
                    shadowColor: 'rgba(0,0,0,0)',
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                    type: 'solid',
                    width: 0,
                    shadowColor: 'rgba(0,0,0,0)',
                },
            },
        }],

        // Vertical axis
        yAxis: [{
            type: 'value',
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'fff',
                    type: 'solid',
                    width: 0,
                    shadowColor: 'rgba(0,0,0,0)',
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                onZero: true,
                lineStyle: {
                    color: '#1b8bf9',
                    type: 'solid',
                    width: '0',
                    shadowColor: 'rgba(0,0,0,0)',
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                },
            },
        }],

        // Add series
        series: [{
            name: 'Total Visits',
            type: 'line',
            smooth: true,
            symbol: 'none',
            symbolSize: 2,
            showAllSymbol: true,
            itemStyle: {
                normal: {
                    color: '#1b8bf9',
                    borderWidth: 4,
                    borderColor: '#1b8bf9',
                    areaStyle: {
                        color: '#1b8bf9',
                        type: 'default'
                    }
                }
            },
        }],
    };

    //gauge chart
    function updateData($interval) {
        $interval(function() {
            ServerLoad.datapoints.push({ x: ServerLoad.datapoints[ServerLoad.datapoints.length - 1].x, y: (Math.random() * 100).toFixed(2) - 0 });
            ServerLoad.datapoints.shift();
        }, 2000);
    };
    var ServerLoad = {
        name: 'Server Load',
        datapoints: [{ x: 'Server Load', y: 40 },
            { x: 'Server Load', y: 80 },
            { x: 'Server Load', y: 50 },
            { x: 'Server Load', y: 80 },
            { x: 'Server Load', y: 80 },
            { x: 'Server Load', y: 70 }
        ]
    };

    $scope.gaugedata = [ServerLoad];
    $scope.gaugeconfig = {
        debug: true

    };
    updateData($interval);

    // Custom line chart primary
    $(".customchart-primary").sparkline([430, 430, 333, 430, 430, 545, 445, 415, 356, 321, 369, 437, 310, 215, 226, 378, 445, 252, 238, 365, 526, 625], {
        type: 'line',
        width: '718px',
        height: '120px',
        tooltipClassname: 'customTooltipClass',
        tooltipOffsety: '10',
        chartRangeMax: '0',
        lineColor: '#2f80e7',
        spotColor: '#2f80e7',
        highlightLineColor: 'transparent',
        highlightSpotColor: 'transparent',
        maxSpotColor: '#2f80e7',
        spotColor: '#2f80e7',
        fillColor: '#2f80e7'
    });

});

ableApp.controller('dashboard4Controller', function($scope, $interval) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //counter start
    $scope.countFrom = 0;
    $scope.countTo = 5478;
    $scope.countTo1 = 78451;
    $scope.countTo2 = 10;
    $scope.countTo3 = 100;
    $scope.countTo4 = 578;
    $scope.countTo5 = 20;
    $scope.countTo6 = 210;
    $scope.countTo7 = 10574;
    //counter end

    //datatable start

    $scope.dashboard4Scroll = {
        height: 330,
        allowPageScroll: false,
        wheelStep: 5,
        color: '#000'
    };


});

ableApp.controller('draggableController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //drage with image
    $scope.sortableOptions = {
        items: '> div'
    };

    //multiple drag
    $scope.draggableMultiple = {
        items: '> div.multipleList'
    };

    //drag without image 
    $scope.draggableWithoutImg = {
        items: '> div.withoutImg'
    };
});

ableApp.controller('echartController', function($scope, $interval) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //area chart
    var pageload = {
        name: 'load',
        datapoints: [
            { x: 'Monday', y: 10 },
            { x: 'Tuesday', y: 12 },
            { x: 'Wednesday', y: 21 },
            { x: 'Thrusday', y: 54 },
            { x: 'Friday', y: 260 },
            { x: 'Saturday', y: 830 },
            { x: 'Sunday', y: 710 }
        ]
    };

    var firstPaint = {
        name: 'firstPaint',
        datapoints: [
            { x: 'Monday', y: 30 },
            { x: 'Tuesday', y: 182 },
            { x: 'Wednesday', y: 434 },
            { x: 'Thrusday', y: 791 },
            { x: 'Friday', y: 390 },
            { x: 'Saturday', y: 30 },
            { x: 'Sunday', y: 10 }
        ]
    };
    var secondPaint = {
        name: 'secondPaint',
        datapoints: [
            { x: 'Monday', y: 1320 },
            { x: 'Tuesday', y: 1132 },
            { x: 'Wednesday', y: 601 },
            { x: 'Thrusday', y: 234 },
            { x: 'Friday', y: 120 },
            { x: 'Saturday', y: 90 },
            { x: 'Sunday', y: 20 }
        ]
    };

    $scope.areadata = [pageload, firstPaint, secondPaint];
    $scope.areaconfig = {
        yAxis: { scale: false },
        debug: true,
        stack: true,
        color: ["#1B8BF9", "#BBC9EC", "#49C1F7"],
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: false
        },
        calculable: true,
    };

    //bar chart
    var Acutal = {
        name: 'Acutal',
        datapoints: [
            { x: 'Cosco', y: 260 },
            { x: 'CMA', y: 200 },
            { x: 'APL', y: 220 },
            { x: 'OOCL', y: 120 },
            { x: 'Wanhai', y: 100 },
            { x: 'Zim', y: 80 }
        ]
    };

    var Forecast = {
        name: 'Forecast',
        datapoints: [
            { x: 'Cosco', y: 40 },
            { x: 'CMA', y: 80 },
            { x: 'APL', y: 50 },
            { x: 'OOCL', y: 80 },
            { x: 'Wanhai', y: 80 },
            { x: 'Zim', y: 70 }
        ]
    };


    $scope.bardata = [Acutal, Forecast];
    $scope.barconfig = {
        debug: true,
        stack: true,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value + '<br/>' + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
            }
        },
        toolbox: {
            show: false
        },
    };


    //gauge chart
    function updateData($interval) {
        $interval(function() {
            ServerLoad.datapoints.push({ x: ServerLoad.datapoints[ServerLoad.datapoints.length - 1].x, y: (Math.random() * 100).toFixed(2) - 0 });
            ServerLoad.datapoints.shift();
        }, 2000);
    };
    var ServerLoad = {
        name: 'Server Load',
        datapoints: [{ x: 'Server Load', y: 40 },
            { x: 'Server Load', y: 80 },
            { x: 'Server Load', y: 50 },
            { x: 'Server Load', y: 80 },
            { x: 'Server Load', y: 80 },
            { x: 'Server Load', y: 70 }
        ]
    };

    $scope.gaugedata = [ServerLoad];
    $scope.gaugeconfig = {
        debug: true

    };
    updateData($interval);
});

ableApp.controller('editableTableController', function($scope, $filter) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.user = {
        status: 2,
        fname: 'Mark',
        lname: 'Otto'
    };
    $scope.user1 = {
        status: 2,
        fname: 'Jacob',
        lname: 'Thorntonkk',
    };
    $scope.user2 = {
        status: 2,
        fname: 'Larry',
        lname: 'the Bird',
    };

    $scope.statuses = [
        { value: 1, text: '@mto' },
        { value: 2, text: '@fat' },
        { value: 3, text: '@twitter' }
    ];

    $scope.showStatus = function() {
        var selected = $filter('filter')($scope.statuses, { value: $scope.user.status });
        return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
    };
    $scope.showStatus1 = function() {
        var selected = $filter('filter')($scope.statuses, { value: $scope.user1.status });
        return ($scope.user1.status && selected.length) ? selected[0].text : 'Not set';
    };
    $scope.showStatus2 = function() {
        var selected = $filter('filter')($scope.statuses, { value: $scope.user2.status });
        return ($scope.user2.status && selected.length) ? selected[0].text : 'Not set';
    };


    //2nd table
    $scope.userList = [
        { id: 1, fname: 'awesome user1', lname: 'awesome last1', status: 2, },
        { id: 2, fname: 'awesome user2', lname: 'awesome last2', status: 1, },
        { id: 3, fname: 'awesome user3', lname: 'awesome last3', status: 3, }
    ];

    $scope.statusList = [
        { value: 1, text: '@mto' },
        { value: 2, text: '@fat' },
        { value: 3, text: '@twitter' }
    ];

    $scope.showStatusList = function(user) {
        var selected = [];
        if (user.status) {
            selected = $filter('filter')($scope.statusList, { value: user.status });
        }
        return selected.length ? selected[0].text : 'Not set';
    };

    // add user
    $scope.addUser = function() {
        $scope.inserted = {
            id: $scope.userList.length + 1,
            fname: 'click',
            lname: 'click',
            status: null
        };
        $scope.userList.push($scope.inserted);
    };
    // remove user
    $scope.removeUser = function(index) {
        $scope.userList.splice(index, 1);
    };
});

ableApp.controller('fileUploadController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.dzOptions = {
        paramName: 'photo',
        maxFilesize: '10'
    };

    $scope.dzCallbacks = {
        'addedfile': function(file) {

        }
    };
});

ableApp.controller('flagController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element('.f-item').click(function() {
        $scope.font_class = $(this).children().attr('class');
        $scope.country_name = $(this).parent().children('.content-flag').children(0).html();
        angular.element('#myModal').modal('show');
        angular.element('#icon').removeClass();
        angular.element('#icon').addClass($scope.font_class);
        angular.element('#icon').addClass('fa-lg');
        angular.element('#name').val($scope.country_name);
        angular.element('#code').val('<i class="' + $scope.font_class + '"></i>');
    });
});

ableApp.controller('chartFloatController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //categories chart
    $scope.categoriesDataset = [
        [
            ['January', 10],
            ['February', 8],
            ['March', 4],
            ['April', 13],
            ['May', 17],
            ['June', 9]
        ]
    ];
    $scope.categoriesOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 0.6,
                align: 'center'
            }
        },
        xaxis: {
            mode: 'categories',
            tickLength: 0
        },
        colors: ["#2196F3", "#0022FF"]
    };

    //pie chart
    $scope.pieDataset = [];
    $scope.pieOptions = {
        series: {
            pie: {
                show: true
            }
        },
        legend: {
            show: false
        },
        colors: ["#4CAF50", "#c9302c", "#2196F3"]
    };

    var pieSeries = 3;

    for (i = 0; i < pieSeries; i++) {
        $scope.pieDataset[i] = {
            label: 'Series' + (i + 1),
            data: Math.floor(Math.random() * 100) + 1
        };
    }

    //donut chart
    $scope.donutDataset = [];
    $scope.donutOptions = {
        series: {
            pie: {
                innerRadius: 0.5,
                show: true
            }
        },
        legend: {
            show: true
        },
        colors: ["#4CAF50", "#c9302c", "#2196F3"]

    };

    var donutSeries = 3;

    for (i = 0; i < donutSeries; i++) {
        $scope.donutDataset[i] = {
            label: 'Series' + (i + 1),
            data: Math.floor(Math.random() * 100) + 1
        };
    }
});

ableApp.controller('fontAwesomeController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element('.icon-list-demo div').click(function() {
        $scope.font_class = ($(this).children('.fa').attr('class'));
        angular.element('#myModal').modal('show');
        angular.element('#icon').removeClass();
        angular.element('#icon').addClass($scope.font_class);
        angular.element('#icon').addClass('fa-lg');
        angular.element('#name').val($scope.font_class);
        angular.element('#code').val('<i class="' + $scope.font_class + '"></i>');
    });
});

ableApp.controller('fooTableController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.clearFilter = function() {
        $('.filter-status').val('');
        $('.footable').trigger('footable_clear_filter');
    };

    $scope.filteringEventHandler = function(e) {
        var selected = $('.filter-status').find(':selected').text();
        if (selected && selected.length > 0) {
            e.filter += (e.filter && e.filter.length > 0) ? ' ' + selected : selected;
            e.clear = !e.filter;
        }
    };

    $scope.filterByStatus = function() {
        $('.footable').trigger('footable_filter', {
            filter: $('#filter').val()
        });
    };

    $scope.filter = {
        status: null
    };
});

ableApp.controller('footerController', function($scope, $window) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    var appWindow = angular.element($window);

    appWindow.bind('resize', function() {
        $scope.setSize();
    });
    appWindow.bind('load', function() {
        $scope.setSize();
    });


    $scope.setSize = function() {
        if (appWindow.height() > $('body').height()) {
            $('.footer-bg').css('position', 'fixed');
        } else {
            $('.footer-bg').css('position', 'absolute');
        }

    };
});

ableApp.controller('formElementAdvanceController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //switchery start
    $scope.switches = {
        basic: true,
        basic1: true,
        basic2: true,
        basic3: true,
        basic4: true,
        basic5: true,
        basic6: true,
        basic7: true,
        basic8: true,
        basic9: true,
        basic10: true,
        custom: false
    }

    $scope.isDisabled = true;
    $scope.disableButton = function() {
        $scope.isDisabled = true;
    };

    $scope.enableButton = function() {
            $scope.isDisabled = false;
        }
        //switchery end

    //selec2 start
    //multiple select
    $scope.multipleDemo = {};
    $scope.availableOptions = ['Alabama', 'Wyoming', 'Coming', 'Hanry Die', 'John Doe'];

    $scope.multipleDemo1 = {};
    $scope.availableOptions1 = ['Alabama', 'Wyoming', 'Coming', 'Hanry Die', 'John Doe'];

    //single select
    $scope.person = {};
    $scope.personList = [{ name: 'Alabama', group: 'dev' }, { name: 'Wyoming', group: 'dev' }, { name: 'Coming', group: 'des' }, { name: 'Hanry Die', group: 'des' }, { name: 'John Doe', group: 'dev' }];

    $scope.someGroupFn = function(item) {
        if (item.group == "dev")
            return 'Developer';

        if (item.group == "des")
            return 'Designer';

    };

    //Diacritics selection
    $scope.onSelectCallback = function(item, model) {
        vm.counter++;
        vm.eventResult = { item: item, model: model };
    };

    //hiding search
    $scope.searchEnabled = false;

    //Theme supports
    $scope.person1 = {};
    $scope.person1List = [{ name: 'Alabama', group: 'dev' }, { name: 'Wyoming', group: 'dev' }, { name: 'Coming', group: 'des' }, { name: 'Hanry Die', group: 'des' }, { name: 'John Doe', group: 'dev' }, { name: 'Salma', group: 'des' }, { name: 'Dyna', group: 'des' }, { name: 'Roy', group: 'des' }, { name: 'Larry', group: 'des' }];

    //Enable and disable button
    $scope.disabled = false;
    $scope.enable = function() {
        $scope.disabled = false;
    };

    $scope.disable = function() {
        $scope.disabled = true;
    };

    //selec2 end

    //Max length start
    $scope.filterCells = function(value) {
        return value > 20 ? 'mouseenter' : 'none';
    };
    //max length end

    //multi select start

    //single
    $scope.singleSelect = [
        { name: "Cheese", ticked: false },
        { name: "Hanry Die", ticked: true },
        { name: "John Doe", ticked: false },
        { name: "Come Leo", ticked: false },
        { name: "Hampri Catlin", ticked: false }
    ];

    //multiselect
    $scope.multipleSelect = [
        { name: "Cheese", ticked: false },
        { name: "Hanry Die", ticked: true },
        { name: "John Doe", ticked: false },
        { name: "Come Leo", ticked: false },
        { name: "Hampri Catlin", ticked: false }
    ];

    //Group
    $scope.groupSelect = [

        {
            name: '<strong>Group 1</strong>',
            msGroup: true
        }, {

            name: 'Option 1.1',
            ticked: false
        }, {
            name: 'Option 1.2',
            ticked: true
        }, {
            msGroup: false
        }, {
            name: '<strong>Group 2</strong>',
            msGroup: true
        }, {
            name: 'Option 2.1',
            ticked: false
        }, {
            name: 'Option 2.2',
            ticked: false
        }, {
            name: 'Option 2.3',
            ticked: false
        }, {
            msGroup: false
        }, {
            msGroup: false
        }
    ];

    $scope.groupSelect1 = [

        {
            name: '<strong>Group 1</strong>',
            msGroup: true
        }, {

            name: 'Option 1.1',
            ticked: false
        }, {
            name: 'Option 1.2',
            ticked: true
        }, {
            msGroup: false
        }, {
            name: '<strong>Group 2</strong>',
            msGroup: true
        }, {
            name: 'Option 2.1',
            ticked: false
        }, {
            name: 'Option 2.2',
            ticked: false
        }, {
            name: 'Option 2.3',
            ticked: false
        }, {
            msGroup: false
        }, {
            msGroup: false
        }
    ];

    $scope.groupSelect2 = [

        {
            name: '<strong>Group 1</strong>',
            msGroup: true
        }, {

            name: 'Option 1.1',
            ticked: false
        }, {
            name: 'Option 1.2',
            ticked: true
        }, {
            msGroup: false
        }, {
            name: '<strong>Group 2</strong>',
            msGroup: true
        }, {
            name: 'Option 2.1',
            ticked: false
        }, {
            name: 'Option 2.2',
            ticked: false
        }, {
            name: 'Option 2.3',
            ticked: false
        }, {
            msGroup: false
        }, {
            msGroup: false
        }
    ];

    //Disable
    $scope.groupSelect1[1].disabled = true;

    //public methods     
    $scope.options = {
        searchPlaceHolder: 'Typing to filter.',
        labelAll: 'All Countries',
        labelSelected: 'Selected Countries',
        labelShow: 'name', // label name to show
        orderProperty: 'name',
        items: [
            { "name": "elem 1" },
            { "name": "elem 2" },
            { "name": "elem 3" },
            { "name": "elem 4" },
            { "name": "elem 5" },
            { "name": "elem 6" },
            { "name": "elem 7" },
            { "name": "elem 8" },
            { "name": "elem 9" },
            { "name": "elem 10" },
            { "name": "elem 11" },
            { "name": "elem 12" },
            { "name": "elem 13" },
            { "name": "elem 14" },
            { "name": "elem 15" },
            { "name": "elem 16" },
            { "name": "elem 17" },
            { "name": "elem 18" },
            { "name": "elem 19" }
        ],
        selectedItems: []
    };

    $scope.change = function(from, to, index) {

        if (index >= 0) {
            to.push(from[index]);
            from.splice(index, 1);
        } else {
            for (var i = 0; i < from.length; i++) {
                to.push(from[i]);
            }
            from.length = 0;
        }
    }

    //custom header and footer
    $scope.options1 = {
        searchPlaceHolder: 'Typing to filter.',
        labelAll: 'All Countries',
        labelSelected: 'Selected Countries',
        labelShow: 'name', // label name to show
        orderProperty: 'name',
        items: [
            { "name": "elem 1" },
            { "name": "elem 2" },
            { "name": "elem 3" },
            { "name": "elem 4" },
            { "name": "elem 5" },
            { "name": "elem 6" },
            { "name": "elem 7" },
            { "name": "elem 8" },
            { "name": "elem 9" },
            { "name": "elem 10" },
            { "name": "elem 11" },
            { "name": "elem 12" },
            { "name": "elem 13" },
            { "name": "elem 14" },
            { "name": "elem 15" },
            { "name": "elem 16" },
            { "name": "elem 17" },
            { "name": "elem 18" },
            { "name": "elem 19" }
        ],
        selectedItems: []
    };

    //pre selected options
    $scope.options2 = {
        searchPlaceHolder: 'Typing to filter.',
        labelAll: 'All Countries',
        labelSelected: 'Selected Countries',
        labelShow: 'name', // label name to show
        orderProperty: 'name',
        items: [
            { "name": "elem 1" },
            { "name": "elem 2" },
            { "name": "elem 3" },
            { "name": "elem 4" },
            { "name": "elem 5" },
            { "name": "elem 6" },
            { "name": "elem 7" },
            { "name": "elem 8" },
            { "name": "elem 9" },
            { "name": "elem 10" },
            { "name": "elem 11" },
            { "name": "elem 12" },
            { "name": "elem 13" },
            { "name": "elem 14" },
            { "name": "elem 15" },
            { "name": "elem 16" },
            { "name": "elem 17" },
            { "name": "elem 18" },
            { "name": "elem 19" }
        ],
        selectedItems: [{ "name": "elem 1" }]
    };

    //searchable
    $scope.options3 = {
        searchPlaceHolder: 'Typing to filter.',
        labelAll: 'All Countries',
        labelSelected: 'Selected Countries',
        labelShow: 'name', // label name to show
        orderProperty: 'name',
        items: [
            { "name": "elem 1" },
            { "name": "elem 2" },
            { "name": "elem 3" },
            { "name": "elem 4" },
            { "name": "elem 5" },
            { "name": "elem 6" },
            { "name": "elem 7" },
            { "name": "elem 8" },
            { "name": "elem 9" },
            { "name": "elem 10" },
            { "name": "elem 11" },
            { "name": "elem 12" },
            { "name": "elem 13" },
            { "name": "elem 14" },
            { "name": "elem 15" },
            { "name": "elem 16" },
            { "name": "elem 17" },
            { "name": "elem 18" },
            { "name": "elem 19" }
        ],
        selectedItems: []
    };

    //opto group
    $scope.options4 = {
        searchPlaceHolder: 'Typing to filter.',
        labelAll: 'All Countries',
        labelSelected: 'Selected Countries',
        labelShow: 'name', // label name to show
        orderProperty: 'name',
        items: [{
            name: "elem 1",
            members: [
                { name: "elem 1.1" },
                { name: "elem 1.2" },
                { name: "elem 1.3" }
            ]
        }, {
            name: "elem 2",
            members: [
                { name: "elem 2.1" },
                { name: "elem 2.2" },
                { name: "elem 2.3" },
                { name: "elem 2.4" }
            ]
        }, {
            name: "elem 3",
            members: [
                { name: "elem 3.1" },
                { name: "elem 3.2" },
                { name: "elem 3.3" }
            ]
        }],
        selectedItems: []
    };

    $scope.changeGroup = function(from, to, index) {

        if (index >= 0) {
            to.push(from[index]);
            to.push(from[index].members);
            from.splice(index, 1);
        } else {
            for (var i = 0; i < from.length; i++) {
                to.push(from[i]);
            }
            from.length = 0;
        }
    };

    $scope.changeSubGroup = function(from, to, index) {

        if (index >= 0) {
            to.push(from[index]);
            to.push(from[index].name);
            from.splice(index, 1);
        } else {
            for (var i = 0; i < from.length; i++) {
                to.push(from[i]);
            }
            from.length = 0;
        }
    };

    //multi select end 

    //Tag start
    $scope.tags = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];
    $scope.tags2 = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];
    $scope.tags1 = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' },
        { text: 'Tag4' },
        { text: 'Tag5' },
        { text: 'Tag6' }
    ];
    $scope.tags3 = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];
    $scope.tags4 = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];


    //Tag end

    //Bootstrap datepicker start
    /*$scope.datepickerOptions = {
               format: 'mm/dd/yyyy hh:mm',
               language: 'en',
               autoclose: true,
               weekStart: 0
             }*/
    //simple date time picker
    $scope.inputOnTimeSet = inputOnTimeSet;

    function inputOnTimeSet(newDate) {
        $log.info(newDate);
        $('#dropdown3').dropdown('toggle');
    }

    //local date time picker
    $scope.init = function() {
        moment.locale('en');
    }
    $scope.inputOnTimeSet1 = inputOnTimeSet1;

    function inputOnTimeSet1(newDate) {
        $log.info(newDate);
        $('#dropdown4').dropdown('toggle');
    }

    //date time picker with no icon
    $scope.inputOnTimeSet2 = inputOnTimeSet2;

    function inputOnTimeSet2(newDate) {
        $log.info(newDate);
        $('#dropdown5').dropdown('toggle');
    }

    //// Disable date timepicker
    $scope.inputOnTimeSet3 = inputOnTimeSet3;

    function inputOnTimeSet3(newDate) {
        $log.info(newDate);
        $('#dropdown6').dropdown('toggle');
    }

    //Custom icon
    $scope.inputOnTimeSet4 = inputOnTimeSet4;

    function inputOnTimeSet4(newDate) {
        $log.info(newDate);
        $('#dropdown7').dropdown('toggle');
    }

    //linked date time picker
    $scope.endDateBeforeRender = endDateBeforeRender
    $scope.endDateOnSetTime = endDateOnSetTime
    $scope.startDateBeforeRender = startDateBeforeRender
    $scope.startDateOnSetTime = startDateOnSetTime

    function startDateOnSetTime() {
        $scope.$broadcast('start-date-changed');
    }

    function endDateOnSetTime() {
        $scope.$broadcast('end-date-changed');
    }

    function startDateBeforeRender($dates) {
        if ($scope.dateRangeEnd) {
            var activeDate = moment($scope.dateRangeEnd);

            $dates.filter(function(date) {
                return date.localDateValue() >= activeDate.valueOf()
            }).forEach(function(date) {
                date.selectable = false;
            })
        }
    }

    function endDateBeforeRender($view, $dates) {
        if ($scope.dateRangeStart) {
            var activeDate = moment($scope.dateRangeStart).subtract(1, $view).add(1, 'minute');

            $dates.filter(function(date) {
                return date.localDateValue() <= activeDate.valueOf()
            }).forEach(function(date) {
                date.selectable = false;
            })
        }
    }

    //min view
    $scope.inputOnTimeSet5 = inputOnTimeSet5;

    function inputOnTimeSet5(newDate) {
        $log.info(newDate);
        $('#dropdown8').dropdown('toggle');
    }

    //Disable days
    $scope.disableDateBeforeRender = disableDateBeforeRender
    $scope.disableDateOnSetTime = disableDateOnSetTime

    function disableDateOnSetTime() {
        $scope.$broadcast('disable-date-changed');
    }

    function disableDateBeforeRender($dates) {
        /* if ($scope.dateRangeEnd) {
         */
        var activeDate = moment($scope.dateRangeEnd);
        var a = activeDate.format('dddd');

        $dates.filter(function(date) {
                return date.localDateValue() >= activeDate.valueOf()
            }).forEach(function(date) {
                date.selectable = false;
            })
            /*  }*/
    }

    //view mode
    $scope.inputOnTimeSet6 = inputOnTimeSet6;

    function inputOnTimeSet6(newDate) {
        $log.info(newDate);
        $('#dropdown9').dropdown('toggle');
    }

    //Date range picker
    $scope.date = {
        startDate: moment().subtract(1, "days"),
        endDate: moment()
    };

    //Blank Date range picker
    $scope.date1 = {
        startDate: moment().subtract(1, "days"),
        endDate: moment()
    };

    //Multiple options
    $scope.opts = {
        locale: {
            applyClass: 'btn-green',
            applyLabel: "Apply",
            fromLabel: "Od",
            toLabel: "Do",
            cancelLabel: 'Cancel',
            customRangeLabel: 'Custom Range',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            firstDay: 1,
            monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
            ]
        },
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    };

    //Date time picker (With to)
    $scope.secondDateBeforeRender = secondDateBeforeRender
    $scope.secondDateOnSetTime = endDateOnSetTime
    $scope.firstDateBeforeRender = firstDateBeforeRender
    $scope.firstDateOnSetTime = firstDateOnSetTime

    function firstDateOnSetTime() {
        $scope.$broadcast('first-date-changed');
    }

    function secondDateOnSetTime() {
        $scope.$broadcast('second-date-changed');
    }

    function firstDateBeforeRender($dates) {
        if ($scope.dateRangeSecond) {
            var activeDate = moment($scope.dateRangeSecond);

            $dates.filter(function(date) {
                return date.localDateValue() >= activeDate.valueOf()
            }).forEach(function(date) {
                date.selectable = false;
            })
        }
    }

    function secondDateBeforeRender($view, $dates) {
        if ($scope.dateRangeFirst) {
            var activeDate = moment($scope.dateRangeFirst).subtract(1, $view).add(1, 'minute');

            $dates.filter(function(date) {
                return date.localDateValue() <= activeDate.valueOf()
            }).forEach(function(date) {
                date.selectable = false;
            })
        }
    }

    //Bootstrap datepicker end
    //date time widget start
    angular.element('#date').bootstrapMaterialDatePicker({
        time: false,
        clearButton: true
    });

    angular.element('#time').bootstrapMaterialDatePicker({
        date: false,
        shortTime: false,
        format: 'HH:mm'
    });

    angular.element('#date-format').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY - HH:mm'
    });
    angular.element('#date-fr').bootstrapMaterialDatePicker({
        format: 'DD/MM/YYYY HH:mm',
        lang: 'fr',
        weekStart: 1,
        cancelText: 'ANNULER',
        nowButton: true,
        switchOnClick: true
    });

    angular.element('#date-end').bootstrapMaterialDatePicker({
        weekStart: 0,
        format: 'DD/MM/YYYY HH:mm'
    });
    angular.element('#date-start').bootstrapMaterialDatePicker({
        weekStart: 0,
        format: 'DD/MM/YYYY HH:mm',
        shortTime: true
    }).on('change', function(e, date) {
        angular.element('#date-end').bootstrapMaterialDatePicker('setMinDate', date);
    });

    angular.element('#min-date').bootstrapMaterialDatePicker({
        format: 'DD/MM/YYYY HH:mm',
        minDate: new Date()
    });
    angular.element('#date-fr').bootstrapMaterialDatePicker({
        format: 'DD/MM/YYYY HH:mm',
        lang: 'fr',
        weekStart: 1,
        cancelText: 'ANNULER'
    });
    /* $.material.init();*/
});

ableApp.controller('formElementMaterializeController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element("input:file").change(function(e, v) {
        var pathArray = $(this).val().split('\\');
        var img_name = pathArray[pathArray.length - 1];
        $(this).parent().children('.md-form-file').val(img_name);
        if (img_name)
            $(this).parent().children('.md-label-file').hide();
        else
            $(this).parent().children('.md-label-file').show();
    });
});

ableApp.controller('formsWizardController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.steps = [{
        template: '<div class="well m-t-30"><section><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-user"></i></span><div class="md-input-wrapper"><input id="nameS-2" name="userName" type="text" class="md-form-control"><label for="nameS-2" class="block">User name </label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-email"></i></span><div class="md-input-wrapper"><input id="emailS-2" name="email" type="email" class="md-form-control"><label for="emailS-2" class="block">Email </label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-password"></i></span><div class="md-input-wrapper"><input id="passwordS-2" name="password" type="text" class="md-form-control"><label for="passwordS-2" class="block">Password </label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-key"></i></span><div class="md-input-wrapper"><input id="confirmC-2" name="confirm" type="text" class="md-form-control"><label for="confirmC-2" class="block">Confirm Password </label></div></div></section></div>',
        title: 'Registartion'
    }, {
        template: '<div class="well m-t-30"><section><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-user"></i></span><div class="md-input-wrapper"><input id="nameGS-2" name="name" type="text" class="md-form-control"><label for="nameGS-2" class="block">First name </label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-user-alt-1"></i></span><div class="md-input-wrapper"><input id="surnameS-2" name="surname" type="text" class="md-form-control"><label for="surnameS-2" class="block">Last name </label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-cell-phone"></i></span><div class="md-input-wrapper"><input id="phoneS-2" name="phone" type="text" class="md-form-control phone"><label for="phoneS-2" class="block">Phone #</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-calendar"></i></span><div class="md-input-wrapper"><input id="example-date-inputS" name="Date Of Birth" type="text" class="md-form-control"><label for="example-date-inputS" class="block">Date Of Birth</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-map"></i></span><div class="md-input-wrapper"><select class="md-form-control"><option>Select State</option><option>Gujarat</option><option>Kerala</option><option>Karnataka</option><option>Meghalaya</option><option>Sikkim</option></select></div></div></section></div>',
        title: 'General information'
    }, {
        template: '<div class="well m-t-30"><section><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-university"></i></span><div class="md-input-wrapper"><input id="UniversityS-2" name="University" type="text" class="md-form-control"><label for="UniversityS-2" class="block">University</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-globe-alt"></i></span><div class="md-input-wrapper"><input id="CountryS-2" name="Country" type="text" class="md-form-control"><label for="CountryS-2" class="block">Country</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-hat"></i></span><div class="md-input-wrapper"><input id="DegreelevelS-2" name="Degree level" type="text" class="md-form-control"><label for="DegreelevelS-2" class="block">Degree level #</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-calendar"></i></span><div class="md-input-wrapper"><input id="datejoinS" name="Date Of Birth" type="text" class="md-form-control"><label for="datejoinS" class="block">Date Join</label></div></div></section></div>',
        title: 'Education'
    }, {
        template: '<div class="well m-t-30"><section><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-institution"></i></span><div class="md-input-wrapper"><input id="CompanyS-2" name="Company:" type="text" class="md-form-control"><label for="CompanyS-2" class="block">Company:</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-map"></i></span><div class="md-input-wrapper"><input id="CountryWS-2" name="Country" type="text" class="md-form-control"><label for="CountryWS-2" class="block">Country</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-support"></i></span><div class="md-input-wrapper"><input id="PositionS-2" name="Position" type="text" class="md-form-control"><label for="PositionS-2" class="block">Position</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-calendar"></i></span><div class="md-input-wrapper"><input id="datejoinWS" name="Date Of Birth" type="text" class="md-form-control"><label for="datejoinWS" class="block">Date Join</label></div></div></section></div>',
        title: 'Work experience'
    }];
    $scope.stepsValidation = [{
        template: '<div class="well m-t-30"><form id="main" class="form-horizontal" name="form" novalidate form-step-validity><div class="md-group-add-on p-relative"><span class="md-add-on"><i class="icofont icofont-ui-user"></i></span><div class="md-input-wrapper"><input type="text" class="md-form-control"  name="fname" id="username" ng-model="fname" required><label for="fname">Full Name</label><span style="color:red"  class="messages" ng-show="form.fname.$error.required && !$getActiveStep().valid">Username can not be blank</span></div></div><div class="md-group-add-on p-relative"><span class="md-add-on"><i class="icofont icofont-email"></i></span><div class="md-input-wrapper"><input type="email" class="md-form-control"  name="email" id="email" ng-model="email" required><label for="email">Email address</label><span style="color:red"  class="messages" ng-show="!$getActiveStep().valid && form.email.$error.required">Email can not be blank</span><span style="color:red"  class="messages" ng-show="form.email.$error.email">Invalid email address.</span></div></div><div class="md-group-add-on p-relative"><span class="md-add-on"><i class="icofont icofont-ui-password"></i></span><div class="md-input-wrapper"><input type="password" class="md-form-control"  name="psw" id="password" ng-model="psw" required><label for="password">Enter Password</label><span style="color:red"  class="messages" ng-show="!$getActiveStep().valid && form.psw.$error.required">Password can not be blank</span></div></div><div class="md-group-add-on p-relative"><span class="md-add-on"><i class="icofont icofont-key"></i></span><div class="md-input-wrapper"><input type="password" class="md-form-control"  name="cpsw" id="confirm-password" ng-model="cpsw" required><label for="confirm-password">Enter Confirm password</label><span style="color:red"  class="messages" ng-show="!$getActiveStep().valid && form.cpsw.$error.required">confirm-password can not be blank</span></div></div></form></div>',
        hasForm: true,
        title: 'Registartion'
    }, {
        template: '<div class="well m-t-30"> <form id="main" class="form-horizontal" name="form" novalidate form-step-validity> <div class="md-group-add-on p-relative"> <span class="md-add-on"> <i class="icofont icofont-ui-user"></i> </span> <div class="md-input-wrapper"> <input type="text" class="md-form-control" name="name" id="username" ng-model="name" required> <label for="name">First name</label> <span style="color:red" class="messages" ng-show="form.name.$error.required && !$getActiveStep().valid">First name can not be blank</span> </div></div><div class="md-group-add-on p-relative"> <span class="md-add-on"> <i class="icofont icofont-ui-user"></i> </span> <div class="md-input-wrapper"> <input type="text" class="md-form-control" name="lname" id="username" ng-model="lname" required> <label for="name">Last name</label> <span style="color:red" class="messages" ng-show="form.lname.$error.required && !$getActiveStep().valid">Last name can not be blank</span> </div></div><div class="md-group-add-on p-relative"> <span class="md-add-on"> <i class="icofont icofont-email"></i> </span> <div class="md-input-wrapper"> <input type="number" class="md-form-control" name="phone" id="email" ng-model="phone" required> <label for="phone">Phone</label> <span style="color:red" class="messages" ng-show="!$getActiveStep().valid && form.phone.$error.required">Phone can not be blank</span> </div></div><div class="md-group-add-on p-relative"> <span class="md-add-on"> <i class="icofont icofont-ui-password"></i> </span> <div class="md-input-wrapper"> <input type="text" class="md-form-control" name="date" id="password" ng-model="date" required> <label for="password">Date of birth</label> <span style="color:red" class="messages" ng-show="!$getActiveStep().valid && form.date.$error.required">Password can not be blank</span> </div></div></form></div>',
        hasForm: true,
        title: 'General information'
    }, {
        template: '<div class="well m-t-30"> <form id="main" class="form-horizontal" name="form" novalidate form-step-validity> <div class="md-group-add-on p-relative"> <span class="md-add-on"> <i class="icofont icofont-ui-user"></i> </span> <div class="md-input-wrapper"> <input type="text" class="md-form-control" name="University" id="username" ng-model="University" required> <label for="University">University</label> <span style="color:red" class="messages" ng-show="form.University.$error.required && !$getActiveStep().valid">University name can not be blank</span> </div></div><div class="md-group-add-on p-relative"> <span class="md-add-on"> <i class="icofont icofont-ui-user"></i> </span> <div class="md-input-wrapper"> <input type="text" class="md-form-control" name="country" id="username" ng-model="country" required> <label for="country">Country</label> <span style="color:red" class="messages" ng-show="form.country.$error.required && !$getActiveStep().valid">country can not be blank</span> </div></div><div class="md-group-add-on p-relative"> <span class="md-add-on"> <i class="icofont icofont-ui-user"></i> </span> <div class="md-input-wrapper"> <input type="text" class="md-form-control" name="Degree" id="username" ng-model="Degree" required> <label for="Degree">Degree Level</label> <span style="color:red" class="messages" ng-show="form.Degree.$error.required && !$getActiveStep().valid">Degree Level can not be blank</span> </div></div><div class="md-group-add-on p-relative"> <span class="md-add-on"> <i class="icofont icofont-ui-password"></i> </span> <div class="md-input-wrapper"> <input type="text" class="md-form-control" name="dateJoin" id="password" ng-model="dateJoin" required> <label for="dateJoin">Date of join</label> <span style="color:red" class="messages" ng-show="!$getActiveStep().valid && form.dateJoin.$error.required">Password can not be blank</span> </div></div></form></div>',
        hasForm: true,
        title: 'Education'
    }, {
        template: '<div class="well m-t-30"><section><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-institution"></i></span><div class="md-input-wrapper"><input id="CompanyS-2" name="Company:" type="text" class="md-form-control"><label for="CompanyS-2" class="block">Company:</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-map"></i></span><div class="md-input-wrapper"><input id="CountryWS-2" name="Country" type="text" class="md-form-control"><label for="CountryWS-2" class="block">Country</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-support"></i></span><div class="md-input-wrapper"><input id="PositionS-2" name="Position" type="text" class="md-form-control"><label for="PositionS-2" class="block">Position</label></div></div><div class="md-group-add-on"><span class="md-add-on"><i class="icofont icofont-ui-calendar"></i></span><div class="md-input-wrapper"><input id="datejoinWS" name="Date Of Birth" type="text" class="md-form-control"><label for="datejoinWS" class="block">Date Join</label></div></div></section></div>',
        title: 'Work experience'
    }];
});

ableApp.controller('fullCalenderController', function($scope,  $compile) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $calendar = $('[ui-calendar]');

    var date = new Date(),
        d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();

    $scope.changeView = function(view) {
        $calendar.fullCalendar('changeView', view);
    };

    /* config object */
    $scope.uiConfig = {
        calendar: {
            lang: 'en',
            height: '100%',
            editable: true,
            header: {
                //left: 'month basicWeek basicDay',
                //center: 'title',
                right: 'today prev,next'
            },
            eventClick: function(date, jsEvent, view) {
                $scope.alertMessage = (date.title + ' was clicked ');
            },
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventRender: $scope.eventRender
        }
    };

    $scope.events = [{
        title: 'All Day Event',
        start: new Date(y, m, 1)
    }, {
        title: 'Long Event',
        start: new Date(y, m, d - 5),
        end: new Date(y, m, d - 2)
    }, {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d - 3, 16, 0),
        allDay: false
    }, {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d + 4, 16, 0),
        allDay: false
    }, {
        title: 'Birthday Party',
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false
    }];

    $scope.eventSources = [$scope.events];
});

ableApp.controller('icoFontsController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element('.icon-list-demo div').click(function() {
        $scope.font_class = ($(this).children().attr('class'));
        angular.element('#myModal').modal('show');
        angular.element('#icon').removeClass();
        angular.element('#icon').addClass($scope.font_class);
        angular.element('#name').val($scope.font_class);
        angular.element('#code').val('<i class="' + $scope.font_class + '"></i>');
    });
});

ableApp.controller('issueListController', function($scope,  $interval) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.progression1 = 0;

    $scope.progress = $interval(function() {
        angular.element('.progress .issue-text1').text($scope.progression1 + '%');
        angular.element('.progress .issue-text1').css({ 'left': $scope.progression1 + '%' });
        angular.element('.progress .issue-text1').css({ 'top': '-20px' });
        angular.element('.progress .issue-bar1').css({ 'width': $scope.progression1 + '%' });

        if ($scope.progression1 == 70) {
            clearInterval($scope.progress);

        } else
            $scope.progression1 += 1;
    }, 100);
});

ableApp.controller('chartKnobController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //OVERLOADED 'DRAW' METHOD
    $scope.value = 24;
    $scope.options = {
        skin: {
            type: 'tron',
            width: 5,
            height: 5,
            color: '#f57c00',
            spaceWidth: 2
        },
        barColor: '#f57c00',
        trackWidth: 15,
        barWidth: 20,
        textColor: '#f57c00',
        step: 0.1,
        max: 100
    };

    //ANGLE OFFSET AND ARC
    $scope.anglevalue = 10;
    $scope.angleoptions = {
        startAngle: -120,
        endAngle: 120,
        trackColor: "rgb(238, 238, 238)",
        barColor: '#4CAF50',
        trackWidth: 25,
        barWidth: 25,
        subText: {
            enabled: false
        },
        max: 100
    };

    //DISABLE DISPLAY INPUT
    $scope.disablevalue = 20;
    $scope.disableoptions = {
        displayInput: false,
        animate: {
            enabled: true,
            duration: 2000,
            ease: 'linear'
        },
        trackWidth: 30,
        barWidth: 30,
        trackColor: 'rgb(238, 238, 238)',
        barColor: '#40c4ff'
    };
});

ableApp.controller('lightBoxController', function($scope,  Lightbox) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });

    //single image
    $scope.images = [{
        'url': 'assets/images/light-box/sl3.jpg',
        'thumbUrl': 'assets/images/light-box/l3.jpg'
    }];

    $scope.openLightboxModal = function(index) {
        Lightbox.openModal($scope.images, index);
    };

    //multiple image
    $scope.images1 = [{
        'url': 'assets/images/light-box/sl1.jpg',
        'thumbUrl': 'assets/images/light-box/l1.jpg'
    }, {
        'url': 'assets/images/light-box/sl2.jpg',
        'thumbUrl': 'assets/images/light-box/l2.jpg'
    }, {
        'url': 'assets/images/light-box/sl3.jpg',
        'thumbUrl': 'assets/images/light-box/l3.jpg'
    }, {
        'url': 'assets/images/light-box/sl4.jpg',
        'thumbUrl': 'assets/images/light-box/l4.jpg'
    }, ];

    $scope.openLightboxModal1 = function(index) {
        Lightbox.openModal($scope.images1, index);
    };
});

ableApp.controller('listController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //dynamic list
    $("button.remove").hide();
    $(".effeckt-list-wrap button.add").on('click', function(el) {
        var insertPoint = $($(el)[0].currentTarget.parentNode).find("li:nth-child(3)");
        $($(el)[0].currentTarget.parentNode).find("button.remove").show();

        $("<li />", {
            'text': "new item",
            'class': "new-item"
        }).insertAfter(insertPoint);
    });

    $(".effeckt-list-wrap button.remove").on('click', function(el) {
        var $parent = $($(el)[0].currentTarget.parentNode),
            self = this;

        var elToRemove = $parent.find("li.new-item").last();
        elToRemove.toggleClass("remove-item new-item");
        if (!$parent.find("li.new-item").length) {
            $parent.find("button.remove").hide();
        }
    });

    $("#dynamic-list-five-button").on("click", function() {
        $(this)
            .toggleClass("open")
            .find(".details")
            .slideToggle();
    });

    $("#dynamic-list-six-button").on("click", function() {

        $("#dynamic-list-six-list").toggleClass("open");

        $(this)
            .toggleClass("open")
            .find(".details")
            .slideToggle();
    });

    //List scroll1//$($el[0]).find("li")
    $scope.animateElementIn = function($el) {

        $el.removeClass('not-visible');
        $el.addClass('animated slideInDown'); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function($el) {
        $el.addClass('not-visible');
        $el.removeClass('animated slideInDown'); // this example leverages animate.css classes
    };
    //List scroll2
    $scope.animateElementIn1 = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated slideInUp'); // this example leverages animate.css classes
    };

    $scope.animateElementOut1 = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated slideInUp'); // this example leverages animate.css classes
    };
    //List scroll3
    $scope.animateElementIn2 = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated slideInLeft'); // this example leverages animate.css classes
    };

    $scope.animateElementOut2 = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated slideInLeft'); // this example leverages animate.css classes
    };
    //List scroll4
    $scope.animateElementIn3 = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated slideInRight'); // this example leverages animate.css classes
    };

    $scope.animateElementOut3 = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated slideInRight'); // this example leverages animate.css classes
    };
    //List scroll5
    $scope.animateElementIn4 = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated flipInX'); // this example leverages animate.css classes
    };

    $scope.animateElementOut4 = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated flipInX'); // this example leverages animate.css classes
    };
    //List scroll6
    $scope.animateElementIn5 = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated shake'); // this example leverages animate.css classes
    };

    $scope.animateElementOut5 = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated shake'); // this example leverages animate.css classes
    };
});

ableApp.controller('mapGoogleController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //basic map
    $scope.map = {
        center: {
            latitude: 21.2334329,
            longitude: 72.86372
        },
        zoom: 15

    };
    $scope.options = { scrollwheel: false };

    //Marker map
    $scope.markerMap = {
        center: {
            latitude: 21.2334329,
            longitude: 72.86372
        },
        zoom: 12,
        marker: {
            id: 0,
            coords: {
                latitude: 21.2334329,
                longitude: 72.86372
            }
        },
        marker1: {
            id: 1,
            coords: {
                latitude: 21.2299611,
                longitude: 72.8127235
            }
        }
    };

    //overlay map
    $scope.map1 = {
        center: {
            latitude: 21.2334329,
            longitude: 72.86372
        },
        showOverlay: true,
        zoom: 15,
    };

    //Geocoading map

    $scope.place = {};
    $scope.showPlaceDetails = function(param) {
        $scope.place = param;
    };
    $scope.Geowindow = {
            show: false,
            options: {
                pixelOffset: { width: 0, height: -40 }
            },
            idkey: 'place_id',
            templateurl: 'window.tpl.html',
            templateparameter: {},
            closeClick: function() {
                $scope.window.show = false;
            }
        },
        $scope.GeocoadingMap = {
            control: {},
            center: {
                latitude: 21.2334329,
                longitude: 72.86372
            },
            zoom: 12,
            dragging: false,
            bounds: {},
            markers: [],
            idkey: 'place_id',
            events: {
                idle: function(map) {

                },
                dragend: function(map) {
                    //update the search box bounds after dragging the map
                    var bounds = map.getBounds();
                    var ne = bounds.getNorthEast();
                    var sw = bounds.getSouthWest();
                    $scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw, ne);
                    //$scope.searchbox.options.visible = true;
                }
            }
        },
        $scope.searchbox = {
            template: 'searchbox.tpl.html',
            //position:'top-right',
            position: 'top-left',
            options: {
                bounds: {},
                visible: true
            },
            //parentdiv:'searchBoxParent',
            events: {
                places_changed: function(searchBox) {

                    places = searchBox.getPlaces()

                    if (places.length == 0) {
                        return;
                    }
                    // For each place, get the icon, place name, and location.
                    newMarkers = [];
                    var bounds = new google.maps.LatLngBounds();
                    for (var i = 0, place; place = places[i]; i++) {
                        // Create a marker for each place.
                        var marker = {
                            idKey: i,
                            place_id: place.place_id,
                            name: place.name,
                            latitude: place.geometry.location.lat(),
                            longitude: place.geometry.location.lng(),
                            templateurl: 'window.tpl.html',
                            templateparameter: place,
                            events: {
                                click: function(marker) {
                                    $scope.window.coords = {
                                        latitude: marker.model.latitude,
                                        longitude: marker.model.longitude
                                    }
                                    $scope.window.templateparameter = marker.model.templateparameter;
                                    $scope.window.show = true;

                                }
                            }
                        };
                        newMarkers.push(marker);
                        bounds.extend(place.geometry.location);
                    }

                    $scope.map.bounds = {
                        northeast: {
                            latitude: bounds.getNorthEast().lat(),
                            longitude: bounds.getNorthEast().lng()
                        },
                        southwest: {
                            latitude: bounds.getSouthWest().lat(),
                            longitude: bounds.getSouthWest().lng()
                        }
                    }

                    $scope.map.markers = newMarkers;
                }
            }
        };
});

ableApp.controller('materialDesignIconController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element('.icon-list-demo div').click(function() {
        $scope.font_class = ($(this).children('.zmdi').attr('class'));
        angular.element('#myModal').modal('show');
        angular.element('#icon').removeClass();
        angular.element('#icon').addClass($scope.font_class);
        angular.element('#icon').addClass('fa-lg');
        angular.element('#name').val($scope.font_class);
        angular.element('#code').val('<i class="' + $scope.font_class + '"></i>');
    });
});

ableApp.controller('messageController', function($scope, $window) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    var appWindow = angular.element($window);
    appWindow.bind('resize', function() {
        $scope.setHeight();
    });
    appWindow.bind('load', function() {

        $scope.setHeight();
    });
    $scope.setHeight = function() {

        if (appWindow.width() >= 991) {
            angular.element('.contact-btn').css('display', 'none');
            angular.element('.contact-box').addClass("contact-show");

        } else if (appWindow.width() <= 768) {

            angular.element('.contact-btn').css('display', 'block');
            angular.element('.contact-box').addClass("contact-hide");
            angular.element('.contact-box').css('top', '100px');
        } else if (appWindow.width() > 768 && appWindow.width() <= 990) {

            angular.element('.contact-btn').css('display', 'block');
            angular.element('.contact-box').addClass("contact-hide");
            angular.element('.contact-box').css('top', '50px');
        } else {
            angular.element('.contact-btn').css('display', 'block');
            angular.element('.contact-box').addClass("contact-hide");

        }
    };

    /*Click on contact button icon*/
    angular.element(".contact-btn").click(function() {

        if (angular.element('.contact-box').hasClass("contact-show") == true) {

            angular.element('.contact-box').removeClass("contact-show");
            angular.element('.contact-box').addClass("contact-hide");
        } else {

            angular.element('.contact-box').removeClass("contact-hide");
            angular.element('.contact-box').addClass("contact-show");
        }

    });
});

ableApp.controller('modalController', function($scope,  SweetAlert) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.demo1 = function() {
        SweetAlert.swal("Here's a message!", "It's pretty, isn't it?");
    }

    $scope.demo2 = function() {
        SweetAlert.swal("Good job!", "You clicked the button!", "success");
    }

    $scope.demo3 = function() {
        SweetAlert.swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function() {
            SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
    }

    $scope.demo4 = function() {
        SweetAlert.swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm) {
            if (isConfirm) {
                SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
            } else {
                SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    }

    $scope.demo6 = function() {
        SweetAlert.swal({
            title: "Ajax request example",
            text: "Submit to run ajax request",
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, function(isConfirm) {
            setTimeout(function() {
                swal("Ajax request finished!");
            }, 2000);
        });
    }

    //Modal effect
    $scope.isInit = true;
    $scope.effects_1 = [{
        name: "Fade In and Scale Up",
        value: "fi"
    }, {
        name: "Slide from the Right",
        value: "sl"
    }, {
        name: "Slide from the Bottom",
        value: "su"
    }, {
        name: "Slide Down and Stick At Top",
        value: "sdsat"
    }, {
        name: "Slide Up and Stick At Bottom",
        value: "susab"
    }, {
        name: "Newspaper",
        value: "n"
    }, {
        name: "Fall",
        value: "f"
    }, {
        name: "Side Fall",
        value: "sf"
    }];
    $scope.effects_2 = [{
        name: "Super Scaled",
        value: "ss"
    }, {
        name: "3D Flip Horizontal",
        value: "3dfh"
    }, {
        name: "3D Flip Vertical",
        value: "3dfv"
    }, {
        name: "3D Sign",
        value: "3dsign"
    }, {
        name: "3D Slit",
        value: "3dslit"
    }, {
        name: "3D Rotate from Bottom",
        value: "3dru"
    }, {
        name: "3D Rotate in from Left",
        value: "3drr"
    }];
    $scope.setModalData = function() {
        $scope.data.modalData.effect = "mkmd-effect-" + $scope.data.effectType;
    };
    $scope.data = {
        effectType: "fi",
        modalData: {
            zIndex: 10,
            effect: "mkmd-effect-fi",
            style: {
                height: "auto",
                width: "70%"
            }
        }
    };
    $scope.setModalData();

});

ableApp.controller('nestableController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.list1 = [{
        item: { id: 1, name: 'Item 1' }, // this object will be referenced as the $item on scope
        children: [{
            item: { id: 2, name: 'Item 2' },
            children: []
        }, {
            item: { id: 3, name: 'Item 3' },
            children: []
        }]
    }, {
        item: { id: 4, name: 'Item 4' },
        children: [{
            item: { id: 5, name: 'Item 5' },
            children: []
        }]
    }, {
        item: { id: 6, name: 'Item 6' },
        children: []
    }, {
        item: { id: 7, name: 'Item 7' },
        children: [{
                item: { id: 8, name: 'Item 8' },
                children: []
            }, {
                item: { id: 9, name: 'Item 9' },
                children: []
            }, {
                item: { id: 10, name: 'Item 10' },
                children: []
            }

        ]
    }];

    $scope.dragstartLinear = function(leaf, node, tree) {
        console.log(leaf, node, "dragstartLinear");
    }

    $scope.dragstartNested = function(leaf, node, tree) {
        console.log(leaf, node, "dragstartNested");
    }

    $scope.dragendLinear = function(leaf, node, tree) {
        if (node) {
            //a new theme was added
            this.addNewThemeAndReorderNodes(leaf, node, tree);
        }
        console.log(leaf, node, "dragendLinear");
    }

    $scope.dragendNested = function(leaf, node, tree) {
        console.log(leaf, node, "dragendNested");
    }

    $scope.addNewThemeAndReorderNodes = function(node, parent, tree) {

        var currNode = $scope.getNode($scope.list1, parent);
        console.log(currNode, "yg");
    }

    $scope.getNode = function(tree, node) {
        var obj = null;
        for (var id in tree) {
            var ele = tree[id]
                //this.$log.debug(ele);
            if (ele.item.id == parseInt(node, 10)) {
                obj = ele;
                console.log(ele, "match");
                //return(ele);
            }
            if (obj != null) {
                break;
            }
            console.log("nomatch");
            $scope.getNode(ele.children, node);

        }
        return obj;
    }

    angular.element('#nestable-menu').on('click', function(e) {
        var target = angular.element(e.target),
            action = target.data('action');
        if (action === 'expand-all') {
            angular.element('.dd').nestable('expandAll');
        }
        if (action === 'collapse-all') {
            angular.element('.dd').nestable('collapseAll');

        }
    });

});

ableApp.controller('notificationController', function($scope, Notification) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //notification position 
    $scope.TopLeft = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'left', positionY: 'top' });
    };
    $scope.TopRight = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top' });
    };
    $scope.TopCenter = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'center', positionY: 'top' });
    };
    $scope.BottomLeft = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'left', positionY: 'bottom' });
    };
    $scope.BottomRight = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'bottom' });
    };
    $scope.BottomCenter = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'center', positionY: 'bottom' });
    };

    // NOTIFICATION TYPE
    $scope.inverse = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top' });
    };
    $scope.info = function() {
        Notification.info({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top' });
    };
    $scope.success = function() {
        Notification.success({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top' });
    };
    $scope.warning = function() {
        Notification.warning({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top' });
    };
    $scope.danger = function() {
        Notification.error({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top' });
    };

    // NOTIFICATION BEHAVIOUR

    $scope.fadeIn = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-fadeIn.html' });
    };

    $scope.fadeInLeft = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-fadeInLeft.html' });
    };
    $scope.fadeInRight = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-fadeInRight.html' });
    };

    $scope.fadeInUp = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-fadeInUp.html' });
    };
    $scope.fadeInDown = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-fadeInDown.html' });
    };

    $scope.bounceIn = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-bounceIn.html' });
    };
    $scope.bounceInLeft = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-bounceInLeft.html' });
    };

    $scope.bounceInRight = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-bounceInRight.html' });
    };
    $scope.bounceInUp = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-bounceInUp.html' });
    };

    $scope.rotateInDownRight = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-rotateInDownRight.html' });
    };
    $scope.rotateIn = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-rotateIn.html' });
    };

    $scope.flipInX = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-flipInX.html' });
    };
    $scope.flipInY = function() {
        Notification({ message: 'Turning standard angular-ui-notification alerts into awesome notifications', positionX: 'right', positionY: 'top', templateUrl: 'angular-ui-notification-flipInY.html' });
    };
});

ableApp.controller('chartNvd3Controller', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //line chart
    $scope.lineoptions = {
        chart: {
            type: 'lineChart',
            height: 450,
            margin: {
                top: 20,
                right: 20,
                bottom: 40,
                left: 55
            },
            x: function(d) {
                return d.x;
            },
            y: function(d) {
                return d.y;
            },
            useInteractiveGuideline: true,
            dispatch: {
                stateChange: function(e) { console.log("stateChange"); },
                changeState: function(e) { console.log("changeState"); },
                tooltipShow: function(e) { console.log("tooltipShow"); },
                tooltipHide: function(e) { console.log("tooltipHide"); }
            },
            xAxis: {
                axisLabel: 'Time (ms)'
            },
            yAxis: {
                axisLabel: 'Voltage (v)',
                tickFormat: function(d) {
                    return d3.format('.02f')(d);
                },
                axisLabelDistance: -10
            },
            callback: function(chart) {
                /* console.log("!!! lineChart callback !!!");*/
            }
        }

    };

    $scope.linedata = sinAndCos();

    /*Random Data Generator */
    function sinAndCos() {
        var sin = [],
            sin2 = [],
            cos = [];

        //Data is represented as an array of {x,y} pairs.
        for (var i = 0; i < 100; i++) {
            sin.push({ x: i, y: Math.sin(i / 10) });
            sin2.push({ x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5 });
            cos.push({ x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10 });
        }

        //Line chart data should be sent as an array of series objects.
        return [{
            values: sin, //values - represents the array of {x,y} data points
            key: 'Sine Wave', //key  - the name of the series.
            color: '#2196F3' //color - optional: choose your own line color.

        }, {
            values: cos,
            key: 'Cosine Wave',
            color: '#4CAF50'
        }, {
            values: sin2,
            key: 'Another sine wave',
            color: '#ff5252',
            area: true //area - set to true if you want this line to turn into a filled area chart.
        }];
    };

    //DISCRETE BAR CHART
    $scope.baroptions = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin: {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
            },
            x: function(d) {
                return d.label;
            },
            y: function(d) {
                return d.value + (1e-10);
            },
            showValues: true,
            valueFormat: function(d) {
                return d3.format(',.4f')(d);
            },
            duration: 500

        }
    };

    $scope.bardata = [{
        key: "Cumulative Return",
        values: [{
            "label": "A",
            "value": -29.765957771107,
            "color": "#2196F3"
        }, {
            "label": "B",
            "value": 0,
            "color": "#ff5252"
        }, {
            "label": "C",
            "value": 32.807804682612,
            "color": "#4CAF50"
        }, {
            "label": "D",
            "value": 196.45946739256,
            "color": "#f57c00"
        }, {
            "label": "E",
            "value": 0.19434030906893,
            "color": "#FF0084"
        }, {
            "label": "F",
            "value": -98.079782601442,
            "color": "#007BB6"
        }, {
            "label": "G",
            "value": -13.925743130903,
            "color": "#3b5998"
        }, {
            "label": "H",
            "value": -5.1387322875705,
            "color": "#CB2027"
        }]
    }];

    //Scatter chart
    $scope.scatteroptions = {
        chart: {
            type: 'scatterChart',
            height: 450,
            color: d3.scale.category10().range(),
            scatter: {
                onlyCircles: false
            },
            showDistX: true,
            showDistY: true,
            tooltipContent: function(key) {
                return '<h3>' + key + '</h3>';
            },
            duration: 350,
            xAxis: {
                tickFormat: function(d) {
                    return d3.format('.02f')(d);
                }
            },
            yAxis: {
                tickFormat: function(d) {
                    return d3.format('.02f')(d);
                },
                axisLabelDistance: -5
            },
            zoom: {
                //NOTE: All attributes below are optional
                enabled: false,
                scaleExtent: [1, 10],
                useFixedDomain: false,
                useNiceScale: false,
                horizontalOff: false,
                verticalOff: false,
                unzoomEventType: 'dblclick.zoom'
            }
        }
    };

    $scope.scatterdata = generateData(4, 40);

    /* Random Data Generator (took from nvd3.org) */
    function generateData(groups, points) {
        var data = [],
            shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
            random = d3.random.normal();

        for (var i = 0; i < groups; i++) {
            data.push({
                key: 'Group ' + i,
                values: []
            });

            for (var j = 0; j < points; j++) {
                data[i].values.push({
                    x: random(),
                    y: random(),
                    size: Math.random(),
                    shape: shapes[j % 6]
                });
            }
        }
        return data;
    }


    //grouped chart
    $scope.groupedoptions = {
        chart: {
            type: 'multiBarChart',
            height: 450,
            margin: {
                top: 20,
                right: 20,
                bottom: 45,
                left: 45
            },
            clipEdge: true,
            duration: 500,
            stacked: true,
            xAxis: {
                showMaxMin: false,
                tickFormat: function(d) {
                    return d3.format(',f')(d);
                }
            },
            yAxis: {
                axisLabelDistance: -20,
                tickFormat: function(d) {
                    return d3.format(',.1f')(d);
                }
            }
        }
    };

    $scope.groupeddata = generateGroupedData();

    /* Random Data Generator (took from nvd3.org) */
    function generateGroupedData() {
        return stream_layers(3, 50 + Math.random() * 50, .1).map(function(data, i) {
            return {
                key: 'Stream' + i,
                values: data
            };
        });
    }

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;

        function bump(a) {
            var x = 1 / (.1 + Math.random()),
                y = 2 * Math.random() - .5,
                z = 10 / (.1 + Math.random());
            for (var i = 0; i < m; i++) {
                var w = (i / m - y) * z;
                a[i] += x * Math.exp(-w * w);
            }
        }
        return d3.range(n).map(function() {
            var a = [],
                i;
            for (i = 0; i < m; i++) a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++) bump(a);
            return a.map(stream_index);
        });
    }

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
        return d3.range(n).map(function(i) {
            return d3.range(m).map(function(j) {
                var x = 20 * j / m - i / 3;
                return 2 * x * Math.exp(-.5 * x);
            }).map(stream_index);
        });
    }

    function stream_index(d, i) {
        return { x: i, y: Math.max(0, d) };
    }


    //pie chart
    $scope.pieoptions = {
        chart: {
            type: 'pieChart',
            height: 500,
            x: function(d) {
                return d.key;
            },
            y: function(d) {
                return d.y;
            },
            showLabels: true,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true,
            legend: {
                margin: {
                    top: 5,
                    right: 35,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };

    $scope.piedata = [{
        key: "One",
        y: 5,
        color: "#2196F3"
    }, {
        key: "Two",
        y: 2,
        color: "#ff5252"
    }, {
        key: "Three",
        y: 9,
        color: "#4CAF50"
    }, {
        key: "Four",
        y: 7,
        color: "#f57c00"
    }, {
        key: "Five",
        y: 4,
        color: "#FF0084"
    }, {
        key: "Six",
        y: 3,
        color: "#007BB6"
    }, {
        key: "Seven",
        y: .5,
        color: "#3b5998"
    }, {
        key: "Eight",
        y: .8,
        color: "#CB2027"
    }];

    //donut chart
    $scope.donutoptions = {
        chart: {
            type: 'pieChart',
            height: 450,
            donut: true,
            x: function(d) {
                return d.key;
            },
            y: function(d) {
                return d.y;
            },
            showLabels: true,
            donutRatio: 0.35,
            duration: 500,
            legend: {
                margin: {
                    top: 5,
                    right: 70,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };

    $scope.donutdata = [{
        key: "One",
        y: 5,
        color: "#2196F3"
    }, {
        key: "Two",
        y: 2,
        color: "#ff5252"
    }, {
        key: "Three",
        y: 9,
        color: "#4CAF50"
    }, {
        key: "Four",
        y: 7,
        color: "#f57c00"
    }, {
        key: "Five",
        y: 4,
        color: "#FF0084"
    }, {
        key: "Six",
        y: 3,
        color: "#007BB6"
    }, {
        key: "Seven",
        y: .5,
        color: "#3b5998"
    }, {
        key: "Eight",
        y: .8,
        color: "#CB2027"
    }];
});

ableApp.controller('otherController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //other pagination
    $scope.currentPage = 0;
    $scope.startPage = 0;
});

ableApp.controller('chartPeityController', function($scope, $interval) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //line chart0
    $scope.LineChart0 = {
        data: [5, 3, 6, 4, 2, 10, 2, 3, 9, 1, 2, 8],
        options: {
            width: 200,
            height: 200,
            fill: "#2196F3",
            stroke: "#2196F3"
        }
    };
    var a = $scope.LineChart0;

    $interval(function() {
        $scope.random = Math.round(Math.random() * 10);
        $scope.values = $scope.LineChart0.data;
        $scope.values.shift();
        $scope.values.push($scope.random);
    }, 1000);



    //line chart1
    $scope.LineChart1 = {
        data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
        options: {
            width: 200,
            height: 200,
            fill: "#ff5252",
            stroke: "#ff5252"
        }
    };

    //line chart2
    $scope.LineChart2 = {
        data: [5, 3, 2, -1, -3, -2, 2, 3, 5, 2],
        options: {
            width: 200,
            height: 200,
            fill: "#4CAF50",
            stroke: "#4CAF50"
        }
    };

    //line chart3
    $scope.LineChart3 = {
        data: [0, -3, -6, -4, -5, -4, -7, -3, -5, -2],
        options: {
            width: 200,
            height: 200,
            fill: "#f57c00",
            stroke: "#f57c00"
        }
    };

    //bar chart1
    $scope.BarChart1 = {
        data: [0, 3, 6, 4, 7, 3, 5, 2, 2],
        options: {
            width: 500,
            height: 300,
            fill: ["#2196F3", "#4CAF50"]
        },

    };
    //bar chart2
    $scope.BarChart2 = {
        data: [0, -3, -6, -4, 5, -4, -5, -2, 2],
        options: {
            width: 500,
            height: 300,
            fill: ["#ff5252", "#f57c00"]
        },

    };

    //pie chart1
    $scope.PieChart1 = {
        data: [1, 5],
        options: {
            diameter: 150,
            fill: ["#2196F3", "#ff5252"]
        }
    };

    //pie chart2
    $scope.PieChart2 = {
        data: [226, 360],
        options: {
            diameter: 150,
            fill: ["#4CAF50", "#f57c00"]
        }
    };

    //pie chart3
    $scope.PieChart3 = {
        data: [0.52, 1.561],
        options: {
            diameter: 150,
            fill: ["#f57c00", "#2196F3"]
        }
    };
    //pie chart4
    $scope.PieChart4 = {
        data: [1, 4],
        options: {
            diameter: 150,
            fill: ["#CB2027", "#2196F3"]
        }
    };
    //pie chart5
    $scope.PieChart5 = {
        data: [226, 134],
        options: {
            diameter: 150,
            fill: ["#40c4ff", "#ff5252"]
        }
    };
    //pie char6
    $scope.PieChart6 = {
        data: [0.52, 1.041],
        options: {
            diameter: 150,
            fill: ["#2196F3", "#4CAF50"]
        }
    };
    //pie chart7
    $scope.PieChart7 = {
        data: [1, 2, 3, 2, 2],
        options: {
            diameter: 150,
            fill: ["#ff5252", "#517FA4"]
        }
    };
    //pie chart8
    $scope.PieChart8 = {
        data: [1, 7],
        options: {
            innerRadius: 10,
            radius: 40,
            fill: ["#2196F3", "#eeeeee"]
        }
    };
    //pie chart9
    $scope.PieChart9 = {
        data: [2, 7],
        options: {
            innerRadius: 14,
            radius: 36,
            fill: ["#ff5252", "#eeeeee"]
        }
    };
    //pie chart10
    $scope.PieChart10 = {
        data: [3, 7],
        options: {
            innerRadius: 16,
            radius: 32,
            fill: ["#4CAF50", "#eeeeee"]
        }
    };
    //pie chart11
    $scope.PieChart11 = {
        data: [4, 7],
        options: {
            innerRadius: 18,
            radius: 28,
            fill: ["#f57c00", "#eeeeee"]
        }
    };
    //pie chart12
    $scope.PieChart12 = {
        data: [5, 7],
        options: {
            innerRadius: 20,
            radius: 24,
            fill: ["#40c4ff", "#eeeeee"]
        }
    };
    //pie chart13
    $scope.PieChart13 = {
        data: [6, 7],
        options: {
            innerRadius: 18,
            radius: 20,
            fill: ["#CB2027", "#eeeeee"]
        }
    };
    //pie chart14
    $scope.PieChart14 = {
        data: [7, 7],
        options: {
            innerRadius: 15,
            radius: 16,
            fill: ["#517FA4", "#eeeeee"]
        }
    };
});

ableApp.controller('portletsController', function($scope,$timeout) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element(".icofont-minus").unbind('click').click(function(e) {
        e.preventDefault();
        $scope.this = $(this);
        $scope.port = $($scope.this.parents('.card'));
        $scope.card = $($scope.port).children('.card-block').slideToggle();

    });

    angular.element(".icofont-close").on('click', function(e) {
        $scope.this = $(this);
        $($scope.this.parents('.card').remove());
    });

    angular.element(".icofont-refresh").on('click', function(e) {
        $scope.this = $(this);
        $scope.port = $($scope.this.parents('.card'));
        $scope.loader = '<div class="btry-loader"><div class="btry inner"><div class="btry-charge"></div></div></div>';

        $timeout(function() {
            $(e.target.offsetParent).css('opacity', '0.4');
            $scope.port.append($scope.loader); //$(card).show();
        }, 100);

        $timeout(function() {
            $(e.target.offsetParent).css('opacity', '1');
            $scope.port.children('.btry-loader').remove();
        }, 4000);
    });
});

ableApp.controller('productController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    var currentRating = angular.element('#firstStart').data('current-rating');
    $scope.ratingSettings7 = {
        theme: 'bootstrap-stars',
        showSelectedRating: false,
        initialRating: currentRating
    };
    $scope.a = 1;

    $scope.ratingOptions = [
        1,
        2,
        3,
        4,
        5
    ];
});

ableApp.controller('profileController', function($scope,  $interval) {
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

    //    Edit information
    $scope.editCancelBtn = function() {
        var c = angular.element('#edit-btn').find("i");
        c.removeClass('icofont-close');
        c.addClass('icofont-edit');
        $scope.IsHidden = $scope.IsHidden ? false : true;
        $scope.IsHiddenInfo = $scope.IsHiddenInfo ? false : true;

    };

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

    //    experience information
    $scope.expCancelBtn = function() {
        var c = angular.element('#btn-exp').find("i");
        c.removeClass('icofont-close');
        c.addClass('icofont-edit');
        $scope.IsHiddenExp = $scope.IsHiddenExp ? false : true;
        $scope.IsHiddenExpInfo = $scope.IsHiddenExpInfo ? false : true;

    };

    $scope.IsHiddenExp = true;
    $scope.IsHiddenExpInfo = false;
    $scope.expBtn = function() {
        $scope.IsHiddenExp = $scope.IsHiddenExp ? false : true;
        $scope.IsHiddenExpInfo = $scope.IsHiddenExpInfo ? false : true;
        var c = angular.element('#btn-exp').find("i");
        var edit_class = c.attr('class');
        if (edit_class == "icofont icofont-edit") {
            c.removeClass('icofont-edit');
            c.addClass('icofont-close');
        } else {
            c.removeClass('icofont-close');
            c.addClass('icofont-edit');
        }
    };

    //    sducation information
    $scope.eduCancelBtn = function() {
        var c = angular.element('#edu-btn').find("i");
        c.removeClass('icofont-close');
        c.addClass('icofont-edit');
        $scope.IsHiddenEdu = $scope.IsHiddenEdu ? false : true;
        $scope.IsHiddenEduInfo = $scope.IsHiddenEduInfo ? false : true;

    };

    $scope.IsHiddenEdu = true;
    $scope.IsHiddenEduInfo = false;
    $scope.eduBtn = function() {
        $scope.IsHiddenEdu = $scope.IsHiddenEdu ? false : true;
        $scope.IsHiddenEduInfo = $scope.IsHiddenEduInfo ? false : true;
        debugger;
        var d = angular.element('#edu-btn').find("i");
        var edit_class = d.attr('class');
        if (edit_class == "icofont icofont-edit") {
            d.removeClass('icofont-edit');
            d.addClass('icofont-close');
        } else {
            d.removeClass('icofont-close');
            d.addClass('icofont-edit');
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
});

ableApp.controller('rangeSliderController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //Basic Range Slider
    $scope.slider = {
        value: 10
    };

    //Range selector Slider
    $scope.slider1 = {
        minValue: 250,
        maxValue: 450,
        options: {
            floor: 0,
            ceil: 1000,
            step: 1,
            minRange: 10,
            maxRange: 50
        }
    };

    //Slider with custom style
    $scope.slider3 = {
        minValue: 10,
        maxValue: 50,
        options: {
            floor: 0,
            ceil: 100,
            step: 10,
            showTicks: true
        }
    };

    //Range slider with min limit set to 10 and max limit set to 90
    $scope.slider4 = {
        value: 50,
        options: {
            floor: 0,
            ceil: 100,
            step: 1,
            minLimit: 10,
            maxLimit: 90
        }
    };

    //Range slider with a minimal range set to 10 and maximum of 50
    $scope.slider5 = {
        minValue: 10,
        maxValue: 90,
        options: {
            floor: 0,
            ceil: 100,
            step: 1,
            minRange: 10,
            maxRange: 50
        }
    };

    //Range slider with noSwitching=true
    $scope.slider6 = {
        minValue: 10,
        maxValue: 60,
        options: {
            floor: 0,
            ceil: 100,
            step: 1,
            noSwitching: true
        }
    };

    //Slider with visible selection bar
    $scope.slider7 = {
        value: 10,
        options: {
            showSelectionBar: true
        }
    };

    //Slider with visible selection bar at the end
    $scope.slider8 = {
        value: 5,
        options: {
            floor: 0,
            ceil: 10,
            showSelectionBarEnd: true
        }
    };

    //Slider with selection bar gradient
    $scope.slider9 = {
        minValue: 0,
        maxValue: 80,
        options: {
            ceil: 100,
            showSelectionBar: true,
            selectionBarGradient: {
                from: 'white',
                to: '#FC0'
            }
        }
    };

    //Slider with dynamic selection bar color
    $scope.slider10 = {
        value: 12,
        options: {
            showSelectionBar: true,
            getSelectionBarColor: function(value) {
                if (value <= 3)
                    return 'red';
                if (value <= 6)
                    return 'orange';
                if (value <= 9)
                    return 'yellow';
                return '#2AE02A';
            }
        }
    };

    //Slider with dynamic pointer color
    $scope.slider11 = {
        value: 18,
        options: {
            showSelectionBar: true,
            getPointerColor: function(value) {
                if (value <= 3)
                    return 'red';
                if (value <= 6)
                    return 'orange';
                if (value <= 9)
                    return 'yellow';
                return '#2AE02A';
            }
        }
    };

    //Right to left slider
    $scope.slider12 = {
        value: 20,
        options: {
            floor: 10,
            ceil: 100,
            step: 5,
            rightToLeft: true
        }
    };

    //Slider with ticks
    $scope.slider13 = {
        value: 5,
        options: {
            floor: 0,
            ceil: 10,
            showTicks: true
        }
    };

    //Slider with ticks at intermediate positions
    $scope.slider14 = {
        value: 55,
        options: {
            floor: 0,
            ceil: 100,
            showTicks: 10
        }
    };

    //Slider with ticks values and legend
    $scope.slider15 = {
        value: 5,
        options: {
            showTicksValues: true,
            stepsArray: [
                { value: 1, legend: 'Very poor' },
                { value: 2 },
                { value: 3, legend: 'Fair' },
                { value: 4 },
                { value: 5, legend: 'Average' },
                { value: 6 },
                { value: 7, legend: 'Good' },
                { value: 8 },
                { value: 9, legend: 'Excellent' }
            ]
        }
    };

    //Slider with ticks and tooltips
    $scope.slider16 = { //requires angular-bootstrap to display tooltips
        value: 5,
        options: {
            floor: 0,
            ceil: 10,
            showTicks: true,
            ticksTooltip: function(v) {
                return 'Tooltip for ' + v;
            }
        }
    };

    //Slider with dynamic tick color
    $scope.slider17 = {
        value: 0,
        options: {
            ceil: 12,
            floor: 0,
            showSelectionBar: true,
            showTicks: true,
            getTickColor: function(value) {
                if (value < 3)
                    return 'red';
                if (value < 6)
                    return 'orange';
                if (value < 9)
                    return 'yellow';
                return '#2AE02A';
            }
        }
    };

    //Slider with draggable range
    $scope.slider18 = {
        minValue: 1,
        maxValue: 8,
        options: {
            floor: 0,
            ceil: 10,
            draggableRange: true
        }
    };

    //Slider with draggable range only
    $scope.slider19 = {
        minValue: 4,
        maxValue: 6,
        options: {
            floor: 0,
            ceil: 10,
            draggableRangeOnly: true
        }
    };

    //Slider with custom scale
    $scope.slider20 = {
        value: 50,
        options: {
            floor: 0,
            ceil: 100,
            step: 10,
            showTicksValues: true,
            customValueToPosition: function(val, minVal, maxVal) {
                val = Math.sqrt(val);
                minVal = Math.sqrt(minVal);
                maxVal = Math.sqrt(maxVal);
                var range = maxVal - minVal;
                return (val - minVal) / range;
            },
            customPositionToValue: function(percent, minVal, maxVal) {
                minVal = Math.sqrt(minVal);
                maxVal = Math.sqrt(maxVal);
                var value = percent * (maxVal - minVal) + minVal;
                return Math.pow(value, 2);
            }
        }
    };
});

ableApp.controller('ratingController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.a = 1;
    $scope.model = {
        onetoten: 'good'
    };

    $scope.ratingSettings1 = {
        theme: 'bars-1to10'
    };

    $scope.ratingSettings2 = {
        theme: 'bars-horizontal'
    };

    $scope.ratingSettings3 = {
        theme: 'bars-movie',
        deselectable: true
    };

    $scope.ratingSettings4 = {
        theme: 'bars-pill',
        showValues: true,
        showSelectedRating: false
    };

    $scope.ratingSettings5 = {
        theme: 'bars-reversed',
        reverse: true,
        showValues: true
    };

    $scope.ratingSettings6 = {
        theme: 'bars-square',
        showValues: true,
        showSelectedRating: false
    };

    $scope.ratingSettings7 = {
        theme: 'bootstrap-stars'
    };

    $scope.ratingSettings8 = {
        theme: 'css-stars'
    };

    $scope.ratingSettings9 = {
        theme: 'fontawesome-stars'
    };

    $scope.ratingSettings10 = {
        theme: 'fontawesome-stars-o'
    };

    $scope.ratingOptions = [
        'bad',
        'fair',
        'good',
        'excellent',
        'great'
    ];

    $scope.ratingOptionsNumbers = [
        1,
        2,
        3,
        4,
        5
    ];

    $scope.ratingOptionsLetters = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
    ];

    $scope.ratingOptions2 = [
        { value: 0, text: 'bad' },
        { value: 1, text: 'fair' },
        { value: 2, text: 'good' },
        { value: 3, text: 'excellent' },
        { value: 4, text: 'great' }
    ];
});

ableApp.controller('chartRickshawController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //stacked chart
    $scope.options = {
        renderer: 'bar'
    };

    $scope.series = [{
        color: '#ff5252',
        data: [{ x: 0, y: 60 }, { x: 1, y: 49 }, { x: 2, y: 60 }, { x: 3, y: 20 }, { x: 4, y: 80 }]

    }, {
        color: '#2196F3',
        data: [{ x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 50 }, { x: 3, y: 10 }, { x: 4, y: 60 }]

    }];

    //MULTIPLE BARS
    $scope.baroptions = {
        renderer: 'bar',
        stack: false
    };

    $scope.barseries = [{
        data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 30 }],
        color: '#40c4ff'
    }, {
        data: [{ x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 20 }],
        color: '#f57c00'
    }];

    //area chart

    $scope.areaoptions = {
        renderer: 'area'
    };

    $scope.areaseries = [{
        color: '#2196F3',
        data: [
            { x: 0, y: 40 },
            { x: 1, y: 49 },
            { x: 2, y: 38 },
            { x: 3, y: 30 },
            { x: 4, y: 32 }
        ]

    }];

    //multiple area
    $scope.multipleoptions = {
        renderer: 'area'
    };

    $scope.multipleseries = [{
        data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 30 }],
        color: '#4CAF50',
        stroke: 'rgba(0,0,0,0.15)'
    }, {
        data: [{ x: 0, y: 10 }, { x: 1, y: 25 }, { x: 2, y: 45 }],
        color: '#ff5252',
        stroke: 'rgba(0,0,0,0.15)'
    }];
});

ableApp.controller('searchResult2Controller', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $('#date').bootstrapMaterialDatePicker({
        time: false,
        clearButton: true
    });
});

ableApp.controller('simpleLineIconController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element('.icon-list-demo div').click(function() {
        $scope.font_class = ($(this).children().children().attr('class'));
        angular.element('#myModal').modal('show');
        angular.element('#icon').removeClass();
        angular.element('#icon').addClass($scope.font_class);
        angular.element('#name').val($scope.font_class);
        angular.element('#code').val('<i class="' + $scope.font_class + '"></i>');
    });
});

ableApp.controller('stickyController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    // Initial Data
    $scope.notes = [{
        createdOn: 1428237500771,
        edit: false,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }];

    // Add New Note
    $scope.addNote = function() {
        $scope.newNote = {};
        $scope.newNote.createdOn = Date.now();
        $scope.newNote.text = ' ';
        $scope.newNote.edit = true;
        $scope.notes.push($scope.newNote);
        $scope.newNote = {};
    };

    // Delete Note
    $scope.delete = function(i) {
        var r = confirm("Are you sure you want to delete this note?");
        if (r == true)
            $scope.notes.splice(i, 1);
    };

    // Update Note
    $scope.update = function(i, note) {
        debugger;
        $scope.notes[i].text = note;
        $scope.notes[i].edit = false;
    };

    //drage with image
    $scope.sortableOptions = {
        items: '> div'
    };


});

ableApp.controller('taskBoardController', function($scope,  $interval) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //slide toggle code
    $scope.box1 = $scope.box2 = $scope.box3 = true;

    //Progressbar
    var progression1 = 0;
    var progression2 = 0;
    var progression3 = 0;
    var progression4 = 0;
    var progression5 = 0;

    $scope.progress = $interval(function() {
        angular.element('.progress .faq-bar1').css({ 'width': progression1 + '%' });

        if (progression1 == 70) {
            $interval.cancel($scope.progress);

        } else
            progression1 += 1;

    }, 100);

    $scope.progress1 = $interval(function() {
        angular.element('.progress .faq-bar2').css({ 'width': progression2 + '%' });
        if (progression2 == 50) {
            $interval.cancel($scope.progress1);

        } else
            progression2 += 1;

    }, 100);

    $scope.progress2 = $interval(function() {
        angular.element('.progress .faq-bar3').css({ 'width': progression3 + '%' });
        if (progression3 == 80) {
            $interval.cancel($scope.progress2);

        } else
            progression3 += 1;

    }, 100);

    $scope.progress3 = $interval(function() {
        angular.element('.progress .faq-bar4').css({ 'width': progression4 + '%' });
        if (progression4 == 80) {
            $interval.cancel($scope.progress3);

        } else
            progression4 += 1;

    }, 100);
});

ableApp.controller('todoController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //  main button click function
    $scope.createTask = function() {
        angular.element(".md-form-control").removeClass("md-valid");

        // remove nothing message
        if ('.nothing-message') {
            angular.element('.nothing-message').hide('slide', { direction: 'left' }, 300)
        };

        // create the new li from the form input
        var task = angular.element('input[name=task-insert]').val();
        // Alert if the form in submitted empty
        if (task.length == 0) {
            alert('please enter a task');
        } else {
            var newTask = '<li>' + '<p>' + task + '</p>' + '</li>'
            angular.element('#task-list').append(newTask);

            // clear form when button is pressed
            angular.element('input').val('');

            // makes other controls fade in when first task is created
            angular.element('#controls').fadeIn();
            angular.element('.task-headline').fadeIn();
        }
    };

    // mark as complete.click(function() {
    $(document).on('click', 'li', function() {

        if ($(this).hasClass('complete')) {
            $(this).removeClass('complete');
        } else {
            $(this).addClass('complete');
        }
    });

    // double click to remove
    $(document).on('dblclick', 'li', function() {

        $(this).remove();
    });

    // Clear all tasks button
    $scope.clearAllTasks = function() {
        angular.element('#task-list li').remove();
        angular.element('.task-headline').fadeOut();
        angular.element('#controls').fadeOut();
        angular.element('.nothing-message').show('fast');
    };

    /*2nd todo*/
    /*  angular.element(".icofont icofont-ui-delete").click(function() {
        
        $(this).parent().parent().parent().fadeOut();
      });*/
    var i = 7;
    $scope.addBtn = function() {
        angular.element(".md-form-control").removeClass("md-valid");
        var task = angular.element('.add_task_todo').val();
        if (task == "") {
            alert("please enter task");
        } else {
            var add_todo = angular.element('<div class="to-do-list" id="' + i + '"><div class="rkmd-checkbox checkbox-rotate"><label class="input-checkbox checkbox-primary "><input type="checkbox" onclick="check_task(' + i + ')" id="checkbox' + i + '"><span class="checkbox"></span></label><label >' + task + '</label></div><div class="f-right" onclick="delete_todo(' + i + ');"><i class="icofont icofont-ui-delete"></i></div></div>');
            i++;
            angular.element(add_todo).appendTo(".new-task").hide().fadeIn(300);
            angular.element('.add_task_todo').val('');
        }
    };

    angular.element(".delete_todolist").click(function() {

        $(this).parent().parent().fadeOut();
    });

    /*3rd todo list code*/
    $scope.saveBtn = function() {
        angular.element(".md-form-control").removeClass("md-valid");
        var saveTask = angular.element('.save_task_todo').val();
        if (saveTask == "") {
            alert("please enter task");
        } else {
            var add_todo = angular.element('<div class="to-do-label" id="' + i + '"><div class="rkmd-checkbox checkbox-rotate"><label class="input-checkbox checkbox-primary"><input type="checkbox" onclick="check_label(' + i + ')" id="checkbox' + i + '"><span class="checkbox"></span></label><label class="task-title"><span class="task-title-sp">' + saveTask + '</span><span class="badge bg-important">Now</span><div class="f-right hidden-phone"><button class="btn btn-danger btn-xs delete_todo" onclick="delete_todo(' + i + ');"><i class="icofont icofont-ui-delete"></i></button></div></label></div></div>');
            i++;
            angular.element(add_todo).appendTo(".task-content").hide().fadeIn(300);
            angular.element('.save_task_todo').val('');
            angular.element("#flipFlop").modal('hide');
        }

    };

    $scope.closeBtn = function() {
        angular.element('.save_task_todo').val('');
    };

    angular.element(".delete_todo").click(function() {

        $(this).parent().parent().parent().parent().fadeOut();
    });
});

ableApp.controller('tooltipsController', function($scope,  $sce) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //html tooltips
    $scope.htmlTooltip = $sce.trustAsHtml('<em>Tooltip</em> <u>with</u> <b>HTML</b>');

    //html popover tooltip
    $scope.htmlPopover = $sce.trustAsHtml('<em>Tooltip</em> <u>with</u> <b>HTML</b>');
});

ableApp.controller('treeviewController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.treeNodes = [{
        name: "Admin",
        children: [{
            name: "Assets",
            children: [{
                name: "css",
                name: "Plugins",
                children: [
                    { name: "Plugin one" },
                    { name: "Plugin two" }
                ]
            }]
        }, {
            name: "Email Template",
            children: [
                { name: "Email one" },
                { name: "Email two" },
            ]
        }, {
            name: "Dashboard",
        }, {
            name: "Typography",
        }, {
            name: "User Interface",
            children: [
                { name: "Buttons" },
                { name: "Cards" },
            ]
        }, {
            name: "Forms",
        }, {
            name: "Tables",
        }, {
            name: "Frontend",
        }, ]

    }];

    $scope.treeNodesDisable = [{
        name: "Admin",
        children: [{
            name: "Assets",
            children: [{
                name: "css",
                name: "Plugins",
                children: [
                    { name: "Plugin one" },
                    { name: "Plugin two" }
                ]
            }]
        }, {
            name: "Email Template",
            children: [
                { name: "Email one" },
                { name: "Email two" },
            ]
        }, {
            name: "Dashboard",
        }, {
            name: "Typography",
        }, {
            name: "User Interface",
            children: [
                { name: "Buttons" },
                { name: "Cards" },
            ]
        }, {
            name: "Forms",
        }, {
            name: "Tables",
        }, {
            name: "Frontend",
            disabled: true
        }, ]

    }];
    $scope.options = { showIcon: false };
});

ableApp.controller('typIconsController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element('.icon-list-demo div').click(function() {
        $scope.font_class = ($(this).children('.typcn').attr('class'));
        angular.element('#myModal').modal('show');
        angular.element('#icon').removeClass();
        angular.element('#icon').addClass($scope.font_class);
        angular.element('#icon').addClass('fa-lg');
        angular.element('#name').val($scope.font_class);
        angular.element('#code').val('<i class="' + $scope.font_class + '"></i>');
    });
});

ableApp.controller('wallController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element('#post-new').hide();
    angular.element('#post-message').keyup(function() {
        if (($(this).val() != "")) {
            angular.element('#post-new').show();
        } else
            angular.element('#post-new').hide();
    });
});


ableApp.controller('weatherIconController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    angular.element('.icon-list-demo div').on('click', function() {
        $scope.font_class = ($(this).children('.wi').attr('class'));
        if (!$(this).hasClass('svg-icon')) {
            angular.element('#myModal').modal('show');
            angular.element('#icon').removeClass();
            angular.element('#icon').addClass($scope.font_class);
            angular.element('#icon').addClass('fa-lg');
            angular.element('#name').val($scope.font_class);
            angular.element('#code').val('<i class="' + $scope.font_class + '"></i>');
        }
    });
});

ableApp.controller('widgetController', function($scope,DTOptionsBuilder,DTColumnDefBuilder,$interval) {

    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    //counter start
    $scope.countFrom = 0;
    $scope.countTo = 528;
    $scope.countTo1=856;
    $scope.countTo2=756;

    $scope.countTo3 = 10;
    $scope.countTo4=100;
    $scope.countTo5=578;
    $scope.countTo6 = 20;
    $scope.countTo7=5478;
    $scope.countTo8=458;
    $scope.countTo9 = 1052;
    $scope.countTo10 = 90;

    $scope.countTo11 = 210;

    $scope.countTo12 = 2587;
    $scope.countTo13 = 5987;

    $scope.countTo14 = 142;

    $scope.countTo15 = 428;
    $scope.countTo16 = 538;
    $scope.countTo17 = 90;

    $scope.countTo18 = 10;
    $scope.countTo19 = 292128;

    $scope.countTo20 = 227;

    $scope.countTo21 = 78451;
    //counter end

    /*======= Progressbar js starts ======= */
    var progression1 = 0;
    var progression2 = 0;
    var progression3 = 0;
    var progression4 = 0;

   $scope.progress = $interval(function() {

        angular.element('.progress .progress-text1').text(progression1 + '%');
        angular.element('.progress .progress-text1').css({
            'left': progression1 + '%'
        });
        angular.element('.progress .progress-text1').css({
            'top': '-25px'
        });
        angular.element('.progress .progress-bar1').css({
            'width': progression1 + '%'
        });

        if (progression1 == 45) {
              $interval.cancel($scope.progress);

        } else
        progression1 += 1;

    }, 50);

    $scope.progress1 = $interval(function() {
        angular.element('.progress .progress-text2').text(progression2 + '%');
        angular.element('.progress .progress-text2').css({
            'left': progression2 + '%'
        });
        angular.element('.progress .progress-text2').css({
            'top': '-25px'
        });
        angular.element('.progress .progress-bar2').css({
            'width': progression2 + '%'
        });
        if (progression2 == 85) {
             $interval.cancel($scope.progress1);

        } else
        progression2 += 1;

    }, 50);
    $scope.progress2 = $interval(function() {
        angular.element('.progress .progress-text3').text(progression3 + '%');
        angular.element('.progress .progress-text3').css({
            'left': progression3 + '%'
        });
        angular.element('.progress .progress-text3').css({
            'top': '-25px'
        });
        angular.element('.progress .progress-bar3').css({
            'width': progression3 + '%'
        });
        if (progression3 == 60) {
             $interval.cancel($scope.progress2);

        } else
        progression3 += 1;

    }, 50);
    $scope.progress3 = $interval(function() {
        angular.element('.progress .progress-text4').text(progression4 + '%');
        angular.element('.progress .progress-text4').css({
            'left': progression4 + '%'
        });
        angular.element('.progress .progress-text4').css({
            'top': '-25px'
        });
        angular.element('.progress .progress-bar4').css({
            'width': progression4 + '%'
        });
        if (progression4 == 90) {
              $interval.cancel($scope.progress3);

        } else
        progression4 += 1;

    }, 100);
   
         //  Resource bar
        $(".resource-barchart").sparkline([5, 6, 2, 4, 9, 1, 2, 8, 3, 6, 4, 2, 9, 8, 5, 7, 8], {
            type: 'bar',
            barWidth: '15px',
            height: '50px',
            barColor: '#fff',
            tooltipClassname: 'abc'
        });
        $(".customchart").sparkline([15, 30, 27, 35], {
            type: 'line',
            width: '600px',
            height: '200px',
            tooltipClassname: 'abc',
            chartRangeMax: '50',
            lineColor: '#fff',
            fillColor: '#2196F3',
        }); 

          //updating chart
    $scope.LineChart0 = {
        data: [5, 3, 6, 4, 2, 10, 2, 3, 9, 1, 2, 8],
        options: {
            width: 343,
            height: 200,
            fill: "#2196F3",
            stroke: "#2196F3"
        }
    };
    var a = $scope.LineChart0;

    $interval(function() {
        $scope.random = Math.round(Math.random() * 10);
        $scope.values = $scope.LineChart0.data;
        $scope.values.shift();
        $scope.values.push($scope.random);
    }, 1000);



    

   
    //table scroll
      $scope.widgetTableScroll = {
        height:300,
        allowPageScroll: false,
        wheelStep: 3,
        color: '#000'
    }; 

    //data table 
     $scope.dtOptions = DTOptionsBuilder.newOptions().
     withOption('bFilter', false)
     .withOption('paging', false)
     .withOption('order', []) ;
      $scope.dtColumnDefs = [
          DTColumnDefBuilder.newColumnDef(0).notSortable(),
          DTColumnDefBuilder.newColumnDef(1).notSortable(),
          DTColumnDefBuilder.newColumnDef(2).notSortable(),
          DTColumnDefBuilder.newColumnDef(3).notSortable()
       ];

       /*Bar*/
        $(".barchart").sparkline([5, 6, 2, 4, 9, 1, 2, 8, 3, 6, 4, 2, 9, 6, 4, 8, 6, 4], {
            type: 'bar',
            barWidth: '10px',
            height: '50px',
            barSpacing: '5px',
            tooltipClassname: 'abc'
        });

        //donut chart
         var data2 = {
            label: "Man's Wear",
            data: 2034,
            color: "#3f51b5"
        }
         var data3 = {
            label: "Woman's Wear",
            data: 7510,
            color: "#ff5252"
        };
         var data4 = {
            label: "Children's Wear",
            data: 10410,
            color: "#f69026"
        };
         var data5 = {
            label: "Electronics",
            data: 9610,
            color: "#1b8bf9"
        };
         var data6 = {
            label: "Accesories",
            data: 8670,
            color: "#4caf50"
        };
    $scope.donutDataset = [ data2,data3,data4,data5,data6];
    $scope.donutOptions = {
        series: {
            pie: {
                innerRadius: 0.5,
                show: true
            }
        },
        legend: {
            show: true
        }

    };   

});

ableApp.controller('wysiwygEditorController', function($scope) {
    //$controller('globalController', { $scope: $scope, $timeout: $timeout, $state: $state });
    $scope.data = {
        text: "hello"
    }
    $scope.disabled = false;
    $scope.menu = [
        ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
        ['format-block'],
        ['font'],
        ['font-size'],
        ['font-color', 'hilite-color'],
        ['remove-format'],
        ['ordered-list', 'unordered-list', 'outdent', 'indent'],
        ['left-justify', 'center-justify', 'right-justify'],
        ['code', 'quote', 'paragraph'],
        ['link', 'image'],
        ['css-class']
    ];

    $scope.cssClasses = ['test1', 'test2'];

    $scope.setDisabled = function() {
        $scope.disabled = !$scope.disabled;
    }
});
