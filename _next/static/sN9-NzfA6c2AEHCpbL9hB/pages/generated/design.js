(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6qfE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var r,i=t("RSLW"),a=(r=i)&&r.__esModule?r:{default:r};n.MDXTag=a.default},FElN:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("q1tI"),i=t.n(r),a=t("pvvA"),o=t("vOnD"),c=i.a.createElement,d=Object(o.default)(a.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],a.colors.white,Object(a.rgba)(a.colors.grey900,.25));n.b=function(e){return c(d,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),a=t("pvvA"),o=t("FElN"),c=i.a.createElement,d=function(e){return c(a.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},u=t("TCAI"),l=t("vOnD"),s=i.a.createElement,m=Object(l.default)(a.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),p=function(e){var n=Object(r.useState)(!1),t=n[0],i=n[1];return Object(r.useEffect)((function(){window.location.pathname===e.href&&i(!0)})),s(a.Box,{padding:[12,0]},s(a.Heading,{as:"h5",hierarchy:5},s(m,{strong:t,variant:2===e.depth?"descriptive":void 0,as:"span"},s(u.a,{href:e.href,title:e.title},e.icon&&s(a.Icon,{size:"small",icon:e.icon})," ",e.title))))},f=t("i1cI"),h=i.a.createElement,x=t("MZYU"),g=function(e){var n=x.articles.filter((function(n){return n.dir===e.dirName}));return h(d,null,h(a.Box,{padding:[0,0,36,0]},h(p,{icon:h(f.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,t){var r=n.replace(/\.mdx?$/,""),i=(r.charAt(0).toUpperCase()+r.slice(1)).replace("-"," "),a="/generated/".concat(e.dirName,"/").concat(r);if("index"!==r)return h(p,{key:t,href:a,title:"".concat(i)})})))},v=i.a.createElement;n.a=function(e){return v(a.Box,null,v(g,{dirName:e.dirName}),v(o.b,null,e.children))}},MZYU:function(e,n,t){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},RSLW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(t("q1tI"));i(t("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}var a={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,t=e.parentName,i=e.props,o=void 0===i?{}:i,c=e.children,d=e.components,u=void 0===d?{}:d,l=u[t+"."+n]||u[n]||a[n]||n;return r.default.createElement(l,o,c)}},TCAI:function(e,n,t){"use strict";var r=t("pvvA"),i=t("vOnD"),a=Object(i.default)(r.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=a},YvTF:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),i=t.n(r),a=t("6qfE"),o=i.a.createElement,c=function(e){var n=e.components;return o(a.MDXTag,{name:"wrapper",components:n},o(a.MDXTag,{name:"h1",components:n},"Design"),o(a.MDXTag,{name:"p",components:n},"Read everything about design in this section!"))},d=t("cNip"),u=t("LPWT"),l=i.a.createElement;n.default=function(){return l(u.a,{dirName:"design"},l(c,{components:d.a}))}},cNip:function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),a=t("pvvA"),o=t("vOnD"),c=i.a.createElement,d=o.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],a.colors.grey300),u={h1:function(e){return c(a.Box,{margin:[36,0]},c(a.Heading,{hierarchy:1},e.children))},h2:function(e){return c(a.Box,{margin:[24,0]},c(a.Heading,{hierarchy:2},e.children))},h3:function(e){return c(a.Box,{margin:[18,0,12,0]},c(a.Heading,{hierarchy:3},e.children))},h4:function(e){return c(a.Box,{margin:[18,0,6,0]},c(a.Heading,{hierarchy:4},e.children))},h5:function(e){return c(a.Box,{margin:[12,0,6,0]},c(a.Heading,{hierarchy:5},e.children))},h6:function(e){return c(a.Box,{margin:[0,0,0,0]},c(a.Heading,{hierarchy:5},e.children))},hr:function(e){return c(a.Box,{margin:[24,0],width:"100%"},c(d,null))},p:function(e){return c(a.Text,null,e.children)},li:function(e){return c(a.Text,{as:"span"},c("li",null,e.children))}};n.a=u},"r2r/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/design",function(){return t("YvTF")}])}},[["r2r/",1,2,4,3,0]]]);