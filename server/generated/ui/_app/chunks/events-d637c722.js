var P=Object.defineProperty,h=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&m(e,r,t[r]);return e},w=(e,t)=>h(e,E(t));var g=(e,t)=>{var r={};for(var s in e)p.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&u)for(var s of u(e))t.indexOf(s)<0&&d.call(e,s)&&(r[s]=e[s]);return r};import{d as n,r as G,w as c}from"./index-1910a742.js";import{p as i}from"./stores-7881199b.js";import{a as S}from"./events-service-44e0a796.js";import{a as _,b as y}from"./event-view-d6220b12.js";import{j as f}from"./route-for-9a2d1abe.js";import{w as j,d as q}from"./with-loading-724ad3cf.js";import{_ as H}from"./index-e4881ae7.js";const O={events:[],eventGroups:[]},R=n([i],([e])=>f(e.params.namespace)),x=n([i],([e])=>e.params.workflow?f(e.params.workflow):""),C=n([i],([e])=>e.params.run?f(e.params.run):""),F=n([i],([e])=>e.stuff.settings),k={namespace:null,workflowId:null,runId:null,rawPayloads:null,sort:null},I=c(k),X=()=>{I.set(k)},L=(e,t)=>{for(const o of["namespace","workflowId","runId"])if(!e[o])return!1;let r=!0;const s=H(t);for(const o of Object.keys(s))if(s[o]!==e[o]){r=!1;break}return r?!1:(t.set(e),!0)},N=n([R,x,C,_],([e,t,r,s])=>({namespace:e,workflowId:t,runId:r,sort:s})),T=n([N,F],([e,t])=>w(v({},e),{settings:t})),U=e=>T.subscribe(async t=>{const o=t,{settings:r}=o,s=g(o,["settings"]);L(s,I)&&j(z,W,async()=>{var l;const a=await S(t);(l=a==null?void 0:a.events)!=null&&l.length?e(a):setTimeout(()=>{e(a)},q)})}),b=G(O,U),Y=n([b,y],([e,t])=>{const{events:r}=e;return t?r.filter(s=>s.category===t):r}),Z=n([b,y],([e,t])=>{const{eventGroups:r}=e;return t?r.filter(s=>s.category===t):r}),W=c(!0),z=c(!0);export{Z as a,X as c,Y as e};