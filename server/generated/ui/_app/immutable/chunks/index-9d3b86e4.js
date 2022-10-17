import{S as ge,i as Ee,s as he,w as G,x as J,y as V,f as g,t as $,B as X,I as ze,J as Ke,K as Me,L as Ge,l as k,r as H,a as P,m as T,n as v,u as N,h as i,c as I,p as S,b,M as d,E as we,e as Ne,g as pe,d as de,N as je,T as q,U as be,as as ke,H as Je,v as ee,G as Ve}from"./index-de024f11.js";import{T as Xe,a as Ye,b as Ze}from"./table-row-83568b70.js";import{p as xe}from"./stores-d8da1c6f.js";import{h as et,j as tt,k as lt,f as M,l as qe}from"./format-date-eb94f038.js";import{n as st}from"./route-for-82ed5238.js";import{u as ot}from"./pagination-34bcf13c.js";import{t as Le}from"./workflow-service-229899c9.js";import{c as rt,d as ye,e as at,f as nt,g as ft}from"./is-44021919.js";import{W as ut}from"./workflow-status-f6aafad6.js";import{I as Oe}from"./icon-9e859714.js";import{c as it}from"./copy-to-clipboard-da829ffe.js";function ct(o){let e;const s=o[1].default,t=ze(s,o,o[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&4)&&Ke(t,s,l,l[2],e?Ge(s,l[2],a,null):Me(l[2]),null)},i(l){e||(g(t,l),e=!0)},o(l){$(t,l),e=!1},d(l){t&&t.d(l)}}}function mt(o){let e,s,t,l,a,r,n,u,m,W,F,C,_,A,h,E,R;return{c(){e=k("th"),s=H("Status"),t=P(),l=k("th"),a=H("Workflow ID"),r=P(),n=k("th"),u=H("Type"),m=P(),W=k("th"),F=H("Start"),C=P(),_=k("th"),A=H("End"),h=P(),E=k("th"),R=H("Summary"),this.h()},l(c){e=T(c,"TH",{class:!0});var w=v(e);s=N(w,"Status"),w.forEach(i),t=I(c),l=T(c,"TH",{class:!0});var y=v(l);a=N(y,"Workflow ID"),y.forEach(i),r=I(c),n=T(c,"TH",{class:!0});var j=v(n);u=N(j,"Type"),j.forEach(i),m=I(c),W=T(c,"TH",{class:!0});var B=v(W);F=N(B,"Start"),B.forEach(i),C=I(c),_=T(c,"TH",{class:!0});var D=v(_);A=N(D,"End"),D.forEach(i),h=I(c),E=T(c,"TH",{class:!0,colspan:!0});var O=v(E);R=N(O,"Summary"),O.forEach(i),this.h()},h(){S(e,"class","hidden w-48 md:table-cell"),S(l,"class","hidden md:table-cell md:w-60 xl:w-auto"),S(n,"class","hidden md:table-cell md:w-60 xl:w-80"),S(W,"class","hidden xl:table-cell xl:w-60"),S(_,"class","hidden xl:table-cell xl:w-60"),S(E,"class","table-cell md:hidden"),S(E,"colspan","3")},m(c,w){b(c,e,w),d(e,s),b(c,t,w),b(c,l,w),d(l,a),b(c,r,w),b(c,n,w),d(n,u),b(c,m,w),b(c,W,w),d(W,F),b(c,C,w),b(c,_,w),d(_,A),b(c,h,w),b(c,E,w),d(E,R)},p:we,d(c){c&&i(e),c&&i(t),c&&i(l),c&&i(r),c&&i(n),c&&i(m),c&&i(W),c&&i(C),c&&i(_),c&&i(h),c&&i(E)}}}function _t(o){let e,s;return e=new Ye({props:{slot:"headers",$$slots:{default:[mt]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const a={};l&4&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function pt(o){let e,s;return e=new Xe({props:{class:"w-full md:table-fixed",updating:o[0],$$slots:{headers:[_t],default:[ct]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,[l]){const a={};l&1&&(a.updating=t[0]),l&4&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function dt(o,e,s){let{$$slots:t={},$$scope:l}=e,{updating:a=!1}=e;return o.$$set=r=>{"updating"in r&&s(0,a=r.updating),"$$scope"in r&&s(2,l=r.$$scope)},[a,t,l]}class Qt extends ge{constructor(e){super(),Ee(this,e,dt,pt,he,{updating:0})}}const ht=o=>{const e=[],s=()=>{t&&(e.push(t),t="")};let t="",l=0;for(;l<o.length;){const a=o[l];if(rt(a)){t+=a,s(),l++;continue}if(ye(a)){const r=`${o[l]}${o[l+1]}`,n=`${o[l]}${o[l+1]}${o[l+2]}`;if(ye(n)){s(),t+=n,l+=3;continue}else if(ye(r)){s(),t+=r,l+=2;continue}else{s(),t+=a,l++;continue}}if(at(a)||nt(a)){s(),l++;continue}t+=a,l++}return s(),e},Te=o=>e=>e.toLowerCase()===o.toLowerCase(),_e=(o,e)=>o[e+2],wt=o=>{if(!!o){for(const e of lt)if(o[e])return{[e]:o[e]}}},bt=Te("WorkflowType"),kt=Te("WorkflowId"),Tt=Te("StartTime"),vt=Te("ExecutionStatus"),yt=o=>{const e=ht(o),s={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(kt(t)&&(s.workflowId=_e(e,l)),bt(t)&&(s.workflowType=_e(e,l)),vt(t)){const a=_e(e,l);ft(a)&&(s.executionStatus=a)}if(Tt(t)){const a=_e(e,l);try{const r=et(a),n=wt(r);s.timeRange=tt(n)}catch(r){console.error("Error parsing StartTime from query",r)}}}),s};function Ae(o){let e,s,t,l,a,r=o[1]&&Be(o),n=o[2]&&Qe(o);return{c(){e=k("div"),r&&r.c(),s=P(),n&&n.c(),this.h()},l(u){e=T(u,"DIV",{class:!0});var m=v(e);r&&r.l(m),s=I(m),n&&n.l(m),m.forEach(i),this.h()},h(){S(e,"class","copy-or-filter svelte-uzo6ow")},m(u,m){b(u,e,m),r&&r.m(e,null),d(e,s),n&&n.m(e,null),t=!0,l||(a=q(e,"click",be(ke(we))),l=!0)},p(u,m){u[1]?r?(r.p(u,m),m&2&&g(r,1)):(r=Be(u),r.c(),g(r,1),r.m(e,s)):r&&(pe(),$(r,1,1,()=>{r=null}),de()),u[2]?n?(n.p(u,m),m&4&&g(n,1)):(n=Qe(u),n.c(),g(n,1),n.m(e,null)):n&&(pe(),$(n,1,1,()=>{n=null}),de())},i(u){t||(g(r),g(n),t=!0)},o(u){$(r),$(n),t=!1},d(u){u&&i(e),r&&r.d(),n&&n.d(),l=!1,a()}}}function Be(o){let e,s=o[5],t,l,a,r=Ue(o);return{c(){e=k("button"),r.c()},l(n){e=T(n,"BUTTON",{});var u=v(e);r.l(u),u.forEach(i)},m(n,u){b(n,e,u),r.m(e,null),t=!0,l||(a=q(e,"click",be(ke(function(){Je(o[4])&&o[4].apply(this,arguments)}))),l=!0)},p(n,u){o=n,u&32&&he(s,s=o[5])?(pe(),$(r,1,1,we),de(),r=Ue(o),r.c(),g(r,1),r.m(e,null)):r.p(o,u)},i(n){t||(g(r),t=!0)},o(n){$(r),t=!1},d(n){n&&i(e),r.d(n),l=!1,a()}}}function Ue(o){let e,s;return e=new Oe({props:{name:"filter",class:"h-4 w-4 rounded-sm "+(o[5]?"bg-gray-900 text-white":"")}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,l){const a={};l&32&&(a.class="h-4 w-4 rounded-sm "+(t[5]?"bg-gray-900 text-white":"")),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function Qe(o){let e,s,t,l,a;return s=new Oe({props:{name:o[6]?"checkmark":"copy",stroke:"#000"}}),{c(){e=k("button"),G(s.$$.fragment)},l(r){e=T(r,"BUTTON",{});var n=v(e);J(s.$$.fragment,n),n.forEach(i)},m(r,n){b(r,e,n),V(s,e,null),t=!0,l||(a=q(e,"click",be(ke(o[9]))),l=!0)},p(r,n){const u={};n&64&&(u.name=r[6]?"checkmark":"copy"),s.$set(u)},i(r){t||(g(s.$$.fragment,r),t=!0)},o(r){$(s.$$.fragment,r),t=!1},d(r){r&&i(e),X(s),l=!1,a()}}}function gt(o){let e,s,t=o[0]&&Ae(o);return{c(){t&&t.c(),e=Ne()},l(l){t&&t.l(l),e=Ne()},m(l,a){t&&t.m(l,a),b(l,e,a),s=!0},p(l,[a]){l[0]?t?(t.p(l,a),a&1&&g(t,1)):(t=Ae(l),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(pe(),$(t,1,1,()=>{t=null}),de())},i(l){s||(g(t),s=!0)},o(l){$(t),s=!1},d(l){t&&t.d(l),l&&i(e)}}}function Et(o,e,s){let t,{show:l=!1}=e,{filterable:a=!0}=e,{copyable:r=!0}=e,{content:n}=e,{onFilter:u=we}=e,{filtered:m=!1}=e;const{copy:W,copied:F}=it(700);je(o,F,_=>s(6,t=_));const C=_=>W(_,n);return o.$$set=_=>{"show"in _&&s(0,l=_.show),"filterable"in _&&s(1,a=_.filterable),"copyable"in _&&s(2,r=_.copyable),"content"in _&&s(3,n=_.content),"onFilter"in _&&s(4,u=_.onFilter),"filtered"in _&&s(5,m=_.filtered)},[l,a,r,n,u,m,t,W,F,C]}class Re extends ge{constructor(e){super(),Ee(this,e,Et,gt,he,{show:0,filterable:1,copyable:2,content:3,onFilter:4,filtered:5})}}function St(o){var $e,We,De;let e,s,t,l,a,r=o[0].id+"",n,u,m,W,F,C=M(o[0].startTime,o[1])+"",_,A,h,E,R,c,w,y=o[0].name+"",j,B,D,O,z,te=M(o[0].endTime,o[1])+"",fe,ue,Y,le,se=M(o[0].startTime,o[1])+"",ie,ce,Z,oe,re=M(o[0].endTime,o[1])+"",me,U,ve,Se;return s=new ut({props:{status:o[0].status,delay:qe(o[0].startTime)}}),m=new Re({props:{show:o[2],content:o[0].id,filterable:!1}}),D=new Re({props:{show:o[2],content:o[0].name,onFilter:o[12],filtered:(De=(We=($e=o[4].url)==null?void 0:$e.searchParams)==null?void 0:We.get("query"))==null?void 0:De.includes(o[0].name)}}),{c(){e=k("td"),G(s.$$.fragment),t=P(),l=k("td"),a=k("span"),n=H(r),u=P(),G(m.$$.fragment),W=P(),F=k("p"),_=H(C),A=P(),h=k("td"),E=k("h3"),R=H("Workflow Name:"),c=P(),w=k("span"),j=H(y),B=P(),G(D.$$.fragment),O=P(),z=k("p"),fe=H(te),ue=P(),Y=k("td"),le=k("p"),ie=H(se),ce=P(),Z=k("td"),oe=k("p"),me=H(re),this.h()},l(f){e=T(f,"TD",{});var p=v(e);J(s.$$.fragment,p),p.forEach(i),t=I(f),l=T(f,"TD",{class:!0});var Q=v(l);a=T(Q,"SPAN",{class:!0});var x=v(a);n=N(x,r),x.forEach(i),u=I(Q),J(m.$$.fragment,Q),W=I(Q),F=T(Q,"P",{class:!0});var K=v(F);_=N(K,C),K.forEach(i),Q.forEach(i),A=I(f),h=T(f,"TD",{class:!0});var L=v(h);E=T(L,"H3",{class:!0});var ae=v(E);R=N(ae,"Workflow Name:"),ae.forEach(i),c=I(L),w=T(L,"SPAN",{class:!0});var ne=v(w);j=N(ne,y),ne.forEach(i),B=I(L),J(D.$$.fragment,L),O=I(L),z=T(L,"P",{class:!0});var Fe=v(z);fe=N(Fe,te),Fe.forEach(i),L.forEach(i),ue=I(f),Y=T(f,"TD",{class:!0});var Pe=v(Y);le=T(Pe,"P",{});var Ie=v(le);ie=N(Ie,se),Ie.forEach(i),Pe.forEach(i),ce=I(f),Z=T(f,"TD",{class:!0});var Ce=v(Z);oe=T(Ce,"P",{});var He=v(oe);me=N(He,re),He.forEach(i),Ce.forEach(i),this.h()},h(){S(a,"class","table-link svelte-si1lto"),S(F,"class","inline-time-cell svelte-si1lto"),S(l,"class","relative truncate"),S(E,"class","md:hidden"),S(w,"class","table-link svelte-si1lto"),S(z,"class","inline-time-cell svelte-si1lto"),S(h,"class","relative truncate"),S(Y,"class","time-cell svelte-si1lto"),S(Z,"class","time-cell svelte-si1lto")},m(f,p){b(f,e,p),V(s,e,null),b(f,t,p),b(f,l,p),d(l,a),d(a,n),d(l,u),V(m,l,null),d(l,W),d(l,F),d(F,_),b(f,A,p),b(f,h,p),d(h,E),d(E,R),d(h,c),d(h,w),d(w,j),d(h,B),V(D,h,null),d(h,O),d(h,z),d(z,fe),b(f,ue,p),b(f,Y,p),d(Y,le),d(le,ie),b(f,ce,p),b(f,Z,p),d(Z,oe),d(oe,me),U=!0,ve||(Se=[q(l,"mouseover",o[7]),q(l,"focus",o[8]),q(l,"mouseleave",o[9]),q(l,"blur",o[10]),q(w,"click",be(ke(o[11]))),q(h,"mouseover",o[13]),q(h,"focus",o[14]),q(h,"mouseleave",o[15]),q(h,"blur",o[16])],ve=!0)},p(f,p){var L,ae,ne;const Q={};p&1&&(Q.status=f[0].status),p&1&&(Q.delay=qe(f[0].startTime)),s.$set(Q),(!U||p&1)&&r!==(r=f[0].id+"")&&ee(n,r);const x={};p&4&&(x.show=f[2]),p&1&&(x.content=f[0].id),m.$set(x),(!U||p&3)&&C!==(C=M(f[0].startTime,f[1])+"")&&ee(_,C),(!U||p&1)&&y!==(y=f[0].name+"")&&ee(j,y);const K={};p&4&&(K.show=f[2]),p&1&&(K.content=f[0].name),p&1&&(K.onFilter=f[12]),p&17&&(K.filtered=(ne=(ae=(L=f[4].url)==null?void 0:L.searchParams)==null?void 0:ae.get("query"))==null?void 0:ne.includes(f[0].name)),D.$set(K),(!U||p&3)&&te!==(te=M(f[0].endTime,f[1])+"")&&ee(fe,te),(!U||p&3)&&se!==(se=M(f[0].startTime,f[1])+"")&&ee(ie,se),(!U||p&3)&&re!==(re=M(f[0].endTime,f[1])+"")&&ee(me,re)},i(f){U||(g(s.$$.fragment,f),g(m.$$.fragment,f),g(D.$$.fragment,f),U=!0)},o(f){$(s.$$.fragment,f),$(m.$$.fragment,f),$(D.$$.fragment,f),U=!1},d(f){f&&i(e),X(s),f&&i(t),f&&i(l),X(m),f&&i(A),f&&i(h),X(D),f&&i(ue),f&&i(Y),f&&i(ce),f&&i(Z),ve=!1,Ve(Se)}}}function $t(o){let e,s;return e=new Ze({props:{href:o[3],class:"workflow-summary-row",$$slots:{default:[St]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){V(e,t,l),s=!0},p(t,[l]){const a={};l&8&&(a.href=t[3]),l&131095&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function Wt(o,e,s){let t,l;je(o,xe,y=>s(4,l=y));let{namespace:a}=e,{workflow:r}=e,{timeFormat:n}=e,u=!1;const m=y=>{const j=Le({timeRange:"All"}),B=l.url.searchParams.get("query"),D=yt(B!=null?B:j),O=(D==null?void 0:D.workflowType)===y?"":y,z=Le({...D,workflowType:O});ot({url:l.url,parameter:"query",value:z,allowEmpty:!0})},W=()=>s(2,u=!0),F=()=>s(2,u=!0),C=()=>s(2,u=!1),_=()=>s(2,u=!1),A=()=>m(r.name),h=()=>m(r.name),E=()=>s(2,u=!0),R=()=>s(2,u=!0),c=()=>s(2,u=!1),w=()=>s(2,u=!1);return o.$$set=y=>{"namespace"in y&&s(6,a=y.namespace),"workflow"in y&&s(0,r=y.workflow),"timeFormat"in y&&s(1,n=y.timeFormat)},o.$$.update=()=>{o.$$.dirty&65&&s(3,t=st({namespace:a,workflow:r.id,run:r.runId}))},[r,n,u,t,l,m,a,W,F,C,_,A,h,E,R,c,w]}class Rt extends ge{constructor(e){super(),Ee(this,e,Wt,$t,he,{namespace:6,workflow:0,timeFormat:1})}}var jt=Dt;function Dt(o,e,s,t){var l,a,r;return function(){if(r=this,a=Array.prototype.slice.call(arguments),l&&(s||t))return;if(!s)return m(),l=setTimeout(u,e),l;l=setTimeout(m,e),o.apply(r,a);function u(){m(),o.apply(r,a)}function m(){clearTimeout(l),l=null}}}export{Qt as W,Rt as a,jt as j,yt as t};
