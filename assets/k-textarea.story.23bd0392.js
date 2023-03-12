var w=Object.defineProperty;var o=(a,n)=>w(a,"name",{value:n,configurable:!0});import"./jsx-runtime.88dd5020.js";import{aL as e,aM as S,aQ as p,aN as l,aP as T,aO as b}from"./Props.1ef38ce3.js";import"./iframe.7b188eaa.js";import{K as t}from"./k-textarea.13e46fe4.js";import{r,a as s,H as v}from"./s-head.c76c13e0.js";import{q as k}from"./vue.esm-bundler.40c2ec29.js";import"./string.6e767c61.js";import"./es.map.constructor.c0550aa6.js";import"./es.number.to-fixed.28a3d557.js";import"./utils.afff62ba.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function c(){return c=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var m=arguments[n];for(var d in m)Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}return a},c.apply(this,arguments)}o(c,"_extends");const u=o(a=>({components:{KTextarea:t},setup(){return{args:a}},template:'<k-card><k-textarea v-bind="args"></k-textarea></k-card>'}),"Template"),L={Template:u},z="wrapper";function y({components:a,...n}){return e(z,c({},L,n,{components:a,mdxType:"MDXLayout"}),e(b,{title:"Data Entry/Textarea",component:t,argTypes:s(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(v,{image:"https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e47k3mnhrb7yc36brvbtq2tz34x1c5odz3ckvei9tmc&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2328 KTextarea"),e("h1",null,"KTextarea"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-textarea")," puedes escribir textos extensos sin quedarte ciego."),e(l,{name:"Default",parameters:r({showPanel:!0}),mdxType:"Story"},u.bind({})),e(T,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Sizes")),e("p",null,"Puedes establecer distintos tama\xF1os que van desde ",e("inlineCode",{parentName:"p"},"xs")," hasta ",e("inlineCode",{parentName:"p"},"lg"),"."),e(p,{mdxType:"Canvas"},e(l,{name:"Sizes",argTypes:s(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KTextarea:t},setup(){return{data:k(0)}},template:`
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea size="xs" class="mr-4" :width="400" :min-height="100">Label XS</k-textarea>
              <k-textarea size="sm" class="mr-4" :width="400" :min-height="100">Label SM</k-textarea>
              <k-textarea size="md" class="mr-4" :width="400" :min-height="100">Label MD</k-textarea>
              <k-textarea size="lg" :width="400" :min-height="100">Label LG</k-textarea>
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Errors")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(p,{mdxType:"Canvas"},e(l,{name:"Errors",argTypes:s(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KTextarea:t},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card>
            <k-textarea :errors="errors" :width="400" :min-height="100">Label MD</k-textarea>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Estado")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(p,{mdxType:"Canvas"},e(l,{name:"Status",argTypes:s(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KTextarea:t},template:`
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea status="success" :width="400" :min-height="100">Success</k-textarea>
              <k-textarea status="warning" :width="400" :min-height="100">Warning</k-textarea>
              <k-textarea status="danger" :width="400" :min-height="100">Danger</k-textarea>
            </div>
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
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea size="xs" class="mr-4" :width="400" :min-height="100">Label XS</k-textarea>
              <k-textarea size="sm" class="mr-4" :width="400" :min-height="100">Label SM</k-textarea>
              <k-textarea size="md" class="mr-4" :width="400" :min-height="100">Label MD</k-textarea>
              <k-textarea size="lg" :width="400" :min-height="100">Label LG</k-textarea>
            </div>
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
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea size="xs" class="mr-4" :width="400" :min-height="100">Label XS</k-textarea>
              <k-textarea size="sm" class="mr-4" :width="400" :min-height="100">Label SM</k-textarea>
              <k-textarea size="md" class="mr-4" :width="400" :min-height="100">Label MD</k-textarea>
              <k-textarea size="lg" :width="400" :min-height="100">Label LG</k-textarea>
            </div>
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
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea status="success" :width="400" :min-height="100">Success</k-textarea>
              <k-textarea status="warning" :width="400" :min-height="100">Warning</k-textarea>
              <k-textarea status="danger" :width="400" :min-height="100">Danger</k-textarea>
            </div>
          </k-card>
        `}),"status");g.storyName="Status";g.argTypes=s(t,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KTextarea
    },
    template: \`
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea status="success" :width="400" :min-height="100">Success</k-textarea>
              <k-textarea status="warning" :width="400" :min-height="100">Warning</k-textarea>
              <k-textarea status="danger" :width="400" :min-height="100">Danger</k-textarea>
            </div>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const i={title:"Data Entry/Textarea",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:s(t),includeStories:["defaultStory","sizes","errors","status"]},D={Default:"defaultStory",Sizes:"sizes",Errors:"errors",Status:"status"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(S,{mdxStoryNameToKey:D,mdxComponentAnnotations:i},e(y,null))};const H=["Template","defaultStory","sizes","errors","status"];export{u as Template,H as __namedExportsOrder,i as default,f as defaultStory,h as errors,x as sizes,g as status};
//# sourceMappingURL=k-textarea.story.23bd0392.js.map