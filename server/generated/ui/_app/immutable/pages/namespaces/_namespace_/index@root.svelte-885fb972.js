import{S as Wt,i as Xt,s as Zt,w as Be,a as d,l as m,r as E,e as je,x as Fe,c as v,m as _,n as h,u as b,h as f,p as g,y as Ke,b as S,M as e,v as T,f as V,t as K,d as Jt,B as Le,N as ce,o as xt,a3 as ea,g as Qt,a0 as ta,E as aa}from"../../../chunks/index-9d69cec5.js";import{p as sa}from"../../../chunks/stores-d806cb81.js";import{t as ra,u as la,s as oa}from"../../../chunks/event-view-4b136c06.js";import{l as Lt}from"../../../chunks/namespaces-cfde5fc8.js";import{s as na}from"../../../chunks/search-attributes-6b390955.js";import{m as Mt}from"../../../chunks/format-date-eb94f038.js";import{P as ia}from"../../../chunks/page-title-c238ffaa.js";import{T as ca,a as fa,b as pa}from"../../../chunks/table-row-94a5ccf0.js";import"../../../chunks/index-ad6f072e.js";import"../../../chunks/persist-store-7662fc0b.js";import"../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../chunks/settings-34c5dae2.js";import"../../../chunks/version-check-64d780a1.js";import"../../../chunks/is-44021919.js";const ua=i=>{var a,s;const t=(a=i==null?void 0:i.replicationConfig)==null?void 0:a.clusters,o=(s=i==null?void 0:i.replicationConfig)==null?void 0:s.activeClusterName;return t!=null&&t.length?t.map(({clusterName:u})=>u===o?`${u} (active)`:u).join(", "):"Unknown"};function Yt(i,t,o){const a=i.slice();return a[8]=t[o][0],a[9]=t[o][1],a}function qt(i){let t,o,a,s,u,r;return u=new ca({props:{class:"w-full",$$slots:{headers:[da],default:[_a]},$$scope:{ctx:i}}}),{c(){t=m("section"),o=m("h1"),a=E("Search Attributes"),s=d(),Be(u.$$.fragment),this.h()},l(c){t=_(c,"SECTION",{});var n=h(t);o=_(n,"H1",{class:!0});var l=h(o);a=b(l,"Search Attributes"),l.forEach(f),s=v(n),Fe(u.$$.fragment,n),n.forEach(f),this.h()},h(){g(o,"class","my-4 text-lg font-medium")},m(c,n){S(c,t,n),e(t,o),e(o,a),e(t,s),Ke(u,t,null),r=!0},p(c,n){const l={};n&4160&&(l.$$scope={dirty:n,ctx:c}),u.$set(l)},i(c){r||(V(u.$$.fragment,c),r=!0)},o(c){K(u.$$.fragment,c),r=!1},d(c){c&&f(t),Le(u)}}}function ma(i){let t,o=i[8]+"",a,s,u,r=i[9]+"",c,n;return{c(){t=m("td"),a=E(o),s=d(),u=m("td"),c=E(r),n=d()},l(l){t=_(l,"TD",{});var w=h(t);a=b(w,o),w.forEach(f),s=v(l),u=_(l,"TD",{});var y=h(u);c=b(y,r),y.forEach(f),n=v(l)},m(l,w){S(l,t,w),e(t,a),S(l,s,w),S(l,u,w),e(u,c),S(l,n,w)},p(l,w){w&64&&o!==(o=l[8]+"")&&T(a,o),w&64&&r!==(r=l[9]+"")&&T(c,r)},d(l){l&&f(t),l&&f(s),l&&f(u),l&&f(n)}}}function zt(i){let t,o;return t=new pa({props:{$$slots:{default:[ma]},$$scope:{ctx:i}}}),{c(){Be(t.$$.fragment)},l(a){Fe(t.$$.fragment,a)},m(a,s){Ke(t,a,s),o=!0},p(a,s){const u={};s&4160&&(u.$$scope={dirty:s,ctx:a}),t.$set(u)},i(a){o||(V(t.$$.fragment,a),o=!0)},o(a){K(t.$$.fragment,a),o=!1},d(a){Le(t,a)}}}function _a(i){let t,o,a=Object.entries(i[6]),s=[];for(let r=0;r<a.length;r+=1)s[r]=zt(Yt(i,a,r));const u=r=>K(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();t=je()},l(r){for(let c=0;c<s.length;c+=1)s[c].l(r);t=je()},m(r,c){for(let n=0;n<s.length;n+=1)s[n].m(r,c);S(r,t,c),o=!0},p(r,c){if(c&64){a=Object.entries(r[6]);let n;for(n=0;n<a.length;n+=1){const l=Yt(r,a,n);s[n]?(s[n].p(l,c),V(s[n],1)):(s[n]=zt(l),s[n].c(),V(s[n],1),s[n].m(t.parentNode,t))}for(Qt(),n=a.length;n<s.length;n+=1)u(n);Jt()}},i(r){if(!o){for(let c=0;c<a.length;c+=1)V(s[c]);o=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)K(s[c]);o=!1},d(r){ta(s,r),r&&f(t)}}}function ha(i){let t,o,a,s,u;return{c(){t=m("th"),o=E("Key"),a=d(),s=m("th"),u=E("Type")},l(r){t=_(r,"TH",{});var c=h(t);o=b(c,"Key"),c.forEach(f),a=v(r),s=_(r,"TH",{});var n=h(s);u=b(n,"Type"),n.forEach(f)},m(r,c){S(r,t,c),e(t,o),S(r,a,c),S(r,s,c),e(s,u)},p:aa,d(r){r&&f(t),r&&f(a),r&&f(s)}}}function da(i){let t,o;return t=new fa({props:{slot:"headers",$$slots:{default:[ha]},$$scope:{ctx:i}}}),{c(){Be(t.$$.fragment)},l(a){Fe(t.$$.fragment,a)},m(a,s){Ke(t,a,s),o=!0},p(a,s){const u={};s&4096&&(u.$$scope={dirty:s,ctx:a}),t.$set(u)},i(a){o||(V(t.$$.fragment,a),o=!0)},o(a){K(t.$$.fragment,a),o=!1},d(a){Le(t,a)}}}function va(i){var Nt,wt,Pt,At,St,Tt,It,Vt,kt,Ct,Ht,Dt,Ot,Rt,Ut,Gt;let t,o,a,s,u=((wt=(Nt=i[0])==null?void 0:Nt.namespaceInfo)==null?void 0:wt.name)+"",r,c,n,l,w,y,Me,k,X,Ye,qe,fe=((At=(Pt=i[0])==null?void 0:Pt.namespaceInfo)==null?void 0:At.description)+"",Pe,ze,C,Z,Je,Qe,pe=(((Tt=(St=i[0])==null?void 0:St.namespaceInfo)==null?void 0:Tt.ownerEmail)||"Unknown")+"",Ae,We,H,x,Xe,Ze,ue=(It=i[0])!=null&&It.isGlobalNamespace?"Yes":"No",Se,xe,D,ee,et,tt,me=Mt((kt=(Vt=i[0])==null?void 0:Vt.config)==null?void 0:kt.workflowExecutionRetentionTtl.toString())+"",Te,at,O,te,st,rt,_e=((Ht=(Ct=i[0])==null?void 0:Ct.config)==null?void 0:Ht.historyArchivalState)+"",Ie,lt,R,ae,ot,nt,he=((Ot=(Dt=i[0])==null?void 0:Dt.config)==null?void 0:Ot.visibilityArchivalState)+"",Ve,it,U,se,ct,ft,de=((Rt=i[0])==null?void 0:Rt.failoverVersion)+"",ke,pt,G,re,ut,mt,Ce,_t,I,le,ht,dt,j,oe,vt,Et,He,bt,B,ne,$t,gt,De,yt,Oe,ie,A;t=new ia({props:{title:`Namespaces | ${(Gt=(Ut=i[0])==null?void 0:Ut.namespaceInfo)==null?void 0:Gt.name}`,url:i[2].url.href}});let P=i[6]&&qt(i);return{c(){Be(t.$$.fragment),o=d(),a=m("h2"),s=E("Namespace: "),r=E(u),c=d(),n=m("div"),l=m("article"),w=m("h1"),y=E("Details"),Me=d(),k=m("p"),X=m("span"),Ye=E("Description:"),qe=d(),Pe=E(fe),ze=d(),C=m("p"),Z=m("span"),Je=E("Owner:"),Qe=d(),Ae=E(pe),We=d(),H=m("p"),x=m("span"),Xe=E("Global?"),Ze=d(),Se=E(ue),xe=d(),D=m("p"),ee=m("span"),et=E("Retention Period:"),tt=d(),Te=E(me),at=d(),O=m("p"),te=m("span"),st=E("History Archival:"),rt=d(),Ie=E(_e),lt=d(),R=m("p"),ae=m("span"),ot=E("Visibility Archival:"),nt=d(),Ve=E(he),it=d(),U=m("p"),se=m("span"),ct=E("Failover Version:"),ft=d(),ke=E(de),pt=d(),G=m("p"),re=m("span"),ut=E("Clusters:"),mt=d(),Ce=E(i[1]),_t=d(),I=m("article"),le=m("h1"),ht=E("Versions"),dt=d(),j=m("p"),oe=m("span"),vt=E("Temporal Server Version:"),Et=d(),He=E(i[3]),bt=d(),B=m("p"),ne=m("span"),$t=E("Temporal UI Version:"),gt=d(),De=E(i[4]),yt=d(),Oe=d(),P&&P.c(),ie=je(),this.h()},l(p){Fe(t.$$.fragment,p),o=v(p),a=_(p,"H2",{class:!0,"data-cy":!0});var $=h(a);s=b($,"Namespace: "),r=b($,u),$.forEach(f),c=v(p),n=_(p,"DIV",{class:!0});var F=h(n);l=_(F,"ARTICLE",{class:!0});var N=h(l);w=_(N,"H1",{class:!0});var ve=h(w);y=b(ve,"Details"),ve.forEach(f),Me=v(N),k=_(N,"P",{"data-cy":!0});var L=h(k);X=_(L,"SPAN",{class:!0});var Ee=h(X);Ye=b(Ee,"Description:"),Ee.forEach(f),qe=v(L),Pe=b(L,fe),L.forEach(f),ze=v(N),C=_(N,"P",{"data-cy":!0});var M=h(C);Z=_(M,"SPAN",{class:!0});var be=h(Z);Je=b(be,"Owner:"),be.forEach(f),Qe=v(M),Ae=b(M,pe),M.forEach(f),We=v(N),H=_(N,"P",{"data-cy":!0});var Y=h(H);x=_(Y,"SPAN",{class:!0});var $e=h(x);Xe=b($e,"Global?"),$e.forEach(f),Ze=v(Y),Se=b(Y,ue),Y.forEach(f),xe=v(N),D=_(N,"P",{"data-cy":!0});var q=h(D);ee=_(q,"SPAN",{class:!0});var ge=h(ee);et=b(ge,"Retention Period:"),ge.forEach(f),tt=v(q),Te=b(q,me),q.forEach(f),at=v(N),O=_(N,"P",{"data-cy":!0});var z=h(O);te=_(z,"SPAN",{class:!0});var ye=h(te);st=b(ye,"History Archival:"),ye.forEach(f),rt=v(z),Ie=b(z,_e),z.forEach(f),lt=v(N),R=_(N,"P",{"data-cy":!0});var J=h(R);ae=_(J,"SPAN",{class:!0});var Ne=h(ae);ot=b(Ne,"Visibility Archival:"),Ne.forEach(f),nt=v(J),Ve=b(J,he),J.forEach(f),it=v(N),U=_(N,"P",{"data-cy":!0});var Q=h(U);se=_(Q,"SPAN",{class:!0});var we=h(se);ct=b(we,"Failover Version:"),we.forEach(f),ft=v(Q),ke=b(Q,de),Q.forEach(f),pt=v(N),G=_(N,"P",{"data-cy":!0});var Re=h(G);re=_(Re,"SPAN",{class:!0});var jt=h(re);ut=b(jt,"Clusters:"),jt.forEach(f),mt=v(Re),Ce=b(Re,i[1]),Re.forEach(f),N.forEach(f),_t=v(F),I=_(F,"ARTICLE",{class:!0});var W=h(I);le=_(W,"H1",{class:!0});var Bt=h(le);ht=b(Bt,"Versions"),Bt.forEach(f),dt=v(W),j=_(W,"P",{"data-cy":!0});var Ue=h(j);oe=_(Ue,"SPAN",{class:!0});var Ft=h(oe);vt=b(Ft,"Temporal Server Version:"),Ft.forEach(f),Et=v(Ue),He=b(Ue,i[3]),Ue.forEach(f),bt=v(W),B=_(W,"P",{"data-cy":!0});var Ge=h(B);ne=_(Ge,"SPAN",{class:!0});var Kt=h(ne);$t=b(Kt,"Temporal UI Version:"),Kt.forEach(f),gt=v(Ge),De=b(Ge,i[4]),Ge.forEach(f),yt=v(W),W.forEach(f),F.forEach(f),Oe=v(p),P&&P.l(p),ie=je(),this.h()},h(){g(a,"class","text-2xl"),g(a,"data-cy","namespace-title"),g(w,"class","my-4 text-lg font-medium"),g(X,"class","mr-2 font-medium"),g(k,"data-cy","namespace-description"),g(Z,"class","mr-2 font-medium"),g(C,"data-cy","namespace-owner"),g(x,"class","mr-2 font-medium"),g(H,"data-cy","namespace-global"),g(ee,"class","mr-2 font-medium"),g(D,"data-cy","namespace-retention"),g(te,"class","mr-2 font-medium"),g(O,"data-cy","namespace-history"),g(ae,"class","mr-2 font-medium"),g(R,"data-cy","namespace-visibility"),g(se,"class","mr-2 font-medium"),g(U,"data-cy","namespace-failover"),g(re,"class","mr-2 font-medium"),g(G,"data-cy","namespace-clusters"),g(l,"class","namespace-info w-full p-4"),g(le,"class","my-4 text-lg font-medium"),g(oe,"class","mr-2 font-medium"),g(j,"data-cy","server-version"),g(ne,"class","mr-2 font-medium"),g(B,"data-cy","ui-version"),g(I,"class","namespace-info w-full p-4"),g(n,"class","flex")},m(p,$){Ke(t,p,$),S(p,o,$),S(p,a,$),e(a,s),e(a,r),S(p,c,$),S(p,n,$),e(n,l),e(l,w),e(w,y),e(l,Me),e(l,k),e(k,X),e(X,Ye),e(k,qe),e(k,Pe),e(l,ze),e(l,C),e(C,Z),e(Z,Je),e(C,Qe),e(C,Ae),e(l,We),e(l,H),e(H,x),e(x,Xe),e(H,Ze),e(H,Se),e(l,xe),e(l,D),e(D,ee),e(ee,et),e(D,tt),e(D,Te),e(l,at),e(l,O),e(O,te),e(te,st),e(O,rt),e(O,Ie),e(l,lt),e(l,R),e(R,ae),e(ae,ot),e(R,nt),e(R,Ve),e(l,it),e(l,U),e(U,se),e(se,ct),e(U,ft),e(U,ke),e(l,pt),e(l,G),e(G,re),e(re,ut),e(G,mt),e(G,Ce),e(n,_t),e(n,I),e(I,le),e(le,ht),e(I,dt),e(I,j),e(j,oe),e(oe,vt),e(j,Et),e(j,He),e(I,bt),e(I,B),e(B,ne),e(ne,$t),e(B,gt),e(B,De),e(I,yt),S(p,Oe,$),P&&P.m(p,$),S(p,ie,$),A=!0},p(p,[$]){var N,ve,L,Ee,M,be,Y,$e,q,ge,z,ye,J,Ne,Q,we;const F={};$&1&&(F.title=`Namespaces | ${(ve=(N=p[0])==null?void 0:N.namespaceInfo)==null?void 0:ve.name}`),$&4&&(F.url=p[2].url.href),t.$set(F),(!A||$&1)&&u!==(u=((Ee=(L=p[0])==null?void 0:L.namespaceInfo)==null?void 0:Ee.name)+"")&&T(r,u),(!A||$&1)&&fe!==(fe=((be=(M=p[0])==null?void 0:M.namespaceInfo)==null?void 0:be.description)+"")&&T(Pe,fe),(!A||$&1)&&pe!==(pe=((($e=(Y=p[0])==null?void 0:Y.namespaceInfo)==null?void 0:$e.ownerEmail)||"Unknown")+"")&&T(Ae,pe),(!A||$&1)&&ue!==(ue=(q=p[0])!=null&&q.isGlobalNamespace?"Yes":"No")&&T(Se,ue),(!A||$&1)&&me!==(me=Mt((z=(ge=p[0])==null?void 0:ge.config)==null?void 0:z.workflowExecutionRetentionTtl.toString())+"")&&T(Te,me),(!A||$&1)&&_e!==(_e=((J=(ye=p[0])==null?void 0:ye.config)==null?void 0:J.historyArchivalState)+"")&&T(Ie,_e),(!A||$&1)&&he!==(he=((Q=(Ne=p[0])==null?void 0:Ne.config)==null?void 0:Q.visibilityArchivalState)+"")&&T(Ve,he),(!A||$&1)&&de!==(de=((we=p[0])==null?void 0:we.failoverVersion)+"")&&T(ke,de),(!A||$&2)&&T(Ce,p[1]),(!A||$&8)&&T(He,p[3]),(!A||$&16)&&T(De,p[4]),p[6]?P?(P.p(p,$),$&64&&V(P,1)):(P=qt(p),P.c(),V(P,1),P.m(ie.parentNode,ie)):P&&(Qt(),K(P,1,1,()=>{P=null}),Jt())},i(p){A||(V(t.$$.fragment,p),V(P),A=!0)},o(p){K(t.$$.fragment,p),K(P),A=!1},d(p){Le(t,p),p&&f(o),p&&f(a),p&&f(c),p&&f(n),p&&f(Oe),P&&P.d(p),p&&f(ie)}}}const Ha=async function({params:i,url:t,stuff:o}){const{searchParams:a}=t;a.has("time-range")&&a.delete("time-range");const s=i.namespace,r=o.namespaces.find(n=>n.namespaceInfo.name===s);if(!r)return{error:`The namespace "${s}" does not exist.`,status:404};const c=ua(r);return{props:{currentNamespace:r,clusters:c}}};function Ea(i,t,o){let a,s,u,r,c,n;ce(i,Lt,y=>o(7,a=y)),ce(i,sa,y=>o(2,s=y)),ce(i,ra,y=>o(3,u=y)),ce(i,la,y=>o(4,r=y)),ce(i,oa,y=>o(5,c=y)),ce(i,na,y=>o(6,n=y));let{currentNamespace:l}=t,{clusters:w}=t;return xt(()=>{var y;ea(Lt,a=(y=l==null?void 0:l.namespaceInfo)===null||y===void 0?void 0:y.name,a)}),i.$$set=y=>{"currentNamespace"in y&&o(0,l=y.currentNamespace),"clusters"in y&&o(1,w=y.clusters)},[l,w,s,u,r,c,n]}class Da extends Wt{constructor(t){super(),Xt(this,t,Ea,va,Zt,{currentNamespace:0,clusters:1})}}export{Da as default,Ha as load};
