import{S as g,i as v,s as h,w as f,x as u,y as p,q as c,o as $,B as _,N as k,k as b,e as w,t as E,m as T,c as C,a as I,h as j,d as m,b as L,g as d,M as q}from"../../chunks/index-604742bf.js";import{p as D}from"../../chunks/stores-810822a9.js";import{I as F}from"../../chunks/index-0574ae1f.js";import{N as O,n as S,a as V}from"../../chunks/_nav-row-c1c94fb1.js";import{T as y}from"../../chunks/tooltip-7d6d8706.js";import{r as B,d as M}from"../../chunks/route-for-1f2060cd.js";import"../../chunks/persist-store-26f405dd.js";import"../../chunks/index-c9e619a8.js";import"../../chunks/copyable-6f962ac2.js";import"../../chunks/copy-to-clipboard-8832075c.js";function W(i){let e,s,t;return s=new F({props:{isCloud:i[0],name:"download",scale:1}}),{c(){e=w("div"),f(s.$$.fragment),this.h()},l(n){e=C(n,"DIV",{class:!0});var o=I(e);u(s.$$.fragment,o),o.forEach(m),this.h()},h(){L(e,"class","nav-icon svelte-vwdlej")},m(n,o){d(n,e,o),p(s,e,null),t=!0},p(n,o){const r={};o&1&&(r.isCloud=n[0]),s.$set(r)},i(n){t||(c(s.$$.fragment,n),t=!0)},o(n){$(s.$$.fragment,n),t=!1},d(n){n&&m(e),_(s)}}}function z(i){let e,s,t,n,o;return e=new y({props:{right:!0,hide:i[2],text:"Import",$$slots:{default:[W]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),s=b(),t=w("div"),n=E("Import"),this.h()},l(r){u(e.$$.fragment,r),s=T(r),t=C(r,"DIV",{class:!0});var a=I(t);n=j(a,"Import"),a.forEach(m),this.h()},h(){L(t,"class","nav-title svelte-vwdlej")},m(r,a){p(e,r,a),d(r,s,a),d(r,t,a),q(t,n),o=!0},p(r,a){const l={};a&4&&(l.hide=r[2]),a&9&&(l.$$scope={dirty:a,ctx:r}),e.$set(l)},i(r){o||(c(e.$$.fragment,r),o=!0)},o(r){$(e.$$.fragment,r),o=!1},d(r){_(e,r),r&&m(s),r&&m(t)}}}function A(i){let e,s;return e=new V({props:{link:i[1].import,isCloud:i[0],$$slots:{default:[z]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){p(e,t,n),s=!0},p(t,n){const o={};n&2&&(o.link=t[1].import),n&1&&(o.isCloud=t[0]),n&13&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}function G(i){let e,s;return e=new O({props:{isCloud:i[0],linkList:i[1],$$slots:{top:[A]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){p(e,t,n),s=!0},p(t,[n]){const o={};n&1&&(o.isCloud=t[0]),n&2&&(o.linkList=t[1]),n&15&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}function H(i,e,s){let t;k(i,S,r=>s(2,t=r));let{isCloud:n}=e,{linkList:o}=e;return i.$$set=r=>{"isCloud"in r&&s(0,n=r.isCloud),"linkList"in r&&s(1,o=r.linkList)},[n,o,t]}class J extends g{constructor(e){super(),v(this,e,H,G,h,{isCloud:0,linkList:1})}}function K(i){let e,s;return e=new J({props:{linkList:i[0],isCloud:i[1]}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){p(e,t,n),s=!0},p(t,[n]){const o={};n&1&&(o.linkList=t[0]),e.$set(o)},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}function P(i,e,s){let t,n,o;k(i,D,N=>s(5,o=N));var r,a;const{isCloud:l}=o.stuff.settings.runtimeEnvironment;return i.$$.update=()=>{i.$$.dirty&44&&s(4,t=s(3,a=s(2,r=o.stuff)===null||r===void 0?void 0:r.settings)===null||a===void 0?void 0:a.defaultNamespace),i.$$.dirty&16&&s(0,n={home:B({namespace:t}),import:M({importType:"events"})})},[n,l,r,a,t,o]}class st extends g{constructor(e){super(),v(this,e,P,K,h,{})}}export{st as default};