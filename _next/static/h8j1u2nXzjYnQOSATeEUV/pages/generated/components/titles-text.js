(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"6qfE":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var t,o=a("RSLW"),i=(t=o)&&t.__esModule?t:{default:t};n.MDXTag=i.default},FElN:function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var t=a("q1tI"),o=a.n(t),i=a("pvvA"),r=a("vOnD"),l=o.a.createElement,s=Object(r.default)(i.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],i.colors.white,Object(i.rgba)(i.colors.grey900,.25));n.b=function(e){return l(s,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,a){"use strict";var t=a("q1tI"),o=a.n(t),i=a("pvvA"),r=a("FElN"),l=o.a.createElement,s=function(e){return l(i.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},c=a("TCAI"),d=a("vOnD"),m=o.a.createElement,u=Object(d.default)(i.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),p=function(e){var n=Object(t.useState)(!1),a=n[0],o=n[1];return Object(t.useEffect)((function(){window.location.pathname===e.href&&o(!0)})),m(i.Box,{padding:[12,0]},m(i.Heading,{as:"h5",hierarchy:5},m(u,{strong:a,variant:2===e.depth?"descriptive":void 0,as:"span"},m(c.a,{href:e.href,title:e.title},e.icon&&m(i.Icon,{size:"small",icon:e.icon})," ",e.title))))},g=a("i1cI"),h=o.a.createElement,f=a("MZYU"),x=function(e){var n=f.articles.filter((function(n){return n.dir===e.dirName}));return h(s,null,h(i.Box,{padding:[0,0,36,0]},h(p,{icon:h(g.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,a){var t=n.replace(/\.mdx?$/,""),o=(t.charAt(0).toUpperCase()+t.slice(1)).replace("-"," "),i="/generated/".concat(e.dirName,"/").concat(t);if("index"!==t)return h(p,{key:a,href:i,title:"".concat(o)})})))},v=o.a.createElement;n.a=function(e){return v(i.Box,null,v(x,{dirName:e.dirName}),v(r.b,null,e.children))}},MZYU:function(e,n,a){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},RSLW:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o(a("q1tI"));o(a("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}var i={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,a=e.parentName,o=e.props,r=void 0===o?{}:o,l=e.children,s=e.components,c=void 0===s?{}:s,d=c[a+"."+n]||c[n]||i[n]||n;return t.default.createElement(d,r,l)}},TCAI:function(e,n,a){"use strict";var t=a("pvvA"),o=a("vOnD"),i=Object(o.default)(t.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=i},"bM/Y":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/components/titles-text",function(){return a("lW7b")}])},cNip:function(e,n,a){"use strict";var t=a("q1tI"),o=a.n(t),i=a("pvvA"),r=a("vOnD"),l=o.a.createElement,s=r.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],i.colors.grey300),c={h1:function(e){return l(i.Box,{margin:[36,0]},l(i.Heading,{hierarchy:1},e.children))},h2:function(e){return l(i.Box,{margin:[24,0]},l(i.Heading,{hierarchy:2},e.children))},h3:function(e){return l(i.Box,{margin:[18,0,12,0]},l(i.Heading,{hierarchy:3},e.children))},h4:function(e){return l(i.Box,{margin:[18,0,6,0]},l(i.Heading,{hierarchy:4},e.children))},h5:function(e){return l(i.Box,{margin:[12,0,6,0]},l(i.Heading,{hierarchy:5},e.children))},h6:function(e){return l(i.Box,{margin:[0,0,0,0]},l(i.Heading,{hierarchy:5},e.children))},hr:function(e){return l(i.Box,{margin:[24,0],width:"100%"},l(s,null))},p:function(e){return l(i.Text,null,e.children)},li:function(e){return l(i.Text,{as:"span"},l("li",null,e.children))}};n.a=c},lW7b:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),o=a.n(t),i=a("6qfE"),r=a("nLHu"),l=a("pvvA"),s=o.a.createElement,c=[{value:"text-display",label:"Text - Display"}],d=[{value:"text-display",component:s(l.Text,{size:"display"},"My Online Store!")}],m=function(){return s(r.a,{options:c,examples:d})},u=o.a.createElement,p=[{value:"text-title",label:"Text - Title"}],g=[{value:"text-title",component:u(l.Heading,{hierarchy:1,as:"h1"},"My Online Store!")}],h=function(){return u(r.a,{options:p,examples:g})},f=o.a.createElement,x=[{value:"text-heading",label:"Text - Heading"}],v=[{value:"text-heading",component:f(l.Heading,{hierarchy:2,as:"h2"},"My Online Store!")}],b=function(){return f(r.a,{options:x,examples:v})},y=o.a.createElement,T=[{value:"subheading - h3",label:"Subheading - h3"},{value:"subheading - h4",label:"Subheading - h4"},{value:"subheading - h5",label:"Subheading - h5"}],M=[{value:"subheading - h3",component:y(l.Heading,{hierarchy:3,as:"h3"},"My Online Store!")},{value:"subheading - h4",component:y(l.Heading,{hierarchy:4,as:"h4"},"My Online Store!")},{value:"subheading - h5",component:y(l.Heading,{hierarchy:5,as:"h5"},"My Online Store!")}],D=function(){return y(r.a,{options:T,examples:M})},N=o.a.createElement,w="\n    Now this is the story all about how\n    my life got flipped, turned upside down.\n    And I'd like to take a minute just sit right there\n    I'll tell you how I became the prince of a town called Bel-air\n",X=[{value:"body - small",label:"Body - Small"},{value:"body - regular",label:"Body - Regular"},{value:"body - large",label:"Body - Large"},{value:"body - extralarge",label:"Body - ExtraLarge"}],B=[{value:"body - small",component:N(l.Text,{size:"small"},w)},{value:"body - regular",component:N(l.Text,{size:"regular"},w)},{value:"body - large",component:N(l.Text,{size:"large"},w)},{value:"body - extralarge",component:N(l.Text,{size:"extraLarge"},w)}],I=function(){return N(r.a,{options:X,examples:B,defaultOption:"body - regular"})},O=o.a.createElement,S=function(e){var n=e.components;return O(i.MDXTag,{name:"wrapper",components:n},O(i.MDXTag,{name:"h1",components:n},"Titles and text"),O(i.MDXTag,{name:"h2",components:n},"Display"),O(i.MDXTag,{name:"p",components:n},"A large text to grab visual attention used for marketing and onboarding purposes."),O(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),O(i.MDXTag,{name:"ul",components:n},O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"To be used sparingly"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use more than 1 display on a page"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is short and concise (1-5 words)"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),O(m,null),O(i.MDXTag,{name:"h2",components:n},"Titles"),O(i.MDXTag,{name:"p",components:n},"Titles are top-level elements of pages and modals. They communicate what the page or modal is about and what primary action a modal focuses on."),O(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),O(i.MDXTag,{name:"ul",components:n},O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use more than 1 title on a page or modal"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is short and concise (1-5 words)"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Describes the main subject and action of the page or modal"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),O(h,null),O(i.MDXTag,{name:"h2",components:n},"Heading"),O(i.MDXTag,{name:"p",components:n},"Headings are top-level elements of sections. They act the same as titles, but span a section instead of a page or modal. "),O(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),O(i.MDXTag,{name:"ul",components:n},O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use headings as a subheading, title or display"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is short and concise (1-5 words)"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Describes the main subject of a section"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),O(b,null),O(i.MDXTag,{name:"h2",components:n},"Subheading"),O(i.MDXTag,{name:"p",components:n},"Subheadings are top-level elements of subsections. "),O(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),O(i.MDXTag,{name:"ul",components:n},O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use subheadings as a heading, title or display"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is short and concise (1-5 words)"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Describes the main subject of a subsection"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),O(D,null),O(i.MDXTag,{name:"h2",components:n},"Body"),O(i.MDXTag,{name:"p",components:n},"The lowest level of text containing most of the information."),O(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),O(i.MDXTag,{name:"ul",components:n},O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never use a body without at least a heading and a title"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Positioned directly below a (sub)heading"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Aim for 45 to 75 characters per line for legibility"),O(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Never contains interaction")),O(I,null))},_=a("cNip"),E=a("LPWT"),H=o.a.createElement;n.default=function(){return H(E.a,{dirName:"components"},H(S,{components:_.a}))}},nLHu:function(e,n,a){"use strict";var t=a("q1tI"),o=a.n(t),i=a("pvvA"),r=a("vOnD"),l=o.a.createElement,s=Object(r.default)(i.Contrast).withConfig({displayName:"PreviewPane__StyledContrast",componentId:"i4pmuv-0"})(["margin-top:36px;margin-bottom:36px;border-radius:9px;width:100%;min-width:720px;"]),c=Object(r.default)(i.Box).withConfig({displayName:"PreviewPane__StyledSelectBox",componentId:"i4pmuv-1"})(["width:282px;margin-left:36px;"]),d=Object(r.default)(i.Box).withConfig({displayName:"PreviewPane__StyledContentBox",componentId:"i4pmuv-2"})(["border-radius:9px;background:",";padding:36px;align-items:center;"],i.colors.white);n.a=function(e){var n,a=Object(t.useState)(e.defaultOption?e.defaultOption:e.options[0].value),o=a[0],r=a[1];return l(s,null,l(i.Box,{padding:[36],direction:"column",width:"100%"},l(i.Box,null,l(i.Box,{padding:[0,0,36,0],alignItems:"center"},l(i.Heading,{hierarchy:5,as:"h5"},"Examples"),e.examples.length>1&&l(c,null,l(i.NativeSelect,{value:o,onChange:r,options:e.options})))),l(d,null,null===(n=e.examples.find((function(e){return e.value===o})))||void 0===n?void 0:n.component)))}}},[["bM/Y",1,2,4,3,0]]]);