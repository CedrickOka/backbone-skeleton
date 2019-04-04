/**
 * Project Bootstrap
 */
define(['require', 'router', 'controller', 'views/app'], function(require, Router, controller, App){
	'use strict';
	
	var Kernel = function(){
		var _self = this;
		var _appView = null;
		var _router = null;
		var _controllers = [];
		var _started = false;
		
		this.getRouter = function(){
			return _router;
		};

		this.addController = function(route, name, action){
			_router.route(route, name, function(){
				var response = action.apply(null, arguments);
				
				if (!response) {
					throw 'A controller must always return an answer. the "' + name + '" controller does not respect this specification';
				}
				
				_appView.$container.html(response);
			});
		};
		
		this.isStarted = function(){
			return _started;
		};
		
		this.start = function(){
			if (true === _started) {
				throw 'Could not start kernel because is already started!';
			}
			
			_router.start();
			_started = true;
		};
		
		// Constructor.
		(function(){
			_router = new Router();
			_appView = new App();
			_appView.render();
			
			// Add controller in Kernel
			for (var i in controller) {
				_self.addController(controller[i].route, controller[i].name, controller[i].action);
			}			
		})();
	};
	var _instance = null;
	
	return {	
		getInstance: function(){
			if (null === _instance) {
				_instance = new Kernel();
			}
			
			return _instance;
		}
	};
});
