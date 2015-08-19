import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		console.log("model hook called");
		return this.store.filter('todo', function(todo) {
			console.log(todo);
			return !todo.get('isCompleted');
		});
	},
	renderTemplate: function(controller, model) {
		this.render('todos.index', {
			model: model
		});
	}
});
