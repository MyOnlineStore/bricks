import"styled-components";import{s as o}from"./index-e7dfce8b.js";import"./_rollupPluginBabelHelpers-d3dbb83e.js";import t,{Children as n}from"react";import"./index-a5e960b2.js";import r from"./Box.js";import"./style-c8057988.js";import e from"./Icon.js";import{B as a}from"./index-5dee7013.js";import c from"./Spinner.js";import"./_commonjsHelpers-97e6d7b1.js";import{c as l}from"./chroma-e1cfc3fe.js";var i=o(a).withConfig({displayName:"Button__StyledButton",componentId:"sc-1msj87o-0"})(["",";"],(function(o){var t=o.theme,n=o.variant,r=o.compact,e=o.disabled,a=o.loading,c="\n            background-color: ".concat(t.Button[n].idle.backgroundColor,";\n            box-shadow: ").concat(t.Button[n].idle.boxShadow,";\n            color: ").concat(t.Button[n].idle.color,";\n        "),l="\n            background-color: ".concat(t.Button[n].hover.backgroundColor,";\n            box-shadow: ").concat(t.Button[n].hover.boxShadow,";\n            color: ").concat(t.Button[n].hover.color,";\n        "),i="\n            transform: translateY(2px);\n            background-color: ".concat(t.Button[n].active.backgroundColor,";\n            box-shadow: ").concat(t.Button[n].active.boxShadow,";\n            color: ").concat(t.Button[n].active.color,";\n        "),d="\n            background-color: ".concat(t.Button[n].focus.backgroundColor,";\n            box-shadow: ").concat(t.Button[n].focus.boxShadow,";\n            color: ").concat(t.Button[n].focus.color,";\n        ");return"\n            ".concat(c,"\n            padding: 11px ").concat(r?" 12px":"24px",";\n            border-radius: ").concat(t.Button.common.borderRadius,";\n            ").concat("plain"===n?"text-decoration: ".concat(t.Button.plain.idle.textDecoration):"","\n\n            &:hover {\n                ").concat(a||e?c:l,"\n            }\n\n            &:focus {\n                ").concat(a||e?c:d,"\n            }\n\n            &:active {\n                ").concat(a||e?c:i,"\n            }\n\n            &::before {\n                content: '';\n                position: absolute;\n                display: block;\n                left: 0;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                z-index: -2;\n                transition: opacity 0.3s;\n                opacity: ").concat(e?1:0,";\n                ").concat(e?"color: ".concat(t.Button.disabled.color):0,";\n                background: ").concat(t.Button.disabled.backgroundColor,"\n                    repeating-linear-gradient(\n                        -45deg,\n                        ").concat(t.Button.disabled.stripingColor,",\n                        ").concat(t.Button.disabled.stripingColor," 10px,\n                        transparent 10px,\n                        transparent 20px\n                    );\n                box-shadow: ").concat(t.Button[n].idle.boxShadow,";\n                border-radius: ").concat(t.Button.common.borderRadius,";\n            }\n\n            &:disabled {\n                background: ").concat(t.Button.disabled.backgroundColor,";\n                color: ").concat(t.Button.disabled.color,";\n                border-color: transparent;\n                transform: none;\n                box-shadow: none;\n\n                &::before {\n                    opacity: 1;\n                }\n            }\n        ")})),d=function(o){var t=o.themeSettings,n=t.colors,r=t.text;return{common:{borderRadius:o.calculateRoundness(20),borderWidth:"0",fontWeight:"400",fontFamily:r.primaryFont,fontSize:r.fontSize.base,textDecoration:"none"},primary:{idle:{backgroundColor:n.primary.base,color:o.calculateContrastTextColor(n.primary.base),boxShadow:o.themeSettings.buttonShadow},hover:{backgroundColor:o.calculateOffsetColor(n.primary.base,.3,.6),color:o.calculateContrastTextColor(n.primary.base),boxShadow:o.themeSettings.buttonShadow},focus:{backgroundColor:n.primary.base,color:n.silver.lighter1,boxShadow:"".concat(o.themeSettings.buttonShadow).concat("flat"===o.themeSettings.buttonStyle?"":",","0 0 0 4px ").concat(l(n.primary.base).alpha(.4))},active:{backgroundColor:n.primary.base,color:n.silver.lighter1,boxShadow:"none"}},secondary:{idle:{backgroundColor:n.contrastBackground,color:o.calculateContrastTextColor(n.contrastBackground),boxShadow:o.themeSettings.buttonShadow},hover:{backgroundColor:o.calculateOffsetColor(n.contrastBackground,.18,.4),color:o.calculateContrastTextColor(n.contrastBackground),boxShadow:o.themeSettings.buttonShadow},focus:{backgroundColor:n.silver.base,color:n.grey.lighter1,boxShadow:"".concat(o.themeSettings.buttonShadow).concat("flat"===o.themeSettings.buttonStyle?"":",","0 0 0 4px ").concat(l(n.grey.base).alpha(.08))},active:{backgroundColor:n.silver.darker1,color:n.grey.lighter1,boxShadow:"none"}},warning:{idle:{backgroundColor:n.severity.warning,color:o.calculateContrastTextColor(n.severity.warning),boxShadow:o.themeSettings.buttonShadow},hover:{backgroundColor:l(n.severity.warning).darken(.2).hex(),color:o.calculateContrastTextColor(n.severity.warning),boxShadow:o.themeSettings.buttonShadow},focus:{backgroundColor:l(n.severity.warning).darken(.2).hex(),color:o.calculateContrastTextColor(n.severity.warning),boxShadow:"".concat(o.themeSettings.buttonShadow).concat("flat"===o.themeSettings.buttonStyle?"":",","0 0 0 4px ").concat(l(n.severity.warning).alpha(.25))},active:{backgroundColor:l(n.severity.warning).darken(.4).hex(),color:o.calculateContrastTextColor(n.severity.warning),boxShadow:"none"}},destructive:{idle:{backgroundColor:n.severity.error,color:o.calculateContrastTextColor(n.severity.error),boxShadow:o.themeSettings.buttonShadow},hover:{backgroundColor:l(n.severity.error).darken(.2).hex(),color:o.calculateContrastTextColor(n.severity.error),boxShadow:o.themeSettings.buttonShadow},focus:{backgroundColor:l(n.severity.error).darken(.4).hex(),color:o.calculateContrastTextColor(n.severity.error),boxShadow:"".concat(o.themeSettings.buttonShadow).concat("flat"===o.themeSettings.buttonStyle?"":",","0 0 0 4px ").concat(l(n.severity.error).alpha(.25))},active:{backgroundColor:l(n.severity.error).darken(.2).hex(),color:o.calculateContrastTextColor(n.severity.error),boxShadow:"none"}},plain:{idle:{backgroundColor:"transparent",color:o.calculateContrastTextColor(n.background),boxShadow:"none",textDecoration:"underline"},hover:{backgroundColor:"transparent",color:o.calculateContrastTextColor(n.background),boxShadow:"none"},focus:{backgroundColor:"transparent",color:o.calculateContrastTextColor(n.background),boxShadow:"".concat(o.themeSettings.buttonShadow).concat("flat"===o.themeSettings.buttonStyle?"":",","0 0 0 4px ").concat(l(n.grey.base).alpha(.08))},active:{backgroundColor:n.silver.base,color:n.grey.base,boxShadow:"none"}},disabled:{color:o.calculateContrastTextColor(n.contrastBackground),backgroundColor:n.contrastBackground,stripingColor:"rgba(0,0,0,0.04)"}}};export default function(o){var a=o.loading?"transparent":void 0;return t.createElement(i,o,o.loading&&t.createElement(r,{justifyContent:"center",alignItems:"center",position:"absolute",left:"0",top:"0",right:"0",bottom:"0",padding:[6]},t.createElement(c,null)),o.icon&&t.createElement(r,{inline:!0,padding:[0,6,0,0]},t.createElement(e,{size:"medium",icon:o.icon,color:a})),t.createElement("span",{style:{color:a}},n.count(o.children)>0?o.children:o.title))}export{d as composeButtonTheme};
