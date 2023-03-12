var T=Object.defineProperty;var l=(e,r)=>T(e,"name",{value:r,configurable:!0});import"./jsx-runtime.88dd5020.js";import{aL as o,aM as V,aQ as _,aN as g,aP as W,aO as B}from"./Props.1ef38ce3.js";import"./iframe.7b188eaa.js";import{d as P,i as y,o as k,a as m,b as N,n as I,j,F as K,f as M,t as E,g as G,q as S}from"./vue.esm-bundler.40c2ec29.js";import{c as x,u as O}from"./utils.afff62ba.js";import{_ as A}from"./+plugin-vue+export-helper.ed6a1c48.js";import{r as d,a as i,H as L}from"./s-head.c76c13e0.js";import"./string.6e767c61.js";import"./es.map.constructor.c0550aa6.js";import"./es.number.to-fixed.28a3d557.js";const C=P({name:"KCheckbox",props:{modelValue:{type:Boolean,default:!1},value:{type:[String,Number,Boolean,Object,Array,Symbol],default:""},label:{type:String,default:""},color:{type:String,control:"inline-radio",options:x,validator:e=>x.includes(e),default:"primary",description:"Color del bot\xF3n"}},emits:["update:modelValue"],setup(e,r){const n=O(),t=l(a=>!!r.slots[a],"hasSlot"),f=y(()=>{let a=[];return e.color==="white"||e.color==="black"?a.push("text-black focus:ring-black dark:focus:ring-white dark:text-black k-checkbox-inverse"):e.color==="gray"?a.push("text-gray-300 focus:ring-gray-300 dark:focus:ring-gray-300"):e.color==="primary"?a.push("text-primary focus:ring-primary dark:focus:ring-primary"):e.color==="secondary"?a.push("text-secondary focus:ring-secondary dark:focus:ring-secondary"):e.color==="success"?a.push("text-success focus:ring-success dark:focus:ring-success"):e.color==="warning"?a.push("text-warning focus:ring-warning dark:focus:ring-warning"):e.color==="danger"?a.push("text-danger focus:ring-danger dark:focus:ring-danger"):e.color==="info"&&a.push("text-info focus:ring-info dark:focus:ring-info"),a}),b=l(a=>{u.value=a.target.value},"change"),u=y({get(){return e.modelValue},set(a){r.emit("update:modelValue",a)}});return{model:u,hasSlot:t,inputId:n,classes:f,change:b}}});const $={class:"flex items-center"},H=["id","checked","value"],X=["for"];function F(e,r,n,t,f,b){return k(),m("div",$,[N("input",{id:e.inputId,checked:e.model===e.value,value:e.value,type:"checkbox",class:I(["k-checkbox w-4 h-4 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",e.classes]),onChange:r[0]||(r[0]=(...u)=>e.change&&e.change(...u))},null,42,H),e.label||e.hasSlot("default")?(k(),m("label",{key:0,for:e.inputId,class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"},[e.hasSlot("default")?j(e.$slots,"default",{key:0},void 0,!0):(k(),m(K,{key:1},[M(E(e.label),1)],64))],8,X)):G("",!0)])}l(F,"_sfc_render");const c=A(C,[["render",F],["__scopeId","data-v-abd96522"]]);C.__docgenInfo={displayName:"KCheckbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string|number|boolean|object|array|symbol"},defaultValue:{func:!1,value:"''"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}]};function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}l(p,"_extends");const v=l(e=>({components:{KCheckbox:c},setup(){return{args:e}},template:'<k-card><k-checkbox v-bind="args">Checkbox Label</k-checkbox></k-card>'}),"Template"),q={Template:v},z="wrapper";function w({components:e,...r}){return o(z,p({},q,r,{components:e,mdxType:"MDXLayout"}),o(B,{title:"Data Entry/Checkbox",component:c,argTypes:i(c),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),o(L,{image:"https://media0.giphy.com/media/hDSy8w6rGHeTe/giphy.gif?cid=ecf05e47d1yojdu59ttft3ykom3decoar5aubq8zin0w9sov&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F6CE} KCheckbox"),o("h1",null,"KCheckbox"),o("p",null,"Con el componente ",o("inlineCode",{parentName:"p"},"k-checkbox")," puedes marcar o desmarcar una opci\xF3n. Util para booleanos."),o(g,{name:"Default",parameters:d({showPanel:!0}),mdxType:"Story"},v.bind({})),o(W,{story:"Default",mdxType:"ArgsTable"}),o("h2",null,o("strong",{parentName:"h2"},"Color")),o("p",null,"Existen diferentes estilos de colores para los botones. Muchos de ellos se usan para definir una accion en el sistema."),o(_,{mdxType:"Canvas"},o(g,{name:"Color",argTypes:i(c,{},!0),parameters:d({showPanel:!1}),mdxType:"Story"},()=>({components:{KCheckbox:c},setup(){return{value:S("White/Black")}},template:`
          <div class="flex flex-col gap-4">
            <k-card class="grid grid-cols-2 gap-4">
              <k-checkbox v-model="value" color="white" value="White/Black">White / Black</k-checkbox>
              <k-checkbox v-model="value" color="gray" value="Gray">Gray</k-checkbox>
              <k-checkbox v-model="value" color="primary" value="Primary">Primary</k-checkbox>
              <k-checkbox v-model="value" color="secondary" value="Secondary">Secondary</k-checkbox>
              <k-checkbox v-model="value" color="success" value="Success">Success</k-checkbox>
              <k-checkbox v-model="value" color="warning" value="Warning">Warning</k-checkbox>
              <k-checkbox v-model="value" color="danger" value="Danger">Danger</k-checkbox>
              <k-checkbox v-model="value" color="info" value="Info">Info</k-checkbox>
            </k-card>
            <k-card>
              <b>Value:</b> {{ value }}
            </k-card>
          </div>
        `}))))}l(w,"MDXContent");w.isMDXComponent=!0;const D=v.bind({});D.storyName="Default";D.parameters={storySource:{source:`args => ({
  components: {
    KCheckbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-checkbox v-bind="args">Checkbox Label</k-checkbox></k-card>'
})`},...d({showPanel:!0})};const h=l(()=>({components:{KCheckbox:c},setup(){return{value:S("White/Black")}},template:`
          <div class="flex flex-col gap-4">
            <k-card class="grid grid-cols-2 gap-4">
              <k-checkbox v-model="value" color="white" value="White/Black">White / Black</k-checkbox>
              <k-checkbox v-model="value" color="gray" value="Gray">Gray</k-checkbox>
              <k-checkbox v-model="value" color="primary" value="Primary">Primary</k-checkbox>
              <k-checkbox v-model="value" color="secondary" value="Secondary">Secondary</k-checkbox>
              <k-checkbox v-model="value" color="success" value="Success">Success</k-checkbox>
              <k-checkbox v-model="value" color="warning" value="Warning">Warning</k-checkbox>
              <k-checkbox v-model="value" color="danger" value="Danger">Danger</k-checkbox>
              <k-checkbox v-model="value" color="info" value="Info">Info</k-checkbox>
            </k-card>
            <k-card>
              <b>Value:</b> {{ value }}
            </k-card>
          </div>
        `}),"color");h.storyName="Color";h.argTypes=i(c,{},!0);h.parameters={storySource:{source:`() => {
  return {
    components: {
      KCheckbox
    },
    setup() {
      const value = ref('White/Black');
      return {
        value
      };
    },
    template: \`
          <div class="flex flex-col gap-4">
            <k-card class="grid grid-cols-2 gap-4">
              <k-checkbox v-model="value" color="white" value="White/Black">White / Black</k-checkbox>
              <k-checkbox v-model="value" color="gray" value="Gray">Gray</k-checkbox>
              <k-checkbox v-model="value" color="primary" value="Primary">Primary</k-checkbox>
              <k-checkbox v-model="value" color="secondary" value="Secondary">Secondary</k-checkbox>
              <k-checkbox v-model="value" color="success" value="Success">Success</k-checkbox>
              <k-checkbox v-model="value" color="warning" value="Warning">Warning</k-checkbox>
              <k-checkbox v-model="value" color="danger" value="Danger">Danger</k-checkbox>
              <k-checkbox v-model="value" color="info" value="Info">Info</k-checkbox>
            </k-card>
            <k-card>
              <b>Value:</b> {{ value }}
            </k-card>
          </div>
        \`
  };
}`},...d({showPanel:!1})};const s={title:"Data Entry/Checkbox",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:c,argTypes:i(c),includeStories:["defaultStory","color"]},Q={Default:"defaultStory",Color:"color"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>o(V,{mdxStoryNameToKey:Q,mdxComponentAnnotations:s},o(w,null))};const ne=["Template","defaultStory","color"];export{v as Template,ne as __namedExportsOrder,h as color,s as default,D as defaultStory};
//# sourceMappingURL=k-checkbox.story.8206b245.js.map
