(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var i=o(n("q1tI")),a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=u,e.useAmp=function(){return u(i.default.useContext(a.AmpStateContext))}},0:function(t,e,n){n("74v/"),t.exports=n("nOHt")},"0MPf":function(t,e){t.exports="/_next/static/images/moslogo-bc1926277b0652f27fa6040e34bde5fa.svg"},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var a=i(n("q1tI")),u=i(n("Xuae")),c=n("lwAK"),s=n("FYa8"),f=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var u=i.key.slice(i.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(i.type){case"title":case"base":e.has(i.type)?a=!1:e.add(i.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var f=d[c];if(i.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=i.props[f],p=o[f]||new r;p.has(l)?a=!1:(p.add(l),o[f]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var v=u.default();function m(t){var e=t.children;return a.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}m.rewind=v.rewind,e.default=m},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},B5Ud:function(t,e,n){"use strict";var r=n("Qetd"),o=n("/HRN"),i=n("WaGi"),a=n("ZDA2"),u=n("/+P4"),c=n("N9n2"),s=n("ln6h"),f=n("KI45");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var l=f(n("q1tI")),p=n("g/15");function d(t){var e,n,r;return s.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,s.awrap((0,p.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}))}e.AppInitialProps=p.AppInitialProps;var h=function(t){function e(){return o(this,e),a(this,u(e).apply(this,arguments))}return c(e,t),i(e,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,o=t.pageProps,i=v(e);return l.default.createElement(n,r({},o,{url:i}))}}]),e}(l.default.Component);function v(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=h,h.origGetInitialProps=d,h.getInitialProps=d},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),o=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},MZYU:function(t,e,n){"use strict";t.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TCAI:function(t,e,n){"use strict";var r=n("pvvA"),o=n("vOnD"),i=Object(o.default)(r.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);e.a=i},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");t.exports=function(t){return r(t)||o(t)||i()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),a=n("sNwI"),u=n("NwJ3"),c=n("tEej"),s=n("IP1Z"),f=n("fNZA");o(o.S+o.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,g=f(p);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==g||d==Array&&u(g))for(n=new d(e=c(p.length));e>y;y++)s(n,y,m?v(p[y],y):p[y]);else for(l=g.call(p),n=new d;!(o=l.next()).done;y++)s(n,y,m?a(l,v,[o.value,y],!0):o.value);return n.length=y,n}})},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),a=n("2GTP"),u=n("EXMj"),c=n("oioR"),s=n("MPFp"),f=n("UO39"),l=n("TJWN"),p=n("jmDH"),d=n("6/1s").fastKey,h=n("n3ko"),v=p?"_s":"size",m=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var f=t((function(t,r){u(t,f,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=r&&c(r,n,t[s],t)}));return i(f.prototype,{clear:function(){for(var t=h(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=h(this,e),r=m(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[v]--}return!!r},forEach:function(t){h(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(h(this,e),t)}}),p&&r(f.prototype,"size",{get:function(){return h(this,e)[v]}}),f},def:function(t,e,n){var r,o,i=m(t,e);return i?i.v=n:(t._l=i={i:o=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[v]++,"F"!==o&&(t._i[o]=i)),t},getEntry:m,setStrong:function(t,e,n){s(t,e,(function(t,n){this._t=h(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))}),n?"entries":"values",!n,!0),l(e)}}},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),a=n("K47E"),u=n("WaGi"),c=n("N9n2"),s=n("TbGu"),f=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var l=n("q1tI"),p=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){function f(t){var u;return r(this,f),u=o(this,i(f).call(this,t)),p&&(e.add(a(u)),n(a(u))),u}return c(f,s),u(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component)}},cha2:function(t,e,n){"use strict";n.r(e);var r=n("hfKm"),o=n.n(r);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}var a=n("XVgq"),u=n.n(a),c=n("Z7t5"),s=n.n(c);function f(t){return(f="function"===typeof s.a&&"symbol"===typeof u.a?function(t){return typeof t}:function(t){return t&&"function"===typeof s.a&&t.constructor===s.a&&t!==s.a.prototype?"symbol":typeof t})(t)}function l(t){return(l="function"===typeof s.a&&"symbol"===f(u.a)?function(t){return f(t)}:function(t){return t&&"function"===typeof s.a&&t.constructor===s.a&&t!==s.a.prototype?"symbol":f(t)})(t)}function p(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var d=n("Bhuq"),h=n.n(d),v=n("TRZx"),m=n.n(v);function y(t){return(y=m.a?h.a:function(t){return t.__proto__||h()(t)})(t)}var g=n("SqZg"),_=n.n(g);function x(t,e){return(x=m.a||function(t,e){return t.__proto__=e,t})(t,e)}var w=n("q1tI"),b=n.n(w),k=n("8Bbg"),S=n.n(k),C=n("pvvA"),P=n("8Kt/"),A=n.n(P),E=b.a.createElement,I=function(){return E(A.a,null,E("title",null,"Bricks | A design system by MyOnlineStore"),E("link",{href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i",rel:"stylesheet"}),E("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n                        * {\n                            box-sizing: border-box;\n                        }\n                        body, p {\n                            margin: 0;\n                            padding: 0;\n                        }\n                    "}}),E("link",{href:"https://fonts.googleapis.com/css?family=Anaheim|Questrial|Nunito|Noto+Sans|Playfair+Display|Montserrat:500,900|Roboto:400,500,700|Amatic+SC|ZCOOL+KuaiLe|Roboto+Slab|Lobster|EB+Garamond",rel:"stylesheet"}))},M=n("vOnD"),T=n("TCAI"),O=b.a.createElement,D=Object(M.default)(C.Text).withConfig({displayName:"HeadingLink__StyledText",componentId:"sc-1hgtz37-0"})(["font-size:inherit;font-family:inherit;"]),H=function(t){var e=Object(w.useState)(!1),n=e[0],r=e[1];return Object(w.useEffect)((function(){window.location.pathname.includes(t.category)&&r(!0)})),O(C.Box,{padding:[24,24,24,0]},O(C.Heading,{hierarchy:4,as:"h4"},O(D,{strong:n,as:"span"},O(T.a,{href:t.href,title:t.title}))))},N=n("0MPf"),B=n.n(N),j=b.a.createElement,q=n("MZYU"),K=M.default.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-7sfuc7-0"})(["display:flex;flex-direction:row;height:148px;padding:48px 0 66px 0;width:100%;align-items:center;justify-content:space-between;img{max-height:150px;cursor:pointer;}"]),R=Object(M.default)(C.Box).withConfig({displayName:"Header__HeadingLinkContainer",componentId:"sc-7sfuc7-1"})(["margin-left:126px;"]),Z=function(t){return j(K,null,j(C.Box,{alignItems:"center"},j(C.Box,{width:"180px",alignItems:"center",justifyContent:"flex-start"},j(C.Link,{href:"/",title:"Home"},j("img",{width:"180px",src:B.a}))),j(R,null,q.srcDirs.map((function(t,e){return j(H,{href:"/generated/".concat(t),title:"".concat(t.charAt(0).toUpperCase()+t.slice(1)),category:t,key:e})})))))},G=b.a.createElement,J=M.default.main.withConfig({displayName:"Page__StyledPage",componentId:"sc-1e56mfg-0"})(["background-color:",";"],C.colors.grey100),L=function(t){return G(J,null,G(C.Box,{minHeight:"100vh",direction:"column",maxWidth:"1200px",margin:["auto"]},G(Z,null),G(C.Box,{width:"100%",minHeight:"80vh",alignContent:"stretch"},t.children)))},U=b.a.createElement,W=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,y(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=_()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return U(C.MosTheme,null,U(I,null),U(L,null,U(e,n)))}}])&&i(n.prototype,r),o&&i(n,o),e}(S.a);e.default=W},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.AmpStateContext=i.createContext({})},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")}},[[0,1,2,3,0,4]]]);