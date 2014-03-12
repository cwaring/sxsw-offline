Template.events.helpers({
	"events": function(hash) {
		var filter = Session.get("filter")

		if (filter) {
			var options = "i"
			var selector = {
				$or:
					[
						{
							name: { $regex: filter, $options: options }
						},
						{
							title: { $regex: filter, $options: options }
						},
						{
							date: { $regex: filter, $options: options }
						}
					]
			};
			return Events.find( selector );
		}
		return Events.find({});
	}
})