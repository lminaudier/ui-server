var L=Object.defineProperty;var T=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var $=(n,o,c)=>o in n?L(n,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[o]=c,l=(n,o)=>{for(var c in o||(o={}))R.call(o,c)&&$(n,c,o[c]);if(T)for(var c of T(o))O.call(o,c)&&$(n,c,o[c]);return n};import{w as S}from"./index-1910a742.js";import{n as t}from"./notifications-0d3ffac1.js";import{i as k}from"./is-network-error-ac7c8caf.js";import{c as q,t as C}from"./route-for-9a2d1abe.js";const x=!0,F=S(null),b=n=>{if(N(n)&&x){window.location.assign(q());return}if(U(n)){t.add("error",`${n.statusCode} ${n.statusText}`);return}if(k(n))throw t.add("error",`${n.statusCode} ${n.statusText}`),F.set(n),n;typeof n=="string"&&t.add("error",n),n instanceof Error&&t.add("error",n.message)},N=n=>k(n)?n.statusCode===401:!1,U=n=>k(n)?n.statusCode===403:!1,K=n=>typeof n=="function",Q=n=>n.message!==void 0&&typeof n.message=="string",D=async(n,o={},c=10)=>{const{params:u={},request:i=fetch,token:f,shouldRetry:_=!1,notifyOnError:P=!0,onError:I,retryInterval:h=5e3}=o;let{options:E}=o;const V=f?{next_page_token:f}:{},g=new URLSearchParams(l(l({},u),V)),y=C(n,g);try{E=M(E);const s=await i(y,E),w=await s.json(),{status:v,statusText:A}=s;if(!s.ok)if(I&&K(I))I({status:v,statusText:A,body:w});else throw{statusCode:s.status,statusText:s.statusText,response:s};return w}catch(s){if(P){if(b(s),_&&c>0)return new Promise(w=>{setTimeout(()=>{w(D(n,o,c-1))},h)})}else throw s}},M=n=>{const o=l({credentials:"include"},n);return o.headers=j(n==null?void 0:n.headers),o},j=n=>{n||(n={});const o="_csrf=",c="X-CSRF-TOKEN";try{let i=document.cookie.split(";").find(f=>f.includes(o));i&&!n[c]&&(i=i.trim().slice(o.length),n[c]=i)}catch(u){console.error(u)}return n};let d="";d.endsWith("/")&&(d=d.slice(0,-1));const B=n=>(n.startsWith("/")&&(n=n.slice(1)),`${d}/api/v1/${n}`),W=n=>Object.keys(n!=null?n:{}).reduce((o,c)=>(o[c]=encodeURIComponent(encodeURIComponent(n[c])),o),{namespace:"",workflowId:"",runId:"",queue:""});function Y(n,o,c=!0){c&&(o=W(o));const u={cluster:"/cluster",settings:"/settings",user:"/me",namespaces:"/namespaces","task-queue":`/namespaces/${o==null?void 0:o.namespace}/task-queues/${o==null?void 0:o.queue}`,workflows:`/namespaces/${o==null?void 0:o.namespace}/workflows`,"workflows.archived":`/namespaces/${o==null?void 0:o.namespace}/workflows/archived`,workflow:`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}`,"workflow.terminate":`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}/terminate`,"events.ascending":`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}/events`,"events.descending":`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}/events/reverse`,query:`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}/query`};return B(u[n])}export{Y as a,x as b,Q as c,b as h,K as i,F as n,D as r};