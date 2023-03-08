var h=Object.defineProperty;var a=(r,t)=>h(r,"name",{value:t,configurable:!0});import"./jsx-runtime.50e3ea3d.js";import{aL as e,aM as k,aN as y,aO as p,aQ as x}from"./Props.83de5850.js";import"./iframe.38129425.js";import"./vue.esm-bundler.7a829ca1.js";import{K as o}from"./k-logo.2df34765.js";import{r as n,a as s,H as b}from"./s-head.5c478942.js";import"./string.afc03a9e.js";import"./es.map.constructor.249e4cc2.js";import"./es.number.to-fixed.73993e76.js";import"./query.2abf0db7.js";import"./_plugin-vue_export-helper.cdc0426e.js";function g(){return g=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(r[i]=l[i])}return r},g.apply(this,arguments)}a(g,"_extends");const m=a(r=>({components:{KLogo:o},setup(){return{args:r}},template:`
      <k-card>
        <k-logo v-bind="args" />
      </k-card>
    `}),"Template"),w={Template:m},L="wrapper";function v({components:r,...t}){return e(L,g({},w,t,{components:r,mdxType:"MDXLayout"}),e(x,{title:"Branding/Logo",component:o,argTypes:s(o),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(b,{image:"https://media4.giphy.com/media/C3RGOG8wTN9E2tihIL/giphy.gif?cid=ecf05e47pijfkr4smwo79lz15l7eg6v1frmtvb0crpfeyzay&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F431}\u200D\u{1F464} KLogo"),e("h1",null,"KLogo"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-logo")," puedes mostrar el logo de tu marca en distintas formas y colores."),e(p,{name:"Default",parameters:n({showPanel:!0}),mdxType:"Story"},m.bind({})),e("h2",null,e("strong",{parentName:"h2"},"Modo Oscuro")),e("p",null,"Con el atributo ",e("inlineCode",{parentName:"p"},"dark")," o ",e("inlineCode",{parentName:"p"},"light")," puedes forzar el modo oscuro o claro del logo."),e(y,{mdxType:"Canvas"},e(p,{name:"Dark/Light",argTypes:s(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KLogo:o},template:`
          <div class="flex flex-row gap-6">
            <div class="bg-gray-800 p-5 rounded-lg">
              <k-logo dark />
            </div>
            <div class="bg-white p-5 rounded-lg">
              <k-logo light />
            </div>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Side")),e("p",null,"Con el atributo ",e("inlineCode",{parentName:"p"},"side")," se muestra el icono en formato rectangular en vez de cuadrado."),e(y,{mdxType:"Canvas"},e(p,{name:"Side",argTypes:s(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KLogo:o},template:`
          <div class="flex flex-row gap-6">
            <div class="bg-gray-800 p-5 rounded-lg">
              <k-logo dark side />
            </div>
            <div class="bg-white p-5 rounded-lg">
              <k-logo light side />
            </div>
          </div>
        `}))))}a(v,"MDXContent");v.isMDXComponent=!0;const f=m.bind({});f.storyName="Default";f.parameters={storySource:{source:`args => ({
  components: {
    KLogo
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <k-card>
        <k-logo v-bind="args" />
      </k-card>
    \`
})`},...n({showPanel:!0})};const c=a(()=>({components:{KLogo:o},template:`
          <div class="flex flex-row gap-6">
            <div class="bg-gray-800 p-5 rounded-lg">
              <k-logo dark />
            </div>
            <div class="bg-white p-5 rounded-lg">
              <k-logo light />
            </div>
          </div>
        `}),"darkLight");c.storyName="Dark/Light";c.argTypes=s(o,{},!0);c.parameters={storySource:{source:`() => {
  return {
    components: {
      KLogo
    },
    template: \`
          <div class="flex flex-row gap-6">
            <div class="bg-gray-800 p-5 rounded-lg">
              <k-logo dark />
            </div>
            <div class="bg-white p-5 rounded-lg">
              <k-logo light />
            </div>
          </div>
        \`
  };
}`},...n({showPanel:!1})};const u=a(()=>({components:{KLogo:o},template:`
          <div class="flex flex-row gap-6">
            <div class="bg-gray-800 p-5 rounded-lg">
              <k-logo dark side />
            </div>
            <div class="bg-white p-5 rounded-lg">
              <k-logo light side />
            </div>
          </div>
        `}),"side");u.storyName="Side";u.argTypes=s(o,{},!0);u.parameters={storySource:{source:`() => {
  return {
    components: {
      KLogo
    },
    template: \`
          <div class="flex flex-row gap-6">
            <div class="bg-gray-800 p-5 rounded-lg">
              <k-logo dark side />
            </div>
            <div class="bg-white p-5 rounded-lg">
              <k-logo light side />
            </div>
          </div>
        \`
  };
}`},...n({showPanel:!1})};const d={title:"Branding/Logo",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:o,argTypes:s(o),includeStories:["defaultStory","darkLight","side"]},S={Default:"defaultStory","Dark/Light":"darkLight",Side:"side"};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:()=>e(k,{mdxStoryNameToKey:S,mdxComponentAnnotations:d},e(v,null))};const E=["Template","defaultStory","darkLight","side"];export{m as Template,E as __namedExportsOrder,c as darkLight,d as default,f as defaultStory,u as side};
//# sourceMappingURL=k-logo.story.43731e69.js.map
