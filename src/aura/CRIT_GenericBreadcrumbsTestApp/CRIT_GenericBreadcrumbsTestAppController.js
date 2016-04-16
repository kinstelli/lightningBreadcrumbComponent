({
	handleButtonPress : function(component, event, helper) {
		console.log("you pressed a button!");
        var bcNav = component.find('breadcrumbNav');

        bcNav.set("v.navSequenceTitles", [
        									{title:'first page', isClickable: true},
        									{title:'hi hi hi hi hi', isClickable: true},
        								  {title:'what what what', isClickable: false}]);
        
        
	}
})