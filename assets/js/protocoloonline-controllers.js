/*! protocoloonline 2017-02-20 06:02:02 */
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

	AjaxService.$inject = [ '$http' ];

	function AjaxService($http) {
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
			return $http.jsonp(jsonp.url).
			success(function(data, status, headers, config) {
				if(jsonp.success != undefined) {
					jsonp.success(eval(data));
				}
			}).
			error(function(data, status, headers, config) {
				console.log(data);
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

	angular.module('protocoloApp').controller('IndexController', IndexController);

	IndexController.$inject = ['$state', '$stateParams','AjaxService'];

	function IndexController($state, $stateParams) {
		var ctrl = this;
		
		ctrl.welcome = "";
		ctrl.numero = 0;
		ctrl.json = "";
		
		
		ctrl.init = function() {
			ctrl.welcome = "Bem vindo";
			ctrl.numero = 123465;
		}();
	};
})();

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
