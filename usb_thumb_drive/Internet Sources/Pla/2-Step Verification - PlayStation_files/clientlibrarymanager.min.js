(function(){if(typeof window.GraniteClientLibraryManager!=="undefined"){return
}window.GraniteClientLibraryManager={debug:false,scripts:{},initialInclude:true,windowLoaded:false,contextPath:null,hook:null,channelCB:function(){return""
},setChannelCB:function(cb){this.channelCB=cb
},isDebug:function(debug){var href=document.location.href;
return(typeof console!=="undefined")&&(debug||this.debug)&&href.indexOf("debugConsole=true")!==-1
},write:function(scripts,debug){debug=this.isDebug(debug);
var channel=this.channelCB();
if(!channel){channel="default"
}if(debug){console.log("LibraryManager: detected channel: "+channel)
}for(var i=0;
i<scripts.length;
i++){var script=scripts[i];
if(!this.scripts[script.p]){this.scripts[script.p]=script;
if(debug){console.log("LibraryManager: processing script",script.p,script)
}if(this.isIncluded(channel,script.c,debug)){this.includeScript(script.p,debug)
}}}},isIncluded:function(channel,channels,debug){if(channels.length===0){if(debug){console.log("LibraryManager: ...accepted. no channels defined")
}return true
}var notChannel="!"+channel;
var accept=false;
var cnt=0;
for(var j=0;
j<channels.length;
j++){var c=channels[j];
if(c.charAt(0)==="!"){if(c===notChannel){if(debug){console.log("LibraryManager: ...rejected. channel excluded: ",c)
}return false
}}else{if(c===channel){if(debug){console.log("LibraryManager: ...accepted. channel included: ",c)
}accept=true
}cnt++
}}if(cnt===0){if(debug){console.log("LibraryManager: ...accepted. no more channels after exclusion ")
}accept=true
}if(!accept&&debug){console.log("LibraryManager: ...rejected.")
}return accept
},includeScript:function(path,debug){var ext=path;
var idx=ext.indexOf("?");
if(idx>0){ext=ext.substring(0,idx)
}ext=ext.substring(ext.lastIndexOf(".")+1);
if(this.initialInclude){this.initialInclude=false;
if(typeof G_XHR_HOOK!=="undefined"&&Object.prototype.toString.call(G_XHR_HOOK)==="[object Function]"){this.hook=G_XHR_HOOK
}this.contextPath=this.detectContextPath();
var man=this;
if(window.addEventListener){window.addEventListener("load",function(){man.windowLoaded=true
},false)
}else{if(window.attachEvent){window.attachEvent("onload",function(){man.windowLoaded=true
})
}}}if(this.hook){var p={url:path,method:"GET"};
try{var out=this.hook(p);
if(out){path=out.url
}}catch(e){if(debug){console.log("LibraryManager: error during CQ_XHR_HOOK call: ",e.message)
}}}if(this.contextPath){if(path.indexOf("/")===0&&path.indexOf(this.contextPath+"/")!==0){path=this.contextPath+path
}}if(ext==="js"){if(debug){console.log("LibraryManager: --> writing js include: ",path)
}if(this.windowLoaded){try{var request=document.all?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();
request.open("GET",path,false);
request.send(null);
if(window.execScript){window.execScript(request.responseText)
}else{eval.call(null,request.responseText)
}}catch(err){if(debug){console.log("LibraryManager: --> evaluating js include failed: ",path)
}}}else{document.writeln('<script src="'+path+'" type="text/javascript"><\/script>')
}}else{if(ext==="css"){var head=document.getElementsByTagName("head")||document.getElementsByTagName("*");
head=head[0];
var n=document.createElement("link");
n.type="text/css";
n.rel="stylesheet";
n.href=path;
head.appendChild(n);
if(debug){console.log("LibraryManager: --> writing css include: ",path)
}}else{if(debug){console.log("LibraryManager: --> unsupported extension: ",path)
}}}},detectContextPath:function(){var scripts=document.getElementsByTagName("script");
var regexp=/\/etc\/clientlibs\/foundation\/librarymanager\/*\.js$/;
for(var i=0;
i<scripts.length;
i++){var path=scripts[i].src;
if(path.indexOf("?")>=0){path=path.substring(0,path.indexOf("?"))
}if(path.match(regexp)){path=path.replace(/.*:[/][/]/,"");
path=path.substring(path.indexOf("/"));
path=path.replace(regexp,"");
this.contextPath=path;
break
}}}};
window.CQClientLibraryManager=window.GraniteClientLibraryManager
})();
(function(b,a){function c(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");
var d="[\\?&]"+e+"=([^&#]*)";
var g=new RegExp(d);
var f=g.exec(b.location.search);
if(f===null){return""
}else{return decodeURIComponent(f[1].replace(/\+/g," "))
}}a.setChannelCB(function(){var d=[{channel:"ie6",match:/MSIE ([0-6]\.[.0-9]{0,})/i},{channel:"touch",match:/android.+mobile|android.+chrome|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|pad|pod|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i},{channel:"extjs",match:/(windows|linux|os\s+[x9]|solaris|bsd)/i}];
var g=c("forceChannel");
if(g){return g
}var f=navigator.userAgent;
for(var e=0;
e<d.length;
e++){var h=d[e];
if(h.match.test(f)){return h.channel
}}return""
})
}(window,GraniteClientLibraryManager));
window.GraniteTiming=function(){return{stamps:null,pageRenderStart:null,lastTimes:{},init:function(){this.pageRenderStart=new Date();
this.lastTimes["default"]=new Date();
this.stamps="";
var b=window.onload;
if(typeof window.onload!=="function"){window.onload=window.GraniteTiming.stampOnLoad
}else{window.onload=function(){if(b){b()
}window.GraniteTiming.stampOnLoad()
}
}var a=window.document.onkeydown;
if(typeof window.document.onkeydown!=="function"){window.document.onkeydown=window.GraniteTiming.showDiv
}else{window.document.onkeydown=function(c){if(a){a(c)
}window.GraniteTiming.showDiv(c)
}
}},stamp:function(f,g,d){if(!g){g="default"
}var e=this.lastTimes[g];
var a=new Date();
var b;
if(d||e===undefined){b="&nbsp;---"
}else{b=a-e;
b=(b<1000?(b<100?(b<10?"&nbsp;&nbsp;&nbsp;":"&nbsp;&nbsp;"):"&nbsp;"):"")+b
}var c=b+" / "+(a-this.pageRenderStart)+" ms &ndash; "+f;
this.lastTimes[g]=a;
this.stamps+=(this.stamps)?","+c:c
},stampOnLoad:function(){window.GraniteTiming.stamp("Complete document loaded");
window.onload=null
},writeDiv:function(){var a=window.document.createElement("div");
var b=a.style;
a.id="cqTiming";
b.margin="0 auto 0 auto";
b.borderBottom="1px solid #000000";
b.marginBottom="5px";
b.fontSize="small";
b.fontFamily="monospace";
b.backgroundColor="#000000";
b.color="#ffffff";
b.position="absolute";
b.top="0px";
b.left="0px";
a.innerHTML='<p style="margin: 2px 0 1px 0"> Page load staticstics:<br>'+this.stamps.replace(/,/g,"<br>")+'</p><p style="margin: 2px 0 1px 0; text-align: right"><a href="javascript:{GraniteTiming.hideDiv();}">Close</a></p>';
window.document.body.appendChild(a)
},hideDiv:function(){window.document.getElementById("cqTiming").style.display="none"
},showDiv:function(c){var b;
var a;
if(document.all){b=window.event.keyCode;
a=window.event
}else{b=(typeof(c.which)!=="undefined")?c.which:0;
a=c
}if(a&&a.ctrlKey&&a.shiftKey&&b===85){window.GraniteTiming.writeDiv()
}}}
}();
window.GraniteTiming.init();