import{S as ue,i as de,s as _e,e as Y,b as M,R as U,U as fe,f as h,g as L,t as T,d as O,h as m,L as me,F as $,k as E,a as K,w as P,l as C,m as I,c as A,x as Q,n as b,Q as x,K as y,y as R,B as Z,G as ee,H as te,I as le,z as J,D as be,q as z,r as G,u as re,Z as he}from"./index-eadb3ae7.js";import{I as ge}from"./icon-23d74d87.js";import{B as ce}from"./button-416e0724.js";const ve=n=>({}),ne=n=>({}),pe=n=>({}),ae=n=>({});function ie(n){let e,t,l,a,i,o,u,D,B,v,p,N,_,w,q,r=!n[7]&&se(n);const F=n[12].title,S=$(F,n,n[15],ae),s=S||ke(),j=n[12].content,V=$(j,n,n[15],ne),g=V||ye();p=new ce({props:{thin:!0,variant:"secondary",disabled:n[7],$$slots:{default:[Te]},$$scope:{ctx:n}}}),p.$on("click",n[10]);let c=!n[1]&&oe(n);return{c(){e=E("div"),t=E("div"),l=K(),a=E("div"),r&&r.c(),i=K(),o=E("div"),s&&s.c(),u=K(),D=E("div"),g&&g.c(),B=K(),v=E("div"),P(p.$$.fragment),N=K(),c&&c.c(),this.h()},l(f){e=C(f,"DIV",{class:!0});var d=I(e);t=C(d,"DIV",{class:!0}),I(t).forEach(m),l=A(d),a=C(d,"DIV",{class:!0,tabindex:!0,role:!0,"aria-labelledby":!0,"aria-describedby":!0});var k=I(a);r&&r.l(k),i=A(k),o=C(k,"DIV",{id:!0,class:!0});var W=I(o);s&&s.l(W),W.forEach(m),u=A(k),D=C(k,"DIV",{id:!0,class:!0});var X=I(D);g&&g.l(X),X.forEach(m),B=A(k),v=C(k,"DIV",{class:!0});var H=I(v);Q(p.$$.fragment,H),N=A(H),c&&c.l(H),H.forEach(m),k.forEach(m),d.forEach(m),this.h()},h(){b(t,"class","overlay svelte-1vnvb5j"),b(o,"id","modal-title"),b(o,"class","title svelte-1vnvb5j"),b(D,"id","modal-content"),b(D,"class","content svelte-1vnvb5j"),b(v,"class","flex items-center justify-end space-x-2 p-6"),b(a,"class","body svelte-1vnvb5j"),b(a,"tabindex","-1"),b(a,"role","alertdialog"),b(a,"aria-labelledby","modal-title"),b(a,"aria-describedby","modal-description"),x(a,"large",n[6]),b(e,"class","modal svelte-1vnvb5j")},m(f,d){M(f,e,d),y(e,t),y(e,l),y(e,a),r&&r.m(a,null),y(a,i),y(a,o),s&&s.m(o,null),y(a,u),y(a,D),g&&g.m(D,null),y(a,B),y(a,v),R(p,v,null),y(v,N),c&&c.m(v,null),n[14](a),_=!0,w||(q=[U(t,"keyup",fe(Z)),U(t,"click",n[10])],w=!0)},p(f,d){f[7]?r&&(L(),T(r,1,1,()=>{r=null}),O()):r?(r.p(f,d),d&128&&h(r,1)):(r=se(f),r.c(),h(r,1),r.m(a,i)),S&&S.p&&(!_||d&32768)&&ee(S,F,f,f[15],_?le(F,f[15],d,pe):te(f[15]),ae),V&&V.p&&(!_||d&32768)&&ee(V,j,f,f[15],_?le(j,f[15],d,ve):te(f[15]),ne);const k={};d&128&&(k.disabled=f[7]),d&32776&&(k.$$scope={dirty:d,ctx:f}),p.$set(k),f[1]?c&&(L(),T(c,1,1,()=>{c=null}),O()):c?(c.p(f,d),d&2&&h(c,1)):(c=oe(f),c.c(),h(c,1),c.m(v,null)),(!_||d&64)&&x(a,"large",f[6])},i(f){_||(h(r),h(s,f),h(g,f),h(p.$$.fragment,f),h(c),_=!0)},o(f){T(r),T(s,f),T(g,f),T(p.$$.fragment,f),T(c),_=!1},d(f){f&&m(e),r&&r.d(),s&&s.d(f),g&&g.d(f),J(p),c&&c.d(),n[14](null),w=!1,be(q)}}}function se(n){let e,t,l,a,i;return t=new ge({props:{name:"close",class:"cursor-pointer rounded-full hover:bg-gray-900 hover:text-white"}}),{c(){e=E("button"),P(t.$$.fragment),this.h()},l(o){e=C(o,"BUTTON",{"aria-label":!0,class:!0});var u=I(e);Q(t.$$.fragment,u),u.forEach(m),this.h()},h(){b(e,"aria-label",n[3]),b(e,"class","float-right m-4")},m(o,u){M(o,e,u),R(t,e,null),l=!0,a||(i=U(e,"click",n[10]),a=!0)},p(o,u){(!l||u&8)&&b(e,"aria-label",o[3])},i(o){l||(h(t.$$.fragment,o),l=!0)},o(o){T(t.$$.fragment,o),l=!1},d(o){o&&m(e),J(t),a=!1,i()}}}function ke(n){let e,t;return{c(){e=E("h3"),t=z("Title")},l(l){e=C(l,"H3",{});var a=I(e);t=G(a,"Title"),a.forEach(m)},m(l,a){M(l,e,a),y(e,t)},p:Z,d(l){l&&m(e)}}}function ye(n){let e,t;return{c(){e=E("span"),t=z("Content")},l(l){e=C(l,"SPAN",{});var a=I(e);t=G(a,"Content"),a.forEach(m)},m(l,a){M(l,e,a),y(e,t)},p:Z,d(l){l&&m(e)}}}function Te(n){let e;return{c(){e=z(n[3])},l(t){e=G(t,n[3])},m(t,l){M(t,e,l)},p(t,l){l&8&&re(e,t[3])},d(t){t&&m(e)}}}function oe(n){let e,t;return e=new ce({props:{thin:!0,variant:n[4],loading:n[7],disabled:n[5]||n[7],dataCy:"confirm-modal-button",$$slots:{default:[De]},$$scope:{ctx:n}}}),e.$on("click",n[13]),{c(){P(e.$$.fragment)},l(l){Q(e.$$.fragment,l)},m(l,a){R(e,l,a),t=!0},p(l,a){const i={};a&16&&(i.variant=l[4]),a&128&&(i.loading=l[7]),a&160&&(i.disabled=l[5]||l[7]),a&32772&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){J(e,l)}}}function De(n){let e;return{c(){e=z(n[2])},l(t){e=G(t,n[2])},m(t,l){M(t,e,l)},p(t,l){l&4&&re(e,t[2])},d(t){t&&m(e)}}}function Ee(n){let e,t,l,a,i=n[0]&&ie(n);return{c(){i&&i.c(),e=Y()},l(o){i&&i.l(o),e=Y()},m(o,u){i&&i.m(o,u),M(o,e,u),t=!0,l||(a=U(window,"keydown",fe(n[11])),l=!0)},p(o,[u]){o[0]?i?(i.p(o,u),u&1&&h(i,1)):(i=ie(o),i.c(),h(i,1),i.m(e.parentNode,e)):i&&(L(),T(i,1,1,()=>{i=null}),O())},i(o){t||(h(i),t=!0)},o(o){T(i),t=!1},d(o){i&&i.d(o),o&&m(e),l=!1,a()}}}function Ce(n,e,t){let{$$slots:l={},$$scope:a}=e,{open:i=!1}=e,{hideConfirm:o=!1}=e,{confirmText:u="Confirm"}=e,{cancelText:D="Cancel"}=e,{confirmType:B="primary"}=e,{confirmDisabled:v=!1}=e,{large:p=!1}=e,{loading:N=!1}=e,_;const w=me(),q=()=>{w("cancelModal")},r=s=>{if(!i)return;if(s.key==="Escape"){q();return}const j=_.querySelectorAll("button"),V=j[0],g=j[j.length-1];s.key==="Tab"&&(s.shiftKey?document.activeElement===V&&(g.focus(),s.preventDefault()):document.activeElement===g&&(V.focus(),s.preventDefault()))},F=()=>w("confirmModal");function S(s){he[s?"unshift":"push"](()=>{_=s,t(8,_)})}return n.$$set=s=>{"open"in s&&t(0,i=s.open),"hideConfirm"in s&&t(1,o=s.hideConfirm),"confirmText"in s&&t(2,u=s.confirmText),"cancelText"in s&&t(3,D=s.cancelText),"confirmType"in s&&t(4,B=s.confirmType),"confirmDisabled"in s&&t(5,v=s.confirmDisabled),"large"in s&&t(6,p=s.large),"loading"in s&&t(7,N=s.loading),"$$scope"in s&&t(15,a=s.$$scope)},n.$$.update=()=>{n.$$.dirty&257&&i&&_&&_.focus()},[i,o,u,D,B,v,p,N,_,w,q,r,l,F,S,a]}class Ve extends ue{constructor(e){super(),de(this,e,Ce,Ee,_e,{open:0,hideConfirm:1,confirmText:2,cancelText:3,confirmType:4,confirmDisabled:5,large:6,loading:7})}}export{Ve as M};
