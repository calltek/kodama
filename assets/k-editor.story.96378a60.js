var f=Object.defineProperty;var o=(a,r)=>f(a,"name",{value:r,configurable:!0});import"./jsx-runtime.9d0e66e5.js";import{aL as t,aM as h,aQ as T,aN as u,aP as b,aO as x}from"./Props.729bd907.js";import"./iframe.932a114c.js";import{K as e}from"./k-editor.7a17b6c0.js";import{r as s,a as m,H as k}from"./s-head.ddd2cbef.js";import"./vue.esm-bundler.ad0aee8d.js";import"./string.34cc6083.js";import"./es.map.constructor.36a8a534.js";import"./es.number.to-fixed.318f8870.js";import"./tippy.esm.a5a76a6e.js";import"./popper.ab98475b.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function i(){return i=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var d=arguments[r];for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(a[p]=d[p])}return a},i.apply(this,arguments)}o(i,"_extends");const l=o(a=>({components:{KEditor:e},setup(){return{args:a}},template:'<k-card><k-editor v-bind="args" /></k-card>'}),"Template"),E={Template:l},M="wrapper";function g({components:a,...r}){return t(M,i({},E,r,{components:a,mdxType:"MDXLayout"}),t(x,{title:"Data Entry/Editor",component:e,argTypes:m(e),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),t(k,{image:"https://media2.giphy.com/media/SwImQhtiNA7io/giphy.gif?cid=ecf05e47z82yq5bzlbtacqrphv0r4tr1wtbmnhzeakchqa9a&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2328 KEditor"),t("h1",null,"KEditor"),t("p",null,"Con el componente ",t("inlineCode",{parentName:"p"},"k-editor")," disponer de un editor de texto/html minimalista y bastante completo."),t(u,{name:"Default",parameters:s({showPanel:!0}),args:{placeholder:"Placeholder"},mdxType:"Story"},l.bind({})),t(b,{story:"Default",mdxType:"ArgsTable"}),t("h2",null,t("strong",{parentName:"h2"},"Contenido Obligatorio")),t("p",null,"Puedes definir un contenido obligatorio en el footer del editor con la propiedad ",t("inlineCode",{parentName:"p"},"mandatory")),t(T,{mdxType:"Canvas"},t(u,{name:"MandatoryHTML",argTypes:m(e,{},!0),parameters:s({showPanel:!1}),mdxType:"Story"},()=>({components:{KEditor:e},template:`
          <k-card>
            <k-editor mandatory="Este campo es obligatorio" />
          </k-card>
        `}))))}o(g,"MDXContent");g.isMDXComponent=!0;const c=l.bind({});c.storyName="Default";c.args={placeholder:"Placeholder"};c.parameters={storySource:{source:`args => ({
  components: {
    KEditor
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-editor v-bind="args" /></k-card>'
})`},...s({showPanel:!0})};const y=o(()=>({components:{KEditor:e},template:`
          <k-card>
            <k-editor mandatory="Este campo es obligatorio" />
          </k-card>
        `}),"mandatoryHtml");y.storyName="MandatoryHTML";y.argTypes=m(e,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KEditor
    },
    template: \`
          <k-card>
            <k-editor mandatory="Este campo es obligatorio" />
          </k-card>
        \`
  };
}`},...s({showPanel:!1})};const n={title:"Data Entry/Editor",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:e,argTypes:m(e),includeStories:["defaultStory","mandatoryHtml"]},S={Default:"defaultStory",MandatoryHTML:"mandatoryHtml"};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>t(h,{mdxStoryNameToKey:S,mdxComponentAnnotations:n},t(g,null))};const q=["Template","defaultStory","mandatoryHtml"];export{l as Template,q as __namedExportsOrder,n as default,c as defaultStory,y as mandatoryHtml};
//# sourceMappingURL=k-editor.story.96378a60.js.map
