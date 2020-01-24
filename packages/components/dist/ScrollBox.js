import"styled-components";import{c as t,s as e}from"./index-e7dfce8b.js";import{e as n,f as i,g as r,h as o,i as s,j as a,k as c}from"./_rollupPluginBabelHelpers-d3dbb83e.js";import l,{createRef as u,Component as h}from"react";import{c as f,a as d}from"./_commonjsHelpers-97e6d7b1.js";var p,v,b,m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},y=function(t){if(!m(t))throw TypeError(t+" is not an object!");return t},g=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},w=function(t){return Object(g(t))},S=Math.ceil,E=Math.floor,_=function(t){return isNaN(t=+t)?0:(t>0?E:S)(t)},O=Math.min,x=function(t){return t>0?O(_(t),9007199254740991):0},k=(p=!0,function(t,e){var n,i,r=String(g(t)),o=_(e),s=r.length;return o<0||o>=s?p?"":void 0:(n=r.charCodeAt(o))<55296||n>56319||o+1===s||(i=r.charCodeAt(o+1))<56320||i>57343?p?r.charAt(o):n:p?r.slice(o,o+2):i-56320+(n-55296<<10)+65536}),M=function(t,e,n){return e+(n?k(t,e).length:1)},A={}.toString,L=function(t){return A.call(t).slice(8,-1)},T=f((function(t){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)})),C=(T.version,f((function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}))),z=f((function(t){var e=C["__core-js_shared__"]||(C["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:T.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),j=0,R=Math.random(),D=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++j+R).toString(36))},B=f((function(t){var e=z("wks"),n=C.Symbol,i="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=i&&n[t]||(i?n:D)("Symbol."+t))}).store=e})),N=B("toStringTag"),X="Arguments"==L(function(){return arguments}()),Y=function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),N))?n:X?L(e):"Object"==(i=L(e))&&"function"==typeof e.callee?"Arguments":i},I=RegExp.prototype.exec,W=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==Y(t))throw new TypeError("RegExp#exec called on incompatible receiver");return I.call(t,e)},P=function(){var t=y(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},H=RegExp.prototype.exec,V=String.prototype.replace,F=H,q=(v=/a/,b=/b*/g,H.call(v,"a"),H.call(b,"a"),0!==v.lastIndex||0!==b.lastIndex),G=void 0!==/()??/.exec("")[1];(q||G)&&(F=function(t){var e,n,i,r,o=this;return G&&(n=new RegExp("^"+o.source+"$(?!\\s)",P.call(o))),q&&(e=o.lastIndex),i=H.call(o,t),q&&i&&(o.lastIndex=o.global?i.index+i[0].length:e),G&&i&&i.length>1&&V.call(i[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)})),i});var $=F,U=function(t){try{return!!t()}catch(t){return!0}},J=!U((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),K=C.document,Q=m(K)&&m(K.createElement),Z=function(t){return Q?K.createElement(t):{}},tt=!J&&!U((function(){return 7!=Object.defineProperty(Z("div"),"a",{get:function(){return 7}}).a})),et=Object.defineProperty,nt={f:J?Object.defineProperty:function(t,e,n){if(y(t),e=function(t,e){if(!m(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!m(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!m(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!m(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}(e,!0),y(n),tt)try{return et(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},it=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},rt=J?function(t,e,n){return nt.f(t,e,it(1,n))}:function(t,e,n){return t[e]=n,t},ot={}.hasOwnProperty,st=function(t,e){return ot.call(t,e)},at=z("native-function-to-string",Function.toString),ct=f((function(t){var e=D("src"),n=(""+at).split("toString");T.inspectSource=function(t){return at.call(t)},(t.exports=function(t,i,r,o){var s="function"==typeof r;s&&(st(r,"name")||rt(r,"name",i)),t[i]!==r&&(s&&(st(r,e)||rt(r,e,t[i]?""+t[i]:n.join(String(i)))),t===C?t[i]=r:o?t[i]?t[i]=r:rt(t,i,r):(delete t[i],rt(t,i,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[e]||at.call(this)}))})),lt=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}},ut=function(t,e,n){var i,r,o,s,a=t&ut.F,c=t&ut.G,l=t&ut.S,u=t&ut.P,h=t&ut.B,f=c?C:l?C[e]||(C[e]={}):(C[e]||{}).prototype,d=c?T:T[e]||(T[e]={}),p=d.prototype||(d.prototype={});for(i in c&&(n=e),n)o=((r=!a&&f&&void 0!==f[i])?f:n)[i],s=h&&r?lt(o,C):u&&"function"==typeof o?lt(Function.call,o):o,f&&ct(f,i,o,t&ut.U),d[i]!=o&&rt(d,i,s),u&&p[i]!=o&&(p[i]=o)};C.core=T,ut.F=1,ut.G=2,ut.S=4,ut.P=8,ut.B=16,ut.W=32,ut.U=64,ut.R=128;var ht=ut;ht({target:"RegExp",proto:!0,forced:$!==/./.exec},{exec:$});var ft=B("species"),dt=!U((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),pt=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}(),vt=function(t,e,n){var i=B(t),r=!U((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),o=r?!U((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[ft]=function(){return n}),n[i](""),!e})):void 0;if(!r||!o||"replace"===t&&!dt||"split"===t&&!pt){var s=/./[i],a=n(g,i,""[t],(function(t,e,n,i,o){return e.exec===$?r&&!o?{done:!0,value:s.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}})),c=a[0],l=a[1];ct(String.prototype,t,c),rt(RegExp.prototype,i,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)})}},bt=Math.max,mt=Math.min,yt=Math.floor,gt=/\$([$&`']|\d\d?|<[^>]*>)/g,wt=/\$([$&`']|\d\d?)/g;vt("replace",2,(function(t,e,n,i){return[function(i,r){var o=t(this),s=null==i?void 0:i[e];return void 0!==s?s.call(i,o,r):n.call(String(o),i,r)},function(t,e){var o=i(n,t,this,e);if(o.done)return o.value;var s=y(t),a=String(this),c="function"==typeof e;c||(e=String(e));var l=s.global;if(l){var u=s.unicode;s.lastIndex=0}for(var h=[];;){var f=W(s,a);if(null===f)break;if(h.push(f),!l)break;""===String(f[0])&&(s.lastIndex=M(a,x(s.lastIndex),u))}for(var d,p="",v=0,b=0;b<h.length;b++){f=h[b];for(var m=String(f[0]),g=bt(mt(_(f.index),a.length),0),w=[],S=1;S<f.length;S++)w.push(void 0===(d=f[S])?d:String(d));var E=f.groups;if(c){var O=[m].concat(w,g,a);void 0!==E&&O.push(E);var k=String(e.apply(void 0,O))}else k=r(m,a,g,w,E,e);g>=v&&(p+=a.slice(v,g)+k,v=g+m.length)}return p+a.slice(v)}];function r(t,e,i,r,o,s){var a=i+t.length,c=r.length,l=wt;return void 0!==o&&(o=w(o),l=gt),n.call(s,l,(function(n,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(a);case"<":l=o[s.slice(1,-1)];break;default:var u=+s;if(0===u)return n;if(u>c){var h=yt(u/10);return 0===h?n:h<=c?void 0===r[h-1]?s.charAt(1):r[h-1]+s.charAt(1):n}l=r[u-1]}return void 0===l?"":l}))}}));var St=nt.f,Et=Function.prototype,_t=/^\s*function ([^ (]*)/;"name"in Et||J&&St(Et,"name",{configurable:!0,get:function(){try{return(""+this).match(_t)[1]}catch(t){return""}}}),vt("match",1,(function(t,e,n,i){return[function(n){var i=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=i(n,t,this);if(e.done)return e.value;var r=y(t),o=String(this);if(!r.global)return W(r,o);var s=r.unicode;r.lastIndex=0;for(var a,c=[],l=0;null!==(a=W(r,o));){var u=String(a[0]);c[l]=u,""===u&&(r.lastIndex=M(o,x(r.lastIndex),s)),l++}return 0===l?null:c}]}));var Ot=B("unscopables"),xt=Array.prototype;null==xt[Ot]&&rt(xt,Ot,{});var kt,Mt=function(t){xt[Ot][t]=!0},At=function(t,e){return{value:e,done:!!t}},Lt={},Tt=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==L(t)?t.split(""):Object(t)},Ct=function(t){return Tt(g(t))},zt=Math.max,jt=Math.min,Rt=z("keys"),Dt=function(t){return Rt[t]||(Rt[t]=D(t))},Bt=(kt=!1,function(t,e,n){var i,r=Ct(t),o=x(r.length),s=function(t,e){return(t=_(t))<0?zt(t+e,0):jt(t,e)}(n,o);if(kt&&e!=e){for(;o>s;)if((i=r[s++])!=i)return!0}else for(;o>s;s++)if((kt||s in r)&&r[s]===e)return kt||s||0;return!kt&&-1}),Nt=Dt("IE_PROTO"),Xt="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Yt=Object.keys||function(t){return function(t,e){var n,i=Ct(t),r=0,o=[];for(n in i)n!=Nt&&st(i,n)&&o.push(n);for(;e.length>r;)st(i,n=e[r++])&&(~Bt(o,n)||o.push(n));return o}(t,Xt)},It=J?Object.defineProperties:function(t,e){y(t);for(var n,i=Yt(e),r=i.length,o=0;r>o;)nt.f(t,n=i[o++],e[n]);return t},Wt=C.document,Pt=Wt&&Wt.documentElement,Ht=Dt("IE_PROTO"),Vt=function(){},Ft=function(){var t,e=Z("iframe"),n=Xt.length;for(e.style.display="none",Pt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Ft=t.F;n--;)delete Ft.prototype[Xt[n]];return Ft()},qt=Object.create||function(t,e){var n;return null!==t?(Vt.prototype=y(t),n=new Vt,Vt.prototype=null,n[Ht]=t):n=Ft(),void 0===e?n:It(n,e)},Gt=nt.f,$t=B("toStringTag"),Ut=function(t,e,n){t&&!st(t=n?t:t.prototype,$t)&&Gt(t,$t,{configurable:!0,value:e})},Jt={};rt(Jt,B("iterator"),(function(){return this}));var Kt=function(t,e,n){t.prototype=qt(Jt,{next:it(1,n)}),Ut(t,e+" Iterator")},Qt=Dt("IE_PROTO"),Zt=Object.prototype,te=Object.getPrototypeOf||function(t){return t=w(t),st(t,Qt)?t[Qt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Zt:null},ee=B("iterator"),ne=!([].keys&&"next"in[].keys()),ie=function(){return this},re=function(t,e,n,i,r,o,s){Kt(n,e,i);var a,c,l,u=function(t){if(!ne&&t in p)return p[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},h=e+" Iterator",f="values"==r,d=!1,p=t.prototype,v=p[ee]||p["@@iterator"]||r&&p[r],b=v||u(r),m=r?f?u("entries"):b:void 0,y="Array"==e&&p.entries||v;if(y&&(l=te(y.call(new t)))!==Object.prototype&&l.next&&(Ut(l,h,!0),"function"!=typeof l[ee]&&rt(l,ee,ie)),f&&v&&"values"!==v.name&&(d=!0,b=function(){return v.call(this)}),(ne||d||!p[ee])&&rt(p,ee,b),Lt[e]=b,Lt[h]=ie,r)if(a={values:f?b:u("values"),keys:o?b:u("keys"),entries:m},s)for(c in a)c in p||ct(p,c,a[c]);else ht(ht.P+ht.F*(ne||d),e,a);return a}(Array,"Array",(function(t,e){this._t=Ct(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,At(1)):At(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values");Lt.Arguments=Lt.Array,Mt("keys"),Mt("values"),Mt("entries");for(var oe=B("iterator"),se=B("toStringTag"),ae=Lt.Array,ce={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},le=Yt(ce),ue=0;ue<le.length;ue++){var he,fe=le[ue],de=ce[fe],pe=C[fe],ve=pe&&pe.prototype;if(ve&&(ve[oe]||rt(ve,oe,ae),ve[se]||rt(ve,se,fe),Lt[fe]=ae,de))for(he in re)ve[he]||ct(ve,he,re[he],!0)}var be=function(t,e,n,i){try{return i?e(y(n)[0],n[1]):e(n)}catch(e){var r=t.return;throw void 0!==r&&y(r.call(t)),e}},me=B("iterator"),ye=Array.prototype,ge=function(t){return void 0!==t&&(Lt.Array===t||ye[me]===t)},we=function(t,e,n){e in t?nt.f(t,e,it(0,n)):t[e]=n},Se=B("iterator"),Ee=T.getIteratorMethod=function(t){if(null!=t)return t[Se]||t["@@iterator"]||Lt[Y(t)]},_e=B("iterator"),Oe=!1;try{var xe=[7][_e]();xe.return=function(){Oe=!0},Array.from(xe,(function(){throw 2}))}catch(t){}ht(ht.S+ht.F*!function(t,e){if(!e&&!Oe)return!1;var n=!1;try{var i=[7],r=i[_e]();r.next=function(){return{done:n=!0}},i[_e]=function(){return r},t(i)}catch(t){}return n}((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,r,o=w(t),s="function"==typeof this?this:Array,a=arguments.length,c=a>1?arguments[1]:void 0,l=void 0!==c,u=0,h=Ee(o);if(l&&(c=lt(c,a>2?arguments[2]:void 0,2)),null==h||s==Array&&ge(h))for(n=new s(e=x(o.length));e>u;u++)we(n,u,l?c(o[u],u):o[u]);else for(r=h.call(o),n=new s;!(i=r.next()).done;u++)we(n,u,l?be(r,c,[i.value,u],!0):i.value);return n.length=u,n}});var ke={f:Object.getOwnPropertySymbols},Me={f:{}.propertyIsEnumerable},Ae=Object.assign,Le=!Ae||U((function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=Ae({},t)[n]||Object.keys(Ae({},e)).join("")!=i}))?function(t,e){for(var n=w(t),i=arguments.length,r=1,o=ke.f,s=Me.f;i>r;)for(var a,c=Tt(arguments[r++]),l=o?Yt(c).concat(o(c)):Yt(c),u=l.length,h=0;u>h;)a=l[h++],J&&!s.call(c,a)||(n[a]=c[a]);return n}:Ae;ht(ht.S+ht.F,"Object",{assign:Le});var Te=f((function(t,e){
/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
t.exports=function(){if("undefined"==typeof document)return 0;var t,e=document.body,n=document.createElement("div"),i=n.style;return i.position="absolute",i.top=i.left="-9999px",i.width=i.height="100px",i.overflow="scroll",e.appendChild(n),t=n.offsetWidth-n.clientWidth,e.removeChild(n),t}})),Ce=/^\s+|\s+$/g,ze=/^[-+]0x[0-9a-f]+$/i,je=/^0b[01]+$/i,Re=/^0o[0-7]+$/i,De=parseInt,Be="object"==typeof d&&d&&d.Object===Object&&d,Ne="object"==typeof self&&self&&self.Object===Object&&self,Xe=Be||Ne||Function("return this")(),Ye=Object.prototype.toString,Ie=Math.max,We=Math.min,Pe=function(){return Xe.Date.now()};function He(t,e,n){var i,r,o,s,a,c,l=0,u=!1,h=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=i,o=r;return i=r=void 0,l=e,s=t.apply(o,n)}function p(t){return l=t,a=setTimeout(b,e),u?d(t):s}function v(t){var n=t-c;return void 0===c||n>=e||n<0||h&&t-l>=o}function b(){var t=Pe();if(v(t))return m(t);a=setTimeout(b,function(t){var n=e-(t-c);return h?We(n,o-(t-l)):n}(t))}function m(t){return a=void 0,f&&i?d(t):(i=r=void 0,s)}function y(){var t=Pe(),n=v(t);if(i=arguments,r=this,c=t,n){if(void 0===a)return p(c);if(h)return a=setTimeout(b,e),d(c)}return void 0===a&&(a=setTimeout(b,e)),s}return e=Fe(e)||0,Ve(n)&&(u=!!n.leading,o=(h="maxWait"in n)?Ie(Fe(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},y.flush=function(){return void 0===a?s:m(Pe())},y}function Ve(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Fe(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==Ye.call(t)}(t))return NaN;if(Ve(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ve(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ce,"");var n=je.test(t);return n||Re.test(t)?De(t.slice(2),n?2:8):ze.test(t)?NaN:+t}var qe=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return Ve(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),He(t,e,{leading:i,maxWait:e,trailing:r})},Ge=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,i){return t[0]===e&&(n=i,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),i=this.__entries__[n];return i&&i[1]},e.prototype.set=function(e,n){var i=t(this.__entries__,e);~i?this.__entries__[i][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,i=t(n,e);~i&&n.splice(i,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];t.call(e,r[1],r[0])}},e}())}(),$e="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Ue="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Je="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Ue):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var Ke=["top","right","bottom","left","width","height","size","weight"],Qe="undefined"!=typeof MutationObserver,Ze=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,i=!1,r=0;function o(){n&&(n=!1,t()),i&&a()}function s(){Je(o)}function a(){var t=Date.now();if(n){if(t-r<2)return;i=!0}else n=!0,i=!1,setTimeout(s,e);r=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){$e&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Qe?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){$e&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;Ke.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),tn=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},en=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Ue},nn=ln(0,0,0,0);function rn(t){return parseFloat(t)||0}function on(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+rn(t["border-"+n+"-width"])}),0)}function sn(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return nn;var i=en(t).getComputedStyle(t),r=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],o=t["padding-"+r];e[r]=rn(o)}return e}(i),o=r.left+r.right,s=r.top+r.bottom,a=rn(i.width),c=rn(i.height);if("border-box"===i.boxSizing&&(Math.round(a+o)!==e&&(a-=on(i,"left","right")+o),Math.round(c+s)!==n&&(c-=on(i,"top","bottom")+s)),!function(t){return t===en(t).document.documentElement}(t)){var l=Math.round(a+o)-e,u=Math.round(c+s)-n;1!==Math.abs(l)&&(a-=l),1!==Math.abs(u)&&(c-=u)}return ln(r.left,r.top,a,c)}var an="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof en(t).SVGGraphicsElement}:function(t){return t instanceof en(t).SVGElement&&"function"==typeof t.getBBox};function cn(t){return $e?an(t)?function(t){var e=t.getBBox();return ln(0,0,e.width,e.height)}(t):sn(t):nn}function ln(t,e,n,i){return{x:t,y:e,width:n,height:i}}var un=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ln(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=cn(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),hn=function(t,e){var n,i,r,o,s,a,c,l=(i=(n=e).x,r=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),tn(c,{x:i,y:r,width:o,height:s,top:r,right:i+o,bottom:s+r,left:i}),c);tn(this,{target:t,contentRect:l})},fn=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new Ge,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof en(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new un(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof en(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new hn(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),dn="undefined"!=typeof WeakMap?new WeakMap:new Ge,pn=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Ze.getInstance(),i=new fn(e,n,this);dn.set(this,i)};["observe","unobserve","disconnect"].forEach((function(t){pn.prototype[t]=function(){var e;return(e=dn.get(this))[t].apply(e,arguments)}}));var vn=void 0!==Ue.ResizeObserver?Ue.ResizeObserver:pn,bn=!("undefined"==typeof window||!window.document||!window.document.createElement);function mn(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var yn=function(){function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onScrollX=function(){i.scrollXTicking||(window.requestAnimationFrame(i.scrollX),i.scrollXTicking=!0)},this.onScrollY=function(){i.scrollYTicking||(window.requestAnimationFrame(i.scrollY),i.scrollYTicking=!0)},this.scrollX=function(){i.showScrollbar("x"),i.positionScrollbar("x"),i.scrollXTicking=!1},this.scrollY=function(){i.showScrollbar("y"),i.positionScrollbar("y"),i.scrollYTicking=!1},this.onMouseEnter=function(){i.showScrollbar("x"),i.showScrollbar("y")},this.onMouseMove=function(t){var e=i.trackY.getBoundingClientRect(),n=i.trackX.getBoundingClientRect();i.mouseX=t.clientX,i.mouseY=t.clientY,i.isWithinBounds(e)&&i.showScrollbar("y"),i.isWithinBounds(n)&&i.showScrollbar("x")},this.onWindowResize=function(){i.hideNativeScrollbar()},this.hideScrollbars=function(){var t=i.trackY.getBoundingClientRect(),e=i.trackX.getBoundingClientRect();i.isWithinBounds(t)||(i.scrollbarY.classList.remove("visible"),i.isVisible.y=!1),i.isWithinBounds(e)||(i.scrollbarX.classList.remove("visible"),i.isVisible.x=!1)},this.onMouseDown=function(t){var e=i.scrollbarY.getBoundingClientRect(),n=i.scrollbarX.getBoundingClientRect();i.isWithinBounds(e)&&(t.preventDefault(),i.onDrag(t,"y")),i.isWithinBounds(n)&&(t.preventDefault(),i.onDrag(t,"x"))},this.drag=function(t){var e,n,r;t.preventDefault(),"y"===i.currentAxis?(e=t.pageY,n=i.trackY,r=i.scrollContentEl):(e=t.pageX,n=i.trackX,r=i.contentEl);var o=(e-n.getBoundingClientRect()[i.offsetAttr[i.currentAxis]]-i.dragOffset[i.currentAxis])/n[i.sizeAttr[i.currentAxis]]*i.contentEl[i.scrollSizeAttr[i.currentAxis]];r[i.scrollOffsetAttr[i.currentAxis]]=o},this.onEndDrag=function(){document.removeEventListener("mousemove",i.drag),document.removeEventListener("mouseup",i.onEndDrag)},this.el=e,this.flashTimeout,this.contentEl,this.scrollContentEl,this.dragOffset={x:0,y:0},this.isEnabled={x:!0,y:!0},this.isVisible={x:!1,y:!1},this.scrollOffsetAttr={x:"scrollLeft",y:"scrollTop"},this.sizeAttr={x:"offsetWidth",y:"offsetHeight"},this.scrollSizeAttr={x:"scrollWidth",y:"scrollHeight"},this.offsetAttr={x:"left",y:"top"},this.globalObserver,this.mutationObserver,this.resizeObserver,this.currentAxis,this.scrollbarWidth,this.options=Object.assign({},t.defaultOptions,n),this.isRtl="rtl"===this.options.direction,this.classNames=this.options.classNames,this.offsetSize=20,this.recalculate=qe(this.recalculate.bind(this),1e3),this.onMouseMove=qe(this.onMouseMove.bind(this),100),this.init()}var e,n,i;return e=t,i=[{key:"initHtmlApi",value:function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver((function(e){e.forEach((function(e){Array.from(e.addedNodes).forEach((function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!e.SimpleBar&&new t(e,t.getElOptions(e)):Array.from(e.querySelectorAll("[data-simplebar]")).forEach((function(e){!e.SimpleBar&&new t(e,t.getElOptions(e))})))})),Array.from(e.removedNodes).forEach((function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():Array.from(t.querySelectorAll("[data-simplebar]")).forEach((function(t){t.SimpleBar&&t.SimpleBar.unMount()})))}))}))})),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))}},{key:"getElOptions",value:function(t){return Array.from(t.attributes).reduce((function(t,e){var n=e.name.match(/data-simplebar-(.+)/);if(n){var i=n[1].replace(/\W+(.)/g,(function(t,e){return e.toUpperCase()}));switch(e.value){case"true":t[i]=!0;break;case"false":t[i]=!1;break;case void 0:t[i]=!0;break;default:t[i]=e.value}}return t}),{})}},{key:"removeObserver",value:function(){this.globalObserver.disconnect()}},{key:"initDOMLoadedElements",value:function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.from(document.querySelectorAll("[data-simplebar]")).forEach((function(e){e.SimpleBar||new t(e,t.getElOptions(e))}))}},{key:"defaultOptions",get:function(){return{autoHide:!0,forceVisible:!1,classNames:{content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",track:"simplebar-track"},scrollbarMinSize:25,scrollbarMaxSize:0,direction:"ltr",timeout:1e3}}}],(n=[{key:"init",value:function(){this.el.SimpleBar=this,this.initDOM(),bn&&(this.hideNativeScrollbar(),this.render(),this.initListeners())}},{key:"initDOM",value:function(){var t=this;if(Array.from(this.el.children).filter((function(e){return e.classList.contains(t.classNames.scrollContent)})).length)this.trackX=this.el.querySelector(".".concat(this.classNames.track,".horizontal")),this.trackY=this.el.querySelector(".".concat(this.classNames.track,".vertical")),this.scrollContentEl=this.el.querySelector(".".concat(this.classNames.scrollContent)),this.contentEl=this.el.querySelector(".".concat(this.classNames.content));else{for(this.scrollContentEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.scrollContentEl.classList.add(this.classNames.scrollContent),this.contentEl.classList.add(this.classNames.content);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.scrollContentEl.appendChild(this.contentEl),this.el.appendChild(this.scrollContentEl)}if(!this.trackX||!this.trackY){var e=document.createElement("div"),n=document.createElement("div");e.classList.add(this.classNames.track),n.classList.add(this.classNames.scrollbar),this.options.autoHide||n.classList.add("visible"),e.appendChild(n),this.trackX=e.cloneNode(!0),this.trackX.classList.add("horizontal"),this.trackY=e.cloneNode(!0),this.trackY.classList.add("vertical"),this.el.insertBefore(this.trackX,this.el.firstChild),this.el.insertBefore(this.trackY,this.el.firstChild)}this.scrollbarX=this.trackX.querySelector(".".concat(this.classNames.scrollbar)),this.scrollbarY=this.trackY.querySelector(".".concat(this.classNames.scrollbar)),this.el.setAttribute("data-simplebar","init")}},{key:"initListeners",value:function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("mousedown",this.onMouseDown),this.el.addEventListener("mousemove",this.onMouseMove),this.contentEl.addEventListener("scroll",this.onScrollX),this.scrollContentEl.addEventListener("scroll",this.onScrollY),window.addEventListener("resize",this.onWindowResize),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver((function(e){e.forEach((function(e){(t.isChildNode(e.target)||e.addedNodes.length)&&t.recalculate()}))})),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.resizeObserver=new vn(this.recalculate),this.resizeObserver.observe(this.el)}},{key:"recalculate",value:function(){this.render()}},{key:"render",value:function(){this.contentSizeX=this.contentEl[this.scrollSizeAttr.x],this.contentSizeY=this.contentEl[this.scrollSizeAttr.y]-(this.scrollbarWidth||this.offsetSize),this.trackXSize=this.trackX[this.sizeAttr.x],this.trackYSize=this.trackY[this.sizeAttr.y],this.isEnabled.x=this.trackXSize<this.contentSizeX,this.isEnabled.y=this.trackYSize<this.contentSizeY,this.resizeScrollbar("x"),this.resizeScrollbar("y"),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},{key:"resizeScrollbar",value:function(){var t,e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";if(this.isEnabled[i]||this.options.forceVisible){"x"===i?(t=this.scrollbarX,e=this.contentSizeX,n=this.trackXSize):(t=this.scrollbarY,e=this.contentSizeY,n=this.trackYSize);var r=n/e;this.handleSize=Math.max(~~(r*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(this.handleSize=Math.min(this.handleSize,this.options.scrollbarMaxSize)),"x"===i?t.style.width="".concat(this.handleSize,"px"):t.style.height="".concat(this.handleSize,"px")}}},{key:"positionScrollbar",value:function(){var t,e,n,i,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";"x"===r?(t=this.scrollbarX,e=this.contentEl[this.scrollOffsetAttr[r]],n=this.contentSizeX,i=this.trackXSize):(t=this.scrollbarY,e=this.scrollContentEl[this.scrollOffsetAttr[r]],n=this.contentSizeY,i=this.trackYSize);var o=e/(n-i),s=~~((i-this.handleSize)*o);(this.isEnabled[r]||this.options.forceVisible)&&(t.style.transform="x"===r?"translate3d(".concat(s,"px, 0, 0)"):"translate3d(0, ".concat(s,"px, 0)"))}},{key:"toggleTrackVisibility",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y",e="y"===t?this.trackY:this.trackX,n="y"===t?this.scrollbarY:this.scrollbarX;this.isEnabled[t]||this.options.forceVisible?e.style.visibility="visible":e.style.visibility="hidden",this.options.forceVisible&&(this.isEnabled[t]?n.style.visibility="visible":n.style.visibility="hidden")}},{key:"hideNativeScrollbar",value:function(){this.scrollbarWidth=Te(),this.scrollContentEl.style[this.isRtl?"paddingLeft":"paddingRight"]="".concat(this.scrollbarWidth||this.offsetSize,"px"),this.scrollContentEl.style.marginBottom="-".concat(2*this.scrollbarWidth||this.offsetSize,"px"),this.contentEl.style.paddingBottom="".concat(this.scrollbarWidth||this.offsetSize,"px"),0!==this.scrollbarWidth&&(this.contentEl.style[this.isRtl?"marginLeft":"marginRight"]="-".concat(this.scrollbarWidth,"px"))}},{key:"showScrollbar",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.isVisible[e]||(t="x"===e?this.scrollbarX:this.scrollbarY,this.isEnabled[e]&&(t.classList.add("visible"),this.isVisible[e]=!0),this.options.autoHide&&(window.clearInterval(this.flashTimeout),this.flashTimeout=window.setInterval(this.hideScrollbars,this.options.timeout)))}},{key:"onDrag",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";t.preventDefault();var n="y"===e?this.scrollbarY:this.scrollbarX,i="y"===e?t.pageY:t.pageX;this.dragOffset[e]=i-n.getBoundingClientRect()[this.offsetAttr[e]],this.currentAxis=e,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.onEndDrag)}},{key:"getScrollElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";return"y"===t?this.scrollContentEl:this.contentEl}},{key:"getContentElement",value:function(){return this.contentEl}},{key:"removeListeners",value:function(){this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),this.scrollContentEl.removeEventListener("scroll",this.onScrollY),this.contentEl.removeEventListener("scroll",this.onScrollX),this.mutationObserver.disconnect(),this.resizeObserver.disconnect()}},{key:"unMount",value:function(){this.removeListeners(),this.el.SimpleBar=null}},{key:"isChildNode",value:function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))}},{key:"isWithinBounds",value:function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height}}])&&mn(e.prototype,n),i&&mn(e,i),t}();bn&&yn.initHtmlApi();var gn=t(["",""],require("simplebar/dist/simplebar.min.css").toString()),wn=e.div.withConfig({displayName:"style__StyledWrapper",componentId:"ig592j-0"})(["position:relative;flex-grow:1;display:flex;max-height:inherit;overflow:hidden;",""],gn),Sn=e.div.withConfig({displayName:"style__StyledScrollBox",componentId:"ig592j-1"})(["position:relative;flex-grow:1;overflow:hidden;.vertical{min-width:3px;width:4% max-width:6px;}.vertical .simplebar-scrollbar{width:100%;}.simplebar-scrollbar::before{background:",";}"],(function(t){return t.theme.ScrollBox.scrollbar.background})),En=e.div.withConfig({displayName:"style__StyledTop",componentId:"ig592j-2"})(["opacity:",";transition:opacity 100ms;background:linear-gradient(to top,rgba(0,0,0,0) 20%,rgba(0,0,0,0.1) 100%);height:6px;position:absolute;top:0;left:0;right:0;z-index:1;"],(function(t){return t.show?"1":"0"})),_n=e.div.withConfig({displayName:"style__StyledBottom",componentId:"ig592j-3"})(["opacity:",";transition:opacity 100ms;background:linear-gradient(to bottom,rgba(0,0,0,0) 20%,rgba(0,0,0,0.1) 100%);height:6px;position:absolute;bottom:0;left:0;right:0;z-index:1;"],(function(t){return t.show?"1":"0"})),On=function(t){function e(t){var n;return r(this,e),n=o(this,s(e).call(this,t)),a(c(n),"scrollbar",void 0),a(c(n),"contentRef",void 0),a(c(n),"handleScroll",(function(){var t=n.scrollbar.getScrollElement(),e=n.scrollbar.getContentElement(),i=n.state.scrollPosition>=t.scrollTop?"up":"down",r=e.offsetHeight-t.scrollTop-t.offsetHeight;void 0!==n.props.onScroll&&n.props.onScroll({scrollTop:t.scrollTop,scrollBottom:r,scrollDirection:i}),n.setState({showInsetShadow:n.hasOverflow(),scrollPosition:t.scrollTop,scrollDirection:i})})),a(c(n),"hasOverflow",(function(){var t=n.scrollbar.getScrollElement(),e=n.scrollbar.getContentElement();return t.offsetHeight<e.offsetHeight})),n.state={scrollPosition:0,scrollDirection:"idle",showInsetShadow:!1},n.contentRef=u(),n}return n(e,h),i(e,[{key:"componentDidMount",value:function(){null!==this.contentRef.current&&(this.scrollbar=new yn(this.contentRef.current,{autoHide:void 0===this.props.autoHideScrollBar||this.props.autoHideScrollBar}),this.scrollbar.getScrollElement().addEventListener("scroll",this.handleScroll),this.setState({showInsetShadow:this.hasOverflow()}))}},{key:"componentWillUnmount",value:function(){this.scrollbar.getScrollElement().removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.createElement(wn,null,l.createElement(Sn,{ref:this.contentRef},!1!==this.props.showInsetShadow&&l.createElement(En,{show:this.state.showInsetShadow&&"down"===this.state.scrollDirection}),this.props.children,!1!==this.props.showInsetShadow&&l.createElement(_n,{show:this.state.showInsetShadow&&"down"!==this.state.scrollDirection})))}}]),e}();export default On;
