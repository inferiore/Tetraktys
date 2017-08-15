/*! Angular Bar Rating - v0.0.1
* Copyright (c) G. Tomaselli <girotomaselli@gmail.com> 2016; Licensed  
*/
angular.module('ng-bar-rating', [])
.directive('ngBarRating', [function () {
	
	contrFunction = ['$scope', '$timeout', '$element', function($scope, $timeout, $element){
			var options = $scope.options;			
			
			for(var i=0;i<options.length;i++){
				var opt = options[i];
				
				if(!angular.isObject(opt)){
					options[i] = {
						text: opt,
						value: opt
					}
				}
			}
			
			$timeout(function(){
				var value = $scope.ngModel;
				$scope.settings.initialRating = (typeof value != 'undefined' ? (typeof value) +':'+ value : '');
				$element.barrating($scope.settings);
			});
		}];
	
	return({
		scope: {
			settings: "=barRatingSettings",
			options: "=barRatingOptions",
			ngModel: "=?"
		},
		restrict: "A",
		replace: true,
		templateUrl: 'tmpl.html',
		controller: contrFunction
	});
}]);
