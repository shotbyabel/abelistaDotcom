(function() {
 'use strict';

 angular.module( 'abelApp')
  .controller('ResumeController', ResumeController);

  function ResumeController() {
    var vm = this;

    vm.about = function() {
      console.log();
    };
  }


})();