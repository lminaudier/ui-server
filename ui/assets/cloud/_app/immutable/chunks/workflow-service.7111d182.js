import{b as z}from"./decode-payload.f16b303a.js";import{c as P}from"./has.8da86d13.js";import{W as B,n as w}from"./index.16e2925e.js";import{s as R}from"./settings.065e402a.js";import{s as Q}from"./simplify-attributes.272e4935.js";import{r as l,a as u,b as U,i as $,c as q}from"./route-for-api.3fa684e5.js";import{t as N}from"./list-workflow-query.27e6c71c.js";import{s as E}from"./parse-with-big-int.0036a80a.js";import{B as _}from"./route-for.36eb2598.js";import{v as j}from"./toaster.fda32b20.js";const D=(o=R)=>!B(o).disableWriteActions,L=(o=[])=>o.map(t=>{const n=Q(t,!0),r=t.activityId;return{...n,id:r}}),G=o=>P(o)||P(o.indexedFields)?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[r,e])=>({...n,[r]:z(e)}),{})},x=o=>{var I,g,b,W,T,A;const t=G(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.type.name,r=o.workflowExecutionInfo.execution.workflowId,e=o.workflowExecutionInfo.execution.runId,i=o.workflowExecutionInfo.startTime,a=o.workflowExecutionInfo.closeTime,c=o.workflowExecutionInfo.status,f=o.workflowExecutionInfo.status==="Running",d=o.workflowExecutionInfo.historyLength,h=o.workflowExecutionInfo.historySizeBytes,y=`/workflows/${r}/${e}`,s=((g=(I=o==null?void 0:o.executionConfig)==null?void 0:I.taskQueue)==null?void 0:g.name)||((b=o==null?void 0:o.workflowExecutionInfo)==null?void 0:b.taskQueue),k=(W=o==null?void 0:o.workflowExecutionInfo)==null?void 0:W.parentNamespaceId,m=(T=o==null?void 0:o.workflowExecutionInfo)==null?void 0:T.parentExecution,p=o.workflowExecutionInfo.stateTransitionCount,v=(A=o.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,C=L(o.pendingActivities),O=(o==null?void 0:o.pendingChildren)??[];return{name:n,id:r,runId:e,startTime:i,endTime:a,status:c,historyEvents:d,historySizeBytes:h,searchAttributes:t,url:y,taskQueue:s,pendingActivities:C,pendingChildren:O,parentNamespaceId:k,parent:m,stateTransitionCount:p,isRunning:f,defaultWorkflowTaskTimeout:v,get canBeTerminated(){return f&&D()}}},S=o=>(o.executions||[]).map(t=>x({workflowExecutionInfo:t})),H=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(parseInt(n,16)))),F=(o,t=_)=>t?H(o):o,eo=async(o,t,n=fetch)=>{let r=0,e=0;try{const i=l("workflows.count",{namespace:o});if(t){const a=u(i,{params:{query:t},onError:w,handleError:w,request:n}),c=u(i,{params:{query:""},onError:w,handleError:w,request:n}),[f,d]=await Promise.all([a,c]);e=f==null?void 0:f.count,r=d==null?void 0:d.count}else{const a=await u(i,{params:{},onError:w,handleError:w,request:n});r=a==null?void 0:a.count}}catch{}return{count:e,totalCount:r}},J=async(o,t,n=fetch,r=!1)=>{const e=t.query||N(t,r);let i;try{i=decodeURIComponent(e)}catch{i=e}const a=r?"workflows.archived":"workflows";let c="";const f=s=>{var k,m;U(s),(k=s==null?void 0:s.body)!=null&&k.message||s!=null&&s.status?c=((m=s==null?void 0:s.body)==null?void 0:m.message)??`Error fetching workflows: ${s.status}: ${s.statusText}`:c="Error fetching workflows: Server failed to respond"},d=l(a,{namespace:o}),{executions:h,nextPageToken:y}=await u(d,{params:{query:i},onError:f,handleError:f,request:n})??{executions:[],nextPageToken:""};return{workflows:S({executions:h}),nextPageToken:String(y),error:c}},io=async(o,t=fetch)=>{var f;const{namespace:n,workflowId:r}=o,i=l("workflows",{namespace:n}),{executions:a}=await u(i,{params:{query:`WorkflowId="${r}"`,pageSize:"1"},request:t})??{executions:[]},c=(f=S({executions:a}))==null?void 0:f[0];return{runId:c==null?void 0:c.runId}},co=async(o,t=fetch,n=!1)=>{const r=n?"workflows.archived":"workflows";let e=!0;const i=c=>{($(c)||q(c))&&(e=!1)},a=l(r,{namespace:o});return await u(a,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:e}},ao=async(o,t,n=fetch)=>J(o,t,n,!0);async function so(o,t=fetch){const n=l("workflow",o);return u(n,{request:t}).then(x)}async function fo({workflow:o,namespace:t,reason:n}){const r=l("workflow.terminate",{namespace:t,workflowId:o.id,runId:o.runId});return await u(r,{options:{method:"POST",body:E({reason:n})},shouldRetry:!1,notifyOnError:!1})}async function uo({namespace:o,workflowId:t,runId:n},r=fetch){const e=l("workflow.cancel",{namespace:o,workflowId:t,runId:n});return u(e,{request:r,notifyOnError:!1,options:{method:"POST"}})}async function lo({namespace:o,workflowId:t,runId:n,signalName:r,signalInput:e}){const i=l("workflow.signal",{namespace:o,workflowId:t,runId:n});return u(i,{notifyOnError:!1,options:{method:"POST",body:E({signalName:r,input:{payloads:e?[{metadata:{encoding:F("json/plain")},data:F(e)}]:null}})}})}async function wo({namespace:o,workflowId:t,runId:n,eventId:r,reason:e,resetReapplyType:i}){const a=l("workflow.reset",{namespace:o,workflowId:t,runId:n}),c={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:r,resetReapplyType:i,requestId:j(),reason:e};return u(a,{notifyOnError:!1,options:{method:"POST",body:E(c)}})}async function ko(o,t=fetch){const n=e=>{console.error(e)},r=l("workflow",o);return u(r,{request:t,onError:n,handleError:n}).then(x)}export{J as a,eo as b,uo as c,co as d,ao as e,so as f,ko as g,io as h,wo as r,lo as s,fo as t,D as w};