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
