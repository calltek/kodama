var g=Object.defineProperty;var s=(r,m)=>g(r,"name",{value:m,configurable:!0});import"./jsx-runtime.f675c059.js";import{aL as e,aM as v,aQ as a,aN as o,aP as T,aO as h}from"./Props.aa21b87e.js";import"./iframe.22beec89.js";import{K as t}from"./k-title.c1e9c8ba.js";import{r as i,a as l,H as D}from"./s-head.723c1173.js";import"./string.2b229ba9.js";import"./es.map.constructor.9ca06e49.js";import"./es.number.to-fixed.89328c33.js";import"./vue.esm-bundler.e9a14992.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function k(){return k=Object.assign?Object.assign.bind():function(r){for(var m=1;m<arguments.length;m++){var n=arguments[m];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(r[u]=n[u])}return r},k.apply(this,arguments)}s(k,"_extends");const c=s(r=>({components:{KTitle:t},setup(){return{args:r}},template:'<k-title v-bind="args">Lorem ipsum</k-title>'}),"Template"),S={Template:c},C="wrapper";function x({components:r,...m}){return e(C,k({},S,m,{components:r,mdxType:"MDXLayout"}),e(h,{title:"General/Title",component:t,argTypes:l(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(D,{image:"https://media3.giphy.com/media/YSeWtruZU3jS5dnRfh/giphy.gif?cid=ecf05e47rkgmosfbz7swp8fdbgcbgqdekz1vn3rpwm1oy9ln&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F520} KTitle"),e("h1",null,"KTitle"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-title")," puedes renderizar un t\xEDtulo. De esta manera todos los t\xEDtulos de tu aplicaci\xF3n tendr\xE1n un estilo uniforme."),e(o,{name:"Default",parameters:i({showPanel:!0}),mdxType:"Story"},c.bind({})),e(T,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Tama\xF1os")),e("p",null,"Puedes definir el tama\xF1o del titulo con el atributo ",e("inlineCode",{parentName:"p"},"size")," desde ",e("inlineCode",{parentName:"p"},"1")," hasta ",e("inlineCode",{parentName:"p"},"6"),"."),e(a,{mdxType:"Canvas"},e(o,{name:"Sizes",argTypes:l(t,{},!0),parameters:i({showPanel:!1}),mdxType:"Story"},()=>({components:{KTitle:t},template:`
          <div class="flex flex-col gap-4">
            <k-title :size="1">Lorem ipsum</k-title>
            <k-title :size="2">Lorem ipsum</k-title>
            <k-title :size="3">Lorem ipsum</k-title>
            <k-title :size="4">Lorem ipsum</k-title>
            <k-title :size="5">Lorem ipsum</k-title>
            <k-title :size="6">Lorem ipsum</k-title>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Negrita")),e("p",null,"Para mostrar el titulo en negrita, puedes usar el atributo ",e("inlineCode",{parentName:"p"},"bold")," o ",e("inlineCode",{parentName:"p"},"bolder"),"."),e(a,{mdxType:"Canvas"},e(o,{name:"Bold",argTypes:l(t,{},!0),parameters:i({showPanel:!1}),mdxType:"Story"},()=>({components:{KTitle:t},template:`
          <div class="flex flex-row gap-10">
            <div class="flex flex-col gap-4">
              <k-title :size="1" bold>Lorem ipsum</k-title>
              <k-title :size="2" bold>Lorem ipsum</k-title>
              <k-title :size="3" bold>Lorem ipsum</k-title>
              <k-title :size="4" bold>Lorem ipsum</k-title>
              <k-title :size="5" bold>Lorem ipsum</k-title>
              <k-title :size="6" bold>Lorem ipsum</k-title>
            </div>
            <div class="flex flex-col gap-4">
              <k-title :size="1" bolder>Lorem ipsum</k-title>
              <k-title :size="2" bolder>Lorem ipsum</k-title>
              <k-title :size="3" bolder>Lorem ipsum</k-title>
              <k-title :size="4" bolder>Lorem ipsum</k-title>
              <k-title :size="5" bolder>Lorem ipsum</k-title>
              <k-title :size="6" bolder>Lorem ipsum</k-title>
            </div>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Centrado")),e("p",null,"Para centrar el titulo, basta con usar el atributo ",e("inlineCode",{parentName:"p"},"center"),"."),e(a,{mdxType:"Canvas"},e(o,{name:"Center",argTypes:l(t,{},!0),parameters:i({showPanel:!1}),mdxType:"Story"},()=>({components:{KTitle:t},template:`
          <div class="flex flex-col text-center gap-4">
            <k-title :size="1" center>Lorem ipsum</k-title>
            <k-title :size="2" center>Lorem ipsum</k-title>
            <k-title :size="3" center>Lorem ipsum</k-title>
            <k-title :size="4" center>Lorem ipsum</k-title>
            <k-title :size="5" center>Lorem ipsum</k-title>
            <k-title :size="6" center>Lorem ipsum</k-title>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"May\xFAscula")),e("p",null,"Para convertir el texto a may\xFAscula, basta con usar el atributo ",e("inlineCode",{parentName:"p"},"uppercase"),"."),e(a,{mdxType:"Canvas"},e(o,{name:"Uppercase",argTypes:l(t,{},!0),parameters:i({showPanel:!1}),mdxType:"Story"},()=>({components:{KTitle:t},template:`
          <div class="flex flex-col gap-4">
            <k-title :size="1" uppercase>Lorem ipsum</k-title>
            <k-title :size="2" uppercase>Lorem ipsum</k-title>
            <k-title :size="3" uppercase>Lorem ipsum</k-title>
            <k-title :size="4" uppercase>Lorem ipsum</k-title>
            <k-title :size="5" uppercase>Lorem ipsum</k-title>
            <k-title :size="6" uppercase>Lorem ipsum</k-title>
          </div>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Subt\xEDtulo")),e("p",null,"Se puede definir un subtitulo acorde al tama\xF1o del t\xEDtulo directametne con el slot ",e("inlineCode",{parentName:"p"},"subtitle")),e(a,{mdxType:"Canvas"},e(o,{name:"Subtitle",argTypes:l(t,{},!0),parameters:i({showPanel:!1}),mdxType:"Story"},()=>({components:{KTitle:t},template:`
          <div class="flex flex-col gap-6">
            <k-title :size="1">
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="2" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="3" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="4" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="5" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="6" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
          </div>
        `}))))}s(x,"MDXContent");x.isMDXComponent=!0;const y=c.bind({});y.storyName="Default";y.parameters={storySource:{source:`args => ({
  components: {
    KTitle
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-title v-bind="args">Lorem ipsum</k-title>'
})`},...i({showPanel:!0})};const d=s(()=>({components:{KTitle:t},template:`
          <div class="flex flex-col gap-4">
            <k-title :size="1">Lorem ipsum</k-title>
            <k-title :size="2">Lorem ipsum</k-title>
            <k-title :size="3">Lorem ipsum</k-title>
            <k-title :size="4">Lorem ipsum</k-title>
            <k-title :size="5">Lorem ipsum</k-title>
            <k-title :size="6">Lorem ipsum</k-title>
          </div>
        `}),"sizes");d.storyName="Sizes";d.argTypes=l(t,{},!0);d.parameters={storySource:{source:`() => {
  return {
    components: {
      KTitle
    },
    template: \`
          <div class="flex flex-col gap-4">
            <k-title :size="1">Lorem ipsum</k-title>
            <k-title :size="2">Lorem ipsum</k-title>
            <k-title :size="3">Lorem ipsum</k-title>
            <k-title :size="4">Lorem ipsum</k-title>
            <k-title :size="5">Lorem ipsum</k-title>
            <k-title :size="6">Lorem ipsum</k-title>
          </div>
        \`
  };
}`},...i({showPanel:!1})};const z=s(()=>({components:{KTitle:t},template:`
          <div class="flex flex-row gap-10">
            <div class="flex flex-col gap-4">
              <k-title :size="1" bold>Lorem ipsum</k-title>
              <k-title :size="2" bold>Lorem ipsum</k-title>
              <k-title :size="3" bold>Lorem ipsum</k-title>
              <k-title :size="4" bold>Lorem ipsum</k-title>
              <k-title :size="5" bold>Lorem ipsum</k-title>
              <k-title :size="6" bold>Lorem ipsum</k-title>
            </div>
            <div class="flex flex-col gap-4">
              <k-title :size="1" bolder>Lorem ipsum</k-title>
              <k-title :size="2" bolder>Lorem ipsum</k-title>
              <k-title :size="3" bolder>Lorem ipsum</k-title>
              <k-title :size="4" bolder>Lorem ipsum</k-title>
              <k-title :size="5" bolder>Lorem ipsum</k-title>
              <k-title :size="6" bolder>Lorem ipsum</k-title>
            </div>
          </div>
        `}),"bold");z.storyName="Bold";z.argTypes=l(t,{},!0);z.parameters={storySource:{source:`() => {
  return {
    components: {
      KTitle
    },
    template: \`
          <div class="flex flex-row gap-10">
            <div class="flex flex-col gap-4">
              <k-title :size="1" bold>Lorem ipsum</k-title>
              <k-title :size="2" bold>Lorem ipsum</k-title>
              <k-title :size="3" bold>Lorem ipsum</k-title>
              <k-title :size="4" bold>Lorem ipsum</k-title>
              <k-title :size="5" bold>Lorem ipsum</k-title>
              <k-title :size="6" bold>Lorem ipsum</k-title>
            </div>
            <div class="flex flex-col gap-4">
              <k-title :size="1" bolder>Lorem ipsum</k-title>
              <k-title :size="2" bolder>Lorem ipsum</k-title>
              <k-title :size="3" bolder>Lorem ipsum</k-title>
              <k-title :size="4" bolder>Lorem ipsum</k-title>
              <k-title :size="5" bolder>Lorem ipsum</k-title>
              <k-title :size="6" bolder>Lorem ipsum</k-title>
            </div>
          </div>
        \`
  };
}`},...i({showPanel:!1})};const L=s(()=>({components:{KTitle:t},template:`
          <div class="flex flex-col text-center gap-4">
            <k-title :size="1" center>Lorem ipsum</k-title>
            <k-title :size="2" center>Lorem ipsum</k-title>
            <k-title :size="3" center>Lorem ipsum</k-title>
            <k-title :size="4" center>Lorem ipsum</k-title>
            <k-title :size="5" center>Lorem ipsum</k-title>
            <k-title :size="6" center>Lorem ipsum</k-title>
          </div>
        `}),"center");L.storyName="Center";L.argTypes=l(t,{},!0);L.parameters={storySource:{source:`() => {
  return {
    components: {
      KTitle
    },
    template: \`
          <div class="flex flex-col text-center gap-4">
            <k-title :size="1" center>Lorem ipsum</k-title>
            <k-title :size="2" center>Lorem ipsum</k-title>
            <k-title :size="3" center>Lorem ipsum</k-title>
            <k-title :size="4" center>Lorem ipsum</k-title>
            <k-title :size="5" center>Lorem ipsum</k-title>
            <k-title :size="6" center>Lorem ipsum</k-title>
          </div>
        \`
  };
}`},...i({showPanel:!1})};const b=s(()=>({components:{KTitle:t},template:`
          <div class="flex flex-col gap-4">
            <k-title :size="1" uppercase>Lorem ipsum</k-title>
            <k-title :size="2" uppercase>Lorem ipsum</k-title>
            <k-title :size="3" uppercase>Lorem ipsum</k-title>
            <k-title :size="4" uppercase>Lorem ipsum</k-title>
            <k-title :size="5" uppercase>Lorem ipsum</k-title>
            <k-title :size="6" uppercase>Lorem ipsum</k-title>
          </div>
        `}),"uppercase");b.storyName="Uppercase";b.argTypes=l(t,{},!0);b.parameters={storySource:{source:`() => {
  return {
    components: {
      KTitle
    },
    template: \`
          <div class="flex flex-col gap-4">
            <k-title :size="1" uppercase>Lorem ipsum</k-title>
            <k-title :size="2" uppercase>Lorem ipsum</k-title>
            <k-title :size="3" uppercase>Lorem ipsum</k-title>
            <k-title :size="4" uppercase>Lorem ipsum</k-title>
            <k-title :size="5" uppercase>Lorem ipsum</k-title>
            <k-title :size="6" uppercase>Lorem ipsum</k-title>
          </div>
        \`
  };
}`},...i({showPanel:!1})};const f=s(()=>({components:{KTitle:t},template:`
          <div class="flex flex-col gap-6">
            <k-title :size="1">
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="2" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="3" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="4" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="5" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="6" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
          </div>
        `}),"subtitle");f.storyName="Subtitle";f.argTypes=l(t,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KTitle
    },
    template: \`
          <div class="flex flex-col gap-6">
            <k-title :size="1">
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="2" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="3" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="4" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="5" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
            <k-title :size="6" >
              Lorem ipsum 
              <template #subtitle>Dolor sit amet</template>
            </k-title>
          </div>
        \`
  };
}`},...i({showPanel:!1})};const p={title:"General/Title",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:l(t),includeStories:["defaultStory","sizes","bold","center","uppercase","subtitle"]},N={Default:"defaultStory",Sizes:"sizes",Bold:"bold",Center:"center",Uppercase:"uppercase",Subtitle:"subtitle"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>e(v,{mdxStoryNameToKey:N,mdxComponentAnnotations:p},e(x,null))};const _=["Template","defaultStory","sizes","bold","center","uppercase","subtitle"];export{c as Template,_ as __namedExportsOrder,z as bold,L as center,p as default,y as defaultStory,d as sizes,f as subtitle,b as uppercase};
//# sourceMappingURL=k-title.story.29070e52.js.map
