({
	handleClickedCrumb : function(component, event, helper) {
		var messageEvent = component.getEvent("pickedBreadcrumb");
        messageEvent.setParams({
            "chosenBreadcrumb": event.target.title
        });
        messageEvent.fire();
	}
})