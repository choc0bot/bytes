// This is a JavaScript file

// This is a JavaScript file

var myApp = angular.module('myApp', ['onsen','onsen.directives']);

//FACTORY
myApp.factory('bytesizedInfo', function($http) { 
    return $http.get('https://bytesized-hosting.com/api/v1/accounts.json?api_key=CHANGE_THIS');
});

myApp.controller("HelloController", function($scope, bytesizedInfo) {
    $scope.world = 'World';
    $scope.testvar = 'This is a test scope';
    
    bytesizedInfo.success(function(data) { 
        bytesized = data[0];
        $scope.byteName = bytesized.server_name;
        $scope.byteQuota = bytesized.pretty_disk_quota;
        $scope.byteQuotaPercentage = bytesized.disk_quota_percentage;
        $scope.bytePaidTill = bytesized.paid_till;
    });
    
});