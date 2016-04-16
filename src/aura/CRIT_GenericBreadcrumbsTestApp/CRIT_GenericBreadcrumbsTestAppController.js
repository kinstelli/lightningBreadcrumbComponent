({
	handleButtonPress : function(component, event, helper) {
		console.log("you pressed a button!");
        var bcNav = component.find('breadcrumbNav');

        bcNav.set("v.navSequenceTitles", [
				{title:'first page' },
				{title:'second page', prohibitCrumbClick: false},
				{title:'hi hi hi hi hi', prohibitCrumbClick: false},
			  {title:'what what what', prohibitCrumbClick: true}]);   
	},
	handleClickedBreadcrumb : function(component, event, helper) {
		
		var newChosenCrumb = event.getParam("chosenBreadcrumb");
		console.log("you clicked a breadcrumb: ");
		console.log( newChosenCrumb );
	
		//update the component UI
		var bcNav = component.find('breadcrumbNav');
        bcNav.set("v.curCrumbTitle", newChosenCrumb );
	}
})