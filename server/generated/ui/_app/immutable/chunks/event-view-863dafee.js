import{d as s}from"./index-d8ed1bec.js";import{p as n}from"./stores-7f07ccfb.js";import{p as r}from"./persist-store-c25f6403.js";import{s as a}from"./settings-c94c37e6.js";import{t as i}from"./versions-4a0f3820.js";import{i as p}from"./version-check-3a7b1db8.js";const w=r("autoRefreshWorkflow","off"),S=r("eventView","feed"),h=r("expandAllEvents","false"),f=r("eventFilterSort","descending"),E=r("eventShowElapsed","false"),V=s([n],([e])=>e.url.searchParams.get("category")),m=s([i,a],([e,t])=>t.runtimeEnvironment.isCloud?!0:p(e,"1.16.0")),x=s([f,m],([e,t])=>{let o="ascending";return t&&(o=e),o});export{w as a,f as b,x as c,V as d,S as e,E as f,h as g,m as s};