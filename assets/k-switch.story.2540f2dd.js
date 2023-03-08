var f=Object.defineProperty;var i=(c,a)=>f(c,"name",{value:a,configurable:!0});import"./jsx-runtime.aedc7a54.js";import{aL as e,aM as S,aN as d,aO as n,aP as b,aQ as x}from"./Props.d53d4c1b.js";import"./iframe.74a013c6.js";import{K as s}from"./k-switch.a2052cba.js";import{r as t,a as r,H as T}from"./s-head.19ea8db1.js";import"./vue.esm-bundler.5c09a9bb.js";import"./string.3efe2e56.js";import"./es.map.constructor.6855a0be.js";import"./es.number.to-fixed.c796804d.js";import"./utils.afff62ba.js";import"./_plugin-vue_export-helper.cdc0426e.js";function k(){return k=Object.assign?Object.assign.bind():function(c){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&(c[h]=l[h])}return c},k.apply(this,arguments)}i(k,"_extends");const m=i(c=>({components:{KSwitch:s},setup(){return{args:c}},template:'<k-card><k-switch v-bind="args">\u{1F984} Label</k-switch></k-card>'}),"Template"),z={Template:m},D="wrapper";function u({components:c,...a}){return e(D,k({},z,a,{components:c,mdxType:"MDXLayout"}),e(x,{title:"Data Entry/Switch",component:s,argTypes:r(s),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(T,{image:"https://media0.giphy.com/media/l2SpP2YH6IRel5AUU/giphy.gif?cid=ecf05e475cild8c4mfergt379iey7vsu5fh04w7fb69h5azk&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2328 KSwitch"),e("h1",null,"KSwitch"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-switch")," puedes activar o desactivar un valor. \xDAtil para booleanos."),e(n,{name:"Default",parameters:t({showPanel:!0}),mdxType:"Story"},m.bind({})),e(b,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Deshabilitado")),e("p",null,"Deshabilita el control del switch con ",e("inlineCode",{parentName:"p"},"disabled")),e(d,{mdxType:"Canvas"},e(n,{name:"Disabled",argTypes:r(s,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KSwitch:s},template:`
          <k-card>
            <k-switch disabled>Deshabilitado</k-switch>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Color")),e("p",null,"Existen diferentes estilos de colores para los switches."),e(d,{mdxType:"Canvas"},e(n,{name:"Color",argTypes:r(s,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KSwitch:s},template:`
          <k-card class="grid grid-cols-2 gap-4">
            <k-switch class="mr-2" color="white" checked>White / Black</k-switch>
            <k-switch class="mr-2" color="gray" checked>Gray</k-switch>
            <k-switch class="mr-2" color="primary" checked>Primary</k-switch>
            <k-switch class="mr-2" color="secondary" checked>Secondary</k-switch>
            <k-switch class="mr-2" color="success" checked>Success</k-switch>
            <k-switch class="mr-2" color="warning" checked>Warning</k-switch>
            <k-switch class="mr-2" color="danger" checked>Danger</k-switch>
            <k-switch color="info" checked>Info</k-switch>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Tama\xF1os")),e("p",null,"Modifica el tama\xF1o del componente con la propiedad ",e("inlineCode",{parentName:"p"},"size")),e(d,{mdxType:"Canvas"},e(n,{name:"Size",argTypes:r(s,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KSwitch:s},template:`
          <k-card class="grid grid-cols-1 gap-4">
            <k-switch class="mr-2" size="xs" checked>XS</k-switch>
            <k-switch class="mr-2" size="sm" checked>SM</k-switch>
            <k-switch class="mr-2" size="md" checked>MD</k-switch>
            <k-switch class="mr-2" size="lg" checked>LG</k-switch>
            <k-switch size="xl" checked>XL</k-switch>
          </k-card>
        `}))))}i(u,"MDXContent");u.isMDXComponent=!0;const g=m.bind({});g.storyName="Default";g.parameters={storySource:{source:`args => ({
  components: {
    KSwitch
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-switch v-bind="args">\u{1F984} Label</k-switch></k-card>'
})`},...t({showPanel:!0})};const p=i(()=>({components:{KSwitch:s},template:`
          <k-card>
            <k-switch disabled>Deshabilitado</k-switch>
          </k-card>
        `}),"disabled");p.storyName="Disabled";p.argTypes=r(s,{},!0);p.parameters={storySource:{source:`() => {
  return {
    components: {
      KSwitch
    },
    template: \`
          <k-card>
            <k-switch disabled>Deshabilitado</k-switch>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const w=i(()=>({components:{KSwitch:s},template:`
          <k-card class="grid grid-cols-2 gap-4">
            <k-switch class="mr-2" color="white" checked>White / Black</k-switch>
            <k-switch class="mr-2" color="gray" checked>Gray</k-switch>
            <k-switch class="mr-2" color="primary" checked>Primary</k-switch>
            <k-switch class="mr-2" color="secondary" checked>Secondary</k-switch>
            <k-switch class="mr-2" color="success" checked>Success</k-switch>
            <k-switch class="mr-2" color="warning" checked>Warning</k-switch>
            <k-switch class="mr-2" color="danger" checked>Danger</k-switch>
            <k-switch color="info" checked>Info</k-switch>
          </k-card>
        `}),"color");w.storyName="Color";w.argTypes=r(s,{},!0);w.parameters={storySource:{source:`() => {
  return {
    components: {
      KSwitch
    },
    template: \`
          <k-card class="grid grid-cols-2 gap-4">
            <k-switch class="mr-2" color="white" checked>White / Black</k-switch>
            <k-switch class="mr-2" color="gray" checked>Gray</k-switch>
            <k-switch class="mr-2" color="primary" checked>Primary</k-switch>
            <k-switch class="mr-2" color="secondary" checked>Secondary</k-switch>
            <k-switch class="mr-2" color="success" checked>Success</k-switch>
            <k-switch class="mr-2" color="warning" checked>Warning</k-switch>
            <k-switch class="mr-2" color="danger" checked>Danger</k-switch>
            <k-switch color="info" checked>Info</k-switch>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const y=i(()=>({components:{KSwitch:s},template:`
          <k-card class="grid grid-cols-1 gap-4">
            <k-switch class="mr-2" size="xs" checked>XS</k-switch>
            <k-switch class="mr-2" size="sm" checked>SM</k-switch>
            <k-switch class="mr-2" size="md" checked>MD</k-switch>
            <k-switch class="mr-2" size="lg" checked>LG</k-switch>
            <k-switch size="xl" checked>XL</k-switch>
          </k-card>
        `}),"size");y.storyName="Size";y.argTypes=r(s,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KSwitch
    },
    template: \`
          <k-card class="grid grid-cols-1 gap-4">
            <k-switch class="mr-2" size="xs" checked>XS</k-switch>
            <k-switch class="mr-2" size="sm" checked>SM</k-switch>
            <k-switch class="mr-2" size="md" checked>MD</k-switch>
            <k-switch class="mr-2" size="lg" checked>LG</k-switch>
            <k-switch size="xl" checked>XL</k-switch>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const o={title:"Data Entry/Switch",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:s,argTypes:r(s),includeStories:["defaultStory","disabled","color","size"]},v={Default:"defaultStory",Disabled:"disabled",Color:"color",Size:"size"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(S,{mdxStoryNameToKey:v,mdxComponentAnnotations:o},e(u,null))};const E=["Template","defaultStory","disabled","color","size"];export{m as Template,E as __namedExportsOrder,w as color,o as default,g as defaultStory,p as disabled,y as size};
//# sourceMappingURL=k-switch.story.2540f2dd.js.map
