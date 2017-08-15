(function() {
	angular.module('demoApp', ['ng-bar-rating']).controller('demoCtrl', [
		'$scope','$window', function($scope, $window){
			
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
				{value: 0, text: 'bad'},
				{value: 1, text: 'fair'},
				{value: 2, text: 'good'},
				{value: 3, text: 'excellent'},
				{value: 4, text: 'great'}
			];
			
			/*
			$scope.ratingOptions = [
				'1',
				'2',
				'3',
				'4',
				'5'
			];
			
			$scope.ratingOptions2 = [
				{value: 0, text: 'A'},
				{value: 1, text: 'B'},
				{value: 2, text: 'C'},
				{value: 3, text: 'D'},
				{value: 4, text: 'E'}
			];
			*/
		}
	]);
})();