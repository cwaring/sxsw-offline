// Local events collection
Events = new Meteor.Collection(null);

Meteor.startup(function(){
	$.getJSON('/data.json')
		.done(function(data) {
			data.forEach(function(event) {
				Events.insert(event);
			})
		});
});