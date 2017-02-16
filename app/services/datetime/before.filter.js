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
