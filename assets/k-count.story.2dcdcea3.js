var C=Object.defineProperty;var t=(r,c)=>C(r,"name",{value:c,configurable:!0});import"./jsx-runtime.aedc7a54.js";import{aL as e,aM as z,aN as s,aO as u,aP as w,aQ as h}from"./Props.d53d4c1b.js";import"./iframe.74a013c6.js";import{K as n}from"./k-count.955398d9.js";import{r as o,a,H as S}from"./s-head.19ea8db1.js";import"./string.3efe2e56.js";import"./es.map.constructor.6855a0be.js";import"./es.number.to-fixed.c796804d.js";import"./vue.esm-bundler.5c09a9bb.js";import"./_plugin-vue_export-helper.cdc0426e.js";function g(){return g=Object.assign?Object.assign.bind():function(r){for(var c=1;c<arguments.length;c++){var k=arguments[c];for(var d in k)Object.prototype.hasOwnProperty.call(k,d)&&(r[d]=k[d])}return r},g.apply(this,arguments)}t(g,"_extends");const i=t(r=>({components:{KCount:n},setup(){return{args:r}},template:'<k-count v-bind="args"><k-badge>Counter </k-badge></k-count>'}),"Template"),T={Template:i},N="wrapper";function y({components:r,...c}){return e(N,g({},T,c,{components:r,mdxType:"MDXLayout"}),e(h,{title:"Data Display/Counter",component:n,argTypes:a(n),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(S,{image:"https://media3.giphy.com/media/xUNd9DLukkavmhybAs/giphy.gif?cid=ecf05e47xzzzzsltihe9wazd1im6vmw688bmhg87fooqu7pg&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F9EE} KCount"),e("h1",null,"KCount"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-count")," puedes formar el avatar de una persona de manera aleatoria. El avatar siempre ser\xE1 el mismo."),e(u,{name:"Default",parameters:o({showPanel:!0}),mdxType:"Story"},i.bind({})),e(w,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Sizes")),e("p",null,"Puedes definir el tama\xF1o del badge desde ",e("inlineCode",{parentName:"p"},"xs")," hasta ",e("inlineCode",{parentName:"p"},"xl"),"."),e(s,{mdxType:"Canvas"},e(u,{name:"Sizes",argTypes:a(n,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KCount:n},template:`
          <div class="flex flex-row gap-8 items-center">
            <k-count size="xs" :value="199"><k-badge size="xs">Counter </k-badge></k-count>
            <k-count size="sm" :value="199"><k-badge size="sm">Counter </k-badge></k-count>
            <k-count size="md" :value="199"><k-badge size="md">Counter </k-badge></k-count>
            <k-count size="lg" :value="199"><k-badge size="lg">Counter </k-badge></k-count>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Circular")),e("p",null,"Puedes definir el dise\xF1o ",e("inlineCode",{parentName:"p"},"circle")," del contador para que se vea como un c\xEDrculo completo."),e(s,{mdxType:"Canvas"},e(u,{name:"Circular",argTypes:a(n,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KCount:n},template:`
          <div class="flex flex-row gap-8 items-center">
            <k-count circle size="xs" :value="199"><k-badge size="xs">Counter </k-badge></k-count>
            <k-count circle size="sm" :value="199"><k-badge size="sm">Counter </k-badge></k-count>
            <k-count circle size="md" :value="199"><k-badge size="md">Counter </k-badge></k-count>
            <k-count circle size="lg" :value="199"><k-badge size="lg">Counter </k-badge></k-count>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Colors")),e("p",null,"Define el color del badge."),e(s,{mdxType:"Canvas"},e(u,{name:"Colors",argTypes:a(n,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KCount:n},template:`
          <div class="flex flex-row gap-8 items-center w-full">
            <k-count color="white" :value="199"><k-badge>White / Black</k-badge></k-count>
            <k-count color="gray" :value="199"><k-badge>Gray</k-badge></k-count>
            <k-count color="primary" :value="199"><k-badge>Primary</k-badge></k-count>
            <k-count color="secondary" :value="199"><k-badge>Secondary</k-badge></k-count>
            <k-count color="success" :value="199"><k-badge>Success</k-badge></k-count>
            <k-count color="warning" :value="199"><k-badge>Warning</k-badge></k-count>
            <k-count color="danger" :value="199"><k-badge>Danger</k-badge></k-count>
            <k-count color="info" :value="199"><k-badge>Info</k-badge></k-count>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Neon")),e("p",null,"Define el color de fondo del avatar en formato ",e("strong",{parentName:"p"},"hexadecimal")),e(s,{mdxType:"Canvas"},e(u,{name:"Neon",argTypes:a(n,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KCount:n},template:`
           <div class="flex flex-row gap-8 items-center w-full">
            <k-count neon color="white" :value="199"><k-badge>White / Black</k-badge></k-count>
            <k-count neon color="gray" :value="199"><k-badge>Gray</k-badge></k-count>
            <k-count neon color="primary" :value="199"><k-badge>Primary</k-badge></k-count>
            <k-count neon color="secondary" :value="199"><k-badge>Secondary</k-badge></k-count>
            <k-count neon color="success" :value="199"><k-badge>Success</k-badge></k-count>
            <k-count neon color="warning" :value="199"><k-badge>Warning</k-badge></k-count>
            <k-count neon color="danger" :value="199"><k-badge>Danger</k-badge></k-count>
            <k-count neon color="info" :value="199"><k-badge>Info</k-badge></k-count>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Offset")),e("p",null,"Puedes definir las propiedades ",e("inlineCode",{parentName:"p"},"offset-x")," y ",e("inlineCode",{parentName:"p"},"offset-y")," para mover el contador."),e(s,{mdxType:"Canvas"},e(u,{name:"Offset",argTypes:a(n,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KCount:n},template:`
          <div class="flex flex-row gap-8 items-center">
            <k-count offset-x="-80"><k-badge>OffsetX</k-badge></k-count>
            <k-count offset-y="26"><k-badge>OffsetY</k-badge></k-count>
          </div>
        `}))))}t(y,"MDXContent");y.isMDXComponent=!0;const x=i.bind({});x.storyName="Default";x.parameters={storySource:{source:`args => ({
  components: {
    KCount
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-count v-bind="args"><k-badge>Counter </k-badge></k-count>'
})`},...o({showPanel:!0})};const m=t(()=>({components:{KCount:n},template:`
          <div class="flex flex-row gap-8 items-center">
            <k-count size="xs" :value="199"><k-badge size="xs">Counter </k-badge></k-count>
            <k-count size="sm" :value="199"><k-badge size="sm">Counter </k-badge></k-count>
            <k-count size="md" :value="199"><k-badge size="md">Counter </k-badge></k-count>
            <k-count size="lg" :value="199"><k-badge size="lg">Counter </k-badge></k-count>
          </div>
        `}),"sizes");m.storyName="Sizes";m.argTypes=a(n,{},!0);m.parameters={storySource:{source:`() => {
  return {
    components: {
      KCount
    },
    template: \`
          <div class="flex flex-row gap-8 items-center">
            <k-count size="xs" :value="199"><k-badge size="xs">Counter </k-badge></k-count>
            <k-count size="sm" :value="199"><k-badge size="sm">Counter </k-badge></k-count>
            <k-count size="md" :value="199"><k-badge size="md">Counter </k-badge></k-count>
            <k-count size="lg" :value="199"><k-badge size="lg">Counter </k-badge></k-count>
          </div>
        \`
  };
}`},...o({showPanel:!1})};const b=t(()=>({components:{KCount:n},template:`
          <div class="flex flex-row gap-8 items-center">
            <k-count circle size="xs" :value="199"><k-badge size="xs">Counter </k-badge></k-count>
            <k-count circle size="sm" :value="199"><k-badge size="sm">Counter </k-badge></k-count>
            <k-count circle size="md" :value="199"><k-badge size="md">Counter </k-badge></k-count>
            <k-count circle size="lg" :value="199"><k-badge size="lg">Counter </k-badge></k-count>
          </div>
        `}),"circular");b.storyName="Circular";b.argTypes=a(n,{},!0);b.parameters={storySource:{source:`() => {
  return {
    components: {
      KCount
    },
    template: \`
          <div class="flex flex-row gap-8 items-center">
            <k-count circle size="xs" :value="199"><k-badge size="xs">Counter </k-badge></k-count>
            <k-count circle size="sm" :value="199"><k-badge size="sm">Counter </k-badge></k-count>
            <k-count circle size="md" :value="199"><k-badge size="md">Counter </k-badge></k-count>
            <k-count circle size="lg" :value="199"><k-badge size="lg">Counter </k-badge></k-count>
          </div>
        \`
  };
}`},...o({showPanel:!1})};const p=t(()=>({components:{KCount:n},template:`
          <div class="flex flex-row gap-8 items-center w-full">
            <k-count color="white" :value="199"><k-badge>White / Black</k-badge></k-count>
            <k-count color="gray" :value="199"><k-badge>Gray</k-badge></k-count>
            <k-count color="primary" :value="199"><k-badge>Primary</k-badge></k-count>
            <k-count color="secondary" :value="199"><k-badge>Secondary</k-badge></k-count>
            <k-count color="success" :value="199"><k-badge>Success</k-badge></k-count>
            <k-count color="warning" :value="199"><k-badge>Warning</k-badge></k-count>
            <k-count color="danger" :value="199"><k-badge>Danger</k-badge></k-count>
            <k-count color="info" :value="199"><k-badge>Info</k-badge></k-count>
          </div>
        `}),"colors");p.storyName="Colors";p.argTypes=a(n,{},!0);p.parameters={storySource:{source:`() => {
  return {
    components: {
      KCount
    },
    template: \`
          <div class="flex flex-row gap-8 items-center w-full">
            <k-count color="white" :value="199"><k-badge>White / Black</k-badge></k-count>
            <k-count color="gray" :value="199"><k-badge>Gray</k-badge></k-count>
            <k-count color="primary" :value="199"><k-badge>Primary</k-badge></k-count>
            <k-count color="secondary" :value="199"><k-badge>Secondary</k-badge></k-count>
            <k-count color="success" :value="199"><k-badge>Success</k-badge></k-count>
            <k-count color="warning" :value="199"><k-badge>Warning</k-badge></k-count>
            <k-count color="danger" :value="199"><k-badge>Danger</k-badge></k-count>
            <k-count color="info" :value="199"><k-badge>Info</k-badge></k-count>
          </div>
        \`
  };
}`},...o({showPanel:!1})};const f=t(()=>({components:{KCount:n},template:`
           <div class="flex flex-row gap-8 items-center w-full">
            <k-count neon color="white" :value="199"><k-badge>White / Black</k-badge></k-count>
            <k-count neon color="gray" :value="199"><k-badge>Gray</k-badge></k-count>
            <k-count neon color="primary" :value="199"><k-badge>Primary</k-badge></k-count>
            <k-count neon color="secondary" :value="199"><k-badge>Secondary</k-badge></k-count>
            <k-count neon color="success" :value="199"><k-badge>Success</k-badge></k-count>
            <k-count neon color="warning" :value="199"><k-badge>Warning</k-badge></k-count>
            <k-count neon color="danger" :value="199"><k-badge>Danger</k-badge></k-count>
            <k-count neon color="info" :value="199"><k-badge>Info</k-badge></k-count>
          </div>
        `}),"neon");f.storyName="Neon";f.argTypes=a(n,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KCount
    },
    template: \`
           <div class="flex flex-row gap-8 items-center w-full">
            <k-count neon color="white" :value="199"><k-badge>White / Black</k-badge></k-count>
            <k-count neon color="gray" :value="199"><k-badge>Gray</k-badge></k-count>
            <k-count neon color="primary" :value="199"><k-badge>Primary</k-badge></k-count>
            <k-count neon color="secondary" :value="199"><k-badge>Secondary</k-badge></k-count>
            <k-count neon color="success" :value="199"><k-badge>Success</k-badge></k-count>
            <k-count neon color="warning" :value="199"><k-badge>Warning</k-badge></k-count>
            <k-count neon color="danger" :value="199"><k-badge>Danger</k-badge></k-count>
            <k-count neon color="info" :value="199"><k-badge>Info</k-badge></k-count>
          </div>
        \`
  };
}`},...o({showPanel:!1})};const v=t(()=>({components:{KCount:n},template:`
          <div class="flex flex-row gap-8 items-center">
            <k-count offset-x="-80"><k-badge>OffsetX</k-badge></k-count>
            <k-count offset-y="26"><k-badge>OffsetY</k-badge></k-count>
          </div>
        `}),"offset");v.storyName="Offset";v.argTypes=a(n,{},!0);v.parameters={storySource:{source:`() => {
  return {
    components: {
      KCount
    },
    template: \`
          <div class="flex flex-row gap-8 items-center">
            <k-count offset-x="-80"><k-badge>OffsetX</k-badge></k-count>
            <k-count offset-y="26"><k-badge>OffsetY</k-badge></k-count>
          </div>
        \`
  };
}`},...o({showPanel:!1})};const l={title:"Data Display/Counter",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:n,argTypes:a(n),includeStories:["defaultStory","sizes","circular","colors","neon","offset"]},P={Default:"defaultStory",Sizes:"sizes",Circular:"circular",Colors:"colors",Neon:"neon",Offset:"offset"};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:()=>e(z,{mdxStoryNameToKey:P,mdxComponentAnnotations:l},e(y,null))};const j=["Template","defaultStory","sizes","circular","colors","neon","offset"];export{i as Template,j as __namedExportsOrder,b as circular,p as colors,l as default,x as defaultStory,f as neon,v as offset,m as sizes};
//# sourceMappingURL=k-count.story.2dcdcea3.js.map
