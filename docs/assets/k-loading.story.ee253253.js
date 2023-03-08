var y=Object.defineProperty;var o=(t,n)=>y(t,"name",{value:n,configurable:!0});import"./jsx-runtime.50e3ea3d.js";import{aL as e,aM as k,aN as S,aO as g,aQ as b}from"./Props.83de5850.js";import"./iframe.38129425.js";import{r as v}from"./vue.esm-bundler.7a829ca1.js";import{K as a}from"./k-loading.5ccaf407.js";import{r as l,a as i,H as x}from"./s-head.5c478942.js";import"./string.afc03a9e.js";import"./es.map.constructor.249e4cc2.js";import"./es.number.to-fixed.73993e76.js";import"./query.2abf0db7.js";import"./_plugin-vue_export-helper.cdc0426e.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c])}return t},p.apply(this,arguments)}o(p,"_extends");const d=o(t=>({components:{KLoading:a},setup(){return{args:t}},template:`
      <k-loading v-bind="args">
        <k-card>
          <k-skeleton type="card">
        </k-card>
      </k-loading>
    `}),"Template"),T={Template:d},F="wrapper";function f({components:t,...n}){return e(F,p({},T,n,{components:t,mdxType:"MDXLayout"}),e(b,{title:"Feedback/Loading",component:a,argTypes:i(a),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(x,{image:"https://i.giphy.com/u2wg2uXJbHzkXkPphr.gif",mdxType:"SHead"},"\u231A KLoading"),e("h1",null,"KLoading"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-loading")," puedes indicar un estado de espera mientras se carga un contenido e impedir otras interacciones con el usuario."),e(g,{name:"Default",parameters:l({showPanel:!0}),args:{active:!0,color:"secondary"},mdxType:"Story"},d.bind({})),e("h2",null,e("strong",{parentName:"h2"},"Fullpage")),e("p",null,"Con el atributo ",e("inlineCode",{parentName:"p"},"fullpage")," puedes mostrar el componente superpuesto en toda la pantalla."),e(S,{mdxType:"Canvas"},e(g,{name:"Fullpage",argTypes:i(a,{},!0),parameters:l({showPanel:!1}),mdxType:"Story"},()=>({components:{KLoading:a},setup(){const r=v(!1);return{active:r,activeFor5Seconds:o(()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)},"activeFor5Seconds")}},template:`
          <k-loading fullpage :active="active">
            <k-card>
              <k-skeleton type="card">
            </k-card>
            <div class="flex justify-center mt-4">
              <k-button @click="activeFor5Seconds()">Activar</k-button>
            </div>
          </k-loading>
        `}))))}o(f,"MDXContent");f.isMDXComponent=!0;const u=d.bind({});u.storyName="Default";u.args={active:!0,color:"secondary"};u.parameters={storySource:{source:`args => ({
  components: {
    KLoading
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <k-loading v-bind="args">
        <k-card>
          <k-skeleton type="card">
        </k-card>
      </k-loading>
    \`
})`},...l({showPanel:!0})};const m=o(()=>({components:{KLoading:a},setup(){const t=v(!1);return{active:t,activeFor5Seconds:o(()=>{t.value=!0,setTimeout(()=>{t.value=!1},3e3)},"activeFor5Seconds")}},template:`
          <k-loading fullpage :active="active">
            <k-card>
              <k-skeleton type="card">
            </k-card>
            <div class="flex justify-center mt-4">
              <k-button @click="activeFor5Seconds()">Activar</k-button>
            </div>
          </k-loading>
        `}),"fullpage");m.storyName="Fullpage";m.argTypes=i(a,{},!0);m.parameters={storySource:{source:`() => {
  return {
    components: {
      KLoading
    },
    setup() {
      const active = ref(false);
      const activeFor5Seconds = () => {
        active.value = true;
        setTimeout(() => {
          active.value = false;
        }, 3000);
      };
      return {
        active,
        activeFor5Seconds
      };
    },
    template: \`
          <k-loading fullpage :active="active">
            <k-card>
              <k-skeleton type="card">
            </k-card>
            <div class="flex justify-center mt-4">
              <k-button @click="activeFor5Seconds()">Activar</k-button>
            </div>
          </k-loading>
        \`
  };
}`},...l({showPanel:!1})};const s={title:"Feedback/Loading",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:a,argTypes:i(a),includeStories:["defaultStory","fullpage"]},h={Default:"defaultStory",Fullpage:"fullpage"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>e(k,{mdxStoryNameToKey:h,mdxComponentAnnotations:s},e(f,null))};const H=["Template","defaultStory","fullpage"];export{d as Template,H as __namedExportsOrder,s as default,u as defaultStory,m as fullpage};
//# sourceMappingURL=k-loading.story.ee253253.js.map
