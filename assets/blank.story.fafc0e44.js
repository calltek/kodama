var d=Object.defineProperty;var a=(t,e)=>d(t,"name",{value:e,configurable:!0});import"./jsx-runtime.9d0e66e5.js";import{aL as r,aM as c,aN as l,aO as y}from"./Props.729bd907.js";import"./iframe.932a114c.js";import{b as f}from"./vue-router.da7b39ba.js";import{m as x}from"./app.ffde4de2.js";import"./string.34cc6083.js";import"./es.map.constructor.36a8a534.js";import"./es.number.to-fixed.318f8870.js";import"./vue.esm-bundler.ad0aee8d.js";import"./tippy.esm.a5a76a6e.js";import"./popper.ab98475b.js";import"./query.533a988f.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},p.apply(this,arguments)}a(p,"_extends");const m=a(t=>({components:{App:x},setup(){return f().replace({name:"dashboard"}),{args:t}},template:"<app />"}),"Template"),S={Template:m},b="wrapper";function i({components:t,...e}){return r(b,p({},S,e,{components:t,mdxType:"MDXLayout"}),r(y,{title:"Layouts/Blank",decorators:[()=>({template:'<div id="app" class="fixed h-screen w-screen top-0 left-0"><story /></div>'})],mdxType:"Meta"}),r(l,{name:"Default",mdxType:"Story"},m.bind({})))}a(i,"MDXContent");i.isMDXComponent=!0;const u=m.bind({});u.storyName="Default";u.parameters={storySource:{source:`args => ({
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
})`}};const o={title:"Layouts/Blank",decorators:[()=>({template:'<div id="app" class="fixed h-screen w-screen top-0 left-0"><story /></div>'})],includeStories:["defaultStory"]},g={Default:"defaultStory"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>r(c,{mdxStoryNameToKey:g,mdxComponentAnnotations:o},r(i,null))};const B=["Template","defaultStory"];export{m as Template,B as __namedExportsOrder,o as default,u as defaultStory};
//# sourceMappingURL=blank.story.fafc0e44.js.map
