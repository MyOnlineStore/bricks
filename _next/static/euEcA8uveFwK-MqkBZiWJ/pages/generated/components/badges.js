(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6qfE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var a,i=t("RSLW"),o=(a=i)&&a.__esModule?a:{default:a};n.MDXTag=o.default},ELNM:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/components/badges",function(){return t("WFGA")}])},FElN:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t("q1tI"),i=t.n(a),o=t("pvvA"),r=t("vOnD"),c=i.a.createElement,s=Object(r.default)(o.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],o.colors.white,Object(o.rgba)(o.colors.grey900,.25));n.b=function(e){return c(s,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,t){"use strict";var a=t("q1tI"),i=t.n(a),o=t("pvvA"),r=t("FElN"),c=i.a.createElement,s=function(e){return c(o.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},d=t("TCAI"),m=t("vOnD"),l=i.a.createElement,u=Object(m.default)(o.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),p=function(e){var n=Object(a.useState)(!1),t=n[0],i=n[1];return Object(a.useEffect)((function(){window.location.pathname===e.href&&i(!0)})),l(o.Box,{padding:[12,0]},l(o.Heading,{as:"h5",hierarchy:5},l(u,{strong:t,variant:2===e.depth?"descriptive":void 0,as:"span"},l(d.a,{href:e.href,title:e.title},e.icon&&l(o.Icon,{size:"small",icon:e.icon})," ",e.title))))},h=t("i1cI"),g=i.a.createElement,f=t("MZYU"),x=function(e){var n=f.articles.filter((function(n){return n.dir===e.dirName}));return g(s,null,g(o.Box,{padding:[0,0,36,0]},g(p,{icon:g(h.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,t){var a=n.replace(/\.mdx?$/,""),i=(a.charAt(0).toUpperCase()+a.slice(1)).replace("-"," "),o="/generated/".concat(e.dirName,"/").concat(a);if("index"!==a)return g(p,{key:t,href:o,title:"".concat(i)})})))},v=i.a.createElement;n.a=function(e){return v(o.Box,null,v(x,{dirName:e.dirName}),v(r.b,null,e.children))}},MZYU:function(e,n,t){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},RSLW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i(t("q1tI"));i(t("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}var o={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,t=e.parentName,i=e.props,r=void 0===i?{}:i,c=e.children,s=e.components,d=void 0===s?{}:s,m=d[t+"."+n]||d[n]||o[n]||n;return a.default.createElement(m,r,c)}},TCAI:function(e,n,t){"use strict";var a=t("pvvA"),i=t("vOnD"),o=Object(i.default)(a.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=o},WFGA:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),i=t.n(a),o=t("6qfE"),r=i.a.createElement,c=function(e){var n=e.components;return r(o.MDXTag,{name:"wrapper",components:n},r(o.MDXTag,{name:"h1",components:n},"Badges"),r(o.MDXTag,{name:"h2",components:n},"Numbers"),r(o.MDXTag,{name:"p",components:n},"A number to indicate the amount of new items."),r(o.MDXTag,{name:"h5",components:n},"Usage and guidelines"),r(o.MDXTag,{name:"ul",components:n},r(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Number badges indicate the number of new items"),r(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Contain only numbers"),r(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Use colors to indicate severity")),r(o.MDXTag,{name:"h5",components:n},"Examples"),r(o.MDXTag,{name:"p",components:n},r(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Notification badge | New Order badge")),r(o.MDXTag,{name:"hr",components:n}),r(o.MDXTag,{name:"h2",components:n},"Subscription badges"),r(o.MDXTag,{name:"p",components:n},"Short tags used to indicate availability status within our subscription model."),r(o.MDXTag,{name:"h5",components:n},"Usage and guidelines"),r(o.MDXTag,{name:"ul",components:n},r(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Text badges can contain the following statuses: (NEW, BETA, PRO, PREMIUM)"),r(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Are always in caps"),r(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Use the color of the subscription level they represent otherwise yellow-base"),r(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Never have a background")),r(o.MDXTag,{name:"h5",components:n},"Examples"),r(o.MDXTag,{name:"p",components:n},r(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NEW | BETA | PRO | PREMIUM")))},s=t("cNip"),d=t("LPWT"),m=i.a.createElement;n.default=function(){return m(d.a,{dirName:"components"},m(c,{components:s.a}))}},cNip:function(e,n,t){"use strict";var a=t("q1tI"),i=t.n(a),o=t("pvvA"),r=t("vOnD"),c=i.a.createElement,s=r.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],o.colors.grey300),d={h1:function(e){return c(o.Box,{margin:[36,0]},c(o.Heading,{hierarchy:1},e.children))},h2:function(e){return c(o.Box,{margin:[24,0]},c(o.Heading,{hierarchy:2},e.children))},h3:function(e){return c(o.Box,{margin:[18,0,12,0]},c(o.Heading,{hierarchy:3},e.children))},h4:function(e){return c(o.Box,{margin:[18,0,6,0]},c(o.Heading,{hierarchy:4},e.children))},h5:function(e){return c(o.Box,{margin:[12,0,6,0]},c(o.Heading,{hierarchy:5},e.children))},h6:function(e){return c(o.Box,{margin:[0,0,0,0]},c(o.Heading,{hierarchy:6},e.children))},hr:function(e){return c(o.Box,{margin:[24,0],width:"100%"},c(s,null))},p:function(e){return c(o.Text,{variant:"descriptive"},e.children)},li:function(e){return c(o.Text,{as:"span",variant:"descriptive"},c("li",null,e.children))}};n.a=d}},[["ELNM",1,2,4,3,0]]]);