(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6qfE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var a,o=t("RSLW"),i=(a=o)&&a.__esModule?a:{default:a};n.MDXTag=i.default},FElN:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("q1tI"),o=t.n(a),i=t("pvvA"),r=t("vOnD"),l=o.a.createElement,c=Object(r.default)(i.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],i.colors.white,Object(i.rgba)(i.colors.grey900,.25));n.b=function(e){return l(c,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},HfN4:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/components/status-indicators",function(){return t("mID4")}])},LPWT:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),i=t("pvvA"),r=t("FElN"),l=o.a.createElement,c=function(e){return l(i.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},s=t("TCAI"),d=t("vOnD"),u=o.a.createElement,m=Object(d.default)(i.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),p=function(e){var n=Object(a.useState)(!1),t=n[0],o=n[1];return Object(a.useEffect)((function(){window.location.pathname===e.href&&o(!0)})),u(i.Box,{padding:[12,0]},u(i.Heading,{as:"h5",hierarchy:5},u(m,{strong:t,variant:2===e.depth?"descriptive":void 0,as:"span"},u(s.a,{href:e.href,title:e.title},e.icon&&u(i.Icon,{size:"small",icon:e.icon})," ",e.title))))},h=t("i1cI"),f=o.a.createElement,g=t("MZYU"),x=function(e){var n=g.articles.filter((function(n){return n.dir===e.dirName}));return f(c,null,f(i.Box,{padding:[0,0,36,0]},f(p,{icon:f(h.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,t){var a=n.replace(/\.mdx?$/,""),o=(a.charAt(0).toUpperCase()+a.slice(1)).replace("-"," "),i="/generated/".concat(e.dirName,"/").concat(a);if("index"!==a)return f(p,{key:t,href:i,title:"".concat(o)})})))},v=o.a.createElement;n.a=function(e){return v(i.Box,null,v(x,{dirName:e.dirName}),v(r.b,null,e.children))}},MZYU:function(e,n,t){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},RSLW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o(t("q1tI"));o(t("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}var i={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,t=e.parentName,o=e.props,r=void 0===o?{}:o,l=e.children,c=e.components,s=void 0===c?{}:c,d=s[t+"."+n]||s[n]||i[n]||n;return a.default.createElement(d,r,l)}},TCAI:function(e,n,t){"use strict";var a=t("pvvA"),o=t("vOnD"),i=Object(o.default)(a.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=i},cNip:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),i=t("pvvA"),r=t("vOnD"),l=o.a.createElement,c=r.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],i.colors.grey300),s={h1:function(e){return l(i.Box,{margin:[36,0]},l(i.Heading,{hierarchy:1},e.children))},h2:function(e){return l(i.Box,{margin:[24,0]},l(i.Heading,{hierarchy:2},e.children))},h3:function(e){return l(i.Box,{margin:[18,0,12,0]},l(i.Heading,{hierarchy:3},e.children))},h4:function(e){return l(i.Box,{margin:[18,0,6,0]},l(i.Heading,{hierarchy:4},e.children))},h5:function(e){return l(i.Box,{margin:[12,0,6,0]},l(i.Heading,{hierarchy:5},e.children))},h6:function(e){return l(i.Box,{margin:[0,0,0,0]},l(i.Heading,{hierarchy:5},e.children))},hr:function(e){return l(i.Box,{margin:[24,0],width:"100%"},l(c,null))},p:function(e){return l(i.Text,null,e.children)},li:function(e){return l(i.Text,{as:"span"},l("li",null,e.children))}};n.a=s},mID4:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),i=t("6qfE"),r=t("nLHu"),l=t("pvvA"),c=o.a.createElement,s=[{value:"inline-error",label:"Inline Error Notification"}],d=[{value:"inline-error",component:c(l.Box,{width:"100%"},c(l.FormRow,{label:c("label",null,c(l.Box,null,c(l.Text,{strong:!0},"What is your name?")),c(l.Text,{variant:"descriptive"},"The name you were born with.")),field:c(l.Box,{width:"100%",direction:"column"},c(l.TextField,{name:"formfield",value:"",onChange:function(){},feedback:{severity:"error",message:"A name is required"}}))}))}],u=function(){return c(r.a,{options:s,examples:d})},m=o.a.createElement,p=[{value:"spinner-default",label:"Spinner - Default"},{value:"spinner-button",label:"Spinner - Button"}],h=[{value:"spinner-default",component:m(l.Box,{width:"36px"},m(l.Spinner,{color:l.colors.green600}))},{value:"spinner-button",component:m(l.Button,{title:"loading",variant:"primary",loading:!0})}],f=function(){return m(r.a,{options:p,examples:h})},g=o.a.createElement,x=[{value:"skeleton-text",label:"Skeleton - Text"},{value:"skeleton-image",label:"Skeleton - Image"}],v=[{value:"skeleton-text",component:g(l.Box,{direction:"column",width:"100%"},g(l.Skeleton.Text,{lines:5}))},{value:"skeleton-image",component:g(l.Skeleton.Rect,{width:"150px",height:"150px"})}],w=function(){return g(r.a,{options:x,examples:v})},b=o.a.createElement,y=function(e){var n=e.components;return b(i.MDXTag,{name:"wrapper",components:n},b(i.MDXTag,{name:"h1",components:n},"Status indicators"),b(i.MDXTag,{name:"h2",components:n},"Inline error notification"),b(i.MDXTag,{name:"p",components:n},"An icon and a line of text to indicate a status below a form field  "),b(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),b(i.MDXTag,{name:"ul",components:n},b(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is positioned directly below the form field"),b(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Only contain critical status information"),b(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is short and concise (1 line)"),b(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Shows what went wrong and what a user\u2019s next step can be to fix it"),b(i.MDXTag,{name:"li",components:n,parentName:"ul"},"It is written in an objective and passive form to never accidentally blame the user. For example: \u201cA phone number is required.\u201d instead of \u201cYou forgot to enter your phone number\u201d")),b(u,null),b(i.MDXTag,{name:"h2",components:n},"Spinner"),b(i.MDXTag,{name:"p",components:n},"A rotating line indicating a request has been received and is being processed."),b(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),b(i.MDXTag,{name:"ul",components:n},b(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Indicates a request is being processed and results will soon be shown"),b(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Does not take too long, include a time-out where possible"),b(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Can be used in the font color within actionable components like buttons")),b(f,null),b(i.MDXTag,{name:"hr",components:n}),b(i.MDXTag,{name:"h2",components:n},"Skeletons"),b(i.MDXTag,{name:"p",components:n},"A pre-loading state of a page or element that lets users get used to the general lay-out and indicate that something is loading."),b(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),b(i.MDXTag,{name:"ul",components:n},b(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Skeletons are used to display a low fidelity version of the interface before the content is loaded. This improves the way load times are perceived by our merchants. Skeletons give the merchant an indication of what the page will look like when it is fully loaded.")),b(w,null))},T=t("cNip"),D=t("LPWT"),M=o.a.createElement;n.default=function(){return M(D.a,{dirName:"components"},M(y,{components:T.a}))}},nLHu:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),i=t("pvvA"),r=t("vOnD"),l=o.a.createElement,c=Object(r.default)(i.Contrast).withConfig({displayName:"PreviewPane__StyledContrast",componentId:"i4pmuv-0"})(["margin-top:36px;margin-bottom:36px;border-radius:9px;width:100%;min-width:720px;"]),s=Object(r.default)(i.Box).withConfig({displayName:"PreviewPane__StyledSelectBox",componentId:"i4pmuv-1"})(["width:282px;margin-left:36px;"]),d=Object(r.default)(i.Box).withConfig({displayName:"PreviewPane__StyledContentBox",componentId:"i4pmuv-2"})(["border-radius:9px;background:",";padding:36px;align-items:center;"],i.colors.white);n.a=function(e){var n,t=Object(a.useState)(e.defaultOption?e.defaultOption:e.options[0].value),o=t[0],r=t[1];return l(c,null,l(i.Box,{padding:[36],direction:"column",width:"100%"},l(i.Box,null,l(i.Box,{padding:[0,0,36,0],alignItems:"center"},l(i.Heading,{hierarchy:5,as:"h5"},"Examples"),e.examples.length>1&&l(s,null,l(i.NativeSelect,{value:o,onChange:r,options:e.options})))),l(d,null,null===(n=e.examples.find((function(e){return e.value===o})))||void 0===n?void 0:n.component)))}}},[["HfN4",1,2,4,3,0]]]);