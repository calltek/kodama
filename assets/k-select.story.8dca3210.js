var O=Object.defineProperty;var s=(n,t)=>O(n,"name",{value:t,configurable:!0});import"./jsx-runtime.e5e06015.js";import{aL as e,aM as y,aQ as f,aN as d,aP as g,aO as x}from"./Props.f1e238ee.js";import"./iframe.cf561a81.js";import{K as o}from"./k-select.609c08cb.js";import{r as c,a as p,H as z}from"./s-head.61c6f3cf.js";import{q as S}from"./vue.esm-bundler.e9a14992.js";import"./string.af0ee2d9.js";import"./es.map.constructor.08645dd0.js";import"./es.number.to-fixed.8ddda7dc.js";import"./utils.e3374581.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function r(){return r=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n},r.apply(this,arguments)}s(r,"_extends");const k=s(n=>({components:{KSelect:o},setup(){const t=S(2);return{args:n,model:t}},template:`
      <k-select v-model="model">
        <k-select-option :value="1">Opci\xF3n 1</k-select-option>
        <k-select-option :value="2">Opci\xF3n 2</k-select-option>
        <k-select-option :value="3">Opci\xF3n 3</k-select-option>
      </k-select>
    `}),"Template"),h={Template:k},T="wrapper";function v({components:n,...t}){return e(T,r({},h,t,{components:n,mdxType:"MDXLayout"}),e(x,{title:"Data Entry/Select",component:o,argTypes:p(o),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(z,{image:"https://media2.giphy.com/media/SwImQhtiNA7io/giphy.gif?cid=ecf05e47z82yq5bzlbtacqrphv0r4tr1wtbmnhzeakchqa9a&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F433} KSelect"),e("h1",null,"KInput"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-select")," dispondr\xE1s de un selector de toda la vida pero vitaminado."),e(d,{name:"Default",parameters:c({showPanel:!0}),args:{placeholder:"Placeholder"},mdxType:"Story"},k.bind({})),e(g,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Tama\xF1os")),e("p",null,"Puedes cambiar el tama\xF1o del selector con la propiedad ",e("inlineCode",{parentName:"p"},"size")),e(f,{mdxType:"Canvas"},e(d,{name:"Sizes",argTypes:p(o,{},!0),parameters:c({showPanel:!1}),mdxType:"Story"},()=>({components:{KSelect:o},template:`
          <k-card>
            <div class="flex flex-row gap-6">
              <k-select size="xs">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
              <k-select size="sm">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
               <k-select size="md">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
               <k-select size="lg">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
            </div>
          </k-card>
        `}))))}s(v,"MDXContent");v.isMDXComponent=!0;const m=k.bind({});m.storyName="Default";m.args={placeholder:"Placeholder"};m.parameters={storySource:{source:`args => ({
  components: {
    KSelect
  },
  setup() {
    const model = ref(2);
    return {
      args,
      model
    };
  },
  template: \`
      <k-select v-model="model">
        <k-select-option :value="1">Opci\xF3n 1</k-select-option>
        <k-select-option :value="2">Opci\xF3n 2</k-select-option>
        <k-select-option :value="3">Opci\xF3n 3</k-select-option>
      </k-select>
    \`
})`},...c({showPanel:!0})};const u=s(()=>({components:{KSelect:o},template:`
          <k-card>
            <div class="flex flex-row gap-6">
              <k-select size="xs">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
              <k-select size="sm">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
               <k-select size="md">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
               <k-select size="lg">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
            </div>
          </k-card>
        `}),"sizes");u.storyName="Sizes";u.argTypes=p(o,{},!0);u.parameters={storySource:{source:`() => {
  return {
    components: {
      KSelect
    },
    template: \`
          <k-card>
            <div class="flex flex-row gap-6">
              <k-select size="xs">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
              <k-select size="sm">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
               <k-select size="md">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
               <k-select size="lg">
                <k-select-option value="1">Opci\xF3n 1</k-select-option>
                <k-select-option value="2">Opci\xF3n 2</k-select-option>
                <k-select-option value="3">Opci\xF3n 3</k-select-option>
              </k-select>
            </div>
          </k-card>
        \`
  };
}`},...c({showPanel:!1})};const l={title:"Data Entry/Select",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:o,argTypes:p(o),includeStories:["defaultStory","sizes"]},D={Default:"defaultStory",Sizes:"sizes"};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:()=>e(y,{mdxStoryNameToKey:D,mdxComponentAnnotations:l},e(v,null))};const H=["Template","defaultStory","sizes"];export{k as Template,H as __namedExportsOrder,l as default,m as defaultStory,u as sizes};
//# sourceMappingURL=k-select.story.8dca3210.js.map
