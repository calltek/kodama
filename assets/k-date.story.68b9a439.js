var f=Object.defineProperty;var r=(t,n)=>f(t,"name",{value:n,configurable:!0});import"./jsx-runtime.c3971440.js";import{aL as e,aM as v,aN as x,aO as c,aP as D,aQ as h}from"./Props.6869cc77.js";import"./iframe.cc1b565c.js";import{K as a}from"./k-date.ffb1a2a2.js";import{r as o,a as m,H as T}from"./s-head.a4dc320c.js";import"./string.bc4ce337.js";import"./es.map.constructor.976a65f8.js";import"./es.number.to-fixed.50bac931.js";import"./vue.esm-bundler.5c09a9bb.js";import"./index.cb7c6d4d.js";import"./chance.4dc9e851.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function i(){return i=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var p=arguments[n];for(var l in p)Object.prototype.hasOwnProperty.call(p,l)&&(t[l]=p[l])}return t},i.apply(this,arguments)}r(i,"_extends");const d=r(t=>({components:{KDate:a},setup(){return t.value=t.value||"2023-01-01",{args:t}},template:'<k-date v-bind="args" />'}),"Template"),b={Template:d},S="wrapper";function y({components:t,...n}){return e(S,i({},b,n,{components:t,mdxType:"MDXLayout"}),e(h,{title:"Data Display/Date",component:a,argTypes:m(a),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(T,{image:"https://media3.giphy.com/media/xUNd9DLukkavmhybAs/giphy.gif?cid=ecf05e47xzzzzsltihe9wazd1im6vmw688bmhg87fooqu7pg&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F4C6} KDate"),e("h1",null,"KDate"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-date")," puedes humanizar una fecha o rango de fechas y mostrarlo en un formato legible."),e(c,{name:"Default",parameters:o({showPanel:!0}),mdxType:"Story"},d.bind({})),e(D,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Rangos")),e("p",null,"Puedes definir el tama\xF1o del badge desde ",e("inlineCode",{parentName:"p"},"xs")," hasta ",e("inlineCode",{parentName:"p"},"xl"),"."),e(x,{mdxType:"Canvas"},e(c,{name:"Ranges",argTypes:m(a,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KDate:a},template:`
          <div class="flex flex-row gap-8 items-center">
            <k-date :value="['2023-01-01', '2023-02-01']" />
          </div>
        `}))))}r(y,"MDXContent");y.isMDXComponent=!0;const g=d.bind({});g.storyName="Default";g.parameters={storySource:{source:`args => ({
  components: {
    KDate
  },
  setup() {
    args.value = args.value || '2023-01-01';
    return {
      args
    };
  },
  template: '<k-date v-bind="args" />'
})`},...o({showPanel:!0})};const u=r(()=>({components:{KDate:a},template:`
          <div class="flex flex-row gap-8 items-center">
            <k-date :value="['2023-01-01', '2023-02-01']" />
          </div>
        `}),"ranges");u.storyName="Ranges";u.argTypes=m(a,{},!0);u.parameters={storySource:{source:`() => {
  return {
    components: {
      KDate
    },
    template: \`
          <div class="flex flex-row gap-8 items-center">
            <k-date :value="['2023-01-01', '2023-02-01']" />
          </div>
        \`
  };
}`},...o({showPanel:!1})};const s={title:"Data Display/Date",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:a,argTypes:m(a),includeStories:["defaultStory","ranges"]},C={Default:"defaultStory",Ranges:"ranges"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>e(v,{mdxStoryNameToKey:C,mdxComponentAnnotations:s},e(y,null))};const H=["Template","defaultStory","ranges"];export{d as Template,H as __namedExportsOrder,s as default,g as defaultStory,u as ranges};
//# sourceMappingURL=k-date.story.68b9a439.js.map
