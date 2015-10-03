
(function() {
  'use strict';

angular.module( 'abelApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('/home', {
        url:          '/home',
        templateUrl:  'templates/home.html'
      })

.state('/aboutme', {
        url:          '/aboutme',
        templateUrl:  'templates/aboutme.html',
        controller:   'AboutmeController',
        controllerAs: 'vm'
        
      })


      .state('/contact', {
        url:            '/contact',
        templateUrl:    'templates/contact.html',
        controller:     'ContactController',
        controllerAs:   'vm'
      
      })


      .state('/portfolio', {
        url:            '/portfolio',
        templateUrl:    'templates/portfolio.html',
        controller:     'PortfolioController',
        controllerAs:   'vm'
      
      })

      .state('/resources', {
        url:            '/resources',
        templateUrl:    'templates/resources.html',
        controller:     'ResourcesController',
        controllerAs:   'vm'
      
      })       

      .state('/resume', {
        url:            '/resume',
        templateUrl:    'templates/resume.html',
        controller:     'ResumeController',
        controllerAs:   'vm'
      
      });

      $urlRouterProvider.otherwise('/home'); 
    
  }])



  })();