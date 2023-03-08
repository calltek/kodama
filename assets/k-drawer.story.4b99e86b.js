var T=Object.defineProperty;var l=(r,n)=>T(r,"name",{value:n,configurable:!0});import"./jsx-runtime.aedc7a54.js";import{aL as e,aM as O,aN as u,aO as m,aP as h,aQ as g}from"./Props.d53d4c1b.js";import"./iframe.74a013c6.js";import{p as s}from"./vue.esm-bundler.5c09a9bb.js";import{K as t}from"./k-drawer.3ae49e3c.js";import{r as a,a as o,H as D}from"./s-head.19ea8db1.js";import"./string.3efe2e56.js";import"./es.map.constructor.6855a0be.js";import"./es.number.to-fixed.c796804d.js";import"./utils.afff62ba.js";import"./index.7fcb4b4b.js";import"./_plugin-vue_export-helper.cdc0426e.js";function c(){return c=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(r[d]=i[d])}return r},c.apply(this,arguments)}l(c,"_extends");const b=l(r=>({components:{KDrawer:t},setup(){const n=s(!1);return{args:r,visible:n}},template:`
    <k-button @click="visible = true">Open</k-button>
    <k-drawer v-bind="args" v-model="visible">
      TEST
    </k-drawer>`}),"Template"),R={Template:b},x="wrapper";function y({components:r,...n}){return e(x,c({},R,n,{components:r,mdxType:"MDXLayout"}),e(g,{title:"Data Display/Drawer",component:t,argTypes:o(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(D,{image:"https://media2.giphy.com/media/xT5LMHyyxpXGZuX36o/giphy.gif?cid=ecf05e47fw3g2thf0v4klq5s3iy1p111llojem9iolq802wo&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F4AD} KDrawer"),e("h1",null,"KDrawer"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-drawer")," puedes crear un contenedor flotante en el que incluir formularios o muestras de informaci\xF3n."),e(m,{name:"Default",parameters:a({showPanel:!0}),args:{title:"Lorem ipsum dolor sit"},mdxType:"Story"},b.bind({})),e(h,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Posicion")),e("p",null,"Puedes especificar la posici\xF3n del drawer con la propiedad ",e("inlineCode",{parentName:"p"},"placement")),e(u,{mdxType:"Canvas"},e(m,{name:"Placement",argTypes:o(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KDrawer:t},setup(){return{visible:s({top:!1,left:!1,bottom:!1,right:!1})}},template:`
          <div class="flex gap-4">
            <k-button @click="visible.top = true">Open TOP</k-button>
            <k-button @click="visible.left = true">Open LEFT</k-button>
            <k-button @click="visible.bottom = true">Open BOTTOM</k-button>
            <k-button @click="visible.right = true">Open RIGHT</k-button>
          </div>
          <k-drawer placement="top" v-model="visible.top">
            DRAWER ON TOP
          </k-drawer>
          <k-drawer placement="left" v-model="visible.left">
            DRAWER ON LEFT
          </k-drawer>
          <k-drawer placement="bottom" v-model="visible.bottom">
            DRAWER ON BOTTOM
          </k-drawer>
          <k-drawer placement="right" v-model="visible.right">
            DRAWER ON RIGHT
          </k-drawer>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Overlay")),e("p",null,"Puedes eliminar el overlay definiendo la propiedad ",e("inlineCode",{parentName:"p"},"backdrop")," a false"),e(u,{mdxType:"Canvas"},e(m,{name:"Backdrop",argTypes:o(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KDrawer:t},setup(){return{visible:s(!1)}},template:`
          <k-button @click="visible = true">Open</k-button>
          <k-drawer v-model="visible" :backdrop="false">
            DRAWER
          </k-drawer>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Header/Footer")),e("p",null,"Puedes modificar el ",e("inlineCode",{parentName:"p"},"header")," y el ",e("inlineCode",{parentName:"p"},"footer")," del drawer con los slots correspondientes o con la propiedad ",e("inlineCode",{parentName:"p"},"title")," si quieres ser mas minimal."),e(u,{mdxType:"Canvas"},e(m,{name:"Header/Footer",argTypes:o(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KDrawer:t},setup(){return{visible:s(!1)}},template:`
          <k-button @click="visible = true">Open</k-button>
          <k-drawer v-model="visible" :backdrop="false">
            DRAWER
            <template #header>
              <h1 class="text-xl font-bold dark:text-white">Header</h1>
            </template>
            <template #footer>
              <k-button>Save</k-button>
            </template>
          </k-drawer>
        `}))))}l(y,"MDXContent");y.isMDXComponent=!0;const k=b.bind({});k.storyName="Default";k.args={title:"Lorem ipsum dolor sit"};k.parameters={storySource:{source:`args => ({
  components: {
    KDrawer
  },
  setup() {
    const visible = ref(false);
    return {
      args,
      visible
    };
  },
  template: \`
    <k-button @click="visible = true">Open</k-button>
    <k-drawer v-bind="args" v-model="visible">
      TEST
    </k-drawer>\`
})`},...a({showPanel:!0})};const v=l(()=>({components:{KDrawer:t},setup(){return{visible:s({top:!1,left:!1,bottom:!1,right:!1})}},template:`
          <div class="flex gap-4">
            <k-button @click="visible.top = true">Open TOP</k-button>
            <k-button @click="visible.left = true">Open LEFT</k-button>
            <k-button @click="visible.bottom = true">Open BOTTOM</k-button>
            <k-button @click="visible.right = true">Open RIGHT</k-button>
          </div>
          <k-drawer placement="top" v-model="visible.top">
            DRAWER ON TOP
          </k-drawer>
          <k-drawer placement="left" v-model="visible.left">
            DRAWER ON LEFT
          </k-drawer>
          <k-drawer placement="bottom" v-model="visible.bottom">
            DRAWER ON BOTTOM
          </k-drawer>
          <k-drawer placement="right" v-model="visible.right">
            DRAWER ON RIGHT
          </k-drawer>
        `}),"placement");v.storyName="Placement";v.argTypes=o(t,{},!0);v.parameters={storySource:{source:`() => {
  return {
    components: {
      KDrawer
    },
    setup() {
      const visible = ref({
        top: false,
        left: false,
        bottom: false,
        right: false
      });
      return {
        visible
      };
    },
    template: \`
          <div class="flex gap-4">
            <k-button @click="visible.top = true">Open TOP</k-button>
            <k-button @click="visible.left = true">Open LEFT</k-button>
            <k-button @click="visible.bottom = true">Open BOTTOM</k-button>
            <k-button @click="visible.right = true">Open RIGHT</k-button>
          </div>
          <k-drawer placement="top" v-model="visible.top">
            DRAWER ON TOP
          </k-drawer>
          <k-drawer placement="left" v-model="visible.left">
            DRAWER ON LEFT
          </k-drawer>
          <k-drawer placement="bottom" v-model="visible.bottom">
            DRAWER ON BOTTOM
          </k-drawer>
          <k-drawer placement="right" v-model="visible.right">
            DRAWER ON RIGHT
          </k-drawer>
        \`
  };
}`},...a({showPanel:!1})};const f=l(()=>({components:{KDrawer:t},setup(){return{visible:s(!1)}},template:`
          <k-button @click="visible = true">Open</k-button>
          <k-drawer v-model="visible" :backdrop="false">
            DRAWER
          </k-drawer>
        `}),"backdrop");f.storyName="Backdrop";f.argTypes=o(t,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KDrawer
    },
    setup() {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
          <k-button @click="visible = true">Open</k-button>
          <k-drawer v-model="visible" :backdrop="false">
            DRAWER
          </k-drawer>
        \`
  };
}`},...a({showPanel:!1})};const w=l(()=>({components:{KDrawer:t},setup(){return{visible:s(!1)}},template:`
          <k-button @click="visible = true">Open</k-button>
          <k-drawer v-model="visible" :backdrop="false">
            DRAWER
            <template #header>
              <h1 class="text-xl font-bold dark:text-white">Header</h1>
            </template>
            <template #footer>
              <k-button>Save</k-button>
            </template>
          </k-drawer>
        `}),"headerFooter");w.storyName="Header/Footer";w.argTypes=o(t,{},!0);w.parameters={storySource:{source:`() => {
  return {
    components: {
      KDrawer
    },
    setup() {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
          <k-button @click="visible = true">Open</k-button>
          <k-drawer v-model="visible" :backdrop="false">
            DRAWER
            <template #header>
              <h1 class="text-xl font-bold dark:text-white">Header</h1>
            </template>
            <template #footer>
              <k-button>Save</k-button>
            </template>
          </k-drawer>
        \`
  };
}`},...a({showPanel:!1})};const p={title:"Data Display/Drawer",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:o(t),includeStories:["defaultStory","placement","backdrop","headerFooter"]},E={Default:"defaultStory",Placement:"placement",Backdrop:"backdrop","Header/Footer":"headerFooter"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>e(O,{mdxStoryNameToKey:E,mdxComponentAnnotations:p},e(y,null))};const j=["Template","defaultStory","placement","backdrop","headerFooter"];export{b as Template,j as __namedExportsOrder,f as backdrop,p as default,k as defaultStory,w as headerFooter,v as placement};
//# sourceMappingURL=k-drawer.story.4b99e86b.js.map
