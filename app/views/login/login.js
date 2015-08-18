/**
 * Created by athajudeen on 18/08/2015.
 */

angular.module('login', [])

    .directive('loginPage', function(){
        return{
            restrict: 'E',
            templateUrl: 'views/login/login.html',
            controller : ['$scope', function($scope){

                $scope.submit = function(){
                    console.log($scope.username, $scope.password);
                };
            }]
        };
    });

