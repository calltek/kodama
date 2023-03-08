var x=Object.defineProperty;var l=(r,n)=>x(r,"name",{value:n,configurable:!0});import"./jsx-runtime.b54f3273.js";import{aL as e,aM as v,aN as u,aO as m,aP as T,aQ as h}from"./Props.e2f52e5d.js";import"./iframe.5992b53d.js";import{K as t}from"./k-alert.e079a021.js";import{r as a,a as o,H as S}from"./s-head.af73b89b.js";import"./string.a2aee421.js";import"./es.map.constructor.4531a3b9.js";import"./es.number.to-fixed.e165c26a.js";import"./vue.esm-bundler.5c09a9bb.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function d(){return d=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var p=arguments[n];for(var i in p)Object.prototype.hasOwnProperty.call(p,i)&&(r[i]=p[i])}return r},d.apply(this,arguments)}l(d,"_extends");const c=l(r=>({components:{KAlert:t},setup(){return{args:r}},template:'<k-alert v-bind="args">Lorem ipsum dolor sit amet</k-alert>'}),"Template"),w={Template:c},b="wrapper";function g({components:r,...n}){return e(b,d({},w,n,{components:r,mdxType:"MDXLayout"}),e(h,{title:"Feedback/Alert",component:t,argTypes:o(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(S,{image:"https://media1.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif?cid=ecf05e47g15et0uaf8y7xuy046e30du8emzh7a0fzses5mo2&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2753 KAlert"),e("h1",null,"KAlert"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-alert")," puedes informar sobre un suceso dentro del aplicativo."),e(m,{name:"Default",parameters:a({showPanel:!0}),mdxType:"Story"},c.bind({})),e(T,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Tipos")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(u,{mdxType:"Canvas"},e(m,{name:"Types",argTypes:o(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="info">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger">Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Outline")),e("p",null,"El estilo outline aplica un borde alrededor de la alerta y deja su fondo inocuo."),e(u,{mdxType:"Canvas"},e(m,{name:"Outline",argTypes:o(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="info" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" outline>Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Neon")),e("p",null,"El estilo ne\xF3n aplica un efecto de iluminaci\xF3n de la alerta bastante bonico."),e(u,{mdxType:"Canvas"},e(m,{name:"Neon",argTypes:o(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="info" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" neon>Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}))))}l(g,"MDXContent");g.isMDXComponent=!0;const L=c.bind({});L.storyName="Default";L.parameters={storySource:{source:`args => ({
  components: {
    KAlert
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-alert v-bind="args">Lorem ipsum dolor sit amet</k-alert>'
})`},...a({showPanel:!0})};const y=l(()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="info">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger">Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}),"types");y.storyName="Types";y.argTypes=o(t,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KAlert
    },
    template: \`
          <div class="flex flex-col gap-8">
            <k-alert type="info">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning">Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger">Lorem ipsum dolor sit amet</k-alert>
          </div>
        \`
  };
}`},...a({showPanel:!1})};const k=l(()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="info" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" outline>Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}),"outline");k.storyName="Outline";k.argTypes=o(t,{},!0);k.parameters={storySource:{source:`() => {
  return {
    components: {
      KAlert
    },
    template: \`
          <div class="flex flex-col gap-8">
            <k-alert type="info" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" outline>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" outline>Lorem ipsum dolor sit amet</k-alert>
          </div>
        \`
  };
}`},...a({showPanel:!1})};const f=l(()=>({components:{KAlert:t},template:`
          <div class="flex flex-col gap-8">
            <k-alert type="info" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" neon>Lorem ipsum dolor sit amet</k-alert>
          </div>
        `}),"neon");f.storyName="Neon";f.argTypes=o(t,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KAlert
    },
    template: \`
          <div class="flex flex-col gap-8">
            <k-alert type="info" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="success" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="warning" neon>Lorem ipsum dolor sit amet</k-alert>
            <k-alert type="danger" neon>Lorem ipsum dolor sit amet</k-alert>
          </div>
        \`
  };
}`},...a({showPanel:!1})};const s={title:"Feedback/Alert",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:o(t),includeStories:["defaultStory","types","outline","neon"]},N={Default:"defaultStory",Types:"types",Outline:"outline",Neon:"neon"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>e(v,{mdxStoryNameToKey:N,mdxComponentAnnotations:s},e(g,null))};const _=["Template","defaultStory","types","outline","neon"];export{c as Template,_ as __namedExportsOrder,s as default,L as defaultStory,f as neon,k as outline,y as types};
//# sourceMappingURL=k-alert.story.0da9adac.js.map
