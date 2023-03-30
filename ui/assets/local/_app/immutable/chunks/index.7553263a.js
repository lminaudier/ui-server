import{c as y,p as T,i as g}from"./is-http.1e6b12cd.js";import{c as v,a as k,d as w}from"./decode-payload.0f146c0c.js";import{f as P}from"./format-date.ee30003a.js";import{f as S}from"./is-event-type.763b5d4b.js";import{g as R,a as q,b as E}from"./get-codec.6f32083c.js";import{g as I}from"./get-event-categorization.d6ff7ec7.js";import{s as W}from"./simplify-attributes.ba9bcd12.js";const F=["Unspecified","Scheduled","Open","New","Started","Initiated","Running","Completed","Fired","CancelRequested","TimedOut","Signaled","Canceled","Failed","Terminated"],J=e=>{if(e.includes("RequestCancel"))return"CancelRequested";for(const n of F)if(e.includes(n))return n};async function O({historyEvent:e,namespace:n,settings:t,accessToken:s},{convertWithCodec:a=v,convertWithWebsocket:o=k,decodeAttributes:c=w,encoderEndpoint:i=y,codecPassAccessToken:d=T,codecIncludeCredentials:r=g}={}){const{key:l,attributes:u}=S(e),m=R(t,i),p=q(t,d),f=E(t,r),C={...t,codec:{...t==null?void 0:t.codec,endpoint:m,passAccessToken:p,includeCredentials:f}},A=m?await a({attributes:u,namespace:n,settings:C,accessToken:s}):await o(u),b=c(A);return{type:l,...b}}const x=async({historyEvent:e,namespace:n,settings:t,accessToken:s})=>{const a=String(e.eventId),o=e.eventType,c=P(String(e.eventTime)),i=J(o),d=I(o),r=await O({historyEvent:e,namespace:n,settings:t,accessToken:s}).then(l=>W(l));return{...e,name:o,id:a,eventType:o,timestamp:c,classification:i,category:d,attributes:r}},j=async({response:e,namespace:n,settings:t,accessToken:s})=>await Promise.all(e.map(a=>x({historyEvent:a,namespace:n,settings:t,accessToken:s})));export{j as t};
