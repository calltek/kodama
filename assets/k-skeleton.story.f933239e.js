var f=Object.defineProperty;var r=(a,n)=>f(a,"name",{value:n,configurable:!0});import"./jsx-runtime.15d6fdfa.js";import{aL as e,aM as g,aQ as x,aN as y,aP as S,aO as T}from"./Props.902802d0.js";import"./iframe.67f2f292.js";import{K as t}from"./k-skeleton.476887bc.js";import{r as s,a as p,H as v}from"./s-head.56d5b0a5.js";import"./string.0a840ebe.js";import"./es.map.constructor.38138083.js";import"./es.number.to-fixed.aab29b26.js";import"./vue.esm-bundler.3fc53486.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function d(){return d=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(a[m]=l[m])}return a},d.apply(this,arguments)}r(d,"_extends");const c=r(a=>({components:{KSkeleton:t},setup(){return{args:a}},template:'<k-skeleton v-bind="args" />'}),"Template"),h={Template:c},b="wrapper";function k({components:a,...n}){return e(b,d({},h,n,{components:a,mdxType:"MDXLayout"}),e(T,{title:"Feedback/Skeleton",component:t,argTypes:p(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(v,{image:"https://media1.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif?cid=ecf05e47g15et0uaf8y7xuy046e30du8emzh7a0fzses5mo2&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2753 KSkeleton"),e("h1",null,"KSkeleton"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-skeleton")," puedes mostrar informaci\xF3n temporal mientras se carga la informaci\xF3n real."),e(y,{name:"Default",parameters:s({showPanel:!0}),mdxType:"Story"},c.bind({})),e(S,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Tipo")),e("p",null,"Puedes definir distintos tipos de contenido con la propiedad ",e("inlineCode",{parentName:"p"},"type")),e(x,{mdxType:"Canvas"},e(y,{name:"Type",argTypes:p(t,{},!0),parameters:s({showPanel:!1}),mdxType:"Story"},()=>({components:{KSkeleton:t},template:`
          <div class="flex flex-col gap-8 items-center">
            <k-card>
              <k-skeleton type="text" />
            </k-card>
            <k-card>
              <k-skeleton type="card" />
            </k-card>
            <k-card>
              <k-skeleton type="image" />
            </k-card>
          </div>
        `}))))}r(k,"MDXContent");k.isMDXComponent=!0;const u=c.bind({});u.storyName="Default";u.parameters={storySource:{source:`args => ({
  components: {
    KSkeleton
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-skeleton v-bind="args" />'
})`},...s({showPanel:!0})};const i=r(()=>({components:{KSkeleton:t},template:`
          <div class="flex flex-col gap-8 items-center">
            <k-card>
              <k-skeleton type="text" />
            </k-card>
            <k-card>
              <k-skeleton type="card" />
            </k-card>
            <k-card>
              <k-skeleton type="image" />
            </k-card>
          </div>
        `}),"type");i.storyName="Type";i.argTypes=p(t,{},!0);i.parameters={storySource:{source:`() => {
  return {
    components: {
      KSkeleton
    },
    template: \`
          <div class="flex flex-col gap-8 items-center">
            <k-card>
              <k-skeleton type="text" />
            </k-card>
            <k-card>
              <k-skeleton type="card" />
            </k-card>
            <k-card>
              <k-skeleton type="image" />
            </k-card>
          </div>
        \`
  };
}`},...s({showPanel:!1})};const o={title:"Feedback/Skeleton",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:p(t),includeStories:["defaultStory","type"]},C={Default:"defaultStory",Type:"type"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(g,{mdxStoryNameToKey:C,mdxComponentAnnotations:o},e(k,null))};const L=["Template","defaultStory","type"];export{c as Template,L as __namedExportsOrder,o as default,u as defaultStory,i as type};
//# sourceMappingURL=k-skeleton.story.f933239e.js.map
