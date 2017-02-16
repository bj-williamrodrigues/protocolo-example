(function() {
	'use strict';

	angular.module('protocolooApp').filter('datetime', datetime);

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
