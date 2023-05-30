var h=Object.defineProperty;var n=(o,l)=>h(o,"name",{value:l,configurable:!0});import"./jsx-runtime.ff681f56.js";import{aL as t,aM as g,aN as a,aO as v,aP as w,aQ as i}from"./Props.0c148406.js";import"./iframe.988cdce5.js";import{r as s}from"./vue.esm-bundler.ad0aee8d.js";import{r as e,H as P}from"./s-head.a9240482.js";import"./string.3b2923bc.js";import"./es.map.constructor.04819154.js";import"./es.number.to-fixed.f48c0640.js";function c(){return c=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var m in r)Object.prototype.hasOwnProperty.call(r,m)&&(o[m]=r[m])}return o},c.apply(this,arguments)}n(c,"_extends");const u=n(o=>({setup(){return{args:o}},template:'<k-tooltip v-bind="args"><k-button color="primary">Tooltip</k-button></k-tooltip>'}),"Template"),x={Template:u},C="wrapper";function d({components:o,...l}){return t(C,c({},x,l,{components:o,mdxType:"MDXLayout"}),t(v,{title:"Plugins/Tooltip",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),t(P,{image:"https://media0.giphy.com/media/dUJxUPSkmZBqE/giphy.gif?cid=ecf05e47bc59lioy7qbcd3hxymndanryn3rqx3dupt1obgzr&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F4AD} KTooltip"),t("h1",null,"KTooltip"),t("p",null,"Con el componente ",t("inlineCode",{parentName:"p"},"k-tooltip")," puedes mostrar informaci\xF3n adicional sobre un elemento al pasar por encima o clicar sobre el."),t(a,{name:"Default",parameters:e({showPanel:!0}),args:{content:"Lorem ipsum dolor sit",placement:"top"},mdxType:"Story"},u.bind({})),t(w,{story:"Default",mdxType:"ArgsTable"}),t("h2",null,t("strong",{parentName:"h2"},"Titulo")),t("p",null,"El titulo es el contenido del tooltip y puede especificarse con la propiedad ",t("inlineCode",{parentName:"p"},"title")," o el slot ",t("inlineCode",{parentName:"p"},"title"),"."),t(i,{mdxType:"Canvas"},t(a,{name:"Title",parameters:e({showPanel:!1}),mdxType:"Story"},()=>({template:`
          <k-tooltip content="Lorem ipsum dolor sit">
            <k-button class="mr-4">Propiedad</k-button>
          </k-tooltip>
          <k-tooltip>
            <k-button>Slot</k-button>
            <template #content>
              Lorem ipsum dolor sit
            </template>
          </k-tooltip>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Posicion")),t("p",null,"Puedes forzar la posici\xF3n del tooltip con la propiedad ",t("inlineCode",{parentName:"p"},"placement")),t(i,{mdxType:"Canvas"},t(a,{name:"Placement",parameters:e({showPanel:!1}),mdxType:"Story"},()=>({template:`
          <k-tooltip placement="top" content="Tooltip on top">
            <k-button class="mr-2">TOP</k-button>
          </k-tooltip>
          <k-tooltip placement="left" content="Tooltip on left">
            <k-button class="mr-2">LEFT</k-button>
          </k-tooltip>
          <k-tooltip placement="bottom" content="Tooltip on bottom">
            <k-button class="mr-2">BOTTOM</k-button>
          </k-tooltip>
          <k-tooltip placement="right" content="Tooltip on right">
            <k-button>RIGHT</k-button>
          </k-tooltip>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Click/Hover")),t("p",null,"Es posible modificar el compartamiento del tooltip para que se habra la propiedad ",t("inlineCode",{parentName:"p"},"trigger")),t(i,{mdxType:"Canvas"},t(a,{name:"Method",parameters:e({showPanel:!1}),mdxType:"Story"},()=>({setup(){return{visible:s(!1)}},template:`
          <k-tooltip trigger="mouseenter" content="Tooltip on hover">
            <k-button class="mr-2">HOVER</k-button>
          </k-tooltip>
          <k-tooltip trigger="click" hide-on-click content="Tooltip on click">
            <k-button class="mr-2">CLICK</k-button>
          </k-tooltip>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Flecha")),t("p",null,"Puedes esconder la flecha del tooltip especificando la propiedad ",t("inlineCode",{parentName:"p"},"arrow")," a ",t("inlineCode",{parentName:"p"},"false")),t(i,{mdxType:"Canvas"},t(a,{name:"Arrow",parameters:e({showPanel:!1}),mdxType:"Story"},()=>({setup(){return{visible:s(!1)}},template:`
          <k-tooltip :arrow="false" content="Tooltip witouth arrow">
            <k-button>ARROW HIDE</k-button>
          </k-tooltip>
        `}))))}n(d,"MDXContent");d.isMDXComponent=!0;const k=u.bind({});k.storyName="Default";k.args={content:"Lorem ipsum dolor sit",placement:"top"};k.parameters={storySource:{source:`args => ({
  setup() {
    return {
      args
    };
  },
  template: '<k-tooltip v-bind="args"><k-button color="primary">Tooltip</k-button></k-tooltip>'
})`},...e({showPanel:!0})};const b=n(()=>({template:`
          <k-tooltip content="Lorem ipsum dolor sit">
            <k-button class="mr-4">Propiedad</k-button>
          </k-tooltip>
          <k-tooltip>
            <k-button>Slot</k-button>
            <template #content>
              Lorem ipsum dolor sit
            </template>
          </k-tooltip>
        `}),"title");b.storyName="Title";b.parameters={storySource:{source:`() => {
  return {
    template: \`
          <k-tooltip content="Lorem ipsum dolor sit">
            <k-button class="mr-4">Propiedad</k-button>
          </k-tooltip>
          <k-tooltip>
            <k-button>Slot</k-button>
            <template #content>
              Lorem ipsum dolor sit
            </template>
          </k-tooltip>
        \`
  };
}`},...e({showPanel:!1})};const T=n(()=>({template:`
          <k-tooltip placement="top" content="Tooltip on top">
            <k-button class="mr-2">TOP</k-button>
          </k-tooltip>
          <k-tooltip placement="left" content="Tooltip on left">
            <k-button class="mr-2">LEFT</k-button>
          </k-tooltip>
          <k-tooltip placement="bottom" content="Tooltip on bottom">
            <k-button class="mr-2">BOTTOM</k-button>
          </k-tooltip>
          <k-tooltip placement="right" content="Tooltip on right">
            <k-button>RIGHT</k-button>
          </k-tooltip>
        `}),"placement");T.storyName="Placement";T.parameters={storySource:{source:`() => {
  return {
    template: \`
          <k-tooltip placement="top" content="Tooltip on top">
            <k-button class="mr-2">TOP</k-button>
          </k-tooltip>
          <k-tooltip placement="left" content="Tooltip on left">
            <k-button class="mr-2">LEFT</k-button>
          </k-tooltip>
          <k-tooltip placement="bottom" content="Tooltip on bottom">
            <k-button class="mr-2">BOTTOM</k-button>
          </k-tooltip>
          <k-tooltip placement="right" content="Tooltip on right">
            <k-button>RIGHT</k-button>
          </k-tooltip>
        \`
  };
}`},...e({showPanel:!1})};const f=n(()=>({setup(){return{visible:s(!1)}},template:`
          <k-tooltip trigger="mouseenter" content="Tooltip on hover">
            <k-button class="mr-2">HOVER</k-button>
          </k-tooltip>
          <k-tooltip trigger="click" hide-on-click content="Tooltip on click">
            <k-button class="mr-2">CLICK</k-button>
          </k-tooltip>
        `}),"method");f.storyName="Method";f.parameters={storySource:{source:`() => {
  return {
    setup() {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
          <k-tooltip trigger="mouseenter" content="Tooltip on hover">
            <k-button class="mr-2">HOVER</k-button>
          </k-tooltip>
          <k-tooltip trigger="click" hide-on-click content="Tooltip on click">
            <k-button class="mr-2">CLICK</k-button>
          </k-tooltip>
        \`
  };
}`},...e({showPanel:!1})};const y=n(()=>({setup(){return{visible:s(!1)}},template:`
          <k-tooltip :arrow="false" content="Tooltip witouth arrow">
            <k-button>ARROW HIDE</k-button>
          </k-tooltip>
        `}),"arrow");y.storyName="Arrow";y.parameters={storySource:{source:`() => {
  return {
    setup() {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
          <k-tooltip :arrow="false" content="Tooltip witouth arrow">
            <k-button>ARROW HIDE</k-button>
          </k-tooltip>
        \`
  };
}`},...e({showPanel:!1})};const p={title:"Plugins/Tooltip",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],includeStories:["defaultStory","title","placement","method","arrow"]},S={Default:"defaultStory",Title:"title",Placement:"placement",Method:"method",Arrow:"arrow"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>t(g,{mdxStoryNameToKey:S,mdxComponentAnnotations:p},t(d,null))};const I=["Template","defaultStory","title","placement","method","arrow"];export{u as Template,I as __namedExportsOrder,y as arrow,p as default,k as defaultStory,f as method,T as placement,b as title};
//# sourceMappingURL=k-tooltip.story.1b01315f.js.map
