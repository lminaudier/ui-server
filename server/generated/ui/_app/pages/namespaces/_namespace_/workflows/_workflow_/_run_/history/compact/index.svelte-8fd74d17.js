import{S as a,i as m,s as i,w as c,x as p,y as u,q as f,o as g,B as l}from"../../../../../../../../chunks/vendor-f2f66dce.js";import{a as _}from"../../../../../../../../chunks/get-event-categorization-90555be0.js";import{E as $}from"../../../../../../../../chunks/event-compact-c8473cea.js";import"../../../../../../../../chunks/loading-row-435cc4f7.js";import"../../../../../../../../chunks/stores-7c72d97e.js";import"../../../../../../../../chunks/filter-select-6015346b.js";import"../../../../../../../../chunks/navigation-093db9e2.js";import"../../../../../../../../chunks/singletons-a6a7384f.js";import"../../../../../../../../chunks/select-e2429f65.js";import"../../../../../../../../chunks/event-empty-row-2c1c449b.js";import"../../../../../../../../chunks/code-block-8e50137e.js";import"../../../../../../../../chunks/format-camel-case-8b7e013d.js";import"../../../../../../../../chunks/empty-state-5f369cbb.js";function v(r){let e,o;return e=new $({props:{items:r[0]}}),{c(){c(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,n){u(e,t,n),o=!0},p(t,[n]){const s={};n&1&&(s.items=t[0]),e.$set(s)},i(t){o||(f(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){l(e,t)}}}const j=async function({stuff:r,url:e}){const o=e.searchParams.get("category"),t=_(r.eventGroups,o);return{props:{items:t},stuff:{matchingEventGroups:t}}};function y(r,e,o){let{items:t}=e;return r.$$set=n=>{"items"in n&&o(0,t=n.items)},[t]}class k extends a{constructor(e){super();m(this,e,y,v,i,{items:0})}}export{k as default,j as load};