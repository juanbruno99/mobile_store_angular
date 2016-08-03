//Directive that holds the applications' info for the model objects
app.directive('appInfo', function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/appInfo.html'
    };
});