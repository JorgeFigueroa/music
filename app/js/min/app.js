'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
    .module('myApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '00_mejores/index.php',
                controller: 'NgModelCtrl',
                controllerAs: 'NgModel'
            })
            .when('/controller', {
                templateUrl: '02_techno/index.php',
                controller: 'controller',
                controllerAs: 'controller'
            })
            .when('/eventos', {
                templateUrl: '04_villera/index.php',
                controller: 'eventos',
                controllerAs: 'eventos'
            })

            .when('/vista4', {
                templateUrl: '05_salsa/index.php',
                controller: 'Vista4Ctrl',
                controllerAs: 'vista4'
            })
            .when('/main', {
                templateUrl: '05_salsatonear/index.php',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/articulos', {
                templateUrl: '06_bachata/index.php',
                controller: 'ArticulosCtrl',
                controllerAs: 'articulos'
            })
            .otherwise({
                redirectTo: '/',
                templateaUrl: '00_mejores/index.php'
            });
    });
