(function() {
 'use strict';

 angular.module( 'abelApp')
  .controller('DownloadController', DownloadController);

  function DownloadController() {
    var vm = this;

    vm.about = function() {
      console.log();
    };
  }


})();