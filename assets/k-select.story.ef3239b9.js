var x=Object.defineProperty;var p=(t,o)=>x(t,"name",{value:o,configurable:!0});import"./jsx-runtime.15d6fdfa.js";import{aL as e,aM as z,aQ as m,aN as c,aP as E,aO as M}from"./Props.902802d0.js";import"./iframe.67f2f292.js";import{K as n}from"./k-select.149dd0ab.js";import{r,a as i,H as N}from"./s-head.56d5b0a5.js";import{r as l}from"./vue.esm-bundler.3fc53486.js";import"./string.0a840ebe.js";import"./es.map.constructor.38138083.js";import"./es.number.to-fixed.aab29b26.js";import"./utils.e3374581.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function v(){return v=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},v.apply(this,arguments)}p(v,"_extends");const g=p(t=>({components:{KSelect:n},setup(){const o=l(1),a=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"}]);return{args:t,model:o,options:a}},template:`
      <k-card><k-select v-model="model" v-bind="args" :options="options" /></k-card>
    `}),"Template"),P={Template:g},C="wrapper";function w({components:t,...o}){return e(C,v({},P,o,{components:t,mdxType:"MDXLayout"}),e(M,{title:"Data Entry/Select",component:n,argTypes:i(n),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(N,{image:"https://media2.giphy.com/media/SwImQhtiNA7io/giphy.gif?cid=ecf05e47z82yq5bzlbtacqrphv0r4tr1wtbmnhzeakchqa9a&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F433} KSelect"),e("h1",null,"KInput"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-select")," dispondr\xE1s de un selector de toda la vida pero vitaminado gracias al poder de (Vue Multiselect)","[https://vue-multiselect.js.org/]","."),e(c,{name:"Default",parameters:r({showPanel:!0}),args:{placeholder:"Selecciona una opci\xF3n"},mdxType:"Story"},g.bind({})),e(E,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Tama\xF1os")),e("p",null,"Puedes cambiar el tama\xF1o del selector con la propiedad ",e("inlineCode",{parentName:"p"},"size")),e(m,{mdxType:"Canvas"},e(c,{name:"Sizes",argTypes:i(n,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:n},setup(){const a=l(""),s=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"}]);return{model:a,options:s}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" size="xs" />
              <k-select v-model="model" :options="options" size="sm" />
              <k-select v-model="model" :options="options" size="md" />
              <k-select v-model="model" :options="options" size="lg" />
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"M\xFAltiple")),e("p",null,"Puedes cambiar el tama\xF1o del selector con la propiedad ",e("inlineCode",{parentName:"p"},"size")),e(m,{mdxType:"Canvas"},e(c,{name:"Multiple",argTypes:i(n,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:n},setup(){const a=l([]),s=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:a,options:s}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple />
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Libre")),e("p",null,"Puedes permitir que el usuario escriba sus propias etiquetas con la propiedad ",e("inlineCode",{parentName:"p"},"free")),e(m,{mdxType:"Canvas"},e(c,{name:"Free",argTypes:i(n,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:n},setup(){const a=l([]),s=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:a,options:s}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple free />
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Errores")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(m,{mdxType:"Canvas"},e(c,{name:"Errors",argTypes:i(n,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:n},setup(){const a=l([]),s=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]),d=l([{$message:"Error 1"}]);return{model:a,options:s,errors:d}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" :errors="errors" label="Selector" />
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Tipos")),e(m,{mdxType:"Canvas"},e(c,{name:"Tipos",argTypes:i(n,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:n},setup(){const a=l(2),s=l([3]),d=l("test"),T=l(["test"]),h=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model1:a,model2:s,model3:d,model4:T,options:h}},template:`
          <div class="flex flex-col gap-8">
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model1}}
              <k-select v-model="model1" :options="options" label="Simple"  />
            </div>
          </k-card>
          <k-card> 
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model2}}
              <k-select v-model="model2" :options="options" label="Multiple" multiple />
            </div>
          </k-card>
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model3}}
              <k-select v-model="model3" :options="options" label="Simple FREE"  free />
            </div>
          </k-card>
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model4}}
              <k-select v-model="model4" :options="options" label="Multiple FREE" multiple free />
            </div>
          </k-card>
          </div>
        `}))))}p(w,"MDXContent");w.isMDXComponent=!0;const b=g.bind({});b.storyName="Default";b.args={placeholder:"Selecciona una opci\xF3n"};b.parameters={storySource:{source:`args => ({
  components: {
    KSelect
  },
  setup() {
    const model = ref(1);
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
})`},...r({showPanel:!0})};const O=p(()=>({components:{KSelect:n},setup(){const t=l(""),o=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"}]);return{model:t,options:o}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" size="xs" />
              <k-select v-model="model" :options="options" size="sm" />
              <k-select v-model="model" :options="options" size="md" />
              <k-select v-model="model" :options="options" size="lg" />
            </div>
          </k-card>
        `}),"sizes");O.storyName="Sizes";O.argTypes=i(n,{},!0);O.parameters={storySource:{source:`() => {
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
}`},...r({showPanel:!1})};const k=p(()=>({components:{KSelect:n},setup(){const t=l([]),o=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:t,options:o}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple />
            </div>
          </k-card>
        `}),"multiple");k.storyName="Multiple";k.argTypes=i(n,{},!0);k.parameters={storySource:{source:`() => {
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
}`},...r({showPanel:!1})};const f=p(()=>({components:{KSelect:n},setup(){const t=l([]),o=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model:t,options:o}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" multiple free />
            </div>
          </k-card>
        `}),"free");f.storyName="Free";f.argTypes=i(n,{},!0);f.parameters={storySource:{source:`() => {
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
}`},...r({showPanel:!1})};const y=p(()=>({components:{KSelect:n},setup(){const t=l([]),o=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]),a=l([{$message:"Error 1"}]);return{model:t,options:o,errors:a}},template:`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" :errors="errors" label="Selector" />
            </div>
          </k-card>
        `}),"errors");y.storyName="Errors";y.argTypes=i(n,{},!0);y.parameters={storySource:{source:`() => {
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
      const errors = ref([{
        $message: 'Error 1'
      }]);
      return {
        model,
        options,
        errors
      };
    },
    template: \`
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              <k-select v-model="model" :options="options" :errors="errors" label="Selector" />
            </div>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const S=p(()=>({components:{KSelect:n},setup(){const t=l(2),o=l([3]),a=l("test"),s=l(["test"]),d=l([{value:1,label:"Opci\xF3n 1"},{value:2,label:"Opci\xF3n 2"},{value:3,label:"Opci\xF3n 3"},{value:4,label:"Opci\xF3n 4"},{value:5,label:"Opci\xF3n 5"},{value:6,label:"Opci\xF3n 6"}]);return{model1:t,model2:o,model3:a,model4:s,options:d}},template:`
          <div class="flex flex-col gap-8">
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model1}}
              <k-select v-model="model1" :options="options" label="Simple"  />
            </div>
          </k-card>
          <k-card> 
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model2}}
              <k-select v-model="model2" :options="options" label="Multiple" multiple />
            </div>
          </k-card>
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model3}}
              <k-select v-model="model3" :options="options" label="Simple FREE"  free />
            </div>
          </k-card>
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model4}}
              <k-select v-model="model4" :options="options" label="Multiple FREE" multiple free />
            </div>
          </k-card>
          </div>
        `}),"tipos");S.storyName="Tipos";S.argTypes=i(n,{},!0);S.parameters={storySource:{source:`() => {
  return {
    components: {
      KSelect
    },
    setup() {
      const model1 = ref(2);
      const model2 = ref([3]);
      const model3 = ref("test");
      const model4 = ref(["test"]);
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
        model1,
        model2,
        model3,
        model4,
        options
      };
    },
    template: \`
          <div class="flex flex-col gap-8">
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model1}}
              <k-select v-model="model1" :options="options" label="Simple"  />
            </div>
          </k-card>
          <k-card> 
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model2}}
              <k-select v-model="model2" :options="options" label="Multiple" multiple />
            </div>
          </k-card>
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model3}}
              <k-select v-model="model3" :options="options" label="Simple FREE"  free />
            </div>
          </k-card>
          <k-card>
            <div class="grid grid-cols-1 gap-6 w-96">
              {{model4}}
              <k-select v-model="model4" :options="options" label="Multiple FREE" multiple free />
            </div>
          </k-card>
          </div>
        \`
  };
}`},...r({showPanel:!1})};const u={title:"Data Entry/Select",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:n,argTypes:i(n),includeStories:["defaultStory","sizes","multiple","free","errors","tipos"]},D={Default:"defaultStory",Sizes:"sizes",Multiple:"multiple",Free:"free",Errors:"errors",Tipos:"tipos"};u.parameters=u.parameters||{};u.parameters.docs={...u.parameters.docs||{},page:()=>e(z,{mdxStoryNameToKey:D,mdxComponentAnnotations:u},e(w,null))};const Q=["Template","defaultStory","sizes","multiple","free","errors","tipos"];export{g as Template,Q as __namedExportsOrder,u as default,b as defaultStory,y as errors,f as free,k as multiple,O as sizes,S as tipos};
//# sourceMappingURL=k-select.story.ef3239b9.js.map
