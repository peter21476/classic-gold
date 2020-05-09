'use strict';

angular.module('classicGold', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('app', {
                url: '/',
                templateUrl: "../views/main.html"
            })
            // route for the resume page

            .state('news', {
                url: '/news',
                templateUrl: "../views/news.html"
            })
            .state('latest', {
                url: '/latest',
                templateUrl: "../views/latest.html"
            })
            .state('contact', {
                url: '/contact',
                templateUrl: "../views/contact.html"
            })
            .state('producers', {
                url: '/producers',
                templateUrl: "../views/producers.html"
            })
        $urlRouterProvider.otherwise('/');
    })
