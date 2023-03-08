var f=Object.defineProperty;var r=(a,n)=>f(a,"name",{value:n,configurable:!0});import"./jsx-runtime.4de53506.js";import{aL as e,aM as g,aN as x,aO as y,aP as S,aQ as T}from"./Props.3d2e646d.js";import"./iframe.ad698d62.js";import{K as t}from"./k-skeleton.72fcf9df.js";import{r as s,a as p,H as v}from"./s-head.92084ec3.js";import"./string.ca0947f5.js";import"./es.map.constructor.5de2711d.js";import"./es.number.to-fixed.53ef4e64.js";import"./vue.esm-bundler.7a829ca1.js";import"./_plugin-vue_export-helper.cdc0426e.js";function d(){return d=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(a[m]=l[m])}return a},d.apply(this,arguments)}r(d,"_extends");const c=r(a=>({components:{KSkeleton:t},setup(){return{args:a}},template:'<k-skeleton v-bind="args" />'}),"Template"),h={Template:c},b="wrapper";function k({components:a,...n}){return e(b,d({},h,n,{components:a,mdxType:"MDXLayout"}),e(T,{title:"Feedback/Skeleton",component:t,argTypes:p(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(v,{image:"https://media1.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif?cid=ecf05e47g15et0uaf8y7xuy046e30du8emzh7a0fzses5mo2&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2753 KSkeleton"),e("h1",null,"KSkeleton"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-skeleton")," puedes mostrar informaci\xF3n temporal mientras se carga la informaci\xF3n real."),e(y,{name:"Default",parameters:s({showPanel:!0}),mdxType:"Story"},c.bind({})),e(S,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Tipo")),e("p",null,"Puedes definir distintos tipos de contenido con la propiedad ",e("inlineCode",{parentName:"p"},"type")),e(x,{mdxType:"Canvas"},e(y,{name:"Type",argTypes:p(t,{},!0),parameters:s({showPanel:!1}),mdxType:"Story"},()=>({components:{KSkeleton:t},template:`
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
//# sourceMappingURL=k-skeleton.story.b852e8e1.js.map
