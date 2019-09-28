    var Adobe = {};

    Adobe.I18n = (function($) {

        var dicts = {};

        var urlPrefix = "/etc/pdc/i18n/dict.";

        var currentLocale = "en";

        var self = {};

        self.setLocale = function (locale) {
		/*
        	if (typeof globalLanguage == "undefined"){
        		currentLocale = locale;
        		return;
            } 
        	currentLocale = globalLanguage;
		*/
		    currentLocale = locale;
        };

        self.getLocale = function () {
            return currentLocale;
        };

        self.setUrlPrefix = function (prefix) {
            urlPrefix = prefix;
        };
		
        self.getDictionary = function (locale) {
            locale = locale || self.getLocale();
            if (!dicts[locale]) {
			
                var url = urlPrefix + locale + ".json";
                try {
                    var response = $.ajax(url, {
                        async: false,
                        dataType: "json"
                    });
                    dicts[locale] = $.parseJSON(response.responseText);
                } catch (e) {}
                if (!dicts[locale]) {
                    dicts[locale] = {};
                }
            }
            return dicts[locale];
        };

        self.get = function (text) {
            var dict = self.getDictionary();

            var newText = null;            
			
            if (dict) {
                newText = dict[text];
            }
            if (!newText) {
                newText = text;
            }
            
            return newText;
        };

        self.getVar = function (text) {
            if (!text) {
                return null;
            }
            return self.get(text);
        };

        return self;

    }(jQuery));

    if (typeof globalLocale != "undefined"){
	   Adobe.I18n.setLocale(globalLocale);
	}
