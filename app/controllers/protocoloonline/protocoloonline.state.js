(function() {
	'use strict';

	angular.module('protocoloApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('menu', {
			url: '/menu',
			views: {
				'content' : {
					templateUrl : 'app/views/protocoloonline/menu.html',
					controller : 'ProtocoloOnLineController',
					controllerAs : 'ctrl'
				}
			}
		});
	}
})();
