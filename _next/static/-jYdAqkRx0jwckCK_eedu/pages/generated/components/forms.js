(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6qfE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var a,o=t("RSLW"),l=(a=o)&&a.__esModule?a:{default:a};n.MDXTag=l.default},FElN:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("q1tI"),o=t.n(a),l=t("pvvA"),i=t("vOnD"),r=o.a.createElement,c=Object(i.default)(l.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],l.colors.white,Object(l.rgba)(l.colors.grey900,.25));n.b=function(e){return r(c,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),l=t("pvvA"),i=t("FElN"),r=o.a.createElement,c=function(e){return r(l.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},u=t("TCAI"),s=t("vOnD"),m=o.a.createElement,d=Object(s.default)(l.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),p=function(e){var n=Object(a.useState)(!1),t=n[0],o=n[1];return Object(a.useEffect)((function(){window.location.pathname===e.href&&o(!0)})),m(l.Box,{padding:[12,0]},m(l.Heading,{as:"h5",hierarchy:5},m(d,{strong:t,variant:2===e.depth?"descriptive":void 0,as:"span"},m(u.a,{href:e.href,title:e.title},e.icon&&m(l.Icon,{size:"small",icon:e.icon})," ",e.title))))},h=t("i1cI"),f=o.a.createElement,g=t("MZYU"),b=function(e){var n=g.articles.filter((function(n){return n.dir===e.dirName}));return f(c,null,f(l.Box,{padding:[0,0,36,0]},f(p,{icon:f(h.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,t){var a=n.replace(/\.mdx?$/,""),o=(a.charAt(0).toUpperCase()+a.slice(1)).replace("-"," "),l="/generated/".concat(e.dirName,"/").concat(a);if("index"!==a)return f(p,{key:t,href:l,title:"".concat(o)})})))},v=o.a.createElement;n.a=function(e){return v(l.Box,null,v(b,{dirName:e.dirName}),v(i.b,null,e.children))}},MZYU:function(e,n,t){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},"Nk+N":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/components/forms",function(){return t("obFS")}])},RSLW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o(t("q1tI"));o(t("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}var l={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,t=e.parentName,o=e.props,i=void 0===o?{}:o,r=e.children,c=e.components,u=void 0===c?{}:c,s=u[t+"."+n]||u[n]||l[n]||n;return a.default.createElement(s,i,r)}},TCAI:function(e,n,t){"use strict";var a=t("pvvA"),o=t("vOnD"),l=Object(o.default)(a.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=l},cNip:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),l=t("pvvA"),i=t("vOnD"),r=o.a.createElement,c=i.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],l.colors.grey300),u={h1:function(e){return r(l.Box,{margin:[36,0]},r(l.Heading,{hierarchy:1},e.children))},h2:function(e){return r(l.Box,{margin:[24,0]},r(l.Heading,{hierarchy:2},e.children))},h3:function(e){return r(l.Box,{margin:[18,0,12,0]},r(l.Heading,{hierarchy:3},e.children))},h4:function(e){return r(l.Box,{margin:[18,0,6,0]},r(l.Heading,{hierarchy:4},e.children))},h5:function(e){return r(l.Box,{margin:[12,0,6,0]},r(l.Heading,{hierarchy:5},e.children))},h6:function(e){return r(l.Box,{margin:[0,0,0,0]},r(l.Heading,{hierarchy:6},e.children))},hr:function(e){return r(l.Box,{margin:[24,0],width:"100%"},r(c,null))},p:function(e){return r(l.Text,{variant:"descriptive"},e.children)},li:function(e){return r(l.Text,{as:"span",variant:"descriptive"},r("li",null,e.children))}};n.a=u},nLHu:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),l=t("pvvA"),i=t("vOnD"),r=o.a.createElement,c=Object(i.default)(l.Contrast).withConfig({displayName:"PreviewPane__StyledContrast",componentId:"i4pmuv-0"})(["margin-top:36px;margin-bottom:36px;border-radius:9px;width:100%;min-width:720px;"]),u=Object(i.default)(l.Box).withConfig({displayName:"PreviewPane__StyledSelectBox",componentId:"i4pmuv-1"})(["width:282px;margin-left:36px;"]),s=Object(i.default)(l.Box).withConfig({displayName:"PreviewPane__StyledContentBox",componentId:"i4pmuv-2"})(["border-radius:9px;background:",";padding:36px;align-items:center;"],l.colors.white);n.a=function(e){var n,t=Object(a.useState)(e.defaultOption?e.defaultOption:e.options[0].value),o=t[0],i=t[1];return r(c,null,r(l.Box,{padding:[36],direction:"column",width:"100%"},r(l.Box,null,r(l.Box,{padding:[0,0,36,0],alignItems:"center"},r(l.Heading,{hierarchy:5,as:"h5"},"Examples"),e.examples.length>1&&r(u,null,r(l.NativeSelect,{value:o,onChange:i,options:e.options})))),r(s,null,null===(n=e.examples.find((function(e){return e.value===o})))||void 0===n?void 0:n.component)))}},obFS:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),l=t("6qfE"),i=t("nLHu"),r=t("pvvA"),c=o.a.createElement,u=[{value:"text-field",label:"Text Field - Default"},{value:"text-field-prefix",label:"Text Field - With Prefix"},{value:"text-field-suffix",label:"Text Field - With Suffix"},{value:"text-field-feedback",label:"Text Field - With Feedback"},{value:"text-area-default",label:"Text Area - Default"},{value:"text-area-characterlimit",label:"Text Area - With Character Limit"},{value:"number-field",label:"Number Field"},{value:"currency-field",label:"Currency Field"}],s=[{value:"text-field",component:c((function(){var e=Object(a.useState)(""),n=e[0],t=e[1];return c(r.TextField,{name:"default",value:n,onChange:t,placeholder:"Start typing..."})}),null)},{value:"text-field-prefix",component:c((function(){var e=Object(a.useState)(""),n=e[0],t=e[1];return c(r.TextField,{prefix:"Foo",name:"prefix",value:n,onChange:t,placeholder:"Start typing..."})}),null)},{value:"text-field-suffix",component:c((function(){var e=Object(a.useState)(""),n=e[0],t=e[1];return c(r.TextField,{suffix:"Bar",name:"suffix",value:n,onChange:t,placeholder:"Start typing..."})}),null)},{value:"text-field-feedback",component:c((function(){var e=Object(a.useState)(""),n=e[0],t=e[1],o=Object(a.useState)(!1),l=o[0],i=o[1],u=Object(a.useState)(!1),s=u[0],m=u[1];return c(r.Box,{direction:"column",width:"100%"},c(r.TextField,{name:"feedback",value:n,onChange:function(e){t(e),e.length>4&&e.length<=8?i(!0):i(!1),e.length>8?m(!0):m(!1)},placeholder:"Start typing...",feedback:l?{message:"Great job, you typed more than 4 characters!",severity:"success"}:s?{message:"Whoa there! That is way too many characters for me.",severity:"error"}:{message:"Try typing more than 4 characters...",severity:"info"}}))}),null)},{value:"text-area-default",component:c((function(){var e=Object(a.useState)(""),n=e[0],t=e[1];return c(r.TextArea,{name:"default-text-area",value:n,onChange:t})}),null)},{value:"text-area-characterlimit",component:c((function(){var e=Object(a.useState)(""),n=e[0],t=e[1];return c(r.TextArea,{name:"characterlimit-text-area",value:n,onChange:t,characterLimit:140})}),null)},{value:"number-field",component:c((function(){var e=Object(a.useState)(100),n=e[0],t=e[1];return c(r.NumberField,{name:"number",value:n,onChange:t})}),null)},{value:"currency-field",component:c((function(){var e=Object(a.useState)(100),n=e[0],t=e[1];return c(r.CurrencyField,{name:"currency",currency:"EUR",locale:"nl-NL",value:n,onChange:t})}),null)}],m=function(){return c(i.a,{options:u,examples:s})},d=o.a.createElement,p=[{image:"https://picsum.photos/100/100?image=988",value:"A",label:"Bar A",description:"Lorem ipsum dolor sit amet."},{image:"https://picsum.photos/100/100?image=960",value:"B",label:"Foo B",description:"Lorem ipsum dolor sit amet."},{image:"https://picsum.photos/100/100?image=958",value:"C",label:"Bar C",description:"Lorem ipsum dolor sit amet."},{image:"https://picsum.photos/100/100?image=940",value:"D",label:"Foo D",description:"Lorem ipsum dolor sit amet."},{image:"https://picsum.photos/100/100?image=924",value:"E",label:"Bar E",description:"Lorem ipsum dolor sit amet."},{image:"https://picsum.photos/100/100?image=915",value:"F",label:"Bar F",description:"Lorem ipsum dolor sit amet."}],h=[{value:"select-single",label:"Select - Native"},{value:"select-search",label:"Select - Search"}],f=[{value:"select-single",component:d((function(){var e=Object(a.useState)(""),n=e[0],t=e[1];return d(r.NativeSelect,{value:n,onChange:t,options:p})}),null)},{value:"select-search",component:d((function(){var e=Object(a.useState)(""),n=e[0],t=e[1];return d(r.Select,{placeholder:"Search a value",value:n,emptyText:"No results",onChange:t,options:p})}),null)}],g=function(){return d(i.a,{options:h,examples:f})},b=o.a.createElement,v=function(){var e=Object(a.useState)(""),n=e[0],t=e[1];return b(r.TextField,{name:"formfield",value:n,onChange:t})},x=o.a.createElement,T=[{value:"label-horizontal",label:"Form label - Horizontal"},{value:"label-vertical",label:"Form label - Vertical"}],D=[{value:"label-horizontal",component:x(r.FormRow,{label:x(r.Text,{strong:!0},"What is your name?"),field:x(v,null)})},{value:"label-vertical",component:x(r.Box,{direction:"column"},x(r.FormRow,{label:x(r.Text,{strong:!0},"What is your name?"),field:x(v,null)}))}],y=function(){return x(i.a,{options:T,examples:D})},M=o.a.createElement,X=[{value:"descriptions-horizontal",label:"Descriptions - Horizontal"},{value:"descriptions-vertical",label:"Descriptions - Vertical"}],w=[{value:"descriptions-horizontal",component:M(r.FormRow,{label:M("label",null,M(r.Box,null,M(r.Text,{strong:!0},"What is your name?")),M(r.Text,{variant:"descriptive"},"The name you were born with.")),field:M(v,null)})},{value:"descriptions-vertical",component:M(r.Box,{direction:"column",width:"50%"},M(r.FormRow,{label:M("label",null,M(r.Box,null,M(r.Text,{strong:!0},"What is your name?")),M(r.Text,{variant:"descriptive"},"The name you were born with.")),field:M(v,null)}))}],N=function(){return M(i.a,{options:X,examples:w})},C=o.a.createElement,k=[{value:"tips-info",label:"Form Tips - Info"}],S=[{value:"tips-info",component:C(r.Box,{width:"100%"},C(r.FormRow,{label:C("label",null,C(r.Box,null,C(r.Text,{strong:!0},"What is your name?")),C(r.Text,{variant:"descriptive"},"The name you were born with.")),field:C(r.Box,{width:"100%",direction:"column"},C(v,null),C(r.Box,{margin:[12,0]},C(r.InlineNotification,{severity:"info",message:"Write your name in the field."})))}))}],O=function(){return C(i.a,{options:k,examples:S})},B=o.a.createElement,F=[{value:"checkbox-default",label:"Checkbox - Default"},{value:"checkbox-list",label:"Checkbox - List"},{value:"checkbox-tandc",label:"Checkbox - Terms & Conditions"}],j=[{value:"checkbox-default",component:B((function(){var e=Object(a.useState)(!0),n=e[0],t=e[1];return B(r.Checkbox,{name:"default",label:"Turn on the lights",checked:n,value:"default",onChange:function(e){return t(!!e.checked)}})}),null)},{value:"checkbox-list",component:B((function(){var e=Object(a.useState)(!0),n=e[0],t=e[1],o=Object(a.useState)(!1),l=o[0],i=o[1],c=Object(a.useState)(!1),u=c[0],s=c[1];return B(r.Separated,null,B(r.Checkbox,{name:"first",label:"Turn on the lights",checked:n,value:"default",onChange:function(e){return t(!!e.checked)}}),B(r.Checkbox,{name:"second",label:"Turn on the TV",checked:l,value:"default",onChange:function(e){return i(!!e.checked)}}),B(r.Checkbox,{name:"first",label:"Turn on the Radio",checked:u,value:"default",onChange:function(e){return s(!!e.checked)}}))}),null)},{value:"checkbox-tandc",component:B((function(){var e=Object(a.useState)(!0),n=e[0],t=e[1];return B(r.Checkbox,{name:"terms",label:"I agree to the Terms & Conditions",checked:n,value:"default",onChange:function(e){return t(!!e.checked)}})}),null)}],A=function(){return B(i.a,{options:F,examples:j})},E=o.a.createElement,L=[{value:"radiobutton-default",label:"RadioButton - Default"}],I=[{value:"radiobutton-default",component:E((function(){var e=Object(a.useState)("first"),n=e[0],t=e[1];return E(r.Separated,null,E(r.RadioButton,{name:"first",label:"Turn on the lights",checked:"first"===n,value:"first",onChange:function(e){return e.checked?t(e.value):void 0}}),E(r.RadioButton,{name:"second",label:"Turn on the TV",checked:"second"===n,value:"second",onChange:function(e){return e.checked?t(e.value):void 0}}),E(r.RadioButton,{name:"first",label:"Turn on the Radio",checked:"third"===n,value:"third",onChange:function(e){return e.checked?t(e.value):void 0}}))}),null)}],_=function(){return E(i.a,{options:L,examples:I})},R=o.a.createElement,W=[{value:"toggle-default",label:"Toggle - Default"}],P=[{value:"toggle-default",component:R((function(){var e=Object(a.useState)(!0),n=e[0],t=e[1];return R(r.Toggle,{name:"default",value:"default",checked:n,label:"Turn on the lights",onChange:function(e){return t(e.checked)}})}),null)}],H=function(){return R(i.a,{options:W,examples:P})},U=o.a.createElement,q=[{value:"slider",label:"Slider"},{value:"range",label:"Range"}],z=[{value:"slider",component:U((function(){var e=Object(a.useState)(10),n=(e[0],e[1]);return U(r.Slider,{value:10,minLimit:5,maxLimit:25,onChange:n,inputFieldWidth:"100px"})}),null)},{value:"range",component:U((function(){var e=Object(a.useState)({min:5,max:12}),n=e[0],t=e[1];return U(r.Range,{label:"cm",value:n,minLimit:1.75,maxLimit:15.1,onChange:t})}),null)}],V=function(){return U(i.a,{options:q,examples:z})},J=o.a.createElement,Y=function(e){var n=e.components;return J(l.MDXTag,{name:"wrapper",components:n},J(l.MDXTag,{name:"h1",components:n},"Forms"),J(l.MDXTag,{name:"h2",components:n},"Form fields"),J(l.MDXTag,{name:"h3",components:n},"Text"),J(l.MDXTag,{name:"p",components:n},"An open input field a user can type in that supports multiple formats."),J(l.MDXTag,{name:"h4",components:n},"Usage and guidelines"),J(l.MDXTag,{name:"ul",components:n},J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Is used when open input is required"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Only ask for information that is needed"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Is clearly labeled (see labels)"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Only optional text fields should be clearly marked (Optional)")),J(m,null),J(l.MDXTag,{name:"h3",components:n},"Select"),J(l.MDXTag,{name:"p",components:n},"A closed list containing predefined options a user can select."),J(l.MDXTag,{name:"h4",components:n},"Usage and guidelines"),J(l.MDXTag,{name:"ul",components:n},J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Contains 4 or more options (use radio buttons/checkboxes for 3 or less)"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Is searchable when there are 6 or more options"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Always try to preselect an option or use \u2018Select\u2019 / \u2018Search\u2019  if there is no logical default option"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Options are ordered in a way that makes sense for the content or otherwise alphabetically so users can find their option")),J(g,null),J(l.MDXTag,{name:"h2",components:n},"Form labels"),J(l.MDXTag,{name:"h3",components:n},"Labels"),J(l.MDXTag,{name:"p",components:n},"Text to communicate the purpose of a form field."),J(l.MDXTag,{name:"h4",components:n},"Usage and guidelines"),J(l.MDXTag,{name:"ul",components:n},J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Are as short and clear as possible (aim for 1-3 words)"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Are positioned above or besides the form field"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Labels convey information that is critical to use the form field")),J(y,null),J(l.MDXTag,{name:"h3",components:n},"Descriptions"),J(l.MDXTag,{name:"p",components:n},"Subtext that provides additional non-critical information about a form field."),J(l.MDXTag,{name:"h4",components:n},"Usage and guidelines"),J(l.MDXTag,{name:"ul",components:n},J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Are always positioned underneath the label"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Are as short and clear as possible (1-2 lines)")),J(N,null),J(l.MDXTag,{name:"h3",components:n},"Form tips"),J(l.MDXTag,{name:"p",components:n},"An icon and a line of text that provide additional non-critical information about a form field."),J(l.MDXTag,{name:"h4",components:n},"Usage and guidelines"),J(l.MDXTag,{name:"ul",components:n},J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Are always positioned underneath the form field"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Are as short and clear as possible (1-2 lines)"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Contain non-critical but useful information about a form field")),J(O,null),J(l.MDXTag,{name:"h2",components:n},"Form elements"),J(l.MDXTag,{name:"h3",components:n},"Checkbox"),J(l.MDXTag,{name:"p",components:n},"A box to toggle a state on or off."),J(l.MDXTag,{name:"h4",components:n},"Usage and guidelines"),J(l.MDXTag,{name:"ul",components:n},J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Checkboxes should only be used when the number of toggled options can vary"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Clearly label each checkbox"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Checkbox labels should be short and concise (1-4 words)"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Always make the label and the on-state positive. For example: \u201cTurn on the lights\u201d instead of \u201cTurn off the lights\u201d"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Checkboxes can be toggled independently and don\u2019t affect each other (with an exception for bulk-actions)")),J(A,null),J(l.MDXTag,{name:"h3",components:n},"Radio button"),J(l.MDXTag,{name:"p",components:n},"A button to select one single option in a list."),J(l.MDXTag,{name:"h4",components:n},"Usage and guidelines"),J(l.MDXTag,{name:"ul",components:n},J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Radio buttons only exist in lists of 2 or more"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Radio buttons affect each other "),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Only one selection is possible in a list of radio buttons"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"One radio button must always be selected"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Radio buttons in a list should be mutually exclusive"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Are labeled clearly and concise (1-4 words)"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Are ordered logically")),J(_,null),J(l.MDXTag,{name:"h3",components:n},"Toggle"),J(l.MDXTag,{name:"p",components:n},"A switch to turn a single option on or off."),J(l.MDXTag,{name:"h4",components:n},"Usage and guidelines"),J(l.MDXTag,{name:"ul",components:n},J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Toggles only contain a single option"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Are labeled clearly and concise (1-4 words)"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Always make toggle labels and the on-state positive. For example: \u201cTurn on the lights\u201d instead of \u201cTurn off the lights\u201d")),J(H,null),J(l.MDXTag,{name:"h3",components:n},"Slider/Range"),J(l.MDXTag,{name:"p",components:n},"An input field where users can select a single value or range with min. and max. values by sliding."),J(l.MDXTag,{name:"h4",components:n},"Usage and guidelines"),J(l.MDXTag,{name:"ul",components:n},J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"A slider contains a min. and max. value"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Input must be within the min. and max. value of the slider"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"When type input is enabled the currently selected values are shown in two text fields above the slider"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"The slider and the text fields update each other when one of them is used"),J(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Labels are positioned above the slider")),J(V,null))},Z=t("cNip"),G=t("LPWT"),$=o.a.createElement;n.default=function(){return $(G.a,{dirName:"components"},$(Y,{components:Z.a}))}}},[["Nk+N",1,2,4,3,0]]]);