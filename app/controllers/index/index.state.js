(function() {
	'use strict';

	angular.module('protocoloApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('index', {
			url: '',
			views: {
				'content' : {
					templateUrl : 'app/views/index/index.html',
					controller : 'IndexController',
					controllerAs : 'ctrl'
				}
			}
		});
	}
})();
