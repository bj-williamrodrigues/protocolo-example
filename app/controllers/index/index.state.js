(function() {
	'use strict';

	angular.module('protocoloApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('index', {
			url: '',
			parent: 'template',
			views: {
				'conteudo' : {
					templateUrl : 'app/views/index/index.html',
					controller : 'IndexController',
					controllerAs : 'ctrl'
				}
			}
		});
	}
})();
