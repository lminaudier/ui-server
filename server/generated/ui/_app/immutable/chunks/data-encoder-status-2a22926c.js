import{S as oe,i as le,s as ae,H as ee,w as N,x as R,y as V,f as w,t as C,B as H,N as z,l as k,r as M,m as E,n as S,u as L,h as p,p as $,b as T,M as h,E as K,a as A,c as P,g as G,d as J,a3 as q,Y as U,T as j,v as Q,e as F}from"./index-de024f11.js";import{I as B}from"./icon-9e859714.js";import{d as ie,w as fe}from"./index-e5247e3a.js";import{p as ue}from"./stores-d8da1c6f.js";import{d as X,l as de}from"./data-converter-config-d0754e13.js";import{d as Y,l as pe,v as me,a as _e}from"./is-http-0cd19773.js";import{a as $e}from"./auth-user-88f31028.js";import{T as Z}from"./tooltip-0d63ba32.js";import{M as he}from"./modal-61aefed4.js";import{B as W}from"./button-3bc39b55.js";const ce=ie([ue,Y,pe,X,de,$e],([a,e,t,n,r,o])=>{var b,y,v,I,D,O;const l=a.params.namespace,c=(v=(y=(b=a==null?void 0:a.stuff)==null?void 0:b.settings)==null?void 0:y.codec)==null?void 0:v.endpoint,s=e||c,i=(O=(D=(I=a.stuff)==null?void 0:I.settings)==null?void 0:D.codec)==null?void 0:O.passAccessToken,f=o==null?void 0:o.accessToken;return{namespace:l,settingsEndpoint:c,endpoint:s,passAccessToken:i,accessToken:f,hasNotRequested:s?t==="notRequested":r==="notRequested",hasError:s?t==="error":r==="error",hasSuccess:s?t==="success":r==="success",hasEndpointAndPortConfigured:s&&n,hasEndpointOrPortConfigured:s||n}}),x=fe(!1);function ge(a){let e,t;return{c(){e=k("h3"),t=M("Data Encoder"),this.h()},l(n){e=E(n,"H3",{slot:!0,"data-cy":!0});var r=S(e);t=L(r,"Data Encoder"),r.forEach(p),this.h()},h(){$(e,"slot","title"),$(e,"data-cy","data-encoder-title")},m(n,r){T(n,e,r),h(e,t)},p:K,d(n){n&&p(e)}}}function be(a){let e,t,n,r,o,l,c,s,i,f,u,d;s=new W({props:{variant:"secondary",dataCy:"data-encoder-set-endpoint",$$slots:{default:[ke]},$$scope:{ctx:a}}}),s.$on("click",a[8]);let m=a[4]&&te(a);return{c(){e=k("div"),t=k("h3"),n=M("Remote Codec Endpoint"),r=A(),o=k("div"),l=k("input"),c=A(),N(s.$$.fragment),i=A(),m&&m.c(),this.h()},l(_){e=E(_,"DIV",{class:!0});var g=S(e);t=E(g,"H3",{class:!0,"data-cy":!0});var b=S(t);n=L(b,"Remote Codec Endpoint"),b.forEach(p),r=P(g),o=E(g,"DIV",{class:!0});var y=S(o);l=E(y,"INPUT",{class:!0,placeholder:!0,"data-cy":!0}),c=P(y),R(s.$$.fragment,y),y.forEach(p),i=P(g),m&&m.l(g),g.forEach(p),this.h()},h(){$(t,"class","font-medium"),$(t,"data-cy","data-encoder-endpoint-title"),$(l,"class","block w-80 rounded-md border border-gray-200 p-2"),$(l,"placeholder","Endpoint"),$(l,"data-cy","data-encoder-endpoint-input"),$(o,"class","flex items-center justify-between"),$(e,"class","mb-4")},m(_,g){T(_,e,g),h(e,t),h(t,n),h(e,r),h(e,o),h(o,l),U(l,a[2]),h(o,c),V(s,o,null),h(e,i),m&&m.m(e,null),f=!0,u||(d=j(l,"input",a[13]),u=!0)},p(_,g){g&4&&l.value!==_[2]&&U(l,_[2]);const b={};g&131072&&(b.$$scope={dirty:g,ctx:_}),s.$set(b),_[4]?m?m.p(_,g):(m=te(_),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i(_){f||(w(s.$$.fragment,_),f=!0)},o(_){C(s.$$.fragment,_),f=!1},d(_){_&&p(e),H(s),m&&m.d(),u=!1,d()}}}function ve(a){let e,t,n,r,o,l,c,s,i,f;const u=[ye,Ee],d=[];function m(b,y){return b[6]?0:1}l=m(a),c=d[l]=u[l](a);let _=a[4]&&ne(a),g=a[7].settingsEndpoint&&re(a);return{c(){e=k("div"),t=k("h3"),n=M("Remote Codec Endpoint"),r=A(),o=k("div"),c.c(),s=A(),_&&_.c(),i=A(),g&&g.c(),this.h()},l(b){e=E(b,"DIV",{class:!0});var y=S(e);t=E(y,"H3",{class:!0,"data-cy":!0});var v=S(t);n=L(v,"Remote Codec Endpoint"),v.forEach(p),r=P(y),o=E(y,"DIV",{class:!0});var I=S(o);c.l(I),I.forEach(p),s=P(y),_&&_.l(y),i=P(y),g&&g.l(y),y.forEach(p),this.h()},h(){$(t,"class","font-medium"),$(t,"data-cy","data-encoder-endpoint-title"),$(o,"class","flex items-center justify-between"),$(e,"class","mb-4")},m(b,y){T(b,e,y),h(e,t),h(t,n),h(e,r),h(e,o),d[l].m(o,null),h(e,s),_&&_.m(e,null),h(e,i),g&&g.m(e,null),f=!0},p(b,y){let v=l;l=m(b),l===v?d[l].p(b,y):(G(),C(d[v],1,1,()=>{d[v]=null}),J(),c=d[l],c?c.p(b,y):(c=d[l]=u[l](b),c.c()),w(c,1),c.m(o,null)),b[4]?_?_.p(b,y):(_=ne(b),_.c(),_.m(e,i)):_&&(_.d(1),_=null),b[7].settingsEndpoint?g?g.p(b,y):(g=re(b),g.c(),g.m(e,null)):g&&(g.d(1),g=null)},i(b){f||(w(c),f=!0)},o(b){C(c),f=!1},d(b){b&&p(e),d[l].d(),_&&_.d(),g&&g.d()}}}function ke(a){let e;return{c(){e=M("Set")},l(t){e=L(t,"Set")},m(t,n){T(t,e,n)},d(t){t&&p(e)}}}function te(a){let e,t;return{c(){e=k("small"),t=M(a[4]),this.h()},l(n){e=E(n,"SMALL",{"data-cy":!0,class:!0});var r=S(e);t=L(r,a[4]),r.forEach(p),this.h()},h(){$(e,"data-cy","data-encoder-endpoint-error"),$(e,"class","text-red-700")},m(n,r){T(n,e,r),h(e,t)},p(n,r){r&16&&Q(t,n[4])},d(n){n&&p(e)}}}function Ee(a){let e,t,n,r,o,l;return n=new W({props:{variant:"secondary",dataCy:"data-encoder-set-endpoint",$$slots:{default:[we]},$$scope:{ctx:a}}}),n.$on("click",a[8]),{c(){e=k("input"),t=A(),N(n.$$.fragment),this.h()},l(c){e=E(c,"INPUT",{class:!0,placeholder:!0,"data-cy":!0}),t=P(c),R(n.$$.fragment,c),this.h()},h(){$(e,"class","block w-80 rounded-md border border-gray-200 p-2"),$(e,"placeholder","Endpoint"),$(e,"data-cy","data-encoder-endpoint-input")},m(c,s){T(c,e,s),U(e,a[2]),T(c,t,s),V(n,c,s),r=!0,o||(l=j(e,"input",a[12]),o=!0)},p(c,s){s&4&&e.value!==c[2]&&U(e,c[2]);const i={};s&131072&&(i.$$scope={dirty:s,ctx:c}),n.$set(i)},i(c){r||(w(n.$$.fragment,c),r=!0)},o(c){C(n.$$.fragment,c),r=!1},d(c){c&&p(e),c&&p(t),H(n,c),o=!1,l()}}}function ye(a){let e,t=a[7].endpoint+"",n,r,o,l;return o=new W({props:{variant:"secondary",dataCy:"data-encoder-clear-endpoint",$$slots:{default:[Ce]},$$scope:{ctx:a}}}),o.$on("click",a[9]),{c(){e=k("p"),n=M(t),r=A(),N(o.$$.fragment),this.h()},l(c){e=E(c,"P",{"data-cy":!0});var s=S(e);n=L(s,t),s.forEach(p),r=P(c),R(o.$$.fragment,c),this.h()},h(){$(e,"data-cy","data-encoder-endpoint")},m(c,s){T(c,e,s),h(e,n),T(c,r,s),V(o,c,s),l=!0},p(c,s){(!l||s&128)&&t!==(t=c[7].endpoint+"")&&Q(n,t);const i={};s&131072&&(i.$$scope={dirty:s,ctx:c}),o.$set(i)},i(c){l||(w(o.$$.fragment,c),l=!0)},o(c){C(o.$$.fragment,c),l=!1},d(c){c&&p(e),c&&p(r),H(o,c)}}}function we(a){let e;return{c(){e=M("Set")},l(t){e=L(t,"Set")},m(t,n){T(t,e,n)},d(t){t&&p(e)}}}function Ce(a){let e;return{c(){e=M("Clear")},l(t){e=L(t,"Clear")},m(t,n){T(t,e,n)},d(t){t&&p(e)}}}function ne(a){let e,t;return{c(){e=k("small"),t=M(a[4]),this.h()},l(n){e=E(n,"SMALL",{"data-cy":!0,class:!0});var r=S(e);t=L(r,a[4]),r.forEach(p),this.h()},h(){$(e,"data-cy","data-encoder-endpoint-error"),$(e,"class","text-red-700")},m(n,r){T(n,e,r),h(e,t)},p(n,r){r&16&&Q(t,n[4])},d(n){n&&p(e)}}}function re(a){let e,t,n=a[7].settingsEndpoint+"",r,o,l,c,s,i,f=a[6]&&se();return{c(){e=k("div"),t=k("p"),r=M(n),o=A(),l=k("p"),c=M("Site setting"),s=A(),f&&f.c(),i=F(),this.h()},l(u){e=E(u,"DIV",{class:!0});var d=S(e);t=E(d,"P",{"data-cy":!0});var m=S(t);r=L(m,n),m.forEach(p),o=P(d),l=E(d,"P",{"data-cy":!0});var _=S(l);c=L(_,"Site setting"),_.forEach(p),d.forEach(p),s=P(u),f&&f.l(u),i=F(),this.h()},h(){$(t,"data-cy","data-encoder-site-endpoint"),$(l,"data-cy","data-encoder-site-settings"),$(e,"class","mt-4 flex items-center justify-between")},m(u,d){T(u,e,d),h(e,t),h(t,r),h(e,o),h(e,l),h(l,c),T(u,s,d),f&&f.m(u,d),T(u,i,d)},p(u,d){d&128&&n!==(n=u[7].settingsEndpoint+"")&&Q(r,n),u[6]?f||(f=se(),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null)},d(u){u&&p(e),u&&p(s),f&&f.d(u),u&&p(i)}}}function se(a){let e,t;return{c(){e=k("small"),t=M("Set endpoint overrides site setting endpoint."),this.h()},l(n){e=E(n,"SMALL",{class:!0,"data-cy":!0});var r=S(e);t=L(r,"Set endpoint overrides site setting endpoint."),r.forEach(p),this.h()},h(){$(e,"class","text-yellow-700"),$(e,"data-cy","data-encoder-endpoint-info")},m(n,r){T(n,e,r),h(e,t)},d(n){n&&p(e)}}}function Se(a){let e,t,n,r,o,l,c,s,i,f,u;return s=new W({props:{variant:"secondary",dataCy:"data-encoder-set-port",$$slots:{default:[Ie]},$$scope:{ctx:a}}}),s.$on("click",a[15]),{c(){e=k("div"),t=k("h3"),n=M("tctl plugin port"),r=A(),o=k("div"),l=k("input"),c=A(),N(s.$$.fragment),this.h()},l(d){e=E(d,"DIV",{class:!0});var m=S(e);t=E(m,"H3",{class:!0,"data-cy":!0});var _=S(t);n=L(_,"tctl plugin port"),_.forEach(p),r=P(m),o=E(m,"DIV",{class:!0});var g=S(o);l=E(g,"INPUT",{class:!0,placeholder:!0,"data-cy":!0}),c=P(g),R(s.$$.fragment,g),g.forEach(p),m.forEach(p),this.h()},h(){$(t,"class","font-medium"),$(t,"data-cy","data-encoder-port-title"),$(l,"class","block w-80 rounded-md border border-gray-200 p-2"),$(l,"placeholder","Port"),$(l,"data-cy","data-encoder-port-input"),$(o,"class","flex items-center justify-between"),$(e,"class","my-4")},m(d,m){T(d,e,m),h(e,t),h(t,n),h(e,r),h(e,o),h(o,l),U(l,a[3]),h(o,c),V(s,o,null),i=!0,f||(u=j(l,"input",a[14]),f=!0)},p(d,m){m&8&&l.value!==d[3]&&U(l,d[3]);const _={};m&131072&&(_.$$scope={dirty:m,ctx:d}),s.$set(_)},i(d){i||(w(s.$$.fragment,d),i=!0)},o(d){C(s.$$.fragment,d),i=!1},d(d){d&&p(e),H(s),f=!1,u()}}}function Te(a){let e,t,n,r,o,l,c,s,i,f;return i=new W({props:{variant:"secondary",dataCy:"data-encoder-clear-port",$$slots:{default:[De]},$$scope:{ctx:a}}}),i.$on("click",a[10]),{c(){e=k("div"),t=k("h3"),n=M("tctl plugin port"),r=A(),o=k("div"),l=k("p"),c=M(a[5]),s=A(),N(i.$$.fragment),this.h()},l(u){e=E(u,"DIV",{class:!0});var d=S(e);t=E(d,"H3",{class:!0,"data-cy":!0});var m=S(t);n=L(m,"tctl plugin port"),m.forEach(p),r=P(d),o=E(d,"DIV",{class:!0});var _=S(o);l=E(_,"P",{"data-cy":!0});var g=S(l);c=L(g,a[5]),g.forEach(p),s=P(_),R(i.$$.fragment,_),_.forEach(p),d.forEach(p),this.h()},h(){$(t,"class","font-medium"),$(t,"data-cy","data-encoder-port-title"),$(l,"data-cy","data-encoder-port"),$(o,"class","flex items-center justify-between"),$(e,"class","my-4")},m(u,d){T(u,e,d),h(e,t),h(t,n),h(e,r),h(e,o),h(o,l),h(l,c),h(o,s),V(i,o,null),f=!0},p(u,d){(!f||d&32)&&Q(c,u[5]);const m={};d&131072&&(m.$$scope={dirty:d,ctx:u}),i.$set(m)},i(u){f||(w(i.$$.fragment,u),f=!0)},o(u){C(i.$$.fragment,u),f=!1},d(u){u&&p(e),H(i)}}}function Ie(a){let e;return{c(){e=M("Set")},l(t){e=L(t,"Set")},m(t,n){T(t,e,n)},d(t){t&&p(e)}}}function De(a){let e;return{c(){e=M("Clear")},l(t){e=L(t,"Clear")},m(t,n){T(t,e,n)},d(t){t&&p(e)}}}function Ae(a){let e,t,n,r,o,l,c,s,i,f,u;const d=[ve,be],m=[];function _(v,I){return v[7].endpoint?0:1}t=_(a),n=m[t]=d[t](a);const g=[Te,Se],b=[];function y(v,I){return v[5]?0:1}return o=y(a),l=b[o]=g[o](a),{c(){e=k("div"),n.c(),r=A(),l.c(),c=A(),s=k("div"),i=k("small"),f=M("If both are set, the Remote Codec Endpoint will be used."),this.h()},l(v){e=E(v,"DIV",{slot:!0});var I=S(e);n.l(I),r=P(I),l.l(I),c=P(I),s=E(I,"DIV",{});var D=S(s);i=E(D,"SMALL",{"data-cy":!0});var O=S(i);f=L(O,"If both are set, the Remote Codec Endpoint will be used."),O.forEach(p),D.forEach(p),I.forEach(p),this.h()},h(){$(i,"data-cy","data-encoder-info"),$(e,"slot","content")},m(v,I){T(v,e,I),m[t].m(e,null),h(e,r),b[o].m(e,null),h(e,c),h(e,s),h(s,i),h(i,f),u=!0},p(v,I){let D=t;t=_(v),t===D?m[t].p(v,I):(G(),C(m[D],1,1,()=>{m[D]=null}),J(),n=m[t],n?n.p(v,I):(n=m[t]=d[t](v),n.c()),w(n,1),n.m(e,r));let O=o;o=y(v),o===O?b[o].p(v,I):(G(),C(b[O],1,1,()=>{b[O]=null}),J(),l=b[o],l?l.p(v,I):(l=b[o]=g[o](v),l.c()),w(l,1),l.m(e,c))},i(v){u||(w(n),w(l),u=!0)},o(v){C(n),C(l),u=!1},d(v){v&&p(e),m[t].d(),b[o].d()}}}function Pe(a){let e,t;return e=new he({props:{open:a[0],hideConfirm:!0,$$slots:{content:[Ae],title:[ge]},$$scope:{ctx:a}}}),e.$on("cancelModal",function(){ee(a[1])&&a[1].apply(this,arguments)}),e.$on("confirmModal",function(){ee(a[1])&&a[1].apply(this,arguments)}),{c(){N(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,r){V(e,n,r),t=!0},p(n,[r]){a=n;const o={};r&1&&(o.open=a[0]),r&131324&&(o.$$scope={dirty:r,ctx:a}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){C(e.$$.fragment,n),t=!1},d(n){H(e,n)}}}function Ne(a,e,t){let n,r,o,l;z(a,X,D=>t(5,r=D)),z(a,Y,D=>t(6,o=D)),z(a,ce,D=>t(7,l=D));let{showSettings:c}=e,{passAccessToken:s}=e,{onCancel:i}=e,f="",u="";const d=()=>{_e(f)?(q(Y,o=f,o),t(4,n="")):t(4,n="Endpoint must start with https:// to authenticate")},m=()=>{me(f)?s?d():(q(Y,o=f,o),t(4,n="")):t(4,n="Endpoint must start with http:// or https://")},_=()=>{t(2,f=""),q(Y,o=null,o)},g=()=>{t(3,u=""),q(X,r=null,r)};function b(){f=this.value,t(2,f)}function y(){f=this.value,t(2,f)}function v(){u=this.value,t(3,u)}const I=()=>q(X,r=u,r);return a.$$set=D=>{"showSettings"in D&&t(0,c=D.showSettings),"passAccessToken"in D&&t(11,s=D.passAccessToken),"onCancel"in D&&t(1,i=D.onCancel)},t(4,n=""),[c,i,f,u,n,r,o,l,m,_,g,s,b,y,v,I]}class Re extends oe{constructor(e){super(),le(this,e,Ne,Pe,ae,{showSettings:0,passAccessToken:11,onCancel:1})}}function Ve(a){let e,t;return e=new Z({props:{right:!0,text:"Configure data encoder",$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,r){V(e,n,r),t=!0},p(n,r){const o={};r&16&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){C(e.$$.fragment,n),t=!1},d(n){H(e,n)}}}function He(a){let e,t,n,r;const o=[Be,Oe,Le],l=[];function c(s,i){var f;return(f=s[1])!=null&&f.hasNotRequested?0:s[1].hasError?1:s[1].hasSuccess?2:-1}return~(e=c(a))&&(t=l[e]=o[e](a)),{c(){t&&t.c(),n=F()},l(s){t&&t.l(s),n=F()},m(s,i){~e&&l[e].m(s,i),T(s,n,i),r=!0},p(s,i){let f=e;e=c(s),e===f?~e&&l[e].p(s,i):(t&&(G(),C(l[f],1,1,()=>{l[f]=null}),J()),~e?(t=l[e],t?t.p(s,i):(t=l[e]=o[e](s),t.c()),w(t,1),t.m(n.parentNode,n)):t=null)},i(s){r||(w(t),r=!0)},o(s){C(t),r=!1},d(s){~e&&l[e].d(s),s&&p(n)}}}function Me(a){let e,t,n,r,o,l,c;return t=new B({props:{name:"converter-down",class:"-ml-1 text-gray-400"}}),r=new B({props:{name:"converter-up",class:"absolute left-1 text-gray-400"}}),{c(){e=k("button"),N(t.$$.fragment),n=A(),N(r.$$.fragment),this.h()},l(s){e=E(s,"BUTTON",{class:!0,"data-cy":!0});var i=S(e);R(t.$$.fragment,i),n=P(i),R(r.$$.fragment,i),i.forEach(p),this.h()},h(){$(e,"class","relative flex cursor-pointer"),$(e,"data-cy","data-encoder-status")},m(s,i){T(s,e,i),V(t,e,null),h(e,n),V(r,e,null),o=!0,l||(c=j(e,"click",a[2]),l=!0)},p:K,i(s){o||(w(t.$$.fragment,s),w(r.$$.fragment,s),o=!0)},o(s){C(t.$$.fragment,s),C(r.$$.fragment,s),o=!1},d(s){s&&p(e),H(t),H(r),l=!1,c()}}}function Le(a){let e,t;return e=new Z({props:{right:!0,text:"Data encoder succesfully converted content",$$slots:{default:[qe]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,r){V(e,n,r),t=!0},p(n,r){const o={};r&16&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){C(e.$$.fragment,n),t=!1},d(n){H(e,n)}}}function Oe(a){let e,t;return e=new Z({props:{right:!0,text:"Data encoder couldn't connect to the remote encoder",$$slots:{default:[je]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,r){V(e,n,r),t=!0},p(n,r){const o={};r&16&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){C(e.$$.fragment,n),t=!1},d(n){H(e,n)}}}function Be(a){let e,t;return e=new Z({props:{right:!0,text:"Data encoder is configured",$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,r){V(e,n,r),t=!0},p(n,r){const o={};r&16&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){C(e.$$.fragment,n),t=!1},d(n){H(e,n)}}}function qe(a){let e,t,n,r,o,l,c;return t=new B({props:{name:"converter-down",class:"-ml-1 text-green-400"}}),r=new B({props:{name:"converter-up",class:"absolute left-1 text-green-400"}}),{c(){e=k("button"),N(t.$$.fragment),n=A(),N(r.$$.fragment),this.h()},l(s){e=E(s,"BUTTON",{class:!0,"data-cy":!0});var i=S(e);R(t.$$.fragment,i),n=P(i),R(r.$$.fragment,i),i.forEach(p),this.h()},h(){$(e,"class","relative flex cursor-pointer"),$(e,"data-cy","data-encoder-status-success")},m(s,i){T(s,e,i),V(t,e,null),h(e,n),V(r,e,null),o=!0,l||(c=j(e,"click",a[2]),l=!0)},p:K,i(s){o||(w(t.$$.fragment,s),w(r.$$.fragment,s),o=!0)},o(s){C(t.$$.fragment,s),C(r.$$.fragment,s),o=!1},d(s){s&&p(e),H(t),H(r),l=!1,c()}}}function je(a){let e,t,n,r,o,l,c;return t=new B({props:{name:"converter-down",class:"-ml-1 text-red-400"}}),r=new B({props:{name:"converter-up",class:"absolute left-1 text-red-400"}}),{c(){e=k("button"),N(t.$$.fragment),n=A(),N(r.$$.fragment),this.h()},l(s){e=E(s,"BUTTON",{class:!0,"data-cy":!0});var i=S(e);R(t.$$.fragment,i),n=P(i),R(r.$$.fragment,i),i.forEach(p),this.h()},h(){$(e,"class","relative flex cursor-pointer"),$(e,"data-cy","data-encoder-status-error")},m(s,i){T(s,e,i),V(t,e,null),h(e,n),V(r,e,null),o=!0,l||(c=j(e,"click",a[2]),l=!0)},p:K,i(s){o||(w(t.$$.fragment,s),w(r.$$.fragment,s),o=!0)},o(s){C(t.$$.fragment,s),C(r.$$.fragment,s),o=!1},d(s){s&&p(e),H(t),H(r),l=!1,c()}}}function Ue(a){let e,t,n,r,o,l,c;return t=new B({props:{name:"converter-down",class:"-ml-1 text-blue-200"}}),r=new B({props:{name:"converter-up",class:"absolute left-1 text-blue-200"}}),{c(){e=k("button"),N(t.$$.fragment),n=A(),N(r.$$.fragment),this.h()},l(s){e=E(s,"BUTTON",{class:!0,"data-cy":!0});var i=S(e);R(t.$$.fragment,i),n=P(i),R(r.$$.fragment,i),i.forEach(p),this.h()},h(){$(e,"class","relative flex cursor-pointer"),$(e,"data-cy","data-encoder-status-configured")},m(s,i){T(s,e,i),V(t,e,null),h(e,n),V(r,e,null),o=!0,l||(c=j(e,"click",a[2]),l=!0)},p:K,i(s){o||(w(t.$$.fragment,s),w(r.$$.fragment,s),o=!0)},o(s){C(t.$$.fragment,s),C(r.$$.fragment,s),o=!1},d(s){s&&p(e),H(t),H(r),l=!1,c()}}}function Fe(a){let e,t,n,r,o,l;e=new Re({props:{showSettings:a[0],onCancel:a[3],passAccessToken:a[1].passAccessToken}});const c=[He,Ve],s=[];function i(f,u){var d;return(d=f[1])!=null&&d.hasEndpointOrPortConfigured?0:1}return n=i(a),r=s[n]=c[n](a),{c(){N(e.$$.fragment),t=A(),r.c(),o=F()},l(f){R(e.$$.fragment,f),t=P(f),r.l(f),o=F()},m(f,u){V(e,f,u),T(f,t,u),s[n].m(f,u),T(f,o,u),l=!0},p(f,[u]){const d={};u&1&&(d.showSettings=f[0]),u&2&&(d.passAccessToken=f[1].passAccessToken),e.$set(d);let m=n;n=i(f),n===m?s[n].p(f,u):(G(),C(s[m],1,1,()=>{s[m]=null}),J(),r=s[n],r?r.p(f,u):(r=s[n]=c[n](f),r.c()),w(r,1),r.m(o.parentNode,o))},i(f){l||(w(e.$$.fragment,f),w(r),l=!0)},o(f){C(e.$$.fragment,f),C(r),l=!1},d(f){H(e,f),f&&p(t),s[n].d(f),f&&p(o)}}}function Ye(a,e,t){let n,r;return z(a,x,c=>t(0,n=c)),z(a,ce,c=>t(1,r=c)),[n,r,()=>q(x,n=!0,n),()=>q(x,n=!1,n)]}class tt extends oe{constructor(e){super(),le(this,e,Ye,Fe,ae,{})}}export{tt as D,x as s};