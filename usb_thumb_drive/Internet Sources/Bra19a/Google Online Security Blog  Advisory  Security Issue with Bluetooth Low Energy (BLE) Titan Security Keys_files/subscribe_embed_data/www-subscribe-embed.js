(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;ea=ia.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ma(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ma("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ma("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=na(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function oa(){oa=function(){};
la.Symbol||(la.Symbol=pa)}
function qa(a,b){this.f=a;ka(this,"description",{configurable:!0,writable:!0,value:b})}
qa.prototype.toString=function(){return this.f};
var pa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new qa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ra(){oa();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sa(aa(this))}});
ra=function(){}}
function sa(a){ra();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||ua});
ma("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.f=[];var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.o()})}this.f.push(g)};
var e=la.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.f=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.O),reject:g(this.o)}};
b.prototype.O=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.W(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.G(g):this.v(g)}};
b.prototype.G=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.ca(h,g):this.v(g)};
b.prototype.o=function(g){this.w(2,g)};
b.prototype.v=function(g){this.w(1,g)};
b.prototype.w=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.D()};
b.prototype.D=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.W=function(g){var h=this.l();g.X(h.resolve,h.reject)};
b.prototype.ca=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(u){try{l(r(u))}catch(H){n(H)}}:q}
var l,n,t=new b(function(r,q){l=r;n=q});
this.X(k(g,l),k(h,n));return t};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.X=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=ba(g),n=l.next();!n.done;n=l.next())d(n.value).X(h,k)})};
b.all=function(g){var h=ba(g),k=h.next();return k.done?d([]):new b(function(l,n){function t(u){return function(H){r[u]=H;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).X(t(r.length-1),n),k=h.next();while(!k.done)})};
return b});
var va=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ma("Reflect.construct",function(){return va});
ma("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ta(k,g)){var l=new c;ka(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ta(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&ta(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.f)?delete k[g][this.f]:!1};
return b});
ma("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return sa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&ta(h.g,l))for(var t=0;t<n.length;t++){var r=n[t];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:t,C:r}}return{id:l,list:n,index:-1,C:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=ba(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(ba([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(t){return!1}}())return a;
ra();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.C?l.C.value=k:(l.C={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.C),this.f.previous.next=l.C,this.f.previous=l.C,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.C&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.C.previous.next=h.C.next,h.C.next.previous=h.C.previous,h.C.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).C};
e.prototype.get=function(h){return(h=d(this,h).C)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ma("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ra();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ma("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==na(this,b,"includes").indexOf(b,c||0)}});
var p=this||self;function v(a){return void 0!==a}
function w(a){return"string"==typeof a}
function x(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function wa(){}
function ya(a){a.fa=void 0;a.A=function(){return a.fa?a.fa:a.fa=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Ha:y=Ia;return y.apply(null,arguments)}
function Ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var Ka=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=p;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&v(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function A(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var B=window;function La(a){if(Error.captureStackTrace)Error.captureStackTrace(this,La);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(La,Error);La.prototype.name="CustomError";var Ma;function Na(a,b){this.f=a===Oa&&b||"";this.g=Pa}
Na.prototype.U=!0;Na.prototype.T=function(){return this.f};
Na.prototype.toString=function(){return"Const{"+this.f+"}"};
var Pa={},Oa={},Qa=new Na(Oa,"");var Ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(w(a))return w(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Sa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=w(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Ta=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=w(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ua=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Va=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=w(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Wa(a,b){a:{var c=a.length;for(var d=w(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:w(a)?a.charAt(c):a[c]}
function Ya(a,b){return 0<=Ra(a,b)}
function Za(a){return Array.prototype.concat.apply([],arguments)}
function $a(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ab(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function bb(a,b,c,d){return Array.prototype.splice.apply(a,cb(arguments,1))}
function cb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function db(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Aa(d))for(var e=0;e<d.length;e+=8192)for(var f=db.apply(null,cb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function fb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function gb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a){for(var b in a)return!1;return!0}
function kb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function lb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=lb(a[c]);return b}return a}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ob(a,b,c){this.f=a===pb&&b||"";this.g=a===pb&&c||null;this.i=qb}
ob.prototype.U=!0;ob.prototype.T=function(){return this.f.toString()};
var qb={},pb={};var rb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function sb(a,b){for(var c=0,d=rb(String(a)).split("."),e=rb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=tb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||tb(0==h[2].length,0==k[2].length)||tb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function tb(a,b){return a<b?-1:a>b?1:0}
;function ub(a,b){this.f=a===vb&&b||"";this.g=wb}
ub.prototype.U=!0;ub.prototype.T=function(){return this.f.toString()};
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,wb={},vb={};var yb;a:{var zb=p.navigator;if(zb){var Ab=zb.userAgent;if(Ab){yb=Ab;break a}}yb=""}function D(a){return-1!=yb.indexOf(a)}
;function Bb(){return D("Firefox")||D("FxiOS")}
function Cb(){return D("Safari")&&!(Db()||D("Coast")||D("Opera")||D("Edge")||D("Edg/")||D("OPR")||Bb()||D("Silk")||D("Android"))}
function Db(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function Eb(){return D("Android")&&!(Db()||Bb()||D("Opera")||D("Silk"))}
;function Fb(){this.f="";this.g=Gb}
Fb.prototype.U=!0;Fb.prototype.T=function(){return this.f.toString()};
function Hb(a){return a instanceof Fb&&a.constructor===Fb&&a.g===Gb?a.f:"type_error:SafeHtml"}
var Gb={};function Ib(a){var b=new Fb;b.f=a;return b}
Ib("<!DOCTYPE html>");var Jb=Ib("");Ib("<br>");var Kb=eb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Hb(Jb);return!b.parentElement});
function Lb(a,b){if(Kb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Hb(b)}
function Mb(a){var b=new ob(pb,Qa instanceof Na&&Qa.constructor===Na&&Qa.g===Pa?Qa.f:"type_error:Const",null);a.src=b.g?b.g:(b instanceof ob&&b.constructor===ob&&b.i===qb?b.f:"type_error:TrustedResourceUrl").toString()}
;function Nb(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Ob(a){var b=w(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(c,d,e){return d+e.toUpperCase()})}
;function Pb(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function Qb(){return Pb()||D("iPad")||D("iPod")}
;function Rb(a){Rb[" "](a);return a}
Rb[" "]=wa;function Sb(a,b){var c=Tb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ub=D("Opera"),E=D("Trident")||D("MSIE"),Vb=D("Edge"),Wb=Vb||E,Xb=D("Gecko")&&!(-1!=yb.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Yb=-1!=yb.toLowerCase().indexOf("webkit")&&!D("Edge"),Zb=D("Macintosh"),$b=D("Windows"),ac=D("Android"),bc=Pb(),cc=D("iPad"),dc=D("iPod"),ec=Qb();function fc(){var a=p.document;return a?a.documentMode:void 0}
var gc;a:{var hc="",ic=function(){var a=yb;if(Xb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Vb)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Yb)return/WebKit\/(\S+)/.exec(a);if(Ub)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ic&&(hc=ic?ic[1]:"");if(E){var kc=fc();if(null!=kc&&kc>parseFloat(hc)){gc=String(kc);break a}}gc=hc}var lc=gc,Tb={};function mc(a){return Sb(a,function(){return 0<=sb(lc,a)})}
var nc;nc=p.document&&E?fc():void 0;var oc=Bb(),pc=Pb()||D("iPod"),qc=D("iPad"),rc=Eb(),sc=Db(),tc=Cb()&&!Qb();var uc={},vc=null;function wc(a){this.f=a||{cookie:""}}
m=wc.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');v(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ka()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=rb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=v(this.get(a));this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=rb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var xc=new wc("undefined"==typeof document?null:document);var yc=!Xb&&!E||E&&9<=Number(nc)||Xb&&mc("1.9.1"),zc=E&&!mc("9");function G(a,b){this.x=v(a)?a:0;this.y=v(b)?b:0}
m=G.prototype;m.clone=function(){return new G(this.x,this.y)};
m.equals=function(a){return a instanceof G&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Ac(a,b){return new G(a.x-b.x,a.y-b.y)}
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Bc(a,b){this.width=a;this.height=b}
m=Bc.prototype;m.clone=function(){return new Bc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Cc(a){return a?new Dc(Ec(a)):Ma||(Ma=new Dc)}
function I(a){return w(a)?document.getElementById(a):a}
function Fc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Gc(document,"*",a,b)}
function J(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Gc(c,"*",a,b)[0]||null}return c||null}
function Gc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Ya(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Hc(a,b){fb(b,function(c,d){c&&"object"==typeof c&&c.U&&(c=c.T());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Ic.hasOwnProperty(d)?a.setAttribute(Ic[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Ic={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Jc(a){a=a.document;a=Kc(a)?a.documentElement:a.body;return new Bc(a.clientWidth,a.clientHeight)}
function Lc(a){var b=Mc(a);a=Nc(a);return E&&mc("10")&&a.pageYOffset!=b.scrollTop?new G(b.scrollLeft,b.scrollTop):new G(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Mc(a){return a.scrollingElement?a.scrollingElement:!Yb&&Kc(a)?a.documentElement:a.body||a.documentElement}
function Nc(a){return a.parentWindow||a.defaultView}
function Kc(a){return"CSS1Compat"==a.compatMode}
function Oc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Pc(a){return yc&&void 0!=a.children?a.children:Sa(a.childNodes,function(b){return 1==b.nodeType})}
function Qc(a){return Da(a)&&1==a.nodeType}
function Rc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ec(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Sc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Ec(a).createTextNode(String(b)))}}
function Tc(a,b){var c=[];return Uc(a,b,c,!0)?c[0]:void 0}
function Uc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Uc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Vc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Wc={IMG:" ",BR:"\n"};function Xc(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Yc(a)||$c(a)):Yc(a)&&$c(a))&&E){var c;!Ca(a.getBoundingClientRect)||E&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Yc(a){return E&&!mc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function $c(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function ad(a){if(zc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];bd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");zc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function bd(a,b,c){if(!(a.nodeName in Vc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Wc)b.push(Wc[a.nodeName]);else for(a=a.firstChild;a;)bd(a,b,c),a=a.nextSibling}
function cd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return dd(a,function(f){return(!e||f.nodeName==e)&&(!c||w(f.className)&&Ya(f.className.split(/\s+/),c))},!0,d)}
function K(a,b){return cd(a,null,b,void 0)}
function dd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Dc(a){this.f=a||p.document||document}
Dc.prototype.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
Dc.prototype.createElement=function(a){return this.f.createElement(String(a))};
Dc.prototype.appendChild=function(a,b){a.appendChild(b)};
Dc.prototype.isElement=Qc;var ed=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function fd(a){return a.match(ed)}
function gd(a){return a?decodeURI(a):a}
function hd(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function id(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)id(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function jd(a,b){for(var c=[],d=b||0;d<a.length;d+=2)id(a[d],a[d+1],c);return c.join("&")}
function kd(a){var b=[],c;for(c in a)id(c,a[c],b);return b.join("&")}
function ld(a,b){var c=2==arguments.length?jd(arguments[1],0):jd(arguments,1);return hd(a,c)}
function md(a,b){var c=kd(b);return hd(a,c)}
;function nd(a){var b=od;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function pd(){var a=[];nd(function(b){a.push(b)});
return a}
var od={Db:"allow-forms",Eb:"allow-modals",Fb:"allow-orientation-lock",Gb:"allow-pointer-lock",Hb:"allow-popups",Ib:"allow-popups-to-escape-sandbox",Jb:"allow-presentation",Kb:"allow-same-origin",Lb:"allow-scripts",Mb:"allow-top-navigation",Nb:"allow-top-navigation-by-user-activation"},qd=eb(function(){return pd()});
function rd(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};C(qd(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function sd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=sd.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new sd(this.top,this.right,this.bottom,this.left)};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function td(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
td.prototype.clone=function(){return new td(this.left,this.top,this.width,this.height)};
td.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
td.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
td.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ud(a,b,c){if(w(b))(b=vd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=vd(c,d);f&&(c.style[f]=e)}}
var wd={};function vd(a,b){var c=wd[b];if(!c){var d=Nb(b);c=d;void 0===a.style[d]&&(d=(Yb?"Webkit":Xb?"Moz":E?"ms":Ub?"O":null)+Ob(d),void 0!==a.style[d]&&(c=d));wd[b]=c}return c}
function xd(a,b){var c=Ec(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function yd(a,b){return xd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function zd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}E&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Ad(a){if(E&&!(8<=Number(nc)))return a.offsetParent;var b=Ec(a),c=yd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=yd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Bd(a){for(var b=new sd(0,Infinity,Infinity,0),c=Cc(a),d=c.f.body,e=c.f.documentElement,f=Mc(c.f);a=Ad(a);)if(!(E&&0==a.clientWidth||Yb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=yd(a,"overflow")){var g=Cd(a),h=new G(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Jc(Nc(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Cd(a){var b=Ec(a),c=new G(0,0);var d=b?Ec(b):document;d=!E||9<=Number(nc)||Kc(Cc(d).f)?d.documentElement:d.body;if(a==d)return c;a=zd(a);b=Lc(Cc(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Dd(a){a=zd(a);return new G(a.left,a.top)}
function Ed(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Fd(a){var b=Gd;if("none"!=yd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Gd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Yb&&!b&&!c;return v(b)&&!d||!a.getBoundingClientRect?new Bc(b,c):(a=zd(a),new Bc(a.right-a.left,a.bottom-a.top))}
function Hd(a){var b=Cd(a);a=Fd(a);return new td(b.x,b.y,a.width,a.height)}
function Id(a){return"rtl"==yd(a,"direction")}
function Jd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Kd(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Jd(a,c):0}
var Ld={thin:2,medium:4,thick:6};function Md(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Ld?Ld[c]:Jd(a,c)}
;var Nd=(new Date).getTime();function Od(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Pd=window,Qd=document,Rd=Pd.location;function Sd(){}
var Td=/\[native code\]/;function L(a,b,c){return a[b]=a[b]||c}
function Ud(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Vd(){var a;if((a=Object.create)&&Td.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Wd=L(Pd,"gapi",{});var M;M=L(Pd,"___jsl",Vd());L(M,"I",0);L(M,"hel",10);function Xd(){var a=Rd.href;if(M.dpo)var b=M.h;else{b=M.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Yd(a){var b=L(M,"PQ",[]);M.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Zd(a){return L(L(M,"H",Vd()),a,Vd())}
;function $d(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(t){for(var r=g,q=0;64>q;q+=4)r[q/4]=t[q]<<24|t[q+1]<<16|t[q+2]<<8|t[q+3];for(q=16;80>q;q++)t=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(t<<1|t>>>31)&4294967295;t=e[0];var u=e[1],H=e[2],F=e[3],Xa=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var fa=F^u&(H^F);var xa=1518500249}else fa=u^H^F,xa=1859775393;else 60>q?(fa=u&H|F&(u|H),xa=2400959708):(fa=u^H^F,xa=3395469782);fa=((t<<5|t>>>27)&4294967295)+fa+Xa+xa+r[q]&4294967295;Xa=F;F=H;H=(u<<30|u>>>2)&4294967295;u=t;t=fa}e[0]=e[0]+t&4294967295;e[1]=e[1]+
u&4294967295;e[2]=e[2]+H&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Xa&4294967295}
function c(t,r){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var q=[],u=0,H=t.length;u<H;++u)q.push(t.charCodeAt(u));t=q}r||(r=t.length);q=0;if(0==l)for(;q+64<r;)b(t.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=t[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(t.slice(q,q+64)),q+=64,n+=64}
function d(){var t=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var u=24;0<=u;u-=8)t[r++]=e[q]>>u&255;return t}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ua:function(){for(var t=d(),r="",q=0;q<t.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(t[q]/16))+"0123456789ABCDEF".charAt(t[q]%16);return r}}}
;function ae(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],C(d,function(h){e.push(h)}),be(e.join(" "));
var f=[],g=[];C(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(h){e.push(h)});
a=be(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function be(a){var b=$d();b.update(a);return b.Ua().toLowerCase()}
;function ce(a){var b=Od(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new wc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new wc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,ae(Od(d),b,a||null)].join(" "):null}return null}
;var de=L(M,"perf",Vd());L(de,"g",Vd());var ee=L(de,"i",Vd());L(de,"r",[]);Vd();Vd();function fe(a,b,c){b&&0<b.length&&(b=ge(b),c&&0<c.length&&(b+="___"+ge(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=L(ee,"_p",Vd()),L(b,c,Vd())[a]=(new Date).getTime(),b=de.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function ge(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var he=Vd(),ie=[];function je(a){throw Error("Bad hint"+(a?": "+a:""));}
ie.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?M[b]=L(M,b,[]).concat(c):L(M,b,c)}if(b=a.u)a=L(M,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var ke=/^(\/[a-zA-Z0-9_\-]+)+$/,le=[/\/amp\//,/\/amp$/,/^\/amp$/],me=/^[a-zA-Z0-9\-_\.,!]+$/,ne=/^gapi\.loaded_[0-9]+$/,oe=/^[a-zA-Z0-9,._-]+$/;function pe(a,b,c,d){var e=a.split(";"),f=e.shift(),g=he[f],h=null;g?h=g(e,b,c,d):je("no hint processor for: "+f);h||je("failed to generate load url");b=h;c=b.match(qe);(d=b.match(re))&&1===d.length&&se.test(b)&&c&&1===c.length||je("failed sanity: "+a);return h}
function te(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=ue(a);ne.test(c)||je("invalid_callback");b=ve(b);d=d&&d.length?ve(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ia?"/am="+e(a.ia):"",a.Fa?"/rs="+e(a.Fa):"",a.Pa?"/t="+e(a.Pa):"","/cb=",e(c)].join("")}
function ue(a){"/"!==a.charAt(0)&&je("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))je("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");ke.test(b)||je("invalid_prefix");c=0;for(d=le.length;c<d;++c)le[c].test(b)&&je("invalid_prefix");c=we(a,
"k",!0);d=we(a,"am");e=we(a,"rs");a=we(a,"t");return{pathPrefix:b,version:c,ia:d,Fa:e,Pa:a}}
function ve(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");oe.test(e)&&b.push(e)}return b.join(",")}
function we(a,b,c){a=a[b];!a&&c&&je("missing: "+b);if(a){if(me.test(a))return a;je("invalid: "+b)}return null}
var se=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,re=/\/cb=/g,qe=/\/\//g;function xe(){var a=Xd();if(!a)throw Error("Bad hint");return a}
he.m=function(a,b,c,d){(a=a[0])||je("missing_hint");return"https://apis.google.com"+te(a,b,c,d)};
var ye=decodeURI("%73cript"),ze=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Ae(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Be(){var a=M.nonce;return void 0!==a?a&&a===String(a)&&a.match(ze)?a:M.nonce=null:Qd.querySelector?(a=Qd.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(ze)?M.nonce=a:M.nonce=null):null:null}
function Ce(a){if("loading"!=Qd.readyState)De(a);else{var b=Be(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+ye+' src="'+encodeURI(a)+'"'+c+"></"+ye+">";Qd.write(a)}}
function De(a){var b=Qd.createElement(ye);b.setAttribute("src",a);a=Be();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Qd.getElementsByTagName(ye)[0])?a.parentNode.insertBefore(b,a):(Qd.head||Qd.body||Qd.documentElement).appendChild(b)}
function Ee(a,b){var c=b&&b._c;if(c)for(var d=0;d<ie.length;d++){var e=ie[d][0],f=ie[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Fe(a,b,c){Ge(function(){var d=b===Xd()?L(Wd,"_",Vd()):Vd();d=L(Zd(b),"_",d);a(d)},c)}
function He(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ee(a,c);var d=a?a.split(":"):[],e=c.h||xe(),f=L(M,"ah",Vd());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,n=l;l&&l.hint==k||(n={hint:k,features:[]},g.push(n));n.features.push(h)}var t=g.length;if(1<t){var r=c.callback;r&&(c.callback=function(){0==--t&&r()})}for(;d=g.shift();)Ie(d.features,c,d.hint)}else Ie(d||[],c,e)}
function Ie(a,b,c){function d(fa,xa){if(t)return 0;Pd.clearTimeout(n);r.push.apply(r,u);var jc=((Wd||{}).config||{}).update;jc?jc(f):f&&L(M,"cu",[]).push(f);if(xa){fe("me0",fa,q);try{Fe(xa,c,l)}finally{fe("me1",fa,q)}}return 1}
a=Ud(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var n=null,t=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=L(Zd(c),"r",[]).sort();var r=L(Zd(c),"L",[]).sort(),q=[].concat(k);0<g&&(n=Pd.setTimeout(function(){t=!0;h()},g));
var u=Ae(a,r);if(u.length){u=Ae(a,k);var H=L(M,"CP",[]),F=H.length;H[F]=function(fa){function xa(){var Zc=H[F+1];Zc&&Zc()}
function jc(Zc){H[F]=null;d(u,fa)&&Yd(function(){e&&e();Zc()})}
if(!fa)return 0;fe("ml1",u,q);0<F&&H[F-1]?H[F]=function(){jc(xa)}:jc(xa)};
if(u.length){var Xa="loaded_"+M.I++;Wd[Xa]=function(fa){H[F](fa);Wd[Xa]=null};
a=pe(c,u,"gapi."+Xa,k);k.push.apply(k,u);fe("ml0",u,q);b.sync||Pd.___gapisync?Ce(a):De(a)}else H[F](Sd)}else d(u)&&e&&e()}
function Ge(a,b){if(M.hee&&0<M.hel)try{return a()}catch(c){b&&b(c),M.hel--,He("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Wd.load=function(a,b){return Ge(function(){return He(a,b)})};function Je(a,b){this.i=a;this.l=b;this.g=0;this.f=null}
Je.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function Ke(a,b){a.l(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Le(a){p.setTimeout(function(){throw a;},0)}
var Me;
function Ne(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Mb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Hb(Jb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(k){if(("*"==h||k.origin==h)&&k.data==
g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(v(c.next)){c=c.next;var e=c.ka;c.ka=null;e()}};
return function(e){d.next={ka:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){p.setTimeout(e,0)}}
;function Oe(){this.g=this.f=null}
var Qe=new Je(function(){return new Pe},function(a){a.reset()});
Oe.prototype.add=function(a,b){var c=Qe.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Oe.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Pe(){this.next=this.scope=this.f=null}
Pe.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Pe.prototype.reset=function(){this.next=this.scope=this.f=null};function Re(a,b){Se||Te();Ue||(Se(),Ue=!0);Ve.add(a,b)}
var Se;function Te(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Se=function(){a.then(We)}}else Se=function(){var b=We;
!Ca(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Me||(Me=Ne()),Me(b)):p.setImmediate(b)}}
var Ue=!1,Ve=new Oe;function We(){for(var a;a=Ve.remove();){try{a.f.call(a.scope)}catch(b){Le(b)}Ke(Qe,a)}Ue=!1}
;function Xe(){this.g=-1}
;function Ye(){this.g=64;this.f=[];this.v=[];this.w=[];this.l=[];this.l[0]=128;for(var a=1;a<this.g;++a)this.l[a]=0;this.o=this.i=0;this.reset()}
A(Ye,Xe);Ye.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.o=this.i=0};
function Ze(a,b,c){c||(c=0);var d=a.w;if(w(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):(f=c^g^h,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Ye.prototype.update=function(a,b){if(null!=a){v(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Ze(this,a,d),d+=this.g;if(w(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Ze(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Ze(this,e);f=0;break}}this.i=f;this.o+=b}};
Ye.prototype.digest=function(){var a=[],b=8*this.o;56>this.i?this.update(this.l,56-this.i):this.update(this.l,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.v[c]=b&255,b/=256;Ze(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function $e(){this.i=this.i;this.l=this.l}
$e.prototype.i=!1;$e.prototype.Z=function(){return this.i};
$e.prototype.dispose=function(){this.i||(this.i=!0,this.ea())};
$e.prototype.ea=function(){if(this.l)for(;this.l.length;)this.l.shift()()};
function af(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function bf(a){if(a.classList)return a.classList;a=a.className;return w(a)&&a.match(/\S+/g)||[]}
function N(a,b){return a.classList?a.classList.contains(b):Ya(bf(a),b)}
function O(a,b){a.classList?a.classList.add(b):N(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function cf(a,b){if(a.classList)C(b,function(e){O(a,e)});
else{var c={};C(bf(a),function(e){c[e]=!0});
C(b,function(e){c[e]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function P(a,b){a.classList?a.classList.remove(b):N(a,b)&&(a.className=Sa(bf(a),function(c){return c!=b}).join(" "))}
function df(a,b){a.classList?C(b,function(c){P(a,c)}):a.className=Sa(bf(a),function(c){return!Ya(b,c)}).join(" ")}
function ef(a,b,c){c?O(a,b):P(a,b)}
function ff(a,b,c){N(a,b)&&(P(a,b),O(a,c))}
function gf(a,b){var c=!N(a,b);ef(a,b,c)}
;var hf=!E&&!Cb();function jf(a,b){if(/-[a-z]/.test(b))return null;if(hf&&a.dataset){if(Eb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var kf="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function lf(){}
lf.prototype.next=function(){throw kf;};
lf.prototype.L=function(){return this};
function mf(a){if(a instanceof lf)return a;if("function"==typeof a.L)return a.L(!1);if(Ba(a)){var b=0,c=new lf;c.next=function(){for(;;){if(b>=a.length)throw kf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function nf(a,b){if(Ba(a))try{C(a,b,void 0)}catch(c){if(c!==kf)throw c;}else{a=mf(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==kf)throw c;}}}
function of(a){if(Ba(a))return $a(a);a=mf(a);var b=[];nf(a,function(c){b.push(c)});
return b}
;function pf(a,b){this.i={};this.f=[];this.M=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof pf)for(c=qf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function qf(a){rf(a);return a.f.concat()}
m=pf.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||sf;rf(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function sf(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.i={};this.M=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.g--,this.M++,this.f.length>2*this.g&&rf(this),!0):!1};
function rf(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.g++,this.f.push(a),this.M++);this.i[a]=b};
m.forEach=function(a,b){for(var c=qf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new pf(this)};
m.L=function(a){rf(this);var b=0,c=this.M,d=this,e=new lf;e.next=function(){if(c!=d.M)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw kf;var f=d.f[b++];return a?f:d.i[f]};
return e};function tf(a){var b=[];uf(new vf,a,b);return b.join("")}
function vf(){}
function uf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),uf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),wf(d,c),c.push(":"),uf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":wf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var xf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},yf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function wf(a,b){b.push('"',a.replace(yf,function(c){var d=xf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),xf[c]=d);return d}),'"')}
;var zf=function(){if($b){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(yb))?a[1]:"0"}return Zb?(a=/10[_.][0-9_.]+/,(a=a.exec(yb))?a[0].replace(/_/g,"."):"10"):ac?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(yb))?a[1]:""):bc||cc||dc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(yb))?a[1].replace(/_/g,"."):""):""}();function Af(a){return(a=a.exec(yb))?a[1]:""}
var Bf=function(){if(oc)return Af(/Firefox\/([0-9.]+)/);if(E||Vb||Ub)return lc;if(sc)return Qb()?Af(/CriOS\/([0-9.]+)/):Af(/Chrome\/([0-9.]+)/);if(tc&&!Qb())return Af(/Version\/([0-9.]+)/);if(pc||qc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(yb);if(a)return a[1]+"."+a[2]}else if(rc)return(a=Af(/Android\s+([0-9.]+)/))?a:Af(/Version\/([0-9.]+)/);return""}();function Cf(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=yd(h,"position")){var l=Cd(h);if(!k){k=Id(h);var n;if(n=k){if(n=tc)n=0<=sb(Bf,10);var t;if(t=ec)t=0<=sb(zf,10);n=Xb||n||t}k=n?-h.scrollLeft:!k||Wb&&mc("8")||"visible"==yd(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;l=Ac(l,new G(k,h.scrollTop))}}}h=l||new G;l=Hd(a);if(k=Bd(a)){var r=new td(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(l.left,r.left);n=
Math.min(l.left+l.width,r.left+r.width);k<=n&&(t=Math.max(l.top,r.top),r=Math.min(l.top+l.height,r.top+r.height),t<=r&&(l.left=k,l.top=t,l.width=n-k,l.height=r-t))}k=Cc(a);t=Cc(c);if(k.f!=t.f){n=k.f.body;t=Nc(t.f);r=new G(0,0);var q=(q=Ec(n))?Nc(q):window;b:{try{Rb(q.parent);var u=!0;break b}catch(Xa){}u=!1}if(u){u=n;do{var H=q==t?Cd(u):Dd(u);r.x+=H.x;r.y+=H.y}while(q&&q!=t&&q!=q.parent&&(u=q.frameElement)&&(q=q.parent))}u=Ac(r,Cd(n));!E||9<=Number(nc)||Kc(k.f)||(u=Ac(u,Lc(k.f)));l.left+=u.x;l.top+=
u.y}a=Df(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new G(b,l.top+(a&1?l.height:0));b=Ac(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var F;g&&(F=Bd(c))&&(F.top-=h.y,F.right-=h.x,F.bottom-=h.y,F.left-=h.x);return Ef(b,c,d,f,F,g,void 0)}
function Ef(a,b,c,d,e,f,g){a=a.clone();var h=Df(b,c);c=Fd(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var k=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,
l+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,l+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new td(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;a=new G(f.left,f.top);a instanceof G?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=Ed(g,!1);b.style.top=Ed(a,!1);g=new Bc(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,a=Kc(Cc(Ec(b)).f),!E||mc("10")||a&&mc("8")?(b=b.style,Xb?b.MozBoxSizing="border-box":Yb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(g=b.style,a?(E?(a=Kd(b,"paddingLeft"),f=Kd(b,"paddingRight"),d=Kd(b,"paddingTop"),h=Kd(b,"paddingBottom"),a=new sd(d,f,h,a)):(a=xd(b,"paddingLeft"),f=xd(b,"paddingRight"),d=xd(b,"paddingTop"),h=xd(b,"paddingBottom"),a=new sd(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),!E||9<=Number(nc)?(f=xd(b,"borderLeftWidth"),d=xd(b,"borderRightWidth"),h=xd(b,"borderTopWidth"),b=xd(b,"borderBottomWidth"),b=new sd(parseFloat(h),parseFloat(d),parseFloat(b),parseFloat(f))):(f=Md(b,"borderLeft"),
d=Md(b,"borderRight"),h=Md(b,"borderTop"),b=Md(b,"borderBottom"),b=new sd(h,d,b,f)),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function Df(a,b){return(b&8&&Id(a)?b^4:b)&-9}
;function Ff(a){this.f=0;this.w=void 0;this.l=this.g=this.i=null;this.o=this.v=!1;if(a!=wa)try{var b=this;a.call(void 0,function(c){Gf(b,2,c)},function(c){Gf(b,3,c)})}catch(c){Gf(this,3,c)}}
function Hf(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
Hf.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var If=new Je(function(){return new Hf},function(a){a.reset()});
function Jf(a,b,c){var d=If.get();d.g=a;d.onRejected=b;d.context=c;return d}
Ff.prototype.then=function(a,b,c){return Kf(this,Ca(a)?a:null,Ca(b)?b:null,c)};
Ff.prototype.$goog_Thenable=!0;Ff.prototype.cancel=function(a){0==this.f&&Re(function(){var b=new Lf(a);Mf(this,b)},this)};
function Mf(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Mf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Nf(c),Of(c,e,3,b)))}a.i=null}else Gf(a,3,b)}
function Pf(a,b){a.g||2!=a.f&&3!=a.f||Qf(a);a.l?a.l.next=b:a.g=b;a.l=b}
function Kf(a,b,c,d){var e=Jf(null,null,null);e.f=new Ff(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);!v(k)&&h instanceof Lf?g(h):f(k)}catch(l){g(l)}}:g});
e.f.i=a;Pf(a,e);return e.f}
Ff.prototype.G=function(a){this.f=0;Gf(this,2,a)};
Ff.prototype.O=function(a){this.f=0;Gf(this,3,a)};
function Gf(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.G,f=a.O;if(d instanceof Ff){Pf(d,Jf(e||wa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Da(d))try{var k=d.then;if(Ca(k)){Rf(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.w=c,a.f=b,a.i=null,Qf(a),3!=b||c instanceof Lf||Sf(a,c))}}
function Rf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Qf(a){a.v||(a.v=!0,Re(a.D,a))}
function Nf(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.l=null);return b}
Ff.prototype.D=function(){for(var a;a=Nf(this);)Of(this,a,this.f,this.w);this.v=!1};
function Of(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.o;a=a.i)a.o=!1;if(b.f)b.f.i=null,Tf(b,c,d);else try{b.i?b.g.call(b.context):Tf(b,c,d)}catch(e){Uf.call(null,e)}Ke(If,b)}
function Tf(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Sf(a,b){a.o=!0;Re(function(){a.o&&Uf.call(null,b)})}
var Uf=Le;function Lf(a){La.call(this,a)}
A(Lf,La);Lf.prototype.name="cancel";function Q(a){$e.call(this);this.w=1;this.o=[];this.v=0;this.f=[];this.g={};this.D=!!a}
A(Q,$e);m=Q.prototype;m.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.w;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.w=e+3;d.push(e);return e};
function Vf(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.S(d),b.apply(void 0,arguments))},a)}
function Wf(a,b,c){if(b=a.g[b]){var d=a.f;(b=Wa(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.S(b)}}
m.S=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.v)this.o.push(a),this.f[a+1]=wa;else{if(c){var d=Ra(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
m.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];Xf(this.f[g+1],this.f[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.v--,0<this.o.length&&0==this.v)for(;c=this.o.pop();)this.S(c)}}return 0!=e}return!1};
function Xf(a,b,c){Re(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.S,this),delete this.g[a])}else this.f.length=0,this.g={}};
function Yf(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=Yf(a,d);return c}
m.ea=function(){Q.B.ea.call(this);this.clear();this.o.length=0};function Zf(a){this.f=a}
Zf.prototype.set=function(a,b){v(b)?this.f.set(a,tf(b)):this.f.remove(a)};
Zf.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Zf.prototype.remove=function(a){this.f.remove(a)};function $f(a){this.f=a}
A($f,Zf);function ag(a){this.data=a}
function bg(a){return!v(a)||a instanceof ag?a:new ag(a)}
$f.prototype.set=function(a,b){$f.B.set.call(this,a,bg(b))};
$f.prototype.g=function(a){a=$f.B.get.call(this,a);if(!v(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
$f.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!v(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function cg(a){this.f=a}
A(cg,$f);cg.prototype.set=function(a,b,c){if(b=bg(b)){if(c){if(c<Ka()){cg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ka()}cg.B.set.call(this,a,b)};
cg.prototype.g=function(a){var b=cg.B.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ka()||c&&c>Ka())cg.prototype.remove.call(this,a);else return b}};function dg(){}
;function eg(){}
A(eg,dg);eg.prototype.clear=function(){var a=of(this.L(!0)),b=this;C(a,function(c){b.remove(c)})};function fg(a){this.f=a}
A(fg,eg);m=fg.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if(!w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.L=function(a){var b=0,c=this.f,d=new lf;d.next=function(){if(b>=c.length)throw kf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!w(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function gg(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(gg,fg);function hg(a,b){this.g=a;this.f=null;if(E&&!(9<=Number(nc))){ig||(ig=new pf);this.f=ig.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ig.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
A(hg,eg);var jg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ig=null;function kg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return jg[b]})}
m=hg.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(kg(a),b);lg(this)};
m.get=function(a){a=this.f.getAttribute(kg(a));if(!w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(kg(a));lg(this)};
m.L=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new lf;d.next=function(){if(b>=c.length)throw kf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!w(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);lg(this)};
function lg(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function mg(a,b){this.g=a;this.f=b+"::"}
A(mg,eg);mg.prototype.set=function(a,b){this.g.set(this.f+a,b)};
mg.prototype.get=function(a){return this.g.get(this.f+a)};
mg.prototype.remove=function(a){this.g.remove(this.f+a)};
mg.prototype.L=function(a){var b=this.g.L(!0),c=this,d=new lf;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function ng(){this.g=[];this.f=-1}
ng.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
ng.prototype.get=function(a){return!!this.g[a]};
function og(a){-1==a.f&&(a.f=Ua(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var pg=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",pg);function qg(a){var b=arguments;1<b.length?pg[b[0]]=b[1]:1===b.length&&Object.assign(pg,b[0])}
function R(a,b){return a in pg?pg[a]:b}
function rg(a){return R(a,void 0)}
;function sg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){tg(b)}}:a}
function tg(a,b,c,d,e){var f=x("yt.logging.errors.log");f?f(a,b,c,d,e):(f=R("ERRORS",[]),f.push([a,b,c,d,e]),qg("ERRORS",f))}
;function S(a,b){Ca(a)&&(a=sg(a));return window.setTimeout(a,b)}
function ug(a){window.clearTimeout(a)}
;var vg=x("ytPubsubPubsubInstance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.S;Q.prototype.publish=Q.prototype.K;Q.prototype.clear=Q.prototype.clear;z("ytPubsubPubsubInstance",vg);var wg=x("ytPubsubPubsubSubscribedKeys")||{};z("ytPubsubPubsubSubscribedKeys",wg);var xg=x("ytPubsubPubsubTopicToKeys")||{};z("ytPubsubPubsubTopicToKeys",xg);var yg=x("ytPubsubPubsubIsSynchronous")||{};z("ytPubsubPubsubIsSynchronous",yg);
function zg(a,b,c){var d=Ag();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){wg[e]&&b.apply(c||window,f)};
try{yg[a]?g():S(g,0)}catch(h){tg(h)}},c);
wg[e]=!0;xg[a]||(xg[a]=[]);xg[a].push(e);return e}return 0}
function Bg(a){var b=Ag();b&&("number"==typeof a?a=[a]:w(a)&&(a=[parseInt(a,10)]),C(a,function(c){b.unsubscribeByKey(c);delete wg[c]}))}
function Cg(a,b){var c=Ag();return c?c.publish.apply(c,arguments):!1}
function Dg(a,b){yg[a]=!0;var c=Ag();c&&c.publish.apply(c,arguments);yg[a]=!1}
function Ag(){return x("ytPubsubPubsubInstance")}
;function Eg(a,b,c){a&&(a.dataset?a.dataset[Fg(b)]=String(c):a.setAttribute("data-"+b,c))}
function Gg(a,b){return a?a.dataset?a.dataset[Fg(b)]:a.getAttribute("data-"+b):null}
function Hg(a,b){a&&(a.dataset?delete a.dataset[Fg(b)]:a.removeAttribute("data-"+b))}
var Ig={};function Fg(a){return Ig[a]||(Ig[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function T(a,b){this.version=a;this.args=b}
;function U(a,b){this.topic=a;this.f=b}
U.prototype.toString=function(){return this.topic};function Jg(){}
function Kg(){}
Jg.prototype=ca(Kg.prototype);Jg.prototype.constructor=Jg;if(ja)ja(Jg,Kg);else for(var Lg in Kg)if("prototype"!=Lg)if(Object.defineProperties){var Mg=Object.getOwnPropertyDescriptor(Kg,Lg);Mg&&Object.defineProperty(Jg,Lg,Mg)}else Jg[Lg]=Kg[Lg];Jg.B=Kg.prototype;function Ng(a,b,c){isNaN(c)&&(c=void 0);var d=x("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():S(a,c||0)}
Jg.prototype.start=function(){var a=x("yt.scheduler.instance.start");a&&a()};
ya(Jg);Jg.A();var Og=x("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.S;Q.prototype.publish=Q.prototype.K;Q.prototype.clear=Q.prototype.clear;z("ytPubsub2Pubsub2Instance",Og);var Pg=x("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Pg);var Qg=x("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Qg);var Rg=x("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Rg);
z("ytPubsub2Pubsub2SkipSubKey",null);function V(a,b){var c=Sg();c&&c.publish.call(c,a.toString(),a,b)}
function Tg(a,b,c){var d=Sg();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var h=x("ytPubsub2Pubsub2SkipSubKey");h&&h==e||(h=function(){if(Pg[e])try{if(g&&a instanceof U&&a!=f)try{var k=a.f,l=g;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.M){var n=new k;k.M=n.version}var t=k.M}catch(r){}if(!t||l.version!=t)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(k,$a(l.args))}catch(r){throw r.message=
"yt.pubsub2.Data.deserialize(): "+r.message,r;}}catch(r){throw r.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+r.message,r;}b.call(c||window,g)}catch(r){tg(r)}},Rg[a.toString()]?x("yt.scheduler.instance")?Ng(h,1,void 0):S(h,0):h())});
Pg[e]=!0;Qg[a.toString()]||(Qg[a.toString()]=[]);Qg[a.toString()].push(e);return e}
function Ug(a){var b=Sg();b&&("number"==typeof a&&(a=[a]),C(a,function(c){b.unsubscribeByKey(c);delete Pg[c]}))}
function Sg(){return x("ytPubsub2Pubsub2Instance")}
;var Vg=0;function Wg(a){var b=a.__yt_uid_key;b||(b=Xg(),a.__yt_uid_key=b);return b}
function Yg(a,b){a=I(a);b=I(b);return!!dd(a,function(c){return c===b},!0,void 0)}
function Zg(a,b){var c=Gc(document,a,null,b);return c.length?c[0]:null}
function $g(){var a=document,b;Va(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function ah(){ef(document.body,"hide-players",!1);C(Fc("preserve-players"),function(a){P(a,"preserve-players")})}
var Xg=x("ytDomDomGetNextId")||function(){return++Vg};
z("ytDomDomGetNextId",Xg);var bh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ch(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in bh||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}
ch.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ch.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ch.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=x("ytEventsEventsListeners")||{};z("ytEventsEventsListeners",ib);var dh=x("ytEventsEventsCounter")||{count:0};z("ytEventsEventsCounter",dh);
function eh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Da(e[4])&&Da(d)&&kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=eh(a,b,c,d);if(e)return e;e=++dh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ch(h);if(!dd(h.relatedTarget,function(k){return k==a},!0))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ch(h);
h.currentTarget=a;return c.call(a,h)};
g=sg(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),fh()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d];return e}
function gh(a,b,c){var d=a||document;return W(d,"click",function(e){var f=dd(e.target,function(g){return g===d||c(g)},!0);
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function hh(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var fh=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ih(a,b,c){return gh(a,b,function(d){return N(d,c)})}
function jh(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function kh(a){a&&("string"==typeof a&&(a=[a]),C(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?fh()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
;var lh={},mh="ontouchstart"in document;function nh(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return dd(c,function(e){return N(e,b)},!0,d)}
function oh(a){var b="mouseover"==a.type&&"mouseenter"in lh||"mouseout"==a.type&&"mouseleave"in lh,c=a.type in lh||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=lh[b];for(var d in c.g){var e=nh(b,d,a.target);e&&!dd(a.relatedTarget,function(f){return f==e},!0)&&c.K(d,e,b,a)}}if(b=lh[a.type])for(d in b.g)(e=nh(a.type,d,a.target))&&b.K(d,e,a.type,a)}}
W(document,"blur",oh,!0);W(document,"change",oh,!0);W(document,"click",oh);W(document,"focus",oh,!0);W(document,"mouseover",oh);W(document,"mouseout",oh);W(document,"mousedown",oh);W(document,"keydown",oh);W(document,"keyup",oh);W(document,"keypress",oh);W(document,"cut",oh);W(document,"paste",oh);mh&&(W(document,"touchstart",oh),W(document,"touchend",oh),W(document,"touchcancel",oh));function ph(a){this.o=a;this.w={};this.G=[];this.D=[]}
m=ph.prototype;m.F=function(a){return K(a,X(this))};
function X(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
m.unregister=function(){Bg(this.G);this.G.length=0;Ug(this.D);this.D.length=0};
m.init=wa;m.dispose=wa;function qh(a,b,c){a.G.push(zg(b,c,a))}
function rh(a,b,c){a.D.push(Tg(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=y(c,a);b in lh||(lh[b]=new Q);lh[b].subscribe(d,e);a.w[c]=e}
function Z(a,b,c,d){if(b in lh){var e=lh[b];Wf(e,X(a,d),a.w[c]);0>=Yf(e)&&(e.dispose(),delete lh[b])}delete a.w[c]}
m.R=function(a,b,c){var d=this.j(a,b);if(d&&(d=x(d))){var e=cb(arguments,2);bb(e,0,0,a);d.apply(null,e)}};
m.j=function(a,b){return Gg(a,b)};
function sh(a,b){Eg(a,"tooltip-text",b)}
;var th=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};z("yt.uix.widgets_",th);function uh(a){var b=[];fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];C(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function vh(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?ab(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?tg(h,"WARNING",void 0,void 0,void 0):tg(h)}}return b}
function wh(a,b){return xh(a,b||{},!0)}
function xh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=vh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return md(a,e)+d}
;function yh(a){a=void 0===a?{}:a;Ca(a)&&(a={callback:a});if(a.gapiHintOverride||R("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=vh(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&nb(a,{_c:{jsl:{h:b}}})}He("gapi.iframes:gapi.iframes.style.common",a)}
;function zh(){return x("gapi.iframes.getContext")()}
;function Ah(a){T.call(this,1,arguments);this.f=a}
A(Ah,T);function Bh(a){T.call(this,1,arguments);this.f=a}
A(Bh,T);function Ch(a,b,c){T.call(this,3,arguments);this.i=a;this.g=b;this.f=null!=c?!!c:null}
A(Ch,T);function Dh(a,b,c,d,e,f){T.call(this,2,arguments);this.g=a;this.f=b;this.l=c||null;this.i=d||null;this.source=e||null;this.params=f||null}
A(Dh,T);function Eh(a,b,c){T.call(this,1,arguments);this.f=a;this.g=b}
A(Eh,T);function Fh(a,b,c,d,e,f,g){T.call(this,1,arguments);this.g=a;this.o=b;this.f=c;this.v=d||null;this.l=e||null;this.i=f||null;this.source=g||null}
A(Fh,T);
var Gh=new U("subscription-batch-subscribe",Ah),Hh=new U("subscription-batch-unsubscribe",Ah),Ih=new U("subscription-subscribe",Dh),Jh=new U("subscription-subscribe-loading",Bh),Kh=new U("subscription-subscribe-loaded",Bh),Lh=new U("subscription-subscribe-success",Eh),Mh=new U("subscription-subscribe-external",Dh),Nh=new U("subscription-unsubscribe",Fh),Oh=new U("subscription-unsubscirbe-loading",Bh),Ph=new U("subscription-unsubscribe-loaded",Bh),Qh=new U("subscription-unsubscribe-success",Bh),Rh=
new U("subscription-external-unsubscribe",Fh),Sh=new U("subscription-enable-ypc",Bh),Th=new U("subscription-disable-ypc",Bh),Uh=new U("subscription-prefs",Ch),Vh=new U("subscription-prefs-success",Ch),Wh=new U("subscription-prefs-failure",Ch);function Xh(){var a=$g();return a?a:null}
;function Yh(a,b){(a=I(a))&&a.style&&(a.style.display=b?"":"none",ef(a,"hid",!b))}
function Zh(a){return(a=I(a))?"none"!=a.style.display&&!N(a,"hid"):!1}
function $h(a){C(arguments,function(b){!Ba(b)||b instanceof Element?Yh(b,!0):C(b,function(c){$h(c)})})}
function ai(a){C(arguments,function(b){!Ba(b)||b instanceof Element?Yh(b,!1):C(b,function(c){ai(c)})})}
;function bi(){ph.call(this,"tooltip");this.f=0;this.g={}}
A(bi,ph);ya(bi);m=bi.prototype;m.register=function(){Y(this,"mouseover",this.aa);Y(this,"mouseout",this.N);Y(this,"focus",this.oa);Y(this,"blur",this.ja);Y(this,"click",this.N);Y(this,"touchstart",this.Ja);Y(this,"touchend",this.ba);Y(this,"touchcancel",this.ba)};
m.unregister=function(){Z(this,"mouseover",this.aa);Z(this,"mouseout",this.N);Z(this,"focus",this.oa);Z(this,"blur",this.ja);Z(this,"click",this.N);Z(this,"touchstart",this.Ja);Z(this,"touchend",this.ba);Z(this,"touchcancel",this.ba);this.dispose();bi.B.unregister.call(this)};
m.dispose=function(){for(var a in this.g)this.N(this.g[a]);this.g={}};
m.aa=function(a){if(!(this.f&&1E3>Ka()-this.f)){var b=parseInt(this.j(a,"tooltip-hide-timer"),10);b&&(Hg(a,"tooltip-hide-timer"),ug(b));b=y(function(){ci(this,a);Hg(a,"tooltip-show-timer")},this);
var c=parseInt(this.j(a,"tooltip-show-delay"),10)||0;b=S(b,c);Eg(a,"tooltip-show-timer",b.toString());a.title&&(sh(a,di(this,a)),a.title="");b=Ea(a).toString();this.g[b]=a}};
m.N=function(a){var b=parseInt(this.j(a,"tooltip-show-timer"),10);b&&(ug(b),Hg(a,"tooltip-show-timer"));b=y(function(){if(a){var c=I(ei(this,a));c&&(fi(c),Oc(c),Hg(a,"content-id"));c=I(ei(this,a,"arialabel"));Oc(c)}Hg(a,"tooltip-hide-timer")},this);
b=S(b,50);Eg(a,"tooltip-hide-timer",b.toString());if(b=this.j(a,"tooltip-text"))a.title=b;b=Ea(a).toString();delete this.g[b]};
m.oa=function(a,b){this.f=0;this.aa(a,b)};
m.ja=function(a){this.f=0;this.N(a)};
m.Ja=function(a,b,c){c.changedTouches&&(this.f=0,(a=nh(b,X(this),c.changedTouches[0].target))&&this.aa(a,b))};
m.ba=function(a,b,c){c.changedTouches&&(this.f=Ka(),(a=nh(b,X(this),c.changedTouches[0].target))&&this.N(a))};
function gi(a,b,c){sh(b,c);a=a.j(b,"content-id");(a=I(a))&&Sc(a,c)}
function di(a,b){return a.j(b,"tooltip-text")||b.title}
function ci(a,b){if(b){var c=di(a,b);if(c){var d=I(ei(a,b));if(!d){d=document.createElement("div");d.id=ei(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=hi(a,b),k=ei(a,b,"content");g.id=k;Eg(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var l=ad(b);k=ei(a,b,"arialabel");f=document.createElement("div");O(f,X(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;Sc(f,l);b.setAttribute("aria-labelledby",k);k=Xh()||document.body;k.appendChild(f);k.appendChild(d);gi(a,b,c);(c=parseInt(a.j(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",O(g,X(a,"normal-wrap")));g=N(b,X(a,"reverse"));ii(a,b,d,e,h,g)||ii(a,b,d,e,h,!g);var n=X(a,"tip-visible");
S(function(){O(d,n)},0)}}}}
function ii(a,b,c,d,e,f){ef(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Fd(b);f=new G((h.width-10)/2,f?h.height:0);var k=Cd(b);Ef(new G(k.x+f.x,k.y+f.y),c,g);f=Jc(window);if(1==c.nodeType)var l=Dd(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new G(c.clientX,c.clientY);c=Fd(d);var n=Math.floor(c.width/2);g=!!(f.height<l.y+h.height);h=!!(l.y<h.height);k=!!(l.x<n);f=!!(f.width<l.x+n);l=(c.width+3)/-2- -5;a=a.j(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function ei(a,b,c){a=X(a)+Wg(b);c&&(a+="-"+c);return a}
function hi(a,b){var c=null;$b&&N(b,X(a,"masked"))&&((c=I("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),$h(c)):(c=document.createElement("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function fi(a){var b=I("yt-uix-tooltip-shared-mask"),c=b&&dd(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),ai(b),document.body.appendChild(b))}
;function ji(a){var b=ki();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=zg("LOGGED_IN",function(d){Bg(R("LOGGED_IN_PUBSUB_KEY",void 0));qg("LOGGED_IN",!0);a(d)});
qg("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function ki(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=ld(a,"mode","subscribe");a=ld("/signin?context=popup","next",a);return a=ld(a,"feature","sub_button")}
z("yt.pubsub.publish",Cg);function li(a,b){var c=mi(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function mi(a){return R("EXPERIMENT_FLAGS",{})[a]}
;function ni(a){var b=oi;a=void 0===a?x("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(pi(b),qi(b));b.ca_type="image";a&&(b.bid=a);return b}
function pi(a){var b={};b.dt=Nd;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?B:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(b.u_h=B.screen.height,b.u_w=B.screen.width,b.u_ah=B.screen.availHeight,b.u_aw=B.screen.availWidth,b.u_cd=B.screen.colorDepth);
B.navigator&&B.navigator.plugins&&(b.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(b.u_nmime=B.navigator.mimeTypes.length);return b}
function qi(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var g=b.innerWidth;var h=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=Jc(c||window).round()}catch(l){k=new Bc(-12245933,-12245933)}c=k;k={};d=new ng;p.SVGElement&&p.document.createElementNS&&d.set(0);e=rd();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);p.crypto&&p.crypto.subtle&&d.set(3);p.TextDecoder&&p.TextEncoder&&d.set(4);d=og(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!B.WebGLRenderingContext,k}
var oi=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return uh(ni(a))});Ka();var ri=v(XMLHttpRequest)?function(){return new XMLHttpRequest}:v(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function si(){if(!ri)return null;var a=ri();return"open"in a?a:null}
;var ti={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ui="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
vi=!1;
function wi(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=fd(a)[1]||null,e=gd(fd(a)[3]||null);d&&e?(d=c,c=fd(a),d=fd(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?gd(fd(c)[3]||null)==e&&(Number(fd(c)[4]||null)||null)==(Number(fd(a)[4]||null)||null):!0;d=!!mi("web_ajax_ignore_global_headers_if_set");for(var f in ti)e=R(ti[f]),!e||!c&&!xi(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||xi(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(mi("pass_biscotti_id_in_header_ajax")||mi("pass_biscotti_id_in_header_ajax_tv"))&&
(c||xi(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=uh(ni(void 0)));return b}
function yi(a){var b=window.location.search,c=gd(fd(a)[3]||null),d=gd(fd(a)[5]||null);d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=vh(b),f={};C(ui,function(g){e[g]&&(f[g]=e[g])});
return xh(a,f||{},!1)}
function xi(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=gd(fd(a)[3]||null);return d?(c=c[d])?Ya(c,b):!1:!0}
function zi(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ai(a,b);var d=Bi(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&ug(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||p;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.V&&b.V.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.wb&&0<b.timeout&&(f=S(function(){e||(e=!0,ug(f))},b.timeout))}else Ci(a,b)}
function Ci(a,b){var c=b.format||"JSON";a=Ai(a,b);var d=Bi(a,b),e=!1,f,g=Di(a,function(h){if(!e){e=!0;f&&ug(f);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var l=null,n=400<=h.status&&500>h.status,t=500<=h.status&&600>h.status;if(k||n||t)l=Ei(c,h,b.Sb);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||p;
k?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.V&&b.V.call(n,h,l)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Da&&0<b.timeout&&(f=S(function(){e||(e=!0,g.abort(),ug(f))},b.timeout))}
function Ai(a,b){b.Wb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=rg("XSRF_FIELD_NAME"),d=b.Ka;d&&(d[c]&&delete d[c],a=wh(a,d));return a}
function Bi(a,b){var c=rg("XSRF_FIELD_NAME"),d=rg("XSRF_TOKEN"),e=b.postBody||"",f=b.J,g=rg("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.Vb||gd(fd(a)[3]||null)&&!b.withCredentials&&gd(fd(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.J&&b.J[g]||(f||(f={}),f[c]=d);f&&w(e)&&(e=vh(e),nb(e,f),e=b.Ea&&"JSON"==b.Ea?JSON.stringify(e):kd(e));f=e||f&&!jb(f);!vi&&f&&"POST"!=b.method&&(vi=!0,tg(Error("AJAX request with postData should use POST")));
return e}
function Ei(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Fi(b):null)d={},C(b.getElementsByTagName("*"),function(e){d[e.tagName]=Gi(e)})}c&&Hi(d);
return d}
function Hi(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ib(a[b]);a[c]=d}else Hi(a[b])}}
function Fi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Gi(a){var b="";C(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Di(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&sg(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=si();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;mi("debug_forward_web_query_parameters")&&(a=yi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=wi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ii=window,Ji=Ii.ytcsi&&Ii.ytcsi.now?Ii.ytcsi.now:Ii.performance&&Ii.performance.timing&&Ii.performance.now?function(){return Ii.performance.timing.navigationStart+Ii.performance.now()}:function(){return(new Date).getTime()};var Ki=Math.pow(2,16)-1,Li=null,Mi=0,Ni={log_event:"events",log_interaction:"interactions"},Oi=Object.create(null);Oi.log_event="GENERIC_EVENT_LOGGING";Oi.log_interaction="INTERACTION_LOGGING";var Pi=new Set(["log_event"]),Qi={},Ri=0,Si=0,Ti=x("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",Ti);var Ui=x("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",Ui);var Vi=x("ytLoggingTransportDispatchedStats_")||{};
z("ytLoggingTransportDispatchedStats_",Vi);z("ytytLoggingTransportCapturedTime_",x("ytLoggingTransportCapturedTime_")||{});function Wi(){ug(Ri);ug(Si);Si=0;if(!jb(Ti)){for(var a in Ti){var b=Qi[a];b&&(Xi(a,b),delete Ti[a])}jb(Ti)||Yi()}}
function Yi(){mi("web_gel_timeout_cap")&&!Si&&(Si=S(Wi,6E4));ug(Ri);Ri=S(Wi,R("LOGGING_BATCH_TIMEOUT",li("web_gel_debounce_ms",1E4)))}
function Zi(a,b){b=void 0===b?"":b;Ti[a]=Ti[a]||{};Ti[a][b]=Ti[a][b]||[];return Ti[a][b]}
function Xi(a,b){var c=Ni[a],d=Vi[a]||{};Vi[a]=d;var e=Math.round(Ji());for(l in Ti[a]){var f=lb,g=b.f;g={client:{hl:g.kb,gl:g.jb,clientName:g.hb,clientVersion:g.ib,configInfo:g.gb}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));R("DELEGATED_SESSION_ID")&&!mi("pageid_as_header_web")&&(g.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=Zi(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=Ui[l])a:{var k=
l;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:h}]}delete Ui[l];f.requestTimeMs=e;if(g=rg("EVENT_ID"))h=(R("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>Ki&&(h=1),qg("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,Li&&Mi&&mi("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Li,
roundtripMs:Mi}),Li=g,Mi=0;$i(b,a,f,{retry:Pi.has(a),onSuccess:y(aj,this,Ji())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function aj(a){Mi=Math.round(Ji()-a)}
;var bj=x("ytLoggingGelSequenceIdObj_")||{};z("ytLoggingGelSequenceIdObj_",bj);function cj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Rb||R("AUTHORIZATION"))||(a?b="Bearer "+x("gapi.auth.getToken")().Qb:b=ce([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),mi("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
function dj(a){a=Object.assign({},a);delete a.Authorization;var b=ce();if(b){var c=new Ye;c.update(rg("INNERTUBE_API_KEY"));c.update(b);b=c.digest();c=3;void 0===c&&(c=0);if(!vc){vc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));uc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===vc[k]&&(vc[k]=h)}}}c=uc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?b[e+1]:0;k=(g=
e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function ej(){var a=new gg;(a=a.isAvailable()?new mg(a,"yt.innertube"):null)||(a=new hg("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new cg(a):null;this.g=document.domain||window.location.hostname}
ej.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Ka()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(tf(b))}catch(f){return}else e=escape(b);b=this.g;xc.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
ej.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=xc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ej.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;xc.remove(""+a,"/",void 0===b?"youtube.com":b)};var fj=new ej;function gj(a,b,c,d){if(d)return null;d=fj.get("nextId",!0)||1;var e=fj.get("requests",!0)||{};e[d]={method:a,request:b,authState:dj(c),requestTime:Math.round(Ji())};fj.set("nextId",d+1,86400,!0);fj.set("requests",e,86400,!0);return d}
function hj(a){var b=fj.get("requests",!0)||{};delete b[a];fj.set("requests",b,86400,!0)}
function ij(a){var b=fj.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Ji())-d.requestTime)){var e=d.authState,f=dj(cj(!1));kb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Ji())),$i(a,d.method,e,{}));delete b[c]}}fj.set("requests",b,86400,!0)}}
;function jj(a){var b=this;this.f=a||{eb:rg("INNERTUBE_API_KEY"),fb:rg("INNERTUBE_API_VERSION"),gb:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),hb:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ib:rg("INNERTUBE_CONTEXT_CLIENT_VERSION"),kb:rg("INNERTUBE_CONTEXT_HL"),jb:rg("INNERTUBE_CONTEXT_GL"),lb:rg("INNERTUBE_HOST_OVERRIDE")||"",mb:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Ng(function(){ij(b)},0,5E3)}
function $i(a,b,c,d){!R("VISITOR_DATA")&&.01>Math.random()&&tg(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",J:c,Ea:"JSON",Da:function(){},
wb:d.Da,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
Aa:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
Xb:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.lb;g&&(f=g);g=a.f.mb||!1;var h=cj(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=wh(""+f+("/youtubei/"+a.f.fb+"/"+b),{alt:"json",key:a.f.eb}),l;if(d.retry&&mi("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=gj(b,c,h,g))){var n=e.onSuccess,t=e.Aa;e.onSuccess=function(r,q){hj(l);n(r,q)};
c.Aa=function(r,q){hj(l);t(r,q)}}try{mi("use_fetch_for_op_xhr")?zi(k,e):(e.method="POST",e.J||(e.J={}),Ci(k,e))}catch(r){if("InvalidAccessError"==r)l&&(hj(l),l=0),tg(Error("An extension is blocking network request."),"WARNING");
else throw r;}l&&Ng(function(){ij(a)},0,5E3)}
;var kj=Ka().toString();var lj;
if(!(lj=x("ytLoggingTimeDocumentNonce_"))){var mj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var nj=Array(16),oj=new Uint8Array(16);window.crypto.getRandomValues(oj);for(var pj=0;pj<nj.length;pj++)nj[pj]=oj[pj];mj=nj;break a}catch(a){}for(var qj=Array(16),rj=0;16>rj;rj++){for(var sj=Ka(),tj=0;tj<sj%23;tj++)qj[rj]=Math.random();qj[rj]=Math.floor(256*Math.random())}if(kj)for(var uj=1,vj=0;vj<kj.length;vj++)qj[uj%16]=qj[uj%16]^qj[(uj-1)%16]/4^kj.charCodeAt(vj),uj++;mj=qj}for(var wj=mj,xj=
[],yj=0;yj<wj.length;yj++)xj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(wj[yj]&63));lj=xj.join("")}var zj=lj;z("ytLoggingTimeDocumentNonce_",zj);function Aj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Bj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
z("yt_logging_screen.getRootVeType",function(a){return R(Bj(void 0===a?0:a),void 0)});
z("yt_logging_screen.getCurrentCsn",function(a){a=void 0===a?0:a;var b=R(Aj(a));b||0!=a||(mi("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null});
z("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==R(Aj(c))||b!==R(Bj(c)))qg(Aj(c),a),qg(Bj(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var d={clientDocumentNonce:zj,clientScreenNonce:a};var e=void 0===e?{}:e;var f={};f.eventTimeMs=Math.round(e.timestamp||Ji());f.foregroundHeartbeatScreenAssociated=d;d=String;if(e.timestamp)var g=-1;else g=x("_lact",window),g=null==g?-1:Math.max(Ka()-g,0);f.context={lastActivityMs:d(g)};mi("log_sequence_info_on_gel_web")&&e.Ga&&
(d=f.context,g=e.Ga,bj[g]=g in bj?bj[g]+1:0,d.sequence={index:bj[g],groupKey:g},e.Ub&&delete bj[e.Ga]);(e=e.Tb)?(d={},e.videoId?d.videoId=e.videoId:e.playlistId&&(d.playlistId=e.playlistId),Ui[e.token]=d,e=Zi("log_event",e.token)):e=Zi("log_event");e.push(f);jj&&(Qi.log_event=new jj);e.length>=(li("web_logging_max_batch")||100)?Wi():Yi()}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Cj(){ph.call(this,"button");this.f=null;this.i=[];this.g={}}
A(Cj,ph);ya(Cj);m=Cj.prototype;m.register=function(){Y(this,"click",this.La);Y(this,"keydown",this.sa);Y(this,"keypress",this.ta);qh(this,"page-scroll",this.ab)};
m.unregister=function(){Z(this,"click",this.La);Z(this,"keydown",this.sa);Z(this,"keypress",this.ta);Dj(this);this.g={};Cj.B.unregister.call(this)};
m.La=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
m.sa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Ej(this,a))){var d=function(g){var h="";g.tagName&&(h=g.tagName.toLowerCase());return"ul"==h||"table"==h},e;
d(b)?e=b:e=Tc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.rb;else"table"==e&&(f=this.qb);f&&Fj(this,a,b,c,y(f,this))}}};
m.ab=function(){var a=this.g,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=K(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;Gj(this,d,b,!0)}};
function Fj(a,b,c,d,e){var f=Zh(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Hj(a,c)){if(v(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;h=md(b.href,h)+k;h instanceof ub||h instanceof ub||(h="object"==typeof h&&h.U?h.T():String(h),xb.test(h)||(h="about:invalid#zClosurez"),h=new ub(vb,h));l.href=h instanceof ub&&h.constructor===
ub&&h.g===wb?h.f:"type_error:SafeUrl"}else jh(b)}else g&&Ij(a,b);else f?27==d.keyCode?(Hj(a,c),Ij(a,b)):e(b,c,d):(h=N(b,X(a,"reverse"))?38:40,d.keyCode==h&&(jh(b),d.preventDefault()))}
m.ta=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Ej(this,a),Zh(a)&&c.preventDefault())};
function Hj(a,b){var c=X(a,"menu-item-highlight"),d=J(c,b);d&&P(d,c);return d}
function Jj(a,b,c){O(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Ea(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
m.qb=function(a,b,c){var d=Hj(this,b),e=Zg("table",b);b=Gc(document,"td",null,e);d=Kj(d,b,Gc(document,"td",null,Zg("tr",e)).length,c);-1!=d&&(Jj(this,a,b[d]),c.preventDefault())};
m.rb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Hj(this,b);b=Sa(Gc(document,"li",null,b),Zh);Jj(this,a,b[Kj(d,b,1,c)]);c.preventDefault()}};
function Kj(a,b,c,d){var e=b.length;a=Ra(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Lj(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=X(a,"menu-mask"),ai(c),b.iframeMask=c);return c}
function Gj(a,b,c,d){var e=K(b,X(a,"group")),f=!!a.j(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=Hd(b);if(N(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(n){}}N(b,"flip")&&(N(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.j(b,"button-has-sibling-menu")?k=Ad(e):a.j(b,"button-menu-root-container")&&(k=Mj(a,b));E&&!mc("8")&&(k=null);if(k){var l=Hd(k);l=new sd(-l.top,l.left,l.top,-l.left)}k=new G(0,1);N(b,X(a,"center-menu"))&&(k.x-=Math.round((Fd(c).width-Fd(b).width)/
2));d&&(k.y+=Lc(document).y);if(a=Lj(a,b))b=Fd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Cf(e,f,a,g,k,l,197),d&&ud(a,"position","fixed");Cf(e,f,c,g,k,l,197)}
function Mj(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return K(b,c)}return document.body}
m.Na=function(a){if(a){var b=Ej(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=Mj(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Lj(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.g[Wg(a).toString()]=b);Gj(this,a,b,c);Dg("yt-uix-button-menu-before-show",a,b);$h(b);d&&$h(d);
this.R(a,"button-menu-action",!0);O(a,X(this,"active"));b=y(this.Ma,this,a,!1);d=y(this.Ma,this,a,!0);c=y(this.Bb,this,a,void 0);this.f&&Ej(this,this.f)==Ej(this,a)||Dj(this);Cg("yt-uix-button-menu-show",a);kh(this.i);this.i=[W(document,"click",d),W(document,"contextmenu",b),W(window,"resize",c)];this.f=a}}};
function Ij(a,b){if(b){var c=Ej(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");ai(c);a.R(b,"button-menu-action",!1);var d=Lj(a,b),e=Wg(c).toString();delete a.g[e];S(function(){d&&d.parentNode&&(ai(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=K(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));df(b,f);Cg("yt-uix-button-menu-hide",b);kh(a.i);a.i.length=0}}
m.Bb=function(a,b){var c=Ej(this,a);if(c){b&&(b instanceof Fb?Lb(c,b):Sc(c,b));var d=!!this.j(a,"button-menu-fixed");Gj(this,a,c,d)}};
m.Ma=function(a,b,c){c=hh(c);var d=K(c,X(this));if(d){d=Ej(this,d);var e=Ej(this,a);if(d==e)return}d=K(c,X(this,"menu"));e=d==Ej(this,a);var f=N(c,X(this,"menu-item")),g=N(c,X(this,"menu-close"));if(!d||e&&(f||g))Ij(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=J(X(this,"content"),a))&&Sc(a,ad(c)),Nj(this,d,c))};
function Nj(a,b,c){var d=X(a,"menu-item-selected");C(Fc(d,b),function(e){P(e,d)});
O(c.parentNode,d)}
function Ej(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id");c=c&&I(c);var d=X(a,"menu");c?cf(c,[d,X(a,"menu-external")]):c=J(d,b);b.widgetMenu=c}return b.widgetMenu}
m.isToggled=function(a){return N(a,X(this,"toggled"))};
m.toggle=function(a){if(this.j(a,"button-toggle")){var b=K(a,X(this,"group")),c=X(this,"toggled"),d=N(a,c);if(b&&this.j(b,"button-toggle-group")){var e=this.j(b,"button-toggle-group");C(Fc(X(this),b),function(f){f!=a||"optional"==e&&d?(P(f,c),f.removeAttribute("aria-pressed")):(O(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),gf(a,c)}};
m.click=function(a){if(Ej(this,a)){var b=Ej(this,a);if(b){var c=K(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(Ij(this,c),S(y(this.Na,this,a),1)):Zh(b)?Ij(this,a):this.Na(a)}a.focus()}this.R(a,"button-action")};
function Dj(a){a.f&&Ij(a,a.f)}
;function Oj(a){ph.call(this,a);this.i=null}
A(Oj,ph);m=Oj.prototype;m.F=function(a){var b=ph.prototype.F.call(this,a);return b?b:a};
m.register=function(){qh(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
m.dispose=function(){Pj(this);Oj.B.dispose.call(this)};
m.j=function(a,b){var c=Oj.B.j.call(this,a,b);return c?c:(c=Oj.B.j.call(this,a,"card-config"))&&(c=x(c))&&c[b]?c[b]:null};
m.show=function(a){var b=this.F(a);if(b){O(b,X(this,"active"));var c=Qj(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Rj(this,a,c);var d=X(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.R(b,"card-action",a);this.i=a;ai(c);S(y(function(){e||($h(c),Cg("yt-uix-card-show",b,a,c));Sj(c);O(c,d);Cg("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Qj(a,b,c){var d=c||b,e=X(a,"card");c=Tj(a,d);var f=I(X(a,"card")+Wg(d));if(f)return a=J(X(a,"card-body"),f),Rc(a,c)||(Oc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Wg(d);f.className=e;(d=a.j(d,"card-class"))&&cf(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Oc(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Rj(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=J(X(a,"anchor"),b)||b,f=a.j(b,"position"),g=!!a.j(b,"force-position"),h=a.j(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var n=13;var t=8}else l&&!k?(n=12,t=9):!l&&k?(n=9,t=12):(n=8,t=13);var r=Id(document.body);f=Id(b);r!=f&&(n^=4);if(d){f=b.offsetHeight/2-12;var q=new G(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,q=new G(b.offsetWidth+6,-12);var u=Fd(c);f=
Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?q.y+=12-b.offsetHeight/2:q.x+=12-b.offsetWidth/2);u=null;g||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");ef(c,b,l);ef(c,a,k);u=Cf(e,n,c,t,q,null,u);!g&&u&&(u&48&&(l=!l,n^=4,t^=4),u&192&&(k=!k,n^=1,t^=1),ef(c,b,l),ef(c,a,k),Cf(e,n,c,t,q));h&&(e=parseInt(c.style.top,10),g=Lc(document).y,ud(c,"position","fixed"),ud(c,"top",e-g+"px"));r&&(c.style.right="",e=Hd(c),e.left=e.left||parseInt(c.style.left,10),g=Jc(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=J("yt-uix-card-body-arrow",c);g=J("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!r&&l||r&&!l?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=J("yt-uix-card-arrow",c);l=J("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?Fd(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
m.hide=function(a){if(a=this.F(a)){var b=I(X(this,"card")+Wg(a));b&&(P(a,X(this,"active")),P(b,X(this,"card-visible")),ai(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Oc(b.cardMask),b.cardMask=null))}};
function Pj(a){a.i&&a.hide(a.i)}
m.Ab=function(a,b){var c=this.F(a);if(c){if(b){var d=Tj(this,c);if(!d)return;b instanceof Fb?Lb(d,b):Sc(d,b)}N(c,X(this,"active"))&&(c=Qj(this,a,c),Rj(this,a,c),$h(c),Sj(c))}};
m.isActive=function(a){return(a=this.F(a))?N(a,X(this,"active")):!1};
function Tj(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.j(b,"card-id"))?I(c):J(d,b))||(c=document.createElement("div"));var f=c;P(f,d);O(f,e);b.cardContentNode=c}return c}
function Sj(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',cf(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Uj(){ph.call(this,"kbd-nav")}
var Vj;A(Uj,ph);ya(Uj);m=Uj.prototype;m.register=function(){Y(this,"keydown",this.qa);qh(this,"yt-uix-kbd-nav-move-in",this.ya);qh(this,"yt-uix-kbd-nav-move-in-to",this.sb);qh(this,"yt-uix-kbd-move-next",this.za);qh(this,"yt-uix-kbd-nav-move-to",this.Y)};
m.unregister=function(){Z(this,"keydown",this.qa);kh(Vj)};
m.qa=function(a,b,c){var d=c.keyCode;if(a=K(a,X(this)))switch(d){case 13:case 32:this.ya(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=jf(a,"kbdNavMoveOut");!c;){c=K(a.parentElement,X(this));if(!c)break a;c=jf(c,"kbdNavMoveOut")}c=I(c);this.Y(c);Cg("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&N(a,X(this,"list")))switch(d){case 40:this.za(b,a);break;case 38:d=document.activeElement==a,a=Wj(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Xj(this,a[b]))}c.preventDefault()}};
m.ya=function(a){var b=jf(a,"kbdNavMoveIn");b=I(b);Yj(this,a,b);this.Y(b)};
m.sb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Yj(this,d,a);this.Y(a)};
m.Y=function(a){if(a)if(Xc(a))a.focus();else{var b=Tc(a,function(c){return Qc(c)?Xc(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Yj(a,b,c){if(b&&c)if(O(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,hf&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
m.za=function(a,b){var c=document.activeElement==b,d=Wj(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Xj(this,d[c]))};
function Xj(a,b){if(b){var c=cd(b,"LI");c&&(O(c,X(a,"highlight")),Vj=W(b,"blur",y(function(d){P(d,X(this,"highlight"));kh(Vj)},a,c)))}}
function Wj(a){if("UL"!=a.tagName.toUpperCase())return[];a=Sa(Pc(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Sa(Ta(a,function(b){return Zh(b)?Tc(b,function(c){return Qc(c)?Xc(c):!1}):!1}),function(b){return!!b})}
;function Zj(){ph.call(this,"menu");this.g=this.f=null;this.i={};this.v={};this.l=null}
A(Zj,ph);ya(Zj);function ak(a){var b=Zj.A();if(N(a,X(b)))return a;var c=b.F(a);return c?c:K(a,X(b,"content"))==b.f?b.g:null}
m=Zj.prototype;m.register=function(){Y(this,"click",this.pa);Y(this,"mouseenter",this.Ya);qh(this,"page-scroll",this.bb);qh(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.F(a);bk(this,a)});
this.l=new Q};
m.unregister=function(){Z(this,"click",this.pa);this.g=this.f=null;kh(db(gb(this.i)));this.i={};fb(this.v,function(a){Oc(a)},this);
this.v={};af(this.l);this.l=null;Zj.B.unregister.call(this)};
m.pa=function(a,b,c){a&&(b=ck(this,a),!b.disabled&&Yg(c.target,b)&&dk(this,a))};
m.Ya=function(a,b,c){a&&N(a,X(this,"hover"))&&Yg(c.target,ck(this,a))&&dk(this,a,!0)};
m.bb=function(){this.f&&this.g&&ek(this,this.g,this.f)};
function ek(a,b,c){var d=fk(a,b);if(d){var e=Fd(c);if(e instanceof Bc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Ed(e,!0);d.style.height=Ed(f,!0)}c==a.f&&(e=9,f=8,N(b,X(a,"reversed"))&&(e^=1,f^=1),N(b,X(a,"flipped"))&&(e^=4,f^=4),a=new G(0,1),d&&Cf(b,e,d,f,a,null,197),Cf(b,e,c,f,a,null,197))}
function dk(a,b,c){gk(a,b)&&!c?bk(a,b):(hk(a,b),!a.f||Yg(b,a.f)?a.Oa(b):Vf(a.l,y(a.Oa,a,b)))}
m.Oa=function(a){if(a){var b=ik(this,a);if(b){Dg("yt-uix-menu-before-show",a,b);this.f?Yg(a,this.f)||bk(this,this.g):(this.g=a,this.f=b,N(a,X(this,"sibling-content"))||(Oc(b),document.body.appendChild(b)),b.style.minWidth=ck(this,a).offsetWidth-2+"px");var c=fk(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);P(b,X(this,"content-hidden"));ek(this,a,b);cf(ck(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);Cg("yt-uix-menu-show",a);jk(b);kk(this,a);Cg("yt-uix-kbd-nav-move-in-to",
b);var d=y(this.Cb,this,a),e=y(this.ob,this,a);c=Ea(a).toString();this.i[c]=[W(b,"click",e),W(document,"click",d)];N(a,X(this,"indicate-selected"))&&(d=y(this.pb,this,a),this.i[c].push(W(b,"click",d)));N(a,X(this,"hover"))&&(a=y(this.Za,this,a),this.i[c].push(W(document,"mousemove",a)))}}};
m.Za=function(a,b){var c=hh(b);c&&(Yg(c,ck(this,a))||lk(this,c)||mk(this,a))};
m.Cb=function(a,b){var c=hh(b);if(c){if(lk(this,c)){var d=K(c,X(this,"content")),e=cd(c,"LI");e&&d&&Rc(d,e)&&Dg("yt-uix-menu-item-clicked",c);c=K(c,X(this,"close-on-select"));if(!c)return;d=ak(c)}bk(this,d||a)}};
function hk(a,b){if(b){var c=K(b,X(a,"content"));c&&C(Fc(X(a),c),function(d){!Yg(d,b)&&gk(this,d)&&mk(this,d)},a)}}
function bk(a,b){if(b){var c=[];c.push(b);var d=ik(a,b);d&&(d=Fc(X(a),d),d=$a(d),c=c.concat(d),C(c,function(e){gk(this,e)&&mk(this,e)},a))}}
function mk(a,b){if(b){var c=ik(a,b);df(ck(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);O(c,X(a,"content-hidden"));var d=ik(a,b);d&&Hc(d,{"aria-expanded":"false"});(d=fk(a,b))&&d.parentNode&&Oc(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.l&&a.l.K("ROOT_MENU_REMOVED"));Cg("yt-uix-menu-hide",b);c=Ea(b).toString();kh(a.i[c]);delete a.i[c]}}
m.ob=function(a,b){var c=hh(b);c&&nk(this,a,c)};
m.pb=function(a,b){var c=hh(b);if(c){var d=ck(this,a);if(d&&(c=cd(c,"LI")))if(c=ad(c).trim(),d.hasChildNodes()){var e=Cj.A();(d=J(X(e,"content"),d))&&Sc(d,c)}else Sc(d,c)}};
function kk(a,b){var c=ik(a,b);if(c){C(c.children,function(e){"LI"==e.tagName&&Hc(e,{role:"menuitem"})});
Hc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ea(c),c.id=d);(c=ck(a,b))&&Hc(c,{"aria-controls":d})}}
function nk(a,b,c){var d=ik(a,b);d&&N(b,X(a,"checked"))&&(a=cd(c,"LI"))&&(a=J("yt-ui-menu-item-checked-hid",a))&&(C(Fc("yt-ui-menu-item-checked",d),function(e){ff(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),ff(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function gk(a,b){var c=ik(a,b);return c?!N(c,X(a,"content-hidden")):!1}
function jk(a){C(Gc(document,"UL",null,a),function(b){b.tabIndex=0;var c=Uj.A();cf(b,[X(c),X(c,"list")])})}
function ik(a,b){var c=Gg(b,"menu-content-id");return c&&(c=I(c))?(cf(c,[X(a,"content"),X(a,"content-external")]),c):b==a.g?a.f:J(X(a,"content"),b)}
function fk(a,b){var c=Ea(b).toString(),d=a.v[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];C(bf(b),function(f){e.push(f+"-mask")});
cf(d,e);a.v[c]=d}return d||null}
function ck(a,b){return J(X(a,"trigger"),b)}
function lk(a,b){return Yg(b,a.f)||Yg(b,a.g)}
;function ok(){Oj.call(this,"clickcard");this.f={};this.g={}}
A(ok,Oj);ya(ok);m=ok.prototype;m.register=function(){ok.B.register.call(this);Y(this,"click",this.ma,"target");Y(this,"click",this.la,"close")};
m.unregister=function(){ok.B.unregister.call(this);Z(this,"click",this.ma,"target");Z(this,"click",this.la,"close");for(var a in this.f)kh(this.f[a]);this.f={};for(a in this.g)kh(this.g[a]);this.g={}};
m.ma=function(a,b,c){c.preventDefault();b=cd(c.target,"button");if(!b||!b.disabled){if(b=this.j(a,"card-target"))a=document,a=w(b)?a.getElementById(b):b;b=this.F(a);this.j(b,"disabled")||(N(b,X(this,"active"))?(this.hide(a),P(b,X(this,"active"))):(this.show(a),O(b,X(this,"active"))))}};
m.show=function(a){ok.B.show.call(this,a);var b=this.F(a),c=Ea(a).toString();if(!Gg(b,"click-outside-persists")){if(this.f[c])return;b=W(document,"click",y(this.na,this,a));var d=W(window,"blur",y(this.na,this,a));this.f[c]=[b,d]}a=W(window,"resize",y(this.Ab,this,a,void 0));this.g[c]=a};
m.hide=function(a){ok.B.hide.call(this,a);a=Ea(a).toString();var b=this.f[a];b&&(kh(b),this.f[a]=null);if(b=this.g[a])kh(b),delete this.g[a]};
m.na=function(a,b){var c="yt-uix"+(this.o?"-"+this.o:"")+"-card",d=null;b.target&&(d=K(b.target,c)||K(ak(b.target),c));(d=d||K(document.activeElement,c)||K(ak(document.activeElement),c))||this.hide(a)};
m.la=function(a){(a=K(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function pk(){Oj.call(this,"hovercard")}
A(pk,Oj);ya(pk);m=pk.prototype;m.register=function(){Y(this,"mouseenter",this.ua,"target");Y(this,"mouseleave",this.wa,"target");Y(this,"mouseenter",this.va,"card");Y(this,"mouseleave",this.xa,"card")};
m.unregister=function(){Z(this,"mouseenter",this.ua,"target");Z(this,"mouseleave",this.wa,"target");Z(this,"mouseenter",this.va,"card");Z(this,"mouseleave",this.xa,"card")};
m.ua=function(a){if(qk!=a){qk&&(this.hide(qk),qk=null);var b=y(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10);b=S(b,-1<c?c:200);Eg(a,"card-timer",b.toString());qk=a;a.alt&&(Eg(a,"card-alt",a.alt),a.alt="");a.title&&(Eg(a,"card-title",a.title),a.title="")}};
m.wa=function(a){var b=parseInt(this.j(a,"card-timer"),10);ug(b);this.F(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;S(y(this.cb,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
m.cb=function(a){this.F(a).isCardHidable&&(this.hide(a),qk=null)};
m.va=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
m.xa=function(a){a&&this.hide(a.cardTargetNode)};
var qk=null;function rk(a,b,c,d,e,f){this.f=a;this.w=null;this.i=J("yt-dialog-fg",this.f)||this.f;if(a=J("yt-dialog-title",this.i)){var g="yt-dialog-title-"+Ea(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.O=J("yt-dialog-focus-trap",this.f);this.W=!1;this.l=new Q;this.D=[];this.D.push(ih(this.f,y(this.tb,this),"yt-dialog-dismiss"));this.D.push(W(this.O,"focus",y(this.Xa,this),!0));sk(this);this.ca=b;this.Ra=c;this.Qa=d;this.G=e;this.Sa=f;this.v=
this.o=null}
var tk={LOADING:"loading",Ob:"content",Pb:"working"};function uk(a,b){a.Z()||a.l.subscribe("post-all",b)}
function sk(a){a=J("yt-dialog-fg-content",a.f);var b=[];fb(tk,function(c){b.push("yt-dialog-show-"+c)});
df(a,b);O(a,"yt-dialog-show-content")}
m=rk.prototype;
m.show=function(){if(!this.Z()){this.w=document.activeElement;if(!this.Qa){this.g||(this.g=I("yt-dialog-bg"),this.g||(this.g=document.createElement("div"),this.g.id="yt-dialog-bg",this.g.className="yt-dialog-bg",document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Jc(a).height,Kc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";$h(this.g)}this.ra();c=vk(this);wk(c);this.o=W(document,"keydown",y(this.nb,this));c=this.f;d=zg("player-added",this.ra,this);Eg(c,"player-ready-pubsub-key",d);this.Ra&&(this.v=W(document,"click",y(this.zb,this)));$h(this.f);this.i.setAttribute("tabindex","0");xk(this);this.G||O(document.body,"yt-dialog-active");Dj(Cj.A());Pj(ok.A());Pj(pk.A());Cg("yt-ui-dialog-show-complete",this)}};
function yk(){return Va(Fc("yt-dialog"),function(a){return Zh(a)})}
m.ra=function(){if(!this.Sa){var a=this.f;ef(document.body,"hide-players",!0);a&&ef(a,"preserve-players",!0)}};
function vk(a){var b=Gc(document,"iframe",null,a.f);C(b,function(c){var d=Gg(c,"onload");d&&(d=x(d))&&W(c,"load",d);if(d=Gg(c,"src"))c.src=d},a);
return $a(b)}
function wk(a){C(document.getElementsByTagName("iframe"),function(b){-1==Ra(a,b)&&O(b,"iframe-hid")})}
function zk(){C(Fc("iframe-hid"),function(a){P(a,"iframe-hid")})}
m.tb=function(a){a=a.currentTarget;a.disabled||(a=Gg(a,"action")||"",this.dismiss(a))};
m.dismiss=function(a){if(!this.Z()){this.l.K("pre-all");this.l.K("pre-"+a);ai(this.f);Pj(ok.A());Pj(pk.A());this.i.setAttribute("tabindex","-1");yk()||(ai(this.g),this.G||P(document.body,"yt-dialog-active"),ah(),zk());this.o&&(kh(this.o),this.o=null);this.v&&(kh(this.v),this.v=null);var b=this.f;if(b){var c=Gg(b,"player-ready-pubsub-key");c&&(Bg(c),Hg(b,"player-ready-pubsub-key"))}this.l.K("post-all");Cg("yt-ui-dialog-hide-complete",this);"cancel"==a&&Cg("yt-ui-dialog-cancelled",this);this.l&&this.l.K("post-"+
a);this.w&&this.w.focus()}};
m.setTitle=function(a){Sc(J("yt-dialog-title",this.f),a)};
m.nb=function(a){S(y(function(){this.ca||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&N(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
m.zb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
m.Z=function(){return this.W};
m.dispose=function(){Zh(this.f)&&this.dismiss("dispose");kh(this.D);this.D.length=0;S(y(function(){this.w=null},this),0);
this.O=this.i=null;this.l.dispose();this.l=null;this.W=!0};
m.Xa=function(a){a.stopPropagation();xk(this)};
function xk(a){S(y(function(){this.i&&this.i.focus()},a),0)}
z("yt.ui.Dialog",rk);function Ak(){ph.call(this,"overlay");this.l=this.g=this.i=this.f=null}
A(Ak,ph);ya(Ak);m=Ak.prototype;m.register=function(){Y(this,"click",this.ga,"target");Y(this,"click",this.hide,"close");Bk(this)};
m.unregister=function(){Ak.B.unregister.call(this);Z(this,"click",this.ga,"target");Z(this,"click",this.hide,"close");this.l&&(Bg(this.l),this.l=null);this.g&&(kh(this.g),this.g=null)};
m.ga=function(a){if(!this.f||!Zh(this.f.f)){var b=this.F(a);a=Ck(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.j(b,"disable-shortcuts")||!1,d=!!this.j(b,"disable-outside-click-dismiss")||!1;this.f=new rk(a,c);this.i=b;var e=J("yt-dialog-fg",a);if(e){var f=this.j(b,"overlay-class")||"",g=this.j(b,"overlay-style")||"default",h=this.j(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));cf(e,f)}this.f.show();Cg("yt-uix-kbd-nav-move-to",e||a);Bk(this);c||
d||(c=y(function(k){N(k.target,"yt-dialog-base")&&Dk(this)},this),this.g=W(J("yt-dialog-base",a),"click",c));
this.R(b,"overlay-shown");Cg("yt-uix-overlay-shown",b)}}};
function Bk(a){a.l||(a.l=zg("yt-uix-overlay-hide",Ek));a.f&&uk(a.f,function(){var b=Ak.A();b.i=null;b.f.dispose();b.f=null})}
function Dk(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.R(b,"overlay-hidden");a.i=null;a.g&&(kh(a.g),a.g=null);a.f=null}}
function Ck(a,b){var c;if(a)if(c=J("yt-dialog",a)){var d=I("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=K(b,"yt-dialog"));return c}
function Fk(){var a=Ak.A();if(a.i)a=J("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Fc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=K(a[b],"yt-dialog");if(Zh(c)){a=a[b];break a}}a=null}return a}
m.hide=function(a){a&&a.disabled||Cg("yt-uix-overlay-hide")};
function Ek(){Dk(Ak.A())}
m.show=function(a){this.ga(a)};var Gk={},Hk=[];function Ik(a){a=K(a,"yt-uix-button-subscription-container");return J("yt-dialog",J("unsubscribe-confirmation-overlay-container",a))}
function Jk(a,b){kh(Hk);Hk.length=0;Gk[b]||(Gk[b]=Ik(a));Ak.A().show(Gk[b]);var c=Fk();return new Ff(function(d){Hk.push(ih(c,function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function Kk(){var a=R("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!R("SESSION_INDEX")&&!R("LOGGED_IN"))}
;function Lk(){ph.call(this,"subscription-button")}
A(Lk,ph);ya(Lk);m=Lk.prototype;m.register=function(){Y(this,"click",this.ha);rh(this,Jh,this.Ca);rh(this,Kh,this.Ba);rh(this,Lh,this.xb);rh(this,Oh,this.Ca);rh(this,Ph,this.Ba);rh(this,Qh,this.yb);rh(this,Sh,this.vb);rh(this,Th,this.ub)};
m.unregister=function(){Z(this,"click",this.ha);Lk.B.unregister.call(this)};
m.isSubscribed=function(a){return!!this.j(a,"is-subscribed")};
m.ha=function(a){var b=this.j(a,"href"),c=this.j(a,"insecure");if(b)a=this.j(a,"target")||"_self",window.open(b,a);else if(!c)if(Kk()){b=this.j(a,"channel-external-id");c=this.j(a,"clicktracking");var d=Mk(this,a),e=this.j(a,"parent-url");if(this.j(a,"is-subscribed")){var f=this.j(a,"subscription-id"),g=new Fh(b,f,d,a,c,e);this.j(a,"show-unsub-confirm-dialog")?Jk(a,b).then(function(){V(Nh,g)}):V(Nh,g)}else a=this.j(a,"params"),V(Ih,new Dh(b,d,c,e,void 0,a))}else Nk(this,a)};
m.Ca=function(a){this.P(a.f,this.Ha,!0)};
m.Ba=function(a){this.P(a.f,this.Ha,!1)};
m.xb=function(a){this.P(a.f,this.Ia,!0,a.g)};
m.yb=function(a){this.P(a.f,this.Ia,!1)};
m.vb=function(a){this.P(a.f,this.Wa)};
m.ub=function(a){this.P(a.f,this.Va)};
m.Ia=function(a,b,c){b?(Eg(a,"is-subscribed","true"),c&&Eg(a,"subscription-id",c)):(Hg(a,"is-subscribed"),Hg(a,"subscription-id"));Ok(this,a)};
function Mk(a,b){if(!a.j(b,"ypc-enabled"))return null;var c=a.j(b,"ypc-item-type"),d=a.j(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
m.Ha=function(a,b){var c=K(a,"yt-uix-button-subscription-container");ef(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Ok(a,b){var c=a.j(b,"style-type"),d=!!a.j(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;ef(b,"yt-uix-button-subscribe"+c,!d);ef(b,e,d);a.j(b,"subscriber-count-tooltip")&&!a.j(b,"subscriber-count-show-when-subscribed")&&(c=X(bi.A()),ef(b,c,!d),b.title=d?"":a.j(b,"subscriber-count-title"));d?S(function(){O(b,"hover-enabled")},1E3):P(b,"hover-enabled")}
m.Wa=function(a){var b=!!this.j(a,"ypc-item-type"),c=!!this.j(a,"ypc-item-id");!this.j(a,"ypc-enabled")&&b&&c&&(O(a,"ypc-enabled"),Eg(a,"ypc-enabled","true"))};
m.Va=function(a){this.j(a,"ypc-enabled")&&(P(a,"ypc-enabled"),Hg(a,"ypc-enabled"))};
function Pk(a,b){return Sa(Fc(X(a)),function(c){return b==this.j(c,"channel-external-id")},a)}
m.Ta=function(a,b,c){var d=cb(arguments,2);C(a,function(e){b.apply(this,Za(e,d))},this)};
m.P=function(a,b,c){var d=Pk(this,a);this.Ta.apply(this,Za([d],cb(arguments,1)))};
function Nk(a,b){var c=y(function(d){d.discoverable_subscriptions&&qg("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.ha(b)},a);
ji(c)}
;function Qk(a){this.f=a;this.H=null;R("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Rk(this),W(this.f,"mouseover",y(this.l,this)),W(this.f,"mouseout",y(this.da,this)),W(this.f,"click",y(this.da,this)),Tg(Lh,Ja(this.g,!0),this),Tg(Qh,Ja(this.g,!1),this),Sk(this))}
function Rk(a){var b={url:R("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.f,relayOpen:"-1"};a=y(a.i,a);zh().open(b,a)}
function Sk(a){Kk()||zg("LOGGED_IN",function(){this.H&&(this.da(),this.H.close(),this.H=null,Rk(this))},a)}
Qk.prototype.i=function(a){this.H=a;a=Lk.A().isSubscribed(this.f);this.g(a)};
Qk.prototype.l=function(){this.H&&this.H.restyle({show:!0})};
Qk.prototype.da=function(){this.H&&this.H.restyle({show:!1})};
Qk.prototype.g=function(a){if(this.H){a={isSubscribed:a};try{this.H.send("msg-hovercard-subscription",a,void 0,x("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function Tk(){yh(function(){var a=Fd(I("yt-subscribe"));a={width:a.width,height:a.height};var b=Uk;zh().ready(a,null,b)})}
function Uk(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=I("yt-subscribe"),c=Lk.A();if(b=J(X(c),b))a&&(Lk.A(),Eg(b,"parent-url",a)),new Qk(b)}}
;function Vk(a){T.call(this,1,arguments);this.f=a}
A(Vk,T);function Wk(a,b){T.call(this,2,arguments);this.g=a;this.f=b}
A(Wk,T);function Xk(a,b,c,d){T.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
A(Xk,T);function Yk(a,b){T.call(this,1,arguments);this.g=a;this.f=b||null}
A(Yk,T);function Zk(a){T.call(this,1,arguments)}
A(Zk,T);var $k=new U("ypc-core-load",Vk),al=new U("ypc-guide-sync-success",Wk),bl=new U("ypc-purchase-success",Xk),cl=new U("ypc-subscription-cancel",Zk),dl=new U("ypc-subscription-cancel-success",Yk),el=new U("ypc-init-subscription",Zk);var fl=!1,gl=[];function hl(a){a.f?fl?V(Mh,a):V($k,new Vk(function(){V(el,new Zk(a.f))})):il(a.g,a.l,a.i,a.source,a.params)}
function jl(a){a.f?fl?V(Rh,a):V($k,new Vk(function(){V(cl,new Zk(a.f))})):kl(a.g,a.o,a.l,a.i,a.source)}
function ll(a){ml($a(a.f))}
function nl(a){ol($a(a.f))}
function pl(a){ql(a.i,a.g,a.f)}
function rl(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&V(Lh,new Eh(b,c,a.f.channelInfo))}
function sl(a){var b=a.f;fb(a.g,function(c,d){V(Lh,new Eh(d,c,b[d]))})}
function tl(a){V(Qh,new Bh(a.g.itemId));a.f&&a.f.length&&(ul(a.f,Qh),ul(a.f,Sh))}
function il(a,b,c,d,e){var f=new Bh(a);V(Jh,f);var g={};g.c=a;c&&(g.eurl=c);d&&(g.source=d);c={};(d=R("PLAYBACK_ID"))&&(c.plid=d);(d=R("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&vl(b,c);Ci("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ka:g,J:c,onSuccess:function(h,k){var l=k.response;V(Lh,new Eh(a,l.id,l.channel_info));l.show_feed_privacy_dialog&&Cg("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
V:function(){V(Kh,f)}})}
function kl(a,b,c,d,e){var f=new Bh(a);V(Oh,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=R("PLAYBACK_ID"))&&(d.plid=a);(a=R("EVENT_ID"))&&(d.ei=a);c&&vl(c,d);Ci("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ka:g,J:d,onSuccess:function(){V(Qh,f)},
V:function(){V(Ph,f)}})}
function ql(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Ch(a,b,c);Ci("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",J:d,onError:function(){V(Wh,e)},
onSuccess:function(){V(Vh,e)}})}}
function ml(a){if(a.length){var b=bb(a,0,40);V("subscription-batch-subscribe-loading");ul(b,Jh);var c={};c.a=b.join(",");var d=function(){V("subscription-batch-subscribe-loaded");ul(b,Kh)};
Ci("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",J:c,onSuccess:function(e,f){d();var g=f.response,h=g.id;if(Aa(h)&&h.length==b.length){var k=g.channel_info_map;C(h,function(l,n){var t=b[n];V(Lh,new Eh(t,l,k[t]))});
a.length?ml(a):V("subscription-batch-subscribe-finished")}},
onError:function(){d();V("subscription-batch-subscribe-failure")}})}}
function ol(a){if(a.length){var b=bb(a,0,40);V("subscription-batch-unsubscribe-loading");ul(b,Oh);var c={};c.c=b.join(",");var d=function(){V("subscription-batch-unsubscribe-loaded");ul(b,Ph)};
Ci("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",J:c,onSuccess:function(){d();ul(b,Qh);a.length&&ol(a)},
onError:function(){d()}})}}
function ul(a,b){C(a,function(c){V(b,new Bh(c))})}
function vl(a,b){var c=vh(a),d;for(d in c)b[d]=c[d]}
;z("yt.setConfig",qg);z("yt.config.set",qg);z("ytbin.www.subscribeembed.init",function(){fl=!0;gl.push(Tg(Ih,hl),Tg(Nh,jl));fl||gl.push(Tg(Mh,hl),Tg(Rh,jl),Tg(Gh,ll),Tg(Hh,nl),Tg(Uh,pl),Tg(bl,rl),Tg(dl,tl),Tg(al,sl));var a=Lk.A(),b=X(a);b in th||(a.register(),qh(a,"yt-uix-init-"+b,a.init),qh(a,"yt-uix-dispose-"+b,a.dispose),th[b]=a);Tk()});}).call(this);
