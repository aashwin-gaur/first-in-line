'use strict';


/**
 * Main Module of the Application
 */

angular
    .module("first-in-line",
    [
        'ngRoute'
    ])
    
    .config(function($routeProvider){
        $routeProvider
            .when('/', {

                templateUrl:'partials/views/home.html',
                controller:'homeController',
                controllerAs:'home'
            })
            .otherwise({
                redirectTo: '/'
            });
    
    }); 


