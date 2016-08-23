(function () {
  'use strict';

  angular.module('BlurAdmin.pages.application', [])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('application', {
      url: '/application',
      templateUrl: 'app/pages/application/application.html',
      title: 'My New Page',
      sidebarMeta: {
        order: 800,
      },
    });
  }


})();