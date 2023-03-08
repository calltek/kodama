var y=Object.defineProperty;var s=(o,e)=>y(o,"name",{value:e,configurable:!0});import"./jsx-runtime.aedc7a54.js";import{aL as t,aM as f,aO as l,aQ as g,aN as m}from"./Props.d53d4c1b.js";import"./iframe.74a013c6.js";import{r as a,H as S}from"./s-head.19ea8db1.js";import{v as r}from"./vue.esm-bundler.5c09a9bb.js";import"./string.3efe2e56.js";import"./es.map.constructor.6855a0be.js";import"./es.number.to-fixed.c796804d.js";function p(){return p=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(o[c]=n[c])}return o},p.apply(this,arguments)}s(p,"_extends");const k=s(()=>({setup(){const o=r("toast");return{showToast:s(()=>{o.info("Lorem ipsum dolor sit")},"showToast")}},template:'<k-button v-bind="args" @click="showToast">Show toast</k-button>'}),"Template"),L={Template:k},x="wrapper";function h({components:o,...e}){return t(x,p({},L,e,{components:o,mdxType:"MDXLayout"}),t(g,{title:"Plugins/Toast",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),t(S,{image:"https://media2.giphy.com/media/SwImQhtiNA7io/giphy.gif?cid=ecf05e47z82yq5bzlbtacqrphv0r4tr1wtbmnhzeakchqa9a&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2328 KInput"),t("h1",null,"KInput"),t("p",null,"Con el componente ",t("inlineCode",{parentName:"p"},"k-input")," puedes renderizar un input text para solicitar contenido."),t(l,{name:"Default",parameters:a({showPanel:!0}),mdxType:"Story"},k.bind({})),t("h2",null,t("strong",{parentName:"h2"},"Types")),t("p",null,"Puedes "),t(m,{mdxType:"Canvas"},t(l,{name:"Types",parameters:a({showPanel:!1}),mdxType:"Story"},()=>({setup(){const n=r("toast");return{showToast:s(u=>{n[u]("Lorem ipsum dolor sit")},"showToast")}},template:`
          <k-button color="primary" class="mr-4" @click="showToast('info')">Info</k-button>
          <k-button color="success" class="mr-4" @click="showToast('success')">Success</k-button>
          <k-button color="warning" class="mr-4" @click="showToast('warning')">Warning</k-button>
          <k-button color="danger" class="mr-4" @click="showToast('danger')">Danger</k-button>
          <k-button color="primary" @click="showToast('loading')">Loading</k-button>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"T\xEDtulo")),t("p",null,"Se puede agregar un t\xEDtulo a la notificaci\xF3n"),t(m,{mdxType:"Canvas"},t(l,{name:"Title",parameters:a({showPanel:!1}),mdxType:"Story"},()=>({setup(){const n=r("toast");return{showToast:s(()=>{n.info("Lorem ipsum dolor sit",{title:"Title"})},"showToast")}},template:`
          <k-button class="mr-4" @click="showToast()">Click me</k-button>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Posiciones")),t("p",null,"Cambia la posici\xF3n de tu notificaci\xF3n"),t(m,{mdxType:"Canvas"},t(l,{name:"Position",parameters:a({showPanel:!1}),mdxType:"Story"},()=>({setup(){const n=r("toast");return{showToast:s(u=>{n.info("Lorem ipsum dolor sit",{position:u})},"showToast")}},template:`
          <k-button class="mr-4" @click="showToast('top-right')">Top Right</k-button>
          <k-button class="mr-4" @click="showToast('top-center')">Top Center</k-button>
          <k-button class="mr-4" @click="showToast('top-left')">Top Left</k-button>
          <k-button class="mr-4" @click="showToast('bottom-right')">Bottom Right</k-button>
          <k-button class="mr-4" @click="showToast('bottom-center')">Bottom Center</k-button>
          <k-button @click="showToast('bottom-left')">Bottom Left</k-button>
        `}))))}s(h,"MDXContent");h.isMDXComponent=!0;const b=k.bind({});b.storyName="Default";b.parameters={storySource:{source:`() => ({
  setup() {
    const toast = inject('toast');
    const showToast = () => {
      toast.info('Lorem ipsum dolor sit');
    };
    return {
      showToast
    };
  },
  template: '<k-button v-bind="args" @click="showToast">Show toast</k-button>'
})`},...a({showPanel:!0})};const T=s(()=>({setup(){const o=r("toast");return{showToast:s(n=>{o[n]("Lorem ipsum dolor sit")},"showToast")}},template:`
          <k-button color="primary" class="mr-4" @click="showToast('info')">Info</k-button>
          <k-button color="success" class="mr-4" @click="showToast('success')">Success</k-button>
          <k-button color="warning" class="mr-4" @click="showToast('warning')">Warning</k-button>
          <k-button color="danger" class="mr-4" @click="showToast('danger')">Danger</k-button>
          <k-button color="primary" @click="showToast('loading')">Loading</k-button>
        `}),"types");T.storyName="Types";T.parameters={storySource:{source:`() => {
  return {
    setup() {
      const toast = inject('toast');
      const showToast = type => {
        toast[type]('Lorem ipsum dolor sit');
      };
      return {
        showToast
      };
    },
    template: \`
          <k-button color="primary" class="mr-4" @click="showToast('info')">Info</k-button>
          <k-button color="success" class="mr-4" @click="showToast('success')">Success</k-button>
          <k-button color="warning" class="mr-4" @click="showToast('warning')">Warning</k-button>
          <k-button color="danger" class="mr-4" @click="showToast('danger')">Danger</k-button>
          <k-button color="primary" @click="showToast('loading')">Loading</k-button>
        \`
  };
}`},...a({showPanel:!1})};const w=s(()=>({setup(){const o=r("toast");return{showToast:s(()=>{o.info("Lorem ipsum dolor sit",{title:"Title"})},"showToast")}},template:`
          <k-button class="mr-4" @click="showToast()">Click me</k-button>
        `}),"title");w.storyName="Title";w.parameters={storySource:{source:`() => {
  return {
    setup() {
      const toast = inject('toast');
      const showToast = () => {
        toast.info('Lorem ipsum dolor sit', {
          title: 'Title'
        });
      };
      return {
        showToast
      };
    },
    template: \`
          <k-button class="mr-4" @click="showToast()">Click me</k-button>
        \`
  };
}`},...a({showPanel:!1})};const d=s(()=>({setup(){const o=r("toast");return{showToast:s(n=>{o.info("Lorem ipsum dolor sit",{position:n})},"showToast")}},template:`
          <k-button class="mr-4" @click="showToast('top-right')">Top Right</k-button>
          <k-button class="mr-4" @click="showToast('top-center')">Top Center</k-button>
          <k-button class="mr-4" @click="showToast('top-left')">Top Left</k-button>
          <k-button class="mr-4" @click="showToast('bottom-right')">Bottom Right</k-button>
          <k-button class="mr-4" @click="showToast('bottom-center')">Bottom Center</k-button>
          <k-button @click="showToast('bottom-left')">Bottom Left</k-button>
        `}),"position");d.storyName="Position";d.parameters={storySource:{source:`() => {
  return {
    setup() {
      const toast = inject('toast');
      const showToast = position => {
        toast.info('Lorem ipsum dolor sit', {
          position
        });
      };
      return {
        showToast
      };
    },
    template: \`
          <k-button class="mr-4" @click="showToast('top-right')">Top Right</k-button>
          <k-button class="mr-4" @click="showToast('top-center')">Top Center</k-button>
          <k-button class="mr-4" @click="showToast('top-left')">Top Left</k-button>
          <k-button class="mr-4" @click="showToast('bottom-right')">Bottom Right</k-button>
          <k-button class="mr-4" @click="showToast('bottom-center')">Bottom Center</k-button>
          <k-button @click="showToast('bottom-left')">Bottom Left</k-button>
        \`
  };
}`},...a({showPanel:!1})};const i={title:"Plugins/Toast",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],includeStories:["defaultStory","types","title","position"]},C={Default:"defaultStory",Types:"types",Title:"title",Position:"position"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>t(f,{mdxStoryNameToKey:C,mdxComponentAnnotations:i},t(h,null))};const R=["Template","defaultStory","types","title","position"];export{k as Template,R as __namedExportsOrder,i as default,b as defaultStory,d as position,w as title,T as types};
//# sourceMappingURL=toast.story.e6091381.js.map
