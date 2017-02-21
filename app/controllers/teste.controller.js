(function() {
	'use strict';

	angular.module('protocoloApp').controller('TesteController', TesteController);

	TesteController.$inject = [];

	function TesteController() {
		var ctrl = this;

		ctrl.soma = 0;

		ctrl.init = function() {
			ctrl.soma = 1 + 1;
		};
	};
})();
