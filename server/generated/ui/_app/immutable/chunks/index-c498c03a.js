import{c as A,p as C}from"./is-http-23096744.js";import{g as b,a as g,c as y,b as T,d as k}from"./get-codec-36b52a0c.js";import{f as w}from"./format-date-c1755997.js";import{g as P,f as S}from"./index-7ac5c549.js";import{g as E}from"./get-event-categorization-2cfb578f.js";import{s as R}from"./simplify-attributes-055c76f2.js";const q=["Unspecified","Scheduled","Open","New","Started","Initiated","Running","Completed","Fired","CancelRequested","TimedOut","Signaled","Canceled","Failed","Terminated"],W=e=>{if(e.includes("RequestCancel"))return"CancelRequested";for(const n of q)if(e.includes(n))return n};async function F({historyEvent:e,namespace:n,settings:t,accessToken:c},{convertWithCodec:s=y,convertWithWebsocket:o=T,decodeAttributes:a=k,encoderEndpoint:r=A,codecPassAccessToken:d=C}={}){const{key:p,attributes:i}=S(e),u=b(t,r),m=g(t,d),f={...t,codec:{...t==null?void 0:t.codec,endpoint:u,passAccessToken:m}},l=u?await s({attributes:i,namespace:n,settings:f,accessToken:c}):await o(i),v=a(l);return{type:p,...v}}const I=async({historyEvent:e,namespace:n,settings:t,accessToken:c})=>{const s=String(e.eventId),o=e.eventType,a=w(String(e.eventTime)),r=W(o),d=E(o),p=await F({historyEvent:e,namespace:n,settings:t,accessToken:c}).then(i=>R(i));return{...e,attributes:p,eventType:o,classification:r,category:d,id:s,name:o,timestamp:a}},K=async({response:e,namespace:n,settings:t,accessToken:c})=>{const s=await Promise.all(e.map(a=>I({historyEvent:a,namespace:n,settings:t,accessToken:c}))),o=P(s);return{events:s,eventGroups:o}};export{K as t};