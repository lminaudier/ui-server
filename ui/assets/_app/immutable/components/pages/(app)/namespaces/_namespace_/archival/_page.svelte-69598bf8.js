import{S as Q,i as H,s as V,k as N,q as A,a as S,w,l as q,m as I,r as F,h as _,c as C,x as y,n as v,b as g,K as k,y as E,W as G,R as j,U as ue,u as ce,f as d,t as b,z as T,D as me,J as R,O as pe,g as B,d as D,an as ie,Z as _e,a5 as $e,a6 as he,e as W,_ as fe,ac as de,ad as ge,B as z}from"../../../../../../chunks/index-3630b6f8.js";import{t as L}from"../../../../../../chunks/time-format-f1bf8076.js";import{p as J}from"../../../../../../chunks/stores-4e1b824b.js";import{j as be,S as ve,W as ke,a as we}from"../../../../../../chunks/search-aa61e8c3.js";import{g as X}from"../../../../../../chunks/navigation-84b4244d.js";import{o as Y}from"../../../../../../chunks/format-time-e85f8b15.js";import{S as ye,a as O}from"../../../../../../chunks/simple-select-c521dc8e.js";import{u as Ee,F as x,P as Te}from"../../../../../../chunks/pagination-8cff1521.js";import{I as Pe}from"../../../../../../chunks/icon-a76a7fcc.js";import{E as Ae}from"../../../../../../chunks/empty-state-6c379cd5.js";import{C as K}from"../../../../../../chunks/code-block-a14a453e.js";import{P as Se}from"../../../../../../chunks/page-title-e9267ce5.js";function Fe(i){let e,a,t,l,o,n,r,s,m,c,p;return n=new Pe({props:{name:"search",class:"flex items-center text-gray-700"}}),{c(){e=N("div"),a=N("label"),t=A(i[0]),l=S(),o=N("span"),w(n.$$.fragment),r=S(),s=N("input"),this.h()},l(f){e=q(f,"DIV",{class:!0});var u=I(e);a=q(u,"LABEL",{for:!0,class:!0});var $=I(a);t=F($,i[0]),$.forEach(_),l=C(u),o=q(u,"SPAN",{class:!0});var h=I(o);y(n.$$.fragment,h),h.forEach(_),r=C(u),s=q(u,"INPUT",{type:!0,class:!0,placeholder:!0,id:!0}),u.forEach(_),this.h()},h(){v(a,"for",i[2]),v(a,"class","hidden"),v(o,"class","svelte-fxm0nn"),v(s,"type","search"),v(s,"class","block w-full focus:outline-none"),v(s,"placeholder",i[0]),v(s,"id",i[2]),v(e,"class","input-container focus-within:border-blue-700 svelte-fxm0nn")},m(f,u){g(f,e,u),k(e,a),k(a,t),k(e,l),k(e,o),E(n,o,null),k(e,r),k(e,s),G(s,i[1]),m=!0,c||(p=[j(s,"input",i[7]),j(s,"keydown",ue(i[6]))],c=!0)},p(f,[u]){(!m||u&1)&&ce(t,f[0]),(!m||u&1)&&v(s,"placeholder",f[0]),u&2&&G(s,f[1])},i(f){m||(d(n.$$.fragment,f),m=!0)},o(f){b(n.$$.fragment,f),m=!1},d(f){f&&_(e),T(n),c=!1,me(p)}}}function Ce(i,e,a){let t;R(i,J,f=>a(5,t=f));let{parameter:l}=e,{name:o}=e,{value:n}=e,r=l&&t.url.searchParams.get(l)||n;const s=`${l||o}-filter`,m=be(Ee,300);function c(f){pe.call(this,i,f)}function p(){r=this.value,a(1,r)}return i.$$set=f=>{"parameter"in f&&a(3,l=f.parameter),"name"in f&&a(0,o=f.name),"value"in f&&a(4,n=f.value)},i.$$.update=()=>{i.$$.dirty&42&&m({parameter:l,value:r,url:t.url})},[o,r,s,l,n,t,c,p]}class ee extends Q{constructor(e){super(),H(this,e,Ce,Fe,V,{parameter:3,name:0,value:4})}}function te(i,e,a){const t=i.slice();return t[7]=e[a][0],t[8]=e[a][1],t}function le(i,e,a){const t=i.slice();return t[8]=e[a],t}function Ne(i){let e,a,t,l,o;return{c(){e=N("a"),a=A("Advanced Search"),this.h()},l(n){e=q(n,"A",{href:!0,class:!0});var r=I(e);a=F(r,"Advanced Search"),r.forEach(_),this.h()},h(){v(e,"href",t=i[1].url.pathname+"?query"),v(e,"class","text-blue-700")},m(n,r){g(n,e,r),k(e,a),l||(o=j(e,"click",ie(i[5]("advanced"))),l=!0)},p(n,r){r&2&&t!==(t=n[1].url.pathname+"?query")&&v(e,"href",t)},d(n){n&&_(e),l=!1,o()}}}function qe(i){let e,a,t,l,o;return{c(){e=N("a"),a=A("Basic Search"),this.h()},l(n){e=q(n,"A",{href:!0,class:!0});var r=I(e);a=F(r,"Basic Search"),r.forEach(_),this.h()},h(){v(e,"href",t=i[1].url.pathname),v(e,"class","text-blue-700")},m(n,r){g(n,e,r),k(e,a),l||(o=j(e,"click",ie(i[5]("basic"))),l=!0)},p(n,r){r&2&&t!==(t=n[1].url.pathname)&&v(e,"href",t)},d(n){n&&_(e),l=!1,o()}}}function Ie(i){let e,a,t,l,o,n,r,s,m,c,p,f;a=new ee({props:{parameter:"workflow-id",name:"Workflow ID",value:Ve}}),l=new ee({props:{parameter:"workflow-type",name:"Workflow Type",value:ze}}),n=new x({props:{label:"Time Range",parameter:"time-range",value:"24 hours",$$slots:{default:[De]},$$scope:{ctx:i}}}),s=new x({props:{label:"Workflow Status",parameter:"status",value:null,$$slots:{default:[Re]},$$scope:{ctx:i}}});function u(h){i[6](h)}let $={id:"filter-by-relative-time",$$slots:{default:[Qe]},$$scope:{ctx:i}};return i[2]!==void 0&&($.value=i[2]),c=new ye({props:$}),_e.push(()=>$e(c,"value",u)),{c(){e=N("div"),w(a.$$.fragment),t=S(),w(l.$$.fragment),o=S(),w(n.$$.fragment),r=S(),w(s.$$.fragment),m=S(),w(c.$$.fragment),this.h()},l(h){e=q(h,"DIV",{class:!0,role:!0});var P=I(e);y(a.$$.fragment,P),t=C(P),y(l.$$.fragment,P),o=C(P),y(n.$$.fragment,P),r=C(P),y(s.$$.fragment,P),m=C(P),y(c.$$.fragment,P),P.forEach(_),this.h()},h(){v(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5"),v(e,"role","search")},m(h,P){g(h,e,P),E(a,e,null),k(e,t),E(l,e,null),k(e,o),E(n,e,null),k(e,r),E(s,e,null),k(e,m),E(c,e,null),f=!0},p(h,P){const M={};P&8192&&(M.$$scope={dirty:P,ctx:h}),n.$set(M);const Z={};P&8192&&(Z.$$scope={dirty:P,ctx:h}),s.$set(Z);const U={};P&8192&&(U.$$scope={dirty:P,ctx:h}),!p&&P&4&&(p=!0,U.value=h[2],he(()=>p=!1)),c.$set(U)},i(h){f||(d(a.$$.fragment,h),d(l.$$.fragment,h),d(n.$$.fragment,h),d(s.$$.fragment,h),d(c.$$.fragment,h),f=!0)},o(h){b(a.$$.fragment,h),b(l.$$.fragment,h),b(n.$$.fragment,h),b(s.$$.fragment,h),b(c.$$.fragment,h),f=!1},d(h){h&&_(e),T(a),T(l),T(n),T(s),T(c)}}}function We(i){let e,a;return e=new ve({props:{icon:!0,placeholder:"Query…",value:i[1].url.searchParams.get("query")}}),e.$on("submit",i[4]),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),a=!0},p(t,l){const o={};l&2&&(o.value=t[1].url.searchParams.get("query")),e.$set(o)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){T(e,t)}}}function Be(i){let e=i[8]+"",a;return{c(){a=A(e)},l(t){a=F(t,e)},m(t,l){g(t,a,l)},p:z,d(t){t&&_(a)}}}function re(i){let e,a;return e=new O({props:{value:i[8],$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),a=!0},p(t,l){const o={};l&8192&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){T(e,t)}}}function De(i){let e,a,t=Y,l=[];for(let n=0;n<t.length;n+=1)l[n]=re(le(i,t,n));const o=n=>b(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=W()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=W()},m(n,r){for(let s=0;s<l.length;s+=1)l[s].m(n,r);g(n,e,r),a=!0},p(n,r){if(r&0){t=Y;let s;for(s=0;s<t.length;s+=1){const m=le(n,t,s);l[s]?(l[s].p(m,r),d(l[s],1)):(l[s]=re(m),l[s].c(),d(l[s],1),l[s].m(e.parentNode,e))}for(B(),s=t.length;s<l.length;s+=1)o(s);D()}},i(n){if(!a){for(let r=0;r<t.length;r+=1)d(l[r]);a=!0}},o(n){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)b(l[r]);a=!1},d(n){fe(l,n),n&&_(e)}}}function Oe(i){let e=i[7]+"",a;return{c(){a=A(e)},l(t){a=F(t,e)},m(t,l){g(t,a,l)},p:z,d(t){t&&_(a)}}}function ae(i,e){let a,t,l;return t=new O({props:{value:e[8],$$slots:{default:[Oe]},$$scope:{ctx:e}}}),{key:i,first:null,c(){a=W(),w(t.$$.fragment),this.h()},l(o){a=W(),y(t.$$.fragment,o),this.h()},h(){this.first=a},m(o,n){g(o,a,n),E(t,o,n),l=!0},p(o,n){e=o;const r={};n&8192&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(o){l||(d(t.$$.fragment,o),l=!0)},o(o){b(t.$$.fragment,o),l=!1},d(o){o&&_(a),T(t,o)}}}function Re(i){let e=[],a=new Map,t,l,o=Object.entries(i[3]);const n=r=>r[7];for(let r=0;r<o.length;r+=1){let s=te(i,o,r),m=n(s);a.set(m,e[r]=ae(m,s))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=W()},l(r){for(let s=0;s<e.length;s+=1)e[s].l(r);t=W()},m(r,s){for(let m=0;m<e.length;m+=1)e[m].m(r,s);g(r,t,s),l=!0},p(r,s){s&8&&(o=Object.entries(r[3]),B(),e=de(e,s,n,1,r,o,a,t.parentNode,ge,ae,t,te),D())},i(r){if(!l){for(let s=0;s<o.length;s+=1)d(e[s]);l=!0}},o(r){for(let s=0;s<e.length;s+=1)b(e[s]);l=!1},d(r){for(let s=0;s<e.length;s+=1)e[s].d(r);r&&_(t)}}}function je(i){let e;return{c(){e=A("Relative")},l(a){e=F(a,"Relative")},m(a,t){g(a,e,t)},d(a){a&&_(e)}}}function Ue(i){let e;return{c(){e=A("UTC")},l(a){e=F(a,"UTC")},m(a,t){g(a,e,t)},d(a){a&&_(e)}}}function Le(i){let e;return{c(){e=A("Local")},l(a){e=F(a,"Local")},m(a,t){g(a,e,t)},d(a){a&&_(e)}}}function Qe(i){let e,a,t,l,o,n;return e=new O({props:{value:"relative",$$slots:{default:[je]},$$scope:{ctx:i}}}),t=new O({props:{value:"UTC",$$slots:{default:[Ue]},$$scope:{ctx:i}}}),o=new O({props:{value:"local",$$slots:{default:[Le]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment),a=S(),w(t.$$.fragment),l=S(),w(o.$$.fragment)},l(r){y(e.$$.fragment,r),a=C(r),y(t.$$.fragment,r),l=C(r),y(o.$$.fragment,r)},m(r,s){E(e,r,s),g(r,a,s),E(t,r,s),g(r,l,s),E(o,r,s),n=!0},p(r,s){const m={};s&8192&&(m.$$scope={dirty:s,ctx:r}),e.$set(m);const c={};s&8192&&(c.$$scope={dirty:s,ctx:r}),t.$set(c);const p={};s&8192&&(p.$$scope={dirty:s,ctx:r}),o.$set(p)},i(r){n||(d(e.$$.fragment,r),d(t.$$.fragment,r),d(o.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),b(t.$$.fragment,r),b(o.$$.fragment,r),n=!1},d(r){T(e,r),r&&_(a),T(t,r),r&&_(l),T(o,r)}}}function He(i){let e,a,t,l,o,n;function r(u,$){return u[0]?qe:Ne}let s=r(i),m=s(i);const c=[We,Ie],p=[];function f(u,$){return u[0]?0:1}return l=f(i),o=p[l]=c[l](i),{c(){e=N("section"),a=N("p"),m.c(),t=S(),o.c(),this.h()},l(u){e=q(u,"SECTION",{class:!0});var $=I(e);a=q($,"P",{class:!0});var h=I(a);m.l(h),h.forEach(_),t=C($),o.l($),$.forEach(_),this.h()},h(){v(a,"class","text-right text-xs"),v(e,"class","flex flex-col gap-2")},m(u,$){g(u,e,$),k(e,a),m.m(a,null),k(e,t),p[l].m(e,null),n=!0},p(u,[$]){s===(s=r(u))&&m?m.p(u,$):(m.d(1),m=s(u),m&&(m.c(),m.m(a,null)));let h=l;l=f(u),l===h?p[l].p(u,$):(B(),b(p[h],1,1,()=>{p[h]=null}),D(),o=p[l],o?o.p(u,$):(o=p[l]=c[l](u),o.c()),d(o,1),o.m(e,null))},i(u){n||(d(o),n=!0)},o(u){b(o),n=!1},d(u){u&&_(e),m.d(),p[l].d()}}}let Ve="",ze="";function Je(i,e,a){let t,l;R(i,J,c=>a(1,t=c)),R(i,L,c=>a(2,l=c));const o={All:null,"Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"};let n=t.url.searchParams.has("query");const r=c=>{const f=new FormData(c.target).get("query");t.url.searchParams.set("query",String(f)),X(t.url.toString())},s=c=>p=>{const f=p.target;a(0,n=c==="advanced"),n||t.url.searchParams.delete("query"),X(f.href)};function m(c){l=c,L.set(l)}return[n,t,l,o,r,s,m]}class Ke extends Q{constructor(e){super(),H(this,e,Je,He,V,{})}}function ne(i,e,a){const t=i.slice();return t[8]=e[a],t}function Me(i){let e,a,t,l,o,n,r,s,m,c;r=new K({props:{content:`tctl --namespace ${i[3]} namespace update --has enabled`,language:"text",inline:!0}});let p=!i[0]&&se(i);return{c(){e=N("h1"),a=A("This namespace is currently not enabled for archival."),t=S(),l=N("p"),o=A("Run this command to enable archival visibility for event histories:"),n=S(),w(r.$$.fragment),s=S(),p&&p.c(),m=W(),this.h()},l(f){e=q(f,"H1",{class:!0,"data-testid":!0});var u=I(e);a=F(u,"This namespace is currently not enabled for archival."),u.forEach(_),t=C(f),l=q(f,"P",{});var $=I(l);o=F($,"Run this command to enable archival visibility for event histories:"),$.forEach(_),n=C(f),y(r.$$.fragment,f),s=C(f),p&&p.l(f),m=W(),this.h()},h(){v(e,"class","text-2xl"),v(e,"data-testid","archived-disabled-title")},m(f,u){g(f,e,u),k(e,a),g(f,t,u),g(f,l,u),k(l,o),g(f,n,u),E(r,f,u),g(f,s,u),p&&p.m(f,u),g(f,m,u),c=!0},p(f,u){const $={};u&8&&($.content=`tctl --namespace ${f[3]} namespace update --has enabled`),r.$set($),f[0]?p&&(B(),b(p,1,1,()=>{p=null}),D()):p?(p.p(f,u),u&1&&d(p,1)):(p=se(f),p.c(),d(p,1),p.m(m.parentNode,m))},i(f){c||(d(r.$$.fragment,f),d(p),c=!0)},o(f){b(r.$$.fragment,f),b(p),c=!1},d(f){f&&_(e),f&&_(t),f&&_(l),f&&_(n),T(r,f),f&&_(s),p&&p.d(f),f&&_(m)}}}function Ze(i){let e,a,t,l,o,n,r,s,m,c,p;return c=new K({props:{content:`tctl --namespace ${i[3]} namespace update -vas enabled`,language:"text",inline:!0}}),{c(){e=N("h1"),a=A(`This namespace is currently enabled for archival but visibility is not
    enabled.`),t=S(),l=N("p"),o=A("To enable "),n=N("a"),r=A("archival visibility"),s=A(":"),m=S(),w(c.$$.fragment),this.h()},l(f){e=q(f,"H1",{class:!0,"data-testid":!0});var u=I(e);a=F(u,`This namespace is currently enabled for archival but visibility is not
    enabled.`),u.forEach(_),t=C(f),l=q(f,"P",{});var $=I(l);o=F($,"To enable "),n=q($,"A",{class:!0,href:!0,target:!0,rel:!0});var h=I(n);r=F(h,"archival visibility"),h.forEach(_),s=F($,":"),$.forEach(_),m=C(f),y(c.$$.fragment,f),this.h()},h(){v(e,"class","text-2xl"),v(e,"data-testid","visibility-disabled-title"),v(n,"class","text-blue-700 underline"),v(n,"href","https://docs.temporal.io/clusters#archival"),v(n,"target","_blank"),v(n,"rel","noreferrer")},m(f,u){g(f,e,u),k(e,a),g(f,t,u),g(f,l,u),k(l,o),k(l,n),k(n,r),k(l,s),g(f,m,u),E(c,f,u),p=!0},p(f,u){const $={};u&8&&($.content=`tctl --namespace ${f[3]} namespace update -vas enabled`),c.$set($)},i(f){p||(d(c.$$.fragment,f),p=!0)},o(f){b(c.$$.fragment,f),p=!1},d(f){f&&_(e),f&&_(t),f&&_(l),f&&_(m),T(c,f)}}}function Ge(i){let e,a,t,l,o,n,r,s,m;l=new Ke({});const c=[Ye,Xe],p=[];function f(u,$){var h;return(h=u[2])!=null&&h.length?0:1}return n=f(i),r=p[n]=c[n](i),{c(){e=N("h1"),a=A("Archived Workflows"),t=S(),w(l.$$.fragment),o=S(),r.c(),s=W(),this.h()},l(u){e=q(u,"H1",{class:!0,"data-testid":!0});var $=I(e);a=F($,"Archived Workflows"),$.forEach(_),t=C(u),y(l.$$.fragment,u),o=C(u),r.l(u),s=W(),this.h()},h(){v(e,"class","text-2xl"),v(e,"data-testid","archived-enabled-title")},m(u,$){g(u,e,$),k(e,a),g(u,t,$),E(l,u,$),g(u,o,$),p[n].m(u,$),g(u,s,$),m=!0},p(u,$){let h=n;n=f(u),n===h?p[n].p(u,$):(B(),b(p[h],1,1,()=>{p[h]=null}),D(),r=p[n],r?r.p(u,$):(r=p[n]=c[n](u),r.c()),d(r,1),r.m(s.parentNode,s))},i(u){m||(d(l.$$.fragment,u),d(r),m=!0)},o(u){b(l.$$.fragment,u),b(r),m=!1},d(u){u&&_(e),u&&_(t),T(l,u),u&&_(o),p[n].d(u),u&&_(s)}}}function se(i){let e,a,t,l,o,n,r,s;return r=new K({props:{content:`tctl --namespace ${i[3]} namespace update -vas enabled`,language:"text",inline:!0}}),{c(){e=N("p"),a=A("To enable "),t=N("a"),l=A("archival visibility"),o=A(":"),n=S(),w(r.$$.fragment),this.h()},l(m){e=q(m,"P",{});var c=I(e);a=F(c,"To enable "),t=q(c,"A",{class:!0,href:!0,target:!0,rel:!0});var p=I(t);l=F(p,"archival visibility"),p.forEach(_),o=F(c,":"),c.forEach(_),n=C(m),y(r.$$.fragment,m),this.h()},h(){v(t,"class","text-blue-700 underline"),v(t,"href","https://docs.temporal.io/clusters#archival"),v(t,"target","_blank"),v(t,"rel","noreferrer")},m(m,c){g(m,e,c),k(e,a),k(e,t),k(t,l),k(e,o),g(m,n,c),E(r,m,c),s=!0},p(m,c){const p={};c&8&&(p.content=`tctl --namespace ${m[3]} namespace update -vas enabled`),r.$set(p)},i(m){s||(d(r.$$.fragment,m),s=!0)},o(m){b(r.$$.fragment,m),s=!1},d(m){m&&_(e),m&&_(n),T(r,m)}}}function Xe(i){let e,a;return e=new Ae({props:{title:"No Workflows Found",content:"If you have filters applied, try adjusting them."}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),a=!0},p:z,i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){T(e,t)}}}function Ye(i){let e,a;return e=new Te({props:{items:i[2],"aria-label":"archived workflows",$$slots:{default:[et,({visibleItems:t})=>({7:t}),({visibleItems:t})=>t?128:0]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),a=!0},p(t,l){const o={};l&4&&(o.items=t[2]),l&2216&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){T(e,t)}}}function oe(i){let e,a;return e=new we({props:{workflow:i[8],namespace:i[3],timeFormat:i[5]}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),a=!0},p(t,l){const o={};l&128&&(o.workflow=t[8]),l&8&&(o.namespace=t[3]),l&32&&(o.timeFormat=t[5]),e.$set(o)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){T(e,t)}}}function xe(i){let e,a,t=i[7],l=[];for(let n=0;n<t.length;n+=1)l[n]=oe(ne(i,t,n));const o=n=>b(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=W()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=W()},m(n,r){for(let s=0;s<l.length;s+=1)l[s].m(n,r);g(n,e,r),a=!0},p(n,r){if(r&168){t=n[7];let s;for(s=0;s<t.length;s+=1){const m=ne(n,t,s);l[s]?(l[s].p(m,r),d(l[s],1)):(l[s]=oe(m),l[s].c(),d(l[s],1),l[s].m(e.parentNode,e))}for(B(),s=t.length;s<l.length;s+=1)o(s);D()}},i(n){if(!a){for(let r=0;r<t.length;r+=1)d(l[r]);a=!0}},o(n){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)b(l[r]);a=!1},d(n){fe(l,n),n&&_(e)}}}function et(i){let e,a;return e=new ke({props:{$$slots:{default:[xe]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){E(e,t,l),a=!0},p(t,l){const o={};l&2216&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){T(e,t)}}}function tt(i){let e,a,t,l,o,n;e=new Se({props:{title:`Archival | ${i[3]}`,url:i[4].url.href}});const r=[Ge,Ze,Me],s=[];function m(c,p){return c[1]&&c[0]?0:c[1]?1:2}return t=m(i),l=s[t]=r[t](i),{c(){w(e.$$.fragment),a=S(),l.c(),o=W()},l(c){y(e.$$.fragment,c),a=C(c),l.l(c),o=W()},m(c,p){E(e,c,p),g(c,a,p),s[t].m(c,p),g(c,o,p),n=!0},p(c,[p]){const f={};p&8&&(f.title=`Archival | ${c[3]}`),p&16&&(f.url=c[4].url.href),e.$set(f);let u=t;t=m(c),t===u?s[t].p(c,p):(B(),b(s[u],1,1,()=>{s[u]=null}),D(),l=s[t],l?l.p(c,p):(l=s[t]=r[t](c),l.c()),d(l,1),l.m(o.parentNode,o))},i(c){n||(d(e.$$.fragment,c),d(l),n=!0)},o(c){b(e.$$.fragment,c),b(l),n=!1},d(c){T(e,c),c&&_(a),s[t].d(c),c&&_(o)}}}function lt(i,e,a){let t,l,o,n,r,s;R(i,J,c=>a(4,r=c)),R(i,L,c=>a(5,s=c));let{data:m}=e;return i.$$set=c=>{"data"in c&&a(6,m=c.data)},i.$$.update=()=>{i.$$.dirty&64&&a(3,{namespace:{namespaceInfo:{name:t}},workflows:l,archivalEnabled:o,visibilityArchivalEnabled:n}=m,t,(a(2,l),a(6,m)),(a(1,o),a(6,m)),(a(0,n),a(6,m)))},[n,o,l,t,r,s,m]}class $t extends Q{constructor(e){super(),H(this,e,lt,tt,V,{data:6})}}export{$t as default};
