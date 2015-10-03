(function() {
 'use strict';

 angular.module( 'abelApp')
  .controller('ContactController', ContactController);

  function ContactController() {
    var vm = this;

    vm.about = function() {
      console.log();
    };
  }


})();