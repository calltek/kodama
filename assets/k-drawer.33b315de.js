var w=Object.defineProperty;var s=(e,a)=>w(e,"name",{value:a,configurable:!0});import{u as k}from"./utils.afff62ba.js";import{d as v,q as V,a6 as h,J as _,x,r as S,o as i,a as u,b as f,j as m,t as $,e as C,g as D,n as N,m as B}from"./vue.esm-bundler.a8176fea.js";import{D as z}from"./index.7fcb4b4b.js";import{_ as E}from"./+plugin-vue+export-helper.ed6a1c48.js";const y=v({name:"KDrawer",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:"Drawer"},placement:{type:String,default:"right",options:["right","left","top","bottom"]},backdrop:{type:Boolean,default:!0},width:{type:Number,default:360,description:"Ancho del drawer en `px`"}},emits:["update:modelValue"],setup(e,a){const r=k(),l=V(null),c=s(t=>!!a.slots[t],"hasSlot"),p={placement:e.placement,backdrop:e.backdrop,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:()=>{a.emit("update:modelValue",!0)},onHide:()=>{a.emit("update:modelValue",!1)}},d=h(()=>{if(e.placement==="right")return"top-0 right-0 h-screen overflow-y-auto translate-x-full";if(e.placement==="left")return"top-0 left-0 h-screen overflow-y-auto -translate-x-full";if(e.placement==="top")return"top-0 left-0 right-0 w-full -translate-y-full ";if(e.placement==="bottom")return"bottom-0 left-0 right-0 w-full overflow-y-auto transform-none"}),b=h(()=>e.placement==="right"||e.placement==="left"?{width:`${e.width}px`}:{}),g=s(()=>{a.emit("update:modelValue",!1)},"hide");return _(()=>{var o;const t=document.getElementById(r);if(t){const n=t.parentNode;n&&(n.removeChild(t),document.getElementsByTagName("body")[0].appendChild(t),l.value=new z(t,p),e.modelValue&&((o=l.value)==null||o.show()))}}),x(()=>e.modelValue,t=>{var o,n;t?(o=l.value)==null||o.show():(n=l.value)==null||n.hide(),a.emit("update:modelValue",t)}),{drawerId:r,hide:g,hasSlot:c,classes:d,styles:b}}}),I=["id"],K={class:"flex flex-col h-full"},j={class:"flex flex-row items-center border-b dark:border-gray-600 mb-4 pb-4 justify-between -mx-4 px-4"},O={key:1,class:"text-base font-semibold text-gray-500 dark:text-gray-400 overflow-hidden"},q={class:"flex flex-1"},A={key:0,class:"flex flex-row items-center border-t dark:border-gray-600 justify-between p-4 -mx-4 mt-auto"};function H(e,a,r,l,c,p){const d=S("k-button");return i(),u("div",{id:e.drawerId,class:N(["fixed z-40 max-w-full p-4 transition-transform bg-white dark:bg-gray-800",e.classes]),tabindex:"-1",style:B(e.styles)},[f("div",K,[f("div",j,[e.hasSlot("header")?m(e.$slots,"header",{key:0}):(i(),u("h5",O,$(e.title),1)),C(d,{icon:"times",color:"black",neon:"",size:"md",onClick:e.hide},null,8,["onClick"])]),f("div",q,[m(e.$slots,"default")]),e.hasSlot("footer")?(i(),u("div",A,[m(e.$slots,"footer")])):D("",!0)])],14,I)}s(H,"_sfc_render");const L=E(y,[["render",H]]);y.__docgenInfo={displayName:"KDrawer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Drawer'"}},{name:"placement",type:{name:"String as () => DrawerOptions['placement']"},defaultValue:{func:!1,value:"'right'"}},{name:"backdrop",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"360"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"default"},{name:"footer"}]};export{L as K};
//# sourceMappingURL=k-drawer.33b315de.js.map