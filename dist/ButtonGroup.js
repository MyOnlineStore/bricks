!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define("bricks",["react","styled-components"],e):"object"==typeof exports?exports.bricks=e(require("react"),require("styled-components")):t.bricks=e(t.react,t["styled-components"])}("undefined"!=typeof self?self:this,function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=530)}({0:function(e,n){e.exports=t},1:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"c",function(){return a});var r=n(2),i=(n.n(r),r),o=i.default,u=(i.css,i.injectGlobal,i.keyframes,i.ThemeProvider);function a(t){return t}e.b=o},2:function(t,n){t.exports=e},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n.n(r),o=n(6),u=this&&this.__assign||function(){return(u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},a=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n};e.default=function(t){var e=t.order,n=t.direction,r=t.wrap,c=t.height,f=t.width,l=t.maxHeight,s=t.minHeight,d=t.maxWidth,p=t.minWidth,h=(t.ref,a(t,["order","direction","wrap","height","width","maxHeight","minHeight","maxWidth","minWidth","ref"])),m=u({},h,{flexWrap:r,elementHeight:c,elementWidth:f,elementMaxHeight:l,elementMinHeight:s,elementMaxWidth:d,elementMinWidth:p,flexDirection:n,flexOrder:e});return t.inline?i.a.createElement(o.b,u({},m),t.children):i.a.createElement(o.a,u({},m),t.children)}},359:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n.n(r),o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(t){function e(e){var n=t.call(this,e)||this;return n.getBreakpoint=function(t,e){return Object.keys(n.props.breakpoints).reduce(function(n,r){return t[r]>t[n]&&e>=t[r]?r:n},"small")},n.setBreakpoint=function(){n.setState({offsetWidth:n.element.offsetWidth})},n.state={offsetWidth:0},n}return o(e,t),e.prototype.componentDidMount=function(){this.setBreakpoint(),window.addEventListener("resize",this.setBreakpoint)},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.setBreakpoint)},e.prototype.render=function(){var t=this;return i.a.createElement("div",{style:{flexGrow:1},ref:function(e){t.element=e}},this.props.children(this.getBreakpoint(this.props.breakpoints,this.state.offsetWidth)))},e}(r.Component);e.default=u},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];case 4:return[t[0],t[1],t[2],t[3]];default:throw new Error("Incorrect amount of coordinates provided.")}}.apply(void 0,t).map(function(t){return"auto"===t?t:t+"px"});return{top:n[0],right:n[1],bottom:n[2],left:n[3]}}},530:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n.n(r),o=n(4),u=n(3),a=n(359);e.default=function(t){return i.a.createElement(a.default,{breakpoints:{small:0,medium:0,large:375}},function(e){var n="small"===e?"column":"row-reverse";return i.a.createElement(u.default,{direction:n,justifyContent:"flex-start",alignItems:"stretch",wrap:!0,margin:Object(o.default)(-6)},r.Children.map(t.children,function(t){return i.a.createElement(u.default,{direction:"small"===e?"column":"row",alignSelf:"stretch",margin:Object(o.default)(6)},t)}))})}},6:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a});var r,i=n(1),o=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},u=Object(i.c)(i.b.div)(r||(r=o(["\n    box-sizing: border-box;\n    display: ",";\n    height: ",";\n    width: ",";\n    max-height: ",";\n    min-height: ",";\n    max-width: ",";\n    min-width: ",";\n    flex-wrap: ",";\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ",";\n    align-content: ",";\n    margin: ",";\n    padding: ",";\n    flex-grow: ",";\n    flex-shrink: ",";\n    flex-basis: ",";\n    order: ",";\n    align-self: ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n"],["\n    box-sizing: border-box;\n    display: ",";\n    height: ",";\n    width: ",";\n    max-height: ",";\n    min-height: ",";\n    max-width: ",";\n    min-width: ",";\n    flex-wrap: ",";\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ",";\n    align-content: ",";\n    margin: ",";\n    padding: ",";\n    flex-grow: ",";\n    flex-shrink: ",";\n    flex-basis: ",";\n    order: ",";\n    align-self: ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n"])),function(t){return t.inline?"inline-flex":"flex"},function(t){var e=t.elementHeight;return void 0!==e?e:""},function(t){var e=t.elementWidth;return void 0!==e?e:""},function(t){var e=t.elementMaxHeight;return void 0!==e?e:""},function(t){var e=t.elementMinHeight;return void 0!==e?e:""},function(t){var e=t.elementMaxWidth;return void 0!==e?e:""},function(t){var e=t.elementMinWidth;return void 0!==e?e:""},function(t){var e=t.flexWrap;return void 0!==e&&e?"wrap":""},function(t){var e=t.flexDirection;return void 0!==e?e:""},function(t){var e=t.justifyContent;return void 0!==e?e:""},function(t){var e=t.alignItems;return void 0!==e?e:""},function(t){var e=t.alignContent;return void 0!==e?e:""},function(t){var e=t.margin;return void 0!==e?e.top+" "+e.right+" "+e.bottom+" "+e.left:""},function(t){var e=t.padding;return void 0!==e?e.top+" "+e.right+" "+e.bottom+" "+e.left:""},function(t){var e=t.grow;return e||0},function(t){var e=t.shrink;return void 0!==e?e:1},function(t){var e=t.basis;return e||"auto"},function(t){var e=t.flexOrder;return e||0},function(t){var e=t.alignSelf;return e||""},function(t){var e=t.position;return void 0!==e?"position: "+e:""},function(t){var e=t.top;return void 0!==e?"top: "+e:""},function(t){var e=t.right;return void 0!==e?"right: "+e:""},function(t){var e=t.bottom;return void 0!==e?"bottom: "+e:""},function(t){var e=t.left;return void 0!==e?"left: "+e:""}),a=u.withComponent("span")}})});
//# sourceMappingURL=ButtonGroup.js.map