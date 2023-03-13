var ee=Object.defineProperty;var c=(e,r)=>ee(e,"name",{value:r,configurable:!0});import{p as G,q as J,u as K,l as Q,v as te,x as re,y as ne,z as B,A as U,B as se,C as ie,D as oe,E as ue,G as ce,i as fe}from"./vue.esm-bundler.a8176fea.js";import{c as le}from"./iframe.c2f38fe7.js";var W={exports:{}};(function(e){(function(r,i){e.exports=i()})(le,function(){var r=Object.prototype.toString;function i(f,u){return f==null?!1:Object.prototype.hasOwnProperty.call(f,u)}c(i,"hasOwnProperty");function o(f){if(!f||m(f)&&f.length===0)return!0;if(typeof f!="string"){for(var u in f)if(i(f,u))return!1;return!0}return!1}c(o,"isEmpty");function d(f){return r.call(f)}c(d,"toString");function h(f){return typeof f=="object"&&d(f)==="[object Object]"}c(h,"isObject");var m=Array.isArray||function(f){return r.call(f)==="[object Array]"};function v(f){return typeof f=="boolean"||d(f)==="[object Boolean]"}c(v,"isBoolean");function k(f){var u=parseInt(f);return u.toString()===f?u:f}c(k,"getKey");function S(f){f=f||{};var u=c(function(s){return Object.keys(u).reduce(function(t,n){return n==="create"||typeof u[n]=="function"&&(t[n]=u[n].bind(u,s)),t},{})},"objectPath"),b;f.includeInheritedProps?b=c(function(){return!0},"hasShallowProperty"):b=c(function(s,t){return typeof t=="number"&&Array.isArray(s)||i(s,t)},"hasShallowProperty");function I(s,t){if(b(s,t))return s[t]}c(I,"getShallowProperty");var x;f.includeInheritedProps?x=c(function(s,t){typeof t!="string"&&typeof t!="number"&&(t=String(t));var n=I(s,t);if(t==="__proto__"||t==="prototype"||t==="constructor"&&typeof n=="function")throw new Error("For security reasons, object's magic properties cannot be set");return n},"getShallowPropertySafely"):x=c(function(s,t){return I(s,t)},"getShallowPropertySafely");function p(s,t,n,l){if(typeof t=="number"&&(t=[t]),!t||t.length===0)return s;if(typeof t=="string")return p(s,t.split(".").map(k),n,l);var a=t[0],_=x(s,a);return t.length===1?((_===void 0||!l)&&(s[a]=n),_):(_===void 0&&(typeof t[1]=="number"?s[a]=[]:s[a]={}),p(s[a],t.slice(1),n,l))}return c(p,"set"),u.has=function(s,t){if(typeof t=="number"?t=[t]:typeof t=="string"&&(t=t.split(".")),!t||t.length===0)return!!s;for(var n=0;n<t.length;n++){var l=k(t[n]);if(typeof l=="number"&&m(s)&&l<s.length||(f.includeInheritedProps?l in Object(s):i(s,l)))s=s[l];else return!1}return!0},u.ensureExists=function(s,t,n){return p(s,t,n,!0)},u.set=function(s,t,n,l){return p(s,t,n,l)},u.insert=function(s,t,n,l){var a=u.get(s,t);l=~~l,m(a)||(a=[],u.set(s,t,a)),a.splice(l,0,n)},u.empty=function(s,t){if(!o(t)&&s!=null){var n,l;if(!!(n=u.get(s,t))){if(typeof n=="string")return u.set(s,t,"");if(v(n))return u.set(s,t,!1);if(typeof n=="number")return u.set(s,t,0);if(m(n))n.length=0;else if(h(n))for(l in n)b(n,l)&&delete n[l];else return u.set(s,t,null)}}},u.push=function(s,t){var n=u.get(s,t);m(n)||(n=[],u.set(s,t,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},u.coalesce=function(s,t,n){for(var l,a=0,_=t.length;a<_;a++)if((l=u.get(s,t[a]))!==void 0)return l;return n},u.get=function(s,t,n){if(typeof t=="number"&&(t=[t]),!t||t.length===0)return s;if(s==null)return n;if(typeof t=="string")return u.get(s,t.split("."),n);var l=k(t[0]),a=x(s,l);return a===void 0?n:t.length===1?a:u.get(s[l],t.slice(1),n)},u.del=c(function(t,n){if(typeof n=="number"&&(n=[n]),t==null||o(n))return t;if(typeof n=="string")return u.del(t,n.split("."));var l=k(n[0]);if(x(t,l),!b(t,l))return t;if(n.length===1)m(t)?t.splice(l,1):delete t[l];else return u.del(t[l],n.slice(1));return t},"del"),u}c(S,"factory");var P=S();return P.create=S,P.withInheritedProps=S({includeInheritedProps:!0}),P})})(W);const R=W.exports;var ae=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let N;const F=c(e=>N=e,"setActivePinia"),X=Symbol();function D(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}c(D,"isPlainObject");var L;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(L||(L={}));function qe(){const e=G(!0),r=e.run(()=>J({}));let i=[],o=[];const d=K({install(h){F(d),d._a=h,h.provide(X,d),h.config.globalProperties.$pinia=d,o.forEach(m=>i.push(m)),o=[]},use(h){return!this._a&&!ae?o.push(h):i.push(h),this},_p:i,_a:null,_e:e,_s:new Map,state:r});return d}c(qe,"createPinia");const Y=c(()=>{},"noop");function M(e,r,i,o=Y){e.push(r);const d=c(()=>{const h=e.indexOf(r);h>-1&&(e.splice(h,1),o())},"removeSubscription");return!i&&ie()&&oe(d),d}c(M,"addSubscription");function A(e,...r){e.slice().forEach(i=>{i(...r)})}c(A,"triggerSubscriptions");function H(e,r){e instanceof Map&&r instanceof Map&&r.forEach((i,o)=>e.set(o,i)),e instanceof Set&&r instanceof Set&&r.forEach(e.add,e);for(const i in r){if(!r.hasOwnProperty(i))continue;const o=r[i],d=e[i];D(d)&&D(o)&&e.hasOwnProperty(i)&&!B(o)&&!U(o)?e[i]=H(d,o):e[i]=o}return e}c(H,"mergeReactiveObjects");const ge=Symbol();function de(e){return!D(e)||!e.hasOwnProperty(ge)}c(de,"shouldHydrate");const{assign:E}=Object;function ye(e){return!!(B(e)&&e.effect)}c(ye,"isComputed");function he(e,r,i,o){const{state:d,actions:h,getters:m}=r,v=i.state.value[e];let k;function S(){v||(i.state.value[e]=d?d():{});const P=ce(i.state.value[e]);return E(P,h,Object.keys(m||{}).reduce((f,u)=>(f[u]=K(fe(()=>{F(i);const b=i._s.get(e);return m[u].call(b,b)})),f),{}))}return c(S,"setup"),k=Z(e,S,r,i,o,!0),k}c(he,"createOptionsStore");function Z(e,r,i={},o,d,h){let m;const v=E({actions:{}},i),k={deep:!0};let S,P,f=K([]),u=K([]),b;const I=o.state.value[e];!h&&!I&&(o.state.value[e]={}),J({});let x;function p(y){let g;S=P=!1,typeof y=="function"?(y(o.state.value[e]),g={type:L.patchFunction,storeId:e,events:b}):(H(o.state.value[e],y),g={type:L.patchObject,payload:y,storeId:e,events:b});const O=x=Symbol();ue().then(()=>{x===O&&(S=!0)}),P=!0,A(f,g,o.state.value[e])}c(p,"$patch");const s=h?c(function(){const{state:g}=i,O=g?g():{};this.$patch(w=>{E(w,O)})},"$reset"):Y;function t(){m.stop(),f=[],u=[],o._s.delete(e)}c(t,"$dispose");function n(y,g){return function(){F(o);const O=Array.from(arguments),w=[],C=[];function T(q){w.push(q)}c(T,"after");function j(q){C.push(q)}c(j,"onError"),A(u,{args:O,name:y,store:a,after:T,onError:j});let z;try{z=g.apply(this&&this.$id===e?this:a,O)}catch(q){throw A(C,q),q}return z instanceof Promise?z.then(q=>(A(w,q),q)).catch(q=>(A(C,q),Promise.reject(q))):(A(w,z),z)}}c(n,"wrapAction");const l={_p:o,$id:e,$onAction:M.bind(null,u),$patch:p,$reset:s,$subscribe(y,g={}){const O=M(f,y,g.detached,()=>w()),w=m.run(()=>re(()=>o.state.value[e],C=>{(g.flush==="sync"?P:S)&&y({storeId:e,type:L.direct,events:b},C)},E({},k,g)));return O},$dispose:t},a=ne(l);o._s.set(e,a);const _=o._e.run(()=>(m=G(),m.run(()=>r())));for(const y in _){const g=_[y];if(B(g)&&!ye(g)||U(g))h||(I&&de(g)&&(B(g)?g.value=I[y]:H(g,I[y])),o.state.value[e][y]=g);else if(typeof g=="function"){const O=n(y,g);_[y]=O,v.actions[y]=g}}return E(a,_),E(se(a),_),Object.defineProperty(a,"$state",{get:()=>o.state.value[e],set:y=>{p(g=>{E(g,y)})}}),o._p.forEach(y=>{E(a,m.run(()=>y({store:a,app:o._a,pinia:o,options:v})))}),I&&h&&i.hydrate&&i.hydrate(a.$state,I),S=!0,P=!0,a}c(Z,"createSetupStore");function $(e,r,i){let o,d;const h=typeof r=="function";typeof e=="string"?(o=e,d=h?i:r):(d=e,o=e.id);function m(v,k){const S=Q();return v=v||S&&te(X,null),v&&F(v),v=N,v._s.has(o)||(h?Z(o,r,d,v):he(o,d,v)),v._s.get(o)}return c(m,"useStore"),m.$id=o,m}c($,"defineStore");const V={name:"Kodama",version:"0.1.0",darkMode:!1,logo:{favicon:"https://kodamaui.s3.eu-west-1.amazonaws.com/logos/favicon.png",dark:"https://kodamaui.s3.eu-west-1.amazonaws.com/logos/logo-dark.png",light:"https://kodamaui.s3.eu-west-1.amazonaws.com/logos/logo.png",side_dark:"https://kodamaui.s3.eu-west-1.amazonaws.com/logos/sidelogo-dark.png",side_light:"https://kodamaui.s3.eu-west-1.amazonaws.com/logos/sidelogo.png"},copyright:{text:"Kodama UI",link:"https://calltek.es"},homepage:"dashboard",auth:{background:"",signup:!1},changelog:!1,search:!1,isMobileView:!1,isTabletView:!1,aside:{collapsed:!0},vendor:{fontAwesomeKit:"",sentryDSN:""},debug:!1},Pe=$("config",{persist:!0,state:()=>({config:Object.assign({},V),initial:Object.assign({},V)}),actions:{init(){const r=Q().proxy.settings||{};this.initial=Object.assign({},{...V,...r}),this.reset()},get(e,r){return e?R.get(this.config,e,r):this.config},set(e,r){R.set(this.config,e,r)},reset(){R.set(this,"config",Object.assign({},this.initial))}}}),me={queries:{}},_e=$("query",{persist:!0,state:()=>me,getters:{get:e=>r=>{if(e.queries[r])return e.queries[r]}},actions:{clean(){this.queries={}},init(e,r){this.queries[e]={filter:(r==null?void 0:r.filter)||null,limit:(r==null?void 0:r.limit)||20,order:(r==null?void 0:r.order)||null,strict:(r==null?void 0:r.strict)||!0}},order(e){const r=this;return{set(i,o){r.queries[e]===void 0&&r.init(e),r.queries[e].order?r.queries[e].order[i]=o:r.queries[e].order={[i]:o}},delete(i){return r.queries[e]!==void 0&&r.queries[e].order&&r.queries[e].order[i]?(delete r.queries[e].order[i],!0):!1}}},limit(e){const r=this;return{set(i){r.queries[e]===void 0&&r.init(e),r.queries[e].limit=i}}},strict(e){const r=this;return{set(i){r.queries[e]===void 0&&r.init(e),r.queries[e].strict=i}}},filter(e){const r=this;return{reset(){r.init(e)},set(i,o){r.queries[e]===void 0&&r.init(e),r.queries[e].filter===null?r.queries[e].filter={[i]:o}:r.queries[e].filter[i]===void 0&&(r.queries[e].filter[i]=o)},delete(i){r.queries[e]!==void 0&&r.queries[e].filter[i]!==void 0&&delete r.queries[e].filter[i]}}}}});export{_e as a,qe as c,$ as d,Pe as u};
//# sourceMappingURL=query.8179244e.js.map