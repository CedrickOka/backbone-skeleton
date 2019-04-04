/**
 * Router
 */
define(['underscore', 'backbone'], function(_, Backbone){
	'use strict';
	
	var Router = Backbone.Router.extend({
		routes: {
			'*path': 'notFound'
		},
		
		getRootUrl: function(){
			return '/';
		},
		
		start: function(){
			Backbone.history.start({root: this.getRootUrl()});
		},
		
		notFound: function(path){
			console.log('This path "' + path + '" was not found on this server.');
		}
	});
	
	return Router;
});
