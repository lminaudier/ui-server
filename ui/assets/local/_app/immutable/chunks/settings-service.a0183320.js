import{s as b}from"./settings.b198062e.js";import{r as D,a as e,g as A}from"./route-for-api.b3dcf702.js";function h(){return{}.VITE_TEMPORAL_UI_BUILD_TARGET??null}const m=/(tmprl\.cloud|tmprl-test\.cloud)$/,C=async(w=fetch)=>{var l,c,d,i,u,f;const t=D("settings"),a=await e(t,{request:w}),r=h(),o={auth:{enabled:!!((l=a==null?void 0:a.Auth)!=null&&l.Enabled),options:(c=a==null?void 0:a.Auth)==null?void 0:c.Options},baseUrl:A(),codec:{endpoint:(d=a==null?void 0:a.Codec)==null?void 0:d.Endpoint,passAccessToken:(i=a==null?void 0:a.Codec)==null?void 0:i.PassAccessToken,includeCredentials:(u=a==null?void 0:a.Codec)==null?void 0:u.IncludeCredentials,decodeEventHistoryDownload:(f=a==null?void 0:a.Codec)==null?void 0:f.DecodeEventHistoryDownload},defaultNamespace:(a==null?void 0:a.DefaultNamespace)||"default",disableWriteActions:!!(a!=null&&a.DisableWriteActions)||!1,workflowTerminateDisabled:!!(a!=null&&a.WorkflowTerminateDisabled),workflowCancelDisabled:!!(a!=null&&a.WorkflowCancelDisabled),workflowSignalDisabled:!!(a!=null&&a.WorkflowSignalDisabled),workflowResetDisabled:!!(a!=null&&a.WorkflowResetDisabled),batchActionsDisabled:!!(a!=null&&a.BatchActionsDisabled),showTemporalSystemNamespace:a==null?void 0:a.ShowTemporalSystemNamespace,notifyOnNewVersion:a==null?void 0:a.NotifyOnNewVersion,feedbackURL:a==null?void 0:a.FeedbackURL,runtimeEnvironment:{get isCloud(){return r?r==="cloud":m.test(window.location.hostname)},get isLocal(){return r?r==="local":m.test(window.location.hostname)},envOverride:Boolean(r)},version:a==null?void 0:a.Version};return b.set(o),o};export{C as f,m as i};
