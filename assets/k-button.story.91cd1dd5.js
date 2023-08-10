var h=Object.defineProperty;var r=(s,c)=>h(s,"name",{value:c,configurable:!0});import"./jsx-runtime.5230863f.js";import{aL as n,aM as T,aQ as u,aN as a,aP as w,aO as v}from"./Props.3d43f305.js";import"./iframe.b502473d.js";import{K as t}from"./k-button.f54c47f9.js";import{r as o,a as e,H as P}from"./s-head.5f39cb3b.js";import"./string.404bb550.js";import"./es.map.constructor.26a5de70.js";import"./es.number.to-fixed.3e646e7f.js";import"./vue.esm-bundler.3fc53486.js";import"./utils.e3374581.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function p(){return p=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var m=arguments[c];for(var i in m)Object.prototype.hasOwnProperty.call(m,i)&&(s[i]=m[i])}return s},p.apply(this,arguments)}r(p,"_extends");const B=r(s=>({components:{KButton:t},setup(){return{args:s}},template:'<k-button v-bind="args">\u{1F984} Button</k-button>'}),"Template"),N={Template:B},C="wrapper";function S({components:s,...c}){return n(C,p({},N,c,{components:s,mdxType:"MDXLayout"}),n(v,{title:"General/Button",component:t,argTypes:e(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),n(P,{image:"https://media0.giphy.com/media/hDSy8w6rGHeTe/giphy.gif?cid=ecf05e47d1yojdu59ttft3ykom3decoar5aubq8zin0w9sov&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F6CE} KButton"),n("h1",null,"KButton"),n("p",null,"Con el componente ",n("inlineCode",{parentName:"p"},"k-button")," puedes renderizar botones para ejecutar cualquier acci\xF3n."),n(a,{name:"Default",parameters:o({showPanel:!0}),mdxType:"Story"},B.bind({})),n(w,{story:"Default",mdxType:"ArgsTable"}),n("h2",null,n("strong",{parentName:"h2"},"Color")),n("p",null,"Existen diferentes estilos de colores para los botones. Muchos de ellos se usan para definir una accion en el sistema."),n(u,{mdxType:"Canvas"},n(a,{name:"Color",argTypes:e(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="gray">Gray</KButton>
            <KButton class="mr-2" color="primary">Primary</KButton>
            <KButton class="mr-2" color="secondary">Secondary</KButton>
            <KButton class="mr-2" color="success">Success</KButton>
            <KButton class="mr-2" color="warning">Warning</KButton>
            <KButton class="mr-2" color="danger">Danger</KButton>
            <KButton class="mr-2" color="info">Info</KButton>
          </k-card>
        `}))),n("h2",null,n("strong",{parentName:"h2"},"Neon")),n("p",null,"Este dise\xF1o aclara el color de fondo del bot\xF3n y da un efecto de luz."),n(u,{mdxType:"Canvas"},n(a,{name:"Neon",argTypes:e(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="gray" neon>Gray</KButton>
            <KButton class="mr-2" color="primary" neon>Primary</KButton>
            <KButton class="mr-2" color="secondary" neon>Secondary</KButton>
            <KButton class="mr-2" color="success" neon>Success</KButton>
            <KButton class="mr-2" color="warning" neon>Warning</KButton>
            <KButton class="mr-2" color="danger" neon>Danger</KButton>
            <KButton class="mr-2" color="info" neon>Info</KButton>
          </k-card>
        `}))),n("h2",null,n("strong",{parentName:"h2"},"Outline")),n("p",null,"Este dise\xF1o establece un borde alrededor del bot\xF3n, pero no cambia el color de fondo."),n(u,{mdxType:"Canvas"},n(a,{name:"Outline",argTypes:e(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="gray" outline>Gray</KButton>
            <KButton class="mr-2" color="primary" outline>Primary</KButton>
            <KButton class="mr-2" color="secondary" outline>Secondary</KButton>
            <KButton class="mr-2" color="success" outline>Success</KButton>
            <KButton class="mr-2" color="warning" outline>Warning</KButton>
            <KButton class="mr-2" color="danger" outline>Danger</KButton>
            <KButton class="mr-2" color="info" outline>Info</KButton>
          </k-card>
        `}))),n("h2",null,n("strong",{parentName:"h2"},"Link")),n("p",null,"Este dise\xF1o elimina bordes y fondos, dejando solo el texto. Utilizar este componente en vez de etiquetas ",n("inlineCode",{parentName:"p"},"<a>")," para los enlaces simples."),n(u,{mdxType:"Canvas"},n(a,{name:"Link",argTypes:e(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="gray" link>Gray</KButton>
            <KButton class="mr-2" color="primary" link>Primary</KButton>
            <KButton class="mr-2" color="secondary" link>Secondary</KButton>
            <KButton class="mr-2" color="success" link>Success</KButton>
            <KButton class="mr-2" color="warning" link>Warning</KButton>
            <KButton class="mr-2" color="danger" link>Danger</KButton>
            <KButton class="mr-2" color="info" link>Info</KButton>
          </k-card>
        `}))),n("h2",null,n("strong",{parentName:"h2"},"Zoom")),n("p",null,"Activa esta propiedad para dar un efecto ",n("strong",{parentName:"p"},"zoom")," al pasar el mouse por encima del bot\xF3n."),n(u,{mdxType:"Canvas"},n(a,{name:"Zoom",argTypes:e(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:t},template:`
          <k-card>
            <KButton zoom>Zoom Button</KButton>
          </k-card>
        `}))),n("h2",null,n("strong",{parentName:"h2"},"Icon")),n("p",null,"Esta propiedad agrega un \xEDcono al bot\xF3n. El bot\xF3n tendr\xE1 un aspecto cuadrado en el caso de no disponer de un ",n("inlineCode",{parentName:"p"},"<slot>"),". Si se activa ",n("inlineCode",{parentName:"p"},"loading")," el \xEDcono se reemplazar\xE1 por un spinner."),n("p",null,"Puedes encontrar todos los iconos disponibles en ",n("a",{parentName:"p",href:"https://fontawesome.com/search?q="},"FontAwesome")),n(u,{mdxType:"Canvas"},n(a,{name:"Icon",argTypes:e(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="primary" icon="user">Con texto</KButton>
            <KButton class="mr-2" color="primary" icon="user" />
            <KButton color="primary" icon="user" loading>Con texto</KButton>
          </k-card>
        `}))),n("h2",null,n("strong",{parentName:"h2"},"Uppercase")),n("p",null,"Activa esta propiedad para que el texto del bot\xF3n se muestre en ",n("strong",{parentName:"p"},"may\xFAsculas.")),n(u,{mdxType:"Canvas"},n(a,{name:"Uppercase",argTypes:e(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:t},template:`
          <k-card>
            <KButton uppercase>Uppercase</KButton>
          </k-card>
        `}))),n("h2",null,n("strong",{parentName:"h2"},"Tama\xF1o")),n("p",null,"Puedes modificar el tama\xF1o del bot\xF3n con la propiedad ",n("inlineCode",{parentName:"p"},"size")),n(u,{mdxType:"Canvas"},n(a,{name:"Size",argTypes:e(t,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KButton:t},template:`
          <k-card>
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
          </k-card>
        `}))))}r(S,"MDXContent");S.isMDXComponent=!0;const z=B.bind({});z.storyName="Default";z.parameters={storySource:{source:`args => ({
  components: {
    KButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-button v-bind="args">\u{1F984} Button</k-button>'
})`},...o({showPanel:!0})};const d=r(()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="gray">Gray</KButton>
            <KButton class="mr-2" color="primary">Primary</KButton>
            <KButton class="mr-2" color="secondary">Secondary</KButton>
            <KButton class="mr-2" color="success">Success</KButton>
            <KButton class="mr-2" color="warning">Warning</KButton>
            <KButton class="mr-2" color="danger">Danger</KButton>
            <KButton class="mr-2" color="info">Info</KButton>
          </k-card>
        `}),"color");d.storyName="Color";d.argTypes=e(t,{},!0);d.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <k-card>
            <KButton class="mr-2" color="gray">Gray</KButton>
            <KButton class="mr-2" color="primary">Primary</KButton>
            <KButton class="mr-2" color="secondary">Secondary</KButton>
            <KButton class="mr-2" color="success">Success</KButton>
            <KButton class="mr-2" color="warning">Warning</KButton>
            <KButton class="mr-2" color="danger">Danger</KButton>
            <KButton class="mr-2" color="info">Info</KButton>
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const K=r(()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="gray" neon>Gray</KButton>
            <KButton class="mr-2" color="primary" neon>Primary</KButton>
            <KButton class="mr-2" color="secondary" neon>Secondary</KButton>
            <KButton class="mr-2" color="success" neon>Success</KButton>
            <KButton class="mr-2" color="warning" neon>Warning</KButton>
            <KButton class="mr-2" color="danger" neon>Danger</KButton>
            <KButton class="mr-2" color="info" neon>Info</KButton>
          </k-card>
        `}),"neon");K.storyName="Neon";K.argTypes=e(t,{},!0);K.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <k-card>
            <KButton class="mr-2" color="gray" neon>Gray</KButton>
            <KButton class="mr-2" color="primary" neon>Primary</KButton>
            <KButton class="mr-2" color="secondary" neon>Secondary</KButton>
            <KButton class="mr-2" color="success" neon>Success</KButton>
            <KButton class="mr-2" color="warning" neon>Warning</KButton>
            <KButton class="mr-2" color="danger" neon>Danger</KButton>
            <KButton class="mr-2" color="info" neon>Info</KButton>
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const y=r(()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="gray" outline>Gray</KButton>
            <KButton class="mr-2" color="primary" outline>Primary</KButton>
            <KButton class="mr-2" color="secondary" outline>Secondary</KButton>
            <KButton class="mr-2" color="success" outline>Success</KButton>
            <KButton class="mr-2" color="warning" outline>Warning</KButton>
            <KButton class="mr-2" color="danger" outline>Danger</KButton>
            <KButton class="mr-2" color="info" outline>Info</KButton>
          </k-card>
        `}),"outline");y.storyName="Outline";y.argTypes=e(t,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <k-card>
            <KButton class="mr-2" color="gray" outline>Gray</KButton>
            <KButton class="mr-2" color="primary" outline>Primary</KButton>
            <KButton class="mr-2" color="secondary" outline>Secondary</KButton>
            <KButton class="mr-2" color="success" outline>Success</KButton>
            <KButton class="mr-2" color="warning" outline>Warning</KButton>
            <KButton class="mr-2" color="danger" outline>Danger</KButton>
            <KButton class="mr-2" color="info" outline>Info</KButton>
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const g=r(()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="gray" link>Gray</KButton>
            <KButton class="mr-2" color="primary" link>Primary</KButton>
            <KButton class="mr-2" color="secondary" link>Secondary</KButton>
            <KButton class="mr-2" color="success" link>Success</KButton>
            <KButton class="mr-2" color="warning" link>Warning</KButton>
            <KButton class="mr-2" color="danger" link>Danger</KButton>
            <KButton class="mr-2" color="info" link>Info</KButton>
          </k-card>
        `}),"link");g.storyName="Link";g.argTypes=e(t,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <k-card>
            <KButton class="mr-2" color="gray" link>Gray</KButton>
            <KButton class="mr-2" color="primary" link>Primary</KButton>
            <KButton class="mr-2" color="secondary" link>Secondary</KButton>
            <KButton class="mr-2" color="success" link>Success</KButton>
            <KButton class="mr-2" color="warning" link>Warning</KButton>
            <KButton class="mr-2" color="danger" link>Danger</KButton>
            <KButton class="mr-2" color="info" link>Info</KButton>
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const k=r(()=>({components:{KButton:t},template:`
          <k-card>
            <KButton zoom>Zoom Button</KButton>
          </k-card>
        `}),"zoom");k.storyName="Zoom";k.argTypes=e(t,{},!0);k.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <k-card>
            <KButton zoom>Zoom Button</KButton>
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const f=r(()=>({components:{KButton:t},template:`
          <k-card>
            <KButton class="mr-2" color="primary" icon="user">Con texto</KButton>
            <KButton class="mr-2" color="primary" icon="user" />
            <KButton color="primary" icon="user" loading>Con texto</KButton>
          </k-card>
        `}),"icon");f.storyName="Icon";f.argTypes=e(t,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <k-card>
            <KButton class="mr-2" color="primary" icon="user">Con texto</KButton>
            <KButton class="mr-2" color="primary" icon="user" />
            <KButton color="primary" icon="user" loading>Con texto</KButton>
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const b=r(()=>({components:{KButton:t},template:`
          <k-card>
            <KButton uppercase>Uppercase</KButton>
          </k-card>
        `}),"uppercase");b.storyName="Uppercase";b.argTypes=e(t,{},!0);b.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <k-card>
            <KButton uppercase>Uppercase</KButton>
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const x=r(()=>({components:{KButton:t},template:`
          <k-card>
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
          </k-card>
        `}),"size");x.storyName="Size";x.argTypes=e(t,{},!0);x.parameters={storySource:{source:`() => {
  return {
    components: {
      KButton
    },
    template: \`
          <k-card>
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
          </k-card>
        \`
  };
}`},...o({showPanel:!1})};const l={title:"General/Button",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:e(t),includeStories:["defaultStory","color","neon","outline","link","zoom","icon","uppercase","size"]},D={Default:"defaultStory",Color:"color",Neon:"neon",Outline:"outline",Link:"link",Zoom:"zoom",Icon:"icon",Uppercase:"uppercase",Size:"size"};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:()=>n(T,{mdxStoryNameToKey:D,mdxComponentAnnotations:l},n(S,null))};const q=["Template","defaultStory","color","neon","outline","link","zoom","icon","uppercase","size"];export{B as Template,q as __namedExportsOrder,d as color,l as default,z as defaultStory,f as icon,g as link,K as neon,y as outline,x as size,b as uppercase,k as zoom};
//# sourceMappingURL=k-button.story.91cd1dd5.js.map
