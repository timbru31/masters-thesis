/* DTM dynamic report suites code. */
/* eslint-disable camelcase */

PDC.DTM = PDC.DTM || {};

PDC.DTM.rs_json = JSON.parse('[ {"reportsuite": "snepdcar", "locale" : "es-ar", "country" : "Argentina"},{"reportsuite": "snepdccl", "locale" : "es-cl", "country" : "Chile"},{"reportsuite": "snepdcco", "locale" : "es-co", "country" : "Columbia"},{"reportsuite": "snepdccr", "locale" : "es-cr", "country" : "Costa Rica"},{"reportsuite": "snepdcec", "locale" : "es-ec", "country" : "Ecuador"},{"reportsuite": "snepdcsv", "locale" : "es-sv", "country" : "El Savador"},{"reportsuite": "snepdcgt", "locale" : "es-gt", "country" : "Guatemala"},{"reportsuite": "snepdchn", "locale" : "es-hn", "country" : "Honduras"},{"reportsuite": "snepdcmx", "locale" : "es-mx", "country" : "Mexico"},{"reportsuite": "snepdcni", "locale" : "es-ni", "country" : "Nicaragua"},{"reportsuite": "snepdcpa", "locale" : "es-pa", "country" : "Panama"},{"reportsuite": "snepdcpe", "locale" : "es-pe", "country" : "Peru"},{"reportsuite": "snepdcve", "locale" : "es-ve", "country" : "Venezuela"},{"reportsuite": "snepdcbr", "locale" : "pt-br", "country" : "Brazil"},{"reportsuite": "snepdcus", "locale" : "es-us", "country" : "US"},{"reportsuite": "snepdcca", "locale" : "en-ca", "country" : "Canada"},{"reportsuite": "snepdcca", "locale" : "fr-ca", "country" : "Canada"},{"reportsuite": "snepdcbo", "locale" : "es-bo", "country" : "Bolivia"},{"reportsuite": "snepdcpy", "locale" : "es-py", "country" : "Paraguay"},{"reportsuite": "snepdcuy", "locale" : "es-uy", "country" : "Uruguay"},{"reportsuite": "snepdclatam", "locale" : "latam", "country" : "All latam Countries"},{"reportsuite": "snepdcscea", "locale" : "scea", "country" : "US"},{"reportsuite": "snepdcus", "locale" : "en-us", "country" : "USA"}]');

PDC.DTM.getLocaleReportSuite = function() {
	var reportSuite = undefined;
	var pathsArray = document.location.pathname.split("/");
	if(pathsArray.length > 2) {
		for(var key in PDC.DTM.rs_json) {
			if(PDC.DTM.rs_json.hasOwnProperty(key)) {
				if(PDC.DTM.rs_json[key].locale == pathsArray[1]) {
					
					if(PDC.isLiveURL(document.location.host)) {
						
						reportSuite = PDC.DTM.rs_json[key].reportsuite;
					}else {
						
						reportSuite = PDC.DTM.rs_json[key].reportsuite +"-dev";
					}
				}
			}
		}
		if(reportSuite == undefined) {
			window.console.warn('Unexpected locale, so fallback to default report suite for locale ' + pathsArray[1]);
			reportSuite = 'snepdc5gb-dev';
		}
	} else {
		window.console.warn('Unexpected, so fallback to default report suite for locale ' + pathsArray[1]);
		reportSuite = 'snepdc5gb-dev';
	}
	return reportSuite;
};


/**
 * gets browser name from useragent
 */
PDC.DTM.getBrowserName = function () {
	var browser = navigator.userAgent;
	if (browser.indexOf('ps3') > -1) {
		browser = "ps3-browser";
	} else if (browser.indexOf('psvita') > -1) {
		browser = "psvita-browser";
	} else if (browser.indexOf('Chrome') > -1) {
		browser = "chrome-browser";
	} else if (browser.indexOf('Firefox') > -1) {
		browser = "firefox-browser";
	}
	return browser;
};