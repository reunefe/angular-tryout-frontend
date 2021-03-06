'use strict';

module.exports = function ($parse) {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			let fn = $parse(attrs.myLoad);
			elem.on('load', function (event) {
				scope.$apply(function () {
					fn(scope, {$event: event});
				});
			});
		}
	};
};