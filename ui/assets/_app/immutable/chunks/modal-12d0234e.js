import{S as _e,i as ge,s as be,F as x,M as Z,k as I,a as O,w as J,l as S,m as A,c as R,h,x as W,n as H,P as $,Q as j,b as L,K as p,y as X,R as U,U as he,f as v,g as ee,t as y,d as te,G as le,H as ae,I as ne,T as ve,z as Y,D as Te,a1 as ie,L as ke,N as se,q as z,r as Q,u as de,Z as pe,B as ue}from"./index-3630b6f8.js";import{B as me}from"./button-3d26a8bc.js";import{I as ye}from"./index-0b778e9e.js";const De=a=>({}),oe=a=>({}),Ce=a=>({}),fe=a=>({});function ce(a){let e,l;return e=new ye({props:{"aria-label":a[2],icon:"close",class:"float-right m-4"}}),e.$on("click",a[9]),{c(){J(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,s){X(e,t,s),l=!0},p(t,s){const r={};s&4&&(r["aria-label"]=t[2]),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function Ee(a){let e,l;return{c(){e=I("h3"),l=z("Title")},l(t){e=S(t,"H3",{});var s=A(e);l=Q(s,"Title"),s.forEach(h)},m(t,s){L(t,e,s),p(e,l)},p:ue,d(t){t&&h(e)}}}function Me(a){let e,l;return{c(){e=I("span"),l=z("Content")},l(t){e=S(t,"SPAN",{});var s=A(e);l=Q(s,"Content"),s.forEach(h)},m(t,s){L(t,e,s),p(e,l)},p:ue,d(t){t&&h(e)}}}function qe(a){let e;return{c(){e=z(a[2])},l(l){e=Q(l,a[2])},m(l,t){L(l,e,t)},p(l,t){t&4&&de(e,l[2])},d(l){l&&h(e)}}}function re(a){let e,l;return e=new me({props:{thin:!0,variant:a[3],loading:a[6],disabled:a[4]||a[6],testId:"confirm-modal-button",type:"submit",$$slots:{default:[Ie]},$$scope:{ctx:a}}}),{c(){J(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,s){X(e,t,s),l=!0},p(t,s){const r={};s&8&&(r.variant=t[3]),s&64&&(r.loading=t[6]),s&80&&(r.disabled=t[4]||t[6]),s&524290&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function Ie(a){let e;return{c(){e=z(a[1])},l(l){e=Q(l,a[1])},m(l,t){L(l,e,t)},p(l,t){t&2&&de(e,l[1])},d(l){l&&h(e)}}}function Se(a){let e,l,t,s,r,T,F,_,g,N,C,E,u,M,P,f=!a[6]&&ce(a);const d=a[17].title,q=x(d,a,a[19],fe),m=q||Ee(),K=a[17].content,B=x(K,a,a[19],oe),b=B||Me();g=new me({props:{thin:!0,variant:"secondary",disabled:a[6],$$slots:{default:[qe]},$$scope:{ctx:a}}}),g.$on("click",a[9]);let c=!a[0]&&re(a),i=[{class:C="body "+a[7]},{"aria-modal":"true"},{"aria-labelledby":"modal-title"},{"data-testid":E=a[13]["data-testid"]},a[14]],D={};for(let n=0;n<i.length;n+=1)D=Z(D,i[n]);return{c(){e=I("dialog"),f&&f.c(),l=O(),t=I("div"),m&&m.c(),s=O(),r=I("form"),T=I("div"),b&&b.c(),F=O(),_=I("div"),J(g.$$.fragment),N=O(),c&&c.c(),this.h()},l(n){e=S(n,"DIALOG",{class:!0,"aria-modal":!0,"aria-labelledby":!0,"data-testid":!0});var o=A(e);f&&f.l(o),l=R(o),t=S(o,"DIV",{id:!0,class:!0});var k=A(t);m&&m.l(k),k.forEach(h),s=R(o),r=S(o,"FORM",{method:!0});var V=A(r);T=S(V,"DIV",{id:!0,class:!0});var w=A(T);b&&b.l(w),w.forEach(h),F=R(V),_=S(V,"DIV",{class:!0});var G=A(_);W(g.$$.fragment,G),N=R(G),c&&c.l(G),G.forEach(h),V.forEach(h),o.forEach(h),this.h()},h(){H(t,"id","modal-title"),H(t,"class","title svelte-1f1oixq"),H(T,"id","modal-content"),H(T,"class","content svelte-1f1oixq"),H(_,"class","flex items-center justify-end space-x-2 p-6"),H(r,"method","dialog"),$(e,D),j(e,"large",a[5]),j(e,"svelte-1f1oixq",!0)},m(n,o){L(n,e,o),f&&f.m(e,null),p(e,l),p(e,t),m&&m.m(t,null),p(e,s),p(e,r),p(r,T),b&&b.m(T,null),p(r,F),p(r,_),X(g,_,null),p(_,N),c&&c.m(_,null),a[18](e),u=!0,M||(P=[U(window,"click",a[12]),U(window,"keydown",he(a[11])),U(r,"submit",a[10])],M=!0)},p(n,[o]){n[6]?f&&(ee(),y(f,1,1,()=>{f=null}),te()):f?(f.p(n,o),o&64&&v(f,1)):(f=ce(n),f.c(),v(f,1),f.m(e,l)),q&&q.p&&(!u||o&524288)&&le(q,d,n,n[19],u?ne(d,n[19],o,Ce):ae(n[19]),fe),B&&B.p&&(!u||o&524288)&&le(B,K,n,n[19],u?ne(K,n[19],o,De):ae(n[19]),oe);const k={};o&64&&(k.disabled=n[6]),o&524292&&(k.$$scope={dirty:o,ctx:n}),g.$set(k),n[0]?c&&(ee(),y(c,1,1,()=>{c=null}),te()):c?(c.p(n,o),o&1&&v(c,1)):(c=re(n),c.c(),v(c,1),c.m(_,null)),$(e,D=ve(i,[(!u||o&128&&C!==(C="body "+n[7]))&&{class:C},{"aria-modal":"true"},{"aria-labelledby":"modal-title"},(!u||o&8192&&E!==(E=n[13]["data-testid"]))&&{"data-testid":E},o&16384&&n[14]])),j(e,"large",n[5]),j(e,"svelte-1f1oixq",!0)},i(n){u||(v(f),v(m,n),v(b,n),v(g.$$.fragment,n),v(c),u=!0)},o(n){y(f),y(m,n),y(b,n),y(g.$$.fragment,n),y(c),u=!1},d(n){n&&h(e),f&&f.d(),m&&m.d(n),b&&b.d(n),Y(g),c&&c.d(),a[18](null),M=!1,Te(P)}}}function Ae(a,e,l){const t=["hideConfirm","confirmText","cancelText","confirmType","confirmDisabled","large","loading","open","close","class"];let s=ie(e,t),{$$slots:r={},$$scope:T}=e,{hideConfirm:F=!1}=e,{confirmText:_="Confirm"}=e,{cancelText:g="Cancel"}=e,{confirmType:N="primary"}=e,{confirmDisabled:C=!1}=e,{large:E=!1}=e,{loading:u=!1}=e;const M=()=>d.showModal(),P=()=>d.close();let{class:f=""}=e,d;const q=ke(),m=()=>{d.close(),q("cancelModal")},K=()=>{q("confirmModal")},B=i=>{if(!M)return;const D=Array.from(d.querySelectorAll('button, input, div[contenteditable="true"]')).filter(k=>k instanceof HTMLDivElement?k.isContentEditable:!k.disabled),n=D[0],o=D[D.length-1];i.key==="Tab"&&(i.shiftKey?document.activeElement===n&&(o.focus(),i.preventDefault()):document.activeElement===o&&(n.focus(),i.preventDefault()))},b=i=>{i.target===d&&m()};function c(i){pe[i?"unshift":"push"](()=>{d=i,l(8,d)})}return a.$$set=i=>{l(13,e=Z(Z({},e),se(i))),l(14,s=ie(e,t)),"hideConfirm"in i&&l(0,F=i.hideConfirm),"confirmText"in i&&l(1,_=i.confirmText),"cancelText"in i&&l(2,g=i.cancelText),"confirmType"in i&&l(3,N=i.confirmType),"confirmDisabled"in i&&l(4,C=i.confirmDisabled),"large"in i&&l(5,E=i.large),"loading"in i&&l(6,u=i.loading),"class"in i&&l(7,f=i.class),"$$scope"in i&&l(19,T=i.$$scope)},a.$$.update=()=>{a.$$.dirty&256&&d&&d.querySelector("input"),a.$$.dirty&256&&M&&d&&d.focus()},e=se(e),[F,_,g,N,C,E,u,f,d,m,K,B,b,e,s,M,P,r,c,T]}class He extends _e{constructor(e){super(),ge(this,e,Ae,Se,be,{hideConfirm:0,confirmText:1,cancelText:2,confirmType:3,confirmDisabled:4,large:5,loading:6,open:15,close:16,class:7})}get open(){return this.$$.ctx[15]}get close(){return this.$$.ctx[16]}}export{He as M};
