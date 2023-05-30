var x=Object.defineProperty;var r=(o,c)=>x(o,"name",{value:c,configurable:!0});import"./jsx-runtime.9d0e66e5.js";import{aL as e,aM as b,aQ as y,aN as i,aP as g,aO as f}from"./Props.729bd907.js";import"./iframe.932a114c.js";import{r as v}from"./vue.esm-bundler.ad0aee8d.js";import{K as a}from"./k-checkbox.f02c0949.js";import{r as t,a as s,H as S}from"./s-head.ddd2cbef.js";import"./string.34cc6083.js";import"./es.map.constructor.36a8a534.js";import"./es.number.to-fixed.318f8870.js";import"./utils.e3374581.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function u(){return u=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var n=arguments[c];for(var k in n)Object.prototype.hasOwnProperty.call(n,k)&&(o[k]=n[k])}return o},u.apply(this,arguments)}r(u,"_extends");const d=r(o=>({components:{KCheckbox:a},setup(){return{args:o}},template:'<k-card><k-checkbox v-bind="args">Checkbox Label</k-checkbox> </k-card>'}),"Template"),C={Template:d},D="wrapper";function p({components:o,...c}){return e(D,u({},C,c,{components:o,mdxType:"MDXLayout"}),e(f,{title:"Data Entry/Checkbox",component:a,argTypes:s(a),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(S,{image:"https://media0.giphy.com/media/hDSy8w6rGHeTe/giphy.gif?cid=ecf05e47d1yojdu59ttft3ykom3decoar5aubq8zin0w9sov&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F6CE} KCheckbox"),e("h1",null,"KCheckbox"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-checkbox")," puedes marcar o desmarcar una opci\xF3n. Util para booleanos."),e(i,{name:"Default",parameters:t({showPanel:!0}),mdxType:"Story"},d.bind({})),e(g,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Color")),e("p",null,"Existen diferentes estilos de colores para los botones. Muchos de ellos se usan para definir una accion en el sistema."),e(y,{mdxType:"Canvas"},e(i,{name:"Color",argTypes:s(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KCheckbox:a},setup(){return{value:v("White/Black")}},template:`
          <div class="flex flex-col gap-4">
            <k-card class="grid grid-cols-2 gap-4">
              <k-checkbox v-model="value" color="white" value="White/Black">White / Black</k-checkbox>
              <k-checkbox v-model="value" color="gray" value="Gray">Gray</k-checkbox>
              <k-checkbox v-model="value" color="primary" value="Primary">Primary</k-checkbox>
              <k-checkbox v-model="value" color="secondary" value="Secondary">Secondary</k-checkbox>
              <k-checkbox v-model="value" color="success" value="Success">Success</k-checkbox>
              <k-checkbox v-model="value" color="warning" value="Warning">Warning</k-checkbox>
              <k-checkbox v-model="value" color="danger" value="Danger">Danger</k-checkbox>
              <k-checkbox v-model="value" color="info" value="Info">Info</k-checkbox>
            </k-card>
            <k-card>
              <b>Value:</b> {{ value }}
            </k-card>
          </div>
        `}))))}r(p,"MDXContent");p.isMDXComponent=!0;const h=d.bind({});h.storyName="Default";h.parameters={storySource:{source:`args => ({
  components: {
    KCheckbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-checkbox v-bind="args">Checkbox Label</k-checkbox> </k-card>'
})`},...t({showPanel:!0})};const m=r(()=>({components:{KCheckbox:a},setup(){return{value:v("White/Black")}},template:`
          <div class="flex flex-col gap-4">
            <k-card class="grid grid-cols-2 gap-4">
              <k-checkbox v-model="value" color="white" value="White/Black">White / Black</k-checkbox>
              <k-checkbox v-model="value" color="gray" value="Gray">Gray</k-checkbox>
              <k-checkbox v-model="value" color="primary" value="Primary">Primary</k-checkbox>
              <k-checkbox v-model="value" color="secondary" value="Secondary">Secondary</k-checkbox>
              <k-checkbox v-model="value" color="success" value="Success">Success</k-checkbox>
              <k-checkbox v-model="value" color="warning" value="Warning">Warning</k-checkbox>
              <k-checkbox v-model="value" color="danger" value="Danger">Danger</k-checkbox>
              <k-checkbox v-model="value" color="info" value="Info">Info</k-checkbox>
            </k-card>
            <k-card>
              <b>Value:</b> {{ value }}
            </k-card>
          </div>
        `}),"color");m.storyName="Color";m.argTypes=s(a,{},!0);m.parameters={storySource:{source:`() => {
  return {
    components: {
      KCheckbox
    },
    setup() {
      const value = ref('White/Black');
      return {
        value
      };
    },
    template: \`
          <div class="flex flex-col gap-4">
            <k-card class="grid grid-cols-2 gap-4">
              <k-checkbox v-model="value" color="white" value="White/Black">White / Black</k-checkbox>
              <k-checkbox v-model="value" color="gray" value="Gray">Gray</k-checkbox>
              <k-checkbox v-model="value" color="primary" value="Primary">Primary</k-checkbox>
              <k-checkbox v-model="value" color="secondary" value="Secondary">Secondary</k-checkbox>
              <k-checkbox v-model="value" color="success" value="Success">Success</k-checkbox>
              <k-checkbox v-model="value" color="warning" value="Warning">Warning</k-checkbox>
              <k-checkbox v-model="value" color="danger" value="Danger">Danger</k-checkbox>
              <k-checkbox v-model="value" color="info" value="Info">Info</k-checkbox>
            </k-card>
            <k-card>
              <b>Value:</b> {{ value }}
            </k-card>
          </div>
        \`
  };
}`},...t({showPanel:!1})};const l={title:"Data Entry/Checkbox",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:a,argTypes:s(a),includeStories:["defaultStory","color"]},T={Default:"defaultStory",Color:"color"};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:()=>e(b,{mdxStoryNameToKey:T,mdxComponentAnnotations:l},e(p,null))};const A=["Template","defaultStory","color"];export{d as Template,A as __namedExportsOrder,m as color,l as default,h as defaultStory};
//# sourceMappingURL=k-checkbox.story.a408fd1d.js.map
