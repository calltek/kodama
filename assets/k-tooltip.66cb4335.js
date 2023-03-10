var h=Object.defineProperty;var n=(e,o)=>h(e,"name",{value:o,configurable:!0});import{d as w,q as k,J as B,x as V,o as s,a as r,m as T,w as S,j as f,I as $,_ as I,b as _,F as c,f as E,t as N,g as C}from"./vue.esm-bundler.ef0b5a47.js";import{T as K}from"./index.7fcb4b4b.js";import{u as m}from"./utils.afff62ba.js";import{_ as D}from"./+plugin-vue+export-helper.ed6a1c48.js";const y=w({name:"KTooltip",props:{title:{type:String,default:"Tooltip"},placement:{type:String,default:"top",options:["top","bottom","left","right"]},hover:{type:Boolean,default:!0},click:{type:Boolean,default:!1},arrow:{type:Boolean,default:!0},visible:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},tag:{type:String,default:"span"}},setup(e,{slots:o}){const i=m(),u=m(),a=k(null),d=n(t=>!!o[t],"hasSlot"),g=e.visible!==void 0?"none":e.click?"click":e.hover?"hover":"none",v={placement:e.placement,triggerType:g,onShow:()=>{var t;e.disabled&&((t=a.value)==null||t.hide())}},b=n(()=>{const t=document.getElementById(i),l=document.getElementById(u);a.value=new K(t,l,v)},"init");return B(()=>{b()}),V(()=>e.visible,t=>{var l,p;t?(l=a.value)==null||l.show():(p=a.value)==null||p.hide()}),{tooltipId:i,buttonId:u,hasSlot:d}}}),F=["id"],j={key:2,class:"tooltip-arrow","data-popper-arrow":""};function q(e,o,i,u,a,d){return s(),r(c,null,[(s(),T(I(e.tag),$({id:e.buttonId},e.$attrs),{default:S(()=>[f(e.$slots,"default")]),_:3},16,["id"])),_("div",{id:e.tooltipId,role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"},[e.hasSlot("content")?f(e.$slots,"content",{key:0}):(s(),r(c,{key:1},[E(N(e.title),1)],64)),e.arrow?(s(),r("div",j)):C("",!0)],8,F)],64)}n(q,"_sfc_render");const P=D(y,[["render",q]]);y.__docgenInfo={displayName:"KTooltip",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Tooltip'"}},{name:"placement",type:{name:"String as () => TooltipOptions['placement']"},defaultValue:{func:!1,value:"'top'"}},{name:"hover",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"click",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"arrow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"visible",type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'span'"}}],slots:[{name:"default"},{name:"content"}]};export{P as K};
//# sourceMappingURL=k-tooltip.66cb4335.js.map