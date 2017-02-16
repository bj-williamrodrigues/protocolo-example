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
