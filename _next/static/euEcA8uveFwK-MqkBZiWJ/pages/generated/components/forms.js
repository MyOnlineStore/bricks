(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6qfE":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var o,t=a("RSLW"),i=(o=t)&&o.__esModule?o:{default:o};n.MDXTag=i.default},FElN:function(e,n,a){"use strict";a.d(n,"a",(function(){return m}));var o=a("q1tI"),t=a.n(o),i=a("pvvA"),s=a("vOnD"),r=t.a.createElement,m=Object(s.default)(i.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],i.colors.white,Object(i.rgba)(i.colors.grey900,.25));n.b=function(e){return r(m,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,a){"use strict";var o=a("q1tI"),t=a.n(o),i=a("pvvA"),s=a("FElN"),r=t.a.createElement,m=function(e){return r(i.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},l=a("TCAI"),c=a("vOnD"),p=t.a.createElement,d=Object(c.default)(i.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),u=function(e){var n=Object(o.useState)(!1),a=n[0],t=n[1];return Object(o.useEffect)((function(){window.location.pathname===e.href&&t(!0)})),p(i.Box,{padding:[12,0]},p(i.Heading,{as:"h5",hierarchy:5},p(d,{strong:a,variant:2===e.depth?"descriptive":void 0,as:"span"},p(l.a,{href:e.href,title:e.title},e.icon&&p(i.Icon,{size:"small",icon:e.icon})," ",e.title))))},g=a("i1cI"),h=t.a.createElement,T=a("MZYU"),f=function(e){var n=T.articles.filter((function(n){return n.dir===e.dirName}));return h(m,null,h(i.Box,{padding:[0,0,36,0]},h(u,{icon:h(g.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,a){var o=n.replace(/\.mdx?$/,""),t=(o.charAt(0).toUpperCase()+o.slice(1)).replace("-"," "),i="/generated/".concat(e.dirName,"/").concat(o);if("index"!==o)return h(u,{key:a,href:i,title:"".concat(t)})})))},M=t.a.createElement;n.a=function(e){return M(i.Box,null,M(f,{dirName:e.dirName}),M(s.b,null,e.children))}},MZYU:function(e,n,a){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},"Nk+N":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/components/forms",function(){return a("obFS")}])},RSLW:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(a("q1tI"));t(a("17x9"));function t(e){return e&&e.__esModule?e:{default:e}}var i={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,a=e.parentName,t=e.props,s=void 0===t?{}:t,r=e.children,m=e.components,l=void 0===m?{}:m,c=l[a+"."+n]||l[n]||i[n]||n;return o.default.createElement(c,s,r)}},TCAI:function(e,n,a){"use strict";var o=a("pvvA"),t=a("vOnD"),i=Object(t.default)(o.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=i},cNip:function(e,n,a){"use strict";var o=a("q1tI"),t=a.n(o),i=a("pvvA"),s=a("vOnD"),r=t.a.createElement,m=s.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],i.colors.grey300),l={h1:function(e){return r(i.Box,{margin:[36,0]},r(i.Heading,{hierarchy:1},e.children))},h2:function(e){return r(i.Box,{margin:[24,0]},r(i.Heading,{hierarchy:2},e.children))},h3:function(e){return r(i.Box,{margin:[18,0,12,0]},r(i.Heading,{hierarchy:3},e.children))},h4:function(e){return r(i.Box,{margin:[18,0,6,0]},r(i.Heading,{hierarchy:4},e.children))},h5:function(e){return r(i.Box,{margin:[12,0,6,0]},r(i.Heading,{hierarchy:5},e.children))},h6:function(e){return r(i.Box,{margin:[0,0,0,0]},r(i.Heading,{hierarchy:6},e.children))},hr:function(e){return r(i.Box,{margin:[24,0],width:"100%"},r(m,null))},p:function(e){return r(i.Text,{variant:"descriptive"},e.children)},li:function(e){return r(i.Text,{as:"span",variant:"descriptive"},r("li",null,e.children))}};n.a=l},obFS:function(e,n,a){"use strict";a.r(n);var o=a("q1tI"),t=a.n(o),i=a("6qfE"),s=t.a.createElement,r=function(e){var n=e.components;return s(i.MDXTag,{name:"wrapper",components:n},s(i.MDXTag,{name:"h1",components:n},"Forms"),s(i.MDXTag,{name:"h2",components:n},"Form fields"),s(i.MDXTag,{name:"h3",components:n},"Text"),s(i.MDXTag,{name:"p",components:n},"An open input field a user can type in that supports multiple formats."),s(i.MDXTag,{name:"h4",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is used when open input is required"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Only ask for information that is needed"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is clearly labeled (see labels)"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Only optional text fields should be clearly marked (Optional)")),s(i.MDXTag,{name:"h4",components:n},"Examples"),s(i.MDXTag,{name:"pre",components:n},s(i.MDXTag,{name:"code",components:n,parentName:"pre"},"Text field | Prefix | Suffix | Number | Postal code | E-mail | VAT | Text area  \n")),s(i.MDXTag,{name:"h3",components:n},"Select"),s(i.MDXTag,{name:"p",components:n},"A closed list containing predefined options a user can select."),s(i.MDXTag,{name:"h4",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Contains 4 or more options (use radio buttons/checkboxes for 3 or less)"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Is searchable when there are 6 or more options"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Always try to preselect an option or use \u2018Select\u2019 / \u2018Search\u2019  if there is no logical default option"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Options are ordered in a way that makes sense for the content or otherwise alphabetically so users can find their option")),s(i.MDXTag,{name:"h4",components:n},"Examples"),s(i.MDXTag,{name:"pre",components:n},s(i.MDXTag,{name:"code",components:n,parentName:"pre"},"Single select list | Multi-select list | With search option\n")),s(i.MDXTag,{name:"hr",components:n}),s(i.MDXTag,{name:"h2",components:n},"Form labels"),s(i.MDXTag,{name:"h3",components:n},"Labels"),s(i.MDXTag,{name:"p",components:n},"Text to communicate the purpose of a form field."),s(i.MDXTag,{name:"h4",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Are as short and clear as possible (aim for 1-3 words)"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Are positioned above or besides the form field"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Labels convey information that is critical to use the form field")),s(i.MDXTag,{name:"h4",components:n},"Examples"),s(i.MDXTag,{name:"pre",components:n},s(i.MDXTag,{name:"code",components:n,parentName:"pre"},"Horizontal | Vertical | Floating\n")),s(i.MDXTag,{name:"hr",components:n}),s(i.MDXTag,{name:"h3",components:n},"Descriptions"),s(i.MDXTag,{name:"p",components:n},"Subtext that provides additional non-critical information about a form field."),s(i.MDXTag,{name:"h4",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Are always positioned underneath the label"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Are as short and clear as possible (1-2 lines)")),s(i.MDXTag,{name:"h4",components:n},"Examples"),s(i.MDXTag,{name:"pre",components:n},s(i.MDXTag,{name:"code",components:n,parentName:"pre"},"Horizontal | Vertical | Floating\n")),s(i.MDXTag,{name:"h3",components:n},"Form tips"),s(i.MDXTag,{name:"p",components:n},"An icon and a line of text that provide additional non-critical information about a form field."),s(i.MDXTag,{name:"h4",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Are always positioned underneath the form field"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Are as short and clear as possible (1-2 lines)"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Contain non-critical but useful information about a form field")),s(i.MDXTag,{name:"h4",components:n},"Examples"),s(i.MDXTag,{name:"pre",components:n},s(i.MDXTag,{name:"code",components:n,parentName:"pre"},"Info | \n")),s(i.MDXTag,{name:"hr",components:n}),s(i.MDXTag,{name:"h2",components:n},"Form elements"),s(i.MDXTag,{name:"h3",components:n},"Checkbox"),s(i.MDXTag,{name:"p",components:n},"A box to toggle a state on or off."),s(i.MDXTag,{name:"h4",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Checkboxes should only be used when the number of toggled options can vary"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Clearly label each checkbox"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Checkbox labels should be short and concise (1-3 words)"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Always make the label and the on-state positive. For example: \u201cTurn on the lights\u201d instead of \u201cTurn off the lights\u201d"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Checkboxes can be toggled independently and don\u2019t affect each other (with an exception for bulk-actions)")),s(i.MDXTag,{name:"h4",components:n},"Examples"),s(i.MDXTag,{name:"pre",components:n},s(i.MDXTag,{name:"code",components:n,parentName:"pre"},"Default | List | Terms and Conditions\n")),s(i.MDXTag,{name:"h3",components:n},"Radio button"),s(i.MDXTag,{name:"p",components:n},"A button to select one single option in a list."),s(i.MDXTag,{name:"h4",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Radio buttons only exist in lists of 2 or more"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Radio buttons affect each other "),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Only one selection is possible in a list of radio buttons"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"One radio button must always be selected"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Radio buttons in a list should be mutually exclusive"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Are labeled clearly and concise (1-3 words)"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Are ordered logically")),s(i.MDXTag,{name:"h4",components:n},"Examples"),s(i.MDXTag,{name:"pre",components:n},s(i.MDXTag,{name:"code",components:n,parentName:"pre"},"Radio button\n")),s(i.MDXTag,{name:"h3",components:n},"Toggle"),s(i.MDXTag,{name:"p",components:n},"A switch to turn a single option on or off."),s(i.MDXTag,{name:"h4",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Toggles only contain a single option"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Are labeled clearly and concise (1-3 words)"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Always make toggle labels and the on-state positive. For example: \u201cTurn on the lights\u201d instead of \u201cTurn off the lights\u201d")),s(i.MDXTag,{name:"h4",components:n},"Examples"),s(i.MDXTag,{name:"pre",components:n},s(i.MDXTag,{name:"code",components:n,parentName:"pre"},"Toggle\n")),s(i.MDXTag,{name:"h3",components:n},"Slider/Range"),s(i.MDXTag,{name:"p",components:n},"An input field where users can select a single value or range with min. and max. values by sliding."),s(i.MDXTag,{name:"h4",components:n},"Usage and guidelines"),s(i.MDXTag,{name:"ul",components:n},s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"A slider contains a min. and max. value"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Input must be within the min. and max. value of the slider"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"When type input is enabled the currently selected values are shown in two text fields above the slider"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"The slider and the text fields update each other when one of them is used"),s(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Labels are positioned above the slider")),s(i.MDXTag,{name:"h4",components:n},"Examples"),s(i.MDXTag,{name:"pre",components:n},s(i.MDXTag,{name:"code",components:n,parentName:"pre"},"Slider | Range\n")))},m=a("cNip"),l=a("LPWT"),c=t.a.createElement;n.default=function(){return c(l.a,{dirName:"components"},c(r,{components:m.a}))}}},[["Nk+N",1,2,4,3,0]]]);