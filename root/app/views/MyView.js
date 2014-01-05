define(['underscore', 'zepto', 'backbone'], 
function(_, $, Backbone){
	return Backbone.View.extend({
		template : _.template($('#tMyView').html()),
		render : function(){
			this.$el.html(this.template({}));
			return this;
		}
	});
});
