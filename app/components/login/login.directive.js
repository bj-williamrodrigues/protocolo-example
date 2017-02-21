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
