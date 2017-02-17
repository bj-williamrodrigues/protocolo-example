(function() {
	'use strict';

	angular.module('protocoloApp').controller('ProtocoloOnLineController', ProtocoloOnLineController);

	ProtocoloOnLineController.$inject = ['$state', '$stateParams'];

	function ProtocoloOnLineController($state, $stateParams) {
		var ctrl = this;

		ctrl.welcome = "";

		ctrl.init = function() {
			
		}();
	};
})();
