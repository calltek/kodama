var h=Object.defineProperty;var s=(a,r)=>h(a,"name",{value:r,configurable:!0});import"./jsx-runtime.ff681f56.js";import{aL as e,aM as T,aQ as u,aN as l,aP as k,aO as x}from"./Props.0c148406.js";import"./iframe.988cdce5.js";import{K as t}from"./k-empty.fca6caaf.js";import{r as o,a as n,H as P}from"./s-head.a9240482.js";import"./string.3b2923bc.js";import"./es.map.constructor.04819154.js";import"./es.number.to-fixed.f48c0640.js";import"./vue.esm-bundler.ad0aee8d.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function c(){return c=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var m=arguments[r];for(var p in m)Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}return a},c.apply(this,arguments)}s(c,"_extends");const d=s(a=>({components:{KEmpty:t},setup(){return{args:a}},template:'<k-empty v-bind="args" />'}),"Template"),v={Template:d},C="wrapper";function S({components:a,...r}){return e(C,c({},v,r,{components:a,mdxType:"MDXLayout"}),e(x,{title:"Feedback/Empty",component:t,argTypes:n(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(P,{image:"https://media3.giphy.com/media/Az1CJ2MEjmsp2/giphy.gif?cid=ecf05e47d94jx1x6qd6mwuxgu3v6yt16z597smholfadvgss&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F481}\u200D\u2642\uFE0F KEmpty"),e("h1",null,"KEmpty"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-empty")," puedes informar al usuario de que ahi no se le ha perdido nada, simplemente no hay nada que mostrar."),e(l,{name:"Default",parameters:o({showPanel:!0}),args:{title:"Sin resultados",subtitle:"Prueba con otra consulta"},mdxType:"Story"},d.bind({})),e(k,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Titulo / Subtitulo")),e("p",null,"Puedes modificar los textos de titulo y subtitulo con las propiedades ",e("inlineCode",{parentName:"p"},"title")," y ",e("inlineCode",{parentName:"p"},"subtitle")," respectivamente."),e(u,{mdxType:"Canvas"},e(l,{name:"Title/Subtitle",argTypes:n(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KEmpty:t},template:`
          <k-empty title="Titulo personalizado" subtitle="Subtitulo personalizado" />
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Imagen")),e("p",null,"Puedes definir una imagen personalizada para el componente con ",e("inlineCode",{parentName:"p"},"image"),"."),e(u,{mdxType:"Canvas"},e(l,{name:"Image",argTypes:n(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KEmpty:t},template:`
          <k-empty title="Sin resultados" subtitle="Prueba con otra consulta" image="https://img.freepik.com/vector-premium/anillo-destino-tiro-arco-muchas-flechas-perdidas-simbolo-falla-objetivo-comercial-concepto-estrategia-error_254622-306.jpg?w=740">
          </k-empty>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Acci\xF3n")),e("p",null,"Puedes definir una acci\xF3n a\xF1adiendo el slot ",e("inlineCode",{parentName:"p"},"action"),"."),e(u,{mdxType:"Canvas"},e(l,{name:"Action",argTypes:n(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KEmpty:t},template:`
          <k-empty title="Sin resultados" subtitle="Prueba con otra consulta">
            <template #action>
              <k-button color="primary">Ir al inicio</k-button>
            </template>
          </k-empty>
        `}))))}s(S,"MDXContent");S.isMDXComponent=!0;const y=d.bind({});y.storyName="Default";y.args={title:"Sin resultados",subtitle:"Prueba con otra consulta"};y.parameters={storySource:{source:`args => ({
  components: {
    KEmpty
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-empty v-bind="args" />'
})`},...o({showPanel:!0})};const g=s(()=>({components:{KEmpty:t},template:`
          <k-empty title="Titulo personalizado" subtitle="Subtitulo personalizado" />
        `}),"titleSubtitle");g.storyName="Title/Subtitle";g.argTypes=n(t,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KEmpty
    },
    template: \`
          <k-empty title="Titulo personalizado" subtitle="Subtitulo personalizado" />
        \`
  };
}`},...o({showPanel:!1})};const b=s(()=>({components:{KEmpty:t},template:`
          <k-empty title="Sin resultados" subtitle="Prueba con otra consulta" image="https://img.freepik.com/vector-premium/anillo-destino-tiro-arco-muchas-flechas-perdidas-simbolo-falla-objetivo-comercial-concepto-estrategia-error_254622-306.jpg?w=740">
          </k-empty>
        `}),"image");b.storyName="Image";b.argTypes=n(t,{},!0);b.parameters={storySource:{source:`() => {
  return {
    components: {
      KEmpty
    },
    template: \`
          <k-empty title="Sin resultados" subtitle="Prueba con otra consulta" image="https://img.freepik.com/vector-premium/anillo-destino-tiro-arco-muchas-flechas-perdidas-simbolo-falla-objetivo-comercial-concepto-estrategia-error_254622-306.jpg?w=740">
          </k-empty>
        \`
  };
}`},...o({showPanel:!1})};const f=s(()=>({components:{KEmpty:t},template:`
          <k-empty title="Sin resultados" subtitle="Prueba con otra consulta">
            <template #action>
              <k-button color="primary">Ir al inicio</k-button>
            </template>
          </k-empty>
        `}),"action");f.storyName="Action";f.argTypes=n(t,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KEmpty
    },
    template: \`
          <k-empty title="Sin resultados" subtitle="Prueba con otra consulta">
            <template #action>
              <k-button color="primary">Ir al inicio</k-button>
            </template>
          </k-empty>
        \`
  };
}`},...o({showPanel:!1})};const i={title:"Feedback/Empty",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:n(t),includeStories:["defaultStory","titleSubtitle","image","action"]},N={Default:"defaultStory","Title/Subtitle":"titleSubtitle",Image:"image",Action:"action"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(T,{mdxStoryNameToKey:N,mdxComponentAnnotations:i},e(S,null))};const F=["Template","defaultStory","titleSubtitle","image","action"];export{d as Template,F as __namedExportsOrder,f as action,i as default,y as defaultStory,b as image,g as titleSubtitle};
//# sourceMappingURL=k-empty.story.88dc6ab6.js.map
