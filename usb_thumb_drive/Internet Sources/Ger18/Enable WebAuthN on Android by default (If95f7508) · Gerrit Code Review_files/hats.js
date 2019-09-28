(function(window) {
  'use strict';

  if (window.Gerrit) {
    Gerrit.install(self => {
      Gerrit.get('/accounts/self/hats~surveys', result => {
        if (!result.enabled) {
          return;
        }

        let siteId;
        if (window.Polymer) {
          siteId = result.polygerrit_site_id;
        } else {
          siteId = result.gwt_site_id;
        }
        if (!siteId) {
          return;
        }

        if (result.site_context) {
          window._402 = window._402 || {};
          window._402.sc = result.site_context;
        }

        const el = document.createElement('script');
        el.defer = true;
        el.src =
            '//www.google.com/insights/consumersurveys/async_survey?site=' +
            siteId;
        el.onerror = e => {
          console.log('async_survey error:', e);
        };
        document.body.appendChild(el);
      });
    });
  }
})(window);
