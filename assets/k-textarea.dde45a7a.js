var v=Object.defineProperty;var r=(e,t)=>v(e,"name",{value:t,configurable:!0});import{d as V,i as l,r as g,o as n,a as s,j as q,F as x,f as k,t as _,g as f,k as S,w as E,e as N,a0 as $,a3 as w,b as B,m as C,n as I}from"./vue.esm-bundler.a8176fea.js";import{u as z}from"./utils.afff62ba.js";import{_ as F}from"./+plugin-vue+export-helper.ed6a1c48.js";const h=V({name:"KInput",props:{modelValue:{type:[String,Number],required:!1,default:"",description:"Valor del input"},id:{type:String,required:!1,default:"",description:"ID \xFAnico"},maxlength:{type:Number,required:!1,default:0,description:"Longitud m\xE1xima"},placeholder:{type:String,required:!1,default:"",description:"Texto explicativo"},required:{type:Boolean,default:!1,description:"Indica si el campo es requerido"},label:{type:String,required:!1,default:"",description:"Etiqueta de definici\xF3n"},size:{type:String,default:"md",options:["xs","sm","md","lg"]},errors:{type:Array,required:!1,default:()=>[],description:"Errores de validaci\xF3n"},status:{type:String,default:"",options:["warning","success","danger"],description:"Color de estado del input"},disabled:{type:Boolean,default:!1,description:"Indica si el control est\xE1 deshabilitado"},width:{type:Number,default:0,description:"Ancho del control"},minHeight:{type:Number,default:0,description:"Altura m\xEDnima del control"}},emits:["update:modelValue"],setup(e,t){const c=e.maxlength>0?e.maxlength:void 0,p=e.id||z(),i=r(a=>!!t.slots[a],"hasSlot"),u=l({get(){return e.modelValue},set(a){t.emit("update:modelValue",a)}}),d=l(()=>{const a=["k-input-textarea",`k-input-textarea-${e.size}`];return e.errors.length>0?a.push("k-input-textarea-danger"):e.status&&a.push(`k-input-textarea-${e.status}`),a}),o=l(()=>{const a={};return e.width>0&&(a.width=`${e.width}px`),e.minHeight>0&&(a.minHeight=`${e.minHeight}px`),a}),m=l(()=>e.label||i("default")),y=r(a=>{u.value=a.target.value},"change"),b=l(()=>(e.errors.length>0?e.errors[0].$message:"").toString());return{maxLength:c,uuid:p,classes:d,change:y,firstError:b,hasSlot:i,hasLabel:m,model:u,style:o}}});const H=["for"],L={key:2,class:"font-bold text-danger ml-1"},T=["disabled","maxlength","placeholder","required"];function A(e,t,c,p,i,u){const d=g("k-icon"),o=g("k-tooltip");return n(),s("div",{class:I(e.classes)},[e.hasLabel?(n(),s("label",{key:0,for:e.uuid},[e.hasSlot("default")?q(e.$slots,"default",{key:0}):(n(),s(x,{key:1},[k(_(e.label),1)],64)),e.required?(n(),s("span",L,"*")):f("",!0),e.firstError?(n(),S(o,{key:3,hover:"",title:e.firstError},{default:E(()=>[N(d,{icon:"triangle-exclamation",class:"ml-2"})]),_:1},8,["title"])):f("",!0)],8,H)):f("",!0),$(B("textarea",{"onUpdate:modelValue":t[0]||(t[0]=m=>e.model=m),disabled:e.disabled,maxlength:e.maxLength,placeholder:e.placeholder,required:e.required,style:C(e.style)},`
        `,12,T),[[w,e.model]])],2)}r(A,"_sfc_render");const O=F(h,[["render",A]]);h.__docgenInfo={displayName:"KInput",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"id",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"maxlength",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"placeholder",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"errors",type:{name:"ErrorObject[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"status",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"minHeight",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}]};export{O as K};
//# sourceMappingURL=k-textarea.dde45a7a.js.map
