var ACCSOffer = {
    domain: "https://support.apple.com/",
    acceptSurvey: function() {
        var e = document.getElementById("accs_survey_offer");
        null != e && (this.showThankYou(), this.launchSurvey(), this.setCookie("accs", "a", 90, "/", ".apple.com", !1))
    },
    check: function() {
        this.isAppleCom() && this.hasCookiesEnabled() && this.hasValidPOD() && this.hasGlobalHeader() && this.isSelectBrowser() && this.isSelectedSample()&&!this.isSnkp()&&!this.hasACCS() && (this.showOffer(), this.setCookie("accs", "o", 90, "/", ".apple.com", !1))
    },
    closeOffer: function() {
        var e = document.getElementsByClassName("accsoffer-wrapper");
        null != e[0] && (!e[0].classList.contains("hide")) && (e[0].classList.add("hide"))
    },
    declineSurvey: function() {
        var e = document.getElementById("accs_survey_offer");
        null != e && (this.closeOffer(), this.setCookie("accs", "d", 90, "/", ".apple.com", !1))
    },
    getAgent: function() {
        return navigator.userAgent.toLowerCase()
    },
    getCookie: function(e) {
        var o = document.cookie.match(new RegExp("(^|;)\\s*" + escape(e) + "=([^;\\s]*)"));
        return o ? unescape(o[2]) : void 0
    },
    getData: function(e) {
        var o = ACCSOffer.data[this.getPOD()];
        return void 0 != o && void 0 != o[e] ? o[e] : void 0
    },
    getPageHost: function() {
        return /^discussions\.apple\.com$/.test(window.location.hostname) ? "discussions" : /^discussionsjapan\.apple\.com$/.test(window.location.hostname) ? "discussionsjapan" : /^discussionskorea\.apple\.com$/.test(window.location.hostname) ? "discussionskorea" : /^discussionschinese\.apple\.com$/.test(window.location.hostname) ? "discussionschinese" : /^support\.apple\.com$/.test(window.location.hostname) ? "supportkb" : void 0
    },
    getPageRef: function() {
        return void 0 != this.getPageHost() ? "?r=" + this.getPageHost() : ""
    },
    getPOD: function() {
        return "discussions" == this.getPageHost() ? "us~en" : "discussionsjapan" == this.getPageHost() ? "jp~ja" : "discussionskorea" == this.getPageHost() ? "kr~ko" : "discussionschinese" == this.getPageHost() ? "cn~zh" : this.getCookie("POD")
    },
    hasACCS: function() {
        return /^[oadsb]$/.test(this.getCookie("accs"))
    },
    hasCookiesEnabled: function() {
        var e = navigator.cookieEnabled?!0 : !1;
        return "undefined" != typeof navigator.cookieEnabled || e || (document.cookie = "accs_t", e =- 1 != document.cookie.indexOf("accs_t")?!0 : !1), e
    },
    hasGlobalHeader: function() {
        var e = document.getElementById("globalheader") || document.getElementById("ac-globalnav")?!0 : !1;
        return e
    },
    hasOmniture: function() {
        return "undefined" != typeof s_account || /apple\.com/.test(window.location.hostname) && /^\/cs\/ac\//.test(window.location.pathname)
    },
    hasValidPOD: function() {
        return void 0 != this.getPOD() && void 0 != ACCSOffer.data[this.getPOD()]
    },
    injectOfferCss: function() {
        var e = document.createElement("link");
        e.rel = "stylesheet", e.href = this.domain + "etc/designs/support/publish/CSS/pattern/accs-offer.css", document.getElementsByTagName("head")[0].appendChild(e)
    },
    isAppleCom: function() {
        return /\.apple\.com$/.test(window.location.hostname)
    },
    isIE: function(e) {
        var o = e || this.getAgent();
        return !!o.match(/msie/i)
    },
    isSelectBrowser: function() {
        var e = (navigator.appName + " " + navigator.appVersion).toUpperCase();
        return - 1 == e.indexOf("WEBTV")&&-1 == e.indexOf("OPERA")
    },
    isSelectedSample: function() {
        if (void 0 != this.getData("sampling") && 0 != this.getData("sampling")
            ) {
            var e = parseInt(Math.random() * this.getData("sampling") + 1);
            return 1 === e
        }
        return !1
    },
    isSnkp: function() {
        if (this.isIE())
            return !1;
        for (var e = 0; e < navigator.mimeTypes.length; e++) {
            var o = navigator.mimeTypes[e];
            if ("x-snkp" === o.suffixes && o.enabledPlugin)
                return !0
        }
        return !1
    },
    launchSurvey: function() {
        var e = window.open(this.domain + this.getData("locale_directory") + "online-support-survey", "ACCSPopunder", "toolbar=no,menubar=no,resizable=yes,scrollbars=yes,location=no,status=no,top=0,left=0,width=500,height=700");
        e.blur(), window.focus()
    },
    load: function(e) {
        var o = window.onload;
        if ("function" != typeof window.onload) {
            if (!window.onload) {
                var r = window.addEventListener || document.addEventListener, t = window.attachEvent || document.attachEvent;
                if (r)
                    return r("load", e, !0), !0;
                if (t) {
                    var a = t("onload", e);
                    return a
                }
                return !1
            }
            window.onload = e
        } else 
            window.onload = function() {
                o(), e()
            }
    },
    loadScript: function(e) {
        for (var o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", r = 0, t = "", a = 0; 64 > a; a++)
            r = Math.floor(Math.random() * o.length), t += o.substring(r, r + 1);
        var n = document.getElementsByTagName("head").item(0), i = document.createElement("script");
        i.setAttribute("charset", "utf-8"), i.setAttribute("src", e + "?" + t), n.appendChild(i)
    },
    setCookie: function(e, o, r, t, a, n) {
        var i = new Date;
        r && i.setDate(i.getDate() + r), document.cookie = e + "=" + (o ? escape(o) : "") + (r ? ";expires=" + i.toGMTString() : "") + (t ? ";path=" + t : "") + (a ? ";domain=" + a : "") + (n ? ";secure" : "")
    },
    showOffer: function() {
        var e = document.getElementById("ac-gn-placeholder"), o = e.parentNode, r = this.getData("offer_text"), t = this.getData("offer_yes"), a = this.getData("offer_no"), n = document.createElement("div");
        n.className = "accsoffer-wrapper", n.innerHTML = '<div class="blurry-wrapper"><div class="blurry-wrapper--bg"></div></div><div id="accs_survey_offer" style=""><div id="accs_survey_offer_text" style="">' + r + '</div><div id="accs_survey_offer_buttons" style=""><button class="accs_survey_offer--button accept" onclick="ACCSOffer.acceptSurvey();" type="button" style="">' + t + '</button><button class="accs_survey_offer--button declined" type="button" style="" onclick="ACCSOffer.declineSurvey();">' + a + "</button></div></div>", o.insertBefore(n, e.nextSibling)
    },
    showThankYou: function() {
        var e = document.getElementById("accs_survey_offer_text"), o = document.getElementById("accs_survey_offer_buttons");
        e && o && (e.innerHTML = this.getData("offer_thankyou"), o.innerHTML = '<button class="accs_survey_offer--button close" onclick="ACCSOffer.closeOffer();">' + this.getData("offer_close") + "</button>")
    }
};
ACCSOffer.data = {
    "ae~en": {
        sampling: 14,
        locale_directory: "en-ae/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "ap~en": {
        sampling: 14,
        locale_directory: "en-asia/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "at~de": {
        sampling: 14,
        locale_directory: "de-at/",
        offer_text: "Wir möchten Sie zu einer kleinen Umfrage einladen, die uns helfen soll, unsere Apple Support-Website für Sie zu verbessern. Wählen Sie bitte &bdquo;Ja&rdquo;, wenn Sie teilnehmen möchten.",
        offer_yes: "Ja",
        offer_no: "Nein",
        offer_thankyou: "Vielen Dank. Die Umfrage ist unterhalb des aktuellen Browserfensters verfügbar. Bitte warten Sie mit der Teilnahme an der Umfrage bis nach dem Abschluss Ihres Besuchs.",
        offer_close: "Schließen"
    },
    "au~en": {
        sampling: 14,
        locale_directory: "en-au/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "be~fr": {
        sampling: 14,
        locale_directory: "fr-be/",
        offer_text: "Nous vous invitons à répondre à une courte enquête pour nous aider à améliorer votre utilisation de l’assistance Apple en ligne. Cliquez sur Oui si vous souhaitez y participer.",
        offer_yes: "Oui",
        offer_no: "Non",
        offer_thankyou: "Merci. L’enquête est disponible dans la partie inférieure de la fenêtre de votre navigateur. Une fois la consultation du site terminée, veuillez passer à l’enquête.",
        offer_close: "Fermer"
    },
    "be~nl": {
        sampling: 14,
        locale_directory: "nl-be/",
        offer_text: "U wordt uitgenodigd deel te nemen aan een korte enquête om ons te helpen uw online ervaring met Apple Support te verbeteren. Selecteer Ja als u wilt deelnemen.",
        offer_yes: "Ja",
        offer_no: "Nee",
        offer_thankyou: "Hartelijk dank. U vindt de enquête in uw huidig browservenster. Vul de enquête pas na uw bezoek in.",
        offer_close: "Sluit"
    },
    "br~pt": {
        sampling: 14,
        locale_directory: "pt-br/",
        offer_text: 'Você está convidado para participar de uma rápida pesquisa, que nos ajudará a aperfeiçoar sua experiência on-line com o Suporte da Apple. Selecione "Sim" se deseja participar.',
        offer_yes: "Sim",
        offer_no: "Não",
        offer_thankyou: "Obrigado. A pesquisa está disponível na janela do seu navegador atual. Aguarde até ter concluído sua visita para responder à pesquisa.",
        offer_close: "Fechar"
    },
    "ca~en": {
        sampling: 14,
        locale_directory: "en-ca/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "ca~fr": {
        sampling: 14,
        locale_directory: "fr-ca/",
        offer_text: "Nous vous invitons à répondre à une courte enquête pour nous aider à améliorer votre utilisation de l’assistance Apple en ligne. Cliquez sur Oui si vous souhaitez y participer.",
        offer_yes: "Oui",
        offer_no: "Non",
        offer_thankyou: "Merci. L’enquête est disponible dans la partie inférieure de la fenêtre de votre navigateur. Une fois la consultation du site terminée, veuillez passer à l’enquête.",
        offer_close: "Fermer"
    },
    "ch~de": {
        sampling: 14,
        locale_directory: "de-ch/",
        offer_text: "Wir möchten Sie zu einer kleinen Umfrage einladen, die uns helfen soll, unsere Apple Support-Website für Sie zu verbessern. Wählen Sie bitte &bdquo;Ja&rdquo;, wenn Sie teilnehmen möchten.",
        offer_yes: "Ja",
        offer_no: "Nein",
        offer_thankyou: "Vielen Dank. Die Umfrage ist unterhalb des aktuellen Browserfensters verfügbar. Bitte warten Sie mit der Teilnahme an der Umfrage bis nach dem Abschluss Ihres Besuchs.",
        offer_close: "Schließen"
    },
    "ch~fr": {
        sampling: 14,
        locale_directory: "fr-ch/",
        offer_text: "Nous vous invitons à répondre à une courte enquête pour nous aider à améliorer votre utilisation de l’assistance Apple en ligne. Cliquez sur Oui si vous souhaitez y participer.",
        offer_yes: "Oui",
        offer_no: "Non",
        offer_thankyou: "Merci. L’enquête est disponible dans la partie inférieure de la fenêtre de votre navigateur. Une fois la consultation du site terminée, veuillez passer à l’enquête.",
        offer_close: "Fermer"
    },
    "cn~zh": {
        sampling: 14,
        locale_directory: "zh-cn/",
        offer_text: "我们邀请您参加一个简短的调查，以帮助我们改进 Apple 支持在线体验。如果您愿意参加，请选择“是”。",
        offer_yes: "是",
        offer_no: "否",
        offer_thankyou: "谢谢。此调查可从当前的浏览器窗口中打开。请您在完成网页访问后参加本次调查。",
        offer_close: "关闭"
    },
    "de~de": {
        sampling: 14,
        locale_directory: "de-de/",
        offer_text: "Wir möchten Sie zu einer kleinen Umfrage einladen, die uns helfen soll, unsere Apple Support-Website für Sie zu verbessern. Wählen Sie bitte &bdquo;Ja&rdquo;, wenn Sie teilnehmen möchten.",
        offer_yes: "Ja",
        offer_no: "Nein",
        offer_thankyou: "Vielen Dank. Die Umfrage ist unterhalb des aktuellen Browserfensters verfügbar. Bitte warten Sie mit der Teilnahme an der Umfrage bis nach dem Abschluss Ihres Besuchs.",
        offer_close: "Schließen"
    },
    "dk~da": {
        sampling: 14,
        locale_directory: "da-dk/",
        offer_text: "Du inviteres til at deltage i en kort undersøgelse for at hjælpe os med at forbedre onlineoplevelsen med Apple-support. Vælg Ja, hvis du vil deltage.",
        offer_yes: "Ja",
        offer_no: "Nej",
        offer_thankyou: "På forhånd tak. Undersøgelsen vises under dit nuværende browservindue. Vent med at besvare undersøgelsen, indtil du har fuldført besøget.",
        offer_close: "Luk"
    },
    "es~es": {
        sampling: 14,
        locale_directory: "es-es/",
        offer_text: 'Te invitamos a responder una breve encuesta que nos ayudará a mejorar tu experiencia en línea con el Soporte técnico de Apple. Si deseas participar, selecciona "Sí".',
        offer_yes: "Sí",
        offer_no: "No",
        offer_thankyou: "Gracias. La encuesta está disponible en la ventana actual de navegación. Espere hasta haber finalizado su visita para responder la encuesta.",
        offer_close: "Cerrar"
    },
    "fi~fi": {
        sampling: 14,
        locale_directory: "fi-fi/",
        offer_text: "Pyydämme sinua vastaamaan lyhyeen kyselyyn, joka auttaa meitä parantamaan Apple-tuen verkkopalvelua. Jos haluat osallistua, valitse Kyllä.",
        offer_yes: "Kyllä",
        offer_no: "Ei",
        offer_thankyou: "Kiitos! Kysely sijaitsee nykyisen selainikkunan alla. Vastatkaa kyselyyn vasta sitten, kun olette saaneet vierailunne valmiiksi.",
        offer_close: "Sulje"
    },
    "fr~fr": {
        sampling: 14,
        locale_directory: "fr-fr/",
        offer_text: "Nous vous invitons à répondre à une courte enquête pour nous aider à améliorer votre utilisation de l’assistance Apple en ligne. Cliquez sur Oui si vous souhaitez y participer.",
        offer_yes: "Oui",
        offer_no: "Non",
        offer_thankyou: "Merci. L’enquête est disponible dans la partie inférieure de la fenêtre de votre navigateur. Une fois la consultation du site terminée, veuillez passer à l’enquête.",
        offer_close: "Fermer"
    },
    "gb~en": {
        sampling: 14,
        locale_directory: "en-gb/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "hk~en": {
        sampling: 14,
        locale_directory: "en-hk/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "hk~zh": {
        sampling: 14,
        locale_directory: "zh-hk/",
        offer_text: "我們想邀請您參加一項簡短的問卷調查，以協助我們改善您的 Apple 支援線上體驗。如果您想參加本問卷調查，請選取「是」。",
        offer_yes: "是",
        offer_no: "否",
        offer_thankyou: "謝謝您。這項問卷調查將在目前的瀏覽器視窗進行。請在造訪完網站後再填寫問卷調查即可。",
        offer_close: "關閉"
    },
    "hu~hu": {
        sampling: 14,
        locale_directory: "hu-hu/",
        offer_text: "Szeretnénk megkérni, hogy vegyél részt egy rövid felmérésben, amelynek segítségével tökéletesíteni szeretnénk az Apple-támogatás online szolgáltatásait. Válaszd ki az Igen lehetőséget, ha részt szeretnél venni a felmérésben.",
        offer_yes: "Igen",
        offer_no: "Nem",
        offer_thankyou: "Köszönjük! Az aktuális böngészőablak ablak alatt találod a felmérést. Kérünk, várj a felmérés kitöltésével addig, amíg be nem fejezted webhelyünk meglátogatását。",
        offer_close: "Bezárás"
    },
    "id~id": {
        sampling: 14,
        locale_directory: "id-id/",
        offer_text: "Anda diundang untuk berpartisipasi dalam survei singkat untuk membantu kami meningkatkan pengalaman online Dukungan Apple. Pilih Ya jika Anda ingin berpartisipasi.",
        offer_yes: "Ya",
        offer_no: "Tidak",
        offer_thankyou: "Terima kasih. Survei tersedia di jendela browser yang sedang dibuka. Tunggu hingga Anda menyelesaikan kunjungan untuk mengikuti survei ini.",
        offer_close: "Tutup"
    },
    "ie~en": {
        sampling: 14,
        locale_directory: "en-ie/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "in~en": {
        sampling: 14,
        locale_directory: "en-in/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "it~it": {
        sampling: 14,
        locale_directory: "it-it/",
        offer_text: "Gradiremmo invitarti a prendere parte a un breve sondaggio per migliorare l'esperienza con il supporto Apple online. Se desideri partecipare, seleziona Sì.",
        offer_yes: "Sì",
        offer_no: "No",
        offer_thankyou: "Grazie. Il sondaggio è aperto in una finestra sotto la finestra del vostro browser. Completate la vostra visita al sito prima di procedere con il sondaggio.",
        offer_close: "Chiudi"
    },
    "jp~ja": {
        sampling: 14,
        locale_directory: "ja-jp/",
        offer_text: "Apple サポートサイトの向上に役立てるため、簡単なアンケート調査へのご協力をお願いいたします。ご協力いただける場合は「はい」を選択してください。",
        offer_yes: "はい",
        offer_no: "いいえ",
        offer_thankyou: "ありがとうございます。アンケートには、現在開いているブラウザのウインドウからお答えいただけます。すべての必要な操作が完了してから、アンケートにご協力ください。",
        offer_close: "閉じる"
    },
    "kr~ko": {
        sampling: 14,
        locale_directory: "ko-kr/",
        offer_text: "Apple 지원 온라인 서비스 환경 개선을 위한 간단한 설문 조사를 부탁드립니다. 참여하려면 '예'를 선택해 주십시오.",
        offer_yes: "예",
        offer_no: "아니요",
        offer_thankyou: "감사합니다. 현재 열려있는 브라우저 윈도우에서 설문 조사를 진행하실 수 있습니다. 설문 조사에 참여하기 위한 방문 프로세스가 완료될 때까지 기다려주십시오.",
        offer_close: "종료"
    },
    "la~en": {
        sampling: 14,
        locale_directory: "en-lamr/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "la~es": {
        sampling: 14,
        locale_directory: "es-lamr/",
        offer_text: 'Te invitamos a responder una breve encuesta que nos ayudará a mejorar tu experiencia en línea con el Soporte técnico de Apple. Si deseas participar, selecciona "Sí".',
        offer_yes: "Sí",
        offer_no: "No",
        offer_thankyou: "Gracias. La encuesta está disponible en la ventana actual de navegación. Espere hasta haber finalizado su visita para responder la encuesta.",
        offer_close: "Cerrar"
    },
    "mx~es": {
        sampling: 14,
        locale_directory: "es-mx/",
        offer_text: 'Te invitamos a responder una breve encuesta que nos ayudará a mejorar tu experiencia en línea con el Soporte técnico de Apple. Si deseas participar, selecciona "Sí".',
        offer_yes: "Sí",
        offer_no: "No",
        offer_thankyou: "Gracias. La encuesta está disponible en la ventana actual de navegación. Espere hasta haber finalizado su visita para responder la encuesta.",
        offer_close: "Cerrar"
    },
    "my~en": {
        sampling: 14,
        locale_directory: "en-my/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "nl~nl": {
        sampling: 14,
        locale_directory: "nl-nl/",
        offer_text: "U wordt uitgenodigd deel te nemen aan een korte enquête om ons te helpen uw online ervaring met Apple Support te verbeteren. Selecteer Ja als u wilt deelnemen.",
        offer_yes: "Ja",
        offer_no: "Nee",
        offer_thankyou: "Hartelijk dank. U vindt de enquête in uw huidig browservenster. Vul de enquête pas na uw bezoek in.",
        offer_close: "Sluit"
    },
    "no~no": {
        sampling: 14,
        locale_directory: "no-no/",
        offer_text: "Du er invitert til å delta i en kort undersøkelse for å hjelpe oss med å forbedre brukeropplevelsen på Apples nettsted for kundestøtte. Velg Ja hvis du vil delta.",
        offer_yes: "Ja",
        offer_no: "Nei",
        offer_thankyou: "Takk. Undersøkelsen er tilgjengelig under nettleservinduet du har åpent. Vent med å gjennomføre undersøkelsen til etter at du har fullført besøket.",
        offer_close: "Lukk"
    },
    "nz~en": {
        sampling: 14,
        locale_directory: "en-nz/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "pl~pl": {
        sampling: 14,
        locale_directory: "pl-pl/",
        offer_text: "Zapraszamy do wypełnienia krótkiej ankiety, która pozwoli nam poprawić jakość internetowego Wsparcia Apple. Aby wziąć udział w ankiecie, należy wybrać opcję Tak.",
        offer_yes: "Tak",
        offer_no: "Nie",
        offer_thankyou: "Dziękujemy. Ankieta jest dostępna pod bieżącym oknem przeglądarki. Prosimy o wypełnienie jej po zakończeniu trwającej wizyty.",
        offer_close: "Zamknij"
    },
    "pt~pt": {
        sampling: 14,
        locale_directory: "pt-pt/",
        offer_text: "Está convidado a participar num pequeno inquérito para nos ajudar a melhorar a sua experiência online com o Suporte Apple. Seleccione Sim, caso pretenda participar.",
        offer_yes: "Sim",
        offer_no: "Não",
        offer_thankyou: "Obrigado. O inquérito estará disponível na janela do navegador actual. Aguarde até completar a sua visita para participar no inquérito.",
        offer_close: "Fechar"
    },
    "ru~ru": {
        sampling: 14,
        locale_directory: "ru-ru/",
        offer_text: "Мы приглашаем Вас принять участие в небольшом исследовании, целью которого является усовершенствование взаимодействия со службой поддержки Apple в Интернете. Если Вы хотите принять участие, выберите «Да».",
        offer_yes: "Да",
        offer_no: "Нет",
        offer_thankyou: "Спасибо. Форма опроса находится в нижней части текущего окна браузера. Прежде чем принять участие в исследовании, завершите обращение в службу поддержки.",
        offer_close: "Закрыть"
    },
    "sa~en": {
        sampling: 14,
        locale_directory: "en-sa/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "se~sv": {
        sampling: 14,
        locale_directory: "sv-se/",
        offer_text: "Om du vill kan du delta i en kort undersökning som hjälper oss att förbättra din onlineupplevelse av Apple-supporten. Välj Ja om du vill delta.",
        offer_yes: "Ja",
        offer_no: "Nej",
        offer_thankyou: "Tack. Undersökningen finns bakom det nuvarande webbläsarfönstret. Vänta med undersökningen till efter besöket.",
        offer_close: "Stäng"
    },
    "sg~en": {
        sampling: 14,
        locale_directory: "en-sg/",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    },
    "th~th": {
        sampling: 14,
        locale_directory: "th-th/",
        offer_text: "คุณได้รับเชิญให้เข้าร่วมตอบแบบสำรวจสั้นๆ เพื่อช่วยให้เราปรับปรุงการใช้งานออนไลน์สำหรับการสนับสนุน Apple ของคุณ โปรดเลือก ใช่ หากคุณต้องการเข้าร่วม",
        offer_yes: "ใช่",
        offer_no: "ไม่",
        offer_thankyou: "ขอบคุณ มีแบบสำรวจอยู่ภายใต้หน้าต่างเบราว์เซอร์ปัจจุบันของคุณ หลังจากคุณเข้าชมแล้วทำแบบสำรวจสำเร็จ โปรดรอสักครู่",
        offer_close: "ปิด"
    },
    "tr~tr": {
        sampling: 14,
        locale_directory: "tr-tr/",
        offer_text: "Apple Destek çevrimiçi deneyiminizi geliştirmemize yardımcı olmak üzere kısa bir ankette yer almanız için davet ediliyorsunuz. Katılmak istiyorsanız lütfen Evet'i seçin.",
        offer_yes: "Evet",
        offer_no: "Hayır",
        offer_thankyou: "Teşekkürler. Anket geçerli tarayıcı pencerenizde yer almaktadır. Lütfen anketi doldurmak üzere ziyaretiniz bitinceye kadar bekleyin.",
        offer_close: "Kapat"
    },
    "tw~zh": {
        sampling: 14,
        locale_directory: "zh-tw/",
        offer_text: "我們想邀請您參加一項簡短的問卷調查，以協助我們改善您的 Apple 支援線上體驗。如果您想參加本問卷調查，請選取「是」。",
        offer_yes: "是",
        offer_no: "否",
        offer_thankyou: "謝謝您。這項問卷調查將在目前的瀏覽器視窗進行。請在造訪完網站後再填寫問卷調查即可。",
        offer_close: "關閉"
    },
    "us~en": {
        sampling: 14,
        locale_directory: "",
        offer_text: "You are invited to take part in a short survey to help us improve your Apple Support online experience. Please select Yes if you would like to participate.",
        offer_yes: "Yes",
        offer_no: "No",
        offer_thankyou: "Thank you. The survey is available under your current browser window. Please wait until after you have completed your visit to take the survey.",
        offer_close: "Close"
    }
}, ACCSOffer.load(function() {
    ACCSOffer.injectOfferCss(), ACCSOffer.check()
});