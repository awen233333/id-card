var R=Object.defineProperty;var z=(_,t,o)=>t in _?R(_,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):_[t]=o;var y=(_,t,o)=>(z(_,typeof t!="symbol"?t+"":t,o),o);import{d as f,a as I,r as E,c as T,b as G,E as H,e as K,f as X,g as J,h as Q,i as W,j as Z,k as $,l as ee,m as te,n as oe,o as ae,w as r,p as ne,q as A,s as c,t as d,u as C,v as le,x as se,y as D,z as re,F as ce,A as k,_ as ie,B as ue,C as de}from"./vendor.7e7bac56.js";const _e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};_e();class pe{constructor({leave:t=0,isall:o=!1}={}){y(this,"chinaAreaData",f);y(this,"chinaAreaflat");y(this,"leave",3);y(this,"isall",!1);this.leave=t,this.isall=o,this.chinaAreaflat=this.chinaObj()}chinaObj(){const t={};for(const o in f)for(const l in f[o]){const a={label:f[o][l],value:l};o!=="86"&&(a.parent=o),t[l]=a}return t}chinaData(){const o={ssq:f[86]};return this.isall&&(o.custom={label:"\u5168\u90E8",value:"all"}),this.recursion(o)}recursion({ssq:t,leave:o=0,custom:l}){const a=o+1;if(a>this.leave)return;const n=[];l&&n.push(l);for(const i in t){const h={label:t[i],value:i,leave:a};f[i]&&(h.children=this.recursion({ssq:f[i],leave:a,custom:l})),n.push(h)}return n}}const fe=d("h1",null,"\u8EAB\u4EFD\u8BC1\u751F\u6210\u5668",-1),he={class:"block"},me={class:"block"},ve=d("span",{class:"demonstration"},"\u51FA\u751F\u5E74\u6708\u65E5\uFF1A",-1),ye={class:"block"},ge=d("span",{class:"demonstration"},"\u6027\u522B\uFF1A",-1),be=k("\u7537"),Ee=k("\u5973"),Ce=k("\u8EAB\u4EFD\u8BC1\u53F7\uFF1A"),ke={class:"block"},Ae=k("\u590D\u5236"),Fe=d("div",{class:"card-header"},[d("span",null,"\u590D\u5236\u5386\u53F2")],-1),Ve=I({setup(_){var F;const t={size:"small",isall:!1,leave:3},o=E("1990-12-12"),l=E(1),n=(F=new pe({leave:t.leave,isall:t.isall}).chinaData())==null?void 0:F.splice(0,31),i=E(),h=E(["440000","440100","440118"]),x=s=>{console.log(s[2])},B=s=>{console.log(s)},M=s=>{console.log(s)},N=s=>s.getTime()>Date.now();function O(s){let e=s.split("").map(Number),v=e[0]*7+e[1]*9+e[2]*10+e[3]*5+e[4]*8+e[5]*4+e[6]*2+e[7]*1+e[8]*6+e[9]*3+e[10]*7+e[11]*9+e[12]*10+e[13]*5+e[14]*8+e[15]*4+e[16]*2;return{0:"1",1:"0",2:"X",3:"9",4:"8",5:"7",6:"6",7:"5",8:"4",9:"3",10:"2"}[v%11]}const m=T(()=>{let s=h.value[2],e=ne(o.value).format("YYYYMMDD"),v=Math.floor(Math.random()*90+10).toString(),p=Math.floor(Math.random()*10);(p%2==0&&l.value===1||p%2==1&&l.value===2)&&(p=(p+1)%10);let b=s.concat(e).concat(v).concat(p.toString());return b.concat(O(b))}),g=G({arr:Array()}),w=async()=>{let s=g.arr.indexOf(m.value);s>-1&&g.arr.splice(s,1),g.arr.push(m.value),await ie().toClipboard(m.value)};return(s,e)=>{const v=H,p=K,b=X,V=J,L=Q,P=W,S=Z,j=$,U=ee,Y=te,q=oe;return A(),ae(q,null,{default:r(()=>[c(v,null,{default:r(()=>[fe]),_:1}),c(P,null,{default:r(()=>[d("div",he,[c(p,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=u=>h.value=u),options:C(n),props:t,onChange:x,ref_key:"cascader",ref:i},null,8,["modelValue","options"])]),d("div",me,[ve,c(b,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=u=>o.value=u),type:"date",placeholder:"Pick a day","disabled-date":N,onChange:M},null,8,["modelValue"])]),d("div",ye,[ge,c(L,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=u=>l.value=u),onChange:B},{default:r(()=>[c(V,{label:1},{default:r(()=>[be]),_:1}),c(V,{label:2},{default:r(()=>[Ee]),_:1})]),_:1},8,["modelValue"])])]),_:1}),c(Y,null,{default:r(()=>[c(S,{type:"text",modelValue:C(m),"onUpdate:modelValue":e[3]||(e[3]=u=>le(m)?m.value=u:null)},{prepend:r(()=>[Ce]),_:1},8,["modelValue"]),d("div",ke,[c(j,{type:"primary",icon:C(se),onClick:w},{default:r(()=>[Ae]),_:1},8,["icon"])]),c(U,{class:"box-card block"},{header:r(()=>[Fe]),default:r(()=>[(A(!0),D(ce,null,re(C(g).arr,u=>(A(),D("div",{key:u,class:"text item"},ue(u),1))),128))]),_:1})]),_:1})]),_:1})}}});de(Ve).mount("#app");
