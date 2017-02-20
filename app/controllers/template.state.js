(function() {
	'use strict';

	angular.module('protocoloApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('template', {
			abstract: true,
			views : {
				'content@' : {
					templateUrl : 'app/views/template.html'
				}
			}
		});
	}
})();
