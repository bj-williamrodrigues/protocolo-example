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
				config: {jsonpCallbackParam: 'callback'},
				headers: {
					'Content-Type': 'charset=utf-8'
				},
				ignoreLoadingBar: post.loader ? true : false
			}).then(function(response) {
				jsonp.success(eval(response.data));
			}, function(response) {
				console.log(response);

				console.log(response.data || 'Request failed');
			});
		}
	}
})();
