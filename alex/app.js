var ableApp = angular.module('able', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap', 'ui.slimscroll', 'angularRipple']); //'ui.bootstrap', 'ui.slimscroll', 'angularRipple'
ableApp.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {  
    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider
    //dashboard layouts
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            controller: 'dashboardController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'lazy_counter',
                        'lazy_timer',
                        'lazy_echart',
                        'lazy_dashboard',
                    ], { serie: true });
                }]
            }
        })
        .state('dashboard1', {
            url: "/dashboard1",
            templateUrl: "views/dashboard2.html",
            controller: 'dashboard2Controller',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'lazy_peity_chart',
                        'lazy_counter',
                        'lazy_rickshaw_chart',
                        'lazy_dashboard2',
                    ], { serie: true });
                }]
            }
        })
        .state('dashboard2', {
            url: "/dashboard2",
            templateUrl: "views/dashboard3.html",
            controller: 'dashboard3Controller',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_dashboard',
                        'lazy_echart',
                        'lazy_map_vector',
                    ], { serie: true });
                }]
            }
        })
        .state('dashboard3', {
            url: "/dashboard3",
            templateUrl: "views/dashboard4.html",
            controller: 'dashboard4Controller',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_counter',
                        'lazy_weather_icons',
                    ], { serie: true });
                }]
            }
        })
        //widget 
        .state('widget', {
            url: "/widget",
            templateUrl: "views/widget.html",
            controller: 'widgetController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_dashboard',
                        'lazy_widget',
                        'lazy_peity_chart',
                        /*
                                                'lazy_morris_chart',  */
                        'lazy_c3_chart',
                        'lazy_data_table',
                        'lazy_float_chart',
                    ], { serie: true });
                }]
            }
        })
        //menu layout
        .state('layout', {
            url: '/layout',
            template: '<div ui-view></div>'
        })
        .state('layout.menuStatic', {
            url: "/menu-static",
            templateUrl: "views/menu-static.html",
            controller: 'menuStaticController'
        })
        .state('layout.menuFixed', {
            url: "/menu-fixed",
            templateUrl: "views/menu-fixed.html"
        })
        .state('layout.menuFooterFixed', {
            url: "/menu-footer-fixed",
            templateUrl: "views/menu-footer-fixed.html",
            controller: 'menuFooterFixedController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_menu_footer_fixed',
                    ], { serie: true });
                }]
            }
        })
        .state('layout.menuHeaderFixed', {
            url: "/menu-header-fixed",
            templateUrl: "views/menu-header-fixed.html",
            controller: 'menuHeaderFixedController'
        })
        .state('layout.menuSidebarSticky', {
            url: "/menu-sidebar-sticky",
            templateUrl: "views/menu-sidebar-sticky.html",
            controller: 'menuSidebarStickyController'
        })
        .state('layout.boxLayout', {
            url: "/box-layout",
            templateUrl: "views/box-layout.html"
        })

    //ui element 
    .state('uiElement', {
            url: '/uiElement',
            template: '<div ui-view></div>'
        })
        .state('uiElement.accordion', {
            url: '/accordion',
            templateUrl: 'views/accordion.html',
            controller: 'accordionController'
        })
        .state('uiElement.button', {
            url: "/button",
            templateUrl: "views/button.html"
        })
        .state('uiElement.buttonFab', {
            url: "/button-fab",
            templateUrl: "views/button-fab.html",
            controller: 'buttonFabController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_button_fab',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.labelBadge', {
            url: "/label-badge",
            templateUrl: "views/label-badge.html"
        })
        .state('uiElement.bootstrapUi', {
            url: "/bootstrap-ui",
            templateUrl: "views/bootstrap-ui.html"
        })
        .state('uiElement.boxShadow', {
            url: "/box-shadow",
            templateUrl: "views/box-shadow.html"
        })
        .state('uiElement.color', {
            url: "/color",
            templateUrl: "views/color.html"
        })
        .state('uiElement.draggable', {
            url: "/draggable",
            templateUrl: "views/draggable.html",
            controller: 'draggableController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_draggable',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.lightBox', {
            url: "/light-box",
            templateUrl: "views/light-box.html",
            controller: 'lightBoxController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_light_box',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.list', {
            url: "/list",
            templateUrl: "views/list.html",
            controller: 'listController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_list',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.nestable', {
            url: "/nestable",
            templateUrl: "views/nestable.html",
            controller: 'nestableController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_nestable',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.notification', {
            url: "/notification",
            templateUrl: "views/notification.html",
            controller: 'notificationController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_notification',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.panelsWells', {
            url: "/panels-wells",
            templateUrl: "views/panels-wells.html"
        })
        .state('uiElement.preloader', {
            url: "/preloader",
            templateUrl: "views/preloader.html"
        })
        .state('uiElement.rangeSlider', {
            url: "/range-slider",
            templateUrl: "views/range-slider.html",
            controller: 'rangeSliderController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_range-slider',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.rating', {
            url: "/rating",
            templateUrl: "views/rating.html",
            controller: 'ratingController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_rating',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.slider', {
            url: "/slider",
            templateUrl: "views/slider.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_slider',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.treeview', {
            url: "/treeview",
            templateUrl: "views/treeview.html",
            controller: 'treeviewController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_treeview',
                    ], { serie: true });
                }]
            }
        })
        .state('uiElement.tooltips', {
            url: "/tooltips",
            templateUrl: "views/tooltips.html",
            controller: 'tooltipsController'
        })
        .state('uiElement.typography', {
            url: "/typography",
            templateUrl: "views/typography.html"
        })
        .state('uiElement.card', {
            url: "/card",
            templateUrl: "views/card.html"
        })
        .state('uiElement.footer', {
            url: "/footer",
            templateUrl: "views/footer.html",
            controller: 'footerController'
        })
        .state('uiElement.footerCenter', {
            url: "/footer-center",
            templateUrl: "views/footer-center.html",
            controller: 'footerController'
        })
        .state('uiElement.footerRight', {
            url: "/footer-right",
            templateUrl: "views/footer-right.html",
            controller: 'footerController'
        })
        .state('uiElement.other', {
            url: "/other",
            templateUrl: "views/other.html",
            controller: 'otherController'
        })

    //Theme ui
    .state('themeUi', {
            url: '/themeUi',
            template: '<div ui-view></div>'
        })
        .state('themeUi.contactCard', {
            url: "/contact-card",
            templateUrl: "views/contact-card.html"
        })
        .state('themeUi.contactDetail', {
            url: "/contact-details",
            templateUrl: "views/contact-details.html",
            controller: 'contactDetailController'
        })
        .state('themeUi.animation', {
            url: "/animation",
            templateUrl: "views/animation.html",
            controller: 'animationController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_animation',
                    ], { serie: true });
                }]
            }
        })
        .state('themeUi.genericClass', {
            url: "/generic-class",
            templateUrl: "views/generic-class.html"
        })
        .state('themeUi.gridstack', {
            url: "/gridstack",
            templateUrl: "views/gridstack.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_gridstack',
                    ], { serie: true });
                }]
            }
        })
        .state('themeUi.modal', {
            url: "/modal",
            templateUrl: "views/modal.html",
            controller: 'modalController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_modal',
                    ], { serie: true });
                }]
            }
        })
        .state('themeUi.portlets', {
            url: "/portlets",
            templateUrl: "views/portlets.html",
            controller: 'portletsController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_portlets',
                    ], { serie: true });
                }]
            }
        })
        .state('themeUi.sticky', {
            url: "/sticky",
            templateUrl: "views/sticky.html",
            controller: 'stickyController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_sticky',
                        'lazy_draggable',
                    ], { serie: true });
                }]
            }
        })
        .state('themeUi.icon', {
            url: '/themeUi/icon',
            template: '<div ui-view></div>'
        })
        .state('themeUi.icon.fontAwesome', {
            url: "/font-awesome",
            templateUrl: "views/font-awesome.html",
            controller: 'fontAwesomeController'
        })
        .state('themeUi.icon.materialDesignIcons', {
            url: "/material-design-icons",
            templateUrl: "views/material-design-icons.html",
            controller: 'materialDesignIconController'
        })
        .state('themeUi.icon.simpleLineIcons', {
            url: "/simple-line-icons",
            templateUrl: "views/simple-line-icons.html",
            controller: 'simpleLineIconController'
        })
        .state('themeUi.icon.ionIcon', {
            url: "/ion-icon",
            templateUrl: "views/ion-icon.html",
            controller: 'icoFontsController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_ico_icon',
                    ], { serie: true });
                }]
            }
        })
        .state('themeUi.icon.icofonts', {
            url: "/icofonts",
            templateUrl: "views/icofonts.html",
            controller: 'icoFontsController'
        })
        .state('themeUi.icon.weatherIcons', {
            url: "/weather-icons",
            templateUrl: "views/weather-icons.html",
            controller: 'weatherIconController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_weather_icons',
                    ], { serie: true });
                }]
            }
        })
        .state('themeUi.icon.typiconsIcons', {
            url: "/typicons-icons",
            templateUrl: "views/typicons-icons.html",
            controller: 'typIconsController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_typicons_icons',
                    ], { serie: true });
                }]
            }
        })
        .state('themeUi.icon.flags', {
            url: "/flags",
            templateUrl: "views/flags.html",
            controller: 'flagController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_flag',
                    ], { serie: true });
                }]
            }
        })

    //Charts
    .state('charts', {
            url: '/charts',
            template: '<div ui-view></div>'
        })
        .state('charts.echart', {
            url: "/echart",
            templateUrl: "views/echart.html",
            controller: 'echartController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_echart',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.chartjs', {
            url: "/chartjs",
            templateUrl: "views/chartjs.html",
            controller: 'chartController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_chartjs',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.floatChart', {
            url: "/float-chart",
            templateUrl: "views/float-chart.html",
            controller: 'chartFloatController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_float_chart',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.knobChart', {
            url: "/knob-chart",
            templateUrl: "views/knob-chart.html",
            controller: 'chartKnobController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_knob_chart',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.morrisChart', {
            url: "/morris-chart",
            templateUrl: "views/morris-chart.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_morris_chart',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.nvd3Chart', {
            url: "/nvd3-chart",
            templateUrl: "views/nvd3-chart.html",
            controller: 'chartNvd3Controller',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_nvd3_chart',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.peityChart', {
            url: "/peity-chart",
            templateUrl: "views/peity-chart.html",
            controller: 'chartPeityController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_peity_chart',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.radialChart', {
            url: "/radial-chart",
            templateUrl: "views/radial-chart.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_radial_chart',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.rickshawChart', {
            url: "/rickshaw-chart",
            templateUrl: "views/rickshaw-chart.html",
            controller: 'chartRickshawController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_rickshaw_chart',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.c3chart', {
            url: "/c3chart",
            templateUrl: "views/c3chart-chart.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_c3_chart',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.mapGoogle', {
            url: "/map-google",
            templateUrl: "views/map-google.html",
            controller: 'mapGoogleController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_map_google',
                    ], { serie: true });
                }]
            }
        })
        .state('charts.mapVector', {
            url: "/map-vector",
            templateUrl: "views/map-vector.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_map_vector',
                    ], { serie: true });
                }]
            }
        })

    //forms
    .state('forms', {
            url: '/forms',
            template: '<div ui-view></div>'
        })
        .state('forms.formElementsBootstrap', {
            url: "/form-elements-bootstrap",
            templateUrl: "views/form-elements-bootstrap.html"
        })
        .state('forms.formElementsMaterialize', {
            url: "/form-elements-materialize",
            templateUrl: "views/form-elements-materialize.html",
            controller: 'formElementMaterializeController'
        })
        .state('forms.formElementsAdvance', {
            url: "/form-elements-advance",
            templateUrl: "views/form-elements-advance.html",
            controller: 'formElementAdvanceController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_form_elements_advance',
                    ], { serie: true });
                }]
            }
        })
        .state('forms.formsWizard', {
            url: "/forms-wizard",
            templateUrl: "views/forms-wizard.html",
            controller: 'formsWizardController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_forms_wizard',
                    ], { serie: true });
                }]
            }
        })
        .state('forms.formMask', {
            url: "/form-mask",
            templateUrl: "views/form-mask.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_form_mask',
                    ], { serie: true });
                }]
            }
        })
        .state('forms.formsValidation', {
            url: "/forms-validation",
            templateUrl: "views/forms-validation.html"
        })
        .state('forms.fileUpload', {
            url: "/file-upload",
            templateUrl: "views/file-upload.html",
            controller: 'fileUploadController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_file_upload',
                    ], { serie: true });
                }]
            }
        })

    //tables
    .state('tables', {
            url: '/tables',
            template: '<div ui-view></div>'
        })
        .state('tables.basicTable', {
            url: "/basicTable",
            templateUrl: "views/basic-table.html"
        })
        .state('tables.dataTable', {
            url: "/data-table",
            templateUrl: "views/data-table.html",
            controller: 'dataTableController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_data_table',
                    ], { serie: true });
                }]
            }
        })
        .state('tables.responsiveTable', {
            url: "/responsive-table",
            templateUrl: "views/responsive-table.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_responsive_table',
                    ], { serie: true });
                }]
            }
        })
        .state('tables.editableTable', {
            url: "/editable-table",
            templateUrl: "views/editable-table.html",
            controller: 'editableTableController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_ediatble_table',
                    ], { serie: true });
                }]
            }
        })
        .state('tables.fooTables', {
            url: "/foo-tables",
            templateUrl: "views/foo-tables.html",
            controller: 'fooTableController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_foo_tables',
                    ], { serie: true });
                }]
            }
        })

    //pages
    .state('pages', {
            url: '/pages',
            template: '<div ui-view></div>'
        })
     .state('pages.authentication', {
            url: '/pages/authentication',
            template: '<div ui-view></div>'
        })
     .state('pages.authentication.register1', {
            url: "/register1",
            templateUrl: "views/register1.html",
            controller: 'commonController'
        })
     .state('pages.authentication.register2', {
            url: "/register2",
            templateUrl: "views/register2.html",
            controller: 'commonController'
        })
     .state('pages.authentication.signinUpModal', {
            url: "/signin-up-modal",
            templateUrl: "views/signin-up-modal.html",
            controller: 'commonController'
        })
     .state('pages.authentication.login1', {
            url: "/login1",
            templateUrl: "views/login1.html",
            controller: 'commonController'
        })
     .state('pages.authentication.login2', {
            url: "/login2",
            templateUrl: "views/login2.html",
            controller: 'commonController'
        })
     .state('pages.authentication.forgotPassword', {
            url: "/forgot-password",
            templateUrl: "views/forgot-password.html",
            controller: 'commonController'
        })
     .state('pages.lockScreen', {
            url: "/lock-screen",
            templateUrl: "views/lock-screen.html",
            controller: 'commonController'
        })
        .state('pages.400', {
            url: "/400",
            templateUrl: "views/400.html",
            controller: 'commonController'
        })
        .state('pages.403', {
            url: "/403",
            templateUrl: "views/403.html",
            controller: 'commonController'
        })
        .state('pages.404', {
            url: "/404",
            templateUrl: "views/404.html",
            controller: 'commonController'
        })
        .state('pages.500', {
            url: "/500",
            templateUrl: "views/500.html",
            controller: 'commonController'
        })
        .state('pages.503', {
            url: "/503",
            templateUrl: "views/503.html",
            controller: 'commonController'
        })
        .state('pages.gallery', {
            url: "/gallery",
            templateUrl: "views/gallery.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_gallery',
                        'lazy_ico_icon'
                    ], { serie: true });
                }]
            }
        })
        .state('pages.samplePage', {
            url: "/sample-page",
            templateUrl: "views/sample-page.html"
        })
        .state('pages.invoice', {
            url: "/invoice",
            templateUrl: "views/invoice.html"
        })
        .state('pages.blog', {
            url: "/blog",
            templateUrl: "views/blog.html"
        })
        .state('pages.blogDetail', {
            url: "/blog-detail",
            templateUrl: "views/blog-detail.html"
        })
        .state('pages.searchResult', {
            url: "/search-result",
            templateUrl: "views/search-result.html"
        })
        .state('pages.searchResult2', {
            url: "/search-result2",
            templateUrl: "views/search-result2.html",
            controller: 'searchResult2Controller',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_search_result2',
                    ], { serie: true });
                }]
            }
        })

    //apps
    .state('apps', {
            url: '/apps',
            template: '<div ui-view></div>'
        })
        //tasks  
        .state('apps.tasks', {
            url: '/apps/tasks',
            template: '<div ui-view></div>'
        })
        .state('apps.tasks.taskList', {
            url: "/task-list",
            templateUrl: "views/task-list.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_data_table',
                        'lazy_todo'
                    ], { serie: true });
                }]
            }
        })
        .state('apps.tasks.taskBoard', {
            url: "/task-board",
            templateUrl: "views/task-board.html",
            controller: 'taskBoardController'
        })
        .state('apps.tasks.taskDetailed', {
            url: "/task-detailed",
            templateUrl: "views/task-detailed.html"
        })
        .state('apps.tasks.issueList', {
            url: "/issue-list",
            templateUrl: "views/issue-list.html",
            controller: 'dataTableController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_data_table',
                        'lazy_float_chart',
                        '../bower_components/angular-animate/angular-animate.js',
                        '../bower_components/animate.css/animate.css'
                    ], { serie: true });
                }]
            }
        })
        //emails
        .state('apps.emails', {
            url: '/apps/emails',
            template: '<div ui-view></div>'
        })
        .state('apps.emails.inbox', {
            url: "/inbox",
            templateUrl: "views/inbox.html"
        })
        .state('apps.emails.compose', {
            url: "/compose",
            templateUrl: "views/compose.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_compose',
                    ], { serie: true });
                }]
            }
        })
        .state('apps.emails.readMail', {
            url: "/read-mail",
            templateUrl: "views/read-mail.html"
        })
        .state('apps.todo', {
            url: "/todo",
            templateUrl: "views/todo.html",
            controller: 'todoController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_todo',
                    ], { serie: true });
                }]
            }
        })
        .state('apps.ckEditor', {
            url: "/ck-editor",
            templateUrl: "views/ck-editor.html",
            controller: 'ckEditorController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_ck-editor',
                    ], { serie: true });
                }]
            }
        })
        .state('apps.wysiwygEditor', {
            url: "/wysiwyg-editor",
            templateUrl: "views/wysiwyg-editor.html",
            controller: 'wysiwygEditorController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_wysiwyg_editor',
                    ], { serie: true });
                }]
            }
        })
        .state('apps.aceEditor', {
            url: "/ace-editor",
            templateUrl: "views/ace-editor.html",
            controller: 'aceEditorController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_ace-editor',
                    ], { serie: true });
                }]
            }
        })

    //crm
    .state('crm', {
            url: '/crm',
            template: '<div ui-view></div>'
        })
        .state('crm.crmDashboard', {
            url: "/crm-dashboard",
            templateUrl: "views/crm-dashboard.html",
            controller: 'crmDashboardController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_morris_chart',
                        'lazy_data_table',
                        'lazy_timeline'
                    ], { serie: true });
                }]
            }
        })
        .state('crm.crmContact', {
            url: "/crm-contact",
            templateUrl: "views/crm-contact.html",
            controller: 'dataTableController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_data_table',
                        'lazy_crm_contact',
                        'lazy_modal'
                    ], { serie: true });
                }]
            }
        })

    //ecommerce
    .state('ecommerce', {
            url: '/ecommerce',
            template: '<div ui-view></div>'
        })
        .state('ecommerce.product', {
            url: "/product",
            templateUrl: "views/product.html",
            controller: 'ratingController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'lazy_rating',
                    ], { serie: true });
                }]
            }
        })
        .state('ecommerce.productDetail', {
            url: "/product-detail",
            templateUrl: "views/product-detail.html",
            controller: 'productController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'lazy_product_detail',
                        'lazy_ico_icon',
                        'lazy_rating'
                    ], { serie: true });
                }]
            }
        })
        .state('ecommerce.productList', {
            url: "/product-list",
            templateUrl: "views/product-list.html",
            controller: 'dataTableController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'lazy_data_table'
                    ], { serie: true });
                }]
            }
        })
        .state('ecommerce.productEdit', {
            url: "/product-edit",
            templateUrl: "views/product-edit.html",
            controller: 'productController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'lazy_rating'
                    ], { serie: true });
                }]
            }
        })

        //extras        
         .state('extras', {
                url: '/extras',
                template: '<div ui-view></div>'
            })
        .state('extras.timeline', {
            url: "/timeline",
            templateUrl: "views/timeline.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_timeline',
                    ], { serie: true });
                }]
            }
        })
        .state('extras.maintainance', {
            url: "/maintainance",
            templateUrl: "views/maintainance.html",
            controller: 'commonController'
        })
        .state('extras.commingSoon', {
            url: "/coming-soon",
            templateUrl: "views/coming-soon.html",
            controller: 'commonController'
        })
        .state('extras.profile', {
            url: "/profile",
            templateUrl: "views/profile.html",
            controller: 'profileController'
        })
        .state('extras.pricing', {
            url: "/pricing",
            templateUrl: "views/pricing.html",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'lazy_pricing',
                    ], { serie: true });
                }]
            }
        })
        .state('extras.fullCalender', {
            url: "/full-calender",
            templateUrl: "views/full-calender.html",
            controller: 'fullCalenderController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([

                        'lazy_full_calender',
                    ], { serie: true });
                }]
            }
        });
});

/*Directive for owl carousel*/
ableApp.directive('wrapOwlcarousel', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var options = scope.$eval($(element).attr('data-options'));
            $(element).owlCarousel(options);
        }
    };
});

ableApp.directive('countdown', [
    'Util',
    '$interval',
    function(Util, $interval) {
        return {
            restrict: 'A',
            scope: { date: '@' },
            link: function(scope, element) {

                var future;
                future = new Date(scope.date);
                var a = '<div class="row"><div class="col-xs-3"><h2 class="f-90 f-w-400 counter-text1"></h2><p class="f-24 f-w-400"> Days </p></div><div class="col-xs-3"><h2 class="f-90 f-w-400 counter-text2"></h2><p class="f-24 f-w-400">Hours</p></div><div class="col-xs-3"><h2 class="f-90 f-w-400 counter-text3"></h2><p class="f-24 f-w-400">Minutes</p></div><div class="col-xs-3"><h2 class="f-90 f-w-400 counter-text4"></h2><p class="f-24 f-w-400">Seconds</p></div></div>';
                var b = element.append(a);
                $interval(function() {
                    var diff;
                    diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
                    return b.find("h2.counter-text1").text(Util.dhms(diff).d),
                        b.find("h2.counter-text2").text(Util.dhms(diff).h),
                        b.find("h2.counter-text3").text(Util.dhms(diff).m),
                        b.find("h2.counter-text4").text(Util.dhms(diff).s);
                }, 1000);
            }
        };
    }
]);

ableApp.directive('lightgallery', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.parent().lightGallery();
        }
    };
});

ableApp.directive('countdown1', [
    'Util',
    '$interval',
    function(Util, $interval) {
        return {
            restrict: 'A',
            scope: { date: '@' },
            link: function(scope, element) {

                var future;
                future = new Date(scope.date);
                var a = '<div class="row"><div class="col-xs-3"><h2 class="f-15 f-w-400 counter-text1"></h2><p class="f-18 "> Days </p></div><div class="col-xs-3"><h2 class="f-15 f-w-400 counter-text2"></h2><p class="f-18 ">Hours</p></div><div class="col-xs-3"><h2 class="f-15 f-w-400 counter-text3"></h2><p class="f-18">Minutes</p></div><div class="col-xs-3"><h2 class="f-15 f-w-400 counter-text4"></h2><p class="f-18 ">Seconds</p></div></div>';
                var b = element.append(a);
                $interval(function() {
                    var diff;
                    diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
                    return b.find("h2.counter-text1").text(Util.dhms(diff).d),
                        b.find("h2.counter-text2").text(Util.dhms(diff).h),
                        b.find("h2.counter-text3").text(Util.dhms(diff).m),
                        b.find("h2.counter-text4").text(Util.dhms(diff).s);
                }, 1000);
            }
        };
    }
]);

ableApp.factory('Util', [function() {
    return {
        dhms: function(t) {

            var days, hours, minutes, seconds;
            days = Math.floor(t / 86400);
            t -= days * 86400;
            hours = Math.floor(t / 3600) % 24;
            t -= hours * 3600;
            minutes = Math.floor(t / 60) % 60;
            t -= minutes * 60;
            seconds = t % 60;

            return {
                d: days,
                h: hours,
                m: minutes,
                s: seconds
            };
        }
    };
}]);

ableApp.run(['$templateCache', function($templateCache) {
    $templateCache.put('searchbox.tpl.html', '<input id="pac-input" class="pac-controls" type="text" placeholder="Search">');
    $templateCache.put('window.tpl.html', '<div  ng-init="showPlaceDetails(parameter)">{{place.name}}</div>');
    $templateCache.put("angular-ui-notification-fadeIn.html", "<div class=\"ui-notification animated fadeIn\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-fadeInLeft.html", "<div class=\"ui-notification animated fadeInLeft\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-fadeInRight.html", "<div class=\"ui-notification animated fadeInRight\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-fadeInUp.html", "<div class=\"ui-notification animated fadeInUp\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-fadeInDown.html", "<div class=\"ui-notification animated fadeInDown\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-bounceIn.html", "<div class=\"ui-notification animated bounceIn\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-bounceInLeft.html", "<div class=\"ui-notification animated bounceInLeft\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-bounceInRight.html", "<div class=\"ui-notification animated bounceInRight\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-bounceInUp.html", "<div class=\"ui-notification animated bounceInUp\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-rotateInDownRight.html", "<div class=\"ui-notification animated rotateInDownRight\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-rotateIn.html", "<div class=\"ui-notification animated rotateIn\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-flipInX.html", "<div class=\"ui-notification animated flipInX\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("angular-ui-notification-flipInY.html", "<div class=\"ui-notification animated flipInY\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");
    $templateCache.put("secondDialog.html", "<div class=\"ngdialog-message\"><h3 class=\"f-26\">Add Contact</h3><div><div class=\"md-group-add-on\"><span class=\"md-add-on\"><i class=\"icofont icofont-ui-user\"></i></span><div class=\"md-input-wrapper\"><input type=\"text\" class=\"md-form-control\" /><label>Name</label></div></div><div class=\"md-group-add-on\"><span class=\"md-add-on\"><i class=\"icofont icofont-ui-email\"></i></span><div class=\"md-input-wrapper\"><input type=\"Email\" class=\"md-form-control\" /><label>Email</label></div></div><div class=\"md-group-add-on\"><span class=\"md-add-on\"><i class=\"icofont icofont-opposite\"></i></span><div class=\"md-input-wrapper\"><input type=\"text\" class=\"md-form-control\" /><label>Position</label></div></div><div class=\"md-group-add-on\"><span class=\"md-add-on\"><i class=\"icofont icofont-ui-office\"></i></span><div class=\"md-input-wrapper\"><input type=\"text\" class=\"md-form-control\" /><label>Office</label></div></div><div class=\"md-group-add-on\"><span class=\"md-add-on\"><i class=\"icofont icofont-funky-man\"></i></span><div class=\"md-input-wrapper\"><input type=\"number\" class=\"md-form-control\" /><label>Age</label></div></div><div class=\"md-group-add-on\"><span class=\"md-add-on\"><i class=\"icofont icofont-ui-cell-phone\"></i></span><div class=\"md-input-wrapper\"><input type=\"number\" class=\"md-form-control\" /><label>Phone No</label></div></div><div class=\"md-group-add-on\"><span class=\"md-add-on\"><i class=\"icofont icofont-ui-calendar\"></i></span><div class=\"md-input-wrapper\"><input type=\"text\" id=\"date\" class=\"md-form-control md-static\"><label>Birthday Date</label></div></div><div class=\"text-center\"><button type=\"button\" class=\"btn btn-primary waves-effect m-r-20 f-w-600 d-inline-block\">Save</button><button type=\"button\" class=\"btn btn-primary waves-effect m-r-20 f-w-600 md-close d-inline-block\">Close</button></div></div></div>");
}]);


ableApp.directive('countrymap', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).width('auto'),
                $(element).height(300),
                scope.$watch("countryMap", function(newCountry, oldCountry) {
                    setTimeout(function() {
                        $(element).vectorMap({
                            map: newCountry,
                            normalizeFunction: "polynomial",
                            hoverOpacity: .7,
                            hoverColor: !1,
                            regionStyle: {
                                initial: {
                                    fill: "#EC407A"
                                }
                            },
                            markerStyle: {
                                initial: {
                                    r: 9,
                                    fill: "#2196F3",
                                    "fill-opacity": .9,
                                    stroke: "#fff",
                                    "stroke-width": 7,
                                    "stroke-opacity": .4
                                },
                                hover: {
                                    stroke: "#fff",
                                    "fill-opacity": 1,
                                    "stroke-width": 1.5
                                }
                            },
                            backgroundColor: "transparent",
                            markers: [{
                                latLng: [41.9, 12.45],
                                name: "Vatican City"
                            }, {
                                latLng: [43.73, 7.41],
                                name: "Monaco"
                            }, {
                                latLng: [-.52, 166.93],
                                name: "Nauru"
                            }, {
                                latLng: [-8.51, 179.21],
                                name: "Tuvalu"
                            }, {
                                latLng: [43.93, 12.46],
                                name: "San Marino"
                            }, {
                                latLng: [47.14, 9.52],
                                name: "Liechtenstein"
                            }, {
                                latLng: [7.11, 171.06],
                                name: "Marshall Islands"
                            }, {
                                latLng: [17.3, -62.73],
                                name: "Saint Kitts and Nevis"
                            }, {
                                latLng: [3.2, 73.22],
                                name: "Maldives"
                            }, {
                                latLng: [35.88, 14.5],
                                name: "Malta"
                            }, {
                                latLng: [12.05, -61.75],
                                name: "Grenada"
                            }, {
                                latLng: [13.16, -61.23],
                                name: "Saint Vincent and the Grenadines"
                            }, {
                                latLng: [13.16, -59.55],
                                name: "Barbados"
                            }, {
                                latLng: [17.11, -61.85],
                                name: "Antigua and Barbuda"
                            }, {
                                latLng: [-4.61, 55.45],
                                name: "Seychelles"
                            }, {
                                latLng: [7.35, 134.46],
                                name: "Palau"
                            }, {
                                latLng: [42.5, 1.51],
                                name: "Andorra"
                            }, {
                                latLng: [14.01, -60.98],
                                name: "Saint Lucia"
                            }, {
                                latLng: [6.91, 158.18],
                                name: "Federated States of Micronesia"
                            }, {
                                latLng: [1.3, 103.8],
                                name: "Singapore"
                            }, {
                                latLng: [1.46, 173.03],
                                name: "Kiribati"
                            }, {
                                latLng: [-21.13, -175.2],
                                name: "Tonga"
                            }, {
                                latLng: [15.3, -61.38],
                                name: "Dominica"
                            }, {
                                latLng: [-20.2, 57.5],
                                name: "Mauritius"
                            }, {
                                latLng: [26.02, 50.55],
                                name: "Bahrain"
                            }, {
                                latLng: [.33, 6.73],
                                name: "São Tomé and Príncipe"
                            }]
                        });
                    }, 20);
                })
        }
    };
}]);

ableApp.directive('indiamap', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).width('auto'),
                $(element).height(300),
                scope.$watch("indiamap", function(newCountry, oldCountry) {
                    setTimeout(function() {
                        $(element).vectorMap({
                            map: "in_mill",
                            backgroundColor: "transparent",
                            regionStyle: {
                                initial: {
                                    fill: "#1B8BF9"
                                }
                            }
                        });
                    }, 20);
                })
        }
    };
}]);

ableApp.directive('asiamap', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).width('auto'),
                $(element).height(300),
                scope.$watch("asiamap", function(newCountry, oldCountry) {
                    setTimeout(function() {
                        $(element).vectorMap({
                            map: "asia_mill",
                            backgroundColor: "transparent",
                            regionStyle: {
                                initial: {
                                    fill: "#4DB6AC"
                                }
                            }
                        });
                    }, 20);
                })
        }
    };
}]);

ableApp.directive('usamap', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).width('auto'),
                $(element).height(300),
                scope.$watch("usamap", function(newCountry, oldCountry) {
                    setTimeout(function() {
                        $(element).vectorMap({
                            map: "us_aea_en",
                            backgroundColor: "transparent",
                            regionStyle: {
                                initial: {
                                    fill: "#CDDC39"
                                }
                            }
                        });
                    }, 20);
                })
        }
    };
}]);

ableApp.directive('canadamap', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).width('auto'),
                $(element).height(300),
                scope.$watch("canadamap", function(newCountry, oldCountry) {
                    setTimeout(function() {
                        $(element).vectorMap({
                            map: "uk_mill_en",
                            backgroundColor: "transparent",
                            regionStyle: {
                                initial: {
                                    fill: "#18FFFF"
                                }
                            }
                        });
                    }, 20);
                })
        }
    };
}]);

ableApp.directive('ukmap', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).width('auto'),
                $(element).height(300),
                scope.$watch("ukmap", function(newCountry, oldCountry) {
                    setTimeout(function() {
                        $(element).vectorMap({
                            map: "uk_mill_en",
                            backgroundColor: "transparent",
                            regionStyle: {
                                initial: {
                                    fill: "#81c868"
                                }
                            }
                        });
                    }, 20);
                })
        }
    };
}]);

/*Directive for comma counter*/
ableApp.directive("countToComma", ["$timeout", "$window", function(a) {

    return {
        replace: !1,
        scope: !0,
        link: function(b, c, d) {
            var counter = $('.CounterS');

            var e, f, g, h, i, j, k, l = c[0],
                num,
                m = function() {

                    num = d.countToComma.replace(/\,/g, ''),
                        d.countToComma = num,
                        f = 30,
                        i = 0,
                        b.timoutId = null,
                        j = parseInt(d.countToComma) || 0,
                        b.value = parseInt(d.value, 10) || 0,
                        g = 1e3 * parseFloat(d.duration) || 0,
                        h = Math.ceil(g / f),
                        k = (j - b.value) / h,
                        e = b.value

                },
                n = function() {

                    b.timoutId = a(function() {

                        e += k,
                            i++,
                            i >= h ? (a.cancel(b.timoutId),
                                e = j,
                                l.innerText = j.toLocaleString()) : (l.innerText = Math.round(e).toLocaleString(),
                                n())
                    }, f)
                },

                o = function() {

                    b.timoutId && a.cancel(b.timoutId), m(), n()
                };
            return d.$observe("countTo", function(a) {

                    a && o()
                }),
                d.$observe("value", function() {

                    o()
                }), !0
        }
    }
}]);

/*Directive for point counter*/
ableApp.directive("countTo", ["$timeout", "$window", function(a) {

    return {
        replace: !1,
        scope: !0,

        link: function(b, c, d) {
            var counterS = $('.CounterS');

            var e, f, g, h, i, j, k, l = c[0],
                num,
                m = function() {

                    if (d.countTo % 1 == 0) {

                        f = 30,
                            i = 0,
                            b.timoutId = null,
                            j = parseInt(d.countTo) || 0,
                            b.value = parseInt(d.value, 10) || 0,
                            g = 1e3 * parseFloat(d.duration) || 0,
                            h = Math.ceil(g / f),
                            k = (j - b.value) / h,
                            e = b.value
                    } else if (d.countTo.match(",")) {

                        num = d.countTo.replace(/\,/g, ''),
                            d.countTo = num,
                            f = 30,
                            i = 0,
                            b.timoutId = null,
                            j = parseInt(d.countTo) || 0,
                            b.value = parseInt(d.value, 10) || 0,
                            g = 1e3 * parseFloat(d.duration) || 0,
                            h = Math.ceil(g / f),
                            k = (j - b.value) / h,
                            e = b.value
                    } else if (d.countTo % 1 !== 0) {

                        f = 30,
                            i = 0,
                            b.timoutId = null,
                            j = parseFloat(d.countTo) || 0,
                            b.value = parseInt(d.value, 10) || 0,
                            g = 1e3 * parseFloat(d.duration) || 0,
                            h = Math.ceil(g / f),
                            k = (j - b.value) / h,
                            e = b.value
                    }

                },
                n = function() {

                    b.timoutId = a(function() {

                        e += k,
                            i++,
                            i >= h ? (a.cancel(b.timoutId),
                                e = j,
                                l.innerText = j) : (l.innerText = Math.round(e),
                                n())
                    }, f)
                },

                o = function() {
                    b.timoutId && a.cancel(b.timoutId), m(), n()
                };
            return d.$observe("countTo", function(a) {

                a && o()
            }), d.$observe("value", function() {

                o()
            }), !0
        }
    }
}]);
