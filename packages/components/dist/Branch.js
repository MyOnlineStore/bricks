import{Children as r}from"react";export default function(i){var n=i.condition,o=i.ifTrue,t=i.ifFalse,e=i.children;return n?o(e):void 0!==t?t(e):r.count(e)>0?e:null}
