var w=Object.defineProperty;var o=(a,n)=>w(a,"name",{value:n,configurable:!0});import"./jsx-runtime.4de53506.js";import{aL as e,aM as S,aN as c,aO as l,aP as T,aQ as b}from"./Props.3d2e646d.js";import"./iframe.ad698d62.js";import{K as t}from"./k-textarea.2760d393.js";import{r,a as s,H as L}from"./s-head.92084ec3.js";import{r as k}from"./vue.esm-bundler.7a829ca1.js";import"./string.ca0947f5.js";import"./es.map.constructor.5de2711d.js";import"./es.number.to-fixed.53ef4e64.js";import"./utils.afff62ba.js";import"./_plugin-vue_export-helper.cdc0426e.js";function d(){return d=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var m=arguments[n];for(var p in m)Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}return a},d.apply(this,arguments)}o(d,"_extends");const u=o(a=>({components:{KTextarea:t},setup(){return{args:a}},template:'<k-card><k-textarea v-bind="args"></k-textarea></k-card>'}),"Template"),z={Template:u},D="wrapper";function y({components:a,...n}){return e(D,d({},z,n,{components:a,mdxType:"MDXLayout"}),e(b,{title:"Data Entry/Textarea",component:t,argTypes:s(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(L,{image:"https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e47k3mnhrb7yc36brvbtq2tz34x1c5odz3ckvei9tmc&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2328 KTextarea"),e("h1",null,"KTextarea"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-textarea")," puedes escribir textos extensos sin quedarte ciego."),e(l,{name:"Default",parameters:r({showPanel:!0}),mdxType:"Story"},u.bind({})),e(T,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Sizes")),e("p",null,"Puedes establecer distintos tama\xF1os que van desde ",e("inlineCode",{parentName:"p"},"xs")," hasta ",e("inlineCode",{parentName:"p"},"lg"),"."),e(c,{mdxType:"Canvas"},e(l,{name:"Sizes",argTypes:s(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KTextarea:t},setup(){return{data:k(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-textarea size="xs" class="mr-4" :width="400" :min-height="100">Label XS</k-textarea>
            <k-textarea size="sm" class="mr-4" :width="400" :min-height="100">Label SM</k-textarea>
            <k-textarea size="md" class="mr-4" :width="400" :min-height="100">Label MD</k-textarea>
            <k-textarea size="lg" :width="400" :min-height="100">Label LG</k-textarea>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Errors")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(c,{mdxType:"Canvas"},e(l,{name:"Errors",argTypes:s(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KTextarea:t},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card>
            <k-textarea :errors="errors" :width="400" :min-height="100">Label MD</k-textarea>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Estado")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(c,{mdxType:"Canvas"},e(l,{name:"Status",argTypes:s(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KTextarea:t},template:`
          <k-card class="flex flex-col gap-8">
            <k-textarea status="success" :width="400" :min-height="100">Success</k-textarea>
            <k-textarea status="warning" :width="400" :min-height="100">Warning</k-textarea>
            <k-textarea status="danger" :width="400" :min-height="100">Danger</k-textarea>
          </k-card>
        `}))))}o(y,"MDXContent");y.isMDXComponent=!0;const f=u.bind({});f.storyName="Default";f.parameters={storySource:{source:`args => ({
  components: {
    KTextarea
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-textarea v-bind="args"></k-textarea></k-card>'
})`},...r({showPanel:!0})};const x=o(()=>({components:{KTextarea:t},setup(){return{data:k(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-textarea size="xs" class="mr-4" :width="400" :min-height="100">Label XS</k-textarea>
            <k-textarea size="sm" class="mr-4" :width="400" :min-height="100">Label SM</k-textarea>
            <k-textarea size="md" class="mr-4" :width="400" :min-height="100">Label MD</k-textarea>
            <k-textarea size="lg" :width="400" :min-height="100">Label LG</k-textarea>
          </k-card>
        `}),"sizes");x.storyName="Sizes";x.argTypes=s(t,{},!0);x.parameters={storySource:{source:`() => {
  return {
    components: {
      KTextarea
    },
    setup() {
      const data = ref(0);
      return {
        data
      };
    },
    template: \`
          <k-card class="flex flex-col gap-8">
            <k-textarea size="xs" class="mr-4" :width="400" :min-height="100">Label XS</k-textarea>
            <k-textarea size="sm" class="mr-4" :width="400" :min-height="100">Label SM</k-textarea>
            <k-textarea size="md" class="mr-4" :width="400" :min-height="100">Label MD</k-textarea>
            <k-textarea size="lg" :width="400" :min-height="100">Label LG</k-textarea>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const h=o(()=>({components:{KTextarea:t},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card>
            <k-textarea :errors="errors" :width="400" :min-height="100">Label MD</k-textarea>
          </k-card>
        `}),"errors");h.storyName="Errors";h.argTypes=s(t,{},!0);h.parameters={storySource:{source:`() => {
  return {
    components: {
      KTextarea
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
            <k-textarea :errors="errors" :width="400" :min-height="100">Label MD</k-textarea>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const g=o(()=>({components:{KTextarea:t},template:`
          <k-card class="flex flex-col gap-8">
            <k-textarea status="success" :width="400" :min-height="100">Success</k-textarea>
            <k-textarea status="warning" :width="400" :min-height="100">Warning</k-textarea>
            <k-textarea status="danger" :width="400" :min-height="100">Danger</k-textarea>
          </k-card>
        `}),"status");g.storyName="Status";g.argTypes=s(t,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KTextarea
    },
    template: \`
          <k-card class="flex flex-col gap-8">
            <k-textarea status="success" :width="400" :min-height="100">Success</k-textarea>
            <k-textarea status="warning" :width="400" :min-height="100">Warning</k-textarea>
            <k-textarea status="danger" :width="400" :min-height="100">Danger</k-textarea>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const i={title:"Data Entry/Textarea",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:s(t),includeStories:["defaultStory","sizes","errors","status"]},M={Default:"defaultStory",Sizes:"sizes",Errors:"errors",Status:"status"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(S,{mdxStoryNameToKey:M,mdxComponentAnnotations:i},e(y,null))};const H=["Template","defaultStory","sizes","errors","status"];export{u as Template,H as __namedExportsOrder,i as default,f as defaultStory,h as errors,x as sizes,g as status};
//# sourceMappingURL=k-textarea.story.1ed02fad.js.map
