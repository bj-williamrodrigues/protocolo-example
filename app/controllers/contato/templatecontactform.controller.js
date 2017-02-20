(function() {
	'use strict';

	angular.module('protocoloApp').controller('ContactFormController', ContactFormController);

	ContactFormController.$inject = ['$state', '$stateParams'];

	function ContactFormController($state, $stateParams) {
		var ctrl = this;

		ctrl.welcome = "";

		ctrl.init = function() {
			
		}();
	};
})();
