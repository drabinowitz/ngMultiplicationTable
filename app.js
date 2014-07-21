angular.module('myApp',[])
	.controller('MultiplicationCtrl',function($scope, $attrs){

		function populateNumbers(upperLimit){

			var numbers = [];

			for( var i = 1; i <= upperLimit; i++ ){

				numbers.push(i);

			}

			return numbers;

		}

		$scope.numberLimit = $attrs.initialNumberLimit || 10;

		$scope.numbers = populateNumbers($scope.numberLimit);

		$scope.compute = function(a,b){
			return a * b;
		}

	});