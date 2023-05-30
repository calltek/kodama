var S=Object.defineProperty;var r=(s,l)=>S(s,"name",{value:l,configurable:!0});import"./jsx-runtime.9d0e66e5.js";import{aL as e,aM as z,aQ as i,aN as p,aP as h,aO as M}from"./Props.729bd907.js";import"./iframe.932a114c.js";import{K as t}from"./k-input.efaca009.js";import{r as n,a,H as D}from"./s-head.ddd2cbef.js";import{r as d}from"./vue.esm-bundler.ad0aee8d.js";import"./string.34cc6083.js";import"./es.map.constructor.36a8a534.js";import"./es.number.to-fixed.318f8870.js";import"./utils.e3374581.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function m(){return m=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(s[c]=u[c])}return s},m.apply(this,arguments)}r(m,"_extends");const k=r(s=>({components:{KInputText:t},setup(){return{args:s}},template:'<k-card><k-input v-bind="args">\u{1F984} Label</k-input></k-card>'}),"Template"),w={Template:k},N="wrapper";function T({components:s,...l}){return e(N,m({},w,l,{components:s,mdxType:"MDXLayout"}),e(M,{title:"Data Entry/Input",component:t,argTypes:a(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(D,{image:"https://media2.giphy.com/media/SwImQhtiNA7io/giphy.gif?cid=ecf05e47z82yq5bzlbtacqrphv0r4tr1wtbmnhzeakchqa9a&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2328 KInput"),e("h1",null,"KInput"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-input")," puedes renderizar un input text para solicitar contenido."),e(p,{name:"Default",parameters:n({showPanel:!0}),args:{placeholder:"Placeholder"},mdxType:"Story"},k.bind({})),e(h,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Types")),e("p",null,"Se puede cambiar el tipo de input a ",e("inlineCode",{parentName:"p"},"text"),", ",e("inlineCode",{parentName:"p"},"password")," y ",e("inlineCode",{parentName:"p"},"number"),"."),e(i,{mdxType:"Canvas"},e(p,{name:"Types",argTypes:a(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},setup(){return{inputModel:d(0)}},template:`
          <k-card>
            <div class="flex flex-col gap-6">
              <k-input type="text" placeholder="Texto">Texto</k-input>
              <k-input type="password" placeholder="Contrase\xF1a">Contrase\xF1a</k-input>
              <k-input v-model="inputModel" type="number" placeholder="Numero" :min="0" :max="5">Numero</k-input>
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Sizes")),e("p",null,"Puedes establecer distintos tama\xF1os que van desde ",e("inlineCode",{parentName:"p"},"xs")," hasta ",e("inlineCode",{parentName:"p"},"lg"),"."),e(i,{mdxType:"Canvas"},e(p,{name:"Sizes",argTypes:a(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},setup(){return{data:d(0)}},template:`
          <k-card>
            <div class="flex flex-row gap-8">
              <div class="flex flex-col gap-12">
                <k-input size="xs">Label XS</k-input>
                <k-input size="sm">Label SM</k-input>
                <k-input size="md">Label MD</k-input>
                <k-input size="lg">Label LG</k-input>
              </div>
              <div class="flex flex-col gap-12">
                <k-input size="xs" type="number" v-model="data">Label XS</k-input>
                <k-input size="sm" type="number" v-model="data">Label SM</k-input>
                <k-input size="md" type="number" v-model="data">Label MD</k-input>
                <k-input size="lg" type="number" v-model="data">Label LG</k-input>
              </div>
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Float")),e("p",null,"Establece el estilo ",e("inlineCode",{parentName:"p"},"float")," al input y lo dota de una animaci\xF3n al placeholder al hacer foco sobre el."),e(i,{mdxType:"Canvas"},e(p,{name:"Float",argTypes:a(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},template:`
          <k-card>
            <div class="flex flex-col gap-6">
              <k-input float label="label" size="xs" class="mr-4">Label XS</k-input>
              <k-input float size="sm" class="mr-4">Label SM</k-input>
              <k-input float size="md" class="mr-4">Label MD</k-input>
              <k-input float size="lg">Label LG</k-input>
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Fieldset")),e("p",null,"Establece el estilo ",e("inlineCode",{parentName:"p"},"fieldset")," el cual coloca el label en el borde superior del imput."),e(i,{mdxType:"Canvas"},e(p,{name:"Fieldset",argTypes:a(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},template:`
          <k-card>
            <div class="flex flex-col gap-6">
              <k-input fieldset size="xs" class="mr-4">Label XS</k-input>
              <k-input fieldset size="sm" class="mr-4">Label SM</k-input>
              <k-input fieldset size="md" class="mr-4">Label MD</k-input>
              <k-input fieldset size="lg">Label LG</k-input>
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Errors")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(i,{mdxType:"Canvas"},e(p,{name:"Errors",argTypes:a(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card>
            <div class="flex flex-col gap-8">
              <k-input :errors="errors">Label MD</k-input>
              <k-input float  :errors="errors">Label MD</k-input>
              <k-input fieldset :errors="errors">Label MD</k-input>
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Estado")),e("p",null,"Cambia el color del componente indicando un estado"),e(i,{mdxType:"Canvas"},e(p,{name:"Status",argTypes:a(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KInputText:t},template:`
          <k-card>
            <div class="flex flex-row gap-8">
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
            </div>
          </k-card>
        `}))))}r(T,"MDXContent");T.isMDXComponent=!0;const f=k.bind({});f.storyName="Default";f.args={placeholder:"Placeholder"};f.parameters={storySource:{source:`args => ({
  components: {
    KInputText
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-input v-bind="args">\u{1F984} Label</k-input></k-card>'
})`},...n({showPanel:!0})};const x=r(()=>({components:{KInputText:t},setup(){return{inputModel:d(0)}},template:`
          <k-card>
            <div class="flex flex-col gap-6">
              <k-input type="text" placeholder="Texto">Texto</k-input>
              <k-input type="password" placeholder="Contrase\xF1a">Contrase\xF1a</k-input>
              <k-input v-model="inputModel" type="number" placeholder="Numero" :min="0" :max="5">Numero</k-input>
            </div>
          </k-card>
        `}),"types");x.storyName="Types";x.argTypes=a(t,{},!0);x.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    setup() {
      const inputModel = ref(0);
      return {
        inputModel
      };
    },
    template: \`
          <k-card>
            <div class="flex flex-col gap-6">
              <k-input type="text" placeholder="Texto">Texto</k-input>
              <k-input type="password" placeholder="Contrase\xF1a">Contrase\xF1a</k-input>
              <k-input v-model="inputModel" type="number" placeholder="Numero" :min="0" :max="5">Numero</k-input>
            </div>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const g=r(()=>({components:{KInputText:t},setup(){return{data:d(0)}},template:`
          <k-card>
            <div class="flex flex-row gap-8">
              <div class="flex flex-col gap-12">
                <k-input size="xs">Label XS</k-input>
                <k-input size="sm">Label SM</k-input>
                <k-input size="md">Label MD</k-input>
                <k-input size="lg">Label LG</k-input>
              </div>
              <div class="flex flex-col gap-12">
                <k-input size="xs" type="number" v-model="data">Label XS</k-input>
                <k-input size="sm" type="number" v-model="data">Label SM</k-input>
                <k-input size="md" type="number" v-model="data">Label MD</k-input>
                <k-input size="lg" type="number" v-model="data">Label LG</k-input>
              </div>
            </div>
          </k-card>
        `}),"sizes");g.storyName="Sizes";g.argTypes=a(t,{},!0);g.parameters={storySource:{source:`() => {
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
          <k-card>
            <div class="flex flex-row gap-8">
              <div class="flex flex-col gap-12">
                <k-input size="xs">Label XS</k-input>
                <k-input size="sm">Label SM</k-input>
                <k-input size="md">Label MD</k-input>
                <k-input size="lg">Label LG</k-input>
              </div>
              <div class="flex flex-col gap-12">
                <k-input size="xs" type="number" v-model="data">Label XS</k-input>
                <k-input size="sm" type="number" v-model="data">Label SM</k-input>
                <k-input size="md" type="number" v-model="data">Label MD</k-input>
                <k-input size="lg" type="number" v-model="data">Label LG</k-input>
              </div>
            </div>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const y=r(()=>({components:{KInputText:t},template:`
          <k-card>
            <div class="flex flex-col gap-6">
              <k-input float label="label" size="xs" class="mr-4">Label XS</k-input>
              <k-input float size="sm" class="mr-4">Label SM</k-input>
              <k-input float size="md" class="mr-4">Label MD</k-input>
              <k-input float size="lg">Label LG</k-input>
            </div>
          </k-card>
        `}),"float");y.storyName="Float";y.argTypes=a(t,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    template: \`
          <k-card>
            <div class="flex flex-col gap-6">
              <k-input float label="label" size="xs" class="mr-4">Label XS</k-input>
              <k-input float size="sm" class="mr-4">Label SM</k-input>
              <k-input float size="md" class="mr-4">Label MD</k-input>
              <k-input float size="lg">Label LG</k-input>
            </div>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const b=r(()=>({components:{KInputText:t},template:`
          <k-card>
            <div class="flex flex-col gap-6">
              <k-input fieldset size="xs" class="mr-4">Label XS</k-input>
              <k-input fieldset size="sm" class="mr-4">Label SM</k-input>
              <k-input fieldset size="md" class="mr-4">Label MD</k-input>
              <k-input fieldset size="lg">Label LG</k-input>
            </div>
          </k-card>
        `}),"fieldset");b.storyName="Fieldset";b.argTypes=a(t,{},!0);b.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    template: \`
          <k-card>
            <div class="flex flex-col gap-6">
              <k-input fieldset size="xs" class="mr-4">Label XS</k-input>
              <k-input fieldset size="sm" class="mr-4">Label SM</k-input>
              <k-input fieldset size="md" class="mr-4">Label MD</k-input>
              <k-input fieldset size="lg">Label LG</k-input>
            </div>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const v=r(()=>({components:{KInputText:t},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card>
            <div class="flex flex-col gap-8">
              <k-input :errors="errors">Label MD</k-input>
              <k-input float  :errors="errors">Label MD</k-input>
              <k-input fieldset :errors="errors">Label MD</k-input>
            </div>
          </k-card>
        `}),"errors");v.storyName="Errors";v.argTypes=a(t,{},!0);v.parameters={storySource:{source:`() => {
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
          <k-card>
            <div class="flex flex-col gap-8">
              <k-input :errors="errors">Label MD</k-input>
              <k-input float  :errors="errors">Label MD</k-input>
              <k-input fieldset :errors="errors">Label MD</k-input>
            </div>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const L=r(()=>({components:{KInputText:t},template:`
          <k-card>
            <div class="flex flex-row gap-8">
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
            </div>
          </k-card>
        `}),"status");L.storyName="Status";L.argTypes=a(t,{},!0);L.parameters={storySource:{source:`() => {
  return {
    components: {
      KInputText
    },
    template: \`
          <k-card>
            <div class="flex flex-row gap-8">
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
            </div>
          </k-card>
        \`
  };
}`},...n({showPanel:!1})};const o={title:"Data Entry/Input",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:a(t),includeStories:["defaultStory","types","sizes","float","fieldset","errors","status"]},C={Default:"defaultStory",Types:"types",Sizes:"sizes",Float:"float",Fieldset:"fieldset",Errors:"errors",Status:"status"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(z,{mdxStoryNameToKey:C,mdxComponentAnnotations:o},e(T,null))};const H=["Template","defaultStory","types","sizes","float","fieldset","errors","status"];export{k as Template,H as __namedExportsOrder,o as default,f as defaultStory,v as errors,b as fieldset,y as float,g as sizes,L as status,x as types};
//# sourceMappingURL=k-input.story.e12de622.js.map
