angular.module('myApp', [])
.controller('myController', ['$scope', function myController($scope) {
    $scope.female_name = "female name"; 
    $scope.position = "position"; 
    $scope.tedious_task = "tedious task"; 
    $scope.dirty_task = "dirty task"; 
    $scope.female_name = "female name"; 
    $scope.celebrity = "celebrity"; 
    $scope.useless_skill = "useless skill"; 
    $scope.aboutOn = false; 
}]); 


// function openAbout() {
//     console.log('stuff')
//     $('#about').animate({ opacity: 1 }, 300);
// }

// function main() {
//     console.log("IT RAN")
//     $('.form').on('click', openAbout); 
// }

// $(main); 