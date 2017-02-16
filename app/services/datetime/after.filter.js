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
