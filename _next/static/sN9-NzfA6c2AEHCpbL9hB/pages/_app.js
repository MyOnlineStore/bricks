(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+iuc":function(t,n,e){e("wgeU"),e("FlQf"),e("bBy9"),e("B9jh"),e("dL40"),e("xvv9"),e("V+O7"),t.exports=e("WEpk").Set},"/0+H":function(t,n,e){"use strict";var r=e("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(n,"__esModule",{value:!0});var i=o(e("q1tI")),a=e("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.ampFirst,e=void 0!==n&&n,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return e||o&&(void 0!==i&&i)}n.isInAmpMode=u,n.useAmp=function(){return u(i.default.useContext(a.AmpStateContext))}},0:function(t,n,e){e("74v/"),t.exports=e("nOHt")},"0MPf":function(t,n){t.exports="/_next/static/images/moslogo-bc1926277b0652f27fa6040e34bde5fa.svg"},"0tVQ":function(t,n,e){e("FlQf"),e("VJsP"),t.exports=e("WEpk").Array.from},"2Eek":function(t,n,e){t.exports=e("W7oM")},"2PDY":function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"4bdI":function(t,n,e){e("Ui4e"),t.exports=e("WEpk").Object.freeze},"74v/":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("cha2")}])},"8Bbg":function(t,n,e){t.exports=e("B5Ud")},"8Kt/":function(t,n,e){"use strict";var r=e("ttDY"),o=e("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(n,"__esModule",{value:!0});var a=i(e("q1tI")),u=i(e("Xuae")),c=e("lwAK"),f=e("FYa8"),s=e("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[a.default.createElement("meta",{charSet:"utf-8"})];return t||n.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),n}function p(t,n){return"string"===typeof n||"number"===typeof n?t:n.type===a.default.Fragment?t.concat(a.default.Children.toArray(n.props.children).reduce((function(t,n){return"string"===typeof n||"number"===typeof n?t:t.concat(n)}),[])):t.concat(n)}n.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function h(t,n){return t.reduce((function(t,n){var e=a.default.Children.toArray(n.props.children);return t.concat(e)}),[]).reduce(p,[]).reverse().concat(l(n.inAmpMode)).filter(function(){var t=new r,n=new r,e=new r,o={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var u=i.key.slice(i.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(i.type){case"title":case"base":n.has(i.type)?a=!1:n.add(i.type);break;case"meta":for(var c=0,f=d.length;c<f;c++){var s=d[c];if(i.props.hasOwnProperty(s))if("charSet"===s)e.has(s)?a=!1:e.add(s);else{var l=i.props[s],p=o[s]||new r;p.has(l)?a=!1:(p.add(l),o[s]=p)}}}return a}}()).reverse().map((function(t,n){var e=t.key||n;return a.default.cloneElement(t,{key:e})}))}var v=u.default();function m(t){var n=t.children;return a.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(f.HeadManagerContext.Consumer,null,(function(e){return a.default.createElement(v,{reduceComponentsToState:h,handleStateChange:e,inAmpMode:s.isInAmpMode(t)},n)}))}))}m.rewind=v.rewind,n.default=m},"8iia":function(t,n,e){var r=e("QMMT"),o=e("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},B5Ud:function(t,n,e){"use strict";var r=e("Qetd"),o=e("/HRN"),i=e("WaGi"),a=e("ZDA2"),u=e("/+P4"),c=e("N9n2"),f=e("ln6h"),s=e("KI45");n.__esModule=!0,n.Container=function(t){0;return t.children},n.createUrl=v,n.default=void 0;var l=s(e("q1tI")),p=e("g/15");function d(t){var n,e,r;return f.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.Component,e=t.ctx,o.next=3,f.awrap((0,p.loadGetInitialProps)(n,e));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}))}n.AppInitialProps=p.AppInitialProps;var h=function(t){function n(){return o(this,n),a(this,u(n).apply(this,arguments))}return c(n,t),i(n,[{key:"componentDidCatch",value:function(t,n){throw t}},{key:"render",value:function(){var t=this.props,n=t.router,e=t.Component,o=t.pageProps,i=v(n);return l.default.createElement(e,r({},o,{url:i}))}}]),n}(l.default.Component);function v(t){var n=t.pathname,e=t.asPath,r=t.query;return{get query(){return r},get pathname(){return n},get asPath(){return e},back:function(){t.back()},push:function(n,e){return t.push(n,e)},pushTo:function(n,e){var r=e?n:"",o=e||n;return t.push(r,o)},replace:function(n,e){return t.replace(n,e)},replaceTo:function(n,e){var r=e?n:"",o=e||n;return t.replace(r,o)}}}n.default=h,h.origGetInitialProps=d,h.getInitialProps=d},B9jh:function(t,n,e){"use strict";var r=e("Wu5q"),o=e("n3ko");t.exports=e("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},FbiP:function(t,n,e){t.exports=e("4bdI")},IP1Z:function(t,n,e){"use strict";var r=e("2faE"),o=e("rr1i");t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},MZYU:function(t,n,e){"use strict";t.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},PQJW:function(t,n,e){var r=e("d04V"),o=e("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},"RRc/":function(t,n,e){var r=e("oioR");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},TCAI:function(t,n,e){"use strict";var r=e("pvvA"),o=e("vOnD"),i=Object(o.default)(r.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=i},TbGu:function(t,n,e){var r=e("fGSI"),o=e("PQJW"),i=e("2PDY");t.exports=function(t){return r(t)||o(t)||i()}},Ui4e:function(t,n,e){var r=e("93I4"),o=e("6/1s").onFreeze;e("zn7N")("freeze",(function(t){return function(n){return t&&r(n)?t(o(n)):n}}))},"V+O7":function(t,n,e){e("aPfg")("Set")},VJsP:function(t,n,e){"use strict";var r=e("2GTP"),o=e("Y7ZC"),i=e("JB68"),a=e("sNwI"),u=e("NwJ3"),c=e("tEej"),f=e("IP1Z"),s=e("fNZA");o(o.S+o.F*!e("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,g=s(p);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==g||d==Array&&u(g))for(e=new d(n=c(p.length));n>y;y++)f(e,y,m?v(p[y],y):p[y]);else for(l=g.call(p),e=new d;!(o=l.next()).done;y++)f(e,y,m?a(l,v,[o.value,y],!0):o.value);return e.length=y,e}})},W7oM:function(t,n,e){e("nZgG");var r=e("WEpk").Object;t.exports=function(t,n){return r.defineProperties(t,n)}},Wu5q:function(t,n,e){"use strict";var r=e("2faE").f,o=e("oVml"),i=e("XJU/"),a=e("2GTP"),u=e("EXMj"),c=e("oioR"),f=e("MPFp"),s=e("UO39"),l=e("TJWN"),p=e("jmDH"),d=e("6/1s").fastKey,h=e("n3ko"),v=p?"_s":"size",m=function(t,n){var e,r=d(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,f){var s=t((function(t,r){u(t,s,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=r&&c(r,e,t[f],t)}));return i(s.prototype,{clear:function(){for(var t=h(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var e=h(this,n),r=m(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[v]--}return!!r},forEach:function(t){h(this,n);for(var e,r=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!m(h(this,n),t)}}),p&&r(s.prototype,"size",{get:function(){return h(this,n)[v]}}),s},def:function(t,n,e){var r,o,i=m(t,n);return i?i.v=e:(t._l=i={i:o=d(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[v]++,"F"!==o&&(t._i[o]=i)),t},getEntry:m,setStrong:function(t,n,e){f(t,n,(function(t,e){this._t=h(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))}),e?"entries":"values",!e,!0),l(n)}}},Xuae:function(t,n,e){"use strict";var r=e("/HRN"),o=e("ZDA2"),i=e("/+P4"),a=e("K47E"),u=e("WaGi"),c=e("N9n2"),f=e("TbGu"),s=e("ttDY");e("hfKm")(n,"__esModule",{value:!0});var l=e("q1tI"),p=!1;n.default=function(){var t,n=new s;function e(e){t=e.props.reduceComponentsToState(f(n),e.props),e.props.handleStateChange&&e.props.handleStateChange(t)}return function(f){function s(t){var u;return r(this,s),u=o(this,i(s).call(this,t)),p&&(n.add(a(u)),e(a(u))),u}return c(s,f),u(s,null,[{key:"rewind",value:function(){var e=t;return t=void 0,n.clear(),e}}]),u(s,[{key:"componentDidMount",value:function(){n.add(this),e(this)}},{key:"componentDidUpdate",value:function(){e(this)}},{key:"componentWillUnmount",value:function(){n.delete(this),e(this)}},{key:"render",value:function(){return null}}]),s}(l.Component)}},cha2:function(t,n,e){"use strict";e.r(n);var r=e("hfKm"),o=e.n(r);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}var a=e("XVgq"),u=e.n(a),c=e("Z7t5"),f=e.n(c);function s(t){return(s="function"===typeof f.a&&"symbol"===typeof u.a?function(t){return typeof t}:function(t){return t&&"function"===typeof f.a&&t.constructor===f.a&&t!==f.a.prototype?"symbol":typeof t})(t)}function l(t){return(l="function"===typeof f.a&&"symbol"===s(u.a)?function(t){return s(t)}:function(t){return t&&"function"===typeof f.a&&t.constructor===f.a&&t!==f.a.prototype?"symbol":s(t)})(t)}function p(t,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var d=e("Bhuq"),h=e.n(d),v=e("TRZx"),m=e.n(v);function y(t){return(y=m.a?h.a:function(t){return t.__proto__||h()(t)})(t)}var g=e("SqZg"),x=e.n(g);function _(t,n){return(_=m.a||function(t,n){return t.__proto__=n,t})(t,n)}var b=e("2Eek"),w=e.n(b),k=e("FbiP"),S=e.n(k);var C=e("q1tI"),P=e.n(C),E=e("8Bbg"),A=e.n(E),I=e("vOnD"),M=e("pvvA"),O=e("8Kt/"),T=e.n(O),j=P.a.createElement,D=function(){return j(T.a,null,j("title",null,"Bricks | A design system by MyOnlineStore"),j("link",{href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i",rel:"stylesheet"}),j("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n                        * {\n                            box-sizing: border-box;\n                        }\n                        body, p {\n                            margin: 0;\n                            padding: 0;\n                        }\n                    "}}),j("link",{href:"https://fonts.googleapis.com/css?family=Anaheim|Questrial|Nunito|Noto+Sans|Playfair+Display|Montserrat:500,900|Roboto:400,500,700|Amatic+SC|ZCOOL+KuaiLe|Roboto+Slab|Lobster|EB+Garamond",rel:"stylesheet"}))},H=e("TCAI"),N=P.a.createElement,B=Object(I.default)(M.Text).withConfig({displayName:"HeadingLink__StyledText",componentId:"sc-1hgtz37-0"})(["font-size:inherit;font-family:inherit;"]),Z=function(t){var n=Object(C.useState)(!1),e=n[0],r=n[1];return Object(C.useEffect)((function(){t.category&&window.location.pathname.includes(t.category)&&r(!0)})),N(M.Box,{padding:[24,24,24,0]},N(M.Heading,{hierarchy:4,as:"h4"},N(B,{strong:e,as:"span"},N(H.a,{href:t.href,title:t.title}))))},G=e("0MPf"),W=e.n(G),q=P.a.createElement,F=e("MZYU"),K=function(t){var n,e=null===(n=F.articles.find((function(n){return n.dir===t})))||void 0===n?void 0:n.files[0],r=e?e.replace(/\.mdx?$/,""):"";return"/generated/".concat(t,"/").concat(r)},U=function(t){return"".concat(t.charAt(0).toUpperCase()+t.slice(1))},R=I.default.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-7sfuc7-0"})(["display:flex;flex-direction:row;height:148px;padding:48px 0 66px 0;width:100%;align-items:center;justify-content:space-between;img{max-height:150px;cursor:pointer;}"]),J=Object(I.default)(M.Box).withConfig({displayName:"Header__HeadingLinkContainer",componentId:"sc-7sfuc7-1"})(["margin-left:126px;"]),L=function(t){return q(R,null,q(M.Box,{alignItems:"center"},q(M.Box,{width:"180px",alignItems:"center",justifyContent:"flex-start"},q(M.Link,{href:"/",title:"Home"},q("img",{width:"180px",src:W.a}))),q(J,null,F.srcDirs.map((function(t,n){return q(Z,{href:"".concat(K(t)),title:"".concat(U(t)),category:t,key:n})})),q(Z,{href:"https://myonlinestore-bricks.now.sh",title:"Storybook"}))))},Y=P.a.createElement,Q=I.default.main.withConfig({displayName:"Page__StyledPage",componentId:"sc-1e56mfg-0"})(["background-color:",";"],M.colors.grey100),V=function(t){return Y(Q,null,Y(M.Box,{minHeight:"100vh",direction:"column",maxWidth:"1200px",margin:["auto"]},Y(L,null),Y(M.Box,{width:"100%",minHeight:"80vh",alignContent:"stretch"},t.children)))},z=P.a.createElement;function X(){var t,n,e=(t=["\n  @font-face {\n    font-family: Melbourne;\n    src: url('/static/fonts/melbourne-bold.ttf');\n    font-weight: 700;\n  }\n  @font-face {\n      font-family: Melbourne;\n      src: url('/static/fonts/melbourne.ttf');\n      font-weight: 400;\n  }\n  @font-face {\n      font-family: Melbourne;\n      src: url('/static/fonts/melbourne-light.ttf');\n      font-weight: 300;\n  }\n"],n||(n=t.slice(0)),S()(w()(t,{raw:{value:S()(n)}})));return X=function(){return e},e}var $=Object(I.createGlobalStyle)(X()),tt=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),p(this,y(n).apply(this,arguments))}var e,r,o;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=x()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_(t,n)}(n,t),e=n,(r=[{key:"render",value:function(){var t=this.props,n=t.Component,e=t.pageProps;return z(P.a.Fragment,null,z($,null),z(M.MosTheme,null,z(D,null),z(V,null,z(n,e))))}}])&&i(e.prototype,r),o&&i(e,o),n}(A.a);n.default=tt},d04V:function(t,n,e){t.exports=e("0tVQ")},dL40:function(t,n,e){var r=e("Y7ZC");r(r.P+r.R,"Set",{toJSON:e("8iia")("Set")})},fGSI:function(t,n,e){var r=e("p0XB");t.exports=function(t){if(r(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},lwAK:function(t,n,e){"use strict";var r=e("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n};r(n,"__esModule",{value:!0});var i=o(e("q1tI"));n.AmpStateContext=i.createContext({})},nZgG:function(t,n,e){var r=e("Y7ZC");r(r.S+r.F*!e("jmDH"),"Object",{defineProperties:e("fpC5")})},ttDY:function(t,n,e){t.exports=e("+iuc")},xvv9:function(t,n,e){e("cHUd")("Set")}},[[0,1,2,4,3,0,5]]]);