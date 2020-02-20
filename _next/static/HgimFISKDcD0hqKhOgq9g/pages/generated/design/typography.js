(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"6qfE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var i,a=t("RSLW"),r=(i=a)&&i.__esModule?i:{default:i};n.MDXTag=r.default},FElN:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var i=t("q1tI"),a=t.n(i),r=t("pvvA"),o=t("vOnD"),s=a.a.createElement,c=Object(o.default)(r.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],r.colors.white,Object(r.rgba)(r.colors.grey900,.25));n.b=function(e){return s(c,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},Jpw5:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/design/typography",function(){return t("kgne")}])},LPWT:function(e,n,t){"use strict";var i=t("q1tI"),a=t.n(i),r=t("pvvA"),o=t("FElN"),s=a.a.createElement,c=function(e){return s(r.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},d=t("TCAI"),l=t("vOnD"),u=a.a.createElement,p=Object(l.default)(r.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),h=function(e){var n=Object(i.useState)(!1),t=n[0],a=n[1];return Object(i.useEffect)((function(){window.location.pathname===e.href&&a(!0)})),u(r.Box,{padding:[12,0]},u(r.Heading,{as:"h5",hierarchy:5},u(p,{strong:t,severity:2===e.depth?"info":void 0,as:"span"},u(d.a,{href:e.href,title:e.title},e.icon&&u(r.Icon,{size:"small",icon:e.icon})," ",e.title))))},m=a.a.createElement,f=t("MZYU"),g=function(e){var n=f.articles.filter((function(n){return n.dir===e.dirName}));return m(c,null,m(r.Box,{padding:[0,0,36,0]},m(h,{icon:r.ChevronLeftIcon,href:"/",title:" Back"})),n[0].files.map((function(n,t){var i=n.replace(/\.mdx?$/,""),a=(i.charAt(0).toUpperCase()+i.slice(1)).replace("-"," "),r="/generated/".concat(e.dirName,"/").concat(i);if("index"!==i)return m(h,{key:t,href:r,title:"".concat(a)})})))},x=a.a.createElement;n.a=function(e){return x(r.Box,null,x(g,{dirName:e.dirName}),x(o.b,null,e.children))}},MZYU:function(e,n,t){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},RSLW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=a(t("q1tI"));a(t("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}var r={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,t=e.parentName,a=e.props,o=void 0===a?{}:a,s=e.children,c=e.components,d=void 0===c?{}:c,l=d[t+"."+n]||d[n]||r[n]||n;return i.default.createElement(l,o,s)}},TCAI:function(e,n,t){"use strict";var i=t("pvvA"),a=t("vOnD"),r=Object(a.default)(i.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=r},cNip:function(e,n,t){"use strict";var i=t("q1tI"),a=t.n(i),r=t("pvvA"),o=t("vOnD"),s=a.a.createElement,c=o.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],r.colors.grey300),d={h1:function(e){return s(r.Box,{margin:[36,0]},s(r.Heading,{hierarchy:1},e.children))},h2:function(e){return s(r.Box,{margin:[24,0]},s(r.Heading,{hierarchy:2},e.children))},h3:function(e){return s(r.Box,{margin:[18,0,12,0]},s(r.Heading,{hierarchy:3},e.children))},h4:function(e){return s(r.Box,{margin:[18,0,6,0]},s(r.Heading,{hierarchy:4},e.children))},h5:function(e){return s(r.Box,{margin:[12,0,6,0]},s(r.Heading,{hierarchy:5},e.children))},h6:function(e){return s(r.Box,{margin:[0,0,0,0]},s(r.Heading,{hierarchy:6},e.children))},hr:function(e){return s(r.Box,{margin:[24,0],width:"100%"},s(c,null))},p:function(e){return s(r.Text,{severity:"info"},e.children)},li:function(e){return s(r.Text,{as:"span",severity:"info"},s("li",null,e.children))}};n.a=d},kgne:function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),a=t.n(i),r=t("6qfE"),o=a.a.createElement,s=function(e){var n=e.components;return o(r.MDXTag,{name:"wrapper",components:n},o(r.MDXTag,{name:"h1",components:n},"Typography"),o(r.MDXTag,{name:"p",components:n},"Our typography is based on three categories of usage (Display, Heading and Body) and supports different sizes based on a 3px grid. Some of the categories and sizes have extra options like a light, emphasized or compact version."),o(r.MDXTag,{name:"h2",components:n},"Display"),o(r.MDXTag,{name:"p",components:n},"This is the largest size we have. It is used for marketing purposes only. The larger size makes it a real attention grabber."),o(r.MDXTag,{name:"h2",components:n},"Heading"),o(r.MDXTag,{name:"p",components:n},"These text-styles are used as headings (h1 - h3), titles (h1 - h2) and subheadings (h3 - h6). Headings are top-level elements of a section. Titles are top level elements of pages and modals. Subheadings are elements below headings to create hierarchy within sections."),o(r.MDXTag,{name:"h2",components:n},"Body"),o(r.MDXTag,{name:"p",components:n},"These styles are used for the main text, like paragraphs."))},c=t("cNip"),d=t("LPWT"),l=a.a.createElement;n.default=function(){return l(d.a,{dirName:"design"},l(s,{components:c.a}))}}},[["Jpw5",1,2,3,0]]]);