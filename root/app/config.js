require.config({
	baseUrl : 'app',
    paths : {
		underscore : '../lib/underscore/underscore',
		zepto : '../lib/zepto/zepto',
		backbone : '../lib/backbone/backbone'
	},
	shim : {
		underscore : {
			exports : '_',
		},
		zepto : {
			exports : 'Zepto',
		},
		backbone : {
			deps: ['underscore', 'zepto'],
			exports: 'Backbone'
		},
	},
	map : {
		'*' : {
			$ : 'Zepto'
		}
	}
});

require([ 'backbone', 'router'], 
function(Backbone, Router){

	var router = new Router({});
	Backbone.history.start();
	
	console.log('app loaded');
});
