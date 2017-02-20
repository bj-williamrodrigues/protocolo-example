(function() {
	'use strict';

	angular.module('protocoloApp').controller('IndexController', IndexController);

	IndexController.$inject = ['$state', '$stateParams'];

	function IndexController($state, $stateParams) {
		var ctrl = this;

		ctrl.welcome = "";
		ctrl.datetime = "";
		ctrl.situacao = "0";

		ctrl.init = function() {
			ctrl.welcome = "Bem vindo";
			ctrl.datetime = moment();
			ctrl.situacao = "0";

		}();
	};
})();
