var T=Object.defineProperty;var l=(e,o)=>T(e,"name",{value:o,configurable:!0});import"./jsx-runtime.5230863f.js";import{aL as r,aM as V,aQ as B,aN as h,aP as W,aO as _}from"./Props.3d43f305.js";import"./iframe.b502473d.js";import{d as N,z as S,l as m,m as p,p as P,C as I,B as j,F as R,v as K,t as M,y as E,r as w}from"./vue.esm-bundler.3fc53486.js";import{c as x,u as O}from"./utils.e3374581.js";import{_ as A}from"./+plugin-vue+export-helper.ed6a1c48.js";import{r as u,a as c,H as G}from"./s-head.5f39cb3b.js";import"./string.404bb550.js";import"./es.map.constructor.26a5de70.js";import"./es.number.to-fixed.3e646e7f.js";const C=N({name:"KRadio",props:{modelValue:{type:[String,Number,Boolean,Object,Array,Symbol],default:!1},name:{type:String,required:!0},value:{type:[String,Number,Boolean,Object,Array,Symbol],default:""},label:{type:String,default:""},color:{type:String,control:{type:"inline-radio"},options:x,validator:e=>x.includes(e),default:"primary",description:"Color del bot\xF3n"}},emits:["update:modelValue"],setup(e,o){const t=O(),d=l(a=>!!o.slots[a],"hasSlot"),k=S(()=>{let a=[];return e.color==="white"||e.color==="black"?a.push("text-black focus:ring-black dark:focus:ring-white dark:text-black k-checkbox-inverse"):e.color==="gray"?a.push("text-gray-300 focus:ring-gray-300 dark:focus:ring-gray-300"):e.color==="primary"?a.push("text-primary focus:ring-primary dark:focus:ring-primary"):e.color==="secondary"?a.push("text-secondary focus:ring-secondary dark:focus:ring-secondary"):e.color==="success"?a.push("text-success focus:ring-success dark:focus:ring-success"):e.color==="warning"?a.push("text-warning focus:ring-warning dark:focus:ring-warning"):e.color==="danger"?a.push("text-danger focus:ring-danger dark:focus:ring-danger"):e.color==="info"&&a.push("text-info focus:ring-info dark:focus:ring-info"),a}),b=l(a=>{i.value=a.target.value},"change"),i=S({get(){return e.modelValue},set(a){o.emit("update:modelValue",a)}});return{model:i,hasSlot:d,inputId:t,classes:k,change:b}}});const L={class:"flex items-center"},$=["id","value","name","checked"],H=["for"];function X(e,o,t,d,k,b){return m(),p("div",L,[P("input",{id:e.inputId,type:"radio",value:e.value,name:e.name,class:I(["w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",e.classes]),checked:e.model===e.value,onChange:o[0]||(o[0]=(...i)=>e.change&&e.change(...i))},null,42,$),e.label||e.hasSlot("default")?(m(),p("label",{key:0,for:e.inputId,class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"},[e.hasSlot("default")?j(e.$slots,"default",{key:0},void 0,!0):(m(),p(R,{key:1},[K(M(e.label),1)],64))],8,H)):E("",!0)])}l(X,"_sfc_render");const n=A(C,[["render",X],["__scopeId","data-v-e9a27b9b"]]);C.__docgenInfo={displayName:"KRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|boolean|object|array|symbol"},defaultValue:{func:!1,value:"false"}},{name:"name",type:{name:"string"},required:!0},{name:"value",type:{name:"string|number|boolean|object|array|symbol"},defaultValue:{func:!1,value:"''"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}]};function v(){return v=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d])}return e},v.apply(this,arguments)}l(v,"_extends");const y=l(e=>({components:{KRadio:n},setup(){return{args:e}},template:'<k-card><k-radio v-bind="args">Checkbox Label</k-radio></k-card>'}),"Template"),q={Template:y},z="wrapper";function D({components:e,...o}){return r(z,v({},q,o,{components:e,mdxType:"MDXLayout"}),r(_,{title:"Data Entry/Radio",component:n,argTypes:c(n),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),r(G,{image:"https://media0.giphy.com/media/hDSy8w6rGHeTe/giphy.gif?cid=ecf05e47d1yojdu59ttft3ykom3decoar5aubq8zin0w9sov&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F6CE} KRadio"),r("h1",null,"KRadio"),r("p",null,"Con el componente ",r("inlineCode",{parentName:"p"},"k-radio")," puedes marcar o desmarcar una opci\xF3n. Util para booleanos."),r(h,{name:"Default",parameters:u({showPanel:!0}),args:{name:"radio-name"},mdxType:"Story"},y.bind({})),r(W,{story:"Default",mdxType:"ArgsTable"}),r("h2",null,r("strong",{parentName:"h2"},"Color")),r("p",null,"Existen diferentes estilos de colores para los botones. Muchos de ellos se usan para definir una accion en el sistema."),r(B,{mdxType:"Canvas"},r(h,{name:"Color",argTypes:c(n,{},!0),parameters:u({showPanel:!1}),mdxType:"Story"},()=>({components:{KRadio:n},setup(){return{value:w("White/Black")}},template:`
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
        `}))))}l(D,"MDXContent");D.isMDXComponent=!0;const g=y.bind({});g.storyName="Default";g.args={name:"radio-name"};g.parameters={storySource:{source:`args => ({
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
}`},...u({showPanel:!1})};const s={title:"Data Entry/Radio",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:n,argTypes:c(n),includeStories:["defaultStory","color"]},F={Default:"defaultStory",Color:"color"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>r(V,{mdxStoryNameToKey:F,mdxComponentAnnotations:s},r(D,null))};const te=["Template","defaultStory","color"];export{y as Template,te as __namedExportsOrder,f as color,s as default,g as defaultStory};
//# sourceMappingURL=k-radio.story.8185cb4c.js.map
