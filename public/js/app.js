
(function() {
  'use strict';

angular.module( 'abelApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider


.state('/aboutme', {
        url:          '/aboutme',
        templateUrl:  'templates/aboutme.html',
        controller:   'AboutmeController',
        controllerAs: 'vm'
        
      })

      .state('/portfolio', {
        url:            '/portfolio',
        templateUrl:    'templates/portfolio.html',
        controller:     'PortfolioController',
        controllerAs:   'vm'
      
      })


      .state('/contact', {
        url:            '/contact',
        templateUrl:    'templates/contact.html',
        controller:     'ContactController',
        controllerAs:   'vm'
      
      })


      .state('/download', {
        url:            '/download',
        templateUrl:    'templates/download.html',
        controller:     'DownloadController',
        controllerAs:   'vm'
      
      })       

      .state('/resume', {
        url:            '/resume',
        templateUrl:    'templates/resume.html',
        controller:     'ResumeController',
        controllerAs:   'vm'
      
      });

      $urlRouterProvider.otherwise('/aboutme'); 
    
  }])



  })();