(function() {
	'use strict';

	angular.module('protocoloApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('contato', {
			url: '/contato',
			parent: 'template',
			views: {
				'conteudo' : {
					templateUrl : 'app/views/contato/templatecontactform.html',
					controller : 'ContactFormController',
					controllerAs : 'ctrl'
				}
			}
		});
	}
})();
