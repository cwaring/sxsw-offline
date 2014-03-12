Template.filter.events({
	"keyup input": function(e, t) {
		t.lastNode.value !== "" ?
			Session.set("filter", t.lastNode.value) : Session.set("filter", null);
	}
})