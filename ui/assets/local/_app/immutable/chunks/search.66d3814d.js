import{S as ye,b as Te,a as he,C as V,D as z,E as K,j as S,g as W,F as M,G as Xe,H as Ye,I as Ze,J as $e,m as g,w as H,c as P,p as E,q as F,x as L,k as c,d as C,u as w,f as T,L as k,n as te,e as Ue,z as me,h as _e,K as Je,T as j,V as le,ab as se,r as qe,R as Re,i as xe,y as Y,P as Se}from"./index.a36c9cb0.js";import{T as et,a as tt}from"./table-header-row.8c3a37e7.js";import{p as lt}from"./stores.4bf6d71e.js";import{f as X}from"./format-date.ee30003a.js";import{s as st,u as rt,v as at,w as Ae}from"./format-time.76040736.js";import{g as ot}from"./route-for.7f9d6b12.js";import{u as nt}from"./pagination.145ab733.js";import{t as Oe}from"./list-workflow-query.49a5c79c.js";import{c as ft,d as Fe,e as ut,f as it,g as ct}from"./has.48bed8a5.js";import{W as mt}from"./workflow-status.d9957e10.js";import{I as De}from"./icon.7be6fc75.js";import{c as _t}from"./copy-to-clipboard.d1283b5b.js";import{T as ht}from"./table-row.9df8daa0.js";import{B as dt}from"./button.ddd8f48e.js";function pt(r){let e;const s=r[1].default,t=Xe(s,r,r[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&4)&&Ye(t,s,l,l[2],e?$e(s,l[2],o,null):Ze(l[2]),null)},i(l){e||(S(t,l),e=!0)},o(l){W(t,l),e=!1},d(l){t&&t.d(l)}}}function bt(r){let e,s,t,l,o,a,n,f,i,h,D,p,b,m,_,q,B;return{c(){e=g("th"),s=H("Status"),t=P(),l=g("th"),o=H("Workflow ID"),a=P(),n=g("th"),f=H("Type"),i=P(),h=g("th"),D=H("Start"),p=P(),b=g("th"),m=H("End"),_=P(),q=g("th"),B=H("Summary"),this.h()},l(d){e=E(d,"TH",{class:!0});var y=F(e);s=L(y,"Status"),y.forEach(c),t=C(d),l=E(d,"TH",{class:!0});var I=F(l);o=L(I,"Workflow ID"),I.forEach(c),a=C(d),n=E(d,"TH",{class:!0});var G=F(n);f=L(G,"Type"),G.forEach(c),i=C(d),h=E(d,"TH",{class:!0});var U=F(h);D=L(U,"Start"),U.forEach(c),p=C(d),b=E(d,"TH",{class:!0});var R=F(b);m=L(R,"End"),R.forEach(c),_=C(d),q=E(d,"TH",{class:!0,colspan:!0});var N=F(q);B=L(N,"Summary"),N.forEach(c),this.h()},h(){w(e,"class","w-32 max-md:hidden"),w(l,"class","max-md:hidden md:w-auto"),w(n,"class","w-60 max-md:hidden"),w(h,"class","w-60 max-xl:hidden"),w(b,"class","w-60 max-xl:hidden"),w(q,"class","md:hidden"),w(q,"colspan","3")},m(d,y){T(d,e,y),k(e,s),T(d,t,y),T(d,l,y),k(l,o),T(d,a,y),T(d,n,y),k(n,f),T(d,i,y),T(d,h,y),k(h,D),T(d,p,y),T(d,b,y),k(b,m),T(d,_,y),T(d,q,y),k(q,B)},p:te,d(d){d&&c(e),d&&c(t),d&&c(l),d&&c(a),d&&c(n),d&&c(i),d&&c(h),d&&c(p),d&&c(b),d&&c(_),d&&c(q)}}}function wt(r){let e,s;return e=new tt({props:{slot:"headers",$$slots:{default:[bt]},$$scope:{ctx:r}}}),{c(){V(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function kt(r){let e,s;return e=new et({props:{class:"w-full md:table-fixed",updating:r[0],"data-testid":"workflows-table",$$slots:{headers:[wt],default:[pt]},$$scope:{ctx:r}}}),{c(){V(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,[l]){const o={};l&1&&(o.updating=t[0]),l&4&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function vt(r,e,s){let{$$slots:t={},$$scope:l}=e,{updating:o=!1}=e;return r.$$set=a=>{"updating"in a&&s(0,o=a.updating),"$$scope"in a&&s(2,l=a.$$scope)},[o,t,l]}class Zt extends ye{constructor(e){super(),Te(this,e,vt,kt,he,{updating:0})}}const yt=r=>{const e=[],s=()=>{t&&(e.push(t),t="")};let t="",l=0;for(;l<r.length;){const o=r[l];if(ft(o)){t+=o,s(),l++;continue}if(Fe(o)){const a=`${r[l]}${r[l+1]}`,n=`${r[l]}${r[l+1]}${r[l+2]}`;if(Fe(n)){s(),t+=n,l+=3;continue}else if(Fe(a)){s(),t+=a,l+=2;continue}else{s(),t+=o,l++;continue}}if(ut(o)||it(o)){s(),l++;continue}t+=o,l++}return s(),e},ge=r=>e=>e.toLowerCase()===r.toLowerCase(),ve=(r,e)=>r[e+2],Tt=r=>{if(r){for(const e of at)if(r[e])return{[e]:r[e]}}},gt=ge("WorkflowType"),Et=ge("WorkflowId"),St=ge("StartTime"),Ft=ge("ExecutionStatus"),qt=r=>{const e=yt(r),s={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(Et(t)&&(s.workflowId=ve(e,l)),gt(t)&&(s.workflowType=ve(e,l)),Ft(t)){const o=ve(e,l);ct(o)&&(s.executionStatus=o)}if(St(t)){const o=ve(e,l);try{const a=st(o),n=Tt(a);s.timeRange=rt(n)}catch(a){console.error("Error parsing StartTime from query",a)}}}),s};function Qe(r){let e,s,t,l,o,a,n=r[1]&&Ve(r),f=r[2]&&Ke(r);return{c(){e=g("div"),n&&n.c(),s=P(),f&&f.c(),this.h()},l(i){e=E(i,"DIV",{class:!0});var h=F(e);n&&n.l(h),s=C(h),f&&f.l(h),h.forEach(c),this.h()},h(){w(e,"class",t="copy-or-filter "+r[6]+" svelte-1f7279h")},m(i,h){T(i,e,h),n&&n.m(e,null),k(e,s),f&&f.m(e,null),l=!0,o||(a=[j(e,"click",le(se(te))),j(e,"keyup",le(se(te)))],o=!0)},p(i,h){i[1]?n?(n.p(i,h),h&2&&S(n,1)):(n=Ve(i),n.c(),S(n,1),n.m(e,s)):n&&(me(),W(n,1,1,()=>{n=null}),_e()),i[2]?f?(f.p(i,h),h&4&&S(f,1)):(f=Ke(i),f.c(),S(f,1),f.m(e,null)):f&&(me(),W(f,1,1,()=>{f=null}),_e()),(!l||h&64&&t!==(t="copy-or-filter "+i[6]+" svelte-1f7279h"))&&w(e,"class",t)},i(i){l||(S(n),S(f),l=!0)},o(i){W(n),W(f),l=!1},d(i){i&&c(e),n&&n.d(),f&&f.d(),o=!1,qe(a)}}}function Ve(r){let e,s=r[5],t,l,o,a=ze();return{c(){e=g("button"),a.c(),this.h()},l(n){e=E(n,"BUTTON",{class:!0});var f=F(e);a.l(f),f.forEach(c),this.h()},h(){w(e,"class","copy-or-filter-button svelte-1f7279h"),Re(e,"filtered",r[5])},m(n,f){T(n,e,f),a.m(e,null),t=!0,l||(o=j(e,"click",le(se(function(){xe(r[4])&&r[4].apply(this,arguments)}))),l=!0)},p(n,f){r=n,f&32&&he(s,s=r[5])?(me(),W(a,1,1,te),_e(),a=ze(),a.c(),S(a,1),a.m(e,null)):a.p(r,f),(!t||f&32)&&Re(e,"filtered",r[5])},i(n){t||(S(a),t=!0)},o(n){W(a),t=!1},d(n){n&&c(e),a.d(n),l=!1,o()}}}function ze(r){let e,s;return e=new De({props:{name:"filter"}}),{c(){V(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p:te,i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Ke(r){let e,s,t,l,o;return s=new De({props:{name:r[7]?"checkmark":"copy",stroke:"#000"}}),{c(){e=g("button"),V(s.$$.fragment),this.h()},l(a){e=E(a,"BUTTON",{class:!0});var n=F(e);z(s.$$.fragment,n),n.forEach(c),this.h()},h(){w(e,"class","copy-or-filter-button svelte-1f7279h")},m(a,n){T(a,e,n),K(s,e,null),t=!0,l||(o=j(e,"click",le(se(r[10]))),l=!0)},p(a,n){const f={};n&128&&(f.name=a[7]?"checkmark":"copy"),s.$set(f)},i(a){t||(S(s.$$.fragment,a),t=!0)},o(a){W(s.$$.fragment,a),t=!1},d(a){a&&c(e),M(s),l=!1,o()}}}function Dt(r){let e,s,t=r[0]&&Qe(r);return{c(){t&&t.c(),e=Ue()},l(l){t&&t.l(l),e=Ue()},m(l,o){t&&t.m(l,o),T(l,e,o),s=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&S(t,1)):(t=Qe(l),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(me(),W(t,1,1,()=>{t=null}),_e())},i(l){s||(S(t),s=!0)},o(l){W(t),s=!1},d(l){t&&t.d(l),l&&c(e)}}}function Wt(r,e,s){let t,{show:l=!1}=e,{filterable:o=!0}=e,{copyable:a=!0}=e,{content:n}=e,{onFilter:f=te}=e,{filtered:i=!1}=e,{class:h=""}=e;const{copy:D,copied:p}=_t(700);Je(r,p,m=>s(7,t=m));const b=m=>D(m,n);return r.$$set=m=>{"show"in m&&s(0,l=m.show),"filterable"in m&&s(1,o=m.filterable),"copyable"in m&&s(2,a=m.copyable),"content"in m&&s(3,n=m.content),"onFilter"in m&&s(4,f=m.onFilter),"filtered"in m&&s(5,i=m.filtered),"class"in m&&s(6,h=m.class)},[l,o,a,n,f,i,h,t,D,p,b]}class Me extends ye{constructor(e){super(),Te(this,e,Wt,Dt,he,{show:0,filterable:1,copyable:2,content:3,onFilter:4,filtered:5,class:6})}}function It(r){var Ie,Pe,Ce;let e,s,t,l,o,a=r[0].id+"",n,f,i,h,D,p=X(r[0].startTime,r[1])+"",b,m,_,q,B,d,y,I=r[0].name+"",G,U,R,N,re,x,ae=X(r[0].endTime,r[1])+"",de,pe,Z,oe,ne=X(r[0].startTime,r[1])+"",be,we,$,fe,ue=X(r[0].endTime,r[1])+"",ke,A,Ee,We;return s=new mt({props:{status:r[0].status,delay:Ae(r[0].startTime)}}),i=new Me({props:{show:r[2],content:r[0].id,filterable:!1}}),N=new Me({props:{show:r[2],content:r[0].name,onFilter:r[12],filtered:(Ce=(Pe=(Ie=r[4].url)==null?void 0:Ie.searchParams)==null?void 0:Pe.get("query"))==null?void 0:Ce.includes(r[0].name)}}),{c(){e=g("td"),V(s.$$.fragment),t=P(),l=g("td"),o=g("span"),n=H(a),f=P(),V(i.$$.fragment),h=P(),D=g("p"),b=H(p),m=P(),_=g("td"),q=g("h3"),B=H("Workflow Name:"),d=P(),y=g("button"),G=H(I),R=P(),V(N.$$.fragment),re=P(),x=g("p"),de=H(ae),pe=P(),Z=g("td"),oe=g("p"),be=H(ne),we=P(),$=g("td"),fe=g("p"),ke=H(ue),this.h()},l(u){e=E(u,"TD",{});var v=F(e);z(s.$$.fragment,v),v.forEach(c),t=C(u),l=E(u,"TD",{class:!0});var Q=F(l);o=E(Q,"SPAN",{class:!0});var ee=F(o);n=L(ee,a),ee.forEach(c),f=C(Q),z(i.$$.fragment,Q),h=C(Q),D=E(Q,"P",{class:!0});var J=F(D);b=L(J,p),J.forEach(c),Q.forEach(c),m=C(u),_=E(u,"TD",{class:!0});var O=F(_);q=E(O,"H3",{class:!0});var ie=F(q);B=L(ie,"Workflow Name:"),ie.forEach(c),d=C(O),y=E(O,"BUTTON",{class:!0,"aria-label":!0});var ce=F(y);G=L(ce,I),ce.forEach(c),R=C(O),z(N.$$.fragment,O),re=C(O),x=E(O,"P",{class:!0});var je=F(x);de=L(je,ae),je.forEach(c),O.forEach(c),pe=C(u),Z=E(u,"TD",{class:!0});var He=F(Z);oe=E(He,"P",{});var Le=F(oe);be=L(Le,ne),Le.forEach(c),He.forEach(c),we=C(u),$=E(u,"TD",{class:!0});var Ne=F($);fe=E(Ne,"P",{});var Be=F(fe);ke=L(Be,ue),Be.forEach(c),Ne.forEach(c),this.h()},h(){w(o,"class","table-link svelte-tyqpjy"),w(D,"class","inline-time-cell svelte-tyqpjy"),w(l,"class","relative break-words pr-4"),w(q,"class","md:hidden"),w(y,"class","table-link svelte-tyqpjy"),w(y,"aria-label",U="filter by "+r[0].name+" type"),w(x,"class","inline-time-cell svelte-tyqpjy"),w(_,"class","relative truncate"),w(Z,"class","time-cell svelte-tyqpjy"),w($,"class","time-cell svelte-tyqpjy")},m(u,v){T(u,e,v),K(s,e,null),T(u,t,v),T(u,l,v),k(l,o),k(o,n),k(l,f),K(i,l,null),k(l,h),k(l,D),k(D,b),T(u,m,v),T(u,_,v),k(_,q),k(q,B),k(_,d),k(_,y),k(y,G),k(_,R),K(N,_,null),k(_,re),k(_,x),k(x,de),T(u,pe,v),T(u,Z,v),k(Z,oe),k(oe,be),T(u,we,v),T(u,$,v),k($,fe),k(fe,ke),A=!0,Ee||(We=[j(l,"mouseover",r[7]),j(l,"focus",r[8]),j(l,"mouseleave",r[9]),j(l,"blur",r[10]),j(y,"click",le(se(r[11]))),j(_,"mouseover",r[13]),j(_,"focus",r[14]),j(_,"mouseleave",r[15]),j(_,"blur",r[16])],Ee=!0)},p(u,v){var O,ie,ce;const Q={};v&1&&(Q.status=u[0].status),v&1&&(Q.delay=Ae(u[0].startTime)),s.$set(Q),(!A||v&1)&&a!==(a=u[0].id+"")&&Y(n,a);const ee={};v&4&&(ee.show=u[2]),v&1&&(ee.content=u[0].id),i.$set(ee),(!A||v&3)&&p!==(p=X(u[0].startTime,u[1])+"")&&Y(b,p),(!A||v&1)&&I!==(I=u[0].name+"")&&Y(G,I),(!A||v&1&&U!==(U="filter by "+u[0].name+" type"))&&w(y,"aria-label",U);const J={};v&4&&(J.show=u[2]),v&1&&(J.content=u[0].name),v&1&&(J.onFilter=u[12]),v&17&&(J.filtered=(ce=(ie=(O=u[4].url)==null?void 0:O.searchParams)==null?void 0:ie.get("query"))==null?void 0:ce.includes(u[0].name)),N.$set(J),(!A||v&3)&&ae!==(ae=X(u[0].endTime,u[1])+"")&&Y(de,ae),(!A||v&3)&&ne!==(ne=X(u[0].startTime,u[1])+"")&&Y(be,ne),(!A||v&3)&&ue!==(ue=X(u[0].endTime,u[1])+"")&&Y(ke,ue)},i(u){A||(S(s.$$.fragment,u),S(i.$$.fragment,u),S(N.$$.fragment,u),A=!0)},o(u){W(s.$$.fragment,u),W(i.$$.fragment,u),W(N.$$.fragment,u),A=!1},d(u){u&&c(e),M(s),u&&c(t),u&&c(l),M(i),u&&c(m),u&&c(_),M(N),u&&c(pe),u&&c(Z),u&&c(we),u&&c($),Ee=!1,qe(We)}}}function Pt(r){let e,s;return e=new ht({props:{href:r[3],class:"workflow-summary-row",$$slots:{default:[It]},$$scope:{ctx:r}}}),{c(){V(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,[l]){const o={};l&8&&(o.href=t[3]),l&131095&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Ct(r,e,s){let t,l;Je(r,lt,I=>s(4,l=I));let{namespace:o}=e,{workflow:a}=e,{timeFormat:n}=e,f=!1;const i=I=>{const G=Oe({timeRange:"All"}),U=l.url.searchParams.get("query"),R=qt(U??G),N=(R==null?void 0:R.workflowType)===I?"":I,re=Oe({...R,workflowType:N});nt({url:l.url,parameter:"query",value:re,allowEmpty:!0})},h=()=>s(2,f=!0),D=()=>s(2,f=!0),p=()=>s(2,f=!1),b=()=>s(2,f=!1),m=()=>i(a.name),_=()=>i(a.name),q=()=>s(2,f=!0),B=()=>s(2,f=!0),d=()=>s(2,f=!1),y=()=>s(2,f=!1);return r.$$set=I=>{"namespace"in I&&s(6,o=I.namespace),"workflow"in I&&s(0,a=I.workflow),"timeFormat"in I&&s(1,n=I.timeFormat)},r.$$.update=()=>{r.$$.dirty&65&&s(3,t=ot({namespace:o,workflow:a.id,run:a.runId}))},[a,n,f,t,l,i,o,h,D,p,b,m,_,q,B,d,y]}class $t extends ye{constructor(e){super(),Te(this,e,Ct,Pt,he,{namespace:6,workflow:0,timeFormat:1})}}var xt=jt;function jt(r,e,s,t){var l,o,a;return function(){if(a=this,o=Array.prototype.slice.call(arguments),l&&(s||t))return;if(!s)return i(),l=setTimeout(f,e),l;l=setTimeout(i,e),r.apply(a,o);function f(){i(),r.apply(a,o)}function i(){clearTimeout(l),l=null}}}function Ge(r){let e,s;return e=new De({props:{name:"search",class:"ml-4 flex items-center text-gray-700"}}),{c(){V(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function Ht(r){let e;return{c(){e=H(r[2])},l(s){e=L(s,r[2])},m(s,t){T(s,e,t)},p(s,t){t&4&&Y(e,s[2])},d(s){s&&c(e)}}}function Lt(r){let e,s,t,l,o,a,n,f,i,h,D,p,b=r[4]&&Ge();return i=new dt({props:{class:"m-2",type:"submit",$$slots:{default:[Ht]},$$scope:{ctx:r}}}),{c(){e=g("form"),b&&b.c(),s=P(),t=g("label"),l=H(r[2]),o=P(),a=g("input"),n=P(),f=g("div"),V(i.$$.fragment),this.h()},l(m){e=E(m,"FORM",{class:!0,role:!0});var _=F(e);b&&b.l(_),s=C(_),t=E(_,"LABEL",{for:!0,class:!0});var q=F(t);l=L(q,r[2]),q.forEach(c),o=C(_),a=E(_,"INPUT",{id:!0,type:!0,class:!0,name:!0,placeholder:!0,autocomplete:!0}),n=C(_),f=E(_,"DIV",{});var B=F(f);z(i.$$.fragment,B),B.forEach(c),_.forEach(c),this.h()},h(){w(t,"for",r[5]),w(t,"class","hidden"),w(a,"id",r[5]),w(a,"type","search"),w(a,"class","w-full rounded-l-lg px-4 focus:outline-none"),w(a,"name",r[3]),a.value=r[1],w(a,"placeholder",r[0]),w(a,"autocomplete","off"),w(e,"class","relative flex items-center rounded-lg border-2 bg-white transition-colors focus-within:border-blue-700"),w(e,"role","search")},m(m,_){T(m,e,_),b&&b.m(e,null),k(e,s),k(e,t),k(t,l),k(e,o),k(e,a),k(e,n),k(e,f),K(i,f,null),h=!0,D||(p=[j(a,"input",r[7]),j(a,"keydown",le(r[8])),j(e,"submit",se(r[6]))],D=!0)},p(m,[_]){m[4]?b?_&16&&S(b,1):(b=Ge(),b.c(),S(b,1),b.m(e,s)):b&&(me(),W(b,1,1,()=>{b=null}),_e()),(!h||_&4)&&Y(l,m[2]),(!h||_&32)&&w(t,"for",m[5]),(!h||_&32)&&w(a,"id",m[5]),(!h||_&8)&&w(a,"name",m[3]),(!h||_&2&&a.value!==m[1])&&(a.value=m[1]),(!h||_&1)&&w(a,"placeholder",m[0]);const q={};_&516&&(q.$$scope={dirty:_,ctx:m}),i.$set(q)},i(m){h||(S(b),S(i.$$.fragment,m),h=!0)},o(m){W(b),W(i.$$.fragment,m),h=!1},d(m){m&&c(e),b&&b.d(),M(i),D=!1,qe(p)}}}function Nt(r,e,s){let{placeholder:t=""}=e,{value:l=""}=e,{label:o="Search"}=e,{name:a="query"}=e,{icon:n=!1}=e,{id:f=`${o.toLocaleUpperCase()}-input`}=e;function i(p){Se.call(this,r,p)}function h(p){Se.call(this,r,p)}function D(p){Se.call(this,r,p)}return r.$$set=p=>{"placeholder"in p&&s(0,t=p.placeholder),"value"in p&&s(1,l=p.value),"label"in p&&s(2,o=p.label),"name"in p&&s(3,a=p.name),"icon"in p&&s(4,n=p.icon),"id"in p&&s(5,f=p.id)},[t,l,o,a,n,f,i,h,D]}class el extends ye{constructor(e){super(),Te(this,e,Nt,Lt,he,{placeholder:0,value:1,label:2,name:3,icon:4,id:5})}}export{Me as F,el as S,Zt as W,$t as a,yt as b,xt as j,qt as t};
