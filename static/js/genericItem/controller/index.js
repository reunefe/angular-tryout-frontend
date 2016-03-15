'use strict';

var angular = require('angular');
var genericItemModule = angular.module('libraryApp.genericItemModule');

genericItemModule.controller('genericItemCtrl', ['$scope', '$location', '$routeParams', 'imageUrlService', require('./grid')]);
