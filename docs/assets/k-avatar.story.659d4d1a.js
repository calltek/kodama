var z=Object.defineProperty;var o=(r,s)=>z(r,"name",{value:s,configurable:!0});import"./jsx-runtime.50e3ea3d.js";import{aL as a,aM as h,aN as p,aO as c,aP as T,aQ as x}from"./Props.83de5850.js";import"./iframe.38129425.js";import{K as e}from"./k-avatar.36879711.js";import{r as t,a as n,H as S}from"./s-head.5c478942.js";import"./string.afc03a9e.js";import"./es.map.constructor.249e4cc2.js";import"./es.number.to-fixed.73993e76.js";import"./vue.esm-bundler.7a829ca1.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./chance.4dc9e851.js";function u(){return u=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(r[i]=l[i])}return r},u.apply(this,arguments)}o(u,"_extends");const d=o(r=>({components:{KAvatar:e},setup(){return{args:r}},template:'<k-avatar v-bind="args" />'}),"Template"),A={Template:d},b="wrapper";function g({components:r,...s}){return a(b,u({},A,s,{components:r,mdxType:"MDXLayout"}),a(x,{title:"Data Display/Avatar",component:e,argTypes:n(e),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),a(S,{image:"https://media3.giphy.com/media/Cu87j5pPIL1hS/giphy.gif?cid=ecf05e47wwz771td1t86kiibuastopo4ywkqzs9oa71hvio8&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F913} KAvatar"),a("h1",null,"KButton"),a("p",null,"Con el componente ",a("inlineCode",{parentName:"p"},"k-avatar")," puedes formar el avatar de una persona de manera aleatoria. El avatar siempre ser\xE1 el mismo."),a(c,{name:"Default",parameters:t({showPanel:!0}),mdxType:"Story"},d.bind({})),a(T,{story:"Default",mdxType:"ArgsTable"}),a("h2",null,a("strong",{parentName:"h2"},"Size")),a("p",null,"Puedes definir el tama\xF1o del avatar en ",a("inlineCode",{parentName:"p"},"px"),"."),a(p,{mdxType:"Canvas"},a(c,{name:"Size",argTypes:n(e,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KAvatar:e},template:`
          <k-avatar :size="80" class="mr-4" name="Jhon" />
          <k-avatar :size="120" class="mr-4" name="Mery" />
          <k-avatar :size="160" class="mr-4" name="Adam" />
          <k-avatar :size="200" name="Luca" />
        `}))),a("h2",null,a("strong",{parentName:"h2"},"Circle")),a("p",null,"Define si el avatar ser\xE1 redondo."),a(p,{mdxType:"Canvas"},a(c,{name:"Circle",argTypes:n(e,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KAvatar:e},template:`
          <k-avatar circle :size="80" class="mr-4" name="Jhon" />
          <k-avatar circle :size="120" class="mr-4" name="Mery" />
          <k-avatar circle :size="160" class="mr-4" name="Adam" />
          <k-avatar circle :size="200" name="Luca" />
        `}))),a("h2",null,a("strong",{parentName:"h2"},"Background")),a("p",null,"Define el color de fondo del avatar en formato ",a("strong",{parentName:"p"},"hexadecimal")),a(p,{mdxType:"Canvas"},a(c,{name:"Background",argTypes:n(e,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KAvatar:e},template:`
          <k-avatar :size="200" bg-color="#ff00ff" name="Jhon" />
        `}))))}o(g,"MDXContent");g.isMDXComponent=!0;const k=d.bind({});k.storyName="Default";k.parameters={storySource:{source:`args => ({
  components: {
    KAvatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-avatar v-bind="args" />'
})`},...t({showPanel:!0})};const y=o(()=>({components:{KAvatar:e},template:`
          <k-avatar :size="80" class="mr-4" name="Jhon" />
          <k-avatar :size="120" class="mr-4" name="Mery" />
          <k-avatar :size="160" class="mr-4" name="Adam" />
          <k-avatar :size="200" name="Luca" />
        `}),"size");y.storyName="Size";y.argTypes=n(e,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KAvatar
    },
    template: \`
          <k-avatar :size="80" class="mr-4" name="Jhon" />
          <k-avatar :size="120" class="mr-4" name="Mery" />
          <k-avatar :size="160" class="mr-4" name="Adam" />
          <k-avatar :size="200" name="Luca" />
        \`
  };
}`},...t({showPanel:!1})};const v=o(()=>({components:{KAvatar:e},template:`
          <k-avatar circle :size="80" class="mr-4" name="Jhon" />
          <k-avatar circle :size="120" class="mr-4" name="Mery" />
          <k-avatar circle :size="160" class="mr-4" name="Adam" />
          <k-avatar circle :size="200" name="Luca" />
        `}),"circle");v.storyName="Circle";v.argTypes=n(e,{},!0);v.parameters={storySource:{source:`() => {
  return {
    components: {
      KAvatar
    },
    template: \`
          <k-avatar circle :size="80" class="mr-4" name="Jhon" />
          <k-avatar circle :size="120" class="mr-4" name="Mery" />
          <k-avatar circle :size="160" class="mr-4" name="Adam" />
          <k-avatar circle :size="200" name="Luca" />
        \`
  };
}`},...t({showPanel:!1})};const f=o(()=>({components:{KAvatar:e},template:`
          <k-avatar :size="200" bg-color="#ff00ff" name="Jhon" />
        `}),"background");f.storyName="Background";f.argTypes=n(e,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KAvatar
    },
    template: \`
          <k-avatar :size="200" bg-color="#ff00ff" name="Jhon" />
        \`
  };
}`},...t({showPanel:!1})};const m={title:"Data Display/Avatar",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:e,argTypes:n(e),includeStories:["defaultStory","size","circle","background"]},D={Default:"defaultStory",Size:"size",Circle:"circle",Background:"background"};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:()=>a(h,{mdxStoryNameToKey:D,mdxComponentAnnotations:m},a(g,null))};const X=["Template","defaultStory","size","circle","background"];export{d as Template,X as __namedExportsOrder,f as background,v as circle,m as default,k as defaultStory,y as size};
//# sourceMappingURL=k-avatar.story.659d4d1a.js.map
