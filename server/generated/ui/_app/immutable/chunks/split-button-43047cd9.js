import{S as J,i as K,s as L,x as k,y as D,z as v,f as _,t as d,C as M,D as q,W as C,a0 as T,a8 as V,l as W,a as B,m as X,n as j,c as p,h as A,p as F,T as N,b as S,N as G,a9 as H,X as O,r as P,u as Q,g as R,d as U,v as Y,J as Z,K as w,L as y,M as $}from"./index-a7390e4f.js";import{I as x}from"./icon-497c81c1.js";import{M as ee,a as te,b as ne}from"./menu-2fd03e3a.js";import{B as se}from"./button-3378defa.js";function z(i){let e,s;return e=new x({props:{name:i[1]}}),{c(){k(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,t){v(e,n,t),s=!0},p(n,t){const l={};t&2&&(l.name=n[1]),e.$set(l)},i(n){s||(_(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){M(e,n)}}}function ae(i){let e,s,n,t=i[1]&&z(i);return{c(){t&&t.c(),e=B(),s=P(i[0])},l(l){t&&t.l(l),e=p(l),s=Q(l,i[0])},m(l,u){t&&t.m(l,u),S(l,e,u),S(l,s,u),n=!0},p(l,u){l[1]?t?(t.p(l,u),u&2&&_(t,1)):(t=z(l),t.c(),_(t,1),t.m(e.parentNode,e)):t&&(R(),d(t,1,1,()=>{t=null}),U()),(!n||u&1)&&Y(s,l[0])},i(l){n||(_(t),n=!0)},o(l){d(t),n=!1},d(l){t&&t.d(l),l&&A(e),l&&A(s)}}}function ie(i){let e;const s=i[11].default,n=Z(s,i,i[14],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,l){n&&n.m(t,l),e=!0},p(t,l){n&&n.p&&(!e||l&16384)&&w(n,s,t,t[14],e?$(s,t[14],l,null):y(t[14]),null)},i(t){e||(_(n,t),e=!0)},o(t){d(n,t),e=!1},d(t){n&&n.d(t)}}}function le(i){let e,s,n,t,l,u,r,b;s=new se({props:{href:i[7],variant:i[3],thin:i[4],disabled:i[5]||i[8],id:i[2]+"-primary-button",class:"segment left",$$slots:{default:[ae]},$$scope:{ctx:i}}}),s.$on("click",i[12]);function I(a){i[13](a)}let g={id:i[2]+"-menu-button",dark:!0,class:"segment right",controls:i[2]+"-menu",disabled:i[5],hasIndicator:!0};return i[9]!==void 0&&(g.show=i[9]),t=new te({props:g}),T.push(()=>V(t,"show",I)),r=new ne({props:{class:"min-w-max",id:i[2]+"-menu",show:i[9],position:i[6],$$slots:{default:[ie]},$$scope:{ctx:i}}}),{c(){e=W("div"),k(s.$$.fragment),n=B(),k(t.$$.fragment),u=B(),k(r.$$.fragment),this.h()},l(a){e=X(a,"DIV",{class:!0});var f=j(e);D(s.$$.fragment,f),n=p(f),D(t.$$.fragment,f),f.forEach(A),u=p(a),D(r.$$.fragment,a),this.h()},h(){F(e,"class","split-button svelte-sgeaqx"),N(e,"disabled",i[5])},m(a,f){S(a,e,f),v(s,e,null),G(e,n),v(t,e,null),S(a,u,f),v(r,a,f),b=!0},p(a,f){const m={};f&128&&(m.href=a[7]),f&8&&(m.variant=a[3]),f&16&&(m.thin=a[4]),f&288&&(m.disabled=a[5]||a[8]),f&4&&(m.id=a[2]+"-primary-button"),f&16387&&(m.$$scope={dirty:f,ctx:a}),s.$set(m);const c={};f&4&&(c.id=a[2]+"-menu-button"),f&4&&(c.controls=a[2]+"-menu"),f&32&&(c.disabled=a[5]),!l&&f&512&&(l=!0,c.show=a[9],H(()=>l=!1)),t.$set(c),(!b||f&32)&&N(e,"disabled",a[5]);const h={};f&4&&(h.id=a[2]+"-menu"),f&512&&(h.show=a[9]),f&64&&(h.position=a[6]),f&16384&&(h.$$scope={dirty:f,ctx:a}),r.$set(h)},i(a){b||(_(s.$$.fragment,a),_(t.$$.fragment,a),_(r.$$.fragment,a),b=!0)},o(a){d(s.$$.fragment,a),d(t.$$.fragment,a),d(r.$$.fragment,a),b=!1},d(a){a&&A(e),M(s),M(t),a&&A(u),M(r,a)}}}function fe(i){let e,s;return e=new ee({props:{class:i[10].class,$$slots:{default:[le]},$$scope:{ctx:i}}}),{c(){k(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,t){v(e,n,t),s=!0},p(n,[t]){const l={};t&1024&&(l.class=n[10].class),t&17407&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){s||(_(e.$$.fragment,n),s=!0)},o(n){d(e.$$.fragment,n),s=!1},d(n){M(e,n)}}}function oe(i,e,s){let{$$slots:n={},$$scope:t}=e,{label:l=""}=e,{icon:u=void 0}=e,{id:r}=e,{variant:b="primary"}=e,{thin:I=!1}=e,{disabled:g=!1}=e,{position:a="left"}=e,{href:f=""}=e,{primaryActionDisabled:m=!1}=e,c=!1;function h(o){O.call(this,i,o)}function E(o){c=o,s(9,c)}return i.$$set=o=>{s(10,e=q(q({},e),C(o))),"label"in o&&s(0,l=o.label),"icon"in o&&s(1,u=o.icon),"id"in o&&s(2,r=o.id),"variant"in o&&s(3,b=o.variant),"thin"in o&&s(4,I=o.thin),"disabled"in o&&s(5,g=o.disabled),"position"in o&&s(6,a=o.position),"href"in o&&s(7,f=o.href),"primaryActionDisabled"in o&&s(8,m=o.primaryActionDisabled),"$$scope"in o&&s(14,t=o.$$scope)},e=C(e),[l,u,r,b,I,g,a,f,m,c,e,n,h,E,t]}class _e extends J{constructor(e){super(),K(this,e,oe,fe,L,{label:0,icon:1,id:2,variant:3,thin:4,disabled:5,position:6,href:7,primaryActionDisabled:8})}}export{_e as S};
