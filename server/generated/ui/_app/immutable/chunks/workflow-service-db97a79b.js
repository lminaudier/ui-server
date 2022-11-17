import{a7 as $}from"./index-a7390e4f.js";import{s as C}from"./settings-73de400d.js";import{s as F}from"./simplify-attributes-055c76f2.js";import{r as f,a as u,b as D,i as P,c as q}from"./route-for-api-6aaa2188.js";import{h as z,j as K,k as S,l as Q}from"./format-time-d031c2bc.js";const R=(t=C)=>!$(t).disableWriteActions,p=(t=[])=>t.map(o=>{const n=F(o,!0),e=o.activityId;return{...n,id:e}}),x=t=>{var E,y,T,I,A,W;const o=t.workflowExecutionInfo.type.name,n=t.workflowExecutionInfo.execution.workflowId,e=t.workflowExecutionInfo.execution.runId,r=String(t.workflowExecutionInfo.startTime),s=String(t.workflowExecutionInfo.closeTime),c=t.workflowExecutionInfo.status,a=t.workflowExecutionInfo.status==="Running",m=t.workflowExecutionInfo.historyLength,h=`/workflows/${n}/${e}`,g=(y=(E=t==null?void 0:t.executionConfig)==null?void 0:E.taskQueue)==null?void 0:y.name,l=(T=t==null?void 0:t.workflowExecutionInfo)==null?void 0:T.parentNamespaceId,i=(I=t==null?void 0:t.workflowExecutionInfo)==null?void 0:I.parentExecution,w=t.workflowExecutionInfo.stateTransitionCount,d=(A=t.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,k=p(t.pendingActivities),b=(W=t==null?void 0:t.pendingChildren)!=null?W:[];return{name:o,id:n,runId:e,startTime:r,endTime:s,status:c,historyEvents:m,url:h,taskQueue:g,pendingActivities:k,pendingChildren:b,parentNamespaceId:l,parent:i,stateTransitionCount:w,isRunning:a,defaultWorkflowTaskTimeout:d,get canBeTerminated(){return a&&R()}}},N=t=>(t.executions||[]).map(o=>x({workflowExecutionInfo:o})),j={workflowId:"WorkflowId",workflowType:"WorkflowType",timeRange:"StartTime",executionStatus:"ExecutionStatus",closeTime:"CloseTime"},B=["workflowId","workflowType","timeRange","executionStatus","closeTime"],O=t=>!(t===null||t===void 0||t===""||typeof t=="string"&&t==="undefined"),U=t=>{if(typeof t!="string")return!1;for(const o of B)if(o===t)return!0;return!1},L=(t,o,n)=>{const e=j[t];return o==="All"?"":z(o)||K(o)?n?`${e} > "${S(o)}"`:`${e} BETWEEN "${S(o)}" AND "${Q()}"`:`${e}="${o}"`},_=(t,o)=>Object.entries(t).map(([n,e])=>{if(U(n)&&O(e))return L(n,e,o)}).filter(Boolean),V=(t,o=!1)=>_(t,o).join(" and "),G=async(t,o,n=fetch,e=!1)=>{var l;const r=decodeURIComponent(o.query||V(o,e)),s=e?"workflows.archived":"workflows";let c="";const a=i=>{var w,d,k;D(i),((w=i==null?void 0:i.body)==null?void 0:w.message)||(i==null?void 0:i.status)?c=(k=(d=i==null?void 0:i.body)==null?void 0:d.message)!=null?k:`Error fetching workflows: ${i.status}: ${i.statusText}`:c="Error fetching workflows: Server failed to respond"},m=await f(s,{namespace:t}),{executions:h,nextPageToken:g}=(l=await u(m,{params:{query:r},onError:a,handleError:a,request:n}))!=null?l:{executions:[],nextPageToken:""};return{workflows:N({executions:h}),nextPageToken:String(g),error:c}},Z=async(t,o=fetch,n=!1)=>{const e=n?"workflows.archived":"workflows";let r=!0;const s=a=>{(P(a)||q(a))&&(r=!1)},c=await f(e,{namespace:t});return await u(c,{params:{pageSize:"1"},onError:s,handleError:s,request:o}),{authorized:r}},v=async(t,o,n=fetch)=>G(t,o,n,!0);async function tt(t,o=fetch){const n=await f("workflow",t);return u(n,{request:o}).then(x)}const ot=async({namespace:t,workflowId:o,runId:n},e=fetch)=>{const r=await f("workflow.cancel",{namespace:t,workflowId:o,runId:n});return u(r,{request:e,options:{method:"POST"}})};async function nt(t,o=fetch){const n=r=>{console.error(r)},e=await f("workflow",t);return u(e,{request:o,onError:n,handleError:n}).then(x)}export{G as a,Z as b,ot as c,v as d,nt as e,tt as f,V as t,R as w};
