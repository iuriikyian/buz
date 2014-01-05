define(['backbone', 'views/MyView'],
function(Backbone, MyView){
	return Backbone.Router.extend({
		routes : {
			'' : 'index'
		},
		index : function(){
			var view = new MyView({});
	
			$('body').append(view.render().el);
		}
	});
});
