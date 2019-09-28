(function () {
    if (!Object.keys) {
        Object.keys = (function () {
            var au = Object.prototype.hasOwnProperty,
                at = !({
                    toString: null
                }).propertyIsEnumerable("toString"),
                aq = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                ar = aq.length;
            return function (aw) {
                if (typeof aw !== "function" && (typeof aw !== "object" || aw === null)) {
                    throw new TypeError("Object.keys called on non-object")
                }
                var ay = [],
                    ax, av;
                for (ax in aw) {
                    if (au.call(aw, ax)) {
                        ay.push(ax)
                    }
                }
                if (at) {
                    for (av = 0; av < ar; av++) {
                        if (au.call(aw, aq[av])) {
                            ay.push(aq[av])
                        }
                    }
                }
                return ay
            }
        }())
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = (function (au, ar, at) {
            return function aq(ay, av) {
                if (this === null || this === undefined) {
                    throw TypeError("Array.prototype.indexOf called on null or undefined")
                }
                var az = au(this),
                    ax = az.length >>> 0,
                    aw = at(av | 0, ax);
                if (aw < 0) {
                    aw = ar(0, ax + aw)
                } else {
                    if (aw >= ax) {
                        return -1
                    }
                }
                if (ay === void 0) {
                    for (; aw !== ax; ++aw) {
                        if (az[aw] === void 0 && aw in az) {
                            return aw
                        }
                    }
                } else {
                    if (ay !== ay) {
                        for (; aw !== ax; ++aw) {
                            if (az[aw] !== az[aw]) {
                                return aw
                            }
                        }
                    } else {
                        for (; aw !== ax; ++aw) {
                            if (az[aw] === ay) {
                                return aw
                            }
                        }
                    }
                }
                return -1
            }
        })(Object, Math.max, Math.min)
    }
    if (!Array.isArray) {
        Array.isArray = function (aq) {
            return Object.prototype.toString.call(aq) === "[object Array]"
        }
    }
    // TODO when updating this file in the future, be sure to preserve these next three lines!
    var o = window.evidon.domain,
        al = o + window.evidon.path,
        r = al,
        b = 1,
        a = 2,
        x = 1,
        v = 2,
        w = 3,
        K = 1,
        J = 2,
        L = 3,
        s = "_evidon_consent_cookie",
        t = "_evidon_consent_ls_",
        an = "_evidon_suppress_notification_cookie",
        ae = "//l.betrad.com/site/v3/",
        ab = "https://optoutapi.evidon.com/site/",
        O = "https://l3.evidon.com/site/",
        E = "https://l3.evidon.com/dataRequest/",
        ap = "vendorlist.js",
        d = "evidon-banner.js",
        e = "evidon-barrier.js",
        I = "evidon-gdpr-overlay.js",
        af = "evidon-preferences-dialog.js",
        q = "evidon-cmp.js",
        p = "https://iabmap.evidon.com/iabevidonmapping.js",
        l = 1,
        F = 2,
        B = 3,
        G = 4,
        ac = "_evidon-overlay",
        N = "_evidon-l3",
        aj = 30,
        ao = "evidonConsentGiven",
        j = "_evh-button",
        U = "_evh-link",
        aa = "_evh-newvendor-indicator",
        n = "_evidon-button-text",
        X = "_evidon-link-text",
        T = "evidon-notice-link",
        Y = 800;
    var Q = "evidon-consent-link",
        W = "evidon-consent-link-text",
        V = "evidon-consent-link-image",
        g = "evidon-consent-button",
        m = "evidon-consent-button-text",
        k = "evidon-consent-button-image";
    var ai = 1,
        ag = 17,
        ak = 20,
        ad = 21,
        Z = 22,
        c = 26,
        M = 6,
        H = 7,
        y = 23;
    var S = 2,
        i = 3,
        R = 15,
        h = 16;
    var z = "{company}",
        u = "{consentToolUrl}",
        ah = "{privacyPolicy}";
    var D = {
        BANNER_SCRIPT: "fallback-banner.js",
        BARRIER_SCRIPT: "fallback-barrier.js",
        L2_SCRIPT: "fallback-gdpr-overlay.js"
    };
    var C = [3247];
    var f = function () {
        var at = null,
            aq = false,
            au = false,
            ar = false,
            ay = this;

        function av() {
            window.evidon.notice.dropPixel(h);
            window.evidon.notice.showOptions();
            if (ar) {
                window.evidon.notice._updateConsentedVendors();
                ay.hideNewVendorIndicator()
            }
        }

        function ax(aD, aA) {
            var aB = aD.indexOf(aA);
            if (aB === -1) {
                return null
            }
            var aC = aD.substr(aB);
            aB = aC.indexOf(":");
            aC = aC.substr(aB + 1);
            aB = aC.indexOf(";");
            if (aB === -1) {
                return aC
            } else {
                return aC.substr(0, aB)
            }
        }

        function az(aE) {
            var aD = aE.split(";");
            var aA = {};
            for (var aB = 0; aB < aD.length; aB++) {
                var aC = aD[aB].split(":");
                if (aC.length !== 2) {
                    continue
                }
                aA[aC[0]] = aC[1]
            }
            return aA
        }

        function aw() {
            if (aq || !at) {
                return
            }
            var aB = document,
                aI = window.evidon.notice.isMobile(),
                aA = aB.createElement("div");
            aA.id = j;
            aA.className = g;
            aA.innerHTML = "<style> @media print {#_evh-ric,#_evh-link { display:none !important; } } </style>";
            var aL = (aI) ? at.mobileButtonStyle : at.buttonStyle;
            var aJ = aB.createElement("a");
            aJ.id = U;
            aJ.style.cssText = aL;
            var aM = (aI) ? at.mobileShowIcon : at.showIcon;
            if (aM) {
                var aF = aB.createElement("img");
                aF.src = at.buttonIcon;
                aF.className = k;
                var aO = "border:0;display:inline;vertical-align:middle;margin-right:10px;";
                var aD = ax(at.buttonStyle, "height");
                if (aD) {
                    var aC = parseFloat(aD);
                    var aR = aD.replace(aC, "");
                    aC = parseInt(aC * 0.6, 10);
                    aO += "height:" + aC + aR + ";"
                }
                aF.style.cssText = aO;
                aJ.appendChild(aF)
            }
            var aN = (aI) ? at.mobileShowText : at.showText;
            if (aN) {
                var aP = aB.createElement("span");
                aP.id = n;
                aP.className = m;
                aP.style.cssText = "vertical-align:middle !important;";
                aJ.appendChild(aP)
            }
            aJ.onclick = av;
            var aK = az(aL);
            var aE = aK.left === undefined ? "left" : "right";
            var aS = aK.top === undefined ? "top" : "bottom";
            var aH = "display: none; position: absolute;" + aE + ":-10px;" + aS + ":-10px;width: 23px; height: 23px;";
            var aG = document.createElement("img");
            aG.id = aa;
            aG.src = "//c.evidon.com/sitenotice/images/evidon-change-alert.png";
            aG.style.cssText = aH;
            aJ.appendChild(aG);
            aA.appendChild(aJ);
            document.body.appendChild(aA);
            var aQ = window.evidon.notice.getTranslations();
            if (aQ) {
                ay.setButtonText(aQ)
            }
            if (aI) {
                ay.scaleForMobile()
            }
            aq = true
        }
        window.onbeforeprint = function () {
            var aA = document.getElementById(j);
            aA.style.display = "none"
        };
        window.onafterprint = function () {
            var aA = document.getElementById(j);
            aA.style.display = ""
        };
        this.scaleForMobile = function () {
            if (window.innerHeight < Y && window.innerWidth < Y) {
                return
            }
            var aA = document.getElementById(j),
                aB = Math.max(window.innerWidth / screen.width, window.innerHeight / screen.height);
            if (aA && (aA.style.zoom !== undefined)) {
                aA.style.cssText += "zoom: " + (aB <= 2 ? aB : 2) + "!important;"
            }
        };
        this.setButtonText = function (aC) {
            if (!aC) {
                return
            }
            window.evidon.notice.dropPixel(i);
            var aB = window.evidon.notice.isMobile();
            if (aq) {
                var aA = document.getElementById(n);
                if (aA) {
                    aA.innerHTML = (aB) ? aC.mobileButtonText : aC.buttonText;
                    au = true
                }
            }
        };
        this.createButton = function (aA) {
            if (!aA) {
                at = window.evidon.notice.getButtonStyle()
            } else {
                at = aA
            }
            if (at) {
                aw()
            }
        };
        this.showNewVendorIndicator = function () {
            var aA = document.getElementById(aa);
            if (!aA) {
                return
            }
            aA.style.display = "";
            ar = true
        };
        this.hideNewVendorIndicator = function () {
            var aA = document.getElementById(aa);
            if (!aA) {
                return
            }
            aA.style.display = "none";
            ar = false
        }
    };
    var P = function () {
        var ar = null,
            aq = false,
            av = this;

        function at() {
            if (aq || !ar) {
                return
            }
            var ay = document,
                aB = window.evidon.notice.isMobile(),
                aC = ay.createElement("a");
            aC.href = "#";
            aC.className = Q;
            var aD = ay.createElement("span");
            aD.id = X;
            aD.className = W;
            if (aB && ar.mobileShowIcon && ar.mobileLinkIcon) {
                var aA = ay.createElement("img");
                aA.src = ar.mobileLinkIcon;
                aA.style.cssText = "vertical-align:bottom;";
                aA.className = V;
                aC.appendChild(aA);
                aD.style.cssText = "margin-left: 6px;"
            } else {
                if (!aB && ar.showIcon && ar.linkIcon) {
                    var aA = ay.createElement("img");
                    aA.src = ar.linkIcon;
                    aA.className = V;
                    aA.style.cssText = "vertical-align:bottom;";
                    aC.appendChild(aA);
                    aD.style.cssText = "margin-left: 6px;"
                }
            }
            aC.appendChild(aD);
            if (aB) {
                aC.style.cssText = ar.mobileLinkStyle
            } else {
                aC.style.cssText = ar.linkStyle
            }
            var ax = [];
            if (ay.getElementsByClassName !== undefined) {
                ax = ay.getElementsByClassName(T)
            } else {
                ax = ay.querySelectorAll("." + T)
            }
            if (ax.length === 0) {
                console.log("Evidon -- " + T + " not found on page, cant display the consent link.")
            }
            for (var az = 0; az < ax.length; az++) {
                var aw = aC.cloneNode(true);
                aw.onclick = au;
                ax[az].appendChild(aw)
            }
            aq = true;
            var aE = window.evidon.notice.getTranslations();
            if (aE) {
                av.setLinkText(aE)
            }
        }

        function au() {
            window.evidon.notice.dropPixel(R);
            window.evidon.notice.showOptions()
        }
        this.setLinkText = function (aB) {
            if (!aq || !aB) {
                return
            }
            window.evidon.notice.dropPixel(S);
            var ay = window.evidon.notice.isMobile();
            var az = null,
                aw = document,
                aA = (ay) ? aB.mobileLinkText : aB.linkText;
            if (aw.getElementsByClassName !== undefined) {
                az = aw.getElementsByClassName(W)
            } else {
                az = aw.querySelectorAll("." + W)
            }
            if (aA) {
                for (var ax = 0; ax < az.length; ax++) {
                    az[ax].innerText = aA
                }
            }
        };
        this.createLink = function (aw) {
            if (aw) {
                ar = aw
            } else {
                ar = window.evidon.notice.getLinkStyle()
            }
            if (!ar) {
                return
            }
            at()
        }
    };
    var am = function () {
        this.translations = {};
        this.country = null;
        this.themes = null;
        this.languageCode = null;
        this.languageRoot = null;
        this.companyId = window.evidon.id;
        this.activeTranslations = null;
        this.activeTranslationId = 0;
        this.settings = null;
        this.domain = null;
        this.path = null;
        this.activeSettings = null, this.consentTypeId = 0, this.privacyAccessTypeId = 0, this.consentRequired = false, this.consentDuration = 13, this.consentIsGiven = false, this.L2Enabled = false, this.gdprEnabled = false, this.dataRightsType = 0, this.rightsLink = "", this.closeConsentEnabled = false, this.scrollConsentEnabled = false, this.pageclickConsentEnabled = false, this.navigationConsentEnabled = false;
        this.activeVendorId = -1;
        this.activeDomain = null;
        this.pixelsDropped = [];
        this.scriptsLoaded = [];
        this.tagManagerEventFired = false;
        this.consentCallbackExecuted = false;
        this.closeCallbackExecuted = false;
        this.declineCallbackExecuted = false;
        this.navigationStack = [];
        this.blockDomainCheck = false;
        this.shouldSupportAmp = false;
        this.customerUserId = (typeof window.evidon.userid !== "undefined") ? window.evidon.userid : null;
        this.vendorList = null;
        this.shouldCallCMP = true;
        var ax = this;
        this._getAttributeValue = function (aE, aG) {
            var aD = aE.attributes,
                aH = null;
            for (var aF = 0; aF < aD.length; aF++) {
                if (aD[aF].localName == aG) {
                    aH = aD[aF].value;
                    break
                }
            }
            return aH
        };
        this._trackScrolling = function () {
            if (!ax.scrollConsentEnabled) {
                return
            } else {
                var aD = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (aD === 0 || aD > aj) {
                    ax.consentGiven(true);
                    ax.dropPixel(ak)
                }
            }
        };
        this._trackClicking = function (aD) {
            if (!ax.pageclickConsentEnabled) {
                return
            }
            if (!aD || !aD.target) {
                return
            }
            if (!window.evidon.banner) {
                return
            }
            if (window.evidon.banner.isOnBanner(aD.target)) {
                return
            }
            if (window.evidon.gdprL2 && window.evidon.gdprL2.isOnBanner(aD.target)) {
                return
            }
            ax.consentGiven(true);
            ax.dropPixel(ad)
        };
        this._hookConsentEvents = function () {
            if (document.readyState == "complete") {
                setTimeout(function () {
                    if (window.addEventListener) {
                        window.addEventListener("scroll", ax._trackScrolling, false);
                        window.addEventListener("click", ax._trackClicking, false)
                    } else {
                        window.attachEvent("onscroll", ax._trackScrolling);
                        window.attachEvent("onclick", ax._trackClicking)
                    }
                }, 500)
            } else {
                if (window.addEventListener) {
                    window.addEventListener("load", ax._hookConsentEvents, false)
                } else {
                    window.attachEvent("onload", ax._hookConsentEvents)
                }
            }
        };
        this._detachEventTracking = function () {
            ax.pageclickConsentEnabled = false;
            ax.scrollConsentEnabled = false;
            try {
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("click", ax._trackClicking, false)
                } else {
                    window.detachEvent("onclick", ax._trackClicking, false)
                }
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("scroll", ax._trackScrolling, false)
                } else {
                    window.detachEvent("onscroll", ax._trackScrolling, false)
                }
            } catch (aD) {}
        };
        if (window.addEventListener) {
            window.addEventListener("resize", function () {
                ax.showNotice()
            })
        } else {
            window.attachEvent("onresize", function () {
                ax.showNotice()
            })
        }
        this._isDomReady = function () {
            if (document.readyState == "loading") {
                console.log("dom not ready, setting event");
                document.addEventListener("DOMContentLoaded", function () {
                    console.log("dom ready, triggering load");
                    try {
                        document.removeEventListener("DOMContentLoaded")
                    } catch (aD) {}
                    ax.showNotice()
                }, false);
                return false
            } else {
                return true
            }
        };
        var aA = document.getElementById("evidon-notice");
        if (aA) {
            var aB = aA.src;
            var az = aB.indexOf(".com");
            if (az !== -1) {
                aB = aB.substr(0, az + 4);
                o = aB;
                // TODO when updating this file in the future, be sure to preserve this next two lines!
                al = o + window.evidon.path;
                r = al;
            }
            var at = this._getAttributeValue(aA, "data-options");
            if (at) {
                if (at.indexOf("block-domain-check") > -1) {
                    this.blockDomainCheck = true
                }
                if (at.indexOf("amp-support") > -1) {
                    this.shouldSupportAmp = true
                }
            }
        }
        var aw = (window.navigator.languages && window.navigator.languages.length > 0) ? window.navigator.languages[0] : (window.navigator.userLanguage || window.navigator.language);
        if (aw) {
            this.activateTranslations(aw.toLowerCase())
        }
        if (!this.blockDomainCheck) {
            this.setDomain(null, true)
        }
        if (this._isConsentGiven() && this.activeSettings) {
            var aq = this._getConsentedCategories();
            var aC = this._getConsentedVendors();
            var ar = this._getConsentedCookies();
            this._runConsentCallback(aq, aC, ar)
        }
        var av = window.addEventListener ? "addEventListener" : "attachEvent";
        var au = window[av];
        var ay = av == "attachEvent" ? "onmessage" : "message";
        au(ay, function (aE) {
            var aF = aE.message ? "message" : "data";
            var aD = aE[aF];
            if (aD == "acceptclicked") {
                ax._closeL3()
            }
        }, false)
    };
    am.prototype._isScriptLoaded = function (ar) {
        for (var aq = 0; aq < this.scriptsLoaded.length; aq++) {
            if (this.scriptsLoaded[aq] == ar) {
                return true
            }
        }
        return false
    };
    am.prototype._getRootDomain = function (aq) {
        var au = aq;
        var at = au.split(".");
        if (at.length === 2) {
            au = at[0]
        } else {
            if (at.length >= 3) {
                var ar = at[at.length - 2];
                if (this._isTwoPartTLD(ar)) {
                    au = at[at.length - 3]
                } else {
                    au = ar
                }
            }
        }
        return au
    };
    am.prototype._isTwoPartTLD = function (aq) {
        return (aq === "co" || aq === "com" || aq === "uk")
    };
    am.prototype._getTLD = function (aq) {
        var at = aq.split("."),
            au = "";
        if (at && at.length > 1) {
            var au = at[at.length - 1];
            if (at.length >= 3) {
                var ar = at[at.length - 2];
                if (this._isTwoPartTLD(ar)) {
                    au = ar + "." + au
                }
            }
        }
        return au
    };
    am.prototype.appendScript = function (ay, aq) {
        var au, ax = document.createElement("script"),
            aw = at();

        function at() {
            return document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0]
        }

        function av() {
            ax.onload = ax.onreadystatechange = null;
            aq()
        }
        if (this._isScriptLoaded(ay)) {
            if (aq) {
                aq()
            }
        } else {
            ax.async = true;
            ax.src = ay;
            if (aq) {
                ax.onreadystatechange = function () {
                    if (!au && (this.readyState == "loaded" || this.readyState == "complete")) {
                        au = true;
                        av()
                    }
                };
                ax.onload = av
            }
            try {
                aw.parentElement.insertBefore(ax, aw);
                this.scriptsLoaded.push(ay)
            } catch (ar) {
                console.log(ar)
            }
        }
    };
    am.prototype._getSettings = function () {
        var aA = this;
        if (!this.domain) {
            return null
        }

        function at(aJ, aK) {
            if (!aJ || !aK) {
                return false
            } else {
                return aJ.substr(aJ.length - aK.length) === aK
            }
        }

        function av(aJ) {
            var aN = [];
            for (var aK in aA.settings) {
                aK = aK.toLowerCase();
                var aL = aK.split("|")[0];
                if (!at(aL, "/")) {
                    aL += "/"
                }
                var aM = aJ.toLowerCase();
                if (!at(aM, "/")) {
                    aM += "/"
                }
                if (aL.indexOf(aM) === 0) {
                    aN.push(aK)
                }
            }
            return aN
        }
        var az = av(this.domain),
            aF = aA._getRootDomain(aA.domain),
            aI = aA._getTLD(this.domain);
        var aG = aA.domain.substr(0, aA.domain.indexOf(aF)) + aF + ".*";
        az = az.concat(av(aG));
        az = az.concat(av(aF + "." + aI));
        az = az.concat(av(aF + ".*"));
        if (az.length === 1) {
            aA.activeDomain = az[0].split("|")[0];
            return this.settings[az[0]]
        } else {
            if (az.length > 1) {
                az.sort(function (aJ, aK) {
                    return (aK.length - aJ.length)
                });
                var ax = aA.domain + this.path,
                    aD = [];
                for (var aw = 0; aw < az.length; aw++) {
                    var ay = az[aw];
                    if (ay.indexOf("|") !== -1) {
                        ay = ay.substr(0, ay.indexOf("|"))
                    }
                    if (ay.indexOf("*") !== -1) {
                        ay = ay.replace("*", aI)
                    }
                    if (ax.indexOf(ay) !== -1) {
                        aD.push(az[aw])
                    }
                }
                if (aD.length === 0) {
                    return null
                } else {
                    if (aD.length === 1) {
                        aA.activeDomain = aD[0].split("|")[0];
                        return aA.settings[aD[0]]
                    } else {
                        var aq = aA.country.id,
                            aH = null;
                        var au = [];
                        if (!at(ax, "/")) {
                            ax += "/"
                        }
                        for (var aw = 0; aw < aD.length; aw++) {
                            var aB = aD[aw];
                            var aC = aB.split("|")[0];
                            if (!at(aC, "/")) {
                                aC += "/"
                            }
                            if (ax.indexOf(aC) === 0 && aC.length === ax.length) {
                                au.push(aB)
                            }
                        }
                        if (au.length === 1) {
                            aH = aA.settings[au[0]];
                            aA.activeDomain = au[0].split("|")[0]
                        } else {
                            if (au.length > 1) {
                                aD = au
                            }
                        }
                        if (!aH) {
                            for (var aw = 0; aw < aD.length; aw++) {
                                if (aA.settings[aD[aw]].countries.hasOwnProperty(aq)) {
                                    aH = aA.settings[aD[aw]];
                                    aA.activeDomain = aD[aw].split("|")[0];
                                    break
                                }
                            }
                        }
                        if (!aH) {
                            var ar = 0;
                            for (var aw = 0; aw < aD.length; aw++) {
                                var aE = aA.settings[aD[aw]];
                                if (aE.hasOwnProperty("defaultCountry")) {
                                    if (aE.defaultCountry != 0) {
                                        ar = aE.defaultCountry;
                                        break
                                    }
                                }
                            }
                            if (ar !== 0) {
                                for (var aw = 0; aw < aD.length; aw++) {
                                    var aE = aA.settings[aD[aw]];
                                    if (aE.countries.hasOwnProperty(ar)) {
                                        aH = aE;
                                        aA.activeDomain = aD[aw].split("|")[0]
                                    }
                                }
                            }
                        }
                        if (!aH) {
                            aH = aA.settings[aD[0]];
                            aA.activeDomain = aD[0].split("|")[0]
                        }
                        return aH
                    }
                }
            }
        }
        return null
    };
    am.prototype._getDefaultConsentCookieData = function (aq, ay, au) {
        var ax = this.activeSettings,
            ar = {},
            aA = {},
            at = {};
        if (aq) {
            ar[this.activeCountryId] = aq
        } else {
            ar[this.activeCountryId] = true
        }
        if (ay === true) {
            var az = this.getActiveVendors();
            var aw = {};
            for (var av = 0; av < az.length; av++) {
                aw[az[av]] = true
            }
            aA[this.activeCountryId] = aw
        } else {
            if (typeof ay === "object") {
                aA[this.activeCountryId] = ay
            }
        }
        if (au) {
            at[this.activeCountryId] = au
        } else {
            at[this.activeCountryId] = true
        }
        return {
            consent_date: new Date().toISOString(),
            categories: ar,
            vendors: aA,
            cookies: at
        }
    };
    am.prototype._getConsentCookieExpDate = function (ar) {
        var aq = ar ? new Date(ar) : new Date();
        var at = (this.consentDuration > 0) ? this.consentDuration : 12;
        aq.setMonth(aq.getMonth() + at);
        return aq
    };
    am.prototype._getConsentCookieDomainPath = function () {
        var ar = "/";
        var au = this.activeSettings;
        var aq = au.hasOwnProperty("includeSubdomains") ? au.includeSubdomains : 0;
        if (aq === 2) {
            ar = this.activeDomain;
            if (!ar) {
                console.error("Attempted to set a cookie without a valid settings object");
                return
            }
            var at = ar.indexOf("/");
            if (at !== -1) {
                ar = ar.substring(at)
            }
            ar = window.location.pathname.substr(0, ar.length)
        }
        return ar
    };
    am.prototype._getConsentCookieDomain = function () {
        var ar = this.activeSettings;
        var aq = ar.hasOwnProperty("includeSubdomains") ? ar.includeSubdomains : 0;
        if (aq === 1) {
            return "." + this._getRootDomain(this.domain) + "." + this._getTLD(this.domain)
        }
        return null
    };
    am.prototype._isConsentGiven = function () {
        var aq = this._getConsentCookie();
        return (null !== aq)
    };
    am.prototype._deleteConsentCookie = function () {
        var aq = this._getConsentCookieDomain();
        var at = this._getConsentCookieDomainPath();
        var ar = new Date(1970, 1, 1);
        this._removeLocalStorageItem(t + this.activeSettings.id);
        this._writeCookie(s, "", ar.toUTCString(), at, aq)
    };
    am.prototype.getConsentData = function () {
        var aq = this._getConsentLocalStorage();
        if (!aq) {
            aq = this._getConsentCookie()
        }
        if (!aq) {
            aq = {
                name: null,
                value: null
            }
        }
        return aq
    };
    am.prototype._getConsentLocalStorage = function () {
        var at = t + this.activeSettings.id;
        var aq = this._readLocalStorage(at);
        try {
            aq = JSON.parse(aq)
        } catch (ar) {}
        return {
            name: at,
            value: aq
        }
    };
    am.prototype._getConsentCookie = function () {
        return this._getCookie(s)
    };
    am.prototype._setConsentCookie = function (ax, aq, ay, av) {
        var ar = this._getDefaultConsentCookieData(aq, ay, av);
        var au = this._getConsentCookieExpDate(ax);
        var aw = this._getConsentCookieDomainPath();
        var at = this._getConsentCookieDomain();
        if (ax) {
            ar.consent_date = ax.toISOString()
        }
        if (this._writeLocalStorage(t + this.activeSettings.id, JSON.stringify(ar))) {
            delete(ar.categories);
            delete(ar.vendors);
            delete(ar.cookies)
        }
        if (!this._writeCookie(s, JSON.stringify(ar), au.toUTCString(), aw, at)) {
            return false
        }
        return ar
    };
    am.prototype._updateConsentData = function (aw, au) {
        var aq = this.getConsentData().value;
        var at = this._getConsentCookieExpDate(new Date(aq.consent_date));
        var av = this._getConsentCookieDomainPath();
        var ar = this._getConsentCookieDomain();
        if (!aq.hasOwnProperty(aw) || !aq[aw].hasOwnProperty(this.activeCountryId)) {
            return
        }
        aq[aw][this.activeCountryId] = au;
        if (this._writeLocalStorage(t + this.activeSettings.id, JSON.stringify(aq))) {
            delete(aq.categories);
            delete(aq.vendors);
            delete(aq.cookies)
        }
        this._writeCookie(s, JSON.stringify(aq), at.toUTCString(), av, ar)
    };
    am.prototype._updateConsentedCategories = function (aq) {
        this._updateConsentData("categories", aq)
    };
    am.prototype._updateConsentedCookies = function (aq) {
        this._updateConsentData("cookies", aq)
    };
    am.prototype._updateConsentedVendors = function (av) {
        var at = this.getConsentData().value;
        var aq = at.vendors[this.activeCountryId];
        if (!av) {
            var ar = this.getActiveVendors();
            av = this._getNewVendors(ar, aq)
        }
        var aw = {};
        if (Array.isArray(aq)) {
            for (var au = 0; au < aq.length; au++) {
                aw[aq[au]] = true
            }
        } else {
            if (typeof aq === "object") {
                for (var ax in aq) {
                    aw[ax] = aq[ax]
                }
            }
        }
        if (Array.isArray(av)) {
            for (var au = 0; au < av.length; au++) {
                aw[av[au]] = true
            }
        } else {
            if (typeof av === "object") {
                for (var ax in av) {
                    aw[ax] = av[ax]
                }
            }
        }
        this._updateConsentData("vendors", aw)
    };
    am.prototype._getSuppressionCookie = function () {
        return this._getCookie(an)
    };
    am.prototype._triggerTagManagerEvent = function () {
        if (this.tagManagerEventFired) {
            return
        }
        try {
            var aq = window.dataLayer || [];
            aq.push({
                event: ao
            })
        } catch (ar) {}
        try {
            if (window.utag) {
                window.utag.link({
                    event_name: ao
                })
            }
        } catch (ar) {}
        this.tagManagerEventFired = true
    };
    am.prototype._getCategoriesReturnObject = function (aq) {
        var ar = {};
        if (typeof aq === "undefined" || aq === true) {
            ar = {
                all: true
            }
        } else {
            ar = aq
        }
        return ar
    };
    am.prototype._getVendorsReturnObject = function (at) {
        var au = {};
        if (typeof at === "undefined" || at === true) {
            at = this.getActiveVendors()
        }
        if (Array.isArray(at)) {
            for (var aq = 0; aq < at.length; aq++) {
                var ar = at[aq];
                if (this.vendorList.hasOwnProperty(ar) === false) {
                    console.error("Vendor " + ar + " not found in vendorList");
                    continue
                }
                au[this.vendorList[ar]] = true
            }
        } else {
            if (typeof at === "object") {
                for (var ar in at) {
                    if (this.vendorList.hasOwnProperty(ar) === false) {
                        console.error("Vendor " + ar + " not found in vendorList");
                        continue
                    }
                    au[this.vendorList[ar]] = at[ar]
                }
            } else {
                console.error("vendors object not recognized", at)
            }
        }
        return au
    };
    am.prototype._getCookiesReturnObject = function (aq) {
        var ar = {};
        if (typeof aq === "undefined" || aq === true) {
            ar = {
                all: true
            }
        } else {
            if (typeof aq === "object") {
                ar = aq
            }
        }
        return ar
    };
    am.prototype._runConsentCallback = function (aq, at, ar) {
        this.consentIsGiven = true;
        if (this.consentCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        if (window.evidon && window.evidon.priorConsentCallback) {
            aq = this._getCategoriesReturnObject(aq);
            at = this._getVendorsReturnObject(at);
            ar = this._getCookiesReturnObject(ar);
            window.evidon.priorConsentCallback(aq, at, ar)
        }
        if (window.evidon && window.evidon.cmp && this.shouldCallCMP) {
            window.evidon.cmp.consentGiven();
            window.evidon.cmp.saveConsent()
        }
        this.consentCallbackExecuted = true;
        this._triggerTagManagerEvent()
    };
    am.prototype._runCloseCallback = function () {
        this.consentIsGiven = false;
        if (this.closeCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        if (window.evidon && window.evidon.closeCallback) {
            window.evidon.closeCallback()
        }
        if (window.evidon && window.evidon.cmp) {
            window.evidon.cmp.consentClosed()
        }
        this.closeCallbackExecuted = true
    };
    am.prototype._runDeclineCallback = function () {
        this.consentIsGiven = false;
        if (this.declineCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        if (window.evidon && window.evidon.consentDeclinedCallback) {
            window.evidon.consentDeclinedCallback()
        }
        if (window.evidon && window.evidon.cmp) {
            window.evidon.cmp.consentDeclined()
        }
        this.declineCallbackExecuted = true
    };
    am.prototype._getLegacyNoticeType = function () {
        if (this.consentTypeId == x) {
            if (this.privacyAccessTypeId == b) {
                return 0
            } else {
                if (this.privacyAccessTypeId == a) {
                    return l
                }
            }
        } else {
            if (this.consentTypeId == v) {
                if (this.privacyAccessTypeId == b) {
                    return G
                } else {
                    if (this.privacyAccessTypeId == a) {
                        return F
                    }
                }
            } else {
                if (this.consentTypeId == w) {
                    return B
                }
            }
        }
        return 0
    };
    am.prototype._closeL3 = function () {
        var aq = document.getElementById(ac);
        var ar = document.getElementById(N);
        if (aq) {
            aq.style.display = "none";
            aq.style.opacity = "0";
            setTimeout(function () {
                try {
                    aq.parentElement.removeChild(aq)
                } catch (at) {
                    console.log(at)
                }
            }, 200)
        }
        if (ar) {
            ar.style.display = "none";
            ar.style.opacity = 0;
            setTimeout(function () {
                try {
                    ar.parentElement.removeChild(ar)
                } catch (at) {
                    console.log(at)
                }
            }, 200)
        }
    };
    am.prototype._navigationConsentGiven = function () {
        if (!this.navigationConsentEnabled) {
            return false
        }
        var ar = document.referrer;
        var aq = document.location.hostname;
        if (ar && ar != document.URL && ar.indexOf(aq) > -1) {
            this.dropPixel(Z);
            return true
        } else {
            return false
        }
    };
    am.prototype._setTranslationValues = function (au, av) {
        for (var at in au) {
            var aq = au[at];
            if (typeof aq === "object") {
                var ar = aq.id;
                au[at] = av[ar]
            }
        }
        return au
    };
    am.prototype._setActiveTranslations = function () {
        if (!this.languageRoot || !this.translations) {
            return
        }
        if (!this.activeSettings) {
            if (!this.translations.hasOwnProperty(this.languageRoot)) {
                this.activateTranslations(this.languageCode || this.languageRoot)
            }
        } else {
            var au = this.activeSettings;
            if (au.translations.hasOwnProperty(this.languageRoot)) {
                if (this.translations.hasOwnProperty(this.languageRoot)) {
                    var av = au.translations[this.languageRoot];
                    var ar = 0;
                    if (av.hasOwnProperty(this.languageCode)) {
                        ar = av[this.languageCode]
                    } else {
                        if (av.hasOwnProperty(this.languageRoot)) {
                            ar = av[this.languageRoot]
                        } else {
                            if (this.languageRoot == "en" && av.hasOwnProperty("en-us")) {
                                ar = av["en-us"]
                            } else {
                                function aq(ax) {
                                    for (var aw in ax) {
                                        return aw
                                    }
                                }
                                var at = aq(av);
                                if (at) {
                                    ar = av[at]
                                }
                            }
                        }
                    }
                    if (ar) {
                        this.activeTranslationId = ar;
                        var av = this.translations[this.languageRoot];
                        if (av.hasOwnProperty("items")) {
                            this.activeTranslations = this._setTranslationValues(av[ar], av.items)
                        } else {
                            this.activeTranslations = av[ar]
                        }
                    }
                } else {
                    this.activateTranslations(this.languageCode || this.languageRoot)
                }
            } else {
                this.activateTranslations(au.defaultTranslation.code)
            }
        }
    };
    am.prototype.dropPixel = function (aq, au) {
        var at = window.evidon.id;
        var aw = this.activeSettings.id;
        var ar = this.activeCountryId;
        var ax = ae;
        if (ax.substr(ax.length - 1) !== "/") {
            ax += "/"
        }
        ax += at + "/" + aw + "/" + ar + "/" + aq + "/" + this.consentTypeId + "/" + this.privacyAccessTypeId;
        if (this.activeTranslationId != 0) {
            ax += "/" + this.activeTranslationId
        }
        if (this.pixelsDropped.indexOf(ax) === -1 || au) {
            this.pixelsDropped.push(ax);
            ax += "?consent=" + ((this.consentIsGiven) ? "1" : "0");
            if (this.customerUserId) {
                ax += "&u=" + encodeURI(this.customerUserId)
            }
            var av = new Image(0, 0);
            av.style.display = "none";
            av.src = ax
        }
    };
    am.prototype.consentGiven = function (ar, aq, av, au) {
        var at = false;
        if (!this._isConsentGiven() && !this.shouldSupportAmp) {
            at = this._setConsentCookie(null, aq, av, au)
        } else {
            at = this._isConsentGiven()
        }
        this._runConsentCallback(aq, av, au);
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
        if (at) {
            if (ar === undefined || ar === false) {
                this.dropPixel(c)
            }
            this.navigationStack = [];
            this.showNotice()
        } else {
            if (this.shouldSupportAmp) {} else {
                console.error("Unable to set ConsentCookie")
            }
        }
    };
    am.prototype.closeGiven = function () {
        this._runCloseCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
    };
    am.prototype.declineGiven = function () {
        this._runDeclineCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
    };
    am.prototype.getConsentUrl = function () {
        var aq = window.evidon.id;
        var au = this.activeSettings.id;
        var ar = this.activeCountryId;
        var at = this.languageCode;
        return O + aq + "/" + au + "/" + ar + "?lang=" + at
    };
    am.prototype.getGDPRRequestUrl = function () {
        var aq = window.evidon.id;
        var at = this.activeSettings.id;
        var ar = this.activeCountryId;
        return E + aq + "/" + at + "/" + ar
    };
    am.prototype.getPrivacyPolicyLink = function () {
        if (!this.activeCountryId) {
            return "#"
        }
        var ar = this.activeSettings;
        var aq = ar.countries[this.activeCountryId];
        if (aq && ar.privacyLinks && ar.privacyLinks.hasOwnProperty(aq.privacyLinkId)) {
            return this.activeSettings.privacyLinks[aq.privacyLinkId]
        }
        return "#"
    };
    am.prototype.showPreferencesDialog = function () {
        var aq = this;
        if (!window.evidon.preferencesDialog) {
            this.appendScript(al + af, function () {
                aq.showPreferencesDialog()
            });
            this.dropPixel(H)
        } else {
            window.evidon.preferencesDialog.init()
        }
    };
    am.prototype.showOptionPanel = function (ar) {
        var aq = this;
        if (!window.evidon.gdprL2) {
            if (C.indexOf(this.companyId) > -1) {
                this.appendScript(al + D.L2_SCRIPT, function () {
                    aq.showOptionPanel(ar)
                })
            } else {
                this.appendScript(al + I, function () {
                    aq.showOptionPanel(ar)
                })
            }
            this.dropPixel(H)
        } else {
            window.evidon.gdprL2.showOverlay(ar)
        }
    };
    am.prototype.showOptions = function (aq) {
        if (this.L2Enabled) {
            if (this.getPreferencesDialogV2Enabled()) {
                this.showPreferencesDialog()
            } else {
                this.showOptionPanel(aq)
            }
        } else {
            this.showConsentTool(aq)
        }
    };
    am.prototype.showConsentTool = function (aw) {
        var at = (this.activeSettings.consentDisplayType === undefined) ? 1 : (this.activeSettings.consentDisplayType || 1);
        var ax = (at == K || (at == L && window.location.protocol.indexOf("https") === -1));
        if (ax) {
            var aq = document.createElement("div");
            aq.style.cssText = "background-color: #000000; opacity:.7; position:fixed;top:0;left:0;bottom:0;right:0; z-index:2147483640;";
            aq.id = ac;
            document.body.appendChild(aq);
            var au = document.createElement("div");
            au.id = N;
            if (this.isMobile()) {
                au.style.cssText = "position:absolute; top:0;left:0; bottom:0; right:0;;z-index:2147483647; padding: 28px 0 0 0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-y:scroll;"
            } else {
                au.style.cssText = "position:fixed; top: 10%;left:20%; width:60%;height:80%;z-index:2147483647; padding: 28px 0 0 0;"
            }
            var ar = document.createElement("button");
            ar.style.cssText = "position:absolute; top:4px;right:8px;color:white; background:transparent;font-size:12px;border:0; psdding:4px;cursor:pointer;padding:0;";
            ar.innerHTML = this.activeTranslations.gdprl2Close + "&nbsp; &#x2716;";
            ar.onclick = this._closeL3;
            au.appendChild(ar);
            var av = document.createElement("iframe");
            av.id = "_evidon-consent-frame";
            av.scrolling = "yes";
            av.seamless = "seamless";
            av.frameBorder = "0";
            av.src = this.getConsentUrl();
            av.style.cssText = "width:100%; height:100%;";
            av.onload = function () {
                document.getElementById(N).style.position = "fixed"
            };
            au.appendChild(av);
            document.body.appendChild(au)
        } else {
            window.open(this.getConsentUrl(), "L3")
        }
        this.dropPixel(M)
    };
    am.prototype.isMobile = function () {
        var aq = navigator.userAgent;
        return (/ip(hone|od)|(android).+mobile|opera m(ob|in)i/i).test(aq) || (/Android/).test(aq) || (/iPhone/).test(aq) || (/iPad/).test(aq)
    };
    am.prototype.showNotice = function () {
        if (!this.settings) {
            if (window.evidon.settings !== undefined && window.evidon.settings) {
                this.settings = window.evidon.settings
            } else {
                return
            }
        }
        if (!this.country) {
            if (window.evidon.location) {
                this.country = window.evidon.location
            }
        }
        if (!this.country) {
            return
        }
        this.activeSettings = this._getSettings();
        if (!this.activeSettings) {
            return
        }
        if (!this._isDomReady()) {
            return
        }
        if (!this.themes) {
            this.themes = (window.evidon.themes || null)
        }
        if (!this.themes) {
            return
        }
        if (!this.vendorList) {
            if (this.activeSettings.vendorLinks) {
                this.vendorList = this.activeSettings.vendorLinks
            } else {
                this.getVendorList();
                return
            }
        }
        var ax = this.country.id;
        var aw = null;
        if (this.activeSettings.countries.hasOwnProperty(ax)) {
            aw = this.activeSettings.countries[ax];
            this.activeCountryId = ax
        } else {
            aw = this.activeSettings.countries[this.activeSettings.defaultCountry];
            this.activeCountryId = this.activeSettings.defaultCountry
        }
        if (!aw) {
            console.log("No consent settings found for the country: " + ax);
            return
        }
        var ar = "";
        if (aw.hasOwnProperty("consentTemplate") && window.evidon.consentTemplates) {
            var at = aw.consentTemplate;
            var au = window.evidon.consentTemplates[at];
            this.iabEnabled = au.iabEnabled || false;
            this.consentTypeId = au.consentid;
            this.privacyAccessTypeId = au.accessid;
            this.consentRequired = (au.consentRequired === undefined ? au.duration > 0 : au.consentRequired);
            this.consentDuration = au.duration;
            this.L2Enabled = (au.l2enabled === undefined) ? false : au.l2enabled;
            this.gdprEnabled = (au.gdprEnabled === undefined) ? false : au.gdprEnabled;
            this.closeConsentEnabled = (au.closeConsentEnabled === undefined) ? true : au.closeConsentEnabled;
            ar = (au.consentactions === undefined) ? "" : au.consentactions
        } else {
            this.iabEnabled = aw.iabEnabled || false;
            this.consentTypeId = aw.consentid;
            this.privacyAccessTypeId = aw.accessid;
            this.consentRequired = (aw.consentRequired === undefined ? aw.duration > 0 : aw.consentRequired);
            this.consentDuration = aw.duration;
            this.L2Enabled = (aw.l2enabled === undefined) ? false : aw.l2enabled;
            this.gdprEnabled = (aw.gdprEnabled === undefined) ? false : aw.gdprEnabled;
            this.closeConsentEnabled = aw.closeConsentEnabled === undefined ? true : aw.closeConsentEnabled;
            ar = aw.consentactions
        }
        this.dataRightsType = aw.dataRightsType === undefined ? 0 : aw.dataRightsType;
        var az = (aw.rightslinkId === undefined) ? 0 : aw.rightslinkId;
        if (az === 0) {
            this.rightsLink = ""
        } else {
            if (this.activeSettings.hasOwnProperty("rightsLinks")) {
                if (this.activeSettings.rightsLinks.hasOwnProperty(az)) {
                    this.rightsLink = this.activeSettings.rightsLinks[az]
                } else {
                    this.rightsLink = ""
                }
            } else {
                this.rightsLink = ""
            }
        }
        var ay = (aw.pubvendorsLinkId === undefined) ? 0 : aw.pubvendorsLinkId;
        if (ay === 0) {
            this.pubvendorsLink = null
        } else {
            this.pubvendorsLink = this.activeSettings.pubvendorsLinks[ay]
        }
        if (ar && this.consentRequired) {
            this.scrollConsentEnabled = (ar.indexOf("s") !== -1);
            this.navigationConsentEnabled = (ar.indexOf("n") !== -1);
            this.pageclickConsentEnabled = (ar.indexOf("p") !== -1)
        } else {
            this.scrollConsentEnabled = false;
            this.navigationConsentEnabled = false;
            this.pageclickConsentEnabled = false
        }
        this.activeVendorId = aw.vendor;
        this._setActiveTranslations();
        if (!this._isConsentGiven() && this._navigationConsentGiven()) {
            this.consentGiven(true)
        } else {
            if (this.consentRequired == false) {
                this._runConsentCallback()
            }
        }
        this.dropPixel(ai);
        var aC = this._isConsentGiven();
        var aB = this._getSuppressionCookie();
        if (this.iabEnabled) {
            this.appendScript(p);
            this.appendScript(al + q);
            if (window.__cmp) {
                window.__cmp("setSuppression", aB !== null)
            } else {
                console.error("unable to find __cmp stub")
            }
        }
        if (this.consentTypeId != x && !aC && !aB) {
            if (this.consentTypeId === v) {
                if (C.indexOf(this.companyId) > -1) {
                    this.appendScript(al + D.BANNER_SCRIPT)
                } else {
                    this.appendScript(al + d)
                }
                this._hookConsentEvents();
                if (this.activeTranslations && window.evidon.banner) {
                    window.evidon.banner.setTextValues(this.activeTranslations)
                }
            } else {
                if (this.consentTypeId === w) {
                    if (C.indexOf(this.companyId) > -1) {
                        this.appendScript(al + D.BARRIER_SCRIPT)
                    } else {
                        this.appendScript(al + e)
                    }
                    if (this.activeTranslations && window.evidon.barrier) {
                        window.evidon.barrier.setTextValues(this.activeTranslations)
                    }
                }
            }
        } else {
            if (!aB) {
                var aq = this._getConsentedCategories();
                var aD = this._getConsentedVendors();
                var av = this._getConsentedCookies();
                this._runConsentCallback(aq, aD, av)
            }
            if (this.privacyAccessTypeId == a) {
                var aA = this.getButtonStyle();
                if (aA && window.evidon.button) {
                    window.evidon.button.createButton(aA);
                    if (this.activeTranslations) {
                        window.evidon.button.setButtonText(this.activeTranslations)
                    }
                }
            }
            this.checkConsentedVendors()
        }
        if (this.privacyAccessTypeId == b) {
            aA = this.getLinkStyle();
            if (aA && window.evidon.link) {
                window.evidon.link.createLink(aA);
                if (this.activeTranslations) {
                    window.evidon.link.setLinkText(this.activeTranslations)
                }
            }
        }
    };
    am.prototype.checkConsentedVendors = function () {
        var ar = this.getActiveVendors();
        var aq = this._getConsentedVendors();
        var at = this._getNewVendors(ar, aq);
        if (at.length > 0 && typeof this.newVendorCallback === "function") {
            this.newVendorCallback(at)
        }
    };
    am.prototype.getActiveVendors = function () {
        if (!this.activeSettings || !this.activeSettings.hasOwnProperty("vendors")) {
            return
        }
        var aq = this.activeVendorId;
        if (aq === -1 || !this.activeSettings.vendors.hasOwnProperty(aq)) {
            return null
        }
        return this.activeSettings.vendors[aq]
    };
    am.prototype._getConsentedCategories = function () {
        return this._getConsentDataSpecific("categories")
    };
    am.prototype._getConsentedCookies = function () {
        return this._getConsentDataSpecific("cookies")
    };
    am.prototype._getConsentedVendors = function () {
        return this._getConsentDataSpecific("vendors")
    };
    am.prototype._getConsentDataSpecific = function (ar) {
        var aq = this._getConsentDataFromLocalStorage(ar);
        if (!aq) {
            aq = this._getConsentDataFromCookie(ar)
        }
        if (!aq) {
            return null
        }
        return aq
    };
    am.prototype._getConsentDataFromLocalStorage = function (ar) {
        var aq = this._readLocalStorage(t + this.activeSettings.id);
        if (!aq) {
            return null
        }
        aq = JSON.parse(aq);
        if (aq.hasOwnProperty(ar) && aq[ar].hasOwnProperty(this.activeCountryId)) {
            return aq[ar][this.activeCountryId]
        }
        return null
    };
    am.prototype._getConsentDataFromCookie = function (au) {
        var aq = this._getConsentCookie();
        if (!aq || !aq.value) {
            return null
        }
        var at = aq.value;
        if (typeof at === "string") {
            var ar = new Date(unescape(at));
            at = this._setConsentCookie(ar)
        } else {
            if (typeof at === "object") {
                if (at.hasOwnProperty(au)) {
                    this._setConsentCookie(new Date(at.consent_date))
                }
            }
        }
        if (at.hasOwnProperty(au) && at[au].hasOwnProperty(this.activeCountryId)) {
            return at[au][this.activeCountryId]
        }
        return null
    };
    am.prototype._getNewVendors = function (at, aq) {
        if (!at || !aq) {
            return []
        }
        var ar = [];
        if (Array.isArray(aq)) {
            ar = aq
        } else {
            for (var aw in aq) {
                ar.push(parseInt(aw))
            }
        }
        var av = [];
        for (var au = 0; au < at.length; au++) {
            var aw = at[au];
            if (ar.indexOf(aw) === -1) {
                av.push(aw)
            }
        }
        return av
    };
    am.prototype.setLocation = function (aq) {
        this.country = aq;
        if (!this.langaugeRoot) {
            this.activateTranslations(aq.defaultLanguage)
        }
        this.showNotice()
    };
    am.prototype.setThemes = function (aq) {
        this.themes = aq;
        this.showNotice()
    };
    am.prototype.getVendorList = function () {
        this.appendScript(al + ap)
    };
    am.prototype.setVendorList = function (aq) {
        this.vendorList = aq;
        this.showNotice()
    };
    am.prototype.activateTranslations = function (aq) {
        if (aq === undefined || !aq) {
            return
        }
        this.languageCode = aq;
        this.languageRoot = aq;
        var ar = this.languageCode.indexOf("-");
        if (ar !== -1) {
            this.languageRoot = this.languageCode.substr(0, ar)
        }
        if (this.translations.hasOwnProperty(this.languageRoot)) {
            this._setActiveTranslations();
            this.showNotice()
        } else {
            // TODO when updating this file in the future, be sure to preserve this next line!
            var at = r + "translations/" + this.languageRoot + ".js";
            this.appendScript(at);
            this.activeTranslations = null
        }
    };
    am.prototype.setDomain = function (aq, au) {
        if (!aq) {
            this.domain = window.location.hostname.toLowerCase();
            this.path = window.location.pathname.toLowerCase()
        } else {
            aq = aq.toLowerCase();
            var ar = aq.indexOf("://");
            if (ar !== -1) {
                aq = aq.substr(ar + 3)
            }
            ar = aq.indexOf("/");
            if (ar === -1) {
                this.domain = aq;
                this.path = "/"
            } else {
                this.domain = aq.substr(0, ar);
                aq = aq.substr(ar);
                ar = aq.indexOf("?");
                if (ar !== -1) {
                    aq = aq.substr(0, ar)
                }
                this.path = aq
            }
        }
        if (au === undefined || !au) {
            var at = this._getRootDomain(this.domain);
            at = at.replace(".", "");
            var av = (window.evidon.test !== undefined) ? window.evidon.test : false;
            var aw = r + "/" + at + ((av) ? "/test" : "") + "/settings.js";
            this.appendScript(aw)
        }
        this.showNotice()
    };
    am.prototype.addTranslation = function (aq, ar) {
        this.translations[aq] = ar;
        this.showNotice()
    };
    am.prototype.loadSettings = function (aq) {
        this.settings = aq;
        this.showNotice()
    };
    am.prototype.getBannerStyle = function () {
        if (this.consentTypeId !== v) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].banner
        } else {
            return null
        }
    };
    am.prototype.getConsentTypeStyle = function () {
        var aq = this.getBarrierStyle();
        if (!aq) {
            aq = this.getBannerStyle()
        }
        return aq
    };
    am.prototype.getBarrierStyle = function () {
        if (this.consentTypeId !== w) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].barrier
        } else {
            return null
        }
    };
    am.prototype.getButtonStyle = function () {
        if (this.privacyAccessTypeId !== a) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].button
        } else {
            return null
        }
    };
    am.prototype.getLinkStyle = function () {
        if (this.privacyAccessTypeId !== b) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].link
        } else {
            return null
        }
    };
    am.prototype.getL2Style = function () {
        if (!this.L2Enabled) {
            return
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].l2
        } else {
            return null
        }
    };
    am.prototype.getPreferencesDialogV2Enabled = function () {
        var aq = this.getL2Style();
        if (!aq) {
            return false
        }
        return this.isMobile() ? aq.mobileEnablePreferencesDialogV2 : aq.enablePreferencesDialogV2
    };
    am.prototype.getTranslations = function () {
        return this.activeTranslations
    };
    am.prototype.formatTranslation = function (ax) {
        var av = new RegExp(z, "g"),
            au = new RegExp(u, "g"),
            aw = new RegExp(ah, "g"),
            aq = this.getConsentUrl(),
            at = this.getPrivacyPolicyLink(),
            ar = this.activeSettings.division || "";
        ax = ax.replace(av, ar).replace(au, aq).replace(aw, at);
        return ax
    };
    am.prototype.dropSuppressionCookie = function (au, aw) {
        var aq = {
            date: new Date()
        };
        var at = new Date();
        at.setDate(at.getDate() + au);
        var av = this._getConsentCookieDomainPath();
        var ar = this._getConsentCookieDomain();
        this._writeCookie(an, JSON.stringify(aq), at.toUTCString(), av, ar);
        return aq
    };
    am.prototype._getCookie = function (au) {
        var ar = this._readCookies();
        for (var at = 0; at < ar.length; at++) {
            var aq = ar[at];
            if (aq.name === au) {
                return aq
            }
        }
        return null
    };
    am.prototype._readCookies = function () {
        var ar = document.cookie.split(";");
        var at = [];
        for (var av = 0; av < ar.length; av++) {
            var ax = ar[av];
            var aw = ax.slice(0, ax.indexOf("=")).replace(/^\s+|\s+$/g, "");
            var ay = ax.slice(ax.indexOf("=") + 1);
            var aq = {
                name: aw
            };
            try {
                aq.value = JSON.parse(ay)
            } catch (au) {
                aq.value = ay
            }
            at.push(aq)
        }
        return at
    };
    am.prototype._writeCookie = function (av, ax, au, aw, at) {
        var ar = [av + "=" + ax];
        if (typeof au === "string") {
            ar.push("expires=" + au)
        }
        ar.push("path=" + aw);
        if (typeof at === "string") {
            ar.push("domain=" + at)
        }
        var aq = ar.join("; ");
        document.cookie = aq;
        return (document.cookie.indexOf(av) > -1)
    };
    am.prototype._readLocalStorage = function (ar) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (aq) {
            return false
        }
        return window.localStorage.getItem(ar)
    };
    am.prototype._writeLocalStorage = function (ar, at) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (aq) {
            return false
        }
        window.localStorage.setItem(ar, at);
        return window.localStorage.getItem(ar) !== null
    };
    am.prototype._removeLocalStorageItem = function (aq) {
        if (!window.localStorage) {
            return
        }
        window.localStorage.removeItem(aq)
    };
    am.prototype.withdrawConsent = function () {
        this._deleteConsentCookie();
        this.consentIsGiven = false;
        this.dropPixel(y);
        if (window.evidon.consentWithdrawnCallback) {
            window.evidon.consentWithdrawnCallback()
        }
    };
    am.prototype.newVendorCallback = function (aq) {
        if (window.evidon.button) {
            window.evidon.button.showNewVendorIndicator()
        }
        if (window.evidon.cmp && window.evidon.cmp.consentString) {
            window.evidon.cmp.newVendorCallback(aq)
        }
    };
    am.prototype.getOptOutApiUrl = function () {
        return ab
    };
    am.prototype.pushNavigationScreen = function (aq) {
        this.navigationStack.push(aq)
    };
    am.prototype.popNavigationScreen = function () {
        if (this.navigationStack.length < 1) {
            return null
        }
        var aq = this.navigationStack.pop();
        return aq
    };
    am.prototype.getNavigationScreenStackCount = function () {
        return this.navigationStack.length
    };
    am.prototype.setUserIdentifier = function (aq) {
        this.customerUserId = aq
    };
    var A = function () {
        this.subscriptions = {};
        this.subscribe = function (ar, aq, at) {
            if (!this.subscriptions.hasOwnProperty(ar)) {
                this.subscriptions[ar] = []
            }
            if (!at) {
                at = -1
            }
            this.subscriptions[ar].push({
                callback: aq,
                limit: at
            })
        };
        this._fireEvent = function (ar, aq) {
            if (!this.subscriptions.hasOwnProperty(ar)) {
                return
            }
            var av = this.subscriptions[ar];
            for (var at = 0; at < av.length; at++) {
                var au = av[at];
                if (au.callback && typeof au.callback === "function") {
                    au.callback.call(null, aq);
                    if (au.limit === -1) {
                        continue
                    }
                    au.limit--;
                    if (au.limit === 0) {
                        av.splice(at, 1);
                        at--
                    }
                }
            }
        }
    };
    if (!window.evidon.events) {
        window.evidon.events = new A()
    }
    if (!window.evidon.notice) {
        window.evidon.notice = new am()
    }
    if (!window.evidon.button) {
        window.evidon.button = new f()
    }
    if (!window.evidon.link) {
        window.evidon.link = new P()
    }
})();