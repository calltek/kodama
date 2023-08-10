var b=Object.defineProperty;var o=(l,s)=>b(l,"name",{value:s,configurable:!0});import"./jsx-runtime.5230863f.js";import{aL as e,aM as v,aQ as i,aN as n,aP as w,aO as T}from"./Props.3d43f305.js";import"./iframe.b502473d.js";import{K as t}from"./k-alert.efa1b712.js";import{r,a,H as h}from"./s-head.5f39cb3b.js";import"./string.404bb550.js";import"./es.map.constructor.26a5de70.js";import"./es.number.to-fixed.3e646e7f.js";import"./vue.esm-bundler.3fc53486.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function d(){return d=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var p=arguments[s];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(l[u]=p[u])}return l},d.apply(this,arguments)}o(d,"_extends");const c=o(l=>({components:{KAlert:t},setup(){return{args:l}},template:'<k-alert v-bind="args">Lorem ipsum dolor sit amet</k-alert>'}),"Template"),S={Template:c},N="wrapper";function L({components:l,...s}){return e(N,d({},S,s,{components:l,mdxType:"MDXLayout"}),e(T,{title:"Feedback/Alert",component:t,argTypes:a(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(h,{image:"https://media1.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif?cid=ecf05e47g15et0uaf8y7xuy046e30du8emzh7a0fzses5mo2&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2753 KAlert"),e("h1",null,"KAlert"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-alert")," puedes informar sobre un suceso dentro del aplicativo."),e(n,{name:"Default",parameters:r({showPanel:!0}),mdxType:"Story"},c.bind({})),e(w,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Tipos")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(i,{mdxType:"Canvas"},e(n,{name:"Types",argTypes:a(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="primary">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger">Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Outline")),e("p",null,"El estilo outline aplica un borde alrededor de la alerta y deja su fondo inocuo."),e(i,{mdxType:"Canvas"},e(n,{name:"Outline",argTypes:a(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="primary" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" outline>Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Neon")),e("p",null,"El estilo ne\xF3n aplica un efecto de iluminaci\xF3n de la alerta bastante bonico."),e(i,{mdxType:"Canvas"},e(n,{name:"Neon",argTypes:a(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="primary" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" neon>Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Interactivo")),e("p",null,"Se puede cerrar la alerta haciendo click en el bot\xF3n de cerrar y aplicando la propiedad ",e("inlineCode",{parentName:"p"},"closable")),e(i,{mdxType:"Canvas"},e(n,{name:"Closable",argTypes:a(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KAlert:t},template:`
        <div class="flex flex-row gap-6">
          <div class="flex flex-col gap-8">
            <k-alert type="primary" closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" closable>Lorem ipsum dolor sit amet</k-alert>
          </div>
          <div class="flex flex-col gap-8">
            <k-alert type="primary" neon closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" neon closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" neon closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" neon closable>Lorem ipsum dolor sit amet</k-alert>
          </div>
          <div class="flex flex-col gap-8">
            <k-alert type="primary" outline closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" outline closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" outline closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" outline closable>Lorem ipsum dolor sit amet</k-alert>
          </div>
        </div>
        `}))))}o(L,"MDXContent");L.isMDXComponent=!0;const x=c.bind({});x.storyName="Default";x.parameters={storySource:{source:`args => ({
  components: {
    KAlert
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-alert v-bind="args">Lorem ipsum dolor sit amet</k-alert>'
})`},...r({showPanel:!0})};const y=o(()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="primary">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger">Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}),"types");y.storyName="Types";y.argTypes=a(t,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KAlert
    },
    template: \`
          <div class="flex flex-col gap-8">
            <k-alert type="primary">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger">Lorem ipsum dolor sit amet</k-alert>
          </div>
        \`
  };
}`},...r({showPanel:!1})};const k=o(()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="primary" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" outline>Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}),"outline");k.storyName="Outline";k.argTypes=a(t,{},!0);k.parameters={storySource:{source:`() => {
  return {
    components: {
      KAlert
    },
    template: \`
          <div class="flex flex-col gap-8">
            <k-alert type="primary" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" outline>Lorem ipsum dolor sit amet</k-alert>
          </div>
        \`
  };
}`},...r({showPanel:!1})};const g=o(()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="primary" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" neon>Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}),"neon");g.storyName="Neon";g.argTypes=a(t,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KAlert
    },
    template: \`
          <div class="flex flex-col gap-8">
            <k-alert type="primary" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" neon>Lorem ipsum dolor sit amet</k-alert>
          </div>
        \`
  };
}`},...r({showPanel:!1})};const f=o(()=>({components:{KAlert:t},template:`
        <div class="flex flex-row gap-6">
          <div class="flex flex-col gap-8">
            <k-alert type="primary" closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" closable>Lorem ipsum dolor sit amet</k-alert>
          </div>
          <div class="flex flex-col gap-8">
            <k-alert type="primary" neon closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" neon closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" neon closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" neon closable>Lorem ipsum dolor sit amet</k-alert>
          </div>
          <div class="flex flex-col gap-8">
            <k-alert type="primary" outline closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" outline closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" outline closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" outline closable>Lorem ipsum dolor sit amet</k-alert>
          </div>
        </div>
        `}),"closable");f.storyName="Closable";f.argTypes=a(t,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KAlert
    },
    template: \`
        <div class="flex flex-row gap-6">
          <div class="flex flex-col gap-8">
            <k-alert type="primary" closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" closable>Lorem ipsum dolor sit amet</k-alert>
          </div>
          <div class="flex flex-col gap-8">
            <k-alert type="primary" neon closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" neon closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" neon closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" neon closable>Lorem ipsum dolor sit amet</k-alert>
          </div>
          <div class="flex flex-col gap-8">
            <k-alert type="primary" outline closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" outline closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" outline closable>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" outline closable>Lorem ipsum dolor sit amet</k-alert>
          </div>
        </div>
        \`
  };
}`},...r({showPanel:!1})};const m={title:"Feedback/Alert",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:a(t),includeStories:["defaultStory","types","outline","neon","closable"]},A={Default:"defaultStory",Types:"types",Outline:"outline",Neon:"neon",Closable:"closable"};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:()=>e(v,{mdxStoryNameToKey:A,mdxComponentAnnotations:m},e(L,null))};const _=["Template","defaultStory","types","outline","neon","closable"];export{c as Template,_ as __namedExportsOrder,f as closable,m as default,x as defaultStory,g as neon,k as outline,y as types};
//# sourceMappingURL=k-alert.story.2a85acd6.js.map
