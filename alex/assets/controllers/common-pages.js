app.controller('commonController', function ($scope) {

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