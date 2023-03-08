var v=Object.defineProperty;var a=(r,l)=>v(r,"name",{value:l,configurable:!0});import"./jsx-runtime.4de53506.js";import{aL as e,aM as z,aN as i,aO as p,aP as h,aQ as D}from"./Props.3d2e646d.js";import"./iframe.ad698d62.js";import{K as t}from"./k-input.6d2af098.js";import{r as n,a as s,H as M}from"./s-head.92084ec3.js";import{r as L}from"./vue.esm-bundler.7a829ca1.js";import"./string.ca0947f5.js";import"./es.map.constructor.5de2711d.js";import"./es.number.to-fixed.53ef4e64.js";import"./utils.afff62ba.js";import"./_plugin-vue_export-helper.cdc0426e.js";function m(){return m=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},m.apply(this,arguments)}a(m,"_extends");const d=a(r=>({components:{KInputText:t},setup(){return{args:r}},template:'<k-card><k-input v-bind="args">\u{1F984} Label</k-input></k-card>'}),"Template"),w={Template:d},N="wrapper";function S({components:r,...l}){return e(N,m({},w,l,{components:r,mdxType:"MDXLayout"}),e(D,{title:"Data Entry/Input",component:t,argTypes:s(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(M,{image:"https://media2.giphy.com/media/SwImQhtiNA7io/giphy.gif?cid=ecf05e47z82yq5bzlbtacqrphv0r4tr1wtbmnhzeakchqa9a&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2328 KInput"),e("h1",null,"KInput"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-input")," puedes renderizar un input text para solicitar contenido."),e(p,{name:"Default",parameters:n({showPanel:!0}),mdxType:"Story"},d.bind({})),e(h,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Types")),e("p",null,"Se puede cambiar el tipo de input a ",e("inlineCode",{parentName:"p"},"text"),", ",e("inlineCode",{parentName:"p"},"password")," y ",e("inlineCode",{parentName:"p"},"number"),"."),e(i,{mdxType:"Canvas"},e(p,{name:"Types",argTypes:s(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},template:`
          <k-card class="flex flex-column gap-4">
            <k-input type="text" class="mr-4">Texto</k-input>
            <k-input type="password" class="mr-4">Contrase\xF1a</k-input>
            <k-input type="number">Numero</k-input>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Sizes")),e("p",null,"Puedes establecer distintos tama\xF1os que van desde ",e("inlineCode",{parentName:"p"},"xs")," hasta ",e("inlineCode",{parentName:"p"},"lg"),"."),e(i,{mdxType:"Canvas"},e(p,{name:"Sizes",argTypes:s(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},setup(){return{data:L(0)}},template:`
          <k-card class="flex flex-row gap-8">
            <div class="flex flex-col gap-12">
              <k-input size="xs" class="mr-4">Label XS</k-input>
              <k-input size="sm" class="mr-4">Label SM</k-input>
              <k-input size="md" class="mr-4">Label MD</k-input>
              <k-input size="lg">Label LG</k-input>
            </div>
            <div class="flex flex-col gap-12">
              <k-input size="xs" type="number" class="mr-4" v-model="data">Label XS</k-input>
              <k-input size="sm" type="number" class="mr-4" v-model="data">Label SM</k-input>
              <k-input size="md" type="number" class="mr-4" v-model="data">Label MD</k-input>
              <k-input size="lg" type="number" v-model="data">Label LG</k-input>
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Float")),e("p",null,"Establece el estilo ",e("inlineCode",{parentName:"p"},"float")," al input y lo dota de una animaci\xF3n al placeholder al hacer foco sobre el."),e(i,{mdxType:"Canvas"},e(p,{name:"Float",argTypes:s(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},template:`
          <k-card class="flex flex-col gap-6">
            <k-input float label="label" size="xs" class="mr-4">Label XS</k-input>
            <k-input float size="sm" class="mr-4">Label SM</k-input>
            <k-input float size="md" class="mr-4">Label MD</k-input>
            <k-input float size="lg">Label LG</k-input>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Fieldset")),e("p",null,"Establece el estilo ",e("inlineCode",{parentName:"p"},"fieldset")," el cual coloca el label en el borde superior del imput."),e(i,{mdxType:"Canvas"},e(p,{name:"Fieldset",argTypes:s(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},template:`
          <k-card class="flex flex-col gap-6">
            <k-input fieldset size="xs" class="mr-4">Label XS</k-input>
            <k-input fieldset size="sm" class="mr-4">Label SM</k-input>
            <k-input fieldset size="md" class="mr-4">Label MD</k-input>
            <k-input fieldset size="lg">Label LG</k-input>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Errors")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(i,{mdxType:"Canvas"},e(p,{name:"Errors",argTypes:s(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card class="flex flex-col gap-8">
            <k-input :errors="errors">Label MD</k-input>
            <k-input float  class="mr-4" :errors="errors">Label MD</k-input>
            <k-input fieldset :errors="errors">Label MD</k-input>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Estado")),e("p",null,"Cambia el color del componente indicando un estado"),e(i,{mdxType:"Canvas"},e(p,{name:"Status",argTypes:s(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},template:`
          <k-card class="flex flex-row gap-8">
            <div class="flex flex-col gap-12">
              <k-input status="success">Success</k-input>
              <k-input status="success" float>Success</k-input>
              <k-input status="success" fieldset>Success</k-input>
            </div>
            <div class="flex flex-col gap-12">
              <k-input status="warning">Warning</k-input>
              <k-input status="warning" float>Warning</k-input>
              <k-input status="warning" fieldset>Warning</k-input>
            </div>
            <div class="flex flex-col gap-12">
              <k-input status="danger">Danger</k-input>
              <k-input status="danger" float>Danger</k-input>
              <k-input status="danger" fieldset>Danger</k-input>
            </div>
          </k-card>
        `}))))}a(S,"MDXContent");S.isMDXComponent=!0;const T=d.bind({});T.storyName="Default";T.parameters={storySource:{source:`args => ({
  components: {
    KInputText
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-input v-bind="args">\u{1F984} Label</k-input></k-card>'
})`},...n({showPanel:!0})};const k=a(()=>({components:{KInputText:t},template:`
          <k-card class="flex flex-column gap-4">
            <k-input type="text" class="mr-4">Texto</k-input>
            <k-input type="password" class="mr-4">Contrase\xF1a</k-input>
            <k-input type="number">Numero</k-input>
          </k-card>
        `}),"types");k.storyName="Types";k.argTypes=s(t,{},!0);k.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    template: \`
          <k-card class="flex flex-column gap-4">
            <k-input type="text" class="mr-4">Texto</k-input>
            <k-input type="password" class="mr-4">Contrase\xF1a</k-input>
            <k-input type="number">Numero</k-input>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const f=a(()=>({components:{KInputText:t},setup(){return{data:L(0)}},template:`
          <k-card class="flex flex-row gap-8">
            <div class="flex flex-col gap-12">
              <k-input size="xs" class="mr-4">Label XS</k-input>
              <k-input size="sm" class="mr-4">Label SM</k-input>
              <k-input size="md" class="mr-4">Label MD</k-input>
              <k-input size="lg">Label LG</k-input>
            </div>
            <div class="flex flex-col gap-12">
              <k-input size="xs" type="number" class="mr-4" v-model="data">Label XS</k-input>
              <k-input size="sm" type="number" class="mr-4" v-model="data">Label SM</k-input>
              <k-input size="md" type="number" class="mr-4" v-model="data">Label MD</k-input>
              <k-input size="lg" type="number" v-model="data">Label LG</k-input>
            </div>
          </k-card>
        `}),"sizes");f.storyName="Sizes";f.argTypes=s(t,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    setup() {
      const data = ref(0);
      return {
        data
      };
    },
    template: \`
          <k-card class="flex flex-row gap-8">
            <div class="flex flex-col gap-12">
              <k-input size="xs" class="mr-4">Label XS</k-input>
              <k-input size="sm" class="mr-4">Label SM</k-input>
              <k-input size="md" class="mr-4">Label MD</k-input>
              <k-input size="lg">Label LG</k-input>
            </div>
            <div class="flex flex-col gap-12">
              <k-input size="xs" type="number" class="mr-4" v-model="data">Label XS</k-input>
              <k-input size="sm" type="number" class="mr-4" v-model="data">Label SM</k-input>
              <k-input size="md" type="number" class="mr-4" v-model="data">Label MD</k-input>
              <k-input size="lg" type="number" v-model="data">Label LG</k-input>
            </div>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const x=a(()=>({components:{KInputText:t},template:`
          <k-card class="flex flex-col gap-6">
            <k-input float label="label" size="xs" class="mr-4">Label XS</k-input>
            <k-input float size="sm" class="mr-4">Label SM</k-input>
            <k-input float size="md" class="mr-4">Label MD</k-input>
            <k-input float size="lg">Label LG</k-input>
          </k-card>
        `}),"float");x.storyName="Float";x.argTypes=s(t,{},!0);x.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    template: \`
          <k-card class="flex flex-col gap-6">
            <k-input float label="label" size="xs" class="mr-4">Label XS</k-input>
            <k-input float size="sm" class="mr-4">Label SM</k-input>
            <k-input float size="md" class="mr-4">Label MD</k-input>
            <k-input float size="lg">Label LG</k-input>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const g=a(()=>({components:{KInputText:t},template:`
          <k-card class="flex flex-col gap-6">
            <k-input fieldset size="xs" class="mr-4">Label XS</k-input>
            <k-input fieldset size="sm" class="mr-4">Label SM</k-input>
            <k-input fieldset size="md" class="mr-4">Label MD</k-input>
            <k-input fieldset size="lg">Label LG</k-input>
          </k-card>
        `}),"fieldset");g.storyName="Fieldset";g.argTypes=s(t,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    template: \`
          <k-card class="flex flex-col gap-6">
            <k-input fieldset size="xs" class="mr-4">Label XS</k-input>
            <k-input fieldset size="sm" class="mr-4">Label SM</k-input>
            <k-input fieldset size="md" class="mr-4">Label MD</k-input>
            <k-input fieldset size="lg">Label LG</k-input>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const y=a(()=>({components:{KInputText:t},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card class="flex flex-col gap-8">
            <k-input :errors="errors">Label MD</k-input>
            <k-input float  class="mr-4" :errors="errors">Label MD</k-input>
            <k-input fieldset :errors="errors">Label MD</k-input>
          </k-card>
        `}),"errors");y.storyName="Errors";y.argTypes=s(t,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    setup() {
      return {
        errors: [{
          $message: 'Lorem ipsum dolor sit'
        }]
      };
    },
    template: \`
          <k-card class="flex flex-col gap-8">
            <k-input :errors="errors">Label MD</k-input>
            <k-input float  class="mr-4" :errors="errors">Label MD</k-input>
            <k-input fieldset :errors="errors">Label MD</k-input>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const b=a(()=>({components:{KInputText:t},template:`
          <k-card class="flex flex-row gap-8">
            <div class="flex flex-col gap-12">
              <k-input status="success">Success</k-input>
              <k-input status="success" float>Success</k-input>
              <k-input status="success" fieldset>Success</k-input>
            </div>
            <div class="flex flex-col gap-12">
              <k-input status="warning">Warning</k-input>
              <k-input status="warning" float>Warning</k-input>
              <k-input status="warning" fieldset>Warning</k-input>
            </div>
            <div class="flex flex-col gap-12">
              <k-input status="danger">Danger</k-input>
              <k-input status="danger" float>Danger</k-input>
              <k-input status="danger" fieldset>Danger</k-input>
            </div>
          </k-card>
        `}),"status");b.storyName="Status";b.argTypes=s(t,{},!0);b.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    template: \`
          <k-card class="flex flex-row gap-8">
            <div class="flex flex-col gap-12">
              <k-input status="success">Success</k-input>
              <k-input status="success" float>Success</k-input>
              <k-input status="success" fieldset>Success</k-input>
            </div>
            <div class="flex flex-col gap-12">
              <k-input status="warning">Warning</k-input>
              <k-input status="warning" float>Warning</k-input>
              <k-input status="warning" fieldset>Warning</k-input>
            </div>
            <div class="flex flex-col gap-12">
              <k-input status="danger">Danger</k-input>
              <k-input status="danger" float>Danger</k-input>
              <k-input status="danger" fieldset>Danger</k-input>
            </div>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const u={title:"Data Entry/Input",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:s(t),includeStories:["defaultStory","types","sizes","float","fieldset","errors","status"]},I={Default:"defaultStory",Types:"types",Sizes:"sizes",Float:"float",Fieldset:"fieldset",Errors:"errors",Status:"status"};u.parameters=u.parameters||{};u.parameters.docs={...u.parameters.docs||{},page:()=>e(z,{mdxStoryNameToKey:I,mdxComponentAnnotations:u},e(S,null))};const H=["Template","defaultStory","types","sizes","float","fieldset","errors","status"];export{d as Template,H as __namedExportsOrder,u as default,T as defaultStory,y as errors,g as fieldset,x as float,f as sizes,b as status,k as types};
//# sourceMappingURL=k-input.story.af10c23b.js.map
