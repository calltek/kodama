var y=Object.defineProperty;var n=(r,t)=>y(r,"name",{value:t,configurable:!0});import"./jsx-runtime.4505e3d1.js";import{aL as e,aM as f,aN as g,aO as D,aP as x}from"./Props.6549a464.js";import"./iframe.c2f38fe7.js";import{r as i,a as c,H as b}from"./s-head.afa084ae.js";import{q as T}from"./vue.esm-bundler.a8176fea.js";import{K as a}from"./k-dropzone.eeecaa6f.js";import"./string.97c4e24b.js";import"./es.map.constructor.2b3b7bc4.js";import"./es.number.to-fixed.b3f3db64.js";import"./utils.afff62ba.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function m(){return m=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var p=arguments[t];for(var s in p)Object.prototype.hasOwnProperty.call(p,s)&&(r[s]=p[s])}return r},m.apply(this,arguments)}n(m,"_extends");const d=n(r=>({components:{KDropzone:a},setup(){const t=T(null);return{args:r,image:t}},template:`<k-card><k-dropzone v-bind="args" v-model="image" :accepts="['png', 'jpg', 'pdf']"></k-dropzone></k-card>`}),"Template"),v={Template:d},z="wrapper";function l({components:r,...t}){return e(z,m({},v,t,{components:r,mdxType:"MDXLayout"}),e(D,{title:"Data Entry/Dropzone",component:a,argTypes:c(a),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(b,{image:"https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e47k3mnhrb7yc36brvbtq2tz34x1c5odz3ckvei9tmc&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F5C2}\uFE0F KDropzone"),e("h1",null,"KDropzone"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-dropzone")," puedes tratar la subida de un fichero."),e(g,{name:"Default",parameters:i({showPanel:!0}),mdxType:"Story"},d.bind({})),e(x,{story:"Default",mdxType:"ArgsTable"}))}n(l,"MDXContent");l.isMDXComponent=!0;const u=d.bind({});u.storyName="Default";u.parameters={storySource:{source:`args => ({
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
})`},...i({showPanel:!0})};const o={title:"Data Entry/Dropzone",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:a,argTypes:c(a),includeStories:["defaultStory"]},h={Default:"defaultStory"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(f,{mdxStoryNameToKey:h,mdxComponentAnnotations:o},e(l,null))};const w=["Template","defaultStory"];export{d as Template,w as __namedExportsOrder,o as default,u as defaultStory};
//# sourceMappingURL=k-dropzone.story.5e4cc36a.js.map
