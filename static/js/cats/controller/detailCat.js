'use strict';

module.exports = function ($scope, $routeParams, catService) {
	$scope.today = new Date();
	$scope.cat = null;

	catService.getCat($routeParams.catId).then(function (cat) {
		$scope.cat = cat;
	});

	$scope.cancelCat = function () {
		window.history.back();
	};
};