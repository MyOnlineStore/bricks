(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"6qfE":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MDXTag=void 0;var t,a=o("RSLW"),i=(t=a)&&t.__esModule?t:{default:t};n.MDXTag=i.default},FElN:function(e,n,o){"use strict";o.d(n,"a",(function(){return c}));var t=o("q1tI"),a=o.n(t),i=o("pvvA"),r=o("vOnD"),s=a.a.createElement,c=Object(r.default)(i.Box).withConfig({displayName:"ContentPane__StyledContentPane",componentId:"iegton-0"})(["background:",";border-radius:9px;box-shadow:0 1px 4px 0 ",";margin-bottom:24px;"],i.colors.white,Object(i.rgba)(i.colors.grey900,.25));n.b=function(e){return s(c,{grow:1,padding:[48,120],maxWidth:"960px",minWidth:"960px"},e.children)}},LPWT:function(e,n,o){"use strict";var t=o("q1tI"),a=o.n(t),i=o("pvvA"),r=o("FElN"),s=a.a.createElement,c=function(e){return s(i.Box,{padding:[36,0],direction:"column",width:"200px"},e.children)},h=o("TCAI"),m=o("vOnD"),l=a.a.createElement,p=Object(m.default)(i.Text).withConfig({displayName:"SidebarLink__StyledText",componentId:"vcdpp3-0"})(["font-size:inherit;font-family:inherit;"]),d=function(e){var n=Object(t.useState)(!1),o=n[0],a=n[1];return Object(t.useEffect)((function(){window.location.pathname===e.href&&a(!0)})),l(i.Box,{padding:[12,0]},l(i.Heading,{as:"h5",hierarchy:5},l(p,{strong:o,variant:2===e.depth?"descriptive":void 0,as:"span"},l(h.a,{href:e.href,title:e.title},e.icon&&l(i.Icon,{size:"small",icon:e.icon})," ",e.title))))},u=o("i1cI"),g=a.a.createElement,f=o("MZYU"),x=function(e){var n=f.articles.filter((function(n){return n.dir===e.dirName}));return g(c,null,g(i.Box,{padding:[0,0,36,0]},g(d,{icon:g(u.ChevronLeftIcon,null),href:"/",title:" Back"})),n[0].files.map((function(n,o){var t=n.replace(/\.mdx?$/,""),a=(t.charAt(0).toUpperCase()+t.slice(1)).replace("-"," "),i="/generated/".concat(e.dirName,"/").concat(t);if("index"!==t)return g(d,{key:o,href:i,title:"".concat(a)})})))},v=a.a.createElement;n.a=function(e){return v(i.Box,null,v(x,{dirName:e.dirName}),v(r.b,null,e.children))}},MZYU:function(e,n,o){"use strict";e.exports={srcDirs:["components","design"],articles:[{dir:"components",files:["badges.mdx","buttons.mdx","forms.mdx","index.mdx","navigation.mdx","overlays.mdx","search.mdx","status-indicators.mdx","titles-text.mdx"]},{dir:"design",files:["colors.mdx","experience-values.mdx","icons.mdx","illustrations.mdx","index.mdx","layout.mdx","logo.mdx","typography.mdx"]}]}},Q1lO:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generated/design/logo",function(){return o("WcaP")}])},RSLW:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(o("q1tI"));a(o("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}var i={inlineCode:"code",wrapper:"div"};n.default=function(e){var n=e.name,o=e.parentName,a=e.props,r=void 0===a?{}:a,s=e.children,c=e.components,h=void 0===c?{}:c,m=h[o+"."+n]||h[n]||i[n]||n;return t.default.createElement(m,r,s)}},TCAI:function(e,n,o){"use strict";var t=o("pvvA"),a=o("vOnD"),i=Object(a.default)(t.Link).withConfig({displayName:"StyledLink",componentId:"sc-1ern800-0"})(["text-decoration:none;"]);n.a=i},WcaP:function(e,n,o){"use strict";o.r(n);var t=o("q1tI"),a=o.n(t),i=o("6qfE"),r=a.a.createElement,s=function(e){var n=e.components;return r(i.MDXTag,{name:"wrapper",components:n},r(i.MDXTag,{name:"h1",components:n},"Logo"),r(i.MDXTag,{name:"h2",components:n},"Main logo"),r("img",{src:"https://bricks.zeroheight.com/uploads/YJvOx_-EET8CxgsLmLdl0Q.jpg"}),r(i.MDXTag,{name:"h4",components:n},"Primary (horizontal)"),r(i.MDXTag,{name:"p",components:n},"The primary logo consists of our two toned green icon with grey-base text placed next to it horizontally. This is our main logo, the variant we use the most. You might have seen it on our site, merchandise and buildings. And we hope you will use it too! :)"),r("img",{src:"https://bricks.zeroheight.com/uploads/VlYEQrPFsU9WpTxRdM0XEg.jpg"}),r(i.MDXTag,{name:"hr",components:n}),r(i.MDXTag,{name:"h2",components:n},"Variants"),r(i.MDXTag,{name:"h4",components:n},"Secondary (vertical)"),r(i.MDXTag,{name:"p",components:n},"Not enough horizontal space for our primary logo? Then you can use our vertical logo. In this secondary variant the icon is placed above the text. Only use this variant when there is absolutely no way the primary will fit in your designs."),r("img",{src:"https://bricks.zeroheight.com/uploads/DksJSzIW9LHVJHEXcY6dqw.jpg"}),r(i.MDXTag,{name:"h4",components:n},"Extensions"),r(i.MDXTag,{name:"p",components:n},"In some rare cases we communicate a URL or Sub-brand as an extension placed above the text. This variant should be used sparingly. If you feel the need to use this variant, please contact us via ",r("a",{href:"mailto:ux@myonlinestore.com"},"ux@myonlinestore.com"),"."),r(i.MDXTag,{name:"hr",components:n}),r(i.MDXTag,{name:"h2",components:n},"Icon / Favicon"),r(i.MDXTag,{name:"h4",components:n},"Construction"),r(i.MDXTag,{name:"p",components:n},"As you can see, our logo icon is carefully constructed and based on symmetry. The round corners give it a soft edge, which also reoccurs in the font types we use."),r("img",{width:"320px",src:"https://bricks.zeroheight.com/uploads/FTlEIZdhU1f-Cv9DSQYZEA.png"}),r(i.MDXTag,{name:"h4",components:n},"Color"),r(i.MDXTag,{name:"p",components:n},"Notice that the pieces fit together like a puzzle. This represents the smooth overlap between working together and helping our customers to achieve their dreams. To accentuate this idea we use a slight color difference between the two halves."),r("img",{width:"360px",src:"https://bricks.zeroheight.com/uploads/PlV_jh2JU9HhLetOIm_q6A.png"}),r(i.MDXTag,{name:"h4",components:n},"Did you know"),r(i.MDXTag,{name:"p",components:n},"Our logo is an abstract combination of a happy person and a shopping bag. The little smiling dude represents our clients, the entrepreneur and store owners. The shopping bag represents us, the e-commerce solution. And since both parties need each other to achieve their goal, they slide right together and make MyOnlineStore."),r("img",{src:"https://bricks.zeroheight.com/uploads/ljZYY4E2NrfySqJF5jk5jw.jpg"}),r(i.MDXTag,{name:"hr",components:n}),r(i.MDXTag,{name:"h2",components:n},"Sizing"),r(i.MDXTag,{name:"h4",components:n},"Primary logo minimal size"),r(i.MDXTag,{name:"p",components:n},"The minimal size of our primary logo is 10mm or 20px in height. When scaling, always keep the ratio intact."),r("img",{src:"https://bricks.zeroheight.com/uploads/8qN39W8WfM2H3KgmORENiw.jpg"}),r(i.MDXTag,{name:"h4",components:n},"Secondary logo minimal size"),r(i.MDXTag,{name:"p",components:n},"Please don\u2019t use this variant any smaller than 20mm or 55px in height. We want our audience to be able to recognize our logo at all times."),r("img",{src:"https://bricks.zeroheight.com/uploads/Z2MTac-0pQmjUQgiWJzsXQ.jpg"}),r(i.MDXTag,{name:"h4",components:n},"Icon minimal size"),r(i.MDXTag,{name:"p",components:n},"The minimal size of our icon is 6mm or 16px in height."),r("img",{src:"https://bricks.zeroheight.com/uploads/hlmPYzwfrYOINid1JWaWVQ.jpg"}),r(i.MDXTag,{name:"hr",components:n}),r(i.MDXTag,{name:"h2",components:n},"Exclusion zones"),r(i.MDXTag,{name:"h4",components:n},"Primary exclusion zone"),r(i.MDXTag,{name:"p",components:n},"We\u2019ve defined an exclusion zone of 1/2 of the height of the icon. This space prevents other graphic elements to interfere with our logo. Use the 1/2 as a guideline, exceptions are permitted of course."),r("img",{src:"https://bricks.zeroheight.com/uploads/x2zSuGKRdQ_zueCeGTGSIg.jpg"}),r(i.MDXTag,{name:"h4",components:n},"Secondary exclusion zone"),r(i.MDXTag,{name:"p",components:n},"For the secondary variant we\u2019ve defined an exclusion zone of 1/3 of the height of the icon. Otherwise the same rules apply here."),r("img",{src:"https://bricks.zeroheight.com/uploads/AaaQpqCElgpiNKoFAIFPcA.jpg"}),r("img",{src:"https://bricks.zeroheight.com/uploads/af1kzqHj6b_9XxDf_BlHVQ.jpg"}),r(i.MDXTag,{name:"h4",components:n},"Icon exclusion zone"),r(i.MDXTag,{name:"p",components:n},"We hope you\u2019ve read the \u2018Primary exclusion zone\u2019. The same rules apply here. Easy, isn\u2019t it?"),r(i.MDXTag,{name:"hr",components:n}),r(i.MDXTag,{name:"h2",components:n},"Color and background"),r(i.MDXTag,{name:"p",components:n},"Our logo may be applied in full color, black and white and on inverted background colors only."),r(i.MDXTag,{name:"p",components:n},"Plain color backgrounds are preferred. The logo (and icon) can be placed on a photographic background; however, it is imperative that there is sufficient contrast between the two elements. And that the all-white logo is used."),r("img",{width:"720px",src:"https://bricks.zeroheight.com/uploads/FDUffVPDjqvWu0kDWVlH8g.jpg"}))},c=o("cNip"),h=o("LPWT"),m=a.a.createElement;n.default=function(){return m(h.a,{dirName:"design"},m(s,{components:c.a}))}},cNip:function(e,n,o){"use strict";var t=o("q1tI"),a=o.n(t),i=o("pvvA"),r=o("vOnD"),s=a.a.createElement,c=r.default.hr.withConfig({displayName:"componentMap__StyledHr",componentId:"sc-1lb1a91-0"})(["width:100%;color:transparent;border-top:1px solid ",";"],i.colors.grey300),h={h1:function(e){return s(i.Box,{margin:[36,0]},s(i.Heading,{hierarchy:1},e.children))},h2:function(e){return s(i.Box,{margin:[24,0]},s(i.Heading,{hierarchy:2},e.children))},h3:function(e){return s(i.Box,{margin:[18,0,12,0]},s(i.Heading,{hierarchy:3},e.children))},h4:function(e){return s(i.Box,{margin:[18,0,6,0]},s(i.Heading,{hierarchy:4},e.children))},h5:function(e){return s(i.Box,{margin:[12,0,6,0]},s(i.Heading,{hierarchy:5},e.children))},h6:function(e){return s(i.Box,{margin:[0,0,0,0]},s(i.Heading,{hierarchy:6},e.children))},hr:function(e){return s(i.Box,{margin:[24,0],width:"100%"},s(c,null))},p:function(e){return s(i.Text,{variant:"descriptive"},e.children)},li:function(e){return s(i.Text,{as:"span",variant:"descriptive"},s("li",null,e.children))}};n.a=h}},[["Q1lO",1,2,4,3,0]]]);