var z=Object.defineProperty;var i=(n,o)=>z(n,"name",{value:o,configurable:!0});import"./jsx-runtime.15d6fdfa.js";import{aL as e,aM as x,aQ as u,aN as m,aP as T,aO as M}from"./Props.902802d0.js";import"./iframe.67f2f292.js";import{r as l}from"./vue.esm-bundler.3fc53486.js";import{K as t}from"./k-modal.31911fe8.js";import{r as a,a as r,H as S}from"./s-head.56d5b0a5.js";import"./string.0a840ebe.js";import"./es.map.constructor.38138083.js";import"./es.number.to-fixed.aab29b26.js";import"./index.2134fa8b.js";import"./popper.ab98475b.js";import"./utils.e3374581.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function b(){return b=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(n[c]=s[c])}return n},b.apply(this,arguments)}i(b,"_extends");const k=i(n=>({components:{KModal:t},setup(){const o=l(!1);return{args:n,visible:o}},template:'<k-modal v-bind="args" v-model="visible"><k-skeleton /></k-skeleton></k-modal><k-button @click="visible = true">Open Modal</k-button>'}),"Template"),C={Template:k},P="wrapper";function h({components:n,...o}){return e(P,b({},C,o,{components:n,mdxType:"MDXLayout"}),e(M,{title:"Feedback/Modal",component:t,argTypes:r(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(S,{image:"https://media0.giphy.com/media/dUJxUPSkmZBqE/giphy.gif?cid=ecf05e47bc59lioy7qbcd3hxymndanryn3rqx3dupt1obgzr&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F4AD} KModal"),e("h1",null,"KModal"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-tooltip")," puedes mostrar informaci\xF3n adicional sobre un elemento al pasar por encima o clicar sobre el."),e(m,{name:"Default",parameters:a({showPanel:!0}),args:{title:"Lorem ipsum dolor sit"},mdxType:"Story"},k.bind({})),e(T,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Titulo")),e("p",null,"Puedes definir el titulo del modal con la propiedad ",e("inlineCode",{parentName:"p"},"title")),e(u,{mdxType:"Canvas"},e(m,{name:"Title",argTypes:r(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KModal:t},setup(){return{visible:l(!0)}},template:`
          <k-modal v-model="visible" title="Lorem ipsum dolor sit" :closable="false"><k-skeleton /></k-modal>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Header/Footer")),e("p",null,"Puedes personalizar el ",e("inlineCode",{parentName:"p"},"header")," y ",e("inlineCode",{parentName:"p"},"footer")," del modal con los slots correspondientes. El slot del ",e("inlineCode",{parentName:"p"},"header"),"reemplazar\xE1 la propiedad title."),e(u,{mdxType:"Canvas"},e(m,{name:"Header/Footer",argTypes:r(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KModal:t},setup(){return{visible:l(!0)}},template:`
          <k-modal v-model="visible" :closable="false">
            <template #header>
              <k-title :size="5" bold>Modal Title</k-title>
            </template>
            <k-skeleton />
            <template #footer>
              <div class="flex justify-end gap-4 w-full">
                <k-button color="danger" size="sm">Cancelar</k-button>
                <k-button size="sm">Aceptar</k-button>
              </div>
            </template>
          </k-modal>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Posici\xF3n")),e("p",null,"Puedes modificar la posici\xF3n del modal con ",e("inlineCode",{parentName:"p"},"placement")," aunque rara vez habr\xE1 que hacerlo."),e(u,{mdxType:"Canvas"},e(m,{name:"Placement",argTypes:r(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KModal:t},setup(){const s=l(!0),c=l("center-center");return{visible:s,placement:c}},template:`
          <k-modal v-model="visible" :placement="placement" :closable="false">
            <div class="flex gap-6 flex-wrap justify-center">
              <k-button @click="placement = 'top-center'">top-center</k-button>
              <k-button @click="placement = 'top-left'">top-left</k-button>
              <k-button @click="placement = 'top-right'">top-right</k-button>
              <k-button @click="placement = 'center-center'">center-center</k-button>
              <k-button @click="placement = 'center-left'">center-left</k-button>
              <k-button @click="placement = 'center-right'">center-right</k-button>
              <k-button @click="placement = 'bottom-center'">bottom-center</k-button>
              <k-button @click="placement = 'bottom-left'">bottom-left</k-button>
              <k-button @click="placement = 'bottom-right'">bottom-right</k-button>
            </div>
            <template #footer>
              <b>Current placement:</b> {{placement}}
            </template>
          </k-modal>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Tama\xF1os")),e("p",null,"Puedes modificar el tama\xF1o del modal con ",e("inlineCode",{parentName:"p"},"size"),"."),e(u,{mdxType:"Canvas"},e(m,{name:"Size",argTypes:r(t,{},!0),parameters:a({showPanel:!1}),mdxType:"Story"},()=>({components:{KModal:t},setup(){const s=l(!0),c=l("lg");return{visible:s,size:c}},template:`
          <k-modal v-model="visible" :size="size" :closable="false">
            <div class="flex gap-6 flex-wrap justify-center">
              <k-button @click="size = 'xs'">XS</k-button>
              <k-button @click="size = 'sm'">SM</k-button>
              <k-button @click="size = 'md'">MD</k-button>
              <k-button @click="size = 'lg'">LG</k-button>
              <k-button @click="size = 'xl'">XL</k-button>
            </div>
            <template #footer>
              <b>Current size:</b> {{size}}
            </template>
          </k-modal>
        `}))))}i(h,"MDXContent");h.isMDXComponent=!0;const d=k.bind({});d.storyName="Default";d.args={title:"Lorem ipsum dolor sit"};d.parameters={storySource:{source:`args => ({
  components: {
    KModal
  },
  setup() {
    const visible = ref(false);
    return {
      args,
      visible
    };
  },
  template: '<k-modal v-bind="args" v-model="visible"><k-skeleton /></k-skeleton></k-modal><k-button @click="visible = true">Open Modal</k-button>'
})`},...a({showPanel:!0})};const f=i(()=>({components:{KModal:t},setup(){return{visible:l(!0)}},template:`
          <k-modal v-model="visible" title="Lorem ipsum dolor sit" :closable="false"><k-skeleton /></k-modal>
        `}),"title");f.storyName="Title";f.argTypes=r(t,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KModal
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
          <k-modal v-model="visible" title="Lorem ipsum dolor sit" :closable="false"><k-skeleton /></k-modal>
        \`
  };
}`},...a({showPanel:!1})};const v=i(()=>({components:{KModal:t},setup(){return{visible:l(!0)}},template:`
          <k-modal v-model="visible" :closable="false">
            <template #header>
              <k-title :size="5" bold>Modal Title</k-title>
            </template>
            <k-skeleton />
            <template #footer>
              <div class="flex justify-end gap-4 w-full">
                <k-button color="danger" size="sm">Cancelar</k-button>
                <k-button size="sm">Aceptar</k-button>
              </div>
            </template>
          </k-modal>
        `}),"headerFooter");v.storyName="Header/Footer";v.argTypes=r(t,{},!0);v.parameters={storySource:{source:`() => {
  return {
    components: {
      KModal
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
          <k-modal v-model="visible" :closable="false">
            <template #header>
              <k-title :size="5" bold>Modal Title</k-title>
            </template>
            <k-skeleton />
            <template #footer>
              <div class="flex justify-end gap-4 w-full">
                <k-button color="danger" size="sm">Cancelar</k-button>
                <k-button size="sm">Aceptar</k-button>
              </div>
            </template>
          </k-modal>
        \`
  };
}`},...a({showPanel:!1})};const g=i(()=>({components:{KModal:t},setup(){const n=l(!0),o=l("center-center");return{visible:n,placement:o}},template:`
          <k-modal v-model="visible" :placement="placement" :closable="false">
            <div class="flex gap-6 flex-wrap justify-center">
              <k-button @click="placement = 'top-center'">top-center</k-button>
              <k-button @click="placement = 'top-left'">top-left</k-button>
              <k-button @click="placement = 'top-right'">top-right</k-button>
              <k-button @click="placement = 'center-center'">center-center</k-button>
              <k-button @click="placement = 'center-left'">center-left</k-button>
              <k-button @click="placement = 'center-right'">center-right</k-button>
              <k-button @click="placement = 'bottom-center'">bottom-center</k-button>
              <k-button @click="placement = 'bottom-left'">bottom-left</k-button>
              <k-button @click="placement = 'bottom-right'">bottom-right</k-button>
            </div>
            <template #footer>
              <b>Current placement:</b> {{placement}}
            </template>
          </k-modal>
        `}),"placement");g.storyName="Placement";g.argTypes=r(t,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KModal
    },
    setup() {
      const visible = ref(true);
      const placement = ref('center-center');
      return {
        visible,
        placement
      };
    },
    template: \`
          <k-modal v-model="visible" :placement="placement" :closable="false">
            <div class="flex gap-6 flex-wrap justify-center">
              <k-button @click="placement = 'top-center'">top-center</k-button>
              <k-button @click="placement = 'top-left'">top-left</k-button>
              <k-button @click="placement = 'top-right'">top-right</k-button>
              <k-button @click="placement = 'center-center'">center-center</k-button>
              <k-button @click="placement = 'center-left'">center-left</k-button>
              <k-button @click="placement = 'center-right'">center-right</k-button>
              <k-button @click="placement = 'bottom-center'">bottom-center</k-button>
              <k-button @click="placement = 'bottom-left'">bottom-left</k-button>
              <k-button @click="placement = 'bottom-right'">bottom-right</k-button>
            </div>
            <template #footer>
              <b>Current placement:</b> {{placement}}
            </template>
          </k-modal>
        \`
  };
}`},...a({showPanel:!1})};const y=i(()=>({components:{KModal:t},setup(){const n=l(!0),o=l("lg");return{visible:n,size:o}},template:`
          <k-modal v-model="visible" :size="size" :closable="false">
            <div class="flex gap-6 flex-wrap justify-center">
              <k-button @click="size = 'xs'">XS</k-button>
              <k-button @click="size = 'sm'">SM</k-button>
              <k-button @click="size = 'md'">MD</k-button>
              <k-button @click="size = 'lg'">LG</k-button>
              <k-button @click="size = 'xl'">XL</k-button>
            </div>
            <template #footer>
              <b>Current size:</b> {{size}}
            </template>
          </k-modal>
        `}),"size");y.storyName="Size";y.argTypes=r(t,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KModal
    },
    setup() {
      const visible = ref(true);
      const size = ref('lg');
      return {
        visible,
        size
      };
    },
    template: \`
          <k-modal v-model="visible" :size="size" :closable="false">
            <div class="flex gap-6 flex-wrap justify-center">
              <k-button @click="size = 'xs'">XS</k-button>
              <k-button @click="size = 'sm'">SM</k-button>
              <k-button @click="size = 'md'">MD</k-button>
              <k-button @click="size = 'lg'">LG</k-button>
              <k-button @click="size = 'xl'">XL</k-button>
            </div>
            <template #footer>
              <b>Current size:</b> {{size}}
            </template>
          </k-modal>
        \`
  };
}`},...a({showPanel:!1})};const p={title:"Feedback/Modal",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:r(t),includeStories:["defaultStory","title","headerFooter","placement","size"]},w={Default:"defaultStory",Title:"title","Header/Footer":"headerFooter",Placement:"placement",Size:"size"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>e(x,{mdxStoryNameToKey:w,mdxComponentAnnotations:p},e(h,null))};const U=["Template","defaultStory","title","headerFooter","placement","size"];export{k as Template,U as __namedExportsOrder,p as default,d as defaultStory,v as headerFooter,g as placement,y as size,f as title};
//# sourceMappingURL=k-modal.story.83b508f9.js.map
