(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0F/E":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/design/icons",function(){return t("K1Gg")}])},"6qfE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var i,r=t("RSLW"),a=(i=r)&&i.__esModule?i:{default:i};n.MDXTag=a.default},FElN:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t("q1tI"),r=t.n(i),a=t("pvvA"),o=t("vOnD"),c=r.a.createElement,d=Object(o.default)(a.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],a.colors.white,Object(a.rgba)(a.colors.grey900,.25));n.b=function(e){return c(d,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},K1Gg:function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),r=t.n(i),a=t("6qfE"),o=r.a.createElement,c=function(e){var n=e.components;return o(a.MDXTag,{name:"wrapper",components:n},o(a.MDXTag,{name:"h1",components:n},"Icons"),o(a.MDXTag,{name:"h2",components:n},"Icon style"),o(a.MDXTag,{name:"p",components:n},"MyOnlineStore has its own icon set, supporting three different sizes: "),o(a.MDXTag,{name:"ul",components:n},o(a.MDXTag,{name:"li",components:n,parentName:"ul"},"Large (60x60)"),o(a.MDXTag,{name:"li",components:n,parentName:"ul"},"Regular (18x18)"),o(a.MDXTag,{name:"li",components:n,parentName:"ul"},"Small (12x12)")),o(a.MDXTag,{name:"p",components:n},"The icons are all based on minimal line-art and have a consistent border-width within their size-group. The icons should therefore not be resized, as this would create inconsistencies in border-width."))},d=t("cNip"),s=t("LPWT"),l=r.a.createElement;n.default=function(){return l(s.a,{dirName:"design"},l(c,{components:d.a}))}},LPWT:function(e,n,t){"use strict";var i=t("q1tI"),r=t.n(i),a=t("pvvA"),o=t("FElN"),c=r.a.createElement,d=function(e){return c(a.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},s=t("TCAI"),l=t("vOnD"),u=r.a.createElement,m=Object(l.default)(a.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),p=function(e){var n=Object(i.useState)(!1),t=n[0],r=n[1];return Object(i.useEffect)((function(){window.location.pathname===e.href&&r(!0)})),u(a.Box,{padding:[12,0]},u(a.Heading,{as:"h5",hierarchy:5},u(m,{strong:t,variant:2===e.depth?"descriptive":void 0,as:"span"},u(s.a,{href:e.href,title:e.title},e.icon&&u(a.Icon,{size:"small",icon:e.icon})," ",e.title))))},h=t("i1cI"),f=r.a.createElement,g=t("MZYU"),x=function(e){var n=g.articles.filter((function(n){return n.dir===e.dirName}));return f(d,null,f(a.Box,{padding:[0,0,36,0]},f(p,{icon:f(h.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,t){var i=n.replace(/\.mdx?$/,""),r=(i.charAt(0).toUpperCase()+i.slice(1)).replace("-"," "),a="/generated/".concat(e.dirName,"/").concat(i);if("index"!==i)return f(p,{key:t,href:a,title:"".concat(r)})})))},v=r.a.createElement;n.a=function(e){return v(a.Box,null,v(x,{dirName:e.dirName}),v(o.b,null,e.children))}},MZYU:function(e,n,t){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},RSLW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=r(t("q1tI"));r(t("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}var a={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,t=e.parentName,r=e.props,o=void 0===r?{}:r,c=e.children,d=e.components,s=void 0===d?{}:d,l=s[t+"."+n]||s[n]||a[n]||n;return i.default.createElement(l,o,c)}},TCAI:function(e,n,t){"use strict";var i=t("pvvA"),r=t("vOnD"),a=Object(r.default)(i.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=a},cNip:function(e,n,t){"use strict";var i=t("q1tI"),r=t.n(i),a=t("pvvA"),o=t("vOnD"),c=r.a.createElement,d=o.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],a.colors.grey300),s={h1:function(e){return c(a.Box,{margin:[36,0]},c(a.Heading,{hierarchy:1},e.children))},h2:function(e){return c(a.Box,{margin:[24,0]},c(a.Heading,{hierarchy:2},e.children))},h3:function(e){return c(a.Box,{margin:[18,0,12,0]},c(a.Heading,{hierarchy:3},e.children))},h4:function(e){return c(a.Box,{margin:[18,0,6,0]},c(a.Heading,{hierarchy:4},e.children))},h5:function(e){return c(a.Box,{margin:[12,0,6,0]},c(a.Heading,{hierarchy:5},e.children))},h6:function(e){return c(a.Box,{margin:[0,0,0,0]},c(a.Heading,{hierarchy:6},e.children))},hr:function(e){return c(a.Box,{margin:[24,0],width:"100%"},c(d,null))},p:function(e){return c(a.Text,{variant:"descriptive"},e.children)},li:function(e){return c(a.Text,{as:"span",variant:"descriptive"},c("li",null,e.children))}};n.a=s}},[["0F/E",1,2,4,3,0]]]);