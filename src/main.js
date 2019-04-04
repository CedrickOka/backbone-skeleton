/**
 * Main Project
 */
require.config({
	paths: {
		text: '../bower_components/text/text',
		domReady: '../bower_components/domReady/domReady',
		jquery: '../bower_components/jquery/dist/jquery',
		backbone: '../bower_components/backbone/backbone',
		underscore: '../bower_components/underscore/underscore'
	},
	packages: ['controller'],
	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	},
	waitSeconds: 30,
	urlArgs: 'v=1'
});

require(['domReady', 'app'], function(domReady, App){
	'use strict';
	
	domReady(function(){
		App.getInstance().start();
	});
});
