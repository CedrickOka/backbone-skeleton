/**
 * Events Dispatcher
 */
define(['underscore', 'backbone'], function(_, Backbone){	
	var _dispatcher = null;
	
	return {
		getInstance: function(){
			if (null === _dispatcher) {
				_dispatcher = _.clone(Backbone.Events);
			}
			
			return _dispatcher;
		}
	};
});
