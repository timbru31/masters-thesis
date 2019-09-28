/**
 * INITIALIZE THE DIGITAL DATA LAYER API
 * -- Generate the initial page digital data object
 * -- Start tracking click events
 *
 *
 * @QUESTION:/@TODO:
 * Add the browser tracking opt-out check (to respect user/browser settings)
 * Question raised on parent JIRA ticket YODA-8468. Olu to investigate with legal team
 */
(function setUpDTMAnalytics(win, isLiveURL, ddlAPI) {
	var clickableElements;

	if (ddlAPI) {
		ddlAPI.init();
		clickableElements = ddlAPI.event.click.elements.join(',');
		$('body').on('click', clickableElements, ddlAPI.event.click.eventListener);
		// ^^ DTM click events added via delegated event listener to the body of the page.
		// This approach ensures that all clickable items get the tracking event listener regardless of whether they
		// are on the page at DOM ready, or not (e.g. inline tab content panels, etc).
		// @NOTE: Previously tried to add to various page sections (#main-header nav, #page-content, #footer, etc),
		// but this skipped tracking certain things such as lightboxes (, etc) that can pop-up later
	}
})(window, PDC.isLiveURL, PDC.DigitalDataAPI);
