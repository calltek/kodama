var v=Object.defineProperty;var o=(a,s)=>v(a,"name",{value:s,configurable:!0});import"./jsx-runtime.e5e06015.js";import{aL as e,aM as w,aQ as p,aN as d,aP as S,aO as T}from"./Props.f1e238ee.js";import"./iframe.cf561a81.js";import{K as t}from"./k-textarea.e355a37c.js";import{r,a as n,H as b}from"./s-head.61c6f3cf.js";import{q as k}from"./vue.esm-bundler.e9a14992.js";import"./string.af0ee2d9.js";import"./es.map.constructor.08645dd0.js";import"./es.number.to-fixed.8ddda7dc.js";import"./utils.e3374581.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function x(){return x=Object.assign?Object.assign.bind():function(a){for(var s=1;s<arguments.length;s++){var m=arguments[s];for(var l in m)Object.prototype.hasOwnProperty.call(m,l)&&(a[l]=m[l])}return a},x.apply(this,arguments)}o(x,"_extends");const c=o(a=>({components:{KTextarea:t},setup(){return{args:a}},template:'<k-card><k-textarea v-bind="args"></k-textarea></k-card>'}),"Template"),L={Template:c},z="wrapper";function y({components:a,...s}){return e(z,x({},L,s,{components:a,mdxType:"MDXLayout"}),e(T,{title:"Data Entry/Textarea",component:t,argTypes:n(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(b,{image:"https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e47k3mnhrb7yc36brvbtq2tz34x1c5odz3ckvei9tmc&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2328 KTextarea"),e("h1",null,"KTextarea"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-textarea")," puedes escribir textos extensos sin quedarte ciego."),e(d,{name:"Default",parameters:r({showPanel:!0}),mdxType:"Story"},c.bind({})),e(S,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Sizes")),e("p",null,"Puedes establecer distintos tama\xF1os que van desde ",e("inlineCode",{parentName:"p"},"xs")," hasta ",e("inlineCode",{parentName:"p"},"lg"),"."),e(p,{mdxType:"Canvas"},e(d,{name:"Sizes",argTypes:n(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KTextarea:t},setup(){return{text:k("")}},template:`
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea size="xs" :width="400" :min-height="100" v-model="text">Label XS</k-textarea>
              <k-textarea size="sm" :width="400" :min-height="100" v-model="text">Label SM</k-textarea>
              <k-textarea size="md" :width="400" :min-height="100" v-model="text">Label MD</k-textarea>
              <k-textarea size="lg" :width="400" :min-height="100" v-model="text">Label LG</k-textarea>
            </div>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Errors")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(p,{mdxType:"Canvas"},e(d,{name:"Errors",argTypes:n(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KTextarea:t},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card>
            <k-textarea :errors="errors" :width="400" :min-height="100">Label MD</k-textarea>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Estado")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(p,{mdxType:"Canvas"},e(d,{name:"Status",argTypes:n(t,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KTextarea:t},template:`
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea status="success" :width="400" :min-height="100">Success</k-textarea>
              <k-textarea status="warning" :width="400" :min-height="100">Warning</k-textarea>
              <k-textarea status="danger" :width="400" :min-height="100">Danger</k-textarea>
            </div>
          </k-card>
        `}))))}o(y,"MDXContent");y.isMDXComponent=!0;const f=c.bind({});f.storyName="Default";f.parameters={storySource:{source:`args => ({
  components: {
    KTextarea
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-textarea v-bind="args"></k-textarea></k-card>'
})`},...r({showPanel:!0})};const u=o(()=>({components:{KTextarea:t},setup(){return{text:k("")}},template:`
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea size="xs" :width="400" :min-height="100" v-model="text">Label XS</k-textarea>
              <k-textarea size="sm" :width="400" :min-height="100" v-model="text">Label SM</k-textarea>
              <k-textarea size="md" :width="400" :min-height="100" v-model="text">Label MD</k-textarea>
              <k-textarea size="lg" :width="400" :min-height="100" v-model="text">Label LG</k-textarea>
            </div>
          </k-card>
        `}),"sizes");u.storyName="Sizes";u.argTypes=n(t,{},!0);u.parameters={storySource:{source:`() => {
  return {
    components: {
      KTextarea
    },
    setup() {
      const text = ref('');
      return {
        text
      };
    },
    template: \`
          <k-card>
            <div class="flex flex-col gap-8">
              <k-textarea size="xs" :width="400" :min-height="100" v-model="text">Label XS</k-textarea>
              <k-textarea size="sm" :width="400" :min-height="100" v-model="text">Label SM</k-textarea>
              <k-textarea size="md" :width="400" :min-height="100" v-model="text">Label MD</k-textarea>
              <k-textarea size="lg" :width="400" :min-height="100" v-model="text">Label LG</k-textarea>
            </div>
          </k-card>
        \`
  };
}`},...r({showPanel:!1})};const h=o(()=>({components:{KTextarea:t},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card>
            <k-textarea :errors="errors" :width="400" :min-height="100">Label MD</k-textarea>
          </k-card>
        `}),"errors");h.storyName="Errors";h.argTypes=n(t,{},!0);h.parameters={storySource:{source:`() => {
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
        `}),"status");g.storyName="Status";g.argTypes=n(t,{},!0);g.parameters={storySource:{source:`() => {
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
}`},...r({showPanel:!1})};const i={title:"Data Entry/Textarea",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:n(t),includeStories:["defaultStory","sizes","errors","status"]},D={Default:"defaultStory",Sizes:"sizes",Errors:"errors",Status:"status"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(w,{mdxStoryNameToKey:D,mdxComponentAnnotations:i},e(y,null))};const H=["Template","defaultStory","sizes","errors","status"];export{c as Template,H as __namedExportsOrder,i as default,f as defaultStory,h as errors,u as sizes,g as status};
//# sourceMappingURL=k-textarea.story.53629156.js.map
