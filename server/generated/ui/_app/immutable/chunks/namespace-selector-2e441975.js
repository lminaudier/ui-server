import{S as re,i as oe,s as ce,l as T,a as Y,m as I,n as D,c as Z,h as b,p as c,R as L,a1 as x,b as A,M as S,Y as $,T as P,Z as ve,f as R,g as ee,t as F,d as le,G as ke,O as pe,N as he,C as te,V as ae,r as z,u as H,v as X,w as j,x as U,y as q,B as G,W as Q,E as w,a3 as Ee}from"./index-9d69cec5.js";import{c as Le}from"./copy-to-clipboard-b3dfa6fa.js";import{I as J}from"./icon-c89f2c4c.js";import{a as ne}from"./nav-open-01a664ea.js";import{a as Se}from"./new-feature-tags-1c180ba9.js";import{T as Ne}from"./tooltip-7d2e6ead.js";function ie(a){let e,l;return{c(){e=T("label"),l=z(a[3]),this.h()},l(t){e=I(t,"LABEL",{for:!0,class:!0});var n=D(e);l=H(n,a[3]),n.forEach(b),this.h()},h(){c(e,"for",a[2]),c(e,"class","svelte-v1vu2b")},m(t,n){A(t,e,n),S(e,l)},p(t,n){n&8&&X(l,t[3]),n&4&&c(e,"for",t[2])},d(t){t&&b(e)}}}function se(a){let e,l,t;return l=new J({props:{name:a[4]}}),{c(){e=T("span"),j(l.$$.fragment),this.h()},l(n){e=I(n,"SPAN",{class:!0});var i=D(e);U(l.$$.fragment,i),i.forEach(b),this.h()},h(){c(e,"class","icon-container svelte-v1vu2b")},m(n,i){A(n,e,i),q(l,e,null),t=!0},p(n,i){const f={};i&16&&(f.name=n[4]),l.$set(f)},i(n){t||(R(l.$$.fragment,n),t=!0)},o(n){F(l.$$.fragment,n),t=!1},d(n){n&&b(e),G(l)}}}function Te(a){let e,l,t,n,i;return l=new J({props:{name:"close"}}),{c(){e=T("div"),j(l.$$.fragment),this.h()},l(f){e=I(f,"DIV",{class:!0,"data-cy":!0});var r=D(e);U(l.$$.fragment,r),r.forEach(b),this.h()},h(){c(e,"class","mr-2 flex h-full h-6 w-6 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200"),c(e,"data-cy","clear-input")},m(f,r){A(f,e,r),q(l,e,null),t=!0,n||(i=P(e,"click",a[19]),n=!0)},p:w,i(f){t||(R(l.$$.fragment,f),t=!0)},o(f){F(l.$$.fragment,f),t=!1},d(f){f&&b(e),G(l),n=!1,i()}}}function Ie(a){let e,l,t;return l=new J({props:{name:"lock"}}),{c(){e=T("div"),j(l.$$.fragment),this.h()},l(n){e=I(n,"DIV",{class:!0});var i=D(e);U(l.$$.fragment,i),i.forEach(b),this.h()},h(){c(e,"class","flex h-full w-9 items-center justify-center")},m(n,i){A(n,e,i),q(l,e,null),t=!0},p:w,i(n){t||(R(l.$$.fragment,n),t=!0)},o(n){F(l.$$.fragment,n),t=!1},d(n){n&&b(e),G(l)}}}function Re(a){let e,l,t,n,i;return l=new J({props:{name:a[17]?"checkmark":"copy"}}),{c(){e=T("div"),j(l.$$.fragment),this.h()},l(f){e=I(f,"DIV",{class:!0});var r=D(e);U(l.$$.fragment,r),r.forEach(b),this.h()},h(){c(e,"class","copy-icon-container svelte-v1vu2b")},m(f,r){A(f,e,r),q(l,e,null),t=!0,n||(i=P(e,"click",a[29]),n=!0)},p(f,r){const d={};r&131072&&(d.name=f[17]?"checkmark":"copy"),l.$set(d)},i(f){t||(R(l.$$.fragment,f),t=!0)},o(f){F(l.$$.fragment,f),t=!1},d(f){f&&b(e),G(l),n=!1,i()}}}function ue(a){let e,l,t=a[1].length+"",n,i,f;return{c(){e=T("span"),l=T("span"),n=z(t),i=z("\xA0/\xA0"),f=z(a[13]),this.h()},l(r){e=I(r,"SPAN",{class:!0});var d=D(e);l=I(d,"SPAN",{class:!0});var m=D(l);n=H(m,t),m.forEach(b),i=H(d,"\xA0/\xA0"),f=H(d,a[13]),d.forEach(b),this.h()},h(){c(l,"class","text-blue-700 svelte-v1vu2b"),L(l,"warn",a[13]-a[1].length<=5),L(l,"error",a[13]===a[1].length),c(e,"class","count svelte-v1vu2b")},m(r,d){A(r,e,d),S(e,l),S(l,n),S(e,i),S(e,f)},p(r,d){d&2&&t!==(t=r[1].length+"")&&X(n,t),d&8194&&L(l,"warn",r[13]-r[1].length<=5),d&8194&&L(l,"error",r[13]===r[1].length),d&8192&&X(f,r[13])},d(r){r&&b(e)}}}function fe(a){let e,l;return{c(){e=T("span"),l=z(a[12]),this.h()},l(t){e=I(t,"SPAN",{class:!0});var n=D(e);l=H(n,a[12]),n.forEach(b),this.h()},h(){c(e,"class","mt-1 text-xs text-red-700")},m(t,n){A(t,e,n),S(e,l)},p(t,n){n&4096&&X(l,t[12])},d(t){t&&b(e)}}}function De(a){let e,l,t,n,i,f,r,d,m,_,V,C,y,O,p,B,M,g=a[3]&&ie(a),h=a[4]&&se(a);const W=[Re,Ie,Te],N=[];function K(u,o){return u[7]?0:u[0]?1:u[8]&&u[1]?2:-1}~(m=K(a))&&(_=N[m]=W[m](a));let v=a[13]&&ue(a),k=a[12]&&fe(a);return{c(){e=T("div"),g&&g.c(),l=Y(),t=T("div"),h&&h.c(),n=Y(),i=T("input"),d=Y(),_&&_.c(),V=Y(),v&&v.c(),y=Y(),k&&k.c(),this.h()},l(u){e=I(u,"DIV",{class:!0});var o=D(e);g&&g.l(o),l=Z(o),t=I(o,"DIV",{class:!0});var E=D(t);h&&h.l(E),n=Z(E),i=I(E,"INPUT",{class:!0,"data-lpignore":!0,maxlength:!0,placeholder:!0,id:!0,name:!0,autocomplete:!0,spellcheck:!0}),d=Z(E),_&&_.l(E),V=Z(E),v&&v.l(E),E.forEach(b),y=Z(o),k&&k.l(o),o.forEach(b),this.h()},h(){c(i,"class","m-2 block w-full bg-white focus:outline-none svelte-v1vu2b"),i.disabled=a[0],c(i,"data-lpignore","true"),c(i,"maxlength",f=a[13]>0?a[13]:void 0),c(i,"placeholder",a[5]),c(i,"id",a[2]),c(i,"name",a[6]),c(i,"autocomplete",r=a[10]?"on":"off"),c(i,"spellcheck",a[14]),L(i,"disabled",a[0]),c(t,"class",C="input-container "+a[9]+" svelte-v1vu2b"),L(t,"disabled",a[0]),L(t,"unroundRight",a[15]),L(t,"unroundLeft",a[16]),L(t,"invalid",!a[11]),c(e,"class",O=x(a[22].class)+" svelte-v1vu2b")},m(u,o){A(u,e,o),g&&g.m(e,null),S(e,l),S(e,t),h&&h.m(t,null),S(t,n),S(t,i),$(i,a[1]),S(t,d),~m&&N[m].m(t,null),S(t,V),v&&v.m(t,null),S(e,y),k&&k.m(e,null),p=!0,B||(M=[P(i,"input",a[28]),P(i,"input",a[24]),P(i,"change",a[25]),P(i,"focus",a[26]),P(i,"blur",a[27]),ve(a[18].call(null,i))],B=!0)},p(u,[o]){u[3]?g?g.p(u,o):(g=ie(u),g.c(),g.m(e,l)):g&&(g.d(1),g=null),u[4]?h?(h.p(u,o),o&16&&R(h,1)):(h=se(u),h.c(),R(h,1),h.m(t,n)):h&&(ee(),F(h,1,1,()=>{h=null}),le()),(!p||o&1)&&(i.disabled=u[0]),(!p||o&8192&&f!==(f=u[13]>0?u[13]:void 0))&&c(i,"maxlength",f),(!p||o&32)&&c(i,"placeholder",u[5]),(!p||o&4)&&c(i,"id",u[2]),(!p||o&64)&&c(i,"name",u[6]),(!p||o&1024&&r!==(r=u[10]?"on":"off"))&&c(i,"autocomplete",r),(!p||o&16384)&&c(i,"spellcheck",u[14]),o&2&&i.value!==u[1]&&$(i,u[1]),o&1&&L(i,"disabled",u[0]);let E=m;m=K(u),m===E?~m&&N[m].p(u,o):(_&&(ee(),F(N[E],1,1,()=>{N[E]=null}),le()),~m?(_=N[m],_?_.p(u,o):(_=N[m]=W[m](u),_.c()),R(_,1),_.m(t,V)):_=null),u[13]?v?v.p(u,o):(v=ue(u),v.c(),v.m(t,null)):v&&(v.d(1),v=null),(!p||o&512&&C!==(C="input-container "+u[9]+" svelte-v1vu2b"))&&c(t,"class",C),o&513&&L(t,"disabled",u[0]),o&33280&&L(t,"unroundRight",u[15]),o&66048&&L(t,"unroundLeft",u[16]),o&2560&&L(t,"invalid",!u[11]),u[12]?k?k.p(u,o):(k=fe(u),k.c(),k.m(e,null)):k&&(k.d(1),k=null),(!p||o&4194304&&O!==(O=x(u[22].class)+" svelte-v1vu2b"))&&c(e,"class",O)},i(u){p||(R(h),R(_),p=!0)},o(u){F(h),F(_),p=!1},d(u){u&&b(e),g&&g.d(),h&&h.d(),~m&&N[m].d(),v&&v.d(),k&&k.d(),B=!1,ke(M)}}}function Fe(a,e,l){let t,{id:n}=e,{value:i}=e,{label:f=""}=e,{icon:r=null}=e,{placeholder:d=""}=e,{name:m=n}=e,{copyable:_=!1}=e,{disabled:V=!1}=e,{clearable:C=!1}=e,{theme:y="light"}=e,{autocomplete:O=!1}=e,{valid:p=!0}=e,{hintText:B=""}=e,{maxLength:M=0}=e,{spellcheck:g=null}=e,{unroundRight:h=!1}=e,{unroundLeft:W=!1}=e,{autoFocus:N=!1}=e;function K(s){N&&s.focus()}const v=pe();function k(){l(1,i=""),v("clear",{})}const{copy:u,copied:o}=Le();he(a,o,s=>l(17,t=s));function E(s){Q.call(this,a,s)}function me(s){Q.call(this,a,s)}function de(s){Q.call(this,a,s)}function _e(s){Q.call(this,a,s)}function be(){i=this.value,l(1,i)}const ge=s=>u(s,i);return a.$$set=s=>{l(22,e=te(te({},e),ae(s))),"id"in s&&l(2,n=s.id),"value"in s&&l(1,i=s.value),"label"in s&&l(3,f=s.label),"icon"in s&&l(4,r=s.icon),"placeholder"in s&&l(5,d=s.placeholder),"name"in s&&l(6,m=s.name),"copyable"in s&&l(7,_=s.copyable),"disabled"in s&&l(0,V=s.disabled),"clearable"in s&&l(8,C=s.clearable),"theme"in s&&l(9,y=s.theme),"autocomplete"in s&&l(10,O=s.autocomplete),"valid"in s&&l(11,p=s.valid),"hintText"in s&&l(12,B=s.hintText),"maxLength"in s&&l(13,M=s.maxLength),"spellcheck"in s&&l(14,g=s.spellcheck),"unroundRight"in s&&l(15,h=s.unroundRight),"unroundLeft"in s&&l(16,W=s.unroundLeft),"autoFocus"in s&&l(23,N=s.autoFocus)},a.$$.update=()=>{a.$$.dirty&129&&l(0,V=V||_)},e=ae(e),[V,i,n,f,r,d,m,_,C,y,O,p,B,M,g,h,W,t,K,k,u,o,e,N,E,me,de,_e,be,ge]}class qe extends re{constructor(e){super(),oe(this,e,Fe,De,ce,{id:2,value:1,label:3,icon:4,placeholder:5,name:6,copyable:7,disabled:0,clearable:8,theme:9,autocomplete:10,valid:11,hintText:12,maxLength:13,spellcheck:14,unroundRight:15,unroundLeft:16,autoFocus:23})}}function Ve(a){let e,l,t,n,i;return l=new J({props:{name:"namespace-switcher",width:32,height:32,class:"mx-2 inline cursor-pointer rounded-full border border-gray-900 shadow-sm transition-all hover:scale-105"}}),{c(){e=T("button"),j(l.$$.fragment),this.h()},l(f){e=I(f,"BUTTON",{class:!0,"aria-label":!0,"data-cy":!0});var r=D(e);U(l.$$.fragment,r),r.forEach(b),this.h()},h(){c(e,"class","relative"),c(e,"aria-label","Namespace Select"),c(e,"data-cy","namespace-select-button")},m(f,r){A(f,e,r),q(l,e,null),t=!0,n||(i=P(e,"click",a[0]),n=!0)},p:w,i(f){t||(R(l.$$.fragment,f),t=!0)},o(f){F(l.$$.fragment,f),t=!1},d(f){f&&b(e),G(l),n=!1,i()}}}function Ae(a){let e,l;return e=new Ne({props:{text:"Select a namespace",$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){j(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,n){q(e,t,n),l=!0},p(t,[n]){const i={};n&4&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Pe(a,e,l){let t;he(a,ne,i=>l(1,t=i));function n(){Ee(ne,t=!t,t),Se("namespaceSelector")}return[n]}class Ge extends re{constructor(e){super(),oe(this,e,Pe,Ae,ce,{})}}export{qe as I,Ge as N};