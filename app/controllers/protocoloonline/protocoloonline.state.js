(function() {
	'use strict';

	angular.module('protocoloApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('menu', {
			url: '/menu',
			parent: 'template',
			views: {
				'conteudo' : {
					templateUrl : 'app/views/protocoloonline/menu.html',
					controller : 'ProtocoloOnLineController',
					controllerAs : 'ctrl'
				}
			}
		});
	}
})();
