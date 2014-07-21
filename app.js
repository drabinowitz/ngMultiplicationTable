angular.module('myApp',[])

	.controller('displayCtrl',function($scope){

		$scope.$on('displayData',function(event,data){

			$scope.content = data;

		});

	})

	.controller('MultiplicationCtrl',function($rootScope, $scope, $attrs){

		function populateNumbers(upperLimit){

			var numbers = [];

			for( var i = 1; i <= upperLimit; i++ ){

				numbers.push(i);

			}

			return numbers;

		}

		$scope.$watch('numberLimit',function(limit){

			$scope.numbers = populateNumbers(limit);

		});

		$scope.numberLimit = $attrs.initialNumberLimit || 10;

		$scope.numbers = populateNumbers($scope.numberLimit);

		$scope.compute = function(a,b){
			return a * b;
		}

		var activeFactorA;

		var activeFactorB;

		$scope.clearActiveFactors = function(){

			activeFactorA = activeFactorB = null;

		};

		$scope.setActiveFactors = function(a,b){

			activeFactorA = a;

			activeFactorB = b;

		};

		$scope.matchesFactor = function(a,b){

			return a == activeFactorA || b == activeFactorB;

		};

		$scope.setActiveNumber = function(number){

			$rootScope.$broadcast('displayData', number);

		};

	});