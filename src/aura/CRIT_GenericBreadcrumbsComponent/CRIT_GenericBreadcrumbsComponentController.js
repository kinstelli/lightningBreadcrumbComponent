({
	handleClickedCrumb : function(component, event, helper) {
		console.log("Look at you, clicking all the things.");
        
        console.log(event.target.title);

		var messageEvent = component.getEvent("pickedBreadcrumb");
        messageEvent.setParams({
            "chosenBreadcrumb": event.target.title
        });
        messageEvent.fire();
	}
})