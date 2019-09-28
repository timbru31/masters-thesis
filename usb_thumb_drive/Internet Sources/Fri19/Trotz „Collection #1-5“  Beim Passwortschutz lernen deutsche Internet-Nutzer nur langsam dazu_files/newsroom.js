(function(meta) {
    "use strict";
    if (/android 5\.0\.2|iphone;|ipod;/i.test(navigator.userAgent)) {
        var resizeHandler = function() {
            window.setTimeout(function() {
                document.body.style.display = 'none';
                document.body.offsetWidth;
                document.body.style.display = '';
            }, 350);
        };
        window.addEventListener('orientationchange', resizeHandler);
    }
    // test requirement and neccessary prerequisite
    if (!/\bno-flex\b/.test(document.body.className) || !('matchMedia' in window)) { return; }
    var regex = /width=[^,]+(,?\s*)/,
        breakpoints = "980, 660, 340".split(', '),
    setViewport = function(width, bodyWidth) {
        width || (width = 'device-width');
        var content = meta.getAttribute('content');
        if (!regex.test(content)) {
            content = 'width=' + width + ', ' + content;
        } else {
            regex.lastIndex = 0;
            content = content.replace(regex, 'width=' + width + RegExp.$1);
        }
        if (bodyWidth) {
            content = content.replace(/initial-scale=[\d\.]+/, 'initial-scale=' + (bodyWidth / width).toFixed(2));
        }
        meta.setAttribute('content', content);
    },
    // true = device-width is set, false/undefined = other width, 1 = other width, don't resize!
    viewportDefault = /width=device-width/.test(meta.getAttribute('content')),
    viewportTimeout,
    viewportHandler = function() {
        if (viewportDefault === 1) { return; }
        if (!viewportDefault) {
            setViewport();
            viewportDefault = true;
            window.clearTimeout(viewportTimeout);
            viewportTimeout = window.setTimeout(viewportHandler, 150);
            return;
        }
        for (var width = document.body.offsetWidth, b = 0, l = breakpoints.length; b < l; b++) {
            // Fix for Samsung Galaxy Tab 3 with Android 4.4.2  - (/4\.4\.2.*?SM-T310\D/.test(navigator.userAgent) ? 60 : 0) - leads to zoomed effect
            if (width >= breakpoints[b] || b === breakpoints.length - 1) {
                setViewport(breakpoints[b], document.body.offsetWidth);
                // block resize for 150ms
                viewportDefault = 1;
                window.clearTimeout(viewportTimeout);
                window.setTimeout(function() { viewportDefault = false; }, 150);
                break;
            }
        }
    },
    resizeTimeout,
    abordResize = false,
    resizeHandler = function() {
        if (viewportDefault || abordResize) { return; }
        window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(viewportHandler, 150);
    },
    lastFocus = document,
    touchHandler = function(ev) {
        if (/input|textarea|select|label/i.test(ev.target.nodeName) || /input|textarea|select|label/i.test(lastFocus.nodeName)) {
            abordResize = true;
            lastFocus = ev.target;
        }
    };
    viewportHandler();
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', function() { abordResize = false; resizeHandler(); });
    document.addEventListener('touchstart', touchHandler);
})(document.getElementsByName('viewport')[0]);
/**
 * Polyfill
 */
// Element.matches
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}

// Nodelist.forEach
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// Node.scrollIntoView()
if (!Element.prototype.scrollIntoView) {
    var getOffset = function (element) {
        element = element.getBoundingClientRect();
        return {
            left: element.left + window.pageXOffset,
            top: element.top + window.pageYOffset
        }
    },
    pollyfillScroll = function (startEl, endEl, position) {
        var startPos = getOffset(startEl).top - startEl.getBoundingClientRect().top,
            endPos = getOffset(endEl).top,
            step = startPos > endPos ? -30 : 30,
            intervalPos = 0,
            space = window.innerHeight/2,
            int = setInterval(function () {
                window.scrollTo(0, startPos);
                startPos += step;
                intervalPos = endEl.getBoundingClientRect().top;
                if ((step > 0 && intervalPos < step) || (step < 0 && intervalPos > -step)) { clearInterval(int); }
            }, 10);
    }
}

/**
 * Smooth scroll: scroll to inner anchor smoothly
 *
 * Specialized:
 * - #SELF: if the URL is exactly '#SELF', page will be scrolled on top of itself
 * - data-prevent-scroll="true": if link element has this attribute, scroll will be stopped
 */
(function () {
    var smoothScrollHandler = function (ev) {
            if (!ev || !ev.target || ev.target.hasAttribute('data-show-window') || !(/^a$/i.test(ev.target.nodeName) && ev.target.hash && /^#/.test(ev.target.hash))) { return; }
            var target = ev.target,
            anchor = /^#SELF$/.test(ev.target.hash) ? target : document.getElementById(target.hash.substr(1));
            if (!anchor || target.getAttribute('data-prevent-scroll') == 'true') { return; }
            ev.preventDefault();
            if (/(\.net|edge)/i.test(navigator.userAgent)) {
                pollyfillScroll(target, anchor);
            } else {
                anchor.scrollIntoView({behavior: "smooth", block: "start"});
            }
        };
    document.addEventListener('click', smoothScrollHandler);
})();/* Default-Funktion von aria-disabled-Buttons verhindern (Fehler in Android) */
(function(){
    // TODO: check if this is still relevant or is it fixed in current Android versions (very old code here)
	var buttonHandler = function(ev) {
		ev = ev || window.event;
		var button = ev.target || ev.srcElement;
		if (!button) { return; }
		if (ev.type === 'keyup' && ev.keyCode !== 13) { return; }
		if (button.getAttribute && button.getAttribute('aria-disabled')) {
			if (typeof ev.preventDefault === 'function') {
				ev.preventDefault();
			} else {
				return false;
			}
		}
	}
    if (!document.addEventListener) {
        document.attachEvent('onclick', buttonHandler);
        document.attachEvent('onkeyup', buttonHandler);
    } else {
        document.addEventListener('click', buttonHandler);
        document.addEventListener('keyup', buttonHandler);
    }
})();
/* Text for the app buttons is fix, same for all pages, that is why we extracted it in the following function, here in the button module. */
/* Primary motivation for this is integration of cat components in CMS (Hippo). This way it is possible to have a single configurable element for all buttons. */
/* See https://mam-confluence.1and1.com/x/7_HjB for further details. */
(function () {
    var addTextToAppStoreButtons = function() {
        var BUTTON_TEXT = {
                "apple": "Erhältlich im App Store",
                "google": "Jetzt bei Google Play" ,
                "windows": "Herunterladen von Microsoft"
            },
            appButtons = document.getElementsByClassName('button app store') || [];

            if ( appButtons.length < 1 ) { return; }

            for ( var i = 0; i < appButtons.length; i++ ) {
                if ( appButtons[i].className.indexOf('apple') > -1 ) {
                    appButtons[i].innerHTML =  BUTTON_TEXT['apple'];
                }
                if ( appButtons[i].className.indexOf('google') > -1 ) {
                    appButtons[i].innerHTML =  BUTTON_TEXT['google'];
                }
                if ( appButtons[i].className.indexOf('windows') > -1 ) {
                    appButtons[i].innerHTML =  BUTTON_TEXT['windows'];
                }
            }
        }

        document.addEventListener('DOMContentLoaded', addTextToAppStoreButtons);
})();
if (/no-svg/.test(document.querySelector('body').className)) {
    var imgs = document.querySelectorAll('img[src$=".svg"]');
    for (var i = 0, len = imgs.length; i < len; i++) {
        imgs[i].src = imgs[i].src.replace(/\.svg$/, '.png');
    }
}
(function(){
    var popupOptions = 'left top height width menubar toolbar location status dependent dialog minimizable resizable scrollbars',
    linkHandler = function(ev) {
        ev = ev || window.event;
        if (ev.type == 'keypress' && ev.keyCode !== 13) { return; }     
        var node = ev.target || ev.srcElement,
            data, opts = {};        
        if (!node) { return; }
        while (node && (!node.getAttribute || !(data = node.getAttribute('data-popup')))) {
            node = node.parentNode;
        }
        if (!data) { return; }
        data.replace(/([^=,]+)=?([^,]*),\s*/g, function(_, key, value) { 
            opts[key] = /^\d+$/.test(value) ? +value : value || true;
        });
        if (opts.center) {
            opts.top = (((window.innerHeight || document.documentElement.clientHeight || screen.height) - opts.height) >> 1) + (window.screenTop || screen.top);
            opts.left = (((window.innerWidth || document.documentElement.clientWidth || screen.width) - opts.width) >> 1) + (window.screenLeft || screen.left);
        }
        if (!window.open(opts.href || node.href, opts.target || 'popup'+0|Math.random()*1E6, popupOptions.replace(/(\w+) ?/g, function(_, key) {
            if (opts[key]) { return key + '=' + opts[key] + ','; }
            return '';
        }).replace(/,$/, ''))) { return; }
        typeof ev.preventDefault === 'function' && ev.preventDefault();
        return false;
    };
    if (!document.addEventListener) {
        document.attachEvent('onclick', linkHandler);
        window.attachEvent('onkeypress', linkHandler);
    } else {
        document.addEventListener('click', linkHandler);
        window.addEventListener('keypress', linkHandler);
    }
})();(function() {
    var touch = false,
    clickHandler = function(ev) {
        ev = ev || window.event;
        ev.target || (ev.target = ev.srcElement);
        if (!ev || !ev.target || !ev.target.getAttribute) { return; }

        if (ev.type === 'keypress' && (ev.which || ev.keyCode) != 13) { return; }
        if (ev.type === 'click' && (ev.which || ev.keyCode) > 1) { return; }
        if (ev.type === 'touchstart') {
            touch = true;
            return;
        }
        if (ev.type === 'touchmove') {
            touch = false;
            return;
        }
        if (ev.type === 'touchend') {
            if (!touch) { return; }
            touch = false;
        }

        var items = ['hide', 'toggle', 'show', 'set', 'unset'],
            node,
            selector,
            any;

        for (var i = 0, item; item = items[i]; i++) {
            selector = false;
            node = ev.target;

            while (node && node.getAttribute && !selector) {
                (selector = node.getAttribute('data-' + item + '-nodes')) || (node = node.parentNode);
            }
            /* alternative attribute value with same behavior but with cursor pointer: #empty-withpointer */
            if (!selector || selector === '#empty') { continue; }

            var parquery = node.getAttribute('data-' + item + '-parent') || node.getAttribute('data-nodes-parent'),
                parent = document;
            if (parquery) {
                var parents = document.querySelectorAll(parquery),
                    parent = node;
                findparent: while (parent) {
                    for (var p = parents.length; p >= 0; p--) {
                        if (parents[p] === parent) { break findparent; }
                    }
                    parent = parent.parentNode;
                }
            }

            selector.replace(/([^,\{]+)(?:\{(.*?)\}|)/g, function(full, query, name) {
                query = parent.querySelectorAll(query);
                name = name || 'hidden';
                any = any || 'href' in node;
                var re = new RegExp('(^|\\s)' + name + '(\\s|$)', 'g');

                for (var q = 0, l = query.length; q < l; q++) {
                    var cls = query[q].className.replace(re, '$2');
                    query[q].className = cls + ((item === 'hide' || item === 'set' || (item === 'toggle' && query[q].className === cls)) ? ' ' + name : '');
                    if ((query[q].hasAttribute('data-load-always') || query[q].offsetHeight) && query[q].getAttribute('data-load-url')) {
                        if (typeof document.createEvent === 'function') {
                            var load = document.createEvent('CustomEvent');
                            load.initCustomEvent('lazyload', true, true, null);
                            query[q].dispatchEvent(load);
                        } else {
                            typeof document.onlazyload === 'function' && document.onlazyload({ target: query[q] });
                        }
                    }
                    // fix reflow/redraw problem in "noflex" clients by applied DOM force
                    if (/(^|\s)no-flex\b/.test(document.body.className) && !/input|select|textarea/i.test(ev.target)) {
                        var text = document.createTextNode('');
                        if (!/input|select|textarea/i.test(node)) {
                            node.parentNode.replaceChild(text, node);
                            text.parentNode.replaceChild(node, text);
                        }
                        if (!/input|select|textarea/i.test(query[q])) {
                            query[q].parentNode.replaceChild(text, query[q]);
                            text.parentNode.replaceChild(query[q], text);
                        }
                    }
                }
            });
        }

        if (any && (ev.type === 'touchend' || ev.type === 'click')) {
            ev.preventDefault && ev.preventDefault();
        }
    }
    if (!document.addEventListener) {
        document.attachEvent('onclick', clickHandler);
        document.attachEvent('onkeypress', clickHandler);
    } else {
        document.addEventListener('keypress', clickHandler);
        if (/ip[ao]d|iphone/i.test(navigator.userAgent)) {
            document.addEventListener('touchstart', clickHandler);
            document.addEventListener('touchmove', clickHandler);
            document.addEventListener('touchend', clickHandler);
        } else {
            document.addEventListener('click', clickHandler);
        }
    }
})();
(function() {
    var click = false,
    seoLinkHandler = function(ev) {
        if (ev.type === 'touchstart' || ev.type === 'mousedown') {
            click = true;
            return;
        }
        if (ev.type === 'touchmove' || ev.type === 'mousemove') {
            click = false;
            return;
        }
        if (ev.type === 'touchend' || ev.type === 'mouseup') {
            if (!click) { return; }
            click = false;
        }

        var key = ev.which || ev.key || 0,
            node = ev.target,
            teaser = node,
            url;
        // we need to check if a href attribute is present, because IE aliases img.src to href
        if (!node || (node.hasAttribute && node.hasAttribute('href')) || node.form || key > 2) { return; }
        while (teaser && !/\b(?=.*linked)\b(?=.*teaser)\b/.test(teaser.className || '')) {
            !url && (url = url || (teaser.hasAttribute && teaser.hasAttribute('href') && teaser.getAttribute('href'))
                || teaser.getAttribute && teaser.getAttribute('data-link-url')) && (node = teaser);
            teaser = teaser.parentNode;
        }
        if (!teaser) { return; }
        if (!url) {
            node = teaser.getAttribute && teaser.getAttribute('data-link-url') ? teaser
                : teaser.querySelector('[data-link-url], a'); //Reihenfolge der Linkpriorität kann noch angepasst werden
            url = node && (node.getAttribute && node.getAttribute('data-link-url') || node.href);
        }
        if (!url) { return; }
        if ('dispatchEvent' in node) {
            var clickEvent = document.createEvent('MouseEvent');
            clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, node);
            if (!node.dispatchEvent(clickEvent)) { return; }
        } else {
            node.click();
        }
        if ('href' in node) { return; }
        // if data-link-url is an attribute of the linked hero-teaser, simulate the click action
        window.open(url, ev.ctrlKey || key == 2 ? '_blank' : '_self');
    };
    document.addEventListener('mousedown', seoLinkHandler);
    document.addEventListener('mousemove', seoLinkHandler);
    document.addEventListener('mouseup', seoLinkHandler);
    document.addEventListener('touchstart', seoLinkHandler);
    document.addEventListener('touchmove', seoLinkHandler);
    document.addEventListener('touchend', seoLinkHandler);
})();
(function(undef){
    var nativeSupport = 'open' in document.createElement('details'),
    akkordeonToggle = function(akkordeon, status) {
        var autoToggle = (status === undef),
            initialStatus = !!(akkordeon.getAttribute('open') || /(^|\s)open\b/.test(akkordeon.className));

        if (autoToggle) {
            status = !initialStatus;
        }

        // android 4.1-3 touts native support that doesn't work correctly
        if (!/details/i.test(akkordeon.nodeName) || !nativeSupport || /android 4\.[1-3]/i.test(navigator.userAgent)) {
            akkordeon[status ? 'setAttribute' : 'removeAttribute']('open', true);
            akkordeon.className = akkordeon.className.replace(/(^|\s)open(\s|$)/g, '') + (status ? ' open' : '');
        } else {
            akkordeon.className = akkordeon.className.replace(/(^|\s)open(\s|$)/g, '');
        }

        if (status) {
            if (akkordeon.hasAttribute('data-load-url')) {
                var ev = document.createEvent('CustomEvent');
                ev.initCustomEvent('lazyload', true, true, null);
                akkordeon.dispatch(ev);
            }
        }

        if (!nativeSupport && status != initialStatus) {
            var ev = document.createEvent('CustomEvent');
            ev.initCustomEvent('toggle', true, true, {});
            akkordeon.dispatchEvent(ev);
        }

        var ev = document.createEvent('CustomEvent');
        ev.initCustomEvent('accordion.toggle', true, true, {});
        akkordeon.dispatchEvent(ev);
    },
    akkordeonHandler = function(evt) {
        evt = evt || window.evt;
        var akkordeon = evt.target || evt.srcElement,
            locked = false,
            summary;
        if (!akkordeon) { return; }

        while (akkordeon && (!akkordeon.className || !/(^|\s)akkordeon(\s|$)/.test(akkordeon.className))) {
            summary = akkordeon.querySelector('.field.checkbox');
            if (summary && /(^|\s)(checkbox|error)(\b|$)/.test(summary.className) && !summary.getElementsByTagName('input')[0].checked) {
                locked = true;
            }
            summary = akkordeon;
            akkordeon = akkordeon.parentNode;
        }
        if (!akkordeon || akkordeon.classList.contains('disabled')) { return; }
        if (locked) {
            akkordeon.setAttribute('open', true);
            akkordeon.className = akkordeon.className.replace(/(^|\s)open(\s|$)/g, '') + (' open');
            return;
        }
        if (summary !== akkordeon.querySelector('*:first-child')) { return; }

        if (evt.type === 'keyup') {
            if (evt.keyCode === 13 || evt.keyCode === 32) { akkordeonToggle(akkordeon); }
            else if (evt.keyCode === 38) { akkordeonToggle(akkordeon, false); }
            else if (evt.keyCode === 40) { akkordeonToggle(akkordeon, true); }
        } else if ((evt.which || evt.keycode) <= 1) {
            akkordeonToggle(akkordeon);
        }
        return false;
    };

    if (!document.addEventListener) {
        document.attachEvent('onclick', akkordeonHandler, false);
        document.attachEvent('onkeyup', akkordeonHandler, false);
    } else {
        document.addEventListener('click', akkordeonHandler);
        document.addEventListener('keyup', akkordeonHandler);
    }
})();
(function() {
    // returns carousel node or undefined
    var getCarousel = function(node) {
        var found = node;
        while (found && !/\bcarousel\b/.test(found.className || "")) {
            found = found.parentNode;
        }
        return found;
    },
    getPosAttribute = function(node) {
        var parent = node,
            pos;
        while (parent && (!parent.getAttribute || !(pos = parent.getAttribute('data-carousel-pos')))) {
            parent = parent.parentNode;
        }
        return pos;
    },
    // find out which variant of the transform attribute can be used
    transformAttr = 'transform oTransform msTransform webkitTransform'.replace(/(\w+)\s?/g, function(full, attr) {
        return attr in document.body.style ? full : '';
    }).split(' ')[0],
    // and transition (to trigger simulated transition for IE9)
    transitionAttr = 'transition oTransition msTransition webkitTransition'.replace(/(\w+)\s?/g, function(full, attr) {
        return attr in document.body.style ? full : '';
    }).split(' ')[0],
    setTranslateX = !transitionAttr ? transformAttr ? function(node, pos, unanimated) {
        if (unanimated) {
            node.style[transformAttr] = 'translateX(' + pos + 'px)';
            return;
        }
        var step = ((/(\-?\d+)/.test(node.style[transformAttr]) ? +RegExp.$1 : 0) - pos) / 10,
            i = 0;
        (function go() {
            if (++i < 10) { window.setTimeout(go, 17); }
            node.style[transformAttr]  = 'translateX(' + (pos + (10 - i) * step | 0) + 'px)';
        })();
    } : function(node, pos, unanimated) {
        if (unanimated) {
            node.style.left = pos + 'px';
            return;
        }
        var step = ((/(\-?\d+)/.test(node.style.left) ? +RegExp.$1 : 0) - pos) / 10,
            i = 0;
        (function go() {
            if (++i < 10) { window.setTimeout(go, 17); }
            node.style.left = (pos + (10 - i) * step | 0) + 'px';
        })();
    } : transformAttr ? function(node, pos) {
        node.style[transformAttr] = 'translateX(' + pos + 'px)';
    } : function(node, pos) {
        node.style.left = pos + 'px';
    },
    // move our carousel to a certain position
    moveToPos = function(node, pos, ev) {
        var rail = node.querySelector('ol[role="row"]'),
            nav = node.querySelector('ol[role="navigation"]'),
            items = node.querySelectorAll('ol[role="row"] > li'),
            maxWidth = node.offsetWidth,
            item = node.querySelector('ol[role="row"] > li.hidden + li:not(.hidden)');
        // prepare previous containers
        if (item) {
            var hidden = node.querySelectorAll('ol[role="row"] > li.hidden');
            for (var h = 0, t = hidden.length; h < t; h++) {
                hidden[h].className = hidden[h].className.replace(/(^|\s)hidden\b/g, '');
            }
            setTranslateX(rail, -item.offsetLeft, true);
        }
        // switch items one by one
        if (/^[+-]/.test(pos)) {
            if (pos === '+i') {
                node.pos++;
            } else if (pos === '-i') {
                node.pos--;
            } else if (pos === '+1') {
                // find next item that is not 100% in viewport
                for (var width = 0, i = node.pos - 1, l = items.length; i < l; i++) {
                    if (items[i].offsetWidth > maxWidth) {
                        width += maxWidth;
                    } else {
                        width += items[i].offsetWidth;
                    }
                    node.pos = i + 1;
                    if (width > maxWidth) {
                        break;
                    }
                }
            } else if (pos === "-1") {
                // find previous item that will fit 100% in viewport
                var width = 0;
                do {
                    width += items[--node.pos] && items[node.pos].offsetWidth;
                } while (node.pos > 0 && width < maxWidth);
                if (node.pos < 1) { node.pos = 1; }
            }
        } else {
            node.pos = +pos;
        }
        item = items[node.pos - 1];
        pos = item.offsetLeft;
        // use modern CSS transorms if at all possible, otherwise use left
        rail.className = rail.className.replace(/(^|\s)animate\b/g, '') + (ev.type !== 'resize' ? ' animate' : '');
        setTranslateX(rail, -pos, ev.type === 'resize');
        rail.pos = pos;
        // enable/disable prev/next buttons, change active
        nav.querySelector('[rel="prev"]')[node.pos === 1 ? 'setAttribute' : 'removeAttribute']('aria-disabled', true);
        var preview = node.pos > 1 && items[node.pos - 2].getAttribute('data-preview');
        nav.querySelector('[rel="prev"]').innerHTML = preview ? '<img src="' + preview.replace(/\"/g, '&quot;') + '" width="72" height="72" alt=""/>' : '';
        var active = nav.querySelector('.active'),
            icon = active.querySelector('.icon'),
            number = active.querySelector('.number');
        active.className = active.className.replace('active ', '');
        icon && (icon.className = icon.className.replace(/(^|\s)white/, '$1inactive service-hover'));
        number && (number.className = number.className.replace(/(^|\s)white/, '$1inactive service-hover'));
        active = nav.querySelectorAll('li')[node.pos];
        var activeOtherClasses = active.className;
        active.className =  'active ' + activeOtherClasses;
        icon = active.querySelector('.icon');
        number = active.querySelector('.number');
        icon && (icon.className = icon.className.replace(/(^|\s)inactive service-hover/, '$1white'));
        number && (number.className = number.className.replace(/(^|\s)inactive service-hover/, '$1white'));
        var bm = document.createEvent('CustomEvent');
        bm.initCustomEvent('carousel.beforemove', true, true, { originalEvent: ev });
        active.dispatchEvent(bm);
        // clean up afterwards
        window.setTimeout(function() {
            rail.className = rail.className.replace(/(^|\s)animate\b/g, '');
            for (var a = 0, x = items.length; a < x; a++) {
                items[a].className = items[a].className.replace(/(^|\s)hidden\b/g, '')
                    + ((a <= node.pos - 2) ? ' hidden': '');
            }
            rail.style[transformAttr || 'left'] = '';
            var mv = document.createEvent('CustomEvent');
            mv.initCustomEvent('carousel.move', true, true, {});
            active.dispatchEvent(mv);
            // we need to wait for clean up to detect the next preview
            if (node.pos < items.length) {
                var nextInvisible = node.pos;
                while (items[nextInvisible] && items[nextInvisible].getBoundingClientRect().left <= node.offsetWidth) {
                    nextInvisible++;
                }
                if (items[nextInvisible]) {
                    preview = items[nextInvisible].getAttribute('data-preview');
                    nav.querySelector('[rel="next"]').innerHTML = preview ? '<img src="' + preview.replace(/\"/g, '&quot;') + '" width="72" height="72" alt=""/>' : '';
                }
            }
            // find out if we're already on the last page, i.e. that all modules after our current are already visible
            nav.querySelector('[rel="next"]')[items[items.length - 1].offsetLeft < maxWidth ? 'setAttribute' : 'removeAttribute']('aria-disabled', true);
        }, 260);
    },
    autoswitchHandler = function(carousel) {
        if (!carousel) {
            for (var carousels = document.querySelectorAll('.carousel[data-autoswitch]'), c = 0, l = carousels.length; c < l; c++) {
                var opts = carousels[c].getAttribute('data-autoswitch');
                if (!opts) { continue; }
                carousels[c].autoswitchTimeout = window.setTimeout(function(node) { return function() {
                    autoswitchHandler(node);
                }}(carousels[c]), /^(\d+)/.test(opts) && +RegExp.$1 || 10000);
            }
            return;
        }
        var opts = carousel.getAttribute && carousel.getAttribute('data-autoswitch');
        if (!opts || /\btouch\b/.test(document.body.className) && (/mobile=off/.test(opts)
            || (/mobile=touchoff/.test(opts) && carousel.touched))) {
            var wait = /mobile=touchoff,(\d+)/.test(opts) && +RegExp.$1;
            if (wait) {
                carousel.autoswitchTimeout = window.setTimeout(function(node) { return function() {
                    node.touched = false;
                    autoswitchHandler(node);
                }}(carousel), wait);
            }
            return;
        } else if (/desktop=clickoff/.test(opts) && carousel.clicked) {
            var wait = /desktop=clickoff,(\d+)/.test(opts) && +RegExp.$1;
            if (wait) {
                carousel.autoswitchTimeout = window.setTimeout(function(node) { return function() {
                    node.clicked = false;
                    autoswitchHandler(node);
                }}(carousel), wait);
            }
            return;
        }
        window.clearTimeout(carousel.autoswitchTimeout);
        carousel.autoswitchTimeout = window.setTimeout(function(node) { return function() {
            autoswitchHandler(node);
        }}(carousel), /^(\d+)/.test(opts) && +RegExp.$1 || 10000);
        if ((carousel.currentStyle || window.getComputedStyle(carousel)).maxHeight === '10000px') { return; }
        var next = carousel.querySelector('[rel="next"]');
        if (next.hasAttribute('aria-disabled')) {
            moveToPos(carousel, 1, { type: 'autoswitch' });
        } else {
            clickHandler({ type: 'autoswitch', target: next });
        }
    },
    clickHandler = function(ev) {
        if (!ev || !ev.target) { return; }
        // is there a carousel button clicked
        var changepos = getPosAttribute(ev.target);
        if (!changepos) { return; }
        var carousel = getCarousel(ev.target);
        if (!carousel) { return; }
        if (!carousel.pos) { carousel.pos = 1; }
        if (ev.type === 'click') { carousel.clicked = true; }
        var effect = document.createEvent('CustomEvent');
        effect.initCustomEvent('carousel.effect', true, true, { change: changepos, carousel: carousel });
        if (carousel.dispatchEvent(effect)) {
            moveToPos(carousel, changepos, ev);
            ev.target.blur && ev.target.blur();
        }
    },
    tposx,
    tposy,
    tmoved,
    tnode,
    touchHandler = function(ev) {
        if (!ev) { return; }
        if (/start|down$/i.test(ev.type)) {
            tnode = getCarousel(ev.target);
            if (!tnode) { return; }
            // do not use touch events on disabled carousels
            var nav = tnode.querySelector('ol[role="navigation"]');
            if (nav && (window.getComputedStyle(nav) || nav.currentStyle).display === 'none') {
                tnode = false;
                return;
            }
            tposx = (ev.touches ? ev.touches[0] || ev.touches : ev).clientX;
            tposy = (ev.touches ? ev.touches[0] || ev.touches : ev).clientY;
            tmoved = false;
        } else {
            if (!tnode) { return; }
            var rail = tnode.querySelector('ol[role="row"]');
            if (/move$/i.test(ev.type)) {
                var dx = (ev.touches ? ev.touches[0] || ev.touches : ev).clientX - tposx,
                    dy = (ev.touches ? ev.touches[0] || ev.touches : ev).clientY - tposy;
                if (dx * dx <= 4 || dy * dy > dx * dx) { return; }
                tmoved = dx;
                if ((tmoved < 0 && tnode.querySelector('ol[role="navigation"] [rel="next"][aria-disabled]'))
                    || (tmoved > 0 && tnode.querySelector('ol[role="navigation"] [rel="prev"][aria-disabled]'))) {
                    tmoved = false;
                    tnode = false;
                    return;
                }
                setTranslateX(rail, dx);
                ev.preventDefault();
            } else {
                if (tmoved === false) {
                    tnode = false;
                    return;
                }
                var button = tmoved < 0
                    ? tnode.querySelector('ol[role="navigation"] [rel="next"]')
                    : tnode.querySelector('ol[role="navigation"] [rel="prev"]');
                if (button.hasAttribute('aria-disabled')) {
                    setTranslateX(rail, -rail.pos || 0);
                } else {
                    clickHandler({ type: 'touch', target: button });
                }
                tnode.touched = true;
                tnode = false;
                return false;
            }
        }
    },
    resizeTimeout = false,
    resizeFunction = function() {
        for (var carousels = document.querySelectorAll('.carousel'), c = 0, l = carousels.length; c < l; c++) {
            if ('pos' in carousels[c]) {
                // disabled in breakpoint
                var nav = carousels[c].querySelector('ol[role="navigation"]');
                if (!nav.offsetWidth) {
                    moveToPos(carousels[c], 1, { target: carousels[c], type: 'resize' });
                    carousels[c].setAttribute('previous-position', carousels[c].pos);
                    continue;
                }
                // re-enabled in breakpoint
                var previous;
                if (nav.offsetWidth && (previous = carousels[c].getAttribute('previous-position'))) {
                    moveToPos(carousels[c], previous, { target: carousels[c], type: 'resize' });
                    carousels[c].removeAttribute('previous-position');
                    continue;
                }
                // current navigation item is invisible - switch to the previous/next visible one
                var navItems = carousels[c].querySelectorAll('ol[role="navigation"] li'),
                    navItem = (navItems || [])[carousels[c].pos];
                if (navItem && /(s|m|l|xl)-0/.test(navItem.className) && !navItem.offsetWidth) {
                    var dist = 0;
                    while (dist++ < navItems.length) {
                        if (carousels[c].pos - dist > 1 && (navItems[carousels[c].pos - dist] || {}).offsetWidth) {
                            moveToPos(carousels[c], carousels[c].pos - dist, { target: carousels[c], type: 'resize' });
                            break;
                        }
                        if (carousels[c].pos + dist < navItems.length - 1 && (navItems[carousels[c].pos + dist] || {}).offsetWidth) {
                            moveToPos(carousels[c], carousels[c].pos + dist, { target: carousels[c], type: 'resize' });
                            break;
                        }
                    }
                }
                // DP-10556 Bugfix
                moveToPos(carousels[c], carousels[c].pos, { target: carousels[c], type: 'resize' });
            }
        }
    },
    resizeHandler = function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(resizeFunction, 100);
    };
    window.addEventListener('load', function() { autoswitchHandler(); });
    document.addEventListener('click', clickHandler);
    window.addEventListener('resize', resizeHandler);
    // touch handler
    var events = 'ontouchstart' in window ? 'touchstart touchmove touchend'
        : window.navigator.msPointerEnabled ? 'MSPointerDown MSPointerMove MSPointerUp'
        : window.navigator.pointerEnabled ? 'pointerdown pointermove pointerup'
        : '';
    events.replace(/\w+/g, function(name) { document.addEventListener(name, touchHandler); });
})();
(function() {
    'use strict';
    // check for prerequisites; otherwise we have to rely on server-side validation
    if (!document.addEventListener || !('validity' in document.createElement('input'))) { return; }
    /* validation messages depending on document language */
    var messages = {
            "de": {
                "valueMissing": "Bitte {{meaning}} eingeben",
                "typeMismatch": "Vertippt? Bitte {{meaning}} prüfen",
                "patternMismatch": "Vertippt? Bitte {{meaning}} prüfen",
                "tooLong": "Bitte höchstens {{maxlength}} Zeichen eingeben",
                "tooShort": "Bitte mindestens {{minlength}} Zeichen eingeben",
                "rangeUnderflow": "Bitte Betrag von mindestens {{min}} {{format}} eingeben",
                "rangeOverflow": "Bitte Betrag von höchstens {{max}} {{format}} eingeben",
                "stepMismatch": "Bitte Betrag in {{format}} eingeben: {{placeholder}}",
                "valueMissingNoMeaning": "Bitte Formularfeld ausfüllen",
                "valueMissingCheckbox": "Bitte {{meaning}} bestätigen, um fortfahren zu können",
                "atMissing": "Bitte @-Zeichen in der E-Mail-Adresse einfügen"
            },
            "en": {
                "valueMissing": "Please insert {{meaning}}",
                "typeMismatch": "Mistyped? Please check the {{meaning}}",
                "patternMismatch": "Mistyped? Please check the {{meaning}}",
                "tooLong": "Please insert at most {{maxlength}} characters",
                "tooShort": "Please insert at least {{minlength}} characters",
                "rangeUnderflow": "Please insert an amount of at least {{min}} {{format}}",
                "rangeOverflow": "Please insert an amount of at most {{max}} {{format}}",
                "stepMismatch": "Please insert amount in {{format}}: {{placeholder}}",
                "valueMissingNoMeaning": "Please fill in form field",
                "valueMissingCheckbox": "Please accept {{meaning}} to continue",
                "atMissing": "Please insert @-Sign in E-Mail-Address"
            },
            "es": {
                "valueMissing": "Por favor inserte {{meaning}}",
                "typeMismatch": "Por favor inserte {{meaning}} completamente",
                "patternMismatch": "Por favor inserte {{meaning}} en el siguiente formato: {{format}}",
                "tooLong": "Por favor inserte un máximo de {{maxlength}} caracteres",
                "tooShort": "Por favor inserte un mínimo de {{minlength}} caracteres",
                "rangeUnderflow": "Por favor inserte un monto de al menos {{min}} {{format}}",
                "rangeOverflow": "Por favor inserte un monto de máximo {{max}} {{format}}",
                "stepMismatch": "Por favor inserte el monto en {{format}}: {{placeholder}}",
                "valueMissingNoMeaning": "Por favor llene el campo del formulario ",
                "valueMissingCheckbox": "Por favor acepte {{meaning}} para continuar",
                "atMissing": "Por favor inserte el símbolo @ en la dirección de correo electrónico."
            },
            "fr": {
                "valueMissing": "Veuillez s'il vous plaît saisir {{meaning}}",
                "typeMismatch": "Veuillez s'il vous plaît saisir {{meaning}} complètement",
                "patternMismatch": "Veuillez s'il vous plaît saisir {{meaning}} au format suivant: {{format}}",
                "tooLong": "Veuillez s'il vous plaît saisir au maximum {{maxlength}} caractères",
                "tooShort": "Veuillez s'il vous plaît saisir au minimum {{minlength}} caractères",
                "rangeUnderflow": "Veuillez s'il vous plaît saisir un nombre d'au moins {{min}} {{format}}",
                "rangeOverflow": "Veuillez s'il vous plaît saisir un nombre maximum de {{max}} {{format}}",
                "stepMismatch": "Veuillez s'il vous plaît saisir la quantité en {{format}}: {{placeholder}}",
                "valueMissingNoMeaning": "Veuillez s'il vous plaît remplir dans le champ du formulaire",
                "valueMissingCheckbox": "Veuillez s'il vous plaît confirmer {{meaning}} pour continuer",
                "atMissing": "Veuillez s'il vous plaît saisir le symbol @ dans l'adresse e-mail"
            },
            "zh-cn": {
                "valueMissing": "请输入 {{meaning}}",
                "typeMismatch": "请检查 {{meaning}} 的输入",
                "patternMismatch": "请检查 {{meaning}} 的输入",
                "tooLong": "最多只可输入 {{maxlength}} 个字符",
                "tooShort": "最少需要 {{minlength}} 个字符",
                "rangeUnderflow": "最少 {{min}} {{format}}",
                "rangeOverflow": "最多 {{max}} {{format}}",
                "stepMismatch": "默认增量 {{format}}: {{placeholder}}",
                "valueMissingNoMeaning": "请完整填写表格",
                "valueMissingCheckbox": "请接受 {{meaning}} 条款以便继续下一步操作",
                "atMissing": "电子邮件地址中缺少 @ 符号"
            }
        }[/(de|en|fr|es|zh-cn)/.test(document.documentElement.getAttribute('lang')) ? RegExp.$1 : 'de'],
        /* TODO: more languages */
        getMessage = function(field) {
            var text = field.validationMessage,
                textdata = {
                    meaning: field.getAttribute('aria-label') || (field.parentNode.querySelector('label') || {}).innerHTML,
                    format: field.getAttribute('data-field-format') || field.getAttribute('placeholder'),
                    placeholder: field.getAttribute('placeholder') || '',
                    minlength: field.getAttribute('minlength'),
                    maxlength: field.getAttribute('maxlength'),
                    min: field.getAttribute('min'),
                    max: field.getAttribute('max')
                };
            // custom message takes precedence over generic messages
            if (field.validity && field.validity.customError) { return text; }
            // get message by ValidityState
            for (var item in messages) {
                if (messages.hasOwnProperty(item) && field.validity[item]) {
                    // use typeMismatch message for pattern mismatch without format information
                    if (item === 'patternMismatch' && !field.hasAttribute('data-patternmismatch-message')
                        && !textdata.format) { item = 'typeMismatch'; }
                    // split up different cases of valueMissing messages
                    if (item === 'valueMissing' && !field.hasAttribute('data-valuemissing-message')) {
                        if (!textdata.meaning) { item = 'valueMissingNoMeaning'; }
                        else if (item === 'valueMissing' && field.type === 'checkbox') { item = 'valueMissingCheckbox'; }
                    }
                    // use data attributes before generic message
                    text = field.getAttribute('data-' + item.toLowerCase() + '-message') ||
                           field.getAttribute('data-invalid-message') || messages[item];
                    break;
                }
            }
            return text.replace(/\{\{(.*?)\}\}/g, function(_, part) { return textdata[part] || ''; });
        },
        addMessage = function(field) {
            var text = getMessage(field),
                message = document.getElementById(field.id + '-error'),
                container = field.parentNode;
            container.className = container.className.replace(/(^|\s)error\b/g, '') + ' error';
            if (container.parentNode && /fieldset/i.test(container.parentNode.nodeName)) {
                container = container.parentNode;
            }
            field.setAttribute('aria-invalid', true);
            // if message container is not already there, add it behind the next container (.field, fieldset)
            if (text === '\0') {
                message && message.parentNode.removeChild(message);
                return;
            }
            if (!message) {
                message = document.createElement('div');
                message.id = field.id + '-error';
                message.className = 'error message field';
                container.parentNode[container.nextSibling ? 'insertBefore' : 'appendChild'](message, container.nextSibling);
            }
            message.innerHTML = '<span class="m error icon"></span><span></span>';
            message.lastChild.appendChild(document.createTextNode(text));
            var val = document.createEvent('CustomEvent');
            val.initCustomEvent('validation.errormessage.added', true, true, {
            });
            field.dispatchEvent(val);
        },
        removeMessage = function(field) {
            var message = document.getElementById(field.id + '-error');
            message && message.parentNode.removeChild(message);
            field.removeAttribute('aria-invalid');
            var container = field;
            while (container && container !== field.form) {
                container.className = container.className.replace(/(^|\s)error\b/g, '');
                container = container.parentNode;
            }
            var val = document.createEvent('CustomEvent');
            val.initCustomEvent('validation.errormessage.removed', true, true, {
            });
            field.dispatchEvent(val);
        },
        invalidHandler = function(ev) {
            if (!ev.target || !ev.target.validity || ev.target.validity.valid ||
                 ev.target.getAttribute('data-novalidate') || ev.target.form.novalidate) { return; }
            addMessage(ev.target);
            ev.preventDefault();
        },
        blurHandler = function(ev) {
            if (!ev.target || !ev.target.form) { return; }
            var noval = ev.target.getAttribute('data-novalidate') || ev.target.form.hasAttribute('novalidate') ||
                ev.target.form.hasAttribute('formnovalidate') || ev.target.form.getAttribute('data-novalidate'),
                custom;
            if (noval && (noval !== 'reqonly' || !ev.target.validity.valueMissing)) { return; }
            if ((custom = ev.target.getAttribute('data-custom-validation'))) {
                // send custom validation event (call ev.detail.done() when finished)
                var val = document.createEvent('CustomEvent'),
                    field = ev.target;
                val.initCustomEvent(custom, true, true, {
                    originalEvent: ev,
                    done: function(defer) {
                        (defer || field).checkValidity() && removeMessage(defer || field);
                        if (/android/i.test(navigator.userAgent)) {
                            ev.relatedTarget && ev.relatedTarget.focus && ev.relatedTarget.focus();
                        }
                    }
                });
                field.dispatchEvent(val);
            } else if (ev.target.reportValidity ? ev.target.reportValidity()
                : ev.target.checkValidity && ev.target.checkValidity()) {
                removeMessage(ev.target);
            }
            if (/android/i.test(navigator.userAgent)) {
                ev.relatedTarget && ev.relatedTarget.focus && ev.relatedTarget.focus();
            }
        },
        changeHandler = function(ev) {
            if (!ev.target || !ev.target.form || ( ev.target.type && !/radio|checkbox/i.test(ev.target.type))) { return; }
            var noval = ev.target.getAttribute('data-novalidate') || ev.target.form.hasAttribute('novalidate') ||
                ev.target.form.hasAttribute('formnovalidate') || ev.target.form.getAttribute('data-novalidate'),
                custom;
            if (noval && (noval !== 'reqonly' || !ev.target.validity.valueMissing)) { return; }
            if ((custom = ev.target.getAttribute('data-custom-validation'))) {
                // send custom validation event (call ev.detail.done() when finished)
                var val = document.createEvent('CustomEvent'),
                    field = ev.target;
                val.initCustomEvent(custom, true, true, {
                    originalEvent: ev,
                    done: function(defer) {
                        (defer || field).checkValidity() && removeMessage(defer || field);
                    }
                });
                field.dispatchEvent(val);
            } else if (/radio/i.test(ev.target.type)) {
                var radio = ev.target, group = radio.form[radio.name];
                if (group.value) {
                    for(var i = 0; i < group.length; i++) {
                        removeMessage(group[i]);
                    }
                }
            } else if (ev.target.reportValidity ? ev.target.reportValidity()
                : ev.target.checkValidity && ev.target.checkValidity()) {
                removeMessage(ev.target);
            }
        },
        loadHandler = function(ev) {
            var target = ev.target === window ? document : ev.target,
                firstError = target.querySelector('input[aria-invalid], select[aria-invalid], textarea[aria-invalid]');
            if (firstError) {
                firstError.focus();
                firstError.parentNode.scrollIntoView();
            }
        },
        resetHandler = function(ev) {
            var fields = ev.target.querySelectorAll('input[aria-invalid], select[aria-invalid], textarea[aria-invalid]');
            for (var f = 0, l = fields.length; f < l; f++) { removeMessage(fields[f]); }
        },
        submitHandler = function(ev) {
            if (ev.target.checkValidity() == false) {
                ev.preventDefault && ev.preventDefault();
                // Android 4.0.4 seems not to be satisfied with only using preventDefault...
                ev.stopImmediatePropagation && ev.stopImmediatePropagation();
                if (ev.target.reportValidity) {
                    ev.target.reportValidity();
                } else {
                    var fields = ev.target.querySelectorAll('input, textarea, select');
                    for (var f = fields.length; f--;) {
                        fields[f].checkValidity() || fields[f].dispatchEvent(new Event('invalid'));
                    }
                }
                return false;
            }
        },
        focusErrorField = function(form) { return function() {
            loadHandler({target: form});
        }},
        clickHandler = function(ev) {
            if (!ev.target) { return; }
            // clicked on a button that leads to form submit - focus first erroneous node
            if (ev.target.form && !ev.target.hasAttribute('novalidate') && !ev.target.hasAttribute('formnovalidate')
                && ((/button/i.test(ev.target.nodeName) && ev.target.type !== 'reset' && ev.target.classList.contains('key')) ||
                    (/input/i.test(ev.target.nodeName) && /submit|image/.test(ev.target.type)))) {
                window.setTimeout(focusErrorField(ev.target.form), 100);
            }
        },
        keyHandler = function(ev) {
            if (!ev.target || !ev.target.form) { return; }
            if ((ev.which || ev.keyCode) == 13 && /input|select/i.test(ev.target.nodeName) ||
                (/textarea/i.test(ev.target.nodeName) && ev.ctrlKey)) {
                // inline form submit - focus first erroneous node
                window.setTimeout(focusErrorField(ev.target.form), 100);
            }
        };
    document.addEventListener('invalid', invalidHandler, true);
    document.addEventListener('blur', blurHandler, true);
    document.addEventListener('change', changeHandler, true);
    document.addEventListener('reset', resetHandler, true);
    document.addEventListener('reset.validation', resetHandler);
    document.addEventListener('click', clickHandler);
    document.addEventListener('keyup', keyHandler);
    window.addEventListener('load', loadHandler);
    document.addEventListener('lazyload.done', loadHandler);
    // fix for some mobile webkit engines which don't stop submit on missingValue errors
    if (/mac os|android 4\.(4\.[0-2]|[^4])/i.test(navigator.userAgent)) {
        document.addEventListener('submit', submitHandler, true);
    }
})();
(function() {
    var lastMatch = window.matchMedia('screen and (min-width: 980px)').matches,
        lastFocus = false,
        toggle = /(?:^|\s)(toggle-\w+)\b/g,
        focus = /(^|\s)form-focus\b/g;
    resizeHandler = function() {
        var currentMatch = window.matchMedia('screen and (min-width: 980px)').matches;
        if (currentMatch && !lastMatch && toggle.test(document.body.className)) {
            toggle.lastIndex = 0;
            document.body.className.replace(toggle, function(_, name) {
                if (!name) { return; }
                var click = document.createEvent('Event');
                click.initEvent('click', true, true, {});
                document.querySelector('[data-toggle-nodes*="' + name + '"]').dispatchEvent(click);
            });
        }
        lastMatch = currentMatch;
    },
    focusHandler = function(ev) {
        if (ev.target !== lastFocus) {
            lastFocus = ev.target;
            document.body.className = document.body.className.replace(focus, '') + (ev.target.form ? ' form-focus' : '');
        }
    };
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('click', focusHandler);
    window.addEventListener('keyup', focusHandler);
})();
/* js-code for snippet 'component=hero type=video size=l' */
/* on mobile devices the video will played on the mobile-video viewer */
(function() {
    var linkHandler = function(ev) {
        if (ev.type == 'keypress' && ev.which !== 13) { return; }
        if (!ev.target) { return; }
        var node = ev.target;
        while (node && node.nodeName !== 'A') {
            node = node.parentNode;
        }
        var newWindow = false,
            regex = /\bnew-window\b/,
            testNode = node;
        while (!newWindow && testNode && testNode !== document) {
            if (testNode.className.match(regex)) { newWindow = true; }
            testNode = testNode.parentNode;
        }
        if (newWindow) {
            if (node.blur) { node.blur(); }
            if (/((like mac os)|android ([23]|4\.[0-4]))/i.test(navigator.userAgent)) {
                var text = document.createTextNode('');
                node.parentNode.replaceChild(text, node);
                window.setTimeout(function() { text.parentNode.replaceChild(node, text); }, 1);
            }
        }
    }
    document.addEventListener('click', linkHandler, false);
    document.addEventListener('keypress', linkHandler, false);
})();

/* on mobile devices the video will played on the mobile-video viewer */
(function() {
    if (/iphone|ip[ao]d|android|windows phone/i.test(navigator.userAgent)) {
        // prefer data-mobile-video-link to href in mobile devices
        var linkHandler = function(ev) {
            var videolink,
                node = ev.target;
            while (node && (!node.getAttribute || !(videolink = node.getAttribute('data-mobile-video-link')))) {
                node = node.parentNode;
            }
            if (videolink) {
                ev.preventDefault();
                //location.href = videolink; öffent nicht im neuen TAB bei IOs, deshalb:
                window.open(videolink, "videolayer");
            }
        };
        document.addEventListener('click', linkHandler, false)
    }
})();
(function(){
    var tables = document.getElementsByTagName('table');
    if (!tables.length || !document.querySelectorAll) {return;}
    for (var t = 0; t < tables.length; t++) {
        var data = [];
        var ths = tables[t].querySelectorAll('thead tr:first-child th');
        for (var h = 0; h < ths.length; h++) {
            data.push(ths[h].innerText || ths[h].textContent);
        }
        var trs = tables[t].querySelectorAll('tbody > tr');
        for (var r = 0; r < trs.length; r++) {
            var tds = trs[r].querySelectorAll('td, th');
            for (var d = 0; d < tds.length; d++) {
                tds[d].setAttribute('data-table-headline', data[d % data.length]);
            }
        }
    }
    var openHandler = function(evt) {
        evt = evt || window.evt;
        var rowgroup = evt.target || evt.srcElement;
        if (!rowgroup) { return; }
        while (/^t/i.test(rowgroup.parentNode.nodeName) && rowgroup.getAttribute('scope') !== 'rowgroup') {
            rowgroup = rowgroup.parentNode;
        }
        if (!rowgroup || rowgroup.getAttribute('scope') !== 'rowgroup') { return; }
        for (var tbody = evt.target || evt.srcElement; !/t?(body|head)/i.test(tbody.nodeName); tbody = tbody.parentNode);
        var sans = tbody.className.replace(/(^|\s)collapsed\b/g, '');
        if (evt.type === 'keyup') {
            if (evt.keyCode === 13 || evt.keyCode === 32) { tbody.className = tbody.className === sans ? tbody.className + ' collapsed' : sans; }
            else if (evt.keyCode === 38) { tbody.className += ' collapsed'; }
            else if (evt.keyCode === 40) { tbody.className = sans; }
        } else {
            tbody.className = tbody.className === sans ? tbody.className + ' collapsed' : sans;
        }
        if (typeof evt.preventDefault === 'function') {
            evt.preventDefault();
        }
        return false;
    }
    if (!document.addEventListener) {
        document.attachEvent('onclick', openHandler);
        document.attachEvent('onkeyup', openHandler);
    } else {
        document.addEventListener('click', openHandler);
        document.addEventListener('keyup', openHandler);
    }
})();

var CAT_MODULES_VERSIONS = CAT_MODULES_VERSIONS || {"project":"newsroom - 2.0","catModules":[{"akkordeon":"1.5.3"},{"backdrop":"1.1.4"},{"button":"2.0.1"},{"carousel":"2.1.2"},{"font":"3.0.0"},{"footer":"1.2.2"},{"form":"1.7.2"},{"freehtml":"1.0.2"},{"grid":"3.0.1"},{"header":"3.0.1"},{"headline":"1.1.3"},{"hero":"2.3.3"},{"icon":"3.0.1"},{"image":"1.0.0"},{"list":"2.0.1"},{"navigation":"4.0.0"},{"page":"2.0.0"},{"paragraph":"1.1.1"},{"popup":"1.0.1"},{"showhidetoggle":"1.0.4"},{"spoiler":"3.0.0"},{"table":"1.1.1"},{"teaser":"3.2.2"},{"theme":"4.0.1"},{"video":"1.0.2"},{"vspace":"1.0.1"},{"wrapper":"1.0.1"},{"icon":"(LOCAL)"}]};
