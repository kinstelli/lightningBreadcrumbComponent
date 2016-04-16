<aura:application >
    <aura:handler name="pickedBreadcrumb" event="c:CRIT_BreadcrumbSelectionEvent" action="{!c.handleClickedBreadcrumb }"/>

    <c:CRIT_GenericBreadcrumbsComponent 
    		aura:id="breadcrumbNav" 
    		navSequenceTitles="[{ 'title':'Assignee' }]" 
    		currentPageClass="ridiculousClass" 
    		curCrumbTitle="first page" />

    <p>Test Update of Breadcrumb Source Sequence</p>
    <ui:button label="Click!" press="{! c.handleButtonPress }"></ui:button>

</aura:application>