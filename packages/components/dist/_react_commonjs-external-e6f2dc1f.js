import e from"react";import{c as n}from"./_commonjsHelpers-97e6d7b1.js";import r from"react-is";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var u=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var r,u,c=i(e),s=1;s<arguments.length;s++){for(var f in r=Object(arguments[s]))o.call(r,f)&&(c[f]=r[f]);if(t){u=t(r);for(var p=0;p<u.length;p++)a.call(r,u[p])&&(c[u[p]]=r[u[p]])}}return c},c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",s=function(){};if("production"!==process.env.NODE_ENV){var f=c,p={},l=Function.call.bind(Object.prototype.hasOwnProperty);s=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function y(e,n,r,t,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(l(e,a)){var i;try{if("function"!=typeof e[a]){var u=Error((t||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw u.name="Invariant Violation",u}i=e[a](n,a,t,r,null,f)}catch(e){i=e}if(!i||i instanceof Error||s((t||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in p)){p[i.message]=!0;var c=o?o():"";s("Failed "+r+" type: "+i.message+(null!=c?c:""))}}}y.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(p={})};var d=y,v=Function.call.bind(Object.prototype.hasOwnProperty),m=function(){};function b(){return null}"production"!==process.env.NODE_ENV&&(m=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}});var h=function(e,n){var t="function"==typeof Symbol&&Symbol.iterator;var o={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:s(b),arrayOf:function(e){return s((function(n,r,t,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+t+"` has invalid PropType notation inside arrayOf.");var u=n[r];if(!Array.isArray(u))return new i("Invalid "+o+" `"+a+"` of type `"+l(u)+"` supplied to `"+t+"`, expected an array.");for(var s=0;s<u.length;s++){var f=e(u,s,t,o,a+"["+s+"]",c);if(f instanceof Error)return f}return null}))},element:s((function(n,r,t,o,a){var u=n[r];return e(u)?null:new i("Invalid "+o+" `"+a+"` of type `"+l(u)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:s((function(e,n,t,o,a){var u=e[n];return r.isValidElementType(u)?null:new i("Invalid "+o+" `"+a+"` of type `"+l(u)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return s((function(n,r,t,o,a){if(!(n[r]instanceof e)){var u=e.name||"<<anonymous>>";return new i("Invalid "+o+" `"+a+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return"<<anonymous>>";return e.constructor.name}(n[r])+"` supplied to `"+t+"`, expected instance of `"+u+"`.")}return null}))},node:s((function(e,n,r,t,o){return p(e[n])?null:new i("Invalid "+t+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return s((function(n,r,t,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+t+"` has invalid PropType notation inside objectOf.");var u=n[r],s=l(u);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+t+"`, expected an object.");for(var f in u)if(v(u,f)){var p=e(u,f,t,o,a+"."+f,c);if(p instanceof Error)return p}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&(arguments.length>1?m("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):m("Invalid argument supplied to oneOf, expected an array.")),b;function n(n,r,t,o,u){for(var c=n[r],s=0;s<e.length;s++)if(a(c,e[s]))return null;var f=JSON.stringify(e,(function(e,n){return"symbol"===y(n)?String(n):n}));return new i("Invalid "+o+" `"+u+"` of value `"+String(c)+"` supplied to `"+t+"`, expected one of "+f+".")}return s(n)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&m("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var n=0;n<e.length;n++){var r=e[n];if("function"!=typeof r)return m("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+h(r)+" at index "+n+"."),b}return s((function(n,r,t,o,a){for(var u=0;u<e.length;u++){if(null==(0,e[u])(n,r,t,o,a,c))return null}return new i("Invalid "+o+" `"+a+"` supplied to `"+t+"`.")}))},shape:function(e){return s((function(n,r,t,o,a){var u=n[r],s=l(u);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+t+"`, expected `object`.");for(var f in e){var p=e[f];if(p){var y=p(u,f,t,o,a+"."+f,c);if(y)return y}}return null}))},exact:function(e){return s((function(n,r,t,o,a){var s=n[r],f=l(s);if("object"!==f)return new i("Invalid "+o+" `"+a+"` of type `"+f+"` supplied to `"+t+"`, expected `object`.");var p=u({},n[r],e);for(var y in p){var d=e[y];if(!d)return new i("Invalid "+o+" `"+a+"` key `"+y+"` supplied to `"+t+"`.\nBad object: "+JSON.stringify(n[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var v=d(s,y,t,o,a+"."+y,c);if(v)return v}return null}))}};function a(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function i(e){this.message=e,this.stack=""}function s(e){if("production"!==process.env.NODE_ENV)var r={},t=0;function o(o,a,u,s,f,p,l){if(s=s||"<<anonymous>>",p=p||u,l!==c){if(n){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var d=s+":"+u;!r[d]&&t<3&&(m("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[d]=!0,t++)}}return null==a[u]?o?null===a[u]?new i("The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `null`."):new i("The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(a,u,s,f,p)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function f(e){return s((function(n,r,t,o,a,u){var c=n[r];return l(c)!==e?new i("Invalid "+o+" `"+a+"` of type `"+y(c)+"` supplied to `"+t+"`, expected `"+e+"`."):null}))}function p(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(p);if(null===n||e(n))return!0;var r=function(e){var n=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof n)return n}(n);if(!r)return!1;var o,a=r.call(n);if(r!==n.entries){for(;!(o=a.next()).done;)if(!p(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!p(i[1]))return!1}return!0;default:return!1}}function l(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function y(e){if(null==e)return""+e;var n=l(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function h(e){var n=y(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return i.prototype=Error.prototype,o.checkPropTypes=d,o.resetWarningCache=d.resetWarningCache,o.PropTypes=o,o};function g(){}function O(){}O.resetWarningCache=g;var E=n((function(e){if("production"!==process.env.NODE_ENV){var n=r;e.exports=h(n.isElement,!0)}else e.exports=function(){function e(e,n,r,t,o,a){if(a!==c){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function n(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:O,resetWarningCache:g};return r.PropTypes=r,r}()}));export{E as P,r as R,E as _,e as a,u as b};
