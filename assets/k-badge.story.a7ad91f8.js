var x=Object.defineProperty;var s=(n,d)=>x(n,"name",{value:d,configurable:!0});import"./jsx-runtime.16ab2025.js";import{aL as e,aM as h,aQ as i,aN as g,aP as v,aO as S}from"./Props.30841ac8.js";import"./iframe.a35a8173.js";import{K as a}from"./k-badge.bf8b5d05.js";import{r,a as o,H as w}from"./s-head.d1492433.js";import"./string.7d939798.js";import"./es.map.constructor.30452445.js";import"./es.number.to-fixed.2dd6f236.js";import"./vue.esm-bundler.40c2ec29.js";import"./utils.afff62ba.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function b(){return b=Object.assign?Object.assign.bind():function(n){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(n[c]=l[c])}return n},b.apply(this,arguments)}s(b,"_extends");const m=s(n=>({components:{KBadge:a},setup(){return{args:n}},template:'<k-badge v-bind="args">Badge</k-badge>'}),"Template"),B={Template:m},T="wrapper";function u({components:n,...d}){return e(T,b({},B,d,{components:n,mdxType:"MDXLayout"}),e(S,{title:"Data Display/Badge",component:a,argTypes:o(a),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(w,{image:"https://media0.giphy.com/media/kBEtDVGrBI0gHER5eP/giphy.gif?cid=ecf05e47ohib96nnz2ri6frve32s584yz5cuz6gelv7asi98&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F39F} KBadge"),e("h1",null,"KButton"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-badge")," puedes formar el avatar de una persona de manera aleatoria. El avatar siempre ser\xE1 el mismo."),e(g,{name:"Default",parameters:r({showPanel:!0}),mdxType:"Story"},m.bind({})),e(v,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Sizes")),e("p",null,"Puedes definir el tama\xF1o del badge desde ",e("inlineCode",{parentName:"p"},"xs")," hasta ",e("inlineCode",{parentName:"p"},"xl"),"."),e(i,{mdxType:"Canvas"},e(g,{name:"Sizes",argTypes:o(a,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KBadge:a},template:`
          <div class="flex flex-row gap-4 items-center">
            <k-badge size="xs">Badge</k-badge>
            <k-badge size="sm">Badge</k-badge>
            <k-badge size="md">Badge</k-badge>
            <k-badge size="lg">Badge</k-badge>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Colors")),e("p",null,"Define el color del badge."),e(i,{mdxType:"Canvas"},e(g,{name:"Colors",argTypes:o(a,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KBadge:a},template:`
          <div class="flex flex-row gap-4 items-center">
            <k-badge color="white">White / Black</k-badge>
            <k-badge color="gray">Gray</k-badge>
            <k-badge color="primary">Primary</k-badge>
            <k-badge color="secondary">Secondary</k-badge>
            <k-badge color="success">Success</k-badge>
            <k-badge color="warning">Warning</k-badge>
            <k-badge color="danger">Danger</k-badge>
            <k-badge color="info">Info</k-badge>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Neon")),e("p",null,"Define el color de fondo del avatar en formato ",e("strong",{parentName:"p"},"hexadecimal")),e(i,{mdxType:"Canvas"},e(g,{name:"Neon",argTypes:o(a,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KBadge:a},template:`
          <div class="flex flex-row gap-4 items-center">
            <k-badge neon color="white">White / Black</k-badge>
            <k-badge neon color="gray">Gray</k-badge>
            <k-badge neon color="primary">Primary</k-badge>
            <k-badge neon color="secondary">Secondary</k-badge>
            <k-badge neon color="success">Success</k-badge>
            <k-badge neon color="warning">Warning</k-badge>
            <k-badge neon color="danger">Danger</k-badge>
            <k-badge neon color="info">Info</k-badge>
          </div>
        `}))))}s(u,"MDXContent");u.isMDXComponent=!0;const f=m.bind({});f.storyName="Default";f.parameters={storySource:{source:`args => ({
  components: {
    KBadge
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-badge v-bind="args">Badge</k-badge>'
})`},...r({showPanel:!0})};const k=s(()=>({components:{KBadge:a},template:`
          <div class="flex flex-row gap-4 items-center">
            <k-badge size="xs">Badge</k-badge>
            <k-badge size="sm">Badge</k-badge>
            <k-badge size="md">Badge</k-badge>
            <k-badge size="lg">Badge</k-badge>
          </div>
        `}),"sizes");k.storyName="Sizes";k.argTypes=o(a,{},!0);k.parameters={storySource:{source:`() => {
  return {
    components: {
      KBadge
    },
    template: \`
          <div class="flex flex-row gap-4 items-center">
            <k-badge size="xs">Badge</k-badge>
            <k-badge size="sm">Badge</k-badge>
            <k-badge size="md">Badge</k-badge>
            <k-badge size="lg">Badge</k-badge>
          </div>
        \`
  };
}`},...r({showPanel:!1})};const p=s(()=>({components:{KBadge:a},template:`
          <div class="flex flex-row gap-4 items-center">
            <k-badge color="white">White / Black</k-badge>
            <k-badge color="gray">Gray</k-badge>
            <k-badge color="primary">Primary</k-badge>
            <k-badge color="secondary">Secondary</k-badge>
            <k-badge color="success">Success</k-badge>
            <k-badge color="warning">Warning</k-badge>
            <k-badge color="danger">Danger</k-badge>
            <k-badge color="info">Info</k-badge>
          </div>
        `}),"colors");p.storyName="Colors";p.argTypes=o(a,{},!0);p.parameters={storySource:{source:`() => {
  return {
    components: {
      KBadge
    },
    template: \`
          <div class="flex flex-row gap-4 items-center">
            <k-badge color="white">White / Black</k-badge>
            <k-badge color="gray">Gray</k-badge>
            <k-badge color="primary">Primary</k-badge>
            <k-badge color="secondary">Secondary</k-badge>
            <k-badge color="success">Success</k-badge>
            <k-badge color="warning">Warning</k-badge>
            <k-badge color="danger">Danger</k-badge>
            <k-badge color="info">Info</k-badge>
          </div>
        \`
  };
}`},...r({showPanel:!1})};const y=s(()=>({components:{KBadge:a},template:`
          <div class="flex flex-row gap-4 items-center">
            <k-badge neon color="white">White / Black</k-badge>
            <k-badge neon color="gray">Gray</k-badge>
            <k-badge neon color="primary">Primary</k-badge>
            <k-badge neon color="secondary">Secondary</k-badge>
            <k-badge neon color="success">Success</k-badge>
            <k-badge neon color="warning">Warning</k-badge>
            <k-badge neon color="danger">Danger</k-badge>
            <k-badge neon color="info">Info</k-badge>
          </div>
        `}),"neon");y.storyName="Neon";y.argTypes=o(a,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KBadge
    },
    template: \`
          <div class="flex flex-row gap-4 items-center">
            <k-badge neon color="white">White / Black</k-badge>
            <k-badge neon color="gray">Gray</k-badge>
            <k-badge neon color="primary">Primary</k-badge>
            <k-badge neon color="secondary">Secondary</k-badge>
            <k-badge neon color="success">Success</k-badge>
            <k-badge neon color="warning">Warning</k-badge>
            <k-badge neon color="danger">Danger</k-badge>
            <k-badge neon color="info">Info</k-badge>
          </div>
        \`
  };
}`},...r({showPanel:!1})};const t={title:"Data Display/Badge",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:a,argTypes:o(a),includeStories:["defaultStory","sizes","colors","neon"]},z={Default:"defaultStory",Sizes:"sizes",Colors:"colors",Neon:"neon"};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(h,{mdxStoryNameToKey:z,mdxComponentAnnotations:t},e(u,null))};const E=["Template","defaultStory","sizes","colors","neon"];export{m as Template,E as __namedExportsOrder,p as colors,t as default,f as defaultStory,y as neon,k as sizes};
//# sourceMappingURL=k-badge.story.a7ad91f8.js.map
