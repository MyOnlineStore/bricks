(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6qfE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var o,a=t("RSLW"),i=(o=a)&&o.__esModule?o:{default:o};n.MDXTag=i.default},FElN:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t("q1tI"),a=t.n(o),i=t("pvvA"),r=t("vOnD"),s=a.a.createElement,c=Object(r.default)(i.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],i.colors.white,Object(i.rgba)(i.colors.grey900,.25));n.b=function(e){return s(c,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,t){"use strict";var o=t("q1tI"),a=t.n(o),i=t("pvvA"),r=t("FElN"),s=a.a.createElement,c=function(e){return s(i.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},m=t("TCAI"),l=t("vOnD"),p=a.a.createElement,u=Object(l.default)(i.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),d=function(e){var n=Object(o.useState)(!1),t=n[0],a=n[1];return Object(o.useEffect)((function(){window.location.pathname===e.href&&a(!0)})),p(i.Box,{padding:[12,0]},p(i.Heading,{as:"h5",hierarchy:5},p(u,{strong:t,severity:2===e.depth?"info":void 0,as:"span"},p(m.a,{href:e.href,title:e.title},e.icon&&p(i.Icon,{size:"small",icon:e.icon})," ",e.title))))},h=a.a.createElement,g=t("MZYU"),f=function(e){var n=g.articles.filter((function(n){return n.dir===e.dirName}));return h(c,null,h(i.Box,{padding:[0,0,36,0]},h(d,{icon:i.ChevronLeftIcon,href:"/",title:" Back"})),n[0].files.map((function(n,t){var o=n.replace(/\.mdx?$/,""),a=(o.charAt(0).toUpperCase()+o.slice(1)).replace("-"," "),i="/generated/".concat(e.dirName,"/").concat(o);if("index"!==o)return h(d,{key:t,href:i,title:"".concat(a)})})))},b=a.a.createElement;n.a=function(e){return b(i.Box,null,b(f,{dirName:e.dirName}),b(r.b,null,e.children))}},MZYU:function(e,n,t){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},NzNB:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/components/buttons",function(){return t("gJ2U")}])},RSLW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=a(t("q1tI"));a(t("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}var i={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,s=e.children,c=e.components,m=void 0===c?{}:c,l=m[t+"."+n]||m[n]||i[n]||n;return o.default.createElement(l,r,s)}},TCAI:function(e,n,t){"use strict";var o=t("pvvA"),a=t("vOnD"),i=Object(a.default)(o.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=i},cNip:function(e,n,t){"use strict";var o=t("q1tI"),a=t.n(o),i=t("pvvA"),r=t("vOnD"),s=a.a.createElement,c=r.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],i.colors.grey300),m={h1:function(e){return s(i.Box,{margin:[36,0]},s(i.Heading,{hierarchy:1},e.children))},h2:function(e){return s(i.Box,{margin:[24,0]},s(i.Heading,{hierarchy:2},e.children))},h3:function(e){return s(i.Box,{margin:[18,0,12,0]},s(i.Heading,{hierarchy:3},e.children))},h4:function(e){return s(i.Box,{margin:[18,0,6,0]},s(i.Heading,{hierarchy:4},e.children))},h5:function(e){return s(i.Box,{margin:[12,0,6,0]},s(i.Heading,{hierarchy:5},e.children))},h6:function(e){return s(i.Box,{margin:[0,0,0,0]},s(i.Heading,{hierarchy:6},e.children))},hr:function(e){return s(i.Box,{margin:[24,0],width:"100%"},s(c,null))},p:function(e){return s(i.Text,{severity:"info"},e.children)},li:function(e){return s(i.Text,{as:"span",severity:"info"},s("li",null,e.children))}};n.a=m},gJ2U:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),i=t("6qfE"),r=t("pvvA"),s=a.a.createElement,c=function(e){var n=e.components;return s(i.MDXTag,{name:"wrapper",components:n},s(i.MDXTag,{name:"h1",components:n},"Buttons"),s(r.Box,null,s(r.Button,{variant:"primary",title:"Click me!"})),s(i.MDXTag,{name:"h2",components:n},"Default buttons"),s(i.MDXTag,{name:"p",components:n},"Buttons make actions instantly visible on a page. Depending on the type of action there are several types of buttons available. The most common are the default buttons. You will find these buttons throughout every part of our interface."),s(i.MDXTag,{name:"h4",components:n},"Shape"),s(i.MDXTag,{name:"p",components:n},"The default buttons are all based on a rounded rectangle (border-radius: 3px) with a solid -2px inset shadow at the bottom."),s(i.MDXTag,{name:"h4",components:n},"Sizing"),s(i.MDXTag,{name:"p",components:n},"All default buttons are 36px in height and have a padding on both sides of 24px. This makes them vary in width and not in height. The font-size of the button texts are 15px (the same as our default text)."),s(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Use complete verbs in buttons. "),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Use only one primary or destructive button per page"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Text in buttons should always start with a capital but never be all-caps."),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Cancel buttons can only be used in combination with a primary button, preferably in a ''no - yes'' or ''cancel - submit'' order."),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Icon buttons can only contain one icon before the text, never on the right or more than one icon."),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Destructive and warning state buttons are to be used only for delete or actions which are otherwise hard to recover from."),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Buttons should be positioned in consistent locations in the interface.")),s(i.MDXTag,{name:"h5",components:n},"Examples"),s(i.MDXTag,{name:"p",components:n},s(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Primary | Secondary | Destructive | Warning | Cancel")),s(i.MDXTag,{name:"hr",components:n}),s(i.MDXTag,{name:"h2",components:n},"Icon buttons"),s(i.MDXTag,{name:"h4",components:n},"Icon button with text"),s(i.MDXTag,{name:"p",components:n},"The icon button with text adds a regular sized icon (18x18px) 12px to the left of the button text. Based on this principle all other styles of the default button can be created."),s(i.MDXTag,{name:"h4",components:n},"Icon button without text"),s(i.MDXTag,{name:"p",components:n},"Regular sized icons (18x18px) can be used as buttons in certain situations (for example in tables). They grow in size when you hover over them and some might change color (depending on the action involved). A delete option will change into red when hovered. The buttons should have a tooltip that describes the action on this icon on hover."),s(i.MDXTag,{name:"hr",components:n}),s(i.MDXTag,{name:"h2",components:n},"CTA buttons"),s(i.MDXTag,{name:"p",components:n},"A rounder and softer button style used for marketing and promotional purposes."),s(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Used only for marketing and promotional purposes")),s(i.MDXTag,{name:"h5",components:n},"Examples"),s(i.MDXTag,{name:"p",components:n},s(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Buy | Upgrade | Start")),s(i.MDXTag,{name:"hr",components:n}),s(i.MDXTag,{name:"h2",components:n},"Button group"),s(i.MDXTag,{name:"p",components:n},"The ButtonGroup should be used whenever you want to display multiple buttons next to each other. "),s(i.MDXTag,{name:"h5",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Buttons are separated by 18px"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Only one of the buttons can be a primary button, the other one is a secondary or cancel button"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"A button group is left-aligned at the end of forms"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"A button group is right-aligned at the end of a modal"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"When the group is left-aligned the primary button is on the left"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"When the group is right-aligned the primary button is on the right"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"When the group is center-aligned the primary button is on the right")),s(i.MDXTag,{name:"h5",components:n},"Examples"),s(i.MDXTag,{name:"p",components:n},s(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Primary + Cancel | Multiple Secondaries")))},m=t("cNip"),l=t("LPWT"),p=a.a.createElement;n.default=function(){return p(l.a,{dirName:"components"},p(c,{components:m.a}))}}},[["NzNB",1,2,3,0]]]);