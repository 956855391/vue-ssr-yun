import{d as L,r as S,c as P,a as i,t as A,b as m,w as _,F as D,p as T,e as O,o as f,f as k,g as $,S as R,h as v,i as N,j as V,k as b,l as x}from"./vendor.b84a78c3.js";const C=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};C();var B="/assets/logo.03d6d6da.png";var F=(t,a)=>{const s=t.__vccOpts||t;for(const[o,e]of a)s[o]=e;return s};const G=L({name:"App",data(){return{time:""}},mounted(){window.setInterval(()=>{this.time=new Date().toLocaleString()},1e3)}}),y=t=>(T("data-v-2ae6c14f"),t=t(),O(),t),H={class:"logo"},q=y(()=>i("img",{alt:"Vue logo",src:B},null,-1)),M=y(()=>i("h3",null,"Vue3.0.0.0.0022 Typescript Eslint SSR Starter",-1)),W={class:"c-#DB752D"},K=v("Go to Home"),U=v("Go to User"),j=v("Go to Market"),z=y(()=>i("hr",null,null,-1)),J={class:"container pt-12px pb-12px"};function Q(t,a,s,o,e,r){const n=S("router-link"),l=S("router-view");return f(),P(D,null,[i("div",H,[q,M,i("p",W,A(t.time),1)]),i("nav",null,[m(n,{to:{name:"index"}},{default:_(()=>[K]),_:1}),m(n,{to:{name:"user"}},{default:_(()=>[U]),_:1}),m(n,{to:{name:"market"}},{default:_(()=>[j]),_:1})]),z,i("div",J,[m(l,null,{default:_(({Component:d})=>[(f(),k(R,null,{default:_(()=>[(f(),k($(d)))]),_:2},1024))]),_:1})])],64)}var X=F(G,[["render",Q],["__scopeId","data-v-2ae6c14f"]]);const Y=t=>!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function",Z="modulepreload",w={},ee="/",h=function(a,s){return!s||s.length===0?a():Promise.all(s.map(o=>{if(o=`${ee}${o}`,o in w)return;w[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":Z,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((l,d)=>{n.addEventListener("load",l),n.addEventListener("error",d)})})).then(()=>a())};function te(){const t=N();return V({history:t,routes:[{path:"/",name:"index",component:()=>h(()=>import("./index.cc6b594e.js"),["assets/index.cc6b594e.js","assets/index.9aa8ceb0.css","assets/vendor.b84a78c3.js","assets/Loading.9d7a29f5.js"])},{path:"/user",name:"user",component:()=>h(()=>import("./user.4d943e88.js"),["assets/user.4d943e88.js","assets/user.75b9dbcd.css","assets/Loading.9d7a29f5.js","assets/vendor.b84a78c3.js"])},{path:"/market",name:"market",component:()=>h(()=>import("./market.c74e1d3a.js"),["assets/market.c74e1d3a.js","assets/market.3cc2fdc1.css","assets/vendor.b84a78c3.js"])}]})}const p=te(),g=b(),E=x(X);E.use(p).use(g);p.beforeResolve((t,a,s)=>{let o=!1;const e=p.resolve(t).matched,r=p.resolve(a).matched;if(a&&!a.name||!e.filter((c,u)=>o||(o=r[u]!==c)).length)return s();const l=[];e.map(c=>{l.push(...Object.values(c.components))});const d=l.map(c=>{const u=c.asyncData||null;if(u){const I={store:g,route:t};return Y(u)===!1?Promise.resolve(u(I)):u(I)}});try{Promise.all(d).then(()=>{s()})}catch(c){s(c)}});window.__INITIAL_STATE__&&(g.state.value=window.__INITIAL_STATE__);p.isReady().then(()=>{E.mount("#app",!0)});export{F as _};