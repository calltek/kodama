var S=Object.defineProperty;var i=(a,o)=>S(a,"name",{value:o,configurable:!0});import"./jsx-runtime.ff681f56.js";import{aL as e,aM as h,aQ as m,aN as c,aP as T,aO as w}from"./Props.0c148406.js";import"./iframe.988cdce5.js";import{K as n}from"./k-select.06a4c261.js";import{r,a as p,H as x}from"./s-head.a9240482.js";import{r as l}from"./vue.esm-bundler.ad0aee8d.js";import"./string.3b2923bc.js";import"./es.map.constructor.04819154.js";import"./es.number.to-fixed.f48c0640.js";import"./utils.e3374581.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function u(){return u=Object.assign?Object.assign.bind():function(a){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])}return a},u.apply(this,arguments)}i(u,"_extends");const v=i(a=>({components:{KSelect:n},setup(){const o=l(),t=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"}]);return{args:a,model:o,options:t}},template:`
      <k-card><k-select v-model="model" v-bind="args" :options="options" /></k-card>
    `}),"Template"),z={Template:v},N="wrapper";function k({components:a,...o}){return e(N,u({},z,o,{components:a,mdxType:"MDXLayout"}),e(w,{title:"Data Entry/Select",component:n,argTypes:p(n),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(x,{image:"https://media2.giphy.com/media/SwImQhtiNA7io/giphy.gif?cid=ecf05e47z82yq5bzlbtacqrphv0r4tr1wtbmnhzeakchqa9a&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F433} KSelect"),e("h1",null,"KInput"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-select")," dispondr\xE1s de un selector de toda la vida pero vitaminado gracias al poder de (Vue Multiselect)","[https://vue-multiselect.js.org/]","."),e(c,{name:"Default",parameters:r({showPanel:!0}),args:{placeholder:"Selecciona una opci\xF3n"},mdxType:"Story"},v.bind({})),e(T,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Tama\xF1os")),e("p",null,"Puedes cambiar el tama\xF1o del selector con la propiedad ",e("inlineCode",{parentName:"p"},"size")),e(m,{mdxType:"Canvas"},e(c,{name:"Sizes",argTypes:p(n,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:n},setup(){const t=l(""),s=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"}]);return{model:t,options:s}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" size="xs" />
              <k-select v-model="model" :options="options" size="sm" />
              <k-select v-model="model" :options="options" size="md" />
              <k-select v-model="model" :options="options" size="lg" />
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"M\xFAltiple")),e("p",null,"Puedes cambiar el tama\xF1o del selector con la propiedad ",e("inlineCode",{parentName:"p"},"size")),e(m,{mdxType:"Canvas"},e(c,{name:"Multiple",argTypes:p(n,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:n},setup(){const t=l([]),s=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:t,options:s}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple />
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Libre")),e("p",null,"Puedes permitir que el usuario escriba sus propias etiquetas con la propiedad ",e("inlineCode",{parentName:"p"},"free")),e(m,{mdxType:"Canvas"},e(c,{name:"Free",argTypes:p(n,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:n},setup(){const t=l([]),s=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:t,options:s}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple free />
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Errores")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(m,{mdxType:"Canvas"},e(c,{name:"Errors",argTypes:p(n,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:n},setup(){const t=l([]),s=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:t,options:s}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" :errors="errors" />
            </div>
          </k-card>
        `}))))}i(k,"MDXContent");k.isMDXComponent=!0;const b=v.bind({});b.storyName="Default";b.args={placeholder:"Selecciona una opci\xF3n"};b.parameters={storySource:{source:`args => ({
  components: {
    KSelect
  },
  setup() {
    const model = ref();
    const options = ref([{
      value: 1,
      label: 'Opci\xF3n 1'
    }, {
      value: 2,
      label: 'Opci\xF3n 2'
    }, {
      value: 3,
      label: 'Opci\xF3n 3'
    }]);
    return {
      args,
      model,
      options
    };
  },
  template: \`
      <k-card><k-select v-model="model" v-bind="args" :options="options" /></k-card>
    \`
})`},...r({showPanel:!0})};const g=i(()=>({components:{KSelect:n},setup(){const a=l(""),o=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"}]);return{model:a,options:o}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" size="xs" />
              <k-select v-model="model" :options="options" size="sm" />
              <k-select v-model="model" :options="options" size="md" />
              <k-select v-model="model" :options="options" size="lg" />
            </div>
          </k-card>
        `}),"sizes");g.storyName="Sizes";g.argTypes=p(n,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KSelect
    },
    setup() {
      const model = ref('');
      const options = ref([{
        value: 1,
        label: 'Opci\xF3n 1'
      }, {
        value: 2,
        label: 'Opci\xF3n 2'
      }, {
        value: 3,
        label: 'Opci\xF3n 3'
      }]);
      return {
        model,
        options
      };
    },
    template: \`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" size="xs" />
              <k-select v-model="model" :options="options" size="sm" />
              <k-select v-model="model" :options="options" size="md" />
              <k-select v-model="model" :options="options" size="lg" />
            </div>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const O=i(()=>({components:{KSelect:n},setup(){const a=l([]),o=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:a,options:o}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple />
            </div>
          </k-card>
        `}),"multiple");O.storyName="Multiple";O.argTypes=p(n,{},!0);O.parameters={storySource:{source:`() => {
  return {
    components: {
      KSelect
    },
    setup() {
      const model = ref([]);
      const options = ref([{
        value: 1,
        label: 'Opci\xF3n 1'
      }, {
        value: 2,
        label: 'Opci\xF3n 2'
      }, {
        value: 3,
        label: 'Opci\xF3n 3'
      }, {
        value: 4,
        label: 'Opci\xF3n 4'
      }, {
        value: 5,
        label: 'Opci\xF3n 5'
      }, {
        value: 6,
        label: 'Opci\xF3n 6'
      }]);
      return {
        model,
        options
      };
    },
    template: \`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple />
            </div>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const y=i(()=>({components:{KSelect:n},setup(){const a=l([]),o=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:a,options:o}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple free />
            </div>
          </k-card>
        `}),"free");y.storyName="Free";y.argTypes=p(n,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KSelect
    },
    setup() {
      const model = ref([]);
      const options = ref([{
        value: 1,
        label: 'Opci\xF3n 1'
      }, {
        value: 2,
        label: 'Opci\xF3n 2'
      }, {
        value: 3,
        label: 'Opci\xF3n 3'
      }, {
        value: 4,
        label: 'Opci\xF3n 4'
      }, {
        value: 5,
        label: 'Opci\xF3n 5'
      }, {
        value: 6,
        label: 'Opci\xF3n 6'
      }]);
      return {
        model,
        options
      };
    },
    template: \`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple free />
            </div>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const f=i(()=>({components:{KSelect:n},setup(){const a=l([]),o=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:a,options:o}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" :errors="errors" />
            </div>
          </k-card>
        `}),"errors");f.storyName="Errors";f.argTypes=p(n,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KSelect
    },
    setup() {
      const model = ref([]);
      const options = ref([{
        value: 1,
        label: 'Opci\xF3n 1'
      }, {
        value: 2,
        label: 'Opci\xF3n 2'
      }, {
        value: 3,
        label: 'Opci\xF3n 3'
      }, {
        value: 4,
        label: 'Opci\xF3n 4'
      }, {
        value: 5,
        label: 'Opci\xF3n 5'
      }, {
        value: 6,
        label: 'Opci\xF3n 6'
      }]);
      return {
        model,
        options
      };
    },
    template: \`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" :errors="errors" />
            </div>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const d={title:"Data Entry/Select",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:n,argTypes:p(n),includeStories:["defaultStory","sizes","multiple","free","errors"]},P={Default:"defaultStory",Sizes:"sizes",Multiple:"multiple",Free:"free",Errors:"errors"};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:()=>e(h,{mdxStoryNameToKey:P,mdxComponentAnnotations:d},e(k,null))};const _=["Template","defaultStory","sizes","multiple","free","errors"];export{v as Template,_ as __namedExportsOrder,d as default,b as defaultStory,f as errors,y as free,O as multiple,g as sizes};
//# sourceMappingURL=k-select.story.ce620691.js.map
