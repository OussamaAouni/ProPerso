var App = angular.module('AngularJSProject', ['resource']);
scope.records=[{title:'one'},{title:'two'},{title:'three'}];
var ctrl = function ($scope,$http,$location){
	$location.path('/AngularJSProject/index.html');
};
ctrl.$inject =['$scope','$http','$location'];
