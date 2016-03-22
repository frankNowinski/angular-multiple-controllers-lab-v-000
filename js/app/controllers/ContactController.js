function ContactController(){
  this.name = 'Frank';
  this.email = 'email@email.com';
  this.phone = 911;

  var vm = this;

  vm.changeName = function () {
    vm.name = 'Batman';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
