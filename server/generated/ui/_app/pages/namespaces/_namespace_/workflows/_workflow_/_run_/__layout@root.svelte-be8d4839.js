var et=Object.defineProperty;var Re=Object.getOwnPropertySymbols;var tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var qe=(n,e,r)=>e in n?et(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,oe=(n,e)=>{for(var r in e||(e={}))tt.call(e,r)&&qe(n,r,e[r]);if(Re)for(var r of Re(e))rt.call(e,r)&&qe(n,r,e[r]);return n};import{S as ee,i as te,s as re,I as $e,e as k,c as v,a as $,d as u,g,J as ye,K as Ee,L as Ie,q as h,a3 as at,a4 as nt,o as w,a5 as ot,w as y,k as C,x as E,m as P,y as I,B as T,l as ce,n as Ke,p as Ge,N as K,t as D,h as V,b as d,M as p,E as le,aa as Fe,T as Xe,a8 as Ye,D as st,C as Me,V as He,W as lt,R as G,j as x,an as it}from"../../../../../../chunks/index-68c8bf39.js";import{p as Ze}from"../../../../../../chunks/stores-5114c64c.js";import{r as Le,l as ft,w as ct}from"../../../../../../chunks/workflow-run-a2c9d0df.js";import{t as je}from"../../../../../../chunks/events-ab1f9b52.js";import{f as Oe}from"../../../../../../chunks/index-e1d0d1fc.js";import{I as ut}from"../../../../../../chunks/index-18c2fa4e.js";import{e as mt}from"../../../../../../chunks/event-view-a3a18a2d.js";import{w as dt}from"../../../../../../chunks/workflows-f792b5b2.js";import{t as pt}from"../../../../../../chunks/workflow-service-7a54001c.js";import{g as fe,h as be,i as ge,j as ke,k as ve,l as Qe}from"../../../../../../chunks/route-for-0fcfcb54.js";import{W as _t}from"../../../../../../chunks/workflow-status-d4ed8d5c.js";import{n as Ue}from"../../../../../../chunks/notifications-518c18f6.js";import{r as ht,a as wt}from"../../../../../../chunks/route-for-api-5c8354ce.js";import{B as xe}from"../../../../../../chunks/button-892bd0b2.js";import{M as bt}from"../../../../../../chunks/modal-244474cb.js";import{f as gt}from"../../../../../../chunks/events-service-b7cf0e0e.js";import{L as kt}from"../../../../../../chunks/loading-2239441f.js";import"../../../../../../chunks/index-f99f80f5.js";import"../../../../../../chunks/with-loading-22689bcc.js";import"../../../../../../chunks/pollers-service-2c1e0e58.js";import"../../../../../../chunks/index-d27505fa.js";import"../../../../../../chunks/has-b7e06397.js";import"../../../../../../chunks/is-419a79e8.js";import"../../../../../../chunks/persist-store-1f86d88b.js";import"../../../../../../chunks/is-function-b969a126.js";import"../../../../../../chunks/settings-e5e19f0d.js";import"../../../../../../chunks/version-check-4ef3b01c.js";import"../../../../../../chunks/simplify-attributes-018c5a8d.js";import"../../../../../../chunks/format-date-ecf4453c.js";import"../../../../../../chunks/to-duration-6d22e6d2.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../chunks/get-api-origin-7e36d6d7.js";import"../../../../../../chunks/badge-42583471.js";/* empty css                                                                    */import"../../../../../../chunks/index-0798ed0e.js";import"../../../../../../chunks/is-http-af6e754e.js";import"../../../../../../chunks/data-converter-config-47f05b39.js";import"../../../../../../chunks/atob-009c70e1.js";import"../../../../../../chunks/get-event-categorization-754b07cc.js";function vt(n){let e,r,t,o;const a=n[1].default,s=$e(a,n,n[0],null);return{c(){e=k("div"),s&&s.c()},l(l){e=v(l,"DIV",{});var i=$(e);s&&s.l(i),i.forEach(u)},m(l,i){g(l,e,i),s&&s.m(e,null),o=!0},p(l,[i]){s&&s.p&&(!o||i&1)&&ye(s,a,l,l[0],o?Ie(a,l[0],i,null):Ee(l[0]),null)},i(l){o||(h(s,l),at(()=>{t&&t.end(1),r=nt(e,Oe,{y:-50,duration:150,delay:50}),r.start()}),o=!0)},o(l){w(s,l),r&&r.invalidate(),t=ot(e,Oe,{y:-50,duration:150}),o=!1},d(l){l&&u(e),s&&s.d(l),l&&t&&t.end()}}}function $t(n,e,r){let{$$slots:t={},$$scope:o}=e;return n.$$set=a=>{"$$scope"in a&&r(0,o=a.$$scope)},[o,t]}class yt extends ee{constructor(e){super(),te(this,e,$t,vt,re,{})}}async function Et({workflow:n,namespace:e,reason:r}){return await ht(wt("workflow.terminate",{namespace:e,workflowId:n.id,runId:n.runId}),{options:{method:"POST",body:JSON.stringify({reason:r})},shouldRetry:!1,notifyOnError:!1})}function Je(n){let e,r,t,o;return e=new xe({props:{variant:"destructive",dataCy:"terminate-button",$$slots:{default:[It]},$$scope:{ctx:n}}}),e.$on("click",n[3]),t=new bt({props:{open:n[2],confirmText:"Terminate",confirmType:"destructive",$$slots:{content:[St],title:[Tt]},$$scope:{ctx:n}}}),t.$on("cancelModal",n[4]),t.$on("confirmModal",n[5]),{c(){y(e.$$.fragment),r=C(),y(t.$$.fragment)},l(a){E(e.$$.fragment,a),r=P(a),E(t.$$.fragment,a)},m(a,s){I(e,a,s),g(a,r,s),I(t,a,s),o=!0},p(a,s){const l={};s&2048&&(l.$$scope={dirty:s,ctx:a}),e.$set(l);const i={};s&4&&(i.open=a[2]),s&2050&&(i.$$scope={dirty:s,ctx:a}),t.$set(i)},i(a){o||(h(e.$$.fragment,a),h(t.$$.fragment,a),o=!0)},o(a){w(e.$$.fragment,a),w(t.$$.fragment,a),o=!1},d(a){T(e,a),a&&u(r),T(t,a)}}}function It(n){let e;return{c(){e=D("Terminate")},l(r){e=V(r,"Terminate")},m(r,t){g(r,e,t)},d(r){r&&u(e)}}}function Tt(n){let e,r;return{c(){e=k("h3"),r=D("Terminate Workflow"),this.h()},l(t){e=v(t,"H3",{slot:!0});var o=$(e);r=V(o,"Terminate Workflow"),o.forEach(u),this.h()},h(){d(e,"slot","title")},m(t,o){g(t,e,o),p(e,r)},p:le,d(t){t&&u(e)}}}function St(n){let e,r,t,o,a,s,l;return{c(){e=k("div"),r=k("p"),t=D(`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),o=C(),a=k("input"),this.h()},l(i){e=v(i,"DIV",{slot:!0});var f=$(e);r=v(f,"P",{});var m=$(r);t=V(m,`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),m.forEach(u),o=P(f),a=v(f,"INPUT",{class:!0,placeholder:!0}),f.forEach(u),this.h()},h(){d(a,"class","mt-4 block w-full rounded-md border border-gray-200 p-2"),d(a,"placeholder","Enter a reason"),d(e,"slot","content")},m(i,f){g(i,e,f),p(e,r),p(r,t),p(e,o),p(e,a),Fe(a,n[1]),s||(l=Xe(a,"input",n[7]),s=!0)},p(i,f){f&2&&a.value!==i[1]&&Fe(a,i[1])},d(i){i&&u(e),s=!1,l()}}}function At(n){let e,r,t=n[0].canBeTerminated&&Je(n);return{c(){t&&t.c(),e=ce()},l(o){t&&t.l(o),e=ce()},m(o,a){t&&t.m(o,a),g(o,e,a),r=!0},p(o,[a]){o[0].canBeTerminated?t?(t.p(o,a),a&1&&h(t,1)):(t=Je(o),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(Ke(),w(t,1,1,()=>{t=null}),Ge())},i(o){r||(h(t),r=!0)},o(o){w(t),r=!1},d(o){t&&t.d(o),o&&u(e)}}}function Wt(n,e,r){let t;K(n,Le,A=>r(8,t=A));let{workflow:o}=e,{namespace:a}=e,s="",l=!1;const i=()=>r(2,l=!0),f=()=>r(2,l=!1),m=async()=>{r(2,l=!1),r(1,s=""),Ye(Le,t=Date.now(),t),await st(),Ue.add("success","Workflow Terminated")},S=()=>{r(2,l=!1),r(1,s=""),Ue.add("error","Cannot Terminate Workflow")},R=()=>{!o.canBeTerminated||Et({workflow:o,namespace:a,reason:s}).then(m).catch(S)};function _(){s=this.value,r(1,s)}return n.$$set=A=>{"workflow"in A&&r(0,o=A.workflow),"namespace"in A&&r(6,a=A.namespace)},[o,s,l,i,f,R,a,_]}class Ct extends ee{constructor(e){super(),te(this,e,Wt,At,re,{workflow:0,namespace:6})}}function Pt(n){let e,r;return{c(){e=k("span"),r=D("Download"),this.h()},l(t){e=v(t,"SPAN",{class:!0});var o=$(e);r=V(o,"Download"),o.forEach(u),this.h()},h(){d(e,"class","hidden md:inline")},m(t,o){g(t,e,o),p(e,r)},p:le,d(t){t&&u(e)}}}function Nt(n){let e,r;return e=new xe({props:{variant:"secondary",icon:"download",$$slots:{default:[Pt]},$$scope:{ctx:n}}}),e.$on("click",n[0]),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){I(e,t,o),r=!0},p(t,[o]){const a={};o&16&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Dt(n,e,r){let{namespace:t}=e,{workflowId:o}=e,{runId:a}=e;const s=async()=>{const l=await gt({namespace:t,workflowId:o,runId:a,sort:"ascending"}),i=JSON.stringify({events:l},null,2);f(i,`${a}/events.json`,"text/plain");function f(m,S,R){const _=document.createElement("a"),A=new Blob([m],{type:R});_.href=URL.createObjectURL(A),_.download=S,_.click()}};return n.$$set=l=>{"namespace"in l&&r(1,t=l.namespace),"workflowId"in l&&r(2,o=l.workflowId),"runId"in l&&r(3,a=l.runId)},[s,t,o,a]}class Vt extends ee{constructor(e){super(),te(this,e,Dt,Nt,re,{namespace:1,workflowId:2,runId:3})}}function Bt(n){let e,r,t,o;function a(i,f){return i[2]||i[2]===0?Ft:qt}let s=a(n),l=s(n);return{c(){e=k("div"),l.c(),this.h()},l(i){e=v(i,"DIV",{class:!0,"data-cy":!0});var f=$(e);l.l(f),f.forEach(u),this.h()},h(){d(e,"class","block cursor-pointer whitespace-nowrap border-b-2 border-white text-sm hover:border-b-2 hover:border-blue-700 md:text-base svelte-1gctro0"),d(e,"data-cy",r=n[5].dataCy),G(e,"active",n[3]),G(e,"disabled",n[4])},m(i,f){g(i,e,f),l.m(e,null),t||(o=Xe(e,"click",n[6]),t=!0)},p(i,f){s===(s=a(i))&&l?l.p(i,f):(l.d(1),l=s(i),l&&(l.c(),l.m(e,null))),f&32&&r!==(r=i[5].dataCy)&&d(e,"data-cy",r),f&8&&G(e,"active",i[3]),f&16&&G(e,"disabled",i[4])},d(i){i&&u(e),l.d(),t=!1,o()}}}function Rt(n){let e,r;function t(s,l){return s[2]||s[2]===0?Ht:Mt}let o=t(n),a=o(n);return{c(){e=k("a"),a.c(),this.h()},l(s){e=v(s,"A",{class:!0,href:!0,"data-cy":!0});var l=$(e);a.l(l),l.forEach(u),this.h()},h(){d(e,"class","block whitespace-nowrap border-b-2 border-white text-sm hover:border-b-2 hover:border-blue-700 md:text-base svelte-1gctro0"),d(e,"href",n[0]),d(e,"data-cy",r=n[5].dataCy),G(e,"active",n[3]),G(e,"disabled",n[4])},m(s,l){g(s,e,l),a.m(e,null)},p(s,l){o===(o=t(s))&&a?a.p(s,l):(a.d(1),a=o(s),a&&(a.c(),a.m(e,null))),l&1&&d(e,"href",s[0]),l&32&&r!==(r=s[5].dataCy)&&d(e,"data-cy",r),l&8&&G(e,"active",s[3]),l&16&&G(e,"disabled",s[4])},d(s){s&&u(e),a.d()}}}function qt(n){let e;return{c(){e=D(n[1])},l(r){e=V(r,n[1])},m(r,t){g(r,e,t)},p(r,t){t&2&&x(e,r[1])},d(r){r&&u(e)}}}function Ft(n){let e,r,t,o;return{c(){e=D(n[1]),r=C(),t=k("span"),o=D(n[2]),this.h()},l(a){e=V(a,n[1]),r=P(a),t=v(a,"SPAN",{class:!0});var s=$(t);o=V(s,n[2]),s.forEach(u),this.h()},h(){d(t,"class","rounded-sm bg-blue-100 px-2 text-blue-700")},m(a,s){g(a,e,s),g(a,r,s),g(a,t,s),p(t,o)},p(a,s){s&2&&x(e,a[1]),s&4&&x(o,a[2])},d(a){a&&u(e),a&&u(r),a&&u(t)}}}function Mt(n){let e;return{c(){e=D(n[1])},l(r){e=V(r,n[1])},m(r,t){g(r,e,t)},p(r,t){t&2&&x(e,r[1])},d(r){r&&u(e)}}}function Ht(n){let e,r,t,o;return{c(){e=D(n[1]),r=C(),t=k("span"),o=D(n[2]),this.h()},l(a){e=V(a,n[1]),r=P(a),t=v(a,"SPAN",{class:!0});var s=$(t);o=V(s,n[2]),s.forEach(u),this.h()},h(){d(t,"class","rounded-sm bg-blue-100 px-2 text-blue-700")},m(a,s){g(a,e,s),g(a,r,s),g(a,t,s),p(t,o)},p(a,s){s&2&&x(e,a[1]),s&4&&x(o,a[2])},d(a){a&&u(e),a&&u(r),a&&u(t)}}}function Lt(n){let e;function r(a,s){return a[0]?Rt:Bt}let t=r(n),o=t(n);return{c(){o.c(),e=ce()},l(a){o.l(a),e=ce()},m(a,s){o.m(a,s),g(a,e,s)},p(a,[s]){t===(t=r(a))&&o?o.p(a,s):(o.d(1),o=t(a),o&&(o.c(),o.m(e.parentNode,e)))},i:le,o:le,d(a){o.d(a),a&&u(e)}}}function jt(n,e,r){let{href:t=""}=e,{label:o}=e,{amount:a=null}=e,{active:s=!1}=e,{disabled:l=!1}=e;function i(f){lt.call(this,n,f)}return n.$$set=f=>{r(5,e=Me(Me({},e),He(f))),"href"in f&&r(0,t=f.href),"label"in f&&r(1,o=f.label),"amount"in f&&r(2,a=f.amount),"active"in f&&r(3,s=f.active),"disabled"in f&&r(4,l=f.disabled)},e=He(e),[t,o,a,s,l,e,i]}class se extends ee{constructor(e){super(),te(this,e,jt,Lt,re,{href:0,label:1,amount:2,active:3,disabled:4})}}const ze=n=>{const e=n==null?void 0:n.indexOf("?");return e>-1?n.slice(0,e):n},B=(n,e,r=!1)=>{const t=ze(n).split("/"),o=ze(e).split("/");if(r&&t.length!==o.length)return!1;for(let a=0;a<t.length;a++){const s=t[a],l=o[a];if(s!==l)return!1}return!0};function Ot(n){var Te,Se,Ae,We,Ce;let e,r,t,o,a,s,l,i,f,m,S,R,_,A=n[1].id+"",ie,ue,M,H,me,L,de,W,j,pe,O,_e,Q,he,U,we,J,ae;return a=new ut({props:{scale:.8,name:"caretLeft",class:"inline"}}),S=new _t({props:{status:(Te=n[1])==null?void 0:Te.status}}),H=new Vt({props:{namespace:n[0],workflowId:n[1].id,runId:n[1].runId}}),L=new Ct({props:{workflow:n[1],namespace:n[0]}}),j=new se({props:{label:"History",href:fe(oe({view:n[3]},n[5])),amount:(Se=n[1])==null?void 0:Se.historyEvents,dataCy:"history-tab",active:B(n[4].url.pathname,fe(oe({view:n[3]},n[5])))}}),O=new se({props:{label:"Workers",href:be(n[5]),amount:(We=(Ae=n[2])==null?void 0:Ae.pollers)==null?void 0:We.length,dataCy:"workers-tab",active:B(n[4].url.pathname,be(n[5]))}}),Q=new se({props:{label:"Pending Activities",href:ge(n[5]),amount:(Ce=n[1].pendingActivities)==null?void 0:Ce.length,dataCy:"pending-activities-tab",active:B(n[4].url.pathname,ge(n[5]))}}),U=new se({props:{label:"Stack Trace",href:ke(n[5]),dataCy:"stack-trace-tab",active:B(n[4].url.pathname,ke(n[5]))}}),J=new se({props:{label:"Queries",href:ve(n[5]),dataCy:"queries-tab",active:B(n[4].url.pathname,ve(n[5]))}}),{c(){e=k("header"),r=k("main"),t=k("div"),o=k("a"),y(a.$$.fragment),s=D("Back to Workflows"),i=C(),f=k("div"),m=k("h1"),y(S.$$.fragment),R=C(),_=k("span"),ie=D(A),ue=C(),M=k("div"),y(H.$$.fragment),me=C(),y(L.$$.fragment),de=C(),W=k("nav"),y(j.$$.fragment),pe=C(),y(O.$$.fragment),_e=C(),y(Q.$$.fragment),he=C(),y(U.$$.fragment),we=C(),y(J.$$.fragment),this.h()},l(c){e=v(c,"HEADER",{class:!0});var b=$(e);r=v(b,"MAIN",{class:!0});var q=$(r);t=v(q,"DIV",{class:!0});var X=$(t);o=v(X,"A",{href:!0,"data-cy":!0,class:!0});var Y=$(o);E(a.$$.fragment,Y),s=V(Y,"Back to Workflows"),Y.forEach(u),X.forEach(u),i=P(q),f=v(q,"DIV",{class:!0});var F=$(f);m=v(F,"H1",{class:!0});var z=$(m);E(S.$$.fragment,z),R=P(z),_=v(z,"SPAN",{class:!0});var ne=$(_);ie=V(ne,A),ne.forEach(u),z.forEach(u),ue=P(F),M=v(F,"DIV",{class:!0});var Z=$(M);E(H.$$.fragment,Z),me=P(Z),E(L.$$.fragment,Z),Z.forEach(u),F.forEach(u),de=P(q),W=v(q,"NAV",{class:!0});var N=$(W);E(j.$$.fragment,N),pe=P(N),E(O.$$.fragment,N),_e=P(N),E(Q.$$.fragment,N),he=P(N),E(U.$$.fragment,N),we=P(N),E(J.$$.fragment,N),N.forEach(u),q.forEach(u),b.forEach(u),this.h()},h(){d(o,"href",l=`/namespaces/${n[0]}/workflows?query=${Qe(n[7])}&search=${n[6]}`),d(o,"data-cy","back-to-workflows"),d(o,"class","back-to-workflows svelte-st9g8m"),d(t,"class","-mt-3 -ml-2 block"),d(_,"class","select-all font-medium"),d(m,"class","relative flex items-center gap-4 text-2xl"),d(M,"class","ml-8 flex items-center justify-end gap-4"),d(f,"class","mb-8 flex items-center justify-between"),d(W,"class","flex flex-wrap gap-6"),d(r,"class","relative flex flex-col gap-1"),d(e,"class","mb-4 flex flex-col gap-4")},m(c,b){g(c,e,b),p(e,r),p(r,t),p(t,o),I(a,o,null),p(o,s),p(r,i),p(r,f),p(f,m),I(S,m,null),p(m,R),p(m,_),p(_,ie),p(f,ue),p(f,M),I(H,M,null),p(M,me),I(L,M,null),p(r,de),p(r,W),I(j,W,null),p(W,pe),I(O,W,null),p(W,_e),I(Q,W,null),p(W,he),I(U,W,null),p(W,we),I(J,W,null),ae=!0},p(c,[b]){var Pe,Ne,De,Ve,Be;(!ae||b&1&&l!==(l=`/namespaces/${c[0]}/workflows?query=${Qe(c[7])}&search=${c[6]}`))&&d(o,"href",l);const q={};b&2&&(q.status=(Pe=c[1])==null?void 0:Pe.status),S.$set(q),(!ae||b&2)&&A!==(A=c[1].id+"")&&x(ie,A);const X={};b&1&&(X.namespace=c[0]),b&2&&(X.workflowId=c[1].id),b&2&&(X.runId=c[1].runId),H.$set(X);const Y={};b&2&&(Y.workflow=c[1]),b&1&&(Y.namespace=c[0]),L.$set(Y);const F={};b&8&&(F.href=fe(oe({view:c[3]},c[5]))),b&2&&(F.amount=(Ne=c[1])==null?void 0:Ne.historyEvents),b&24&&(F.active=B(c[4].url.pathname,fe(oe({view:c[3]},c[5])))),j.$set(F);const z={};b&4&&(z.amount=(Ve=(De=c[2])==null?void 0:De.pollers)==null?void 0:Ve.length),b&16&&(z.active=B(c[4].url.pathname,be(c[5]))),O.$set(z);const ne={};b&2&&(ne.amount=(Be=c[1].pendingActivities)==null?void 0:Be.length),b&16&&(ne.active=B(c[4].url.pathname,ge(c[5]))),Q.$set(ne);const Z={};b&16&&(Z.active=B(c[4].url.pathname,ke(c[5]))),U.$set(Z);const N={};b&16&&(N.active=B(c[4].url.pathname,ve(c[5]))),J.$set(N)},i(c){ae||(h(a.$$.fragment,c),h(S.$$.fragment,c),h(H.$$.fragment,c),h(L.$$.fragment,c),h(j.$$.fragment,c),h(O.$$.fragment,c),h(Q.$$.fragment,c),h(U.$$.fragment,c),h(J.$$.fragment,c),ae=!0)},o(c){w(a.$$.fragment,c),w(S.$$.fragment,c),w(H.$$.fragment,c),w(L.$$.fragment,c),w(j.$$.fragment,c),w(O.$$.fragment,c),w(Q.$$.fragment,c),w(U.$$.fragment,c),w(J.$$.fragment,c),ae=!1},d(c){c&&u(e),T(a),T(S),T(H),T(L),T(j),T(O),T(Q),T(U),T(J)}}}function Qt(n,e,r){let t,o,a;K(n,dt,_=>r(8,t=_)),K(n,mt,_=>r(3,o=_)),K(n,Ze,_=>r(4,a=_));let{namespace:s}=e,{workflow:l}=e,{workers:i}=e;const f={namespace:s,workflow:l.id,run:l.runId},{parameters:m,searchType:S}=t,R=pt(m);return n.$$set=_=>{"namespace"in _&&r(0,s=_.namespace),"workflow"in _&&r(1,l=_.workflow),"workers"in _&&r(2,i=_.workers)},[s,l,i,o,a,f,S,R]}class Ut extends ee{constructor(e){super(),te(this,e,Qt,Ot,re,{namespace:0,workflow:1,workers:2})}}function Jt(n){let e,r;return e=new yt({props:{$$slots:{default:[Kt]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){I(e,t,o),r=!0},p(t,o){const a={};o&18&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function zt(n){let e,r;return e=new kt({}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){I(e,t,o),r=!0},p:le,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Kt(n){let e,r,t;e=new Ut({props:{namespace:n[2],workflow:n[1].workflow,workers:n[1].workers}});const o=n[3].default,a=$e(o,n,n[4],null);return{c(){y(e.$$.fragment),r=C(),a&&a.c()},l(s){E(e.$$.fragment,s),r=P(s),a&&a.l(s)},m(s,l){I(e,s,l),g(s,r,l),a&&a.m(s,l),t=!0},p(s,l){const i={};l&2&&(i.workflow=s[1].workflow),l&2&&(i.workers=s[1].workers),e.$set(i),a&&a.p&&(!t||l&16)&&ye(a,o,s,s[4],t?Ie(o,s[4],l,null):Ee(s[4]),null)},i(s){t||(h(e.$$.fragment,s),h(a,s),t=!0)},o(s){w(e.$$.fragment,s),w(a,s),t=!1},d(s){T(e,s),s&&u(r),a&&a.d(s)}}}function Gt(n){let e,r,t,o;const a=[zt,Jt],s=[];function l(i,f){return i[0]?0:1}return r=l(n),t=s[r]=a[r](n),{c(){e=k("main"),t.c(),this.h()},l(i){e=v(i,"MAIN",{class:!0});var f=$(e);t.l(f),f.forEach(u),this.h()},h(){d(e,"class","flex h-full flex-col gap-6")},m(i,f){g(i,e,f),s[r].m(e,null),o=!0},p(i,[f]){let m=r;r=l(i),r===m?s[r].p(i,f):(Ke(),w(s[m],1,1,()=>{s[m]=null}),Ge(),t=s[r],t?t.p(i,f):(t=s[r]=a[r](i),t.c()),h(t,1),t.m(e,null))},i(i){o||(h(t),o=!0)},o(i){w(t),o=!1},d(i){i&&u(e),s[r].d()}}}function Xt(n,e,r){let t,o,a,s;K(n,je,m=>r(5,t=m)),K(n,Ze,m=>r(6,o=m)),K(n,ft,m=>r(0,a=m)),K(n,ct,m=>r(1,s=m));let{$$slots:l={},$$scope:i}=e;const{namespace:f}=o.params;return it(()=>{Ye(je,t=null,t)}),n.$$set=m=>{"$$scope"in m&&r(4,i=m.$$scope)},[a,s,f,l,i]}class Yt extends ee{constructor(e){super(),te(this,e,Xt,Gt,re,{})}}function Zt(n){let e;const r=n[0].default,t=$e(r,n,n[1],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,a){t&&t.m(o,a),e=!0},p(o,a){t&&t.p&&(!e||a&2)&&ye(t,r,o,o[1],e?Ie(r,o[1],a,null):Ee(o[1]),null)},i(o){e||(h(t,o),e=!0)},o(o){w(t,o),e=!1},d(o){t&&t.d(o)}}}function xt(n){let e,r;return e=new Yt({props:{$$slots:{default:[Zt]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){I(e,t,o),r=!0},p(t,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function er(n,e,r){let{$$slots:t={},$$scope:o}=e;return n.$$set=a=>{"$$scope"in a&&r(1,o=a.$$scope)},[t,o]}class Lr extends ee{constructor(e){super(),te(this,e,er,xt,re,{})}}export{Lr as default};
