/**
 * App View
 */
define(['underscore', 'backbone', 'events', 'service/dispatcher'], function(_, Backbone, Events, Dispatcher){
	'use strict';
	
	var App = Backbone.View.extend({
		el: 'body',
		
		events: {},
		
		initialize: function(){
			this.listenTo(Backbone.history, 'route', this.onRoute);
			this.listenTo(Dispatcher.getInstance(), Events.kernel.started, this.onKernelStarted);
		},
		
		render: function(){
			this.$container = this.$('#container');
			return this;
		},
		
		onRoute: function(router, route, params){
			// TODO: Handle menu buttons here
		},
		
		onKernelStarted: function(router, route, params){
			// TODO: Do something when the kernel starts
		}
	});
	
	return App;
});
