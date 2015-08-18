import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	},
	actions: {
		createTodo: function(newTitle) {
			var todo = this.store.createRecord('todo', {
				title: newTitle,
				isCompleted: false
			});

			// clears 'newTitle' value in controller
			this.controllerFor('todos').set('newTitle', '');
			
			// saves newly created model todo (returned from createRecord())
			todo.save();
		}
	}
});
