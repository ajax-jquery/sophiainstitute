var posts_no=50,labelnya="Ebook",showpoststhumbs=!0,thumbwidth=720,thumbheight=720,readmorelink=!1,showcommentslink=!1,posts_date=!1,post_summary=!1,summary_chars=0;function showlatestpostswiththumbs(t){document.write('<div class="top-entry slider js_multislides multislides"><div class="frame js_frame"><ul class="entrys slides js_slides recent-posts-container">');for(var e=0;e<posts_no;e++){var r,n,i=t.feed.entry[e],o=i.title.$t;if(e==t.feed.entry.length)break;for(var l=0;l<i.link.length;l++){if("replies"==i.link[l].rel&&"text/html"==i.link[l].type)var m=i.link[l].title,p=i.link[l].href;if("alternate"==i.link[l].rel){r=i.link[l].href;break}}try{n=(v=i.media$thumbnail.url.replace(/\/s[0-9]+\-w[0-9]+\-h[0-9]+\-c/g,"/w"+thumbwidth+"-h"+thumbheight+"-c")).replace(/\=s[0-9]+\-w[0-9]+\-h[0-9]+\-c/g,"=w"+thumbwidth+"-h"+thumbheight+"-c")}catch(t){s=i.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+130),d=s.substr(b+130,c-b-130),n=-130!=a&&-130!=b&&-130!=c&&""!=d?d:"https://3.bp.blogspot.com/-zR5NXXq84A8/XGf2IXgAjQI/AAAAAAAALYg/e2uMzeVtrho2AdVFBQhXa1bz1OmYdNIAwCPcBGAYYCw/s640/no-image.png"}var h=i.published.$t,u=h.substring(0,4),w=h.substring(5,7),f=h.substring(8,10),g=new Array;if(g[1]="Jan",g[2]="Feb",g[3]="Mar",g[4]="Apr",g[5]="May",g[6]="Jun",g[7]="Jul",g[8]="Aug",g[9]="Sep",g[10]="Oct",g[11]="Nov",g[12]="Dec",document.write('<li class="recent-posts-list js_slide"><div class="postedon"><span>'+labelnya+'</span></div><a href="'+r+'">'),1==showpoststhumbs&&document.write('<img class="recent-post-thumb" src="'+n+'"/>'),document.write('<h3 class="recent-post-title"><span>'+o+"</span></h3></a>"),"content"in i)var y=i.content.$t;else if("summary"in i)y=i.summary.$t;else y="";var v=/<\S[^>]*>/g;if(y=y.replace(v,""),1==post_summary)if(y.length<summary_chars)document.write(y);else{var A=(y=y.substring(0,summary_chars)).lastIndexOf(" ");y=y.substring(0,A),document.write(y+"...")}var k="",_=0;document.write('<span class="dett">'),1==posts_date&&(k=k+g[parseInt(w,10)]+" "+f+" "+u,_=1),1==readmorelink&&(1==_&&(k+=" </span>"),k=k+'<span class="redmore"><a href="'+r+'" class="urls" target ="_top">Selengkapnya</a></span>',_=1),1==showcommentslink&&(1==_&&(k+=" <br> "),"1 Comment"==m&&(m="1 Comment"),"0 Commments"==m&&(m="No Comments"),k+=m='<a href="'+p+'" target ="_top">'+m+"</a>",_=1),document.write(k),document.write(""),document.write("</li>")}document.write("</ul></div><span class='js_prev prev dan-arrow-left fa fa-arrow-left'></span><span class='js_next next dan-arrow-right fa fa-arrow-right'></span></div>")}document.write("<script src='https://ebook-si.blogspot.com//feeds/posts/default?orderby=published&alt=json-in-script&callback=showlatestpostswiththumbs'><\/script>"),document.write("<script type='text/javascript'>//<![CDATA[\r\n$(document).ready(function() {$('img.recent-post-thumb').attr('src', function(i, src) \r\n{return src.replace( 's200-c', 'w300-h190-c' );});});\r\n//]]><\/script>");
var whale=function(){"use strict";function e(t,n){return e.addElements(t,n)}function t(e,t){for(var n=0,i=e.length;i>n&&!1!==t.call(e[n],n,e[n]);n++);return e}function n(e){return e.trim()}function i(e){return(" "+(e.getAttribute("class")||"")+" ").replace(/[\t\r\n\f]/g," ")}function o(e,t){return-1<i(e).indexOf(t)}function a(e,a){var s=i(e);t(a.split(" "),(function(t,i){i=n(i),o(e,i)||(s+=i+" ")})),e.setAttribute("class",n(s))}function s(e,o){t(o.split(" "),(function(t,o){e.setAttribute("class",n(i(e).replace(" "+n(o)+" "," ")))}))}function r(e,n){t(n.split(" "),(function(t,n){(o(e,n)?s:a)(e,n)}))}return e.extend=function(e){var t,n,i,o=1,a=arguments.length;for(o===a&&(e=this,o--);a>o;o++)if(null!=(t=arguments[o]))for(i in t)(n=t[i])!==e[i]&&(e[i]=n);return e},t([a,s,r],(function(e,n){n.collection=function(e,i){t(e,(function(e,t){n(t,i)}))}})),e.components={},e.addElements=function(t,n){var i;if(n)e.components[t]=n;else for(i in t)e.components[i]=t[i];return this},e.extend({trim:n,forEach:t,hasClass:o,addClass:a,removeClass:s,toggleClass:r}),window.addEventListener("load",(function(){var t,n=e.components;for(t in n)for(var i=0,o=document.querySelectorAll("."+t),a=o.length,s=n[t];a>i;i++)new s(o[i],i,t)})),e}();
/*!winfoku*/function startAnimating(e){fpsInterval=500/e,then=Date.now(),startTime=then,animate()}function animate(){requestAnimationFrame(animate),now=Date.now(),(elapsed=now-then)>fpsInterval&&!stop&&(then=now-elapsed%fpsInterval,winfokuSlider.next())}function resetTimer(){now=Date.now(),then=now-(elapsed=now-then)%fpsInterval}!function(){"use strict";function e(e){var t=this.classes;whale.forEach(e.querySelectorAll("a"),(function(e,n){var i=n.parentNode,o=i.querySelectorAll("ul"),a=i.querySelectorAll("a"),s=o[0];o.length&&(whale.addClass(i,t.parent),n.addEventListener("click",(function(e){e.preventDefault(),whale.hasClass(s,t.active)?(whale.removeClass.collection(o,t.active),whale.removeClass.collection(a,t.active)):whale.addClass.collection([n,s],t.active)})))}))}function t(e){var t=this.classes,n=e.querySelectorAll("."+t.item),i=e.querySelectorAll("."+t.panel);n.length&&whale.forEach(n,(function(o,a){var s=a.href.split("#")[1],r=e.querySelector("#"+s);r&&(whale.hasClass(r,t.active)&&whale.addClass(a,t.active),a.addEventListener("click",(function(e){e.preventDefault(),whale.forEach([n,i],(function(e,n){whale.removeClass.collection(n,t.active)})),whale.addClass.collection([a,r],t.active)})))}))}function n(e){var t=this.classes,n=e.getAttribute(this.data.target),i=document.getElementById(n);e.addEventListener("click",(function(n){if(n.preventDefault(),whale.hasClass(i,t.active))whale.removeClass.collection([e,i],t.active);else{whale.addClass.collection([e,i],t.active);var o=function(a){var s=a.target;a!==n&&s!==i&&s.parentNode!==i&&(whale.removeClass.collection([e,i],t.active),document.removeEventListener("click",o))};document.addEventListener("click",o)}}))}function i(e){var t=this.classes,n=e.querySelector("."+t.button),i=e.querySelector("."+t.content),o=t.active;whale.hasClass(i,o)&&whale.addClass(n,o),n.addEventListener("click",(function(){whale.toggleClass.collection([n,i],o)}))}function o(e){var t=this.defaults,n=t.width,i=t.height,o="left="+(screen.width-n)/2+",top="+(screen.height-i)/2+",width="+n+",height="+i;e.addEventListener("click",(function(e){e.preventDefault(),window.open(this.href,this.target,o)}))}e.prototype={classes:{active:"is-active",parent:"is-parent"}},t.prototype.classes={item:"wjs-item",panel:"wjs-panel",active:"is-active"};var a=n.prototype={classes:{active:"is-active"},data:{target:"data-target"}},s={};whale.forEach(["addClass","removeClass","toggleClass"],(function(e,t){s[t]=function(e){var n,i=e.getAttribute(a.data.target),o=document.querySelectorAll("."+i);o&&e.addEventListener("click",(function(){(n=whale[t])(e,a.classes.active),n.collection(o,a.classes.active)}))}})),i.prototype={classes:{active:"is-active",content:"wjs-container",button:"wjs-button"}},o.prototype={defaults:{width:600,height:400}},whale.addElements(s).addElements({"wjs-menu":e,"wjs-tab":t,"wjs-spoiler":i,"wjs-outsite":n,"wjs-window":o})}(),function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,(function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.winfoku=function(e,t){function n(e,t){var n=T.classNameActiveSlide;e.forEach((function(e,t){e.classList.contains(n)&&e.classList.remove(n)})),e[t].classList.add(n)}function i(t,n,i){(0,s.default)(e,t+".winfoku."+n,i)}function c(e,t,n){var i=j&&j.style;i&&(i[M.transition+"TimingFunction"]=n,i[M.transition+"Duration"]=t+"ms",M.hasTranslate3d?i[M.transform]="translate3d("+e+"px, 0, 0)":i[M.transform]="translate("+e+"px, 0)")}function u(e,t){var o=T,a=o.slideSpeed,s=o.slidesToScroll,r=o.infinite,u=o.rewind,d=o.rewindSpeed,v=o.ease,f=o.classNameActiveSlide,m=a,h=t?_+1:_-1,p=Math.round(L-C);i("before","slide",{index:_,nextSlide:h}),"number"!=typeof e&&(e=t?_+s:_-s),e=Math.min(Math.max(e,0),x.length-1),r&&void 0===t&&(e+=r);var w=Math.min(Math.max(-1*x[e].offsetLeft,-1*p),0);u&&Math.abs(g.x)===p&&t&&(w=0,e=0,m=d),c(w,m,v),g.x=w,x[e].offsetLeft<=p&&(_=e),!r||Math.abs(w)!==p&&0!==Math.abs(w)||(t&&(_=r),t||(_=x.length-2*r),g.x=-1*x[_].offsetLeft,A=function(){c(-1*x[_].offsetLeft,0,void 0)}),f&&n(l.call(x),_),i("after","slide",{currentSlide:_})}function d(){i("before","init"),M=(0,a.default)();var s=T=o({},r.default,t),c=s.classNameFrame,u=s.classNameSlideContainer,d=s.classNamePrevCtrl,w=s.classNameNextCtrl,E=s.enableMouseEvents,L=s.classNameActiveSlide;S=e.getElementsByClassName(c)[0],j=S.getElementsByClassName(u)[0],k=e.getElementsByClassName(d)[0],N=e.getElementsByClassName(w)[0],g={x:j.offsetLeft,y:j.offsetTop},x=T.infinite?function(e){var t=T.infinite,n=e.slice(0,t),i=e.slice(e.length-t,e.length);return n.forEach((function(e){var t=e.cloneNode(!0);j.appendChild(t)})),i.reverse().forEach((function(e){var t=e.cloneNode(!0);j.insertBefore(t,j.firstChild)})),j.addEventListener(M.transitionEnd,h),l.call(j.children)}(l.call(j.children)):l.call(j.children),v(),L&&n(x,_),k&&N&&(k.addEventListener("click",f),N.addEventListener("click",m)),j.addEventListener("touchstart",p),E&&(j.addEventListener("mousedown",p),j.addEventListener("click",b)),T.window.addEventListener("resize",y),i("after","init")}function v(){var e=T,t=e.infinite,n=e.ease,i=e.rewindSpeed;L=j.getBoundingClientRect().width||j.offsetWidth,(C=S.getBoundingClientRect().width||S.offsetWidth)===L&&(L=x.reduce((function(e,t){return e+t.getBoundingClientRect().width||t.offsetWidth}),0)),_=0,t?(c(-1*x[_+t].offsetLeft,0,null),_+=t,g.x=-1*x[_].offsetLeft):c(0,i,n)}function f(){u(!1,!1)}function m(){u(!1,!0)}function h(){A&&(A(),A=void 0)}function p(e){var t=T.enableMouseEvents,n=e.touches?e.touches[0]:e;t&&(j.addEventListener("mousemove",w),j.addEventListener("mouseup",E),j.addEventListener("mouseleave",E)),j.addEventListener("touchmove",w),j.addEventListener("touchend",E);var o=n.pageX,a=n.pageY;B={x:o,y:a,time:Date.now()},D=void 0,q={},i("on","touchstart",{event:e})}function w(e){var t=e.touches?e.touches[0]:e,n=t.pageX,o=t.pageY;q={x:n-B.x,y:o-B.y},void 0===D&&(D=!!(D||Math.abs(q.x)<Math.abs(q.y))),!D&&B&&(e.preventDefault(),c(g.x+q.x,0,null)),i("on","touchmove",{event:e})}function E(e){var t=B?Date.now()-B.time:void 0,n=Number(t)<300&&Math.abs(q.x)>25||Math.abs(q.x)>C/3,o=!_&&q.x>0||_===x.length-1&&q.x<0,a=q.x<0;D||(n&&!o?u(!1,a):c(g.x,T.snapBackSpeed)),B=void 0,j.removeEventListener("touchmove",w),j.removeEventListener("touchend",E),j.removeEventListener("mousemove",w),j.removeEventListener("mouseup",E),j.removeEventListener("mouseleave",E),i("on","touchend",{event:e})}function b(e){q.x&&e.preventDefault()}function y(e){v(),i("on","resize",{event:e})}var g=void 0,L=void 0,C=void 0,x=void 0,S=void 0,j=void 0,k=void 0,N=void 0,M=void 0,A=void 0,_=0,T={};"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e[0]);var B=void 0,q=void 0,D=void 0;return d(),{setup:d,reset:v,slideTo:function(e){u(e)},returnIndex:function(){return _-T.infinite||0},prev:f,next:m,destroy:function(){i("before","destroy"),j.removeEventListener(M.transitionEnd,h),j.removeEventListener("touchstart",p),j.removeEventListener("touchmove",w),j.removeEventListener("touchend",E),j.removeEventListener("mousemove",w),j.removeEventListener("mousedown",p),j.removeEventListener("mouseup",E),j.removeEventListener("mouseleave",E),j.removeEventListener("click",b),T.window.removeEventListener("resize",y),k&&k.removeEventListener("click",f),N&&N.removeEventListener("click",m),i("after","destroy")}}};var a=i(n(2)),s=i(n(3)),r=i(n(5)),l=Array.prototype.slice},function(e,t){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var t,n,i,o=void 0,a=void 0,s=void 0,r=void 0;return t=document.createElement("_"),n=t.style,i=void 0,""===n[i="webkitTransition"]&&(s="webkitTransitionEnd",a=i),""===n[i="transition"]&&(s="transitionend",a=i),""===n[i="webkitTransform"]&&(o=i),""===n[i="msTransform"]&&(o=i),""===n[i="transform"]&&(o=i),document.body.insertBefore(t,null),n[o]="translate3d(0, 0, 0)",r=!!e.getComputedStyle(t).getPropertyValue(o),document.body.removeChild(t),{transform:o,transition:a,transitionEnd:s,hasTranslate3d:r}}}).call(t,function(){return this}())},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=new i.default(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)};var i=function(e){return e&&e.__esModule?e:{default:e}}(n(4))},function(e,t){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,function(){return this}())},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={slidesToScroll:1,slideSpeed:300,rewindSpeed:600,snapBackSpeed:200,ease:"ease",rewind:!1,infinite:!1,classNameFrame:"js_frame",classNameSlideContainer:"js_slides",classNamePrevCtrl:"js_prev",classNameNextCtrl:"js_next",classNameActiveSlide:"active",enableMouseEvents:!1,window:window}}])}));var fps,fpsInterval,startTime,now,then,elapsed,slidesToScroll=4,slider=document.querySelector(".js_multislides"),stop=!1,frameCount=0,winfokuSlider=winfoku(slider,{infinite:0,rewind:!0,enableMouseEvents:!0});startAnimating(.2),slider.addEventListener("mouseover",(function(){stop=!0})),slider.addEventListener("mouseout",(function(){resetTimer(),stop=!1}));
