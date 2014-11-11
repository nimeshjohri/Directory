angular.module('form', []).controller('control', function($scope) {
	$scope.database=[];
 $scope.save=function()
 {
 	$scope.database.push({name: $scope.fullname, email: $scope.emailadd, number: $scope.phonenumber, address: $scope.fulladdress});
 	$scope.fullname=null;
 	$scope.emailadd=null;
 	$scope.phonenumber=null;
 	$scope.fulladdress=null;
 };
});