webpackJsonp([35783957827783],[,,,,,,,,function(e,t,n){var r=n(39),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},,,,,function(e,t,n){function r(e,t){var n=a(e,t);return o(n)?n:void 0}var o=n(163),a=n(175);e.exports=r},,function(e,t,n){function r(e){return null==e?void 0===e?s:u:c&&c in Object(e)?a(e):i(e)}var o=n(21),a=n(74),i=n(75),u="[object Null]",s="[object Undefined]",c=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},,,,,function(e,t,n){var r=n(8),o=r.Symbol;e.exports=o},,function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(185),a=n(186),i=n(187),u=n(188),s=n(189);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=s,e.exports=r},function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}var o=n(78);e.exports=r},function(e,t,n){function r(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}var o=n(182);e.exports=r},function(e,t,n){var r=n(13),o=r(Object,"create");e.exports=o},,,,,,,,,,,,function(e,t,n){var r=n(13),o=n(8),a=r(o,"Map");e.exports=a},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t){var n=Array.isArray;e.exports=n},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function a(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function i(){h&&d&&(h=!1,d.length?y=d.concat(y):v=-1,y.length&&u())}function u(){if(!h){var e=o(i);h=!0;for(var t=y.length;t;){for(d=y,y=[];++v<t;)d&&d[v].run();v=-1,t=y.length}d=null,h=!1,a(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,y=[],h=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new s(e,t)),1!==y.length||h||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(190),a=n(191),i=n(192),u=n(193),s=n(194);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=s,e.exports=r},function(e,t,n){function r(e,t,n,r,c,f){var l=n&u,p=e.length,d=t.length;if(p!=d&&!(l&&d>p))return!1;var y=f.get(e);if(y&&f.get(t))return y==t;var h=-1,v=!0,g=n&s?new o:void 0;for(f.set(e,t),f.set(t,e);++h<p;){var b=e[h],m=t[h];if(r)var _=l?r(m,b,h,t,e,f):r(b,m,h,e,t,f);if(void 0!==_){if(_)continue;v=!1;break}if(g){if(!a(t,function(e,t){if(!i(g,t)&&(b===e||c(b,e,n,r,f)))return g.push(t)})){v=!1;break}}else if(b!==m&&!c(b,m,n,r,f)){v=!1;break}}return f.delete(e),f.delete(t),v}var o=n(151),a=n(158),i=n(168),u=1,s=2;e.exports=r},function(e,t,n){function r(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=u.call(e);return r&&(t?e[s]=n:delete e[s]),o}var o=n(21),a=Object.prototype,i=a.hasOwnProperty,u=a.toString,s=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t){function n(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;e.exports=n},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t,n){(function(e){var r=n(8),o=n(211),a="object"==typeof t&&t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,u=i&&i.exports===a,s=u?r.Buffer:void 0,c=s?s.isBuffer:void 0,f=c||o;e.exports=f}).call(t,n(63)(e))},function(e,t,n){function r(e){if(!a(e))return!1;var t=o(e);return t==u||t==s||t==i||t==c}var o=n(15),a=n(82),i="[object AsyncFunction]",u="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";e.exports=r},function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){var r=n(164),o=n(167),a=n(197),i=a&&a.isTypedArray,u=i?o(i):r;e.exports=u},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(3),s=r(u),c=n(1),f=r(c),l=n(234),p=r(l);n(213);var d=function(e){function t(){o(this,t);var n=a(this,e.call(this));return n.state={width:854,height:450,playerVars:{autoplay:0,controls:1,rel:0,showinfo:1}},n}return i(t,e),t.prototype.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},t.prototype.updateDimensions=function(){854<=window.innerWidth?this.setState({height:450,width:854}):this.setState({height:225,width:window.outerWidth})},t.prototype.render=function(){return f.default.createElement("div",{className:"row player"},f.default.createElement(p.default,{videoId:this.props.videoId,id:this.props.id,className:this.props.className,opts:this.state,onReady:this.props.onReady,onPlay:this.props.onPlay,onPause:this.props.onPause,onEnd:this.props.onEnd,onError:this.props.onError,onStateChange:this.props.onStateChange,onPlaybackRateChange:this.props.onPlaybackRateChange,onPlaybackQualityChange:this.props.onPlaybackQualityChange}))},t}(f.default.Component);d.defaultProps={className:null,id:"player",opts:{},onEnd:function(){},onError:function(){},onPause:function(){},onPlay:function(){},onPlaybackQualityChange:function(){},onPlaybackRateChange:function(){},onReady:function(){},onStateChange:function(){},videoId:null},d.propTypes={className:s.default.string,id:s.default.string,opts:s.default.object,onReady:s.default.func,onPlay:s.default.func,onPause:s.default.func,onEnd:s.default.func,onError:s.default.func,onStateChange:s.default.func,onPlaybackRateChange:s.default.func,onPlaybackQualityChange:s.default.func,videoId:s.default.string},t.default=d,e.exports=t.default},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function a(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))}),e.splice(a,0,r)}}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function u(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function s(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof r&&"env"in r&&(e={NODE_ENV:"production",PUBLIC_DIR:"/home/mathias/dev/org.cryptocurrencytalks.www/public"}.DEBUG),e}function c(){try{return window.localStorage}catch(e){}}t=e.exports=n(140),t.log=i,t.formatArgs=a,t.save=u,t.load=s,t.useColors=o,t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(s())}).call(t,n(41))},function(e,t,n){function r(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function o(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(c||r);e.diff=o,e.prev=c,e.curr=r,c=r;for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var u=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;u++;var o=t.formatters[r];if("function"==typeof o){var i=a[u];n=o.call(e,i),a.splice(u,1),u--}return n}),t.formatArgs.call(e,a);var s=n.log||t.log||console.log.bind(console);s.apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"==typeof t.init&&t.init(n),n}function a(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function u(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1}function s(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=o.debug=o.default=o,t.coerce=s,t.disable=i,t.enable=a,t.enabled=u,t.humanize=n(212),t.names=[],t.skips=[],t.formatters={};var c},,,,,function(e,t){e.exports={"Don Tapscott":{bio:"Don Tapscott is a Canadian business executive, author, consultant and speaker, who specializes in business strategy, organizational transformation and the role of technology in business and society."},"John McAfee":{bio:"John started as a programmer for NASA's Institute for Space Studies before becoming the creator of the first anti-virus software company that continues to bear his name. Now he turns his genius towards the future of economics. He is a champion of blockchain technologies and a fierce advocate of cryptocurrencies. John McAfee brings his considerable skill to bare advocating for the Crypto community. History will know him as the one who ushered a revolutionary movement into a new era."},"Mike Schwartz":{bio:"BCG's Mike Schwartz is a partner, managing director and global chairman of the Blockchain Technologies Lab at the Sydney office of BCG Digital Ventures, an investment and incubation firm dedicated to supporting some of the world’s most influential and innovative startups. Before starting at BCG in 2002, Schwartz founded Genos, an organization working to improve emotional intelligence assessments and development tools in workplaces."}}},function(e,t){function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function o(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,a){var i=document.head||document.getElementsByTagName("head")[0],u=document.createElement("script");"function"==typeof t&&(a=t,t={}),t=t||{},a=a||function(){},u.type=t.type||"text/javascript",u.charset=t.charset||"utf8",u.async=!("async"in t)||!!t.async,u.src=e,t.attrs&&n(u,t.attrs),t.text&&(u.text=""+t.text);var s="onload"in u?r:o;s(u,a),u.onload||r(u,a),i.appendChild(u)}},function(e,t,n){var r=n(13),o=n(8),a=r(o,"DataView");e.exports=a},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(176),a=n(177),i=n(178),u=n(179),s=n(180);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=u,r.prototype.set=s,e.exports=r},function(e,t,n){var r=n(13),o=n(8),a=r(o,"Promise");e.exports=a},function(e,t,n){var r=n(13),o=n(8),a=r(o,"Set");e.exports=a},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new o;++t<n;)this.add(e[t])}var o=n(72),a=n(198),i=n(199);r.prototype.add=r.prototype.push=a,r.prototype.has=i,e.exports=r},function(e,t,n){function r(e){var t=this.__data__=new o(e);this.size=t.size}var o=n(23),a=n(201),i=n(202),u=n(203),s=n(204),c=n(205);r.prototype.clear=a,r.prototype.delete=i,r.prototype.get=u,r.prototype.has=s,r.prototype.set=c,e.exports=r},function(e,t,n){var r=n(8),o=r.Uint8Array;e.exports=o},function(e,t,n){var r=n(13),o=n(8),a=r(o,"WeakMap");e.exports=a},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}e.exports=n},function(e,t,n){function r(e,t){var n=i(e),r=!n&&a(e),f=!n&&!r&&u(e),p=!n&&!r&&!f&&c(e),d=n||r||f||p,y=d?o(e.length,String):[],h=y.length;for(var v in e)!t&&!l.call(e,v)||d&&("length"==v||f&&("offset"==v||"parent"==v)||p&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,h))||y.push(v);return y}var o=n(166),a=n(206),i=n(40),u=n(79),s=n(181),c=n(83),f=Object.prototype,l=f.hasOwnProperty;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}e.exports=n},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}e.exports=n},function(e,t,n){function r(e,t,n){var r=t(e);return a(e)?r:o(r,n(e))}var o=n(157),a=n(40);e.exports=r},function(e,t,n){function r(e){return a(e)&&o(e)==i}var o=n(15),a=n(16),i="[object Arguments]";e.exports=r},function(e,t,n){function r(e,t,n,i,u){return e===t||(null==e||null==t||!a(e)&&!a(t)?e!==e&&t!==t:o(e,t,n,i,r,u))}var o=n(162),a=n(16);e.exports=r},function(e,t,n){function r(e,t,n,r,v,b){var m=c(e),_=c(t),w=m?y:s(e),x=_?y:s(t);w=w==d?h:w,x=x==d?h:x;var P=w==h,j=x==h,E=w==x;if(E&&f(e)){if(!f(t))return!1;m=!0,P=!1}if(E&&!P)return b||(b=new o),m||l(e)?a(e,t,n,r,v,b):i(e,t,w,n,r,v,b);if(!(n&p)){var O=P&&g.call(e,"__wrapped__"),S=j&&g.call(t,"__wrapped__");if(O||S){var k=O?e.value():e,C=S?t.value():t;return b||(b=new o),v(k,C,n,r,b)}}return!!E&&(b||(b=new o),u(e,t,n,r,v,b))}var o=n(152),a=n(73),i=n(170),u=n(171),s=n(174),c=n(40),f=n(79),l=n(83),p=1,d="[object Arguments]",y="[object Array]",h="[object Object]",v=Object.prototype,g=v.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){if(!i(e)||a(e))return!1;var t=o(e)?y:c;return t.test(u(e))}var o=n(80),a=n(183),i=n(82),u=n(77),s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,p=f.toString,d=l.hasOwnProperty,y=RegExp("^"+p.call(d).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},function(e,t,n){function r(e){return i(e)&&a(e.length)&&!!T[o(e)]}var o=n(15),a=n(81),i=n(16),u="[object Arguments]",s="[object Array]",c="[object Boolean]",f="[object Date]",l="[object Error]",p="[object Function]",d="[object Map]",y="[object Number]",h="[object Object]",v="[object RegExp]",g="[object Set]",b="[object String]",m="[object WeakMap]",_="[object ArrayBuffer]",w="[object DataView]",x="[object Float32Array]",P="[object Float64Array]",j="[object Int8Array]",E="[object Int16Array]",O="[object Int32Array]",S="[object Uint8Array]",k="[object Uint8ClampedArray]",C="[object Uint16Array]",A="[object Uint32Array]",T={};T[x]=T[P]=T[j]=T[E]=T[O]=T[S]=T[k]=T[C]=T[A]=!0,T[u]=T[s]=T[_]=T[c]=T[w]=T[f]=T[l]=T[p]=T[d]=T[y]=T[h]=T[v]=T[g]=T[b]=T[m]=!1,e.exports=r},function(e,t,n){function r(e){if(!o(e))return a(e);var t=[];for(var n in Object(e))u.call(e,n)&&"constructor"!=n&&t.push(n);return t}var o=n(184),a=n(196),i=Object.prototype,u=i.hasOwnProperty;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t){function n(e,t){return e.has(t)}e.exports=n},function(e,t,n){var r=n(8),o=r["__core-js_shared__"];e.exports=o},function(e,t,n){function r(e,t,n,r,o,P,E){switch(n){case x:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case w:return!(e.byteLength!=t.byteLength||!P(new a(e),new a(t)));case p:case d:case v:return i(+e,+t);case y:return e.name==t.name&&e.message==t.message;case g:case m:return e==t+"";case h:var O=s;case b:var S=r&f;if(O||(O=c),e.size!=t.size&&!S)return!1;var k=E.get(e);if(k)return k==t;r|=l,E.set(e,t);var C=u(O(e),O(t),r,o,P,E);return E.delete(e),C;case _:if(j)return j.call(e)==j.call(t)}return!1}var o=n(21),a=n(153),i=n(78),u=n(73),s=n(195),c=n(200),f=1,l=2,p="[object Boolean]",d="[object Date]",y="[object Error]",h="[object Map]",v="[object Number]",g="[object RegExp]",b="[object Set]",m="[object String]",_="[object Symbol]",w="[object ArrayBuffer]",x="[object DataView]",P=o?o.prototype:void 0,j=P?P.valueOf:void 0;e.exports=r},function(e,t,n){function r(e,t,n,r,i,s){var c=n&a,f=o(e),l=f.length,p=o(t),d=p.length;if(l!=d&&!c)return!1;for(var y=l;y--;){var h=f[y];if(!(c?h in t:u.call(t,h)))return!1}var v=s.get(e);if(v&&s.get(t))return v==t;var g=!0;s.set(e,t),s.set(t,e);for(var b=c;++y<l;){h=f[y];var m=e[h],_=t[h];if(r)var w=c?r(_,m,h,t,e,s):r(m,_,h,e,t,s);if(!(void 0===w?m===_||i(m,_,n,r,s):w)){g=!1;break}b||(b="constructor"==h)}if(g&&!b){var x=e.constructor,P=t.constructor;x!=P&&"constructor"in e&&"constructor"in t&&!("function"==typeof x&&x instanceof x&&"function"==typeof P&&P instanceof P)&&(g=!1)}return s.delete(e),s.delete(t),g}var o=n(172),a=1,i=Object.prototype,u=i.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){return o(e,i,a)}var o=n(159),a=n(173),i=n(209);e.exports=r},function(e,t,n){var r=n(155),o=n(210),a=Object.prototype,i=a.propertyIsEnumerable,u=Object.getOwnPropertySymbols,s=u?function(e){return null==e?[]:(e=Object(e),r(u(e),function(t){return i.call(e,t)}))}:o;e.exports=s},function(e,t,n){var r=n(147),o=n(38),a=n(149),i=n(150),u=n(154),s=n(15),c=n(77),f="[object Map]",l="[object Object]",p="[object Promise]",d="[object Set]",y="[object WeakMap]",h="[object DataView]",v=c(r),g=c(o),b=c(a),m=c(i),_=c(u),w=s;(r&&w(new r(new ArrayBuffer(1)))!=h||o&&w(new o)!=f||a&&w(a.resolve())!=p||i&&w(new i)!=d||u&&w(new u)!=y)&&(w=function(e){var t=s(e),n=t==l?e.constructor:void 0,r=n?c(n):"";if(r)switch(r){case v:return h;case g:return f;case b:return p;case m:return d;case _:return y}return t}),e.exports=w},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(26);e.exports=r},function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},function(e,t,n){function r(e){var t=this.__data__;if(o){var n=t[e];return n===a?void 0:n}return u.call(t,e)?t[e]:void 0}var o=n(26),a="__lodash_hash_undefined__",i=Object.prototype,u=i.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){var t=this.__data__;return o?void 0!==t[e]:i.call(t,e)}var o=n(26),a=Object.prototype,i=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?a:t,this}var o=n(26),a="__lodash_hash_undefined__";e.exports=r},function(e,t){function n(e,t){var n=typeof e;return t=null==t?r:t,!!t&&("number"==n||"symbol"!=n&&o.test(e))&&e>-1&&e%1==0&&e<t}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=n},function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},function(e,t,n){function r(e){return!!a&&a in e}var o=n(169),a=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},function(e,t){function n(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||r;return e===n}var r=Object.prototype;e.exports=n},function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():i.call(t,n,1),--this.size,!0}var o=n(24),a=Array.prototype,i=a.splice;e.exports=r},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}var o=n(24);e.exports=r},function(e,t,n){function r(e){return o(this.__data__,e)>-1}var o=n(24);e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var o=n(24);e.exports=r},function(e,t,n){function r(){this.size=0,this.__data__={hash:new o,map:new(i||a),string:new o}}var o=n(148),a=n(23),i=n(38);e.exports=r},function(e,t,n){function r(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}var o=n(25);e.exports=r},function(e,t,n){function r(e){return o(this,e).get(e)}var o=n(25);e.exports=r},function(e,t,n){function r(e){return o(this,e).has(e)}var o=n(25);e.exports=r},function(e,t,n){function r(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var o=n(25);e.exports=r},function(e,t){function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}e.exports=n},function(e,t,n){var r=n(76),o=r(Object.keys,Object);e.exports=o},function(e,t,n){(function(e){var r=n(39),o="object"==typeof t&&t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o,u=i&&r.process,s=function(){try{var e=a&&a.require&&a.require("util").types;return e?e:u&&u.binding&&u.binding("util")}catch(e){}}();e.exports=s}).call(t,n(63)(e))},function(e,t){function n(e){return this.__data__.set(e,r),this}var r="__lodash_hash_undefined__";e.exports=n},function(e,t){function n(e){return this.__data__.has(e)}e.exports=n},function(e,t){function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}e.exports=n},function(e,t,n){function r(){this.__data__=new o,this.size=0}var o=n(23);e.exports=r},function(e,t){function n(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}e.exports=n},function(e,t){function n(e){return this.__data__.get(e)}e.exports=n},function(e,t){function n(e){return this.__data__.has(e)}e.exports=n},function(e,t,n){function r(e,t){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!a||r.length<u-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new i(r)}return n.set(e,t),this.size=n.size,this}var o=n(23),a=n(38),i=n(72),u=200;e.exports=r},function(e,t,n){var r=n(160),o=n(16),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!u.call(e,"callee")};e.exports=s},function(e,t,n){function r(e){return null!=e&&a(e.length)&&!o(e)}var o=n(80),a=n(81);e.exports=r},function(e,t,n){function r(e,t){return o(e,t)}var o=n(161);e.exports=r},function(e,t,n){function r(e){return i(e)?o(e):a(e)}var o=n(156),a=n(165),i=n(207);e.exports=r},function(e,t){function n(){return[]}e.exports=n},function(e,t){function n(){return!1}e.exports=n},function(e,t){function n(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*f;case"days":case"day":case"d":return n*c;case"hours":case"hour":case"hrs":case"hr":case"h":return n*s;case"minutes":case"minute":case"mins":case"min":case"m":return n*u;case"seconds":case"second":case"secs":case"sec":case"s":return n*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(e){return e>=c?Math.round(e/c)+"d":e>=s?Math.round(e/s)+"h":e>=u?Math.round(e/u)+"m":e>=i?Math.round(e/i)+"s":e+"ms"}function o(e){return a(e,c,"day")||a(e,s,"hour")||a(e,u,"minute")||a(e,i,"second")||e+" ms"}function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var i=1e3,u=60*i,s=60*u,c=24*s,f=365.25*c;e.exports=function(e,t){t=t||{};var a=typeof e;if("string"===a&&e.length>0)return n(e);if("number"===a&&isNaN(e)===!1)return t.long?o(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(e.videoId!==t.videoId)return!0;var n=e.opts.playerVars||{},r=t.opts.playerVars||{};return n.start!==r.start||n.end!==r.end}function s(e){return p({},e,{playerVars:p({},e.playerVars,{autoplay:0,start:0,end:0})})}function c(e,t){return!(0,b.default)(s(e.opts),s(t.opts))}function f(e,t){return e.id===t.id||e.className===t.className}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=n(3),y=r(d),h=n(1),v=r(h),g=n(208),b=r(g),m=n(241),_=r(m),w=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onPlayerReady=function(e){return n.props.onReady(e)},n.onPlayerError=function(e){return n.props.onError(e)},n.onPlayerStateChange=function(e){switch(n.props.onStateChange(e),e.data){case t.PlayerState.ENDED:n.props.onEnd(e);break;case t.PlayerState.PLAYING:n.props.onPlay(e);break;case t.PlayerState.PAUSED:n.props.onPause(e);break;default:return}},n.onPlayerPlaybackRateChange=function(e){return n.props.onPlaybackRateChange(e)},n.onPlayerPlaybackQualityChange=function(e){return n.props.onPlaybackQualityChange(e)},n.createPlayer=function(){if("undefined"!=typeof document){var e=p({},n.props.opts,{videoId:n.props.videoId});n.internalPlayer=(0,_.default)(n.container,e),n.internalPlayer.on("ready",n.onPlayerReady),n.internalPlayer.on("error",n.onPlayerError),n.internalPlayer.on("stateChange",n.onPlayerStateChange),n.internalPlayer.on("playbackRateChange",n.onPlayerPlaybackRateChange),n.internalPlayer.on("playbackQualityChange",n.onPlayerPlaybackQualityChange)}},n.resetPlayer=function(){return n.internalPlayer.destroy().then(n.createPlayer)},n.updatePlayer=function(){n.internalPlayer.getIframe().then(function(e){n.props.id?e.setAttribute("id",n.props.id):e.removeAttribute("id"),n.props.className?e.setAttribute("class",n.props.className):e.removeAttribute("class")})},n.updateVideo=function(){if("undefined"==typeof n.props.videoId||null===n.props.videoId)return void n.internalPlayer.stopVideo();var e=!1,t={videoId:n.props.videoId};return"playerVars"in n.props.opts&&(e=1===n.props.opts.playerVars.autoplay,"start"in n.props.opts.playerVars&&(t.startSeconds=n.props.opts.playerVars.start),"end"in n.props.opts.playerVars&&(t.endSeconds=n.props.opts.playerVars.end)),e?void n.internalPlayer.loadVideoById(t):void n.internalPlayer.cueVideoById(t)},n.refContainer=function(e){n.container=e},n.container=null,n.internalPlayer=null,n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){f(e,this.props)&&this.updatePlayer(),c(e,this.props)&&this.resetPlayer(),u(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return v.default.createElement("span",{className:this.props.containerClassName},v.default.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer}))}}]),t}(v.default.Component);w.propTypes={videoId:y.default.string,id:y.default.string,className:y.default.string,containerClassName:y.default.string,opts:y.default.object,onReady:y.default.func,onError:y.default.func,onPlay:y.default.func,onPause:y.default.func,onEnd:y.default.func,onStateChange:y.default.func,onPlaybackRateChange:y.default.func,onPlaybackQualityChange:y.default.func},w.defaultProps={id:null,className:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},w.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t.default=w},function(e,t){"use strict";var n;n=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);n!==-1&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(238),a=r(o);t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(139),a=r(o),i=n(240),u=r(i),s=n(239),c=r(s),f=n(236),l=r(f),p=(0,a.default)("youtube-player"),d={};d.proxyEvents=function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){p('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,a=void 0;try{for(var i,u=c.default[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var s=i.value;n(s)}}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return t},d.promisifyPlayer=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&l.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];
return e.then(function(e){var t=l.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&t.acceptableStates.indexOf(o)===-1?new Promise(function(n){var r=function r(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout(function(){e.removeEventListener("onStateChange",r),n()},t.timeout)),Array.isArray(t.acceptableStates)&&t.acceptableStates.indexOf(o)!==-1&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())};e.addEventListener("onStateChange",r)}).then(function(){return a}):a})}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then(function(e){return e[r].apply(e,n)})}},o=!0,a=!1,i=void 0;try{for(var s,c=u.default[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var f=s.value;r(f)}}catch(e){a=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(a)throw i}}return n},t.default=d,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(235),i=r(a),u=n(242),s=r(u),c=n(237),f=r(c),l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=(0,i.default)();if(l||(l=(0,s.default)(r)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=f.default.proxyEvents(r);var a=new Promise(function(n){if("string"==typeof e||e instanceof HTMLElement)l.then(function(o){var a=new o.Player(e,t);return r.on("ready",function(){n(a)}),null});else{if(!("object"===("undefined"==typeof e?"undefined":o(e))&&e.playVideo instanceof Function))throw new TypeError("Unexpected state.");var a=e;n(a)}}),u=f.default.promisifyPlayer(a,n);return u.on=r.on,u.off=r.off,u},e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(146),a=r(o);t.default=function(e){var t=new Promise(function(e){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)return void e(window.YT);var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){t&&t(),e(window.YT)}}),n="http:"===window.location.protocol?"http:":"https:";return(0,a.default)(n+"//www.youtube.com/iframe_api",function(t){t&&e.trigger("error",t)}),t},e.exports=t.default},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(93),c=n(1),f=r(c),l=n(337),p=n(113),d=r(p),y=n(145),h=r(y),v=n(245),g=r(v),b=n(92),m=r(b);n(495);var _=[],w=function(e){return e[Math.floor(Math.random()*e.length)]},x=function(e){return Array.from(e.reduce(function(e,t){if(!Array.isArray(t.node.tag))return arr;for(var n=0;n<t.node.tag.length;n++){var r=t.node.tag[n];e.has(r)?e.set(r,e.get(r)+1):e.set(r,1)}return e},new Map)).sort(function(e,t){return t[1]-e[1]})},P=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=Object.keys(h.default).map(function(e){return{name:e,path:"/speaker/"+l.String.slugify(e)}}),t=x(this.props.data.allTalkJson.edges).filter(function(e){return!(-1<_.indexOf(e[0]))}).slice(0,15).map(function(e){return{name:e[0],path:"/tag/"+l.String.slugify(e[0])}}),n=w(this.props.data.allTalkJson.edges).node;return f.default.createElement("div",null,f.default.createElement(d.default,{videoId:n.source.id,style:!0}),f.default.createElement("div",{className:"row content"},f.default.createElement("div",{className:"popular"},f.default.createElement("h3",{className:"title"},"Popular speakers"),f.default.createElement(g.default,{className:"tags",list:e}),f.default.createElement("h3",{className:"title"},"Popular tags"),f.default.createElement(g.default,{className:"tags",list:t})),f.default.createElement(m.default,{list:(0,s.normalizeResult)(this.props.data.allTalkJson).map(function(e){return u({tags:e.tag.map(function(e){return{name:e,path:"/tag/"+l.String.slugify(e)}}),path:"/talk/"+e.slug,presenter:{name:e.presenter.name,path:"/speaker/"+l.String.slugify(e.presenter.name)}},e)})})))},t}(f.default.Component);t.default=P;t.query="** extracted graphql fragment **"},,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(64),a=r(o);e.exports={String:a.default}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){}]);
//# sourceMappingURL=component---src-pages-index-js-4c856970404e15ab432e.js.map