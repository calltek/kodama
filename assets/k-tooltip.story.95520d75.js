var g=Object.defineProperty;var i=(e,r)=>g(e,"name",{value:r,configurable:!0});import"./jsx-runtime.b54f3273.js";import{aL as t,aM as w,aN as m,aO as a,aP as C,aQ as P}from"./Props.e2f52e5d.js";import"./iframe.5992b53d.js";import{p as u}from"./vue.esm-bundler.5c09a9bb.js";import{K as o}from"./k-tooltip.299c24d3.js";import{r as n,a as l,H as S}from"./s-head.af73b89b.js";import"./string.a2aee421.js";import"./es.map.constructor.4531a3b9.js";import"./es.number.to-fixed.e165c26a.js";import"./index.7fcb4b4b.js";import"./utils.afff62ba.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function k(){return k=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var p=arguments[r];for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&(e[c]=p[c])}return e},k.apply(this,arguments)}i(k,"_extends");const b=i(e=>({components:{KTooltip:o},setup(){return{args:e}},template:'<k-tooltip v-bind="args"><k-button color="primary">Tooltip</k-button></k-tooltip>'}),"Template"),x={Template:b},N="wrapper";function v({components:e,...r}){return t(N,k({},x,r,{components:e,mdxType:"MDXLayout"}),t(P,{title:"Feedback/Tooltip",component:o,argTypes:l(o),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),t(S,{image:"https://media0.giphy.com/media/dUJxUPSkmZBqE/giphy.gif?cid=ecf05e47bc59lioy7qbcd3hxymndanryn3rqx3dupt1obgzr&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F4AD} KTooltip"),t("h1",null,"KTooltip"),t("p",null,"Con el componente ",t("inlineCode",{parentName:"p"},"k-tooltip")," puedes mostrar informaci\xF3n adicional sobre un elemento al pasar por encima o clicar sobre el."),t(a,{name:"Default",parameters:n({showPanel:!0}),args:{title:"Lorem ipsum dolor sit"},mdxType:"Story"},b.bind({})),t(C,{story:"Default",mdxType:"ArgsTable"}),t("h2",null,t("strong",{parentName:"h2"},"Titulo")),t("p",null,"El titulo es el contenido del tooltip y puede especificarse con la propiedad ",t("inlineCode",{parentName:"p"},"title")," o el slot ",t("inlineCode",{parentName:"p"},"title"),"."),t(m,{mdxType:"Canvas"},t(a,{name:"Title",argTypes:l(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KTooltip:o},template:`
          <k-tooltip title="Lorem ipsum dolor sit">
            <k-button class="mr-4">Propiedad</k-button>
          </k-tooltip>
          <k-tooltip>
            <k-button>Slot</k-button>
            <template #content>
              Lorem ipsum dolor sit
            </template>
          </k-tooltip>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Posicion")),t("p",null,"Puedes forzar la posici\xF3n del tooltip con la propiedad ",t("inlineCode",{parentName:"p"},"placement")),t(m,{mdxType:"Canvas"},t(a,{name:"Placement",argTypes:l(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KTooltip:o},template:`
          <k-tooltip placement="top" title="Tooltip on top">
            <k-button class="mr-2">TOP</k-button>
          </k-tooltip>
          <k-tooltip placement="left" title="Tooltip on left">
            <k-button class="mr-2">LEFT</k-button>
          </k-tooltip>
          <k-tooltip placement="bottom" title="Tooltip on bottom">
            <k-button class="mr-2">BOTTOM</k-button>
          </k-tooltip>
          <k-tooltip placement="right" title="Tooltip on right">
            <k-button>RIGHT</k-button>
          </k-tooltip>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Click/Hover")),t("p",null,"Es posible modificar el compartamiento del tooltip para que se habra con ",t("inlineCode",{parentName:"p"},"click"),", ",t("inlineCode",{parentName:"p"},"hover")," o forzandolo con la propiedad ",t("inlineCode",{parentName:"p"},"visible")),t(m,{mdxType:"Canvas"},t(a,{name:"Method",argTypes:l(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KTooltip:o},setup(){return{visible:u(!1)}},template:`
          <k-tooltip hover title="Tooltip on hover">
            <k-button class="mr-2">HOVER</k-button>
          </k-tooltip>
          <k-tooltip click title="Tooltip on click">
            <k-button class="mr-2">CLICK</k-button>
          </k-tooltip>
          <k-tooltip :visible="visible" title="Tooltip manual">
            <k-button @click="visible = !visible">VISIBLE: {{visible}}</k-button>
          </k-tooltip>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Flecha")),t("p",null,"Puedes esconder la flecha del tooltip especificando la propiedad ",t("inlineCode",{parentName:"p"},"arrow")," a ",t("inlineCode",{parentName:"p"},"false")),t(m,{mdxType:"Canvas"},t(a,{name:"Arrow",argTypes:l(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KTooltip:o},setup(){return{visible:u(!1)}},template:`
          <k-tooltip :arrow="false" title="Tooltip witouth arrow">
            <k-button>ARROW HIDE</k-button>
          </k-tooltip>
        `}))))}i(v,"MDXContent");v.isMDXComponent=!0;const d=b.bind({});d.storyName="Default";d.args={title:"Lorem ipsum dolor sit"};d.parameters={storySource:{source:`args => ({
  components: {
    KTooltip
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-tooltip v-bind="args"><k-button color="primary">Tooltip</k-button></k-tooltip>'
})`},...n({showPanel:!0})};const T=i(()=>({components:{KTooltip:o},template:`
          <k-tooltip title="Lorem ipsum dolor sit">
            <k-button class="mr-4">Propiedad</k-button>
          </k-tooltip>
          <k-tooltip>
            <k-button>Slot</k-button>
            <template #content>
              Lorem ipsum dolor sit
            </template>
          </k-tooltip>
        `}),"title");T.storyName="Title";T.argTypes=l(o,{},!0);T.parameters={storySource:{source:`() => {
  return {
    components: {
      KTooltip
    },
    template: \`
          <k-tooltip title="Lorem ipsum dolor sit">
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
}`},...n({showPanel:!1})};const y=i(()=>({components:{KTooltip:o},template:`
          <k-tooltip placement="top" title="Tooltip on top">
            <k-button class="mr-2">TOP</k-button>
          </k-tooltip>
          <k-tooltip placement="left" title="Tooltip on left">
            <k-button class="mr-2">LEFT</k-button>
          </k-tooltip>
          <k-tooltip placement="bottom" title="Tooltip on bottom">
            <k-button class="mr-2">BOTTOM</k-button>
          </k-tooltip>
          <k-tooltip placement="right" title="Tooltip on right">
            <k-button>RIGHT</k-button>
          </k-tooltip>
        `}),"placement");y.storyName="Placement";y.argTypes=l(o,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KTooltip
    },
    template: \`
          <k-tooltip placement="top" title="Tooltip on top">
            <k-button class="mr-2">TOP</k-button>
          </k-tooltip>
          <k-tooltip placement="left" title="Tooltip on left">
            <k-button class="mr-2">LEFT</k-button>
          </k-tooltip>
          <k-tooltip placement="bottom" title="Tooltip on bottom">
            <k-button class="mr-2">BOTTOM</k-button>
          </k-tooltip>
          <k-tooltip placement="right" title="Tooltip on right">
            <k-button>RIGHT</k-button>
          </k-tooltip>
        \`
  };
}`},...n({showPanel:!1})};const f=i(()=>({components:{KTooltip:o},setup(){return{visible:u(!1)}},template:`
          <k-tooltip hover title="Tooltip on hover">
            <k-button class="mr-2">HOVER</k-button>
          </k-tooltip>
          <k-tooltip click title="Tooltip on click">
            <k-button class="mr-2">CLICK</k-button>
          </k-tooltip>
          <k-tooltip :visible="visible" title="Tooltip manual">
            <k-button @click="visible = !visible">VISIBLE: {{visible}}</k-button>
          </k-tooltip>
        `}),"method");f.storyName="Method";f.argTypes=l(o,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KTooltip
    },
    setup() {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
          <k-tooltip hover title="Tooltip on hover">
            <k-button class="mr-2">HOVER</k-button>
          </k-tooltip>
          <k-tooltip click title="Tooltip on click">
            <k-button class="mr-2">CLICK</k-button>
          </k-tooltip>
          <k-tooltip :visible="visible" title="Tooltip manual">
            <k-button @click="visible = !visible">VISIBLE: {{visible}}</k-button>
          </k-tooltip>
        \`
  };
}`},...n({showPanel:!1})};const h=i(()=>({components:{KTooltip:o},setup(){return{visible:u(!1)}},template:`
          <k-tooltip :arrow="false" title="Tooltip witouth arrow">
            <k-button>ARROW HIDE</k-button>
          </k-tooltip>
        `}),"arrow");h.storyName="Arrow";h.argTypes=l(o,{},!0);h.parameters={storySource:{source:`() => {
  return {
    components: {
      KTooltip
    },
    setup() {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
          <k-tooltip :arrow="false" title="Tooltip witouth arrow">
            <k-button>ARROW HIDE</k-button>
          </k-tooltip>
        \`
  };
}`},...n({showPanel:!1})};const s={title:"Feedback/Tooltip",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:o,argTypes:l(o),includeStories:["defaultStory","title","placement","method","arrow"]},O={Default:"defaultStory",Title:"title",Placement:"placement",Method:"method",Arrow:"arrow"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>t(w,{mdxStoryNameToKey:O,mdxComponentAnnotations:s},t(v,null))};const q=["Template","defaultStory","title","placement","method","arrow"];export{b as Template,q as __namedExportsOrder,h as arrow,s as default,d as defaultStory,f as method,y as placement,T as title};
//# sourceMappingURL=k-tooltip.story.95520d75.js.map
