'use strict';

let angular = require('angular');
let catModule = angular.module('libraryApp.catModule');

catModule.controller('registerCatCtrl', ['$scope', '$mdDialog', 'catService', 'eventService', require('./registerCat')]);
catModule.controller('overviewCatCtrl', ['$scope', 'catService', 'eventService', require('./overviewCat')]);
catModule.controller('detailCatCtrl', ['$scope', '$routeParams', 'catService', 'navigationService', require('./detailCat')]);