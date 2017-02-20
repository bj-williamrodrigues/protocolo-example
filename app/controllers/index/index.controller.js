(function() {
	'use strict';

	angular.module('protocoloApp').controller('IndexController', IndexController);

	IndexController.$inject = ['$state', '$stateParams','AjaxService'];

	function IndexController($state, $stateParams) {
		var ctrl = this;
		
		ctrl.welcome = "";
		ctrl.numero = 0;
		ctrl.json = "";
		
		
		ctrl.init = function() {
			ctrl.welcome = "Bem vindo";
			ctrl.numero = 123465;
		}();
	};
})();
