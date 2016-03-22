function StaffController(){
  this.name = 'Staff';
  this.email = 'staff@email.com';
  this.phone = '1-800-CALL ME';
}

angular
  .module('app')
  .controller('StaffController', StaffController);
