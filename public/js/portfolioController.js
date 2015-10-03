(function() {
 'use strict';

 angular.module( 'abelApp')
  .controller('PortfolioController', PortfolioController);

  function PortfolioController() {
    var vm = this;

    vm.about = function() {
      console.log();
    };
  }


})();