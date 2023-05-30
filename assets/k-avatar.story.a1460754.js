var z=Object.defineProperty;var s=(n,o)=>z(n,"name",{value:o,configurable:!0});import"./jsx-runtime.ff681f56.js";import{aL as a,aM as b,aQ as i,aN as m,aP as T,aO as x}from"./Props.0c148406.js";import"./iframe.988cdce5.js";import{K as e}from"./k-avatar.bf81692e.js";import{r,a as t,H as J}from"./s-head.a9240482.js";import"./string.3b2923bc.js";import"./es.map.constructor.04819154.js";import"./es.number.to-fixed.f48c0640.js";import"./vue.esm-bundler.ad0aee8d.js";import"./query.373371fe.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function f(){return f=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(n[p]=c[p])}return n},f.apply(this,arguments)}s(f,"_extends");const u=s(n=>({components:{KAvatar:e},setup(){return{args:n}},template:'<k-avatar v-bind="args" />'}),"Template"),S={Template:u},A="wrapper";function k({components:n,...o}){return a(A,f({},S,o,{components:n,mdxType:"MDXLayout"}),a(x,{title:"Data Display/Avatar",component:e,argTypes:t(e),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),a(J,{image:"https://media3.giphy.com/media/Cu87j5pPIL1hS/giphy.gif?cid=ecf05e47wwz771td1t86kiibuastopo4ywkqzs9oa71hvio8&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F913} KAvatar"),a("h1",null,"KButton"),a("p",null,"Con el componente ",a("inlineCode",{parentName:"p"},"k-avatar")," puedes formar el avatar de una persona de manera aleatoria. El avatar siempre ser\xE1 el mismo."),a("p",null,"Agradecimientos a ",a("a",{parentName:"p",href:"https://www.dicebear.com/styles/notionists-neutral"},"DiceBear")," por la API y el trabajo realizado."),a(m,{name:"Default",parameters:r({showPanel:!0}),args:{name:"Jon Doe"},mdxType:"Story"},u.bind({})),a(T,{story:"Default",mdxType:"ArgsTable"}),a("h2",null,a("strong",{parentName:"h2"},"Size")),a("p",null,"Puedes definir el tama\xF1o del avatar en ",a("inlineCode",{parentName:"p"},"px"),"."),a(i,{mdxType:"Canvas"},a(m,{name:"Size",argTypes:t(e,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KAvatar:e},template:`
          <k-avatar :size="80" class="mr-4" name="Jhon" />
          <k-avatar :size="120" class="mr-4" name="Mery" />
          <k-avatar :size="160" class="mr-4" name="Adam" />
          <k-avatar :size="200" name="Luca" />
        `}))),a("h2",null,a("strong",{parentName:"h2"},"Type")),a("p",null,"Puedes definir el tipo del avatar o dejarlo por defecto."),a(i,{mdxType:"Canvas"},a(m,{name:"Type",argTypes:t(e,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KAvatar:e},template:`
          <div class="flex flex-row gap-2">
            <k-avatar :size="120" type="lorelei" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="notionists-neutral" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="notionists" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="micah" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="miniavs" name="Jhon" bg-color="#f0f0f0" />
          </div>
        `}))),a("h2",null,a("strong",{parentName:"h2"},"Circle")),a("p",null,"Define si el avatar ser\xE1 redondo."),a(i,{mdxType:"Canvas"},a(m,{name:"Circle",argTypes:t(e,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KAvatar:e},template:`
          <k-avatar circle :size="80" class="mr-4" name="Jhon" />
          <k-avatar circle :size="120" class="mr-4" name="Mery" />
          <k-avatar circle :size="160" class="mr-4" name="Adam" />
          <k-avatar circle :size="200" name="Luca" />
        `}))),a("h2",null,a("strong",{parentName:"h2"},"Background")),a("p",null,"Define el color de fondo del avatar en formato ",a("strong",{parentName:"p"},"hexadecimal")),a(i,{mdxType:"Canvas"},a(m,{name:"Background",argTypes:t(e,{},!0),parameters:r({showPanel:!1}),mdxType:"Story"},()=>({components:{KAvatar:e},template:`
          <k-avatar :size="200" bg-color="#ff0" name="Jhon" type="miniavs" />
        `}))))}s(k,"MDXContent");k.isMDXComponent=!0;const y=u.bind({});y.storyName="Default";y.args={name:"Jon Doe"};y.parameters={storySource:{source:`args => ({
  components: {
    KAvatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-avatar v-bind="args" />'
})`},...r({showPanel:!0})};const d=s(()=>({components:{KAvatar:e},template:`
          <k-avatar :size="80" class="mr-4" name="Jhon" />
          <k-avatar :size="120" class="mr-4" name="Mery" />
          <k-avatar :size="160" class="mr-4" name="Adam" />
          <k-avatar :size="200" name="Luca" />
        `}),"size");d.storyName="Size";d.argTypes=t(e,{},!0);d.parameters={storySource:{source:`() => {
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
}`},...r({showPanel:!1})};const v=s(()=>({components:{KAvatar:e},template:`
          <div class="flex flex-row gap-2">
            <k-avatar :size="120" type="lorelei" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="notionists-neutral" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="notionists" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="micah" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="miniavs" name="Jhon" bg-color="#f0f0f0" />
          </div>
        `}),"type");v.storyName="Type";v.argTypes=t(e,{},!0);v.parameters={storySource:{source:`() => {
  return {
    components: {
      KAvatar
    },
    template: \`
          <div class="flex flex-row gap-2">
            <k-avatar :size="120" type="lorelei" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="notionists-neutral" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="notionists" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="micah" class="mr-4" name="Jhon" bg-color="#f0f0f0" />
            <k-avatar :size="120" type="miniavs" name="Jhon" bg-color="#f0f0f0" />
          </div>
        \`
  };
}`},...r({showPanel:!1})};const g=s(()=>({components:{KAvatar:e},template:`
          <k-avatar circle :size="80" class="mr-4" name="Jhon" />
          <k-avatar circle :size="120" class="mr-4" name="Mery" />
          <k-avatar circle :size="160" class="mr-4" name="Adam" />
          <k-avatar circle :size="200" name="Luca" />
        `}),"circle");g.storyName="Circle";g.argTypes=t(e,{},!0);g.parameters={storySource:{source:`() => {
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
}`},...r({showPanel:!1})};const h=s(()=>({components:{KAvatar:e},template:`
          <k-avatar :size="200" bg-color="#ff0" name="Jhon" type="miniavs" />
        `}),"background");h.storyName="Background";h.argTypes=t(e,{},!0);h.parameters={storySource:{source:`() => {
  return {
    components: {
      KAvatar
    },
    template: \`
          <k-avatar :size="200" bg-color="#ff0" name="Jhon" type="miniavs" />
        \`
  };
}`},...r({showPanel:!1})};const l={title:"Data Display/Avatar",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:e,argTypes:t(e),includeStories:["defaultStory","size","type","circle","background"]},w={Default:"defaultStory",Size:"size",Type:"type",Circle:"circle",Background:"background"};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:()=>a(b,{mdxStoryNameToKey:w,mdxComponentAnnotations:l},a(k,null))};const H=["Template","defaultStory","size","type","circle","background"];export{u as Template,H as __namedExportsOrder,h as background,g as circle,l as default,y as defaultStory,d as size,v as type};
//# sourceMappingURL=k-avatar.story.a1460754.js.map
