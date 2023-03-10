var ct=Object.defineProperty;var o=(e,t)=>ct(e,"name",{value:t,configurable:!0});import{s as it,v as q,N as Y,i as S,y as ze,E as Ge,d as ve,h as Ue,O as ue,q as at,x as lt,J as _e,P as ut,r as ft,o as dt,m as ht}from"./vue.esm-bundler.ef0b5a47.js";import{u as M}from"./query.a6234553.js";import{_ as pt}from"./+plugin-vue+export-helper.ed6a1c48.js";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const z=typeof window<"u";function mt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}o(mt,"isESModule");const P=Object.assign;function fe(e,t){const n={};for(const r in t){const s=t[r];n[r]=T(s)?s.map(e):e(s)}return n}o(fe,"applyToParams");const X=o(()=>{},"noop"),T=Array.isArray,gt=/\/$/,vt=o(e=>e.replace(gt,""),"removeTrailingSlash");function de(e,t,n="/"){let r,s={},d="",p="";const g=t.indexOf("#");let c=t.indexOf("?");return g<c&&g>=0&&(c=-1),c>-1&&(r=t.slice(0,c),d=t.slice(c+1,g>-1?g:t.length),s=e(d)),g>-1&&(r=r||t.slice(0,g),p=t.slice(g,t.length)),r=wt(r!=null?r:t,n),{fullPath:r+(d&&"?")+d+p,path:r,query:s,hash:p}}o(de,"parseURL");function yt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}o(yt,"stringifyURL");function Ce(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}o(Ce,"stripBase");function Et(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&G(t.matched[r],n.matched[s])&&Fe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}o(Et,"isSameRouteLocation");function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}o(G,"isSameRouteRecord");function Fe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Rt(e[n],t[n]))return!1;return!0}o(Fe,"isSameRouteLocationParams");function Rt(e,t){return T(e)?Ae(e,t):T(t)?Ae(t,e):e===t}o(Rt,"isSameRouteLocationParamsValue");function Ae(e,t){return T(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}o(Ae,"isEquivalentArray");function wt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,d,p;for(d=0;d<r.length;d++)if(p=r[d],p!==".")if(p==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(d-(d===r.length?1:0)).join("/")}o(wt,"resolveRelativePath");var J;(function(e){e.pop="pop",e.push="push"})(J||(J={}));var Z;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Z||(Z={}));function bt(e){if(!e)if(z){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),vt(e)}o(bt,"normalizeBase");const kt=/^[^#]+#/;function Pt(e,t){return e.replace(kt,"#")+t}o(Pt,"createHref");function St(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}o(St,"getElementPosition");const ne=o(()=>({left:window.pageXOffset,top:window.pageYOffset}),"computeScrollPosition");function _t(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=St(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}o(_t,"scrollToPosition");function Oe(e,t){return(history.state?history.state.position-t:-1)+e}o(Oe,"getScrollKey");const pe=new Map;function Ct(e,t){pe.set(e,t)}o(Ct,"saveScrollPosition");function At(e){const t=pe.get(e);return pe.delete(e),t}o(At,"getSavedScrollPosition");let Ot=o(()=>location.protocol+"//"+location.host,"createBaseLocation");function De(e,t){const{pathname:n,search:r,hash:s}=t,d=e.indexOf("#");if(d>-1){let g=s.includes(e.slice(d))?e.slice(d).length:1,c=s.slice(g);return c[0]!=="/"&&(c="/"+c),Ce(c,"")}return Ce(n,e)+r+s}o(De,"createCurrentLocation");function xt(e,t,n,r){let s=[],d=[],p=null;const g=o(({state:f})=>{const v=De(e,location),R=n.value,A=t.value;let C=0;if(f){if(n.value=v,t.value=f,p&&p===R){p=null;return}C=A?f.position-A.position:0}else r(v);s.forEach(w=>{w(n.value,R,{delta:C,type:J.pop,direction:C?C>0?Z.forward:Z.back:Z.unknown})})},"popStateHandler");function c(){p=n.value}o(c,"pauseListeners");function l(f){s.push(f);const v=o(()=>{const R=s.indexOf(f);R>-1&&s.splice(R,1)},"teardown");return d.push(v),v}o(l,"listen");function i(){const{history:f}=window;!f.state||f.replaceState(P({},f.state,{scroll:ne()}),"")}o(i,"beforeUnloadListener");function u(){for(const f of d)f();d=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",i)}return o(u,"destroy"),window.addEventListener("popstate",g),window.addEventListener("beforeunload",i),{pauseListeners:c,listen:l,destroy:u}}o(xt,"useHistoryListeners");function xe(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ne():null}}o(xe,"buildState");function Mt(e){const{history:t,location:n}=window,r={value:De(e,n)},s={value:t.state};s.value||d(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function d(c,l,i){const u=e.indexOf("#"),f=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+c:Ot()+e+c;try{t[i?"replaceState":"pushState"](l,"",f),s.value=l}catch(v){console.error(v),n[i?"replace":"assign"](f)}}o(d,"changeLocation");function p(c,l){const i=P({},t.state,xe(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});d(c,i,!0),r.value=c}o(p,"replace");function g(c,l){const i=P({},s.value,t.state,{forward:c,scroll:ne()});d(i.current,i,!0);const u=P({},xe(r.value,c,null),{position:i.position+1},l);d(c,u,!1),r.value=c}return o(g,"push"),{location:r,state:s,push:g,replace:p}}o(Mt,"useHistoryStateNavigation");function Nt(e){e=bt(e);const t=Mt(e),n=xt(e,t.state,t.location,t.replace);function r(d,p=!0){p||n.pauseListeners(),history.go(d)}o(r,"go");const s=P({location:"",base:e,go:r,createHref:Pt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}o(Nt,"createWebHistory");function _n(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Nt(e)}o(_n,"createWebHashHistory");function $t(e){return typeof e=="string"||e&&typeof e=="object"}o($t,"isRouteLocation");function Qe(e){return typeof e=="string"||typeof e=="symbol"}o(Qe,"isRouteName");const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},We=Symbol("");var Me;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Me||(Me={}));function U(e,t){return P(new Error,{type:e,[We]:!0},t)}o(U,"createRouterError");function L(e,t){return e instanceof Error&&We in e&&(t==null||!!(e.type&t))}o(L,"isNavigationFailure");const Ne="[^/]+?",It={sensitive:!1,strict:!1,start:!0,end:!0},Tt=/[.+*?^${}()[\]/\\]/g;function Bt(e,t){const n=P({},It,t),r=[];let s=n.start?"^":"";const d=[];for(const l of e){const i=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const f=l[u];let v=40+(n.sensitive?.25:0);if(f.type===0)u||(s+="/"),s+=f.value.replace(Tt,"\\$&"),v+=40;else if(f.type===1){const{value:R,repeatable:A,optional:C,regexp:w}=f;d.push({name:R,repeatable:A,optional:C});const k=w||Ne;if(k!==Ne){v+=10;try{new RegExp(`(${k})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${R}" (${k}): `+I.message)}}let N=A?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;u||(N=C&&l.length<2?`(?:/${N})`:"/"+N),C&&(N+="?"),s+=N,v+=20,C&&(v+=-8),A&&(v+=-20),k===".*"&&(v+=-50)}i.push(v)}r.push(i)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const p=new RegExp(s,n.sensitive?"":"i");function g(l){const i=l.match(p),u={};if(!i)return null;for(let f=1;f<i.length;f++){const v=i[f]||"",R=d[f-1];u[R.name]=v&&R.repeatable?v.split("/"):v}return u}o(g,"parse");function c(l){let i="",u=!1;for(const f of e){(!u||!i.endsWith("/"))&&(i+="/"),u=!1;for(const v of f)if(v.type===0)i+=v.value;else if(v.type===1){const{value:R,repeatable:A,optional:C}=v,w=R in l?l[R]:"";if(T(w)&&!A)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const k=T(w)?w.join("/"):w;if(!k)if(C)f.length<2&&(i.endsWith("/")?i=i.slice(0,-1):u=!0);else throw new Error(`Missing required param "${R}"`);i+=k}}return i||"/"}return o(c,"stringify"),{re:p,score:r,keys:d,parse:g,stringify:c}}o(Bt,"tokensToParser");function Lt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}o(Lt,"compareScoreArray");function Ht(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const d=Lt(r[n],s[n]);if(d)return d;n++}if(Math.abs(s.length-r.length)===1){if($e(r))return 1;if($e(s))return-1}return s.length-r.length}o(Ht,"comparePathParserScore");function $e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}o($e,"isLastScoreNegative");const Vt={type:0,value:""},jt=/[a-zA-Z0-9_]/;function qt(e){if(!e)return[[]];if(e==="/")return[[Vt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${l}": ${v}`)}o(t,"crash");let n=0,r=n;const s=[];let d;function p(){d&&s.push(d),d=[]}o(p,"finalizeSegment");let g=0,c,l="",i="";function u(){!l||(n===0?d.push({type:0,value:l}):n===1||n===2||n===3?(d.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:l,regexp:i,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}o(u,"consumeBuffer");function f(){l+=c}for(o(f,"addCharToBuffer");g<e.length;){if(c=e[g++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),p()):c===":"?(u(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:jt.test(c)?f():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--);break;case 2:c===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+c:n=3:i+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--,i="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),p(),s}o(qt,"tokenizePath");function Kt(e,t,n){const r=Bt(qt(e.path),n),s=P(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}o(Kt,"createRouteRecordMatcher");function zt(e,t){const n=[],r=new Map;t=Be({strict:!1,end:!0,sensitive:!1},t);function s(i){return r.get(i)}o(s,"getRecordMatcher");function d(i,u,f){const v=!f,R=Gt(i);R.aliasOf=f&&f.record;const A=Be(t,i),C=[R];if("alias"in i){const N=typeof i.alias=="string"?[i.alias]:i.alias;for(const I of N)C.push(P({},R,{components:f?f.record.components:R.components,path:I,aliasOf:f?f.record:R}))}let w,k;for(const N of C){const{path:I}=N;if(u&&I[0]!=="/"){const j=u.record.path,B=j[j.length-1]==="/"?"":"/";N.path=u.record.path+(I&&B+I)}if(w=Kt(N,u,A),f?f.alias.push(w):(k=k||w,k!==w&&k.alias.push(w),v&&i.name&&!Te(w)&&p(i.name)),R.children){const j=R.children;for(let B=0;B<j.length;B++)d(j[B],w,f&&f.children[B])}f=f||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return k?()=>{p(k)}:X}o(d,"addRoute");function p(i){if(Qe(i)){const u=r.get(i);u&&(r.delete(i),n.splice(n.indexOf(u),1),u.children.forEach(p),u.alias.forEach(p))}else{const u=n.indexOf(i);u>-1&&(n.splice(u,1),i.record.name&&r.delete(i.record.name),i.children.forEach(p),i.alias.forEach(p))}}o(p,"removeRoute");function g(){return n}o(g,"getRoutes");function c(i){let u=0;for(;u<n.length&&Ht(i,n[u])>=0&&(i.record.path!==n[u].record.path||!Ye(i,n[u]));)u++;n.splice(u,0,i),i.record.name&&!Te(i)&&r.set(i.record.name,i)}o(c,"insertMatcher");function l(i,u){let f,v={},R,A;if("name"in i&&i.name){if(f=r.get(i.name),!f)throw U(1,{location:i});A=f.record.name,v=P(Ie(u.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),i.params&&Ie(i.params,f.keys.map(k=>k.name))),R=f.stringify(v)}else if("path"in i)R=i.path,f=n.find(k=>k.re.test(R)),f&&(v=f.parse(R),A=f.record.name);else{if(f=u.name?r.get(u.name):n.find(k=>k.re.test(u.path)),!f)throw U(1,{location:i,currentLocation:u});A=f.record.name,v=P({},u.params,i.params),R=f.stringify(v)}const C=[];let w=f;for(;w;)C.unshift(w.record),w=w.parent;return{name:A,path:R,params:v,matched:C,meta:Ft(C)}}return o(l,"resolve"),e.forEach(i=>d(i)),{addRoute:d,resolve:l,removeRoute:p,getRoutes:g,getRecordMatcher:s}}o(zt,"createRouterMatcher");function Ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}o(Ie,"paramsFromLocation");function Gt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ut(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}o(Gt,"normalizeRouteRecord");function Ut(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}o(Ut,"normalizeRecordProps");function Te(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}o(Te,"isAliasRecord");function Ft(e){return e.reduce((t,n)=>P(t,n.meta),{})}o(Ft,"mergeMetaFields");function Be(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}o(Be,"mergeOptions");function Ye(e,t){return t.children.some(n=>n===e||Ye(e,n))}o(Ye,"isRecordChildOf");const Xe=/#/g,Dt=/&/g,Qt=/\//g,Wt=/=/g,Yt=/\?/g,Ze=/\+/g,Xt=/%5B/g,Zt=/%5D/g,Je=/%5E/g,Jt=/%60/g,et=/%7B/g,en=/%7C/g,tt=/%7D/g,tn=/%20/g;function ye(e){return encodeURI(""+e).replace(en,"|").replace(Xt,"[").replace(Zt,"]")}o(ye,"commonEncode");function nn(e){return ye(e).replace(et,"{").replace(tt,"}").replace(Je,"^")}o(nn,"encodeHash");function me(e){return ye(e).replace(Ze,"%2B").replace(tn,"+").replace(Xe,"%23").replace(Dt,"%26").replace(Jt,"`").replace(et,"{").replace(tt,"}").replace(Je,"^")}o(me,"encodeQueryValue");function rn(e){return me(e).replace(Wt,"%3D")}o(rn,"encodeQueryKey");function on(e){return ye(e).replace(Xe,"%23").replace(Yt,"%3F")}o(on,"encodePath");function sn(e){return e==null?"":on(e).replace(Qt,"%2F")}o(sn,"encodeParam");function te(e){try{return decodeURIComponent(""+e)}catch{}return""+e}o(te,"decode");function cn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const d=r[s].replace(Ze," "),p=d.indexOf("="),g=te(p<0?d:d.slice(0,p)),c=p<0?null:te(d.slice(p+1));if(g in t){let l=t[g];T(l)||(l=t[g]=[l]),l.push(c)}else t[g]=c}return t}o(cn,"parseQuery");function Le(e){let t="";for(let n in e){const r=e[n];if(n=rn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(T(r)?r.map(d=>d&&me(d)):[r&&me(r)]).forEach(d=>{d!==void 0&&(t+=(t.length?"&":"")+n,d!=null&&(t+="="+d))})}return t}o(Le,"stringifyQuery");function an(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=T(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}o(an,"normalizeQuery");const ln=Symbol(""),He=Symbol(""),re=Symbol(""),Ee=Symbol(""),ge=Symbol("");function W(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}o(t,"add");function n(){e=[]}return o(n,"reset"),{add:t,list:()=>e,reset:n}}o(W,"useCallbacks");function V(e,t,n,r,s){const d=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((p,g)=>{const c=o(u=>{u===!1?g(U(4,{from:n,to:t})):u instanceof Error?g(u):$t(u)?g(U(2,{from:t,to:u})):(d&&r.enterCallbacks[s]===d&&typeof u=="function"&&d.push(u),p())},"next"),l=e.call(r&&r.instances[s],t,n,c);let i=Promise.resolve(l);e.length<3&&(i=i.then(c)),i.catch(u=>g(u))})}o(V,"guardToPromiseFn");function he(e,t,n,r){const s=[];for(const d of e)for(const p in d.components){let g=d.components[p];if(!(t!=="beforeRouteEnter"&&!d.instances[p]))if(un(g)){const l=(g.__vccOpts||g)[t];l&&s.push(V(l,n,r,d,p))}else{let c=g();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${d.path}"`));const i=mt(l)?l.default:l;d.components[p]=i;const f=(i.__vccOpts||i)[t];return f&&V(f,n,r,d,p)()}))}}return s}o(he,"extractComponentsGuards");function un(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}o(un,"isRouteComponent");function Ve(e){const t=q(re),n=q(Ee),r=S(()=>t.resolve(Y(e.to))),s=S(()=>{const{matched:c}=r.value,{length:l}=c,i=c[l-1],u=n.matched;if(!i||!u.length)return-1;const f=u.findIndex(G.bind(null,i));if(f>-1)return f;const v=je(c[l-2]);return l>1&&je(i)===v&&u[u.length-1].path!==v?u.findIndex(G.bind(null,c[l-2])):f}),d=S(()=>s.value>-1&&pn(n.params,r.value.params)),p=S(()=>s.value>-1&&s.value===n.matched.length-1&&Fe(n.params,r.value.params));function g(c={}){return hn(c)?t[Y(e.replace)?"replace":"push"](Y(e.to)).catch(X):Promise.resolve()}return o(g,"navigate"),{route:r,href:S(()=>r.value.href),isActive:d,isExactActive:p,navigate:g}}o(Ve,"useLink");const fn=ve({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ve,setup(e,{slots:t}){const n=ze(Ve(e)),{options:r}=q(re),s=S(()=>({[qe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const d=t.default&&t.default(n);return e.custom?d:Ue("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},d)}}}),dn=fn;function hn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}o(hn,"guardEvent");function pn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!T(s)||s.length!==r.length||r.some((d,p)=>d!==s[p]))return!1}return!0}o(pn,"includesParams");function je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}o(je,"getOriginalPath");const qe=o((e,t,n)=>e!=null?e:t!=null?t:n,"getLinkClass"),mn=ve({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=q(ge),s=S(()=>e.route||r.value),d=q(He,0),p=S(()=>{let l=Y(d);const{matched:i}=s.value;let u;for(;(u=i[l])&&!u.components;)l++;return l}),g=S(()=>s.value.matched[p.value]);ue(He,S(()=>p.value+1)),ue(ln,g),ue(ge,s);const c=at();return lt(()=>[c.value,g.value,e.name],([l,i,u],[f,v,R])=>{i&&(i.instances[u]=l,v&&v!==i&&l&&l===f&&(i.leaveGuards.size||(i.leaveGuards=v.leaveGuards),i.updateGuards.size||(i.updateGuards=v.updateGuards))),l&&i&&(!v||!G(i,v)||!f)&&(i.enterCallbacks[u]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,i=e.name,u=g.value,f=u&&u.components[i];if(!f)return Ke(n.default,{Component:f,route:l});const v=u.props[i],R=v?v===!0?l.params:typeof v=="function"?v(l):v:null,C=Ue(f,P({},R,t,{onVnodeUnmounted:o(w=>{w.component.isUnmounted&&(u.instances[i]=null)},"onVnodeUnmounted"),ref:c}));return Ke(n.default,{Component:C,route:l})||C}}});function Ke(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}o(Ke,"normalizeSlot");const gn=mn;function Cn(e){const t=zt(e.routes,e),n=e.parseQuery||cn,r=e.stringifyQuery||Le,s=e.history,d=W(),p=W(),g=W(),c=it(H);let l=H;z&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=fe.bind(null,a=>""+a),u=fe.bind(null,sn),f=fe.bind(null,te);function v(a,m){let h,y;return Qe(a)?(h=t.getRecordMatcher(a),y=m):y=a,t.addRoute(y,h)}o(v,"addRoute");function R(a){const m=t.getRecordMatcher(a);m&&t.removeRoute(m)}o(R,"removeRoute");function A(){return t.getRoutes().map(a=>a.record)}o(A,"getRoutes");function C(a){return!!t.getRecordMatcher(a)}o(C,"hasRoute");function w(a,m){if(m=P({},m||c.value),typeof a=="string"){const E=de(n,a,m.path),x=t.resolve({path:E.path},m),Q=s.createHref(E.fullPath);return P(E,x,{params:f(x.params),hash:te(E.hash),redirectedFrom:void 0,href:Q})}let h;if("path"in a)h=P({},a,{path:de(n,a.path,m.path).path});else{const E=P({},a.params);for(const x in E)E[x]==null&&delete E[x];h=P({},a,{params:u(a.params)}),m.params=u(m.params)}const y=t.resolve(h,m),_=a.hash||"";y.params=i(f(y.params));const O=yt(r,P({},a,{hash:nn(_),path:y.path})),b=s.createHref(O);return P({fullPath:O,hash:_,query:r===Le?an(a.query):a.query||{}},y,{redirectedFrom:void 0,href:b})}o(w,"resolve");function k(a){return typeof a=="string"?de(n,a,c.value.path):P({},a)}o(k,"locationAsObject");function N(a,m){if(l!==a)return U(8,{from:m,to:a})}o(N,"checkCanceledNavigation");function I(a){return F(a)}o(I,"push");function j(a){return I(P(k(a),{replace:!0}))}o(j,"replace");function B(a){const m=a.matched[a.matched.length-1];if(m&&m.redirect){const{redirect:h}=m;let y=typeof h=="function"?h(a):h;return typeof y=="string"&&(y=y.includes("?")||y.includes("#")?y=k(y):{path:y},y.params={}),P({query:a.query,hash:a.hash,params:"path"in y?{}:a.params},y)}}o(B,"handleRedirectRecord");function F(a,m){const h=l=w(a),y=c.value,_=a.state,O=a.force,b=a.replace===!0,E=B(h);if(E)return F(P(k(E),{state:typeof E=="object"?P({},_,E.state):_,force:O,replace:b}),m||h);const x=h;x.redirectedFrom=m;let Q;return!O&&Et(r,y,h)&&(Q=U(16,{to:x,from:y}),Pe(y,y,!0,!1)),(Q?Promise.resolve(Q):Re(x,y)).catch($=>L($)?L($,2)?$:ce($):se($,x,y)).then($=>{if($){if(L($,2))return F(P({replace:b},k($.to),{state:typeof $.to=="object"?P({},_,$.to.state):_,force:O}),m||x)}else $=be(x,y,!0,b,_);return we(x,y,$),$})}o(F,"pushWithRedirect");function rt(a,m){const h=N(a,m);return h?Promise.reject(h):Promise.resolve()}o(rt,"checkCanceledNavigationAndReject");function Re(a,m){let h;const[y,_,O]=vn(a,m);h=he(y.reverse(),"beforeRouteLeave",a,m);for(const E of y)E.leaveGuards.forEach(x=>{h.push(V(x,a,m))});const b=rt.bind(null,a,m);return h.push(b),K(h).then(()=>{h=[];for(const E of d.list())h.push(V(E,a,m));return h.push(b),K(h)}).then(()=>{h=he(_,"beforeRouteUpdate",a,m);for(const E of _)E.updateGuards.forEach(x=>{h.push(V(x,a,m))});return h.push(b),K(h)}).then(()=>{h=[];for(const E of a.matched)if(E.beforeEnter&&!m.matched.includes(E))if(T(E.beforeEnter))for(const x of E.beforeEnter)h.push(V(x,a,m));else h.push(V(E.beforeEnter,a,m));return h.push(b),K(h)}).then(()=>(a.matched.forEach(E=>E.enterCallbacks={}),h=he(O,"beforeRouteEnter",a,m),h.push(b),K(h))).then(()=>{h=[];for(const E of p.list())h.push(V(E,a,m));return h.push(b),K(h)}).catch(E=>L(E,8)?E:Promise.reject(E))}o(Re,"navigate");function we(a,m,h){for(const y of g.list())y(a,m,h)}o(we,"triggerAfterEach");function be(a,m,h,y,_){const O=N(a,m);if(O)return O;const b=m===H,E=z?history.state:{};h&&(y||b?s.replace(a.fullPath,P({scroll:b&&E&&E.scroll},_)):s.push(a.fullPath,_)),c.value=a,Pe(a,m,h,b),ce()}o(be,"finalizeNavigation");let D;function ot(){D||(D=s.listen((a,m,h)=>{if(!Se.listening)return;const y=w(a),_=B(y);if(_){F(P(_,{replace:!0}),y).catch(X);return}l=y;const O=c.value;z&&Ct(Oe(O.fullPath,h.delta),ne()),Re(y,O).catch(b=>L(b,12)?b:L(b,2)?(F(b.to,y).then(E=>{L(E,20)&&!h.delta&&h.type===J.pop&&s.go(-1,!1)}).catch(X),Promise.reject()):(h.delta&&s.go(-h.delta,!1),se(b,y,O))).then(b=>{b=b||be(y,O,!1),b&&(h.delta&&!L(b,8)?s.go(-h.delta,!1):h.type===J.pop&&L(b,20)&&s.go(-1,!1)),we(y,O,b)}).catch(X)}))}o(ot,"setupListeners");let oe=W(),ke=W(),ee;function se(a,m,h){ce(a);const y=ke.list();return y.length?y.forEach(_=>_(a,m,h)):console.error(a),Promise.reject(a)}o(se,"triggerError");function st(){return ee&&c.value!==H?Promise.resolve():new Promise((a,m)=>{oe.add([a,m])})}o(st,"isReady");function ce(a){return ee||(ee=!a,ot(),oe.list().forEach(([m,h])=>a?h(a):m()),oe.reset()),a}o(ce,"markAsReady");function Pe(a,m,h,y){const{scrollBehavior:_}=e;if(!z||!_)return Promise.resolve();const O=!h&&At(Oe(a.fullPath,0))||(y||!h)&&history.state&&history.state.scroll||null;return Ge().then(()=>_(a,m,O)).then(b=>b&&_t(b)).catch(b=>se(b,a,m))}o(Pe,"handleScroll");const ie=o(a=>s.go(a),"go");let ae;const le=new Set,Se={currentRoute:c,listening:!0,addRoute:v,removeRoute:R,hasRoute:C,getRoutes:A,resolve:w,options:e,push:I,replace:j,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:d.add,beforeResolve:p.add,afterEach:g.add,onError:ke.add,isReady:st,install(a){const m=this;a.component("RouterLink",dn),a.component("RouterView",gn),a.config.globalProperties.$router=m,Object.defineProperty(a.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(c)}),z&&!ae&&c.value===H&&(ae=!0,I(s.location).catch(_=>{}));const h={};for(const _ in H)h[_]=S(()=>c.value[_]);a.provide(re,m),a.provide(Ee,ze(h)),a.provide(ge,c);const y=a.unmount;le.add(a),a.unmount=function(){le.delete(a),le.size<1&&(l=H,D&&D(),D=null,c.value=H,ae=!1,ee=!1),y()}}};return Se}o(Cn,"createRouter");function K(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}o(K,"runGuardQueue");function vn(e,t){const n=[],r=[],s=[],d=Math.max(t.matched.length,e.matched.length);for(let p=0;p<d;p++){const g=t.matched[p];g&&(e.matched.find(l=>G(l,g))?r.push(g):n.push(g));const c=e.matched[p];c&&(t.matched.find(l=>G(l,c))||s.push(c))}return[n,r,s]}o(vn,"extractChangingRecords");function An(){return q(re)}o(An,"useRouter");function On(){return q(Ee)}o(On,"useRoute");S(()=>M().get());S(()=>M().get("name"));const xn=S(()=>M().get("version")),Mn=S(()=>M().get("homepage")),yn=S(()=>M().get("logo")),Nn=S(()=>M().get("copyright")),En=S(()=>M().get("darkMode")),$n=S(()=>En.value?"#1F2937":"#F3F4F6"),In=S(()=>M().get("auth.background"));S(()=>M().get("auth.signup")===!0);const Tn=S(()=>M().get("changelog")===!0),Bn=S(()=>M().get("search")===!0);S(()=>M().get("aside.collapsed")===!0);const Rn=S(()=>M().get("vendor.fontAwesomeKit"));S(()=>M().get("vendor.sentryDSN"));S(()=>M().get("debug"));const nt=ve({name:"KodamaUI",setup(){const e=M(),t=new MutationObserver(c=>{for(const l of c){const u=l.target.getAttribute(l.attributeName);Ge(()=>{u==="dark"?e.set("darkMode",!0):e.set("darkMode",!1)})}});_e(()=>{s(!0),window.addEventListener("resize",n)}),ut(()=>{window.removeEventListener("resize",n)});const n=o(()=>{s(!1)},"detectViewPortListener"),r=o((c=!1,l=!1)=>{e.set("isMobileView",c),e.set("isTabletView",l)},"setViewPort"),s=o((c=!0)=>{const l=e.get("isMobileView",!1),i=e.get("isTabletView",!1),u=window.innerWidth,f={next:{mobile:u<768,tablet:u<992,desktop:!(u<768)&&!(u<992)},prev:{mobile:l,tablet:i,desktop:!l&&!i}};f.next.desktop&&(f.next.desktop!==f.prev.desktop||c)&&r(!1,!1),f.next.tablet&&!f.next.mobile&&(f.next.tablet!==f.prev.tablet||c)&&r(!1,!0),f.next.mobile&&(f.next.mobile!==f.prev.mobile||c)&&r(!0,!1)},"detectViewPort"),d=o(()=>{var c=document.querySelector('link[rel~="icon"]');c||(c=document.createElement("link"),c.rel="icon",document.getElementsByTagName("head")[0].appendChild(c)),c.href=yn.value.favicon},"replaceFavicon"),p=o(()=>{const c=Rn;if(c){const l=document.createElement("script");l.src=c.value,l.crossOrigin="anonymous",document.body.appendChild(l)}},"addFontAwesomeKit"),g=o(()=>{const c=document.createElement("link");c.rel="stylesheet",c.href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Rubik:wght@400;500;600;700&display=swap",document.body.appendChild(c)},"addGoogleFonts");_e(()=>{e.init(),d(),p(),g();const c=document.querySelector("html"),l=(c==null?void 0:c.getAttribute("data-storybook"))==="true";c&&l&&t.observe(c,{attributes:!0,attributeOldValue:!0,attributeFilter:["class"]})})}});function wn(e,t,n,r,s,d){const p=ft("router-view");return dt(),ht(p)}o(wn,"_sfc_render");const Ln=pt(nt,[["render",wn]]);nt.__docgenInfo={displayName:"KodamaUI",exportName:"default",description:"",tags:{}};export{Nn as a,Cn as b,Tn as c,_n as d,An as e,En as f,$n as g,In as h,Mn as i,Ln as m,Bn as s,On as u,xn as v};
//# sourceMappingURL=app.5ae5dab7.js.map