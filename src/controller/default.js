define(['underscore', 'text!templates/default.html'], function(_, tpl){
	return {
		route: '',
		name: 'default',
		action: function(){
			return _.template(tpl);
		}
	};
});
