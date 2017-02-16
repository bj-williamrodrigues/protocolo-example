(function() {
	'use strict';

	angular.module('protocoloApp', ['ui.router', 'angular-loading-bar', 'ngSanitize', 'angular.filter', 'ngAnimate', 'toastr', 'ui.utils.masks']).run(run);

	run.$inject = [];

	function run() {};

	angular.module('protocoloApp').config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
		cfpLoadingBarProvider.latencyThreshold = 300;
		cfpLoadingBarProvider.parentSelector = '#loadBJconnect';
		cfpLoadingBarProvider.spinnerTemplate = '<div id="loader-wrapper"><div class="loader-box"></div><div class="loader"></div><div class="loader-texto">Carregando</div></div>';
	}]);

	angular.module('protocoloApp').config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('');
	}]);

})();
