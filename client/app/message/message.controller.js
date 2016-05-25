'use strict';
(function(){

class MessageComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('myappApp')
  .component('message', {
    templateUrl: 'app/message/message.html',
    controller: MessageComponent
  });

})();
