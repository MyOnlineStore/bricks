(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6qfE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var i,r=t("RSLW"),o=(i=r)&&i.__esModule?i:{default:i};n.MDXTag=o.default},FElN:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t("q1tI"),r=t.n(i),o=t("pvvA"),a=t("vOnD"),c=r.a.createElement,d=Object(a.default)(o.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],o.colors.white,Object(o.rgba)(o.colors.grey900,.25));n.b=function(e){return c(d,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,t){"use strict";var i=t("q1tI"),r=t.n(i),o=t("pvvA"),a=t("FElN"),c=r.a.createElement,d=function(e){return c(o.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},u=t("TCAI"),l=t("vOnD"),s=r.a.createElement,p=Object(l.default)(o.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),m=function(e){var n=Object(i.useState)(!1),t=n[0],r=n[1];return Object(i.useEffect)((function(){window.location.pathname===e.href&&r(!0)})),s(o.Box,{padding:[12,0]},s(o.Heading,{as:"h5",hierarchy:5},s(p,{strong:t,variant:2===e.depth?"descriptive":void 0,as:"span"},s(u.a,{href:e.href,title:e.title},e.icon&&s(o.Icon,{size:"small",icon:e.icon})," ",e.title))))},f=t("i1cI"),h=r.a.createElement,x=t("MZYU"),g=function(e){var n=x.articles.filter((function(n){return n.dir===e.dirName}));return h(d,null,h(o.Box,{padding:[0,0,36,0]},h(m,{icon:h(f.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,t){var i=n.replace(/\.mdx?$/,""),r=(i.charAt(0).toUpperCase()+i.slice(1)).replace("-"," "),o="/generated/".concat(e.dirName,"/").concat(i);if("index"!==i)return h(m,{key:t,href:o,title:"".concat(r)})})))},v=r.a.createElement;n.a=function(e){return v(o.Box,null,v(g,{dirName:e.dirName}),v(a.b,null,e.children))}},MZYU:function(e,n,t){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},RSLW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=r(t("q1tI"));r(t("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}var o={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,t=e.parentName,r=e.props,a=void 0===r?{}:r,c=e.children,d=e.components,u=void 0===d?{}:d,l=u[t+"."+n]||u[n]||o[n]||n;return i.default.createElement(l,a,c)}},TCAI:function(e,n,t){"use strict";var i=t("pvvA"),r=t("vOnD"),o=Object(r.default)(i.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=o},XYC4:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/components",function(){return t("vpJH")}])},cNip:function(e,n,t){"use strict";var i=t("q1tI"),r=t.n(i),o=t("pvvA"),a=t("vOnD"),c=r.a.createElement,d=a.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],o.colors.grey300),u={h1:function(e){return c(o.Box,{margin:[36,0]},c(o.Heading,{hierarchy:1},e.children))},h2:function(e){return c(o.Box,{margin:[24,0]},c(o.Heading,{hierarchy:2},e.children))},h3:function(e){return c(o.Box,{margin:[18,0,12,0]},c(o.Heading,{hierarchy:3},e.children))},h4:function(e){return c(o.Box,{margin:[18,0,6,0]},c(o.Heading,{hierarchy:4},e.children))},h5:function(e){return c(o.Box,{margin:[12,0,6,0]},c(o.Heading,{hierarchy:5},e.children))},h6:function(e){return c(o.Box,{margin:[0,0,0,0]},c(o.Heading,{hierarchy:5},e.children))},hr:function(e){return c(o.Box,{margin:[24,0],width:"100%"},c(d,null))},p:function(e){return c(o.Text,null,e.children)},li:function(e){return c(o.Text,{as:"span"},c("li",null,e.children))}};n.a=u},vpJH:function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),r=t.n(i),o=t("6qfE"),a=r.a.createElement,c=function(e){var n=e.components;return a(o.MDXTag,{name:"wrapper",components:n},a(o.MDXTag,{name:"h1",components:n},"Components"),a(o.MDXTag,{name:"p",components:n},"Read everything about using components in this section!"))},d=t("cNip"),u=t("LPWT"),l=r.a.createElement;n.default=function(){return l(u.a,{dirName:"components"},l(c,{components:d.a}))}}},[["XYC4",1,2,4,3,0]]]);