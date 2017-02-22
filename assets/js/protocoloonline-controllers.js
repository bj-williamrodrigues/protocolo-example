/*! protocoloonline 2017-02-22 09:02:57 */
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

(function() {
	'use strict';

	angular.module('protocoloApp').service('AjaxService', AjaxService);

	AjaxService.$inject = [ '$http', '$templateCache', '$sce', '$sceDelegate' ];

	function AjaxService($http, $templateCache, $sce, $sceDelegate) {
		this.get = function (get) {
			return $http.get(get.url, {
				method: "GET",
				params: get.params,
				headers: {
					'Content-Type': 'charset=utf-8'
				},
				ignoreLoadingBar: get.loader ? true : false
			}).then(function successCallback(response) {
				if(get.success != undefined) {
					get.success(eval(response.data));
				}
			},
			function errorCallback(response) {
				console.log(response.data);
			});
		}

		this.post = function(post) {
			return $http.post(post.url, {
				method: "POST",
				params: post.params,
				data: angular.toJson(post.data),
				headers: {
					'Content-Type': 'charset=utf-8'
				},
				ignoreLoadingBar: post.loader ? true : false
			}).then(function successCallback(response) {
				if(post.success != undefined) {
					post.success(eval(response.data));
				}
			},
			function errorCallback(response) {
				console.log(response.data);
			});
		}

		this.jsonp = function(jsonp) {
			$http({
				method: 'JSONP',
				url: $sce.trustAsResourceUrl(jsonp.url),
				config: {jsonpCallbackParam: 'callback'}
			}).then(function(response) {
				jsonp.success(eval(response.data));
			}, function(response) {
				console.log(response);

				console.log(response.data || 'Request failed');
			});
		}
	}
})();

(function() {
	'use strict';

	angular.module('protocoloApp').filter('after', after);

	after.$inject = [ ];

	function after() {
		return function(date, afterDate) {
			var value = moment(date).format('YYYY-MM-DD');
			var valueafter = moment(afterDate).format('YYYY-MM-DD');

			return moment(value).isAfter(valueafter);
		};
	}
})();

(function() {
	'use strict';

	angular.module('protocoloApp').filter('before', before);

	before.$inject = [ ];

	function before() {
		return function(date, beforeDate) {
			var value = moment(date).format('YYYY-MM-DD');
			var valuebefore = moment(beforeDate).format('YYYY-MM-DD'); 

			return moment(value).isBefore(valuebefore);
		};
	}
})();

(function() {
	'use strict';

	angular.module('protocoloApp').filter('datetime', datetime);

	datetime.$inject = [ ];

	function datetime() {
		return function(datetime, format) {
			if(format) {
				return moment(datetime).format(format);
			}
			else {
				return moment(datetime).format("DD/MM/YYYY");
			}
		};
	}
})();

(function() {
	'use strict';

	angular.module('protocoloApp').filter('same', same);

	same.$inject = [ ];

	function same() {
		return function(date, sameDate) {
			var value = moment(date).format('YYYY-MM-DD');
			var valuesame = moment(sameDate).format('YYYY-MM-DD');

			return moment(value).isSame(valuesame);
		};
	}
})();

(function() {
	'use strict';

	angular.module('protocoloApp').directive('login', ['AjaxService', 'toastr', function(AjaxService, toastr) {
		return {
			restrict: 'E',
			templateUrl: 'app/components/login/login.html',
			scope: {
				email: '@',
				senha: '@'
			},
			link: function(scope, elem, attr) {
				scope.login = function() {
					console.log(scope);
					console.log(elem);
					console.log(attr);

					AjaxService.post({
						url: 'api/user',
						params: {},
						data: {
							email: scope.email,
							senha: scope.senha
						},
						success: function(result) {
							toastr.success('login efetuado!', 'OK!');
						}
					});
				};
			}
		}
	}]);
})();

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

			AjaxService.jsonp({
				url: 'http://mapasinterativos.ibge.gov.br/arcgis/rest/services/AMAZONIA/MapServer/layers?f=pjson',
				success: function(result){
					console.log(result);
				}
			});

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

(function() {
	'use strict';

	angular.module('protocoloApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('login', {
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

(function() {
	'use strict';

	angular.module('protocoloApp').controller('ProtocoloOnLineController', ProtocoloOnLineController);

	ProtocoloOnLineController.$inject = ['$state', '$stateParams'];

	function ProtocoloOnLineController($state, $stateParams) {
		var ctrl = this;

		ctrl.welcome = "";

		ctrl.init = function() {
			
		}();
	};
})();

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
