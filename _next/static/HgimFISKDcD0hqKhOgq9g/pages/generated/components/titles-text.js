(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6qfE":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var t,o=a("RSLW"),i=(t=o)&&t.__esModule?t:{default:t};n.MDXTag=i.default},FElN:function(e,n,a){"use strict";a.d(n,"a",(function(){return m}));var t=a("q1tI"),o=a.n(t),i=a("pvvA"),r=a("vOnD"),s=o.a.createElement,m=Object(r.default)(i.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],i.colors.white,Object(i.rgba)(i.colors.grey900,.25));n.b=function(e){return s(m,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,a){"use strict";var t=a("q1tI"),o=a.n(t),i=a("pvvA"),r=a("FElN"),s=o.a.createElement,m=function(e){return s(i.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},c=a("TCAI"),l=a("vOnD"),p=o.a.createElement,d=Object(l.default)(i.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),u=function(e){var n=Object(t.useState)(!1),a=n[0],o=n[1];return Object(t.useEffect)((function(){window.location.pathname===e.href&&o(!0)})),p(i.Box,{padding:[12,0]},p(i.Heading,{as:"h5",hierarchy:5},p(d,{strong:a,severity:2===e.depth?"info":void 0,as:"span"},p(c.a,{href:e.href,title:e.title},e.icon&&p(i.Icon,{size:"small",icon:e.icon})," ",e.title))))},g=o.a.createElement,h=a("MZYU"),f=function(e){var n=h.articles.filter((function(n){return n.dir===e.dirName}));return g(m,null,g(i.Box,{padding:[0,0,36,0]},g(u,{icon:i.ChevronLeftIcon,href:"/",title:" Back"})),n[0].files.map((function(n,a){var t=n.replace(/\.mdx?$/,""),o=(t.charAt(0).toUpperCase()+t.slice(1)).replace("-"," "),i="/generated/".concat(e.dirName,"/").concat(t);if("index"!==t)return g(u,{key:a,href:i,title:"".concat(o)})})))},T=o.a.createElement;n.a=function(e){return T(i.Box,null,T(f,{dirName:e.dirName}),T(r.b,null,e.children))}},MZYU:function(e,n,a){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},RSLW:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o(a("q1tI"));o(a("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}var i={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,a=e.parentName,o=e.props,r=void 0===o?{}:o,s=e.children,m=e.components,c=void 0===m?{}:m,l=c[a+"."+n]||c[n]||i[n]||n;return t.default.createElement(l,r,s)}},TCAI:function(e,n,a){"use strict";var t=a("pvvA"),o=a("vOnD"),i=Object(o.default)(t.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=i},"bM/Y":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/components/titles-text",function(){return a("lW7b")}])},cNip:function(e,n,a){"use strict";var t=a("q1tI"),o=a.n(t),i=a("pvvA"),r=a("vOnD"),s=o.a.createElement,m=r.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],i.colors.grey300),c={h1:function(e){return s(i.Box,{margin:[36,0]},s(i.Heading,{hierarchy:1},e.children))},h2:function(e){return s(i.Box,{margin:[24,0]},s(i.Heading,{hierarchy:2},e.children))},h3:function(e){return s(i.Box,{margin:[18,0,12,0]},s(i.Heading,{hierarchy:3},e.children))},h4:function(e){return s(i.Box,{margin:[18,0,6,0]},s(i.Heading,{hierarchy:4},e.children))},h5:function(e){return s(i.Box,{margin:[12,0,6,0]},s(i.Heading,{hierarchy:5},e.children))},h6:function(e){return s(i.Box,{margin:[0,0,0,0]},s(i.Heading,{hierarchy:6},e.children))},hr:function(e){return s(i.Box,{margin:[24,0],width:"100%"},s(m,null))},p:function(e){return s(i.Text,{severity:"info"},e.children)},li:function(e){return s(i.Text,{as:"span",severity:"info"},s("li",null,e.children))}};n.a=c},lW7b:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),o=a.n(t),i=a("6qfE"),r=o.a.createElement,s=function(e){var n=e.components;return r(i.MDXTag,{name:"wrapper",components:n},r(i.MDXTag,{name:"h1",components:n},"Titles and text"),r(i.MDXTag,{name:"h2",components:n},"Display"),r(i.MDXTag,{name:"p",components:n},"A large text to grab visual attention used for marketing and onboarding purposes."),r(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),r(i.MDXTag,{name:"ul",components:n},r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"To be used sparingly"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use more than 1 display on a page"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is short and concise (1-5 words)"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),r(i.MDXTag,{name:"h5",components:n},"Examples"),r(i.MDXTag,{name:"p",components:n},r(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Website | Onboarding")),r(i.MDXTag,{name:"hr",components:n}),r(i.MDXTag,{name:"h2",components:n},"Titles"),r(i.MDXTag,{name:"p",components:n},"Titles are top-level elements of pages and modals. They communicate what the page or modal is about and what primary action a modal focuses on."),r(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),r(i.MDXTag,{name:"ul",components:n},r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use more than 1 title on a page or modal"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is short and concise (1-5 words)"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Describes the main subject and action of the page or modal"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),r(i.MDXTag,{name:"h5",components:n},"Examples"),r(i.MDXTag,{name:"p",components:n},r(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"h1")),r(i.MDXTag,{name:"hr",components:n}),r(i.MDXTag,{name:"h2",components:n},"Heading"),r(i.MDXTag,{name:"p",components:n},"Headings are top-level elements of sections. They act the same as titles, but span a section instead of a page or modal. "),r(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),r(i.MDXTag,{name:"ul",components:n},r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use headings as a subheading, title or display"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is short and concise (1-5 words)"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Describes the main subject of a section"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),r(i.MDXTag,{name:"h5",components:n},"Examples"),r(i.MDXTag,{name:"p",components:n},r(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"h2")),r(i.MDXTag,{name:"hr",components:n}),r(i.MDXTag,{name:"h2",components:n},"Subheading"),r(i.MDXTag,{name:"p",components:n},"Subheadings are top-level elements of subsections. "),r(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),r(i.MDXTag,{name:"ul",components:n},r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use subheadings as a heading, title or display"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is short and concise (1-5 words)"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Describes the main subject of a subsection"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),r(i.MDXTag,{name:"h5",components:n},"Examples"),r(i.MDXTag,{name:"p",components:n},r(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"h3 | h4 | h5 | h6")),r(i.MDXTag,{name:"hr",components:n}),r(i.MDXTag,{name:"h2",components:n},"Body"),r(i.MDXTag,{name:"p",components:n},"The lowest level of text containing most of the information."),r(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),r(i.MDXTag,{name:"ul",components:n},r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use a body without at least a heading and a title"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Positioned directly below a (sub)heading"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Aim for 45 to 75 characters per line for legibility"),r(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),r(i.MDXTag,{name:"h5",components:n},"Examples"),r(i.MDXTag,{name:"p",components:n},r(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"h3 | h4 | h5 | h6")))},m=a("cNip"),c=a("LPWT"),l=o.a.createElement;n.default=function(){return l(c.a,{dirName:"components"},l(s,{components:m.a}))}}},[["bM/Y",1,2,3,0]]]);