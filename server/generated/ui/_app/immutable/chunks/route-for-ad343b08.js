const P=!0,f=(e,r)=>{const t=r instanceof URLSearchParams;return r&&!t&&(r=new URLSearchParams(r)),r?`${e}?${r}`:e},s={VITE_API:"",VITE_MODE:"development",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_PUBLIC_PATH||"";function l(e){return e.replace(/%/g,"%25").replace(/,/g,"%2C").replace(/\//g,"%2F").replace(/\\/g,"%5C").replace(/\?/g,"%3F").replace(/:/g,"%3A").replace(/@/g,"%40").replace(/&/g,"%26").replace(/=/g,"%3D").replace(/\+/g,"%2B").replace(/\$/g,"%24").replace(/#/g,"%23")}function d(e){return e.replace(/%2C/g,",").replace(/%2F/g,"/").replace(/%5C/g,"\\").replace(/%3F/g,"?").replace(/%3A/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3D/g,"=").replace(/%2B/g,"+").replace(/%24/g,"$").replace(/%23/g,"#").replace(/%25/g,"%")}const h=e=>e==="feed"||e==="compact"||e==="json",m=()=>`${s}/namespaces`,c=({namespace:e})=>`${s}/namespaces/${e}`,F=e=>`${c(e)}/workflows`,w=e=>`${c(e)}/archival`,a=({workflow:e,run:r,...t})=>{const o=l(e);return`${F(t)}/${o}/${r}`},p=e=>`${c(e)}/schedules`,U=({namespace:e})=>`${p({namespace:e})}/new`,k=({scheduleId:e,namespace:r})=>{const t=l(e);return`${p({namespace:r})}/${t}`},S=({view:e,queryParams:r,...t})=>{const o=`${a(t)}/history`;return!e||!h(e)?`${o}/feed`:f(`${o}/${e}`,r)},E=e=>`${a(e)}/workers`,R=e=>{const r=l(e.queue);return`${c({namespace:e.namespace})}/task-queues/${r}`},L=e=>`${a(e)}/stack-trace`,A=e=>`${a(e)}/query`,I=e=>`${a(e)}/pending-activities`,v=e=>{var i;const{settings:r,searchParams:t,originUrl:o}=e,n=new URL(`${s}/auth/sso`,r.baseUrl);let u=(i=r.auth.options)!=null?i:[];return u=[...u,"returnUrl"],u.forEach(g=>{const $=t.get(g);$&&n.searchParams.set(g,$)}),!n.searchParams.get("returnUrl")&&o&&n.searchParams.set("returnUrl",o),n.toString()},C=(e="",r=!0)=>{if(r){const t=new URL(`${s}/login`,window.location.origin);return t.searchParams.set("returnUrl",window.location.href),e&&t.searchParams.set("error",e),t.toString()}return`${s}/login`},D=({importType:e,view:r})=>e==="events"&&r?`${s}/import/${e}/namespace/workflow/run/history/${r}`:`${s}/import/${e}`;export{w as a,P as b,m as c,p as d,C as e,D as f,S as g,E as h,I as i,L as j,A as k,l,d as m,a as n,R as o,s as p,v as q,F as r,k as s,f as t,U as u,c as v};