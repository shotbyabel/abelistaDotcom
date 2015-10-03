(function() {
 'use strict';

 angular.module( 'abelApp')
  .controller('ResourcesController', ResourcesController);

  function ResourcesController() {
    var vm = this;

    vm.about = function() {
      console.log();
    };
  }


})();