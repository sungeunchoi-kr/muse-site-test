(()=>{var t={757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return J()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=$(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?y:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=y,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",h="suspendedYield",f="executing",y="completed",m={};function d(){}function v(){}function g(){}var x={};s(x,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(N([])));k&&k!==r&&n.call(k,a)&&(x=k);var _=g.prototype=d.prototype=Object.create(x);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function $(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,$(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:J}}function J(){return{value:e,done:!0}}return v.prototype=g,s(_,"constructor",g),s(g,"constructor",v),v.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},S(O.prototype),s(O.prototype,i,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(_),s(_,c,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,s,"next",e)}function s(e){t(i,o,a,c,s,"throw",e)}c(void 0)}))}}var n=r(757),o=r.n(n);function a(){return(a=e(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){$.ajax({method:"GET",url:"".concat(apiHost,"/api/v1/app/runtime-constants?view=site"),dataType:"json",contentType:"application/json"}).done((function(e){t(e)})).catch((function(t){e(t)}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(t,e,r,n){return new Promise((function(o,a){$.ajax({method:"POST",url:"".concat(apiHost,"/api/v1/checkout-session"),data:JSON.stringify({priceId:t,successUrl:r,failureUrl:n}),dataType:"json",contentType:"application/json",headers:{Authorization:"Bearer "+e}}).done((function(t){console.log("getCheckoutLink response=%O",t),o(t.url)})).catch((function(t){console.log("getCheckoutLink returned error: %O",t),a(t)}))}))}var c="https://musesessions.co/spark-confirmation",s="https://musesessions.co/checkout-failure",u="other",l={other:{starter:{monthly:"price_1NpwoOJYJ1xBqV1YSSljd05p",annually:"price_1NpyQCJYJ1xBqV1YbCdQd5hC"},creator:{monthly:"price_1NpxroJYJ1xBqV1Y09mLnZMn",annually:"price_1NpyWnJYJ1xBqV1YTmXUEXXq"},pro:{monthly:"price_1NpxxSJYJ1xBqV1YPiY3ee9O",annually:"price_1Npya9JYJ1xBqV1Ya7Pn3qRJ"}},south_america:{starter:{monthly:"price_1Npyn2JYJ1xBqV1YqieXkJxg",annually:"price_1NpwoOJYJ1xBqV1YoZXz3cNQ"},creator:{monthly:"price_1NpxroJYJ1xBqV1YG3Sz6PZu",annually:"price_1NpyWnJYJ1xBqV1YL2KWhpAx"},pro:{monthly:"price_1NpxxSJYJ1xBqV1YmwbgLe0n",annually:"price_1Npya9JYJ1xBqV1YH0MWKN7G"}}},p={IN:{starter:{monthly:"₹100/month",annually:"₹1,000 (2 months free)"},creator:{monthly:"₹166/month",annually:"₹1,660 (2 months free)"},pro:{monthly:"₹232/month",annually:"₹2,323 (2 months free)"}},NG:{starter:{monthly:"₦1,120/month",annually:"₦11,200 (2 months free)"},creator:{monthly:"₦1,866/month",annually:"₦18,667 (2 months free)"},pro:{monthly:"₦2,613.38/month",annually:"₦26,133.80 (2 months free)"}},"AR,BO,BR,CL,CO,EC,GY,PY,PE,SR,UY,VE":{starter:{monthly:"$2.99/month",annually:"$29.99 (2 months free)"},creator:{monthly:"$4.99/month",annually:"$49.99 (2 months free)"},pro:{monthly:"$6.99/month",annually:"$69.99 (2 months free)"}}};window.onload=function(){var t=function(){var t=localStorage.getItem("user"),e=localStorage.getItem("authToken");if(!t||!e)return localStorage.removeItem("user"),localStorage.removeItem("authToken"),null;try{return JSON.parse(t)}catch(t){return localStorage.removeItem("user"),localStorage.removeItem("authToken"),null}}(),r=localStorage.getItem("authToken")||null;console.log("spark.js loaded. user=%O",t),$("#spark-version").text("Spark version "),function(){return a.apply(this,arguments)}().then((function(t){var e=t.app_latest_version,r=t.spark_latest_version;$("#spark-version").text("Spark version "+r),function(t,e){var r="https://downloads.musesessions.co";$('a[href$="/Muse-VERSION.dmg"]').attr("href","".concat(r,"/muse-app/Muse-").concat(t,".dmg")),$('a[href$="/Muse-arm64-VERSION.dmg"]').attr("href","".concat(r,"/muse-app/Muse-arm64-").concat(t,".dmg")),$('a[href$="/MuseSetup-VERSION.exe"]').attr("href","".concat(r,"/muse-app/MuseSetup-").concat(t,".exe")),$('a[href$="/Muse Spark VERSION.dmg"]').attr("href","".concat(r,"/muse-spark/Muse Spark ").concat(e,".dmg")),$('a[href$="/Muse Spark Install VERSION.exe"]').attr("href","".concat(r,"/muse-spark/Muse Spark Install ").concat(e,".exe"))}(e,r)})),new Promise((function(t,r){var n=localStorage.getItem("countryCodeOverride");n?t({status:"success",countryCode:n}):(console.log("aaaa"),$.ajax({method:"POST",url:"".concat(apiHost,"/api/v1/requests/ip-info"),data:JSON.stringify({}),dataType:"json",contentType:"application/json",error:function(t){(t.responseJSON||{}).code,r(t.responseJSON||{})}}).done(function(){var r=e(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(r);case 1:case"end":return e.stop()}}),e)})));return function(t){return r.apply(this,arguments)}}()))})).then((function(t){var e=t.status,r=t.countryCode;console.log("ip-info response: %O",t),"fail"!==e&&(u=function(t){return["AR","BO","BR","CL","CO","EC","GY","PY","PE","SR","UY","VE"].includes(t)?"south_america":"other"}(r),function(t){var e=null;Object.keys(p).forEach((function(r){r.split(",").includes(t)&&(e=p[r])})),e&&($("#pricetag_starter_monthly").text(e.starter.monthly),$("#pricetag_creator_monthly").text(e.creator.monthly),$("#pricetag_pro_monthly").text(e.pro.monthly),$("#pricetag_starter_annually").text(e.starter.annually),$("#pricetag_creator_annually").text(e.creator.annually),$("#pricetag_pro_annually").text(e.pro.annually))}(r))})).catch((function(t){console.error(t)}));var n=function(t,e,r){try{return l[r][t][e]}catch(t){console.error("failed to get price id. error: "+t.message)}},h=function(){var n=e(o().mark((function e(n){var a,u,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,i(n,r,c,s);case 3:return a=e.sent,e.abrupt("return",a);case 7:return u={op:"stripeCheckout",priceId:n,successUrl:c,failureUrl:s},l="login?actionAfterLogin=".concat(JSON.stringify(u)),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var t=e(o().mark((function t(e,r){var a,i,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,void 0,void 0,e=$('div[class="pricing-verticals annually"][style="display: flex;"]').length>0,o=$('div[class="pricing-verticals annually"][style="display:flex"]').length>0,a=e||o?"annually":"monthly",console.log('type="'.concat(r,'" clicked. planDurationType=%O'),a),console.log("call stripePriceId: type=".concat(r," planDurationType=").concat(a," regionClass=").concat(u)),i=n(r,a,u),console.log("got stripePriceId=".concat(i)),t.next=8,h(i);case 8:c=t.sent,window.location.href=c,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert('There was an error during checkout. Please contact support. message: "'.concat(t.t0.message,'"'));case 15:case"end":return t.stop()}var e,o}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}();$('a:contains("Choose Starter")').on("click",(function(t){f(t,"starter")})),$('a:contains("Choose Creator")').on("click",(function(t){f(t,"creator")})),$('a:contains("Choose Pro")').on("click",(function(t){f(t,"pro")})),$('a:contains("Choose Starter")').attr({target:"_blank",rel:"noopener noreferrer"}),$('a:contains("Choose Creator")').attr({target:"_blank",rel:"noopener noreferrer"}),$('a:contains("Choose Pro")').attr({target:"_blank",rel:"noopener noreferrer"}),$("#edit-account-btn").on("click",(function(t){function e(){$("#edit-account-btn").css("pointer-events","auto").css("opacity","1")}t.preventDefault(),$("#error-text").css("display","none");var r=$("#email-signup").val();if($("#edit-account-btn").css("pointer-events","none").css("opacity","0.75"),console.log("POST"),0===(r||"").trim().length)return alert("Please specify an email."),void e();$.ajax({method:"POST",url:"".concat(apiHost,"/api/v1/requests/download-app-email"),data:JSON.stringify({email:r}),dataType:"json",contentType:"application/json",error:function(t){alert("Sorry, there was an error while processing the request."),e()},success:function(t){$("#success-message").css("display","block"),$("#success-message > div").css("color","#161616"),$("#edit-account-btn").css("display","none")}})}))}})()})();