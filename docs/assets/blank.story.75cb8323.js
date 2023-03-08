var c=Object.defineProperty;var a=(t,e)=>c(t,"name",{value:e,configurable:!0});import"./jsx-runtime.50e3ea3d.js";import{aL as r,aM as i,aO as l,aQ as y}from"./Props.83de5850.js";import"./iframe.38129425.js";import{m as f,e as x}from"./app.a51160cf.js";import"./string.afc03a9e.js";import"./es.map.constructor.249e4cc2.js";import"./es.number.to-fixed.73993e76.js";import"./vue.esm-bundler.7a829ca1.js";import"./query.2abf0db7.js";import"./_plugin-vue_export-helper.cdc0426e.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},p.apply(this,arguments)}a(p,"_extends");const m=a(t=>({components:{App:f},setup(){return x().replace({name:"dashboard"}),{args:t}},template:"<app />"}),"Template"),S={Template:m},b="wrapper";function u({components:t,...e}){return r(b,p({},S,e,{components:t,mdxType:"MDXLayout"}),r(y,{title:"Layouts/Blank",decorators:[()=>({template:'<div id="app" class="fixed h-screen w-screen top-0 left-0"><story /></div>'})],mdxType:"Meta"}),r(l,{name:"Default",mdxType:"Story"},m.bind({})))}a(u,"MDXContent");u.isMDXComponent=!0;const d=m.bind({});d.storyName="Default";d.parameters={storySource:{source:`args => ({
  components: {
    App
  },
  setup() {
    const router = useRouter();
    router.replace({
      name: 'dashboard'
    });
    return {
      args
    };
  },
  template: '<app />'
})`}};const o={title:"Layouts/Blank",decorators:[()=>({template:'<div id="app" class="fixed h-screen w-screen top-0 left-0"><story /></div>'})],includeStories:["defaultStory"]},g={Default:"defaultStory"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>r(i,{mdxStoryNameToKey:g,mdxComponentAnnotations:o},r(u,null))};const j=["Template","defaultStory"];export{m as Template,j as __namedExportsOrder,o as default,d as defaultStory};
//# sourceMappingURL=blank.story.75cb8323.js.map
