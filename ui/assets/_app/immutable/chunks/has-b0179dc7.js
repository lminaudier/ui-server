const s=["Running","TimedOut","Completed","Failed","Completed","ContinuedAsNew","Canceled","Terminated"],o=["===","!==",">=","<=","==","!=","=",">","<","!"],a=["and","or"],i=["(",")"],r=e=>typeof e=="string",u=e=>e===null,f=e=>u(e)||Array.isArray(e)?!1:typeof e=="object",l=e=>{if(!r(e))return!1;for(const t of s)if(e===t)return!0;return!1},d=e=>e===" ",p=e=>e==="'"||e==='"',y=e=>{if(!r(e))return!1;e=e.toLocaleLowerCase();for(const t of o)if(e===t)return!0;return!1},C=e=>{if(!r(e))return!1;e=e.toLocaleLowerCase();for(const t of i)if(e===t)return!0;return!1},w=e=>{if(!r(e))return!1;e=e.toLocaleLowerCase();for(const t of a)if(e===t)return!0;return!1},L=e=>r(e)?(e=e.toLocaleLowerCase(),e==="between"):!1,h=e=>e==="ascending"||e==="descending",g=(e,...t)=>{if(!c(e))return!1;for(const n of t)if(!Object.prototype.hasOwnProperty.call(e,n))return!1;return!0},c=e=>f(e)?!!Object.keys(e).length:!1;export{f as a,r as b,C as c,y as d,d as e,p as f,l as g,g as h,h as i,w as j,L as k};