import{S as T,i as D,s as R,e as B,b as P,f as w,g as V,t as I,d as W,h as g,J as q,M as O,N as S,k as b,a as K,w as M,l as p,m as k,c as Q,x as U,n as u,Q as J,K as C,y as Z,R as j,z as A,Z as F}from"./index-9c2f34db.js";import{I as G}from"./icon-1d11e133.js";import{c as H}from"./copy-to-clipboard-b4f7719a.js";import{p as X,s as Y}from"./parse-with-big-int-02e81897.js";function L(l){let t,n,e,s,o,d,h,c,f,y,_,r,v,E;return f=new G({props:{name:l[4]?"checkmark":"copy",class:"text-white hover:text-gray-900"}}),{c(){t=b("div"),n=b("div"),e=b("pre"),s=b("code"),h=K(),c=b("button"),M(f.$$.fragment),this.h()},l(a){t=p(a,"DIV",{class:!0,"data-cy":!0});var i=k(t);n=p(i,"DIV",{class:!0});var m=k(n);e=p(m,"PRE",{class:!0});var z=k(e);s=p(z,"CODE",{class:!0,"data-cy":!0}),k(s).forEach(g),z.forEach(g),h=Q(m),c=p(m,"BUTTON",{class:!0});var N=k(c);U(f.$$.fragment,N),N.forEach(g),m.forEach(g),i.forEach(g),this.h()},h(){u(s,"class",o="language-"+l[1]+" svelte-1xzf3cb"),u(s,"data-cy",d=l[7]["data-cy"]),u(e,"class","w-full overflow-x-scroll rounded-lg p-4"),J(e,"h-full",!l[0]),u(c,"class","absolute top-2.5 right-2.5 rounded-md bg-gray-900 opacity-90 hover:bg-white"),u(n,"class","relative h-full"),u(t,"class",y="w-full rounded-lg "+(l[0]?"h-auto overflow-auto":"h-full")+" "+l[7].class+" svelte-1xzf3cb"),u(t,"data-cy",_=l[7].dataCy)},m(a,i){P(a,t,i),C(t,n),C(n,e),C(e,s),l[9](s),C(n,h),C(n,c),Z(f,c,null),r=!0,v||(E=j(c,"click",l[10]),v=!0)},p(a,i){(!r||i&2&&o!==(o="language-"+a[1]+" svelte-1xzf3cb"))&&u(s,"class",o),(!r||i&128&&d!==(d=a[7]["data-cy"]))&&u(s,"data-cy",d),(!r||i&1)&&J(e,"h-full",!a[0]);const m={};i&16&&(m.name=a[4]?"checkmark":"copy"),f.$set(m),(!r||i&129&&y!==(y="w-full rounded-lg "+(a[0]?"h-auto overflow-auto":"h-full")+" "+a[7].class+" svelte-1xzf3cb"))&&u(t,"class",y),(!r||i&128&&_!==(_=a[7].dataCy))&&u(t,"data-cy",_)},i(a){r||(w(f.$$.fragment,a),r=!0)},o(a){I(f.$$.fragment,a),r=!1},d(a){a&&g(t),l[9](null),A(f),v=!1,E()}}}function x(l){let t,n,e=(l[3]||l[3]===null)&&L(l);return{c(){e&&e.c(),t=B()},l(s){e&&e.l(s),t=B()},m(s,o){e&&e.m(s,o),P(s,t,o),n=!0},p(s,[o]){s[3]||s[3]===null?e?(e.p(s,o),o&8&&w(e,1)):(e=L(s),e.c(),w(e,1),e.m(t.parentNode,t)):e&&(V(),I(e,1,1,()=>{e=null}),W())},i(s){n||(w(e),n=!0)},o(s){I(e),n=!1},d(s){e&&e.d(s),s&&g(t)}}}function $(l,t,n){l.textContent=n,l.classList.forEach(e=>l.classList.remove(e)),t&&l.classList.add(`language-${t}`),window.Prism.highlightElement(l)}function ee(l,t,n){let e,s,{content:o}=t,{inline:d=!1}=t,{language:h="json"}=t,c,f=h==="json";const y=a=>{if(!a)return;let i;try{i=X(a)}catch{i=a}return Y(i,void 0,d?0:2)},{copy:_,copied:r}=H();q(l,r,a=>n(4,s=a));function v(a){F[a?"unshift":"push"](()=>{c=a,n(2,c)})}const E=a=>_(a,e);return l.$$set=a=>{n(7,t=O(O({},t),S(a))),"content"in a&&n(8,o=a.content),"inline"in a&&n(0,d=a.inline),"language"in a&&n(1,h=a.language)},l.$$.update=()=>{l.$$.dirty&256&&n(3,e=f?y(o):o),l.$$.dirty&14&&c&&window.Prism&&$(c,h,e)},t=S(t),[d,h,c,e,s,_,r,t,o,v,E]}class ne extends T{constructor(t){super(),D(this,t,ee,x,R,{content:8,inline:0,language:1})}}export{ne as C};