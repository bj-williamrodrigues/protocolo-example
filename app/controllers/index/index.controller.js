(function() {
	'use strict';

	angular.module('protocoloApp').controller('IndexController', IndexController);

	IndexController.$inject = ['$state', '$stateParams', 'AjaxService'];

	function IndexController($state, $stateParams, AjaxService) {
		var ctrl = this;

		ctrl.welcome = "";
		ctrl.data = moment().format();

		ctrl.init = function() {
			ctrl.welcome = "Bem vindo";

			AjaxService.get({
				url: 'json/menu.json',
				params: {},
				success: function(result){
					console.log(result);
				}
			});

			AjaxService.post({
				url: 'api/user',
				params: {},
				data: {test: 123456},
				success: function(result) {
					console.log(result);
				}
			});
		}();
	};
})();
