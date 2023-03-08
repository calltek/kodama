var T=Object.defineProperty;var e=(a,l)=>T(a,"name",{value:l,configurable:!0});import"./jsx-runtime.4de53506.js";import{aL as o,aM as x,aN as u,aO as s,aP as P,aQ as b}from"./Props.3d2e646d.js";import"./iframe.ad698d62.js";import{K as n}from"./k-button.37b4d7e6.js";import{r as t,a as r,H as N}from"./s-head.92084ec3.js";import"./string.ca0947f5.js";import"./es.map.constructor.5de2711d.js";import"./es.number.to-fixed.53ef4e64.js";import"./vue.esm-bundler.7a829ca1.js";import"./utils.afff62ba.js";import"./_plugin-vue_export-helper.cdc0426e.js";function B(){return B=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var m=arguments[l];for(var i in m)Object.prototype.hasOwnProperty.call(m,i)&&(a[i]=m[i])}return a},B.apply(this,arguments)}e(B,"_extends");const p=e(a=>({components:{KButton:n},setup(){return{args:a}},template:'<k-button v-bind="args">\u{1F984} Button</k-button>'}),"Template"),C={Template:p},D="wrapper";function k({components:a,...l}){return o(D,B({},C,l,{components:a,mdxType:"MDXLayout"}),o(b,{title:"General/Button",component:n,argTypes:r(n),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),o(N,{image:"https://media0.giphy.com/media/hDSy8w6rGHeTe/giphy.gif?cid=ecf05e47d1yojdu59ttft3ykom3decoar5aubq8zin0w9sov&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F6CE} KButton"),o("h1",null,"KButton"),o("p",null,"Con el componente ",o("inlineCode",{parentName:"p"},"k-button")," puedes renderizar botones para ejecutar cualquier acci\xF3n."),o(s,{name:"Default",parameters:t({showPanel:!0}),mdxType:"Story"},p.bind({})),o(P,{story:"Default",mdxType:"ArgsTable"}),o("h2",null,o("strong",{parentName:"h2"},"Color")),o("p",null,"Existen diferentes estilos de colores para los botones. Muchos de ellos se usan para definir una accion en el sistema."),o(u,{mdxType:"Canvas"},o(s,{name:"Color",argTypes:r(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="white">White / Black</KButton>
          <KButton class="mr-2" color="gray">Gray</KButton>
          <KButton class="mr-2" color="primary">Primary</KButton>
          <KButton class="mr-2" color="secondary">Secondary</KButton>
          <KButton class="mr-2" color="success">Success</KButton>
          <KButton class="mr-2" color="warning">Warning</KButton>
          <KButton class="mr-2" color="danger">Danger</KButton>
          <KButton class="mr-2" color="info">Info</KButton>
        `}))),o("h2",null,o("strong",{parentName:"h2"},"Neon")),o("p",null,"Este dise\xF1o aclara el color de fondo del bot\xF3n y da un efecto de luz."),o(u,{mdxType:"Canvas"},o(s,{name:"Neon",argTypes:r(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="white" neon>White / Black</KButton>
          <KButton class="mr-2" color="gray" neon>Gray</KButton>
          <KButton class="mr-2" color="primary" neon>Primary</KButton>
          <KButton class="mr-2" color="secondary" neon>Secondary</KButton>
          <KButton class="mr-2" color="success" neon>Success</KButton>
          <KButton class="mr-2" color="warning" neon>Warning</KButton>
          <KButton class="mr-2" color="danger" neon>Danger</KButton>
          <KButton class="mr-2" color="info" neon>Info</KButton>
        `}))),o("h2",null,o("strong",{parentName:"h2"},"Outline")),o("p",null,"Este dise\xF1o establece un borde alrededor del bot\xF3n, pero no cambia el color de fondo."),o(u,{mdxType:"Canvas"},o(s,{name:"Outline",argTypes:r(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="white" outline>White / Black</KButton>
          <KButton class="mr-2" color="gray" outline>Gray</KButton>
          <KButton class="mr-2" color="primary" outline>Primary</KButton>
          <KButton class="mr-2" color="secondary" outline>Secondary</KButton>
          <KButton class="mr-2" color="success" outline>Success</KButton>
          <KButton class="mr-2" color="warning" outline>Warning</KButton>
          <KButton class="mr-2" color="danger" outline>Danger</KButton>
          <KButton class="mr-2" color="info" outline>Info</KButton>
        `}))),o("h2",null,o("strong",{parentName:"h2"},"Link")),o("p",null,"Este dise\xF1o elimina bordes y fondos, dejando solo el texto. Utilizar este componente en vez de etiquetas ",o("inlineCode",{parentName:"p"},"<a>")," para los enlaces simples."),o(u,{mdxType:"Canvas"},o(s,{name:"Link",argTypes:r(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="white" link>White / Black</KButton>
          <KButton class="mr-2" color="gray" link>Gray</KButton>
          <KButton class="mr-2" color="primary" link>Primary</KButton>
          <KButton class="mr-2" color="secondary" link>Secondary</KButton>
          <KButton class="mr-2" color="success" link>Success</KButton>
          <KButton class="mr-2" color="warning" link>Warning</KButton>
          <KButton class="mr-2" color="danger" link>Danger</KButton>
          <KButton class="mr-2" color="info" link>Info</KButton>
        `}))),o("h2",null,o("strong",{parentName:"h2"},"Zoom")),o("p",null,"Activa esta propiedad para dar un efecto ",o("strong",{parentName:"p"},"zoom")," al pasar el mouse por encima del bot\xF3n."),o(u,{mdxType:"Canvas"},o(s,{name:"Zoom",argTypes:r(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:n},template:`
          <KButton zoom>Zoom Button</KButton>
        `}))),o("h2",null,o("strong",{parentName:"h2"},"Icon")),o("p",null,"Esta propiedad agrega un \xEDcono al bot\xF3n. El bot\xF3n tendr\xE1 un aspecto cuadrado en el caso de no disponer de un ",o("inlineCode",{parentName:"p"},"<slot>"),". Si se activa ",o("inlineCode",{parentName:"p"},"loading")," el \xEDcono se reemplazar\xE1 por un spinner."),o("p",null,"Puedes encontrar todos los iconos disponibles en ",o("a",{parentName:"p",href:"https://fontawesome.com/search?q="},"FontAwesome")),o(u,{mdxType:"Canvas"},o(s,{name:"Icon",argTypes:r(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="primary" icon="user">Con texto</KButton>
          <KButton class="mr-2" color="primary" icon="user" />
          <KButton color="primary" icon="user" loading>Con texto</KButton>
        `}))),o("h2",null,o("strong",{parentName:"h2"},"Uppercase")),o("p",null,"Activa esta propiedad para que el texto del bot\xF3n se muestre en ",o("strong",{parentName:"p"},"may\xFAsculas.")),o(u,{mdxType:"Canvas"},o(s,{name:"Uppercase",argTypes:r(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:n},template:`
          <KButton uppercase>Uppercase</KButton>
        `}))))}e(k,"MDXContent");k.isMDXComponent=!0;const w=p.bind({});w.storyName="Default";w.parameters={storySource:{source:`args => ({
  components: {
    KButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-button v-bind="args">\u{1F984} Button</k-button>'
})`},...t({showPanel:!0})};const K=e(()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="white">White / Black</KButton>
          <KButton class="mr-2" color="gray">Gray</KButton>
          <KButton class="mr-2" color="primary">Primary</KButton>
          <KButton class="mr-2" color="secondary">Secondary</KButton>
          <KButton class="mr-2" color="success">Success</KButton>
          <KButton class="mr-2" color="warning">Warning</KButton>
          <KButton class="mr-2" color="danger">Danger</KButton>
          <KButton class="mr-2" color="info">Info</KButton>
        `}),"color");K.storyName="Color";K.argTypes=r(n,{},!0);K.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <KButton class="mr-2" color="white">White / Black</KButton>
          <KButton class="mr-2" color="gray">Gray</KButton>
          <KButton class="mr-2" color="primary">Primary</KButton>
          <KButton class="mr-2" color="secondary">Secondary</KButton>
          <KButton class="mr-2" color="success">Success</KButton>
          <KButton class="mr-2" color="warning">Warning</KButton>
          <KButton class="mr-2" color="danger">Danger</KButton>
          <KButton class="mr-2" color="info">Info</KButton>
        \`
  };
}`},...t({showPanel:!1})};const y=e(()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="white" neon>White / Black</KButton>
          <KButton class="mr-2" color="gray" neon>Gray</KButton>
          <KButton class="mr-2" color="primary" neon>Primary</KButton>
          <KButton class="mr-2" color="secondary" neon>Secondary</KButton>
          <KButton class="mr-2" color="success" neon>Success</KButton>
          <KButton class="mr-2" color="warning" neon>Warning</KButton>
          <KButton class="mr-2" color="danger" neon>Danger</KButton>
          <KButton class="mr-2" color="info" neon>Info</KButton>
        `}),"neon");y.storyName="Neon";y.argTypes=r(n,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <KButton class="mr-2" color="white" neon>White / Black</KButton>
          <KButton class="mr-2" color="gray" neon>Gray</KButton>
          <KButton class="mr-2" color="primary" neon>Primary</KButton>
          <KButton class="mr-2" color="secondary" neon>Secondary</KButton>
          <KButton class="mr-2" color="success" neon>Success</KButton>
          <KButton class="mr-2" color="warning" neon>Warning</KButton>
          <KButton class="mr-2" color="danger" neon>Danger</KButton>
          <KButton class="mr-2" color="info" neon>Info</KButton>
        \`
  };
}`},...t({showPanel:!1})};const d=e(()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="white" outline>White / Black</KButton>
          <KButton class="mr-2" color="gray" outline>Gray</KButton>
          <KButton class="mr-2" color="primary" outline>Primary</KButton>
          <KButton class="mr-2" color="secondary" outline>Secondary</KButton>
          <KButton class="mr-2" color="success" outline>Success</KButton>
          <KButton class="mr-2" color="warning" outline>Warning</KButton>
          <KButton class="mr-2" color="danger" outline>Danger</KButton>
          <KButton class="mr-2" color="info" outline>Info</KButton>
        `}),"outline");d.storyName="Outline";d.argTypes=r(n,{},!0);d.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <KButton class="mr-2" color="white" outline>White / Black</KButton>
          <KButton class="mr-2" color="gray" outline>Gray</KButton>
          <KButton class="mr-2" color="primary" outline>Primary</KButton>
          <KButton class="mr-2" color="secondary" outline>Secondary</KButton>
          <KButton class="mr-2" color="success" outline>Success</KButton>
          <KButton class="mr-2" color="warning" outline>Warning</KButton>
          <KButton class="mr-2" color="danger" outline>Danger</KButton>
          <KButton class="mr-2" color="info" outline>Info</KButton>
        \`
  };
}`},...t({showPanel:!1})};const g=e(()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="white" link>White / Black</KButton>
          <KButton class="mr-2" color="gray" link>Gray</KButton>
          <KButton class="mr-2" color="primary" link>Primary</KButton>
          <KButton class="mr-2" color="secondary" link>Secondary</KButton>
          <KButton class="mr-2" color="success" link>Success</KButton>
          <KButton class="mr-2" color="warning" link>Warning</KButton>
          <KButton class="mr-2" color="danger" link>Danger</KButton>
          <KButton class="mr-2" color="info" link>Info</KButton>
        `}),"link");g.storyName="Link";g.argTypes=r(n,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <KButton class="mr-2" color="white" link>White / Black</KButton>
          <KButton class="mr-2" color="gray" link>Gray</KButton>
          <KButton class="mr-2" color="primary" link>Primary</KButton>
          <KButton class="mr-2" color="secondary" link>Secondary</KButton>
          <KButton class="mr-2" color="success" link>Success</KButton>
          <KButton class="mr-2" color="warning" link>Warning</KButton>
          <KButton class="mr-2" color="danger" link>Danger</KButton>
          <KButton class="mr-2" color="info" link>Info</KButton>
        \`
  };
}`},...t({showPanel:!1})};const f=e(()=>({components:{KButton:n},template:`
          <KButton zoom>Zoom Button</KButton>
        `}),"zoom");f.storyName="Zoom";f.argTypes=r(n,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <KButton zoom>Zoom Button</KButton>
        \`
  };
}`},...t({showPanel:!1})};const h=e(()=>({components:{KButton:n},template:`
          <KButton class="mr-2" color="primary" icon="user">Con texto</KButton>
          <KButton class="mr-2" color="primary" icon="user" />
          <KButton color="primary" icon="user" loading>Con texto</KButton>
        `}),"icon");h.storyName="Icon";h.argTypes=r(n,{},!0);h.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <KButton class="mr-2" color="primary" icon="user">Con texto</KButton>
          <KButton class="mr-2" color="primary" icon="user" />
          <KButton color="primary" icon="user" loading>Con texto</KButton>
        \`
  };
}`},...t({showPanel:!1})};const S=e(()=>({components:{KButton:n},template:`
          <KButton uppercase>Uppercase</KButton>
        `}),"uppercase");S.storyName="Uppercase";S.argTypes=r(n,{},!0);S.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <KButton uppercase>Uppercase</KButton>
        \`
  };
}`},...t({showPanel:!1})};const c={title:"General/Button",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:n,argTypes:r(n),includeStories:["defaultStory","color","neon","outline","link","zoom","icon","uppercase"]},W={Default:"defaultStory",Color:"color",Neon:"neon",Outline:"outline",Link:"link",Zoom:"zoom",Icon:"icon",Uppercase:"uppercase"};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:()=>o(x,{mdxStoryNameToKey:W,mdxComponentAnnotations:c},o(k,null))};const q=["Template","defaultStory","color","neon","outline","link","zoom","icon","uppercase"];export{p as Template,q as __namedExportsOrder,K as color,c as default,w as defaultStory,h as icon,g as link,y as neon,d as outline,S as uppercase,f as zoom};
//# sourceMappingURL=k-button.story.0df63561.js.map
