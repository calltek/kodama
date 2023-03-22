var w=Object.defineProperty;var r=(a,l)=>w(a,"name",{value:l,configurable:!0});import"./jsx-runtime.96a42b50.js";import{aL as t,aM as z,aQ as u,aN as s,aP as T,aO as v}from"./Props.8111d5f2.js";import"./iframe.781b7dd4.js";import{K as o}from"./k-button.35734acc.js";import{r as n,a as e,H as P}from"./s-head.26dc392e.js";import"./string.76479a21.js";import"./es.map.constructor.7c2bd8db.js";import"./es.number.to-fixed.d2fd1726.js";import"./vue.esm-bundler.e9a14992.js";import"./utils.afff62ba.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function p(){return p=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var m=arguments[l];for(var i in m)Object.prototype.hasOwnProperty.call(m,i)&&(a[i]=m[i])}return a},p.apply(this,arguments)}r(p,"_extends");const B=r(a=>({components:{KButton:o},setup(){return{args:a}},template:'<k-button v-bind="args">\u{1F984} Button</k-button>'}),"Template"),N={Template:B},C="wrapper";function x({components:a,...l}){return t(C,p({},N,l,{components:a,mdxType:"MDXLayout"}),t(v,{title:"General/Button",component:o,argTypes:e(o),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),t(P,{image:"https://media0.giphy.com/media/hDSy8w6rGHeTe/giphy.gif?cid=ecf05e47d1yojdu59ttft3ykom3decoar5aubq8zin0w9sov&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F6CE} KButton"),t("h1",null,"KButton"),t("p",null,"Con el componente ",t("inlineCode",{parentName:"p"},"k-button")," puedes renderizar botones para ejecutar cualquier acci\xF3n."),t(s,{name:"Default",parameters:n({showPanel:!0}),mdxType:"Story"},B.bind({})),t(T,{story:"Default",mdxType:"ArgsTable"}),t("h2",null,t("strong",{parentName:"h2"},"Color")),t("p",null,"Existen diferentes estilos de colores para los botones. Muchos de ellos se usan para definir una accion en el sistema."),t(u,{mdxType:"Canvas"},t(s,{name:"Color",argTypes:e(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="white">White / Black</KButton>
          <KButton class="mr-2" color="gray">Gray</KButton>
          <KButton class="mr-2" color="primary">Primary</KButton>
          <KButton class="mr-2" color="secondary">Secondary</KButton>
          <KButton class="mr-2" color="success">Success</KButton>
          <KButton class="mr-2" color="warning">Warning</KButton>
          <KButton class="mr-2" color="danger">Danger</KButton>
          <KButton class="mr-2" color="info">Info</KButton>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Neon")),t("p",null,"Este dise\xF1o aclara el color de fondo del bot\xF3n y da un efecto de luz."),t(u,{mdxType:"Canvas"},t(s,{name:"Neon",argTypes:e(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="white" neon>White / Black</KButton>
          <KButton class="mr-2" color="gray" neon>Gray</KButton>
          <KButton class="mr-2" color="primary" neon>Primary</KButton>
          <KButton class="mr-2" color="secondary" neon>Secondary</KButton>
          <KButton class="mr-2" color="success" neon>Success</KButton>
          <KButton class="mr-2" color="warning" neon>Warning</KButton>
          <KButton class="mr-2" color="danger" neon>Danger</KButton>
          <KButton class="mr-2" color="info" neon>Info</KButton>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Outline")),t("p",null,"Este dise\xF1o establece un borde alrededor del bot\xF3n, pero no cambia el color de fondo."),t(u,{mdxType:"Canvas"},t(s,{name:"Outline",argTypes:e(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="white" outline>White / Black</KButton>
          <KButton class="mr-2" color="gray" outline>Gray</KButton>
          <KButton class="mr-2" color="primary" outline>Primary</KButton>
          <KButton class="mr-2" color="secondary" outline>Secondary</KButton>
          <KButton class="mr-2" color="success" outline>Success</KButton>
          <KButton class="mr-2" color="warning" outline>Warning</KButton>
          <KButton class="mr-2" color="danger" outline>Danger</KButton>
          <KButton class="mr-2" color="info" outline>Info</KButton>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Link")),t("p",null,"Este dise\xF1o elimina bordes y fondos, dejando solo el texto. Utilizar este componente en vez de etiquetas ",t("inlineCode",{parentName:"p"},"<a>")," para los enlaces simples."),t(u,{mdxType:"Canvas"},t(s,{name:"Link",argTypes:e(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="white" link>White / Black</KButton>
          <KButton class="mr-2" color="gray" link>Gray</KButton>
          <KButton class="mr-2" color="primary" link>Primary</KButton>
          <KButton class="mr-2" color="secondary" link>Secondary</KButton>
          <KButton class="mr-2" color="success" link>Success</KButton>
          <KButton class="mr-2" color="warning" link>Warning</KButton>
          <KButton class="mr-2" color="danger" link>Danger</KButton>
          <KButton class="mr-2" color="info" link>Info</KButton>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Zoom")),t("p",null,"Activa esta propiedad para dar un efecto ",t("strong",{parentName:"p"},"zoom")," al pasar el mouse por encima del bot\xF3n."),t(u,{mdxType:"Canvas"},t(s,{name:"Zoom",argTypes:e(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:o},template:`
          <KButton zoom>Zoom Button</KButton>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Icon")),t("p",null,"Esta propiedad agrega un \xEDcono al bot\xF3n. El bot\xF3n tendr\xE1 un aspecto cuadrado en el caso de no disponer de un ",t("inlineCode",{parentName:"p"},"<slot>"),". Si se activa ",t("inlineCode",{parentName:"p"},"loading")," el \xEDcono se reemplazar\xE1 por un spinner."),t("p",null,"Puedes encontrar todos los iconos disponibles en ",t("a",{parentName:"p",href:"https://fontawesome.com/search?q="},"FontAwesome")),t(u,{mdxType:"Canvas"},t(s,{name:"Icon",argTypes:e(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="primary" icon="user">Con texto</KButton>
          <KButton class="mr-2" color="primary" icon="user" />
          <KButton color="primary" icon="user" loading>Con texto</KButton>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Uppercase")),t("p",null,"Activa esta propiedad para que el texto del bot\xF3n se muestre en ",t("strong",{parentName:"p"},"may\xFAsculas.")),t(u,{mdxType:"Canvas"},t(s,{name:"Uppercase",argTypes:e(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:o},template:`
          <KButton uppercase>Uppercase</KButton>
        `}))),t("h2",null,t("strong",{parentName:"h2"},"Tama\xF1o")),t("p",null,"Puedes modificar el tama\xF1o del bot\xF3n con la propiedad ",t("inlineCode",{parentName:"p"},"size")),t(u,{mdxType:"Canvas"},t(s,{name:"Size",argTypes:e(o,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:o},template:`
          <div class="flex flex-col gap-4">
            <div class="flex flex-row gap-4 items-center">
              <k-button size="xs">Button XS</k-button>
              <k-button size="sm">Button SM</k-button>
              <k-button size="md">Button MD</k-button>
              <k-button size="lg">Button LG</k-button>
              <k-button size="xl">Button XL</k-button>
            </div>
            <div class="flex flex-row gap-4 items-center">
              <k-button size="xs" icon="user" />
              <k-button size="sm" icon="user" />
              <k-button size="md" icon="user" />
              <k-button size="lg" icon="user" />
              <k-button size="xl" icon="user" />
            </div>
          </div>
        `}))))}r(x,"MDXContent");x.isMDXComponent=!0;const S=B.bind({});S.storyName="Default";S.parameters={storySource:{source:`args => ({
  components: {
    KButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-button v-bind="args">\u{1F984} Button</k-button>'
})`},...n({showPanel:!0})};const K=r(()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="white">White / Black</KButton>
          <KButton class="mr-2" color="gray">Gray</KButton>
          <KButton class="mr-2" color="primary">Primary</KButton>
          <KButton class="mr-2" color="secondary">Secondary</KButton>
          <KButton class="mr-2" color="success">Success</KButton>
          <KButton class="mr-2" color="warning">Warning</KButton>
          <KButton class="mr-2" color="danger">Danger</KButton>
          <KButton class="mr-2" color="info">Info</KButton>
        `}),"color");K.storyName="Color";K.argTypes=e(o,{},!0);K.parameters={storySource:{source:`() => {
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
}`},...n({showPanel:!1})};const d=r(()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="white" neon>White / Black</KButton>
          <KButton class="mr-2" color="gray" neon>Gray</KButton>
          <KButton class="mr-2" color="primary" neon>Primary</KButton>
          <KButton class="mr-2" color="secondary" neon>Secondary</KButton>
          <KButton class="mr-2" color="success" neon>Success</KButton>
          <KButton class="mr-2" color="warning" neon>Warning</KButton>
          <KButton class="mr-2" color="danger" neon>Danger</KButton>
          <KButton class="mr-2" color="info" neon>Info</KButton>
        `}),"neon");d.storyName="Neon";d.argTypes=e(o,{},!0);d.parameters={storySource:{source:`() => {
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
}`},...n({showPanel:!1})};const y=r(()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="white" outline>White / Black</KButton>
          <KButton class="mr-2" color="gray" outline>Gray</KButton>
          <KButton class="mr-2" color="primary" outline>Primary</KButton>
          <KButton class="mr-2" color="secondary" outline>Secondary</KButton>
          <KButton class="mr-2" color="success" outline>Success</KButton>
          <KButton class="mr-2" color="warning" outline>Warning</KButton>
          <KButton class="mr-2" color="danger" outline>Danger</KButton>
          <KButton class="mr-2" color="info" outline>Info</KButton>
        `}),"outline");y.storyName="Outline";y.argTypes=e(o,{},!0);y.parameters={storySource:{source:`() => {
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
}`},...n({showPanel:!1})};const g=r(()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="white" link>White / Black</KButton>
          <KButton class="mr-2" color="gray" link>Gray</KButton>
          <KButton class="mr-2" color="primary" link>Primary</KButton>
          <KButton class="mr-2" color="secondary" link>Secondary</KButton>
          <KButton class="mr-2" color="success" link>Success</KButton>
          <KButton class="mr-2" color="warning" link>Warning</KButton>
          <KButton class="mr-2" color="danger" link>Danger</KButton>
          <KButton class="mr-2" color="info" link>Info</KButton>
        `}),"link");g.storyName="Link";g.argTypes=e(o,{},!0);g.parameters={storySource:{source:`() => {
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
}`},...n({showPanel:!1})};const f=r(()=>({components:{KButton:o},template:`
          <KButton zoom>Zoom Button</KButton>
        `}),"zoom");f.storyName="Zoom";f.argTypes=e(o,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <KButton zoom>Zoom Button</KButton>
        \`
  };
}`},...n({showPanel:!1})};const k=r(()=>({components:{KButton:o},template:`
          <KButton class="mr-2" color="primary" icon="user">Con texto</KButton>
          <KButton class="mr-2" color="primary" icon="user" />
          <KButton color="primary" icon="user" loading>Con texto</KButton>
        `}),"icon");k.storyName="Icon";k.argTypes=e(o,{},!0);k.parameters={storySource:{source:`() => {
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
}`},...n({showPanel:!1})};const b=r(()=>({components:{KButton:o},template:`
          <KButton uppercase>Uppercase</KButton>
        `}),"uppercase");b.storyName="Uppercase";b.argTypes=e(o,{},!0);b.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <KButton uppercase>Uppercase</KButton>
        \`
  };
}`},...n({showPanel:!1})};const h=r(()=>({components:{KButton:o},template:`
          <div class="flex flex-col gap-4">
            <div class="flex flex-row gap-4 items-center">
              <k-button size="xs">Button XS</k-button>
              <k-button size="sm">Button SM</k-button>
              <k-button size="md">Button MD</k-button>
              <k-button size="lg">Button LG</k-button>
              <k-button size="xl">Button XL</k-button>
            </div>
            <div class="flex flex-row gap-4 items-center">
              <k-button size="xs" icon="user" />
              <k-button size="sm" icon="user" />
              <k-button size="md" icon="user" />
              <k-button size="lg" icon="user" />
              <k-button size="xl" icon="user" />
            </div>
          </div>
        `}),"size");h.storyName="Size";h.argTypes=e(o,{},!0);h.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <div class="flex flex-col gap-4">
            <div class="flex flex-row gap-4 items-center">
              <k-button size="xs">Button XS</k-button>
              <k-button size="sm">Button SM</k-button>
              <k-button size="md">Button MD</k-button>
              <k-button size="lg">Button LG</k-button>
              <k-button size="xl">Button XL</k-button>
            </div>
            <div class="flex flex-row gap-4 items-center">
              <k-button size="xs" icon="user" />
              <k-button size="sm" icon="user" />
              <k-button size="md" icon="user" />
              <k-button size="lg" icon="user" />
              <k-button size="xl" icon="user" />
            </div>
          </div>
        \`
  };
}`},...n({showPanel:!1})};const c={title:"General/Button",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:o,argTypes:e(o),includeStories:["defaultStory","color","neon","outline","link","zoom","icon","uppercase","size"]},D={Default:"defaultStory",Color:"color",Neon:"neon",Outline:"outline",Link:"link",Zoom:"zoom",Icon:"icon",Uppercase:"uppercase",Size:"size"};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:()=>t(z,{mdxStoryNameToKey:D,mdxComponentAnnotations:c},t(x,null))};const q=["Template","defaultStory","color","neon","outline","link","zoom","icon","uppercase","size"];export{B as Template,q as __namedExportsOrder,K as color,c as default,S as defaultStory,k as icon,g as link,d as neon,y as outline,h as size,b as uppercase,f as zoom};
//# sourceMappingURL=k-button.story.61295f29.js.map
