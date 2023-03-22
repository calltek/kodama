var T=Object.defineProperty;var m=(t,a)=>T(t,"name",{value:a,configurable:!0});import"./jsx-runtime.96a42b50.js";import{aL as e,aM as x,aQ as p,aN as i,aP as h,aO as C}from"./Props.8111d5f2.js";import"./iframe.781b7dd4.js";import{K as n}from"./k-confirm.7e3ae8ab.js";import{r as o,a as r,H as N}from"./s-head.26dc392e.js";import"./string.76479a21.js";import"./es.map.constructor.7c2bd8db.js";import"./es.number.to-fixed.d2fd1726.js";import"./vue.esm-bundler.e9a14992.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function u(){return u=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c])}return t},u.apply(this,arguments)}m(u,"_extends");const d=m(t=>({components:{KConfirm:n},setup(){return{args:t}},template:'<k-confirm v-bind="args"><k-button color="danger">Eliminar</k-button></k-confirm>'}),"Template"),S={Template:d},E="wrapper";function b({components:t,...a}){return e(E,u({},S,a,{components:t,mdxType:"MDXLayout"}),e(C,{title:"Feedback/Confirm",component:n,argTypes:r(n),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(N,{image:"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2NiMjc1NTE5OGU4OGRhNDg3NDQyYThmM2ZjZDBjYmZkYzNhODM4NiZjdD1n/o868ySToCqUULk5BnY/giphy.gif",mdxType:"SHead"},"\u2753 KConfirm"),e("h1",null,"KConfirm"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-confirm")," puedes pedir una confirmaci\xF3n previa al usuario al realizar una acci\xF3n importante."),e(i,{name:"Default",parameters:o({showPanel:!0}),mdxType:"Story"},d.bind({})),e(h,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Titulo")),e("p",null,"El estilo ne\xF3n aplica un efecto de iluminaci\xF3n de la alerta bastante bonico."),e(p,{mdxType:"Canvas"},e(i,{name:"Title",argTypes:r(n,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KConfirm:n},template:`
          <k-confirm title="Vas a realizar una locura tremenda \xBFVamos con ello?">
            <k-button color="danger">Eliminar</k-button>
          </k-confirm>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Icono")),e("p",null,"Modifica el icono por defecto del mensaje de confirmac\xF3n."),e(p,{mdxType:"Canvas"},e(i,{name:"Icon",argTypes:r(n,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KConfirm:n},template:`
          <k-confirm icon="user"><k-button color="danger">Eliminar</k-button></k-confirm>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Botones")),e("p",null,"Puedes personalizar el texto de los botones de confirmaci\xF3n con ",e("inlineCode",{parentName:"p"},"okText")," y ",e("inlineCode",{parentName:"p"},"koText"),"."),e(p,{mdxType:"Canvas"},e(i,{name:"Buttons",argTypes:r(n,{},!0),parameters:o({showPanel:!1}),mdxType:"Story"},()=>({components:{KConfirm:n},template:`
          <k-confirm ok-text="OK" ko-text="KO">
            <k-button color="danger">Eliminar</k-button>
          </k-confirm>
        `}))))}m(b,"MDXContent");b.isMDXComponent=!0;const g=d.bind({});g.storyName="Default";g.parameters={storySource:{source:`args => ({
  components: {
    KConfirm
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-confirm v-bind="args"><k-button color="danger">Eliminar</k-button></k-confirm>'
})`},...o({showPanel:!0})};const f=m(()=>({components:{KConfirm:n},template:`
          <k-confirm title="Vas a realizar una locura tremenda \xBFVamos con ello?">
            <k-button color="danger">Eliminar</k-button>
          </k-confirm>
        `}),"title");f.storyName="Title";f.argTypes=r(n,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KConfirm
    },
    template: \`
          <k-confirm title="Vas a realizar una locura tremenda \xBFVamos con ello?">
            <k-button color="danger">Eliminar</k-button>
          </k-confirm>
        \`
  };
}`},...o({showPanel:!1})};const k=m(()=>({components:{KConfirm:n},template:`
          <k-confirm icon="user"><k-button color="danger">Eliminar</k-button></k-confirm>
        `}),"icon");k.storyName="Icon";k.argTypes=r(n,{},!0);k.parameters={storySource:{source:`() => {
  return {
    components: {
      KConfirm
    },
    template: \`
          <k-confirm icon="user"><k-button color="danger">Eliminar</k-button></k-confirm>
        \`
  };
}`},...o({showPanel:!1})};const y=m(()=>({components:{KConfirm:n},template:`
          <k-confirm ok-text="OK" ko-text="KO">
            <k-button color="danger">Eliminar</k-button>
          </k-confirm>
        `}),"buttons");y.storyName="Buttons";y.argTypes=r(n,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KConfirm
    },
    template: \`
          <k-confirm ok-text="OK" ko-text="KO">
            <k-button color="danger">Eliminar</k-button>
          </k-confirm>
        \`
  };
}`},...o({showPanel:!1})};const s={title:"Feedback/Confirm",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:n,argTypes:r(n),includeStories:["defaultStory","title","icon","buttons"]},K={Default:"defaultStory",Title:"title",Icon:"icon",Buttons:"buttons"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>e(x,{mdxStoryNameToKey:K,mdxComponentAnnotations:s},e(b,null))};const I=["Template","defaultStory","title","icon","buttons"];export{d as Template,I as __namedExportsOrder,y as buttons,s as default,g as defaultStory,k as icon,f as title};
//# sourceMappingURL=k-confirm.story.474a05ec.js.map
