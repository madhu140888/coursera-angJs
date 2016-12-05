(function () {
// use strict - used to prevent accidental declaration of global variables
//Ex: just declaring x = "hello" without var x, will automatically declared as global variable in JS
//Use strict prevents this declaration and makes it undefined within this scope.
'use strict';
//x = "hello";
angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
//console.log($scope);
$scope.name = "";
$scope.totalValue = 0;
$scope.calTotalName = function () {
  var tempTotalNameVal = calcName($scope.name);
  $scope.totalValue = tempTotalNameVal;
};
$scope.sayHello = function (txt) {
  return "Total Value! "+calcName(txt);
};
});

function calcName(str) {
  var totalStrVal = 0;
  for(var i=0;i<str.length;i++){
    totalStrVal += str.charCodeAt(i);
  }
  return totalStrVal;
}
})();
