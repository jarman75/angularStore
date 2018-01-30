(function(angular) {
  'use strict';
  angular.module('invoice0', [])
    .controller('InvoiceController', function InvoiceController() {
      
      this.qty = 1;
      this.cost = 2;
      this.inCurr = 'EUR';      
      this.currencies = ['USD', 'EUR', 'CNY'];
      this.usdToForeignRates = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
      }; 

    });

})(window.angular);