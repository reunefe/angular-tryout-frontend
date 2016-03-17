'use strict';

var angular = require('angular');

// Define app
var directiveModule = angular.module('libraryApp.directiveModule', []);

directiveModule.directive('myLoad', ['$parse', require('./load')]);
directiveModule.directive('myImageGridTile', [require('./imageGridTile')]);
directiveModule.directive('myTab', [require('./tab')]);
directiveModule.directive('myTabContent', [require('./tabContent')]);
directiveModule.directive('myDialogHeader', [require('./dialog/dialogHeader')]);
directiveModule.directive('myDialogFooter', [require('./dialog/dialogFooter')]);