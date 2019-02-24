(function () {
// use strict - used to prevent accidental declaration of global variables
//Ex: just declaring x = "hello" without var x, will automatically declared as global variable in JS
//Use strict prevents this declaration and makes it undefined within this scope.
'use strict';
//x = "hello";
angular.module('myFirstApp', [])

.controller('myFirstController', DIController)
.filter('customreplace',custFilter) //register the custom filter by 'filtername', 'actual filter'
.filter('custom1replace',custFilter1); //you don't need to inject it if you are directly using this custom filter in html

DIController.$inject = ['$scope','$filter','customreplaceFilter'];
//inject the custom filter by custom filter name + "Filter" keyword
function DIController ($scope, $filter, customreplaceFilter) {
  //console.log($scope);
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.testMsg = "Madhu is numeric";
  $scope.calTotalName = function () {
    var tempTotalNameVal = calcName($scope.name);
    $scope.totalValue = tempTotalNameVal;
  };
  $scope.sayHello = function (txt) {
    return "Total Value! "+calcName(txt);
  };
  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
  $scope.custFilterCall = function () {
    return customreplaceFilter($scope.testMsg);
  };
}

//custom filter
function custFilter(){
  return function (input) {
    input = input || "";
    input = input.replace("numeric","digital");
    return input;
  };
}
//custom filter
function custFilter1(){
  return function (input, target, replace) { //input, param1, param2
    input = input || "";
    input = input.replace(target,replace);
    return input;
  };
}

function calcName(str) {
  var totalStrVal = 0;
  for(var i=0;i<str.length;i++){
    totalStrVal += str.charCodeAt(i);
  }
  return totalStrVal;
}
})();
