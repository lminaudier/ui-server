import{a7 as n}from"./index-22b4dbf5.js";import{p as i}from"./persist-store-abb40b77.js";const s=i("AuthUser",{}),m=()=>n(s),p=t=>{const{accessToken:e,idToken:r,name:o,email:a,picture:c}=t;if(!e)throw new Error("No access token");s.set({accessToken:e,idToken:r,name:o,email:a,picture:c})},U=()=>{s.set({})};export{s as a,U as c,m as g,p as s};