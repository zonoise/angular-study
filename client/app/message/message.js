'use strict';

angular.module('myappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('message', {
        url: '/message',
        template: '<message></message>'
      });
  });
