var h=Object.defineProperty;var n=(a,r)=>h(a,"name",{value:r,configurable:!0});import"./jsx-runtime.96a42b50.js";import{aL as e,aM as x,aQ as f,aN as d,aP as T,aO as C}from"./Props.8111d5f2.js";import"./iframe.781b7dd4.js";import{K as t}from"./k-card.67dfac74.js";import{r as o,a as s,H as b}from"./s-head.26dc392e.js";import"./string.76479a21.js";import"./es.map.constructor.7c2bd8db.js";import"./es.number.to-fixed.d2fd1726.js";import"./vue.esm-bundler.e9a14992.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function c(){return c=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(a[m]=l[m])}return a},c.apply(this,arguments)}n(c,"_extends");const u=n(a=>({components:{KCard:t},setup(){return{args:a}},template:`
    <k-card v-bind="args" class="w-full max-w-sm">
      <k-skeleton type="card" />
    </k-card>`}),"Template"),w={Template:u},D="wrapper";function k({components:a,...r}){return e(D,c({},w,r,{components:a,mdxType:"MDXLayout"}),e(C,{title:"Data Display/Card",component:t,argTypes:s(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(b,{image:"https://media3.giphy.com/media/xUNd9DLukkavmhybAs/giphy.gif?cid=ecf05e47xzzzzsltihe9wazd1im6vmw688bmhg87fooqu7pg&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F9EE} KCard"),e("h1",null,"KCard"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-card")," puedes crear tarjetas de contenido de forma sencilla sin especificar tu mismo las clases."),e(d,{name:"Default",parameters:o({showPanel:!0}),mdxType:"Story"},u.bind({})),e(T,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Header/Footer")),e("p",null,"Puedes definir el ",e("inlineCode",{parentName:"p"},"header")," de la tarjeta con sus slot correspondiente."),e(f,{mdxType:"Canvas"},e(d,{name:"Header",argTypes:s(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KCard:t},template:`
          <k-card>
            <template #header>
              Header Example
            </template>
            <k-skeleton type="card" />
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Footer")),e("p",null,"Puedes definir el ",e("inlineCode",{parentName:"p"},"footer")," de la tarjeta con sus slot correspondiente."),e(f,{mdxType:"Canvas"},e(d,{name:"Footer",argTypes:s(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KCard:t},template:`
          <k-card>
            <k-skeleton type="card" />
            <template #footer>
              <k-button class="w-full">Footer Example</k-button>
            </template>
          </k-card>
        `}))))}n(k,"MDXContent");k.isMDXComponent=!0;const g=u.bind({});g.storyName="Default";g.parameters={storySource:{source:`args => ({
  components: {
    KCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <k-card v-bind="args" class="w-full max-w-sm">
      <k-skeleton type="card" />
    </k-card>\`
})`},...o({showPanel:!0})};const i=n(()=>({components:{KCard:t},template:`
          <k-card>
            <template #header>
              Header Example
            </template>
            <k-skeleton type="card" />
          </k-card>
        `}),"header");i.storyName="Header";i.argTypes=s(t,{},!0);i.parameters={storySource:{source:`() => {
  return {
    components: {
      KCard
    },
    template: \`
          <k-card>
            <template #header>
              Header Example
            </template>
            <k-skeleton type="card" />
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const y=n(()=>({components:{KCard:t},template:`
          <k-card>
            <k-skeleton type="card" />
            <template #footer>
              <k-button class="w-full">Footer Example</k-button>
            </template>
          </k-card>
        `}),"footer");y.storyName="Footer";y.argTypes=s(t,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KCard
    },
    template: \`
          <k-card>
            <k-skeleton type="card" />
            <template #footer>
              <k-button class="w-full">Footer Example</k-button>
            </template>
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const p={title:"Data Display/Card",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:s(t),includeStories:["defaultStory","header","footer"]},S={Default:"defaultStory",Header:"header",Footer:"footer"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>e(x,{mdxStoryNameToKey:S,mdxComponentAnnotations:p},e(k,null))};const z=["Template","defaultStory","header","footer"];export{u as Template,z as __namedExportsOrder,p as default,g as defaultStory,y as footer,i as header};
//# sourceMappingURL=k-card.story.16c173e4.js.map
