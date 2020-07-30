(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6qfE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var i,a=t("RSLW"),o=(i=a)&&i.__esModule?i:{default:i};n.MDXTag=o.default},ELNM:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/components/badges",function(){return t("WFGA")}])},FElN:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var i=t("q1tI"),a=t.n(i),o=t("pvvA"),r=t("vOnD"),c=a.a.createElement,l=Object(r.default)(o.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],o.colors.white,Object(o.rgba)(o.colors.grey900,.25));n.b=function(e){return c(l,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,t){"use strict";var i=t("q1tI"),a=t.n(i),o=t("pvvA"),r=t("FElN"),c=a.a.createElement,l=function(e){return c(o.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},u=t("TCAI"),s=t("vOnD"),d=a.a.createElement,m=Object(s.default)(o.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),p=function(e){var n=Object(i.useState)(!1),t=n[0],a=n[1];return Object(i.useEffect)((function(){window.location.pathname===e.href&&a(!0)})),d(o.Box,{padding:[12,0]},d(o.Heading,{as:"h5",hierarchy:5},d(m,{strong:t,variant:2===e.depth?"descriptive":void 0,as:"span"},d(u.a,{href:e.href,title:e.title},e.icon&&d(o.Icon,{size:"small",icon:e.icon})," ",e.title))))},g=t("i1cI"),f=a.a.createElement,h=t("MZYU"),v=function(e){var n=h.articles.filter((function(n){return n.dir===e.dirName}));return f(l,null,f(o.Box,{padding:[0,0,36,0]},f(p,{icon:f(g.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,t){var i=n.replace(/\.mdx?$/,""),a=(i.charAt(0).toUpperCase()+i.slice(1)).replace("-"," "),o="/generated/".concat(e.dirName,"/").concat(i);if("index"!==i)return f(p,{key:t,href:o,title:"".concat(a)})})))},x=a.a.createElement;n.a=function(e){return x(o.Box,null,x(v,{dirName:e.dirName}),x(r.b,null,e.children))}},MZYU:function(e,n,t){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},RSLW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=a(t("q1tI"));a(t("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}var o={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,c=e.children,l=e.components,u=void 0===l?{}:l,s=u[t+"."+n]||u[n]||o[n]||n;return i.default.createElement(s,r,c)}},TCAI:function(e,n,t){"use strict";var i=t("pvvA"),a=t("vOnD"),o=Object(a.default)(i.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=o},WFGA:function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),a=t.n(i),o=t("6qfE"),r=t("nLHu"),c=t("pvvA"),l=a.a.createElement,u=[{value:"notification",label:"Counter - Notification counter"}],s=[{value:"notification",component:l(c.Counter,{severity:"error"},"1")}],d=function(){return l(r.a,{options:u,examples:s})},m=a.a.createElement,p=[{value:"subscription-new",label:"Badge - Subscription New"},{value:"subscription-grow",label:"Badge - Subscription Grow"},{value:"subscription-pro",label:"Badge - Subscription Pro"},{value:"subscription-premium",label:"Badge - Subscription Premium"}],g=[{value:"subscription-new",component:m(c.PromotionBadge,{variant:"new"},"NEW!")},{value:"subscription-grow",component:m(c.PromotionBadge,{variant:"grow"},"GROW")},{value:"subscription-pro",component:m(c.PromotionBadge,{variant:"pro"},"PRO")},{value:"subscription-premium",component:m(c.PromotionBadge,{variant:"premium"},"PREMIUM")}],f=function(){return m(r.a,{options:p,examples:g})},h=a.a.createElement,v=function(e){var n=e.components;return h(o.MDXTag,{name:"wrapper",components:n},h(o.MDXTag,{name:"h1",components:n},"Badges"),h(o.MDXTag,{name:"h2",components:n},"Numbers"),h(o.MDXTag,{name:"p",components:n},"A number to indicate the amount of new items."),h(o.MDXTag,{name:"h5",components:n},"Usage and guidelines"),h(o.MDXTag,{name:"ul",components:n},h(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Number badges indicate the number of new items"),h(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Contain only numbers"),h(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Use colors to indicate severity")),h(d,null),h(o.MDXTag,{name:"h2",components:n},"Subscription badges"),h(o.MDXTag,{name:"p",components:n},"Short tags used to indicate availability status within our subscription model."),h(o.MDXTag,{name:"h5",components:n},"Usage and guidelines"),h(o.MDXTag,{name:"ul",components:n},h(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Text badges can contain the following statuses: (NEW, BETA, PRO, PREMIUM)"),h(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Are always in caps"),h(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Use the color of the subscription level they represent otherwise yellow-base"),h(o.MDXTag,{name:"li",components:n,parentName:"ul"},"Never have a background")),h(f,null))},x=t("cNip"),b=t("LPWT"),w=a.a.createElement;n.default=function(){return w(b.a,{dirName:"components"},w(v,{components:x.a}))}},cNip:function(e,n,t){"use strict";var i=t("q1tI"),a=t.n(i),o=t("pvvA"),r=t("vOnD"),c=a.a.createElement,l=r.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],o.colors.grey300),u={h1:function(e){return c(o.Box,{margin:[36,0]},c(o.Heading,{hierarchy:1},e.children))},h2:function(e){return c(o.Box,{margin:[24,0]},c(o.Heading,{hierarchy:2},e.children))},h3:function(e){return c(o.Box,{margin:[18,0,12,0]},c(o.Heading,{hierarchy:3},e.children))},h4:function(e){return c(o.Box,{margin:[18,0,6,0]},c(o.Heading,{hierarchy:4},e.children))},h5:function(e){return c(o.Box,{margin:[12,0,6,0]},c(o.Heading,{hierarchy:5},e.children))},h6:function(e){return c(o.Box,{margin:[0,0,0,0]},c(o.Heading,{hierarchy:5},e.children))},hr:function(e){return c(o.Box,{margin:[24,0],width:"100%"},c(l,null))},p:function(e){return c(o.Text,null,e.children)},li:function(e){return c(o.Text,{as:"span"},c("li",null,e.children))}};n.a=u},nLHu:function(e,n,t){"use strict";var i=t("q1tI"),a=t.n(i),o=t("pvvA"),r=t("vOnD"),c=a.a.createElement,l=Object(r.default)(o.Contrast).withConfig({displayName:"PreviewPane__StyledContrast",componentId:"i4pmuv-0"})(["margin-top:36px;margin-bottom:36px;border-radius:9px;width:100%;min-width:720px;"]),u=Object(r.default)(o.Box).withConfig({displayName:"PreviewPane__StyledSelectBox",componentId:"i4pmuv-1"})(["width:282px;margin-left:36px;"]),s=Object(r.default)(o.Box).withConfig({displayName:"PreviewPane__StyledContentBox",componentId:"i4pmuv-2"})(["border-radius:9px;background:",";padding:36px;align-items:center;"],o.colors.white);n.a=function(e){var n,t=Object(i.useState)(e.defaultOption?e.defaultOption:e.options[0].value),a=t[0],r=t[1];return c(l,null,c(o.Box,{padding:[36],direction:"column",width:"100%"},c(o.Box,null,c(o.Box,{padding:[0,0,36,0],alignItems:"center"},c(o.Heading,{hierarchy:5,as:"h5"},"Examples"),e.examples.length>1&&c(u,null,c(o.NativeSelect,{value:a,onChange:r,options:e.options})))),c(s,null,null===(n=e.examples.find((function(e){return e.value===a})))||void 0===n?void 0:n.component)))}}},[["ELNM",1,2,4,3,0]]]);