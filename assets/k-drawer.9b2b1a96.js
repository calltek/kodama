var k=Object.defineProperty;var r=(e,a)=>k(e,"name",{value:a,configurable:!0});import{u as v}from"./utils.afff62ba.js";import{d as V,q as _,a7 as p,J as x,x as S,r as h,o as u,a as y,b,j as f,k as C,w as $,f as D,t as N,e as B,g as z,n as E,m as I}from"./vue.esm-bundler.e9a14992.js";import{D as K}from"./index.7fcb4b4b.js";import{_ as j}from"./+plugin-vue+export-helper.ed6a1c48.js";const g=V({name:"KDrawer",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:"Drawer"},placement:{type:String,default:"right",options:["right","left","top","bottom"]},backdrop:{type:Boolean,default:!0},width:{type:Number,default:360,description:"Ancho del drawer en `px`"}},emits:["update:modelValue"],setup(e,a){const s=v(),l=_(null),m=r(t=>!!a.slots[t],"hasSlot"),c={placement:e.placement,backdrop:e.backdrop,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:()=>{a.emit("update:modelValue",!0)},onHide:()=>{a.emit("update:modelValue",!1)}},d=p(()=>{if(e.placement==="right")return"top-0 right-0 h-screen overflow-y-auto translate-x-full";if(e.placement==="left")return"top-0 left-0 h-screen overflow-y-auto -translate-x-full";if(e.placement==="top")return"top-0 left-0 right-0 w-full -translate-y-full ";if(e.placement==="bottom")return"bottom-0 left-0 right-0 w-full overflow-y-auto transform-none"}),i=p(()=>e.placement==="right"||e.placement==="left"?{width:`${e.width}px`}:{}),w=r(()=>{a.emit("update:modelValue",!1)},"hide");return x(()=>{var o;const t=document.getElementById(s);if(t){const n=t.parentNode;n&&(n.removeChild(t),document.getElementsByTagName("body")[0].appendChild(t),l.value=new K(t,c),e.modelValue&&((o=l.value)==null||o.show()))}}),S(()=>e.modelValue,t=>{var o,n;t?(o=l.value)==null||o.show():(n=l.value)==null||n.hide(),a.emit("update:modelValue",t)}),{drawerId:s,hide:w,hasSlot:m,classes:d,styles:i}}}),A=["id"],O={class:"flex flex-col h-full"},T={class:"flex flex-row items-center border-b dark:border-gray-600 mb-4 pb-4 justify-between -mx-4 px-4"},q={key:0,class:"flex flex-row items-center border-t dark:border-gray-600 justify-between px-4 pt-4 pb-0 -mx-4 mt-auto"};function H(e,a,s,l,m,c){const d=h("k-title"),i=h("k-button");return u(),y("div",{id:e.drawerId,class:E(["fixed z-40 max-w-full p-4 transition-transform bg-white dark:bg-gray-800",e.classes]),tabindex:"-1",style:I(e.styles)},[b("div",O,[b("div",T,[e.hasSlot("header")?f(e.$slots,"header",{key:0}):(u(),C(d,{key:1,size:5,class:"font-semibold text-gray-800 dark:text-gray-400 overflow-hidden"},{default:$(()=>[D(N(e.title)+"\xA0 ",1)]),_:1})),B(i,{icon:"times",color:"black",neon:"",size:"md",onClick:e.hide},null,8,["onClick"])]),f(e.$slots,"default"),e.hasSlot("footer")?(u(),y("div",q,[f(e.$slots,"footer")])):z("",!0)])],14,A)}r(H,"_sfc_render");const P=j(g,[["render",H]]);g.__docgenInfo={displayName:"KDrawer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Drawer'"}},{name:"placement",type:{name:"String as () => DrawerOptions['placement']"},defaultValue:{func:!1,value:"'right'"}},{name:"backdrop",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"360"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"default"},{name:"footer"}]};export{P as K};
//# sourceMappingURL=k-drawer.9b2b1a96.js.map
