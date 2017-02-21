(function() {
	'use strict';

	angular.module('protocoloApp').controller('IndexController', IndexController);

	IndexController.$inject = ['$state', '$stateParams', 'AjaxService'];

	function IndexController($state, $stateParams, AjaxService) {
		var ctrl = this;

		ctrl.welcome = "";
		ctrl.data = moment().format();

		ctrl.init = function() {
			ctrl.welcome = "Bem vindo 2....";

			AjaxService.get({
				url: 'json/menu.json',
				params: {},
				success: function(result){
					console.log(result);
				}
			});
		}();
	};
})();
