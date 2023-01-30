import{d as g,w as j}from"./index-9821ab11.js";import{p as I}from"./stores-4e1b824b.js";import{e as L}from"./event-view-4ff5ed11.js";import{l as q}from"./route-for-9e2a964e.js";import{r as D}from"./workflow-run-1501c275.js";import{a as O}from"./auth-user-53cdc41c.js";import{S as W,i as X,s as Y,k as y,a as P,q as Z,l as E,m as w,c as T,r as U,h as v,n as h,Q as V,b as A,K as b,f as _,g as C,t as p,d as z,u as x,ae as $,M as G,N as K,w as ee,x as te,y as se,z as ne,F as ae,G as oe,H as re,I as ie}from"./index-3630b6f8.js";import{I as le}from"./icon-a76a7fcc.js";import{p as B}from"./paginated-b924c989.js";import{r as F,a as H}from"./route-for-api-ccb80f4c.js";import{t as S}from"./index-889b059d.js";import{a as ce}from"./is-199b1f9e.js";const fe=g([I],([t])=>t.params.namespace?q(t.params.namespace):""),ue=g([I],([t])=>t.params.workflow?q(t.params.workflow):""),de=g([I],([t])=>t.params.run?q(t.params.run):""),me=g([I],([t])=>{var e;return(e=t.data)==null?void 0:e.settings}),_e=g([O],([t])=>t==null?void 0:t.accessToken),ve=g([fe,ue,de,L],([t,e,n,r])=>({namespace:t,workflowId:e,runId:n,sort:r}));g([ve,me,_e,D],([t,e,n,r])=>({...t,settings:e,accessToken:n,refresh:D,$refresh:r}));const he={start:[],end:[]},De=j(he),Pe=j(null);function M(t){let e,n,r;return n=new le({props:{name:t[2]}}),{c(){e=y("div"),ee(n.$$.fragment)},l(s){e=E(s,"DIV",{});var a=w(e);te(n.$$.fragment,a),a.forEach(v)},m(s,a){A(s,e,a),se(n,e,null),r=!0},p(s,a){const i={};a&4&&(i.name=s[2]),n.$set(i)},i(s){r||(_(n.$$.fragment,s),r=!0)},o(s){p(n.$$.fragment,s),r=!1},d(s){s&&v(e),ne(n)}}}function N(t){let e,n;const r=t[7].default,s=ae(r,t,t[6],null);return{c(){e=y("div"),s&&s.c(),this.h()},l(a){e=E(a,"DIV",{class:!0});var i=w(e);s&&s.l(i),i.forEach(v),this.h()},h(){h(e,"class","content svelte-19bo4l1")},m(a,i){A(a,e,i),s&&s.m(e,null),n=!0},p(a,i){s&&s.p&&(!n||i&64)&&oe(s,r,a,a[6],n?ie(r,a[6],i,null):re(a[6]),null)},i(a){n||(_(s,a),n=!0)},o(a){p(s,a),n=!1},d(a){a&&v(e),s&&s.d(a)}}}function ge(t){let e,n,r,s,a,i,d,m,u,o=t[2]&&M(t),l=t[5].default&&N(t);return{c(){e=y("div"),o&&o.c(),n=P(),r=y("div"),s=y("h5"),a=Z(t[1]),i=P(),l&&l.c(),this.h()},l(c){e=E(c,"DIV",{class:!0,"data-cy":!0});var f=w(e);o&&o.l(f),n=T(f),r=E(f,"DIV",{class:!0});var k=w(r);s=E(k,"H5",{class:!0});var R=w(s);a=U(R,t[1]),R.forEach(v),i=T(k),l&&l.l(k),k.forEach(v),f.forEach(v),this.h()},h(){h(s,"class","font-semibold leading-6"),h(r,"class","ml-1"),h(e,"class",d="alert "+t[0]+" "+t[4].class+" svelte-19bo4l1"),h(e,"data-cy",m=t[4].dataCy),V(e,"bold",t[3])},m(c,f){A(c,e,f),o&&o.m(e,null),b(e,n),b(e,r),b(r,s),b(s,a),b(r,i),l&&l.m(r,null),u=!0},p(c,[f]){c[2]?o?(o.p(c,f),f&4&&_(o,1)):(o=M(c),o.c(),_(o,1),o.m(e,n)):o&&(C(),p(o,1,1,()=>{o=null}),z()),(!u||f&2)&&x(a,c[1]),c[5].default?l?(l.p(c,f),f&32&&_(l,1)):(l=N(c),l.c(),_(l,1),l.m(r,null)):l&&(C(),p(l,1,1,()=>{l=null}),z()),(!u||f&17&&d!==(d="alert "+c[0]+" "+c[4].class+" svelte-19bo4l1"))&&h(e,"class",d),(!u||f&16&&m!==(m=c[4].dataCy))&&h(e,"data-cy",m),(!u||f&25)&&V(e,"bold",c[3])},i(c){u||(_(o),_(l),u=!0)},o(c){p(o),p(l),u=!1},d(c){c&&v(e),o&&o.d(),l&&l.d()}}}function pe(t,e,n){let{$$slots:r={},$$scope:s}=e;const a=$(r);let{intent:i}=e,{title:d}=e,{icon:m=null}=e,{bold:u=!1}=e;return t.$$set=o=>{n(4,e=G(G({},e),K(o))),"intent"in o&&n(0,i=o.intent),"title"in o&&n(1,d=o.title),"icon"in o&&n(2,m=o.icon),"bold"in o&&n(3,u=o.bold),"$$scope"in o&&n(6,s=o.$$scope)},e=K(e),[i,d,m,u,e,a,s,r]}class Te extends W{constructor(e){super(),X(this,e,pe,ge,Y,{intent:0,title:1,icon:2,bold:3})}}const J=t=>!ce(t)||t==="descending"?"events.descending":t==="ascending"?"events.ascending":"events.descending",Ve=async({namespace:t,workflowId:e,runId:n,sort:r,onStart:s,onUpdate:a,onComplete:i})=>{const d=J(r),m=await F(d,{namespace:t,workflowId:e,runId:n});return(await B(async o=>H(m,{token:o,request:fetch}),{onStart:s,onUpdate:a,onComplete:i})).history.events},Ce=async({namespace:t,workflowId:e,runId:n,sort:r,settings:s,accessToken:a,onStart:i,onUpdate:d,onComplete:m})=>{const u=J(r),o=await F(u,{namespace:t,workflowId:e,runId:n}),l=await B(async f=>H(o,{token:f,request:fetch}),{onStart:i,onUpdate:d,onComplete:m});return await S({response:l.history.events,namespace:t,settings:s,accessToken:a})},Q=async({namespace:t,workflowId:e,runId:n,sort:r})=>{const s=await F(`events.${r}`,{namespace:t,workflowId:e,runId:n});try{return(await H(s,{request:fetch,params:{maximumPageSize:"20"}})).history.events}catch{return[]}},ze=async t=>{const{settings:e,namespace:n,accessToken:r}=t,s=await Q({...t,sort:"ascending"}),a=await Q({...t,sort:"descending"}),[i,d]=await Promise.all([S({response:s,namespace:n,settings:e,accessToken:r}),S({response:a,namespace:n,settings:e,accessToken:r})]);return{start:i,end:d}};export{Te as A,Ve as a,Ce as b,De as e,ze as f,he as i,Pe as t};
