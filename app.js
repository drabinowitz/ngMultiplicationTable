angular.module('madlibs', [])

	.controller('myController',['$scope', function($scope) {
	
		$scope.madlibs={
			name:{word:'Name',index:1},
			jobTitle:{word:'Job title',index:2},
			tediousTask:{word:'Tedious task',index:3},
			dirtyTask:{word:'Dirty task',index:4},
			celebrity:{word:'Celebrity',index:5},
			uselessSkill:{word:'Useless skill',index:6},
			adjective:{word:'Adjective',index:7},
			obnoxiousCelebrity:{word:'Obnoxious celebrity',index:8},
			hugeNumber:{word:'Huge number',index:9}
		}

		$scope.genderInput="male";

	}])

	.filter('orderObjectBy', function() {
	  return function(items, field, reverse) {
	    var filtered = [];
	    angular.forEach(items, function(item) {
	      filtered.push(item);
	    });
	    filtered.sort(function (a, b) {
	      return (a[field] > b[field] ? 1 : -1);
	    });
	    if(reverse) filtered.reverse();
	    return filtered;
	  };
	})

	.filter('gender', function() {
	  return function(input,genderInput) {
	    var pronouns={obj:['he','she'],subj:['him','her'],poss:['his','her']};
	    return genderInput == "male"? pronouns[input][0] : pronouns[input][1];
	  };
	});