import{w as r}from"./index-e5247e3a.js";function s(t){const e=c=>{t&&!t.contains(c.target)&&!c.defaultPrevented&&t.dispatchEvent(new CustomEvent("click-outside"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}const i=r([]),n=r([]);export{i as a,s as c,n as w};
