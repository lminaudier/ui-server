import{S as u,i as c,s as f,w as g,x as _,y,q as l,o as E,B as d,N as s}from"../../../../../chunks/index-1b46dd35.js";import{p as v}from"../../../../../chunks/stores-8b8b27f9.js";import{i as h,a as b}from"../../../../../chunks/import-events-c5e6d211.js";import{E as q}from"../../../../../chunks/event-summary-adcf6876.js";import"../../../../../chunks/index-92abd382.js";import"../../../../../chunks/event-view-075dee1d.js";import"../../../../../chunks/persist-store-4ece08a3.js";import"../../../../../chunks/pagination-df78a3a1.js";import"../../../../../chunks/index.es-3c939ced.js";import"../../../../../chunks/navigation-6709cf39.js";import"../../../../../chunks/singletons-d1fb5791.js";import"../../../../../chunks/select-75314ba3.js";import"../../../../../chunks/index-d92eef96.js";import"../../../../../chunks/get-event-categorization-20095c1b.js";import"../../../../../chunks/time-format-c54fc24a.js";import"../../../../../chunks/index-8821dfb5.js";import"../../../../../chunks/format-date-188b28af.js";import"../../../../../chunks/get-single-attribute-for-event-9ffd10ea.js";import"../../../../../chunks/format-camel-case-abb2903d.js";import"../../../../../chunks/route-for-789b7fae.js";import"../../../../../chunks/code-block-e5cbd117.js";import"../../../../../chunks/link-56449414.js";import"../../../../../chunks/copyable-a6f80d19.js";import"../../../../../chunks/empty-state-193066dc.js";function w(o){let r,e;return r=new q({props:{items:o[0],groups:o[1]}}),{c(){g(r.$$.fragment)},l(t){_(r.$$.fragment,t)},m(t,p){y(r,t,p),e=!0},p(t,[p]){const i={};p&1&&(i.items=t[0]),p&2&&(i.groups=t[1]),r.$set(i)},i(t){e||(l(r.$$.fragment,t),e=!0)},o(t){E(r.$$.fragment,t),e=!1},d(t){d(r,t)}}}function G(o,r,e){let t,p,i,n,a;return s(o,h,m=>e(3,i=m)),s(o,v,m=>e(4,n=m)),s(o,b,m=>e(1,a=m)),o.$$.update=()=>{o.$$.dirty&16&&e(2,t=n.url.searchParams.get("category")),o.$$.dirty&12&&e(0,p=i.filter(m=>t?m.category===t:m))},[p,a,t,i,n]}class V extends u{constructor(r){super(),c(this,r,G,w,f,{})}}export{V as default};