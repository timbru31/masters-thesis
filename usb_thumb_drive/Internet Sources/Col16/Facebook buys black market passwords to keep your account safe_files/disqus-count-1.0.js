/* global disqus_shortname: true */
define([
    'jquery',
    'version!fly/managers/debug',
    'version!fly/components/base'
], function(
    $,
    debug
) {
    debug = debug.init('disqusCount');

    /**
     * Load Disqus comment counts onto the page.
     *
     * @class $.fly.disqusCount
     * @extends $.fly.base
     * @constructor
     */
    $.widget('fly.disqusCount', $.fly.base, {
        options: {
            disqusIdentifier: null,
            disqusUrl: null,
            shortname: null
        },

        // Script DOM ID constant for Disqus
        disqusScriptId: 'dsq-count-scr',

        /**
         * Initialize Disqus counts
         *
         * @private
         * @method _create
         */
        _create: function() {
            this._setup();
            this.updateData(this.$element, this.options.disqusIdentifier, this.options.disqusUrl);
            this.refreshCounts();
        },

        /**
         * Adds required DOM fields to element for Disqus comment counts.
         *
         * @param $element
         * @param id
         * @param url
         */
        updateData: function($element, id, url) {
            debug.log("Loading Disqus counts", id, url);
            $element.addClass('disqus-comment-count');
            $element.attr('data-disqus-identifier', id);
            $element.attr('data-disqus-url', url);
        },

        /**
         * Reset comment counts on the page.
         */
        refreshCounts: function() {
            if (window.DISQUSWIDGETS) {
                window.DISQUSWIDGETS.getCount({reset: true});
            } else {
                // Global var needed for count.js
                disqus_shortname = this.options.shortname;

                require(['//' + this.options.shortname + '.disqus.com/count.js'], function() {
                    debug.log('Loaded disqus count.js');
                });
            }
        }
    });
});