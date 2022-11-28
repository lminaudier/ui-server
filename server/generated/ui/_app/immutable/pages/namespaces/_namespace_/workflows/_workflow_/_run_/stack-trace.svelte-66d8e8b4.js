import{S as Q,i as V,s as B,l as S,m as E,n as C,h as $,b as k,f as g,t as h,O as P,x as w,y as v,z as T,C as y,Y as W,e as q,$ as A,r as d,u as b,N as _,F,a as D,c as I,p as N,v as Y}from"../../../../../../chunks/index-0a89fd56.js";import{p as U}from"../../../../../../chunks/stores-cc75c44f.js";import{w as j}from"../../../../../../chunks/workflow-run-003d9f43.js";import{b as O}from"../../../../../../chunks/query-service-0c529fab.js";import{C as G}from"../../../../../../chunks/code-block-e7afc0b8.js";import{B as H}from"../../../../../../chunks/button-68ea4e9d.js";import{E as z}from"../../../../../../chunks/empty-state-0f0a67a8.js";import{L as J}from"../../../../../../chunks/loading-8c11a580.js";import{L as K}from"../../../../../../chunks/link-f6a9546e.js";import{a as M}from"../../../../../../chunks/auth-user-b924a14a.js";import{P as X}from"../../../../../../chunks/page-title-e29cce7b.js";import"../../../../../../chunks/index-ecd41ae6.js";import"../../../../../../chunks/with-loading-f07bedaf.js";import"../../../../../../chunks/workflow-service-97d19ce2.js";import"../../../../../../chunks/settings-b2c21ef9.js";import"../../../../../../chunks/simplify-attributes-055c76f2.js";import"../../../../../../chunks/format-date-c1755997.js";import"../../../../../../chunks/format-time-d031c2bc.js";import"../../../../../../chunks/is-44021919.js";import"../../../../../../chunks/route-for-api-d725efb6.js";import"../../../../../../chunks/route-for-369a155d.js";import"../../../../../../chunks/notifications-72686422.js";import"../../../../../../chunks/is-network-error-5f9e2367.js";import"../../../../../../chunks/persist-store-07cc3f48.js";import"../../../../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../../../../chunks/pollers-service-66684067.js";import"../../../../../../chunks/is-http-fad8c7a8.js";import"../../../../../../chunks/get-codec-2ae1f1d2.js";import"../../../../../../chunks/data-converter-config-141aa000.js";import"../../../../../../chunks/atob-ffa71835.js";import"../../../../../../chunks/icon-547f7300.js";import"../../../../../../chunks/copy-to-clipboard-c13b766f.js";import"../../../../../../chunks/badge-111dc3a0.js";function Z(l){let e,r;return e=new z({props:{title:"No Stack Traces Found",dataCy:"query-stack-trace-empty",$$slots:{default:[re]},$$scope:{ctx:l}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){T(e,t,n),r=!0},p(t,n){const o={};n&4096&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function x(l){let e,r,t,n={ctx:l,current:null,token:null,hasCatch:!0,pending:le,then:oe,catch:ne,value:10,error:11,blocks:[,,,]};return W(r=l[1],n),{c(){e=q(),n.block.c()},l(o){e=q(),n.block.l(o)},m(o,a){k(o,e,a),n.block.m(o,n.anchor=a),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(o,a){l=o,n.ctx=l,a&2&&r!==(r=l[1])&&W(r,n)||A(n,l,a)},i(o){t||(g(n.block),t=!0)},o(o){for(let a=0;a<3;a+=1){const s=n.blocks[a];h(s)}t=!1},d(o){o&&$(e),n.block.d(o),n.token=null,n=null}}}function ee(l){var i;let e,r,t,n,o=((i=l[2])==null?void 0:i.taskQueue)+"",a,s,c;return t=new K({props:{href:"https://docs.temporal.io/concepts/what-is-a-query/#stack-trace-query",$$slots:{default:[te]},$$scope:{ctx:l}}}),{c(){e=S("p"),r=d("To enable "),w(t.$$.fragment),n=d(", run a Worker on the "),a=d(o),s=d(" Task Queue.")},l(u){e=E(u,"P",{});var m=C(e);r=b(m,"To enable "),v(t.$$.fragment,m),n=b(m,", run a Worker on the "),a=b(m,o),s=b(m," Task Queue."),m.forEach($)},m(u,m){k(u,e,m),_(e,r),T(t,e,null),_(e,n),_(e,a),_(e,s),c=!0},p(u,m){const f={};m&4096&&(f.$$scope={dirty:m,ctx:u}),t.$set(f)},i(u){c||(g(t.$$.fragment,u),c=!0)},o(u){h(t.$$.fragment,u),c=!1},d(u){u&&$(e),y(t)}}}function te(l){let e;return{c(){e=d("stack traces")},l(r){e=b(r,"stack traces")},m(r,t){k(r,e,t)},d(r){r&&$(e)}}}function re(l){var n,o;let e,r,t=l[2].isRunning&&((o=(n=l[3])==null?void 0:n.pollers)==null?void 0:o.length)===0&&ee(l);return{c(){t&&t.c(),e=q()},l(a){t&&t.l(a),e=q()},m(a,s){t&&t.m(a,s),k(a,e,s),r=!0},p(a,s){var c,i;a[2].isRunning&&((i=(c=a[3])==null?void 0:c.pollers)==null?void 0:i.length)===0&&t.p(a,s)},i(a){r||(g(t),r=!0)},o(a){h(t),r=!1},d(a){t&&t.d(a),a&&$(e)}}}function ne(l){let e,r;return e=new z({props:{title:"An Error Occured",content:"Please make sure you have at least one worker running."}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){T(e,t,n),r=!0},p:F,i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function oe(l){let e,r,t,n,o,a=l[0].toLocaleTimeString()+"",s,c,i,u,m;return r=new H({props:{icon:"retry",loading:ce,$$slots:{default:[ae]},$$scope:{ctx:l}}}),r.$on("click",l[4]),u=new G({props:{content:l[10],language:"text",dataCy:"query-stack-trace"}}),{c(){e=S("div"),w(r.$$.fragment),t=D(),n=S("p"),o=d("Stack Trace at "),s=d(a),c=D(),i=S("div"),w(u.$$.fragment),this.h()},l(f){e=E(f,"DIV",{class:!0});var p=C(e);v(r.$$.fragment,p),t=I(p),n=E(p,"P",{});var R=C(n);o=b(R,"Stack Trace at "),s=b(R,a),R.forEach($),p.forEach($),c=I(f),i=E(f,"DIV",{class:!0});var L=C(i);v(u.$$.fragment,L),L.forEach($),this.h()},h(){N(e,"class","flex items-center gap-4"),N(i,"class","flex items-start h-full")},m(f,p){k(f,e,p),T(r,e,null),_(e,t),_(e,n),_(n,o),_(n,s),k(f,c,p),k(f,i,p),T(u,i,null),m=!0},p(f,p){const R={};p&4096&&(R.$$scope={dirty:p,ctx:f}),r.$set(R),(!m||p&1)&&a!==(a=f[0].toLocaleTimeString()+"")&&Y(s,a);const L={};p&2&&(L.content=f[10]),u.$set(L)},i(f){m||(g(r.$$.fragment,f),g(u.$$.fragment,f),m=!0)},o(f){h(r.$$.fragment,f),h(u.$$.fragment,f),m=!1},d(f){f&&$(e),y(r),f&&$(c),f&&$(i),y(u)}}}function ae(l){let e;return{c(){e=d("Refresh")},l(r){e=b(r,"Refresh")},m(r,t){k(r,e,t)},d(r){r&&$(e)}}}function le(l){let e,r,t,n,o,a;return r=new J({}),{c(){e=S("div"),w(r.$$.fragment),t=D(),n=S("p"),o=d("(This will fail if you have no workers running.)"),this.h()},l(s){e=E(s,"DIV",{class:!0});var c=C(e);v(r.$$.fragment,c),t=I(c),n=E(c,"P",{});var i=C(n);o=b(i,"(This will fail if you have no workers running.)"),i.forEach($),c.forEach($),this.h()},h(){N(e,"class","text-center")},m(s,c){k(s,e,c),T(r,e,null),_(e,t),_(e,n),_(n,o),a=!0},p:F,i(s){a||(g(r.$$.fragment,s),a=!0)},o(s){h(r.$$.fragment,s),a=!1},d(s){s&&$(e),y(r)}}}function se(l){let e,r,t,n;const o=[x,Z],a=[];function s(c,i){var u,m;return c[2].isRunning&&((m=(u=c[3])==null?void 0:u.pollers)==null?void 0:m.length)>0?0:1}return r=s(l),t=a[r]=o[r](l),{c(){e=S("section"),t.c()},l(c){e=E(c,"SECTION",{});var i=C(e);t.l(i),i.forEach($)},m(c,i){k(c,e,i),a[r].m(e,null),n=!0},p(c,[i]){t.p(c,i)},i(c){n||(g(t),n=!0)},o(c){h(t),n=!1},d(c){c&&$(e),a[r].d()}}}let ce=!1;function ie(l,e,r){let t,n,o;P(l,M,p=>r(5,t=p)),P(l,U,p=>r(6,n=p)),P(l,j,p=>r(7,o=p));const{namespace:a}=n.params,{workflow:s,workers:c}=o;let i=new Date;const u=()=>O({workflow:s,namespace:a},n.stuff.settings,t==null?void 0:t.accessToken);let m;const f=()=>{r(1,m=O({workflow:s,namespace:a},n.stuff.settings,t==null?void 0:t.accessToken)),m.then(()=>{r(0,i=new Date)})};return s.isRunning&&r(1,m=u()),[i,m,s,c,f]}class fe extends Q{constructor(e){super(),V(this,e,ie,se,B,{})}}function ue(l){let e,r,t,n;return e=new X({props:{title:`Stack Trace | ${l[1]}`,url:l[0].url.href}}),t=new fe({}),{c(){w(e.$$.fragment),r=D(),w(t.$$.fragment)},l(o){v(e.$$.fragment,o),r=I(o),v(t.$$.fragment,o)},m(o,a){T(e,o,a),k(o,r,a),T(t,o,a),n=!0},p(o,[a]){const s={};a&1&&(s.url=o[0].url.href),e.$set(s)},i(o){n||(g(e.$$.fragment,o),g(t.$$.fragment,o),n=!0)},o(o){h(e.$$.fragment,o),h(t.$$.fragment,o),n=!1},d(o){y(e,o),o&&$(r),y(t,o)}}}function me(l,e,r){let t;P(l,U,o=>r(0,t=o));const n=t.params.workflow;return[t,n]}class Ge extends Q{constructor(e){super(),V(this,e,me,ue,B,{})}}export{Ge as default};