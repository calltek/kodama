var y=Object.defineProperty;var r=(t,n)=>y(t,"name",{value:n,configurable:!0});import"./jsx-runtime.f675c059.js";import{aL as e,aM as g,aN as f,aO as h,aP as b}from"./Props.aa21b87e.js";import"./iframe.22beec89.js";import{K as o}from"./k-accordion.10377242.js";import{r as p,a as d,H as k}from"./s-head.723c1173.js";import"./string.2b229ba9.js";import"./es.map.constructor.9ca06e49.js";import"./es.number.to-fixed.89328c33.js";import"./utils.afff62ba.js";import"./index.7fcb4b4b.js";import"./vue.esm-bundler.e9a14992.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var m=arguments[n];for(var c in m)Object.prototype.hasOwnProperty.call(m,c)&&(t[c]=m[c])}return t},s.apply(this,arguments)}r(s,"_extends");const i=r(t=>({components:{KAccordion:o},setup(){return{args:t}},template:`
    <k-accordion classes="p-4 mb-4 hover:bg-gray-500 hover:text-white rounded-md" active-classes="bg-success" inactive-classes="bg-gray-100">
      <k-accordion-item>
        <template #header>
          Item #1
        </template>
        <template #content>
          Content #1
        </template>
      </k-accordion-item>
      <k-accordion-item>
        <template #header>
          Item #2
        </template>
        <template #content>
          Content #2
        </template>
      </k-accordion-item>
      <k-accordion-item>
        <template #header>
          Item #3
        </template>
        <template #content>
          Content #3
        </template>
      </k-accordion-item>
    </k-accordion>`}),"Template"),v={Template:i},x="wrapper";function l({components:t,...n}){return e(x,s({},v,n,{components:t,mdxType:"MDXLayout"}),e(h,{title:"Data Display/Accordion",component:o,argTypes:d(o),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(k,{image:"https://media3.giphy.com/media/Cu87j5pPIL1hS/giphy.gif?cid=ecf05e47wwz771td1t86kiibuastopo4ywkqzs9oa71hvio8&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F913} KAccordion"),e("h1",null,"KButton"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-accordion")," puedes definir un conjunto de cajas que se muestren o escondan a voluntad."),e(f,{name:"Default",parameters:p({showPanel:!0}),mdxType:"Story"},i.bind({})),e(b,{story:"Default",mdxType:"ArgsTable"}))}r(l,"MDXContent");l.isMDXComponent=!0;const u=i.bind({});u.storyName="Default";u.parameters={storySource:{source:`args => ({
  components: {
    KAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <k-accordion classes="p-4 mb-4 hover:bg-gray-500 hover:text-white rounded-md" active-classes="bg-success" inactive-classes="bg-gray-100">
      <k-accordion-item>
        <template #header>
          Item #1
        </template>
        <template #content>
          Content #1
        </template>
      </k-accordion-item>
      <k-accordion-item>
        <template #header>
          Item #2
        </template>
        <template #content>
          Content #2
        </template>
      </k-accordion-item>
      <k-accordion-item>
        <template #header>
          Item #3
        </template>
        <template #content>
          Content #3
        </template>
      </k-accordion-item>
    </k-accordion>\`
})`},...p({showPanel:!0})};const a={title:"Data Display/Accordion",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:o,argTypes:d(o),includeStories:["defaultStory"]},D={Default:"defaultStory"};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>e(g,{mdxStoryNameToKey:D,mdxComponentAnnotations:a},e(l,null))};const X=["Template","defaultStory"];export{i as Template,X as __namedExportsOrder,a as default,u as defaultStory};
//# sourceMappingURL=k-accordion.story.230a0425.js.map
