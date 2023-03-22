var b=Object.defineProperty;var n=(t,a)=>b(t,"name",{value:a,configurable:!0});import"./jsx-runtime.96a42b50.js";import{aL as e,aM as D,aQ as k,aN as g,aP as v,aO as z}from"./Props.8111d5f2.js";import"./iframe.781b7dd4.js";import{r as p,a as d,H as h}from"./s-head.26dc392e.js";import{q as l}from"./vue.esm-bundler.e9a14992.js";import{K as r}from"./k-dropzone.6c46242f.js";import"./string.76479a21.js";import"./es.map.constructor.7c2bd8db.js";import"./es.number.to-fixed.d2fd1726.js";import"./utils.afff62ba.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function i(){return i=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&(t[m]=s[m])}return t},i.apply(this,arguments)}n(i,"_extends");const c=n(t=>({components:{KDropzone:r},setup(){const a=l(null);return{args:t,image:a}},template:`<k-card><k-dropzone v-bind="args" v-model="image" :accepts="['png', 'jpg', 'pdf']"></k-dropzone></k-card>`}),"Template"),T={Template:c},x="wrapper";function y({components:t,...a}){return e(x,i({},T,a,{components:t,mdxType:"MDXLayout"}),e(z,{title:"Data Entry/Dropzone",component:r,argTypes:d(r),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(h,{image:"https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e47k3mnhrb7yc36brvbtq2tz34x1c5odz3ckvei9tmc&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F5C2}\uFE0F KDropzone"),e("h1",null,"KDropzone"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-dropzone")," puedes tratar la subida de un fichero."),e(g,{name:"Default",parameters:p({showPanel:!0}),mdxType:"Story"},c.bind({})),e(v,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Deshabilitado")),e("p",null,"Puedes deshabilitar el componente con la propiedad ",e("inlineCode",{parentName:"p"},"disabled"),"."),e(k,{mdxType:"Canvas"},e(g,{name:"Disabled",argTypes:d(r,{},!0),parameters:p({showPanel:!1}),mdxType:"Story"},()=>({components:{KDropzone:r},setup(){return{image:l()}},template:`
          <k-card><k-dropzone v-bind="args" v-model="image" :accepts="['png', 'jpg', 'pdf']" :disabled="true"></k-dropzone></k-card>
        `}))))}n(y,"MDXContent");y.isMDXComponent=!0;const f=c.bind({});f.storyName="Default";f.parameters={storySource:{source:`args => ({
  components: {
    KDropzone
  },
  setup() {
    const image = ref(null);
    return {
      args,
      image
    };
  },
  template: '<k-card><k-dropzone v-bind="args" v-model="image" :accepts="[\\'png\\', \\'jpg\\', \\'pdf\\']"></k-dropzone></k-card>'
})`},...p({showPanel:!0})};const u=n(()=>({components:{KDropzone:r},setup(){return{image:l()}},template:`
          <k-card><k-dropzone v-bind="args" v-model="image" :accepts="['png', 'jpg', 'pdf']" :disabled="true"></k-dropzone></k-card>
        `}),"disabled");u.storyName="Disabled";u.argTypes=d(r,{},!0);u.parameters={storySource:{source:`() => {
  return {
    components: {
      KDropzone
    },
    setup() {
      const image = ref();
      return {
        image
      };
    },
    template: \`
          <k-card><k-dropzone v-bind="args" v-model="image" :accepts="[\\'png\\', \\'jpg\\', \\'pdf\\']" :disabled="true"></k-dropzone></k-card>
        \`
  };
}`},...p({showPanel:!1})};const o={title:"Data Entry/Dropzone",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:r,argTypes:d(r),includeStories:["defaultStory","disabled"]},S={Default:"defaultStory",Disabled:"disabled"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(D,{mdxStoryNameToKey:S,mdxComponentAnnotations:o},e(y,null))};const L=["Template","defaultStory","disabled"];export{c as Template,L as __namedExportsOrder,o as default,f as defaultStory,u as disabled};
//# sourceMappingURL=k-dropzone.story.6aafa0f2.js.map
