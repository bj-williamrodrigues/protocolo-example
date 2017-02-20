(function() {
	'use strict';

	angular.module('protocoloApp').filter('situacao', situacao);

	situacao.$inject = [ ];

	function situacao() {
		return function(situacao) {
			if(situacao != "0") {
				return "ATIVO"
			}
			else {
				return "INATIVO";
			}
		};
	}
})();
