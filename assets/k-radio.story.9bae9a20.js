var T=Object.defineProperty;var l=(e,o)=>T(e,"name",{value:o,configurable:!0});import"./jsx-runtime.88dd5020.js";import{aL as r,aM as V,aQ as W,aN as h,aP as _,aO as B}from"./Props.1ef38ce3.js";import"./iframe.7b188eaa.js";import{d as N,i as S,o as m,a as p,b as P,n as j,j as I,F as R,f as K,t as M,g as E,q as w}from"./vue.esm-bundler.40c2ec29.js";import{c as x,u as O}from"./utils.afff62ba.js";import{_ as A}from"./+plugin-vue+export-helper.ed6a1c48.js";import{r as u,a as c,H as G}from"./s-head.c76c13e0.js";import"./string.6e767c61.js";import"./es.map.constructor.c0550aa6.js";import"./es.number.to-fixed.28a3d557.js";const D=N({name:"KRadio",props:{modelValue:{type:[String,Number,Boolean,Object,Array,Symbol],default:!1},name:{type:String,required:!0},value:{type:[String,Number,Boolean,Object,Array,Symbol],default:""},label:{type:String,default:""},color:{type:String,control:"inline-radio",options:x,validator:e=>x.includes(e),default:"primary",description:"Color del bot\xF3n"}},emits:["update:modelValue"],setup(e,o){const t=O(),d=l(a=>!!o.slots[a],"hasSlot"),k=S(()=>{let a=[];return e.color==="white"||e.color==="black"?a.push("text-black focus:ring-black dark:focus:ring-white dark:text-black k-checkbox-inverse"):e.color==="gray"?a.push("text-gray-300 focus:ring-gray-300 dark:focus:ring-gray-300"):e.color==="primary"?a.push("text-primary focus:ring-primary dark:focus:ring-primary"):e.color==="secondary"?a.push("text-secondary focus:ring-secondary dark:focus:ring-secondary"):e.color==="success"?a.push("text-success focus:ring-success dark:focus:ring-success"):e.color==="warning"?a.push("text-warning focus:ring-warning dark:focus:ring-warning"):e.color==="danger"?a.push("text-danger focus:ring-danger dark:focus:ring-danger"):e.color==="info"&&a.push("text-info focus:ring-info dark:focus:ring-info"),a}),b=l(a=>{i.value=a.target.value},"change"),i=S({get(){return e.modelValue},set(a){o.emit("update:modelValue",a)}});return{model:i,hasSlot:d,inputId:t,classes:k,change:b}}});const L={class:"flex items-center"},$=["id","value","name","checked"],q=["for"];function H(e,o,t,d,k,b){return m(),p("div",L,[P("input",{id:e.inputId,type:"radio",value:e.value,name:e.name,class:j(["w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",e.classes]),checked:e.model===e.value,onChange:o[0]||(o[0]=(...i)=>e.change&&e.change(...i))},null,42,$),e.label||e.hasSlot("default")?(m(),p("label",{key:0,for:e.inputId,class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"},[e.hasSlot("default")?I(e.$slots,"default",{key:0},void 0,!0):(m(),p(R,{key:1},[K(M(e.label),1)],64))],8,q)):E("",!0)])}l(H,"_sfc_render");const n=A(D,[["render",H],["__scopeId","data-v-00a6d505"]]);D.__docgenInfo={displayName:"KRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object|array|symbol"},defaultValue:{func:!1,value:"false"}},{name:"name",type:{name:"string"},required:!0},{name:"value",type:{name:"string|number|boolean|object|array|symbol"},defaultValue:{func:!1,value:"''"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}]};function v(){return v=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d])}return e},v.apply(this,arguments)}l(v,"_extends");const g=l(e=>({components:{KRadio:n},setup(){return{args:e}},template:'<k-card><k-radio v-bind="args">Checkbox Label</k-radio></k-card>'}),"Template"),X={Template:g},F="wrapper";function C({components:e,...o}){return r(F,v({},X,o,{components:e,mdxType:"MDXLayout"}),r(B,{title:"Data Entry/Radio",component:n,argTypes:c(n),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),r(G,{image:"https://media0.giphy.com/media/hDSy8w6rGHeTe/giphy.gif?cid=ecf05e47d1yojdu59ttft3ykom3decoar5aubq8zin0w9sov&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F6CE} KRadio"),r("h1",null,"KRadio"),r("p",null,"Con el componente ",r("inlineCode",{parentName:"p"},"k-radio")," puedes marcar o desmarcar una opci\xF3n. Util para booleanos."),r(h,{name:"Default",parameters:u({showPanel:!0}),args:{name:"radio-name"},mdxType:"Story"},g.bind({})),r(_,{story:"Default",mdxType:"ArgsTable"}),r("h2",null,r("strong",{parentName:"h2"},"Color")),r("p",null,"Existen diferentes estilos de colores para los botones. Muchos de ellos se usan para definir una accion en el sistema."),r(W,{mdxType:"Canvas"},r(h,{name:"Color",argTypes:c(n,{},!0),parameters:u({showPanel:!1}),mdxType:"Story"},()=>({components:{KRadio:n},setup(){return{value:w("White/Black")}},template:`
          <k-card>
            <div class="grid grid-cols-2 gap-4">
              <k-radio v-model="value" value="White/Black" color="white" name="radio-name">White / Black</k-radio>
              <k-radio v-model="value" value="Gray" color="gray" name="radio-name">Gray</k-radio>
              <k-radio v-model="value" value="Primary" color="primary" name="radio-name">Primary</k-radio>
              <k-radio v-model="value" value="Secondary" color="secondary" name="radio-name">Secondary</k-radio>
              <k-radio v-model="value" value="Success" color="success" name="radio-name">Success</k-radio>
              <k-radio v-model="value" value="Warning" color="warning" name="radio-name">Warning</k-radio>
              <k-radio v-model="value" value="Danger" color="danger" name="radio-name">Danger</k-radio>
              <k-radio v-model="value" value="Info" color="info" name="radio-name">Info</k-radio>
            </div>
          </k-card>
          <k-card>
            <b>Value:</b> {{ value }}
          </k-card>
        `}))))}l(C,"MDXContent");C.isMDXComponent=!0;const y=g.bind({});y.storyName="Default";y.args={name:"radio-name"};y.parameters={storySource:{source:`args => ({
  components: {
    KRadio
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-radio v-bind="args">Checkbox Label</k-radio></k-card>'
})`},...u({showPanel:!0})};const f=l(()=>({components:{KRadio:n},setup(){return{value:w("White/Black")}},template:`
          <k-card>
            <div class="grid grid-cols-2 gap-4">
              <k-radio v-model="value" value="White/Black" color="white" name="radio-name">White / Black</k-radio>
              <k-radio v-model="value" value="Gray" color="gray" name="radio-name">Gray</k-radio>
              <k-radio v-model="value" value="Primary" color="primary" name="radio-name">Primary</k-radio>
              <k-radio v-model="value" value="Secondary" color="secondary" name="radio-name">Secondary</k-radio>
              <k-radio v-model="value" value="Success" color="success" name="radio-name">Success</k-radio>
              <k-radio v-model="value" value="Warning" color="warning" name="radio-name">Warning</k-radio>
              <k-radio v-model="value" value="Danger" color="danger" name="radio-name">Danger</k-radio>
              <k-radio v-model="value" value="Info" color="info" name="radio-name">Info</k-radio>
            </div>
          </k-card>
          <k-card>
            <b>Value:</b> {{ value }}
          </k-card>
        `}),"color");f.storyName="Color";f.argTypes=c(n,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KRadio
    },
    setup() {
      const value = ref('White/Black');
      return {
        value
      };
    },
    template: \`
          <k-card>
            <div class="grid grid-cols-2 gap-4">
              <k-radio v-model="value" value="White/Black" color="white" name="radio-name">White / Black</k-radio>
              <k-radio v-model="value" value="Gray" color="gray" name="radio-name">Gray</k-radio>
              <k-radio v-model="value" value="Primary" color="primary" name="radio-name">Primary</k-radio>
              <k-radio v-model="value" value="Secondary" color="secondary" name="radio-name">Secondary</k-radio>
              <k-radio v-model="value" value="Success" color="success" name="radio-name">Success</k-radio>
              <k-radio v-model="value" value="Warning" color="warning" name="radio-name">Warning</k-radio>
              <k-radio v-model="value" value="Danger" color="danger" name="radio-name">Danger</k-radio>
              <k-radio v-model="value" value="Info" color="info" name="radio-name">Info</k-radio>
            </div>
          </k-card>
          <k-card>
            <b>Value:</b> {{ value }}
          </k-card>
        \`
  };
}`},...u({showPanel:!1})};const s={title:"Data Entry/Radio",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:n,argTypes:c(n),includeStories:["defaultStory","color"]},z={Default:"defaultStory",Color:"color"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>r(V,{mdxStoryNameToKey:z,mdxComponentAnnotations:s},r(C,null))};const te=["Template","defaultStory","color"];export{g as Template,te as __namedExportsOrder,f as color,s as default,y as defaultStory};
//# sourceMappingURL=k-radio.story.9bae9a20.js.map
