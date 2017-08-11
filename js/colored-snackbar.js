angular.module('coloredSnackbar', [])
    .directive('coloredSnackbar', ['$timeout','$http', snackBar]);


function snackBar($timeout, $http) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            message: '@',
            backColor: '@',
            fontColor: '@',
            position: '@',
            snackTime: '@',
            showSnackbar: '&'
        },
        templateUrl: '../template/colored-snackbar.html',
        link: function (scope, element, attrs) {
            scope.message = scope.message || "This is default text. Please add message attribute to the directive.";

            scope.showVisible = false;
            scope.backColor = '#333333';
            scope.fontColor = '#FFFFFF';
            scope.snackTime = "3000";

            scope.showSnackbar = function(){
                scope.showVisible = true;
                $timeout(function(){
                    scope.showVisible = false;
                }, scope.snackTime);
            };

            element.on('click', function() {
                $timeout(function () {
                   scope.showSnackbar();
                },0)
            });

        }
    };
}