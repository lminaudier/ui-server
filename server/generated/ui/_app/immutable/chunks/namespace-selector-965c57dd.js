import{a7 as h,S as b,i as v,s as S,x as u,y as f,z as $,f as d,t as _,C as g,O as w,l as T,m as x,n as y,h as i,p as l,b as N,U as F,F as O,a4 as C}from"./index-89809c17.js";import{a as m}from"./nav-open-3db1b91d.js";import{p as I}from"./persist-store-154b32b6.js";import{I as U}from"./icon-356cfdd5.js";import{T as k}from"./tooltip-dce2bbb6.js";const p=I("viewedFeatureTags",null),q=n=>{var a;let e=(a=h(p))!=null?a:[];e.includes(n)||(e=[...e,n],p.set(e))};function z(n){let e,a,t,s,o;return a=new U({props:{name:"namespace-switcher",width:32,height:32,class:"mx-2 inline cursor-pointer rounded-full border border-gray-900 shadow-sm transition-all hover:scale-105"}}),{c(){e=T("button"),u(a.$$.fragment),this.h()},l(r){e=x(r,"BUTTON",{class:!0,"aria-label":!0,"data-cy":!0});var c=y(e);f(a.$$.fragment,c),c.forEach(i),this.h()},h(){l(e,"class","relative"),l(e,"aria-label","Namespace Select"),l(e,"data-cy","namespace-select-button")},m(r,c){N(r,e,c),$(a,e,null),t=!0,s||(o=F(e,"click",n[0]),s=!0)},p:O,i(r){t||(d(a.$$.fragment,r),t=!0)},o(r){_(a.$$.fragment,r),t=!1},d(r){r&&i(e),g(a),s=!1,o()}}}function B(n){let e,a;return e=new k({props:{text:"Select a namespace",$$slots:{default:[z]},$$scope:{ctx:n}}}),{c(){u(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,s){$(e,t,s),a=!0},p(t,[s]){const o={};s&4&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){g(e,t)}}}function E(n,e,a){let t;w(n,m,o=>a(1,t=o));function s(){C(m,t=!t,t),q("namespaceSelector")}return[s]}class J extends b{constructor(e){super(),v(this,e,E,B,S,{})}}export{J as N};
