import{C as i}from"./vendor-aac54a92.js";const b=(e,o=e(),n=1e4)=>{let r;const s=()=>{e().then(l=>t.set(Promise.resolve(l)))},a=()=>clearInterval(r),c=()=>(r=setInterval(s,n),a),t=i(Promise.resolve(o),c);return{subscribe:t.subscribe,refresh:s}};export{b as r};