var f=Object.defineProperty;var p=(o,r)=>f(o,"name",{value:r,configurable:!0});import"./jsx-runtime.16ab2025.js";import{aL as e,aM as y,aQ as k,aN as i,aP as g,aO as D}from"./Props.30841ac8.js";import"./iframe.a35a8173.js";import{q as I}from"./vue.esm-bundler.40c2ec29.js";import{K as t}from"./k-dropdown.d4b8b004.js";import{r as n,a as d,H}from"./s-head.d1492433.js";import"./string.7d939798.js";import"./es.map.constructor.30452445.js";import"./es.number.to-fixed.2dd6f236.js";import"./utils.afff62ba.js";import"./index.7fcb4b4b.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function w(){return w=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(o[l]=a[l])}return o},w.apply(this,arguments)}p(w,"_extends");const s=p(o=>({components:{KDropdown:t},setup(){return{args:o}},template:`
    <k-dropdown v-bind="args">
      <k-button>Dropdown</k-button>
      <template #content>
        <k-dropdown-item>Item 1</k-dropdown-item>
        <k-dropdown-item>Item 2</k-dropdown-item>
        <k-dropdown-item>Item 3</k-dropdown-item>
        <k-dropdown-item>
          <k-dropdown hover placement="right-start" submenu>
            <span>Item 4</span>
            <template #content >
              <k-dropdown-item>Item 4</k-dropdown-item>
              <k-dropdown-item>Item 5</k-dropdown-item>
              <k-dropdown-item>Item 6</k-dropdown-item>
            </template>
          </k-dropdown>
        </k-dropdown-item>
      </template>
    </k-dropdown>`}),"Template"),T={Template:s},C="wrapper";function h({components:o,...r}){return e(C,w({},T,r,{components:o,mdxType:"MDXLayout"}),e(D,{title:"Navigation/Dropdown",component:t,argTypes:d(t),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(H,{image:"https://media1.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif?cid=ecf05e47g15et0uaf8y7xuy046e30du8emzh7a0fzses5mo2&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2753 KDropdown"),e("h1",null,"KDropdown"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-dropdown")," puedes crear menus flotantes para tus aplicaciones."),e(i,{name:"Default",parameters:n({showPanel:!0}),mdxType:"Story"},s.bind({})),e(g,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Header/Footer")),e("p",null,"Puedes a\xF1adir un ",e("inlineCode",{parentName:"p"},"header")," y un ",e("inlineCode",{parentName:"p"},"footer")," a tu dropdown con los slots correspondientes."),e(k,{mdxType:"Canvas"},e(i,{name:"Header/Footer",argTypes:d(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KDropdown:t},template:`
          <k-dropdown>
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Altura")),e("p",null,"Puedes definir una altura fija para el dropdown con ",e("inlineCode",{parentName:"p"},"height")),e(k,{mdxType:"Canvas"},e(i,{name:"Height",argTypes:d(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KDropdown:t},template:`
          <k-dropdown height="200">
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
              <k-dropdown-item>Item 4</k-dropdown-item>
              <k-dropdown-item>Item 5</k-dropdown-item>
              <k-dropdown-item>Item 6</k-dropdown-item>
              <k-dropdown-item>Item 7</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Click/Hover")),e("p",null,"Es posible modificar el compartamiento del dropdown para que se habra con ",e("inlineCode",{parentName:"p"},"click"),", ",e("inlineCode",{parentName:"p"},"hover")," o forzandolo con la propiedad ",e("inlineCode",{parentName:"p"},"visible")),e(k,{mdxType:"Canvas"},e(i,{name:"Method",argTypes:d(t,{},!0),parameters:n({showPanel:!1}),mdxType:"Story"},()=>({components:{KDropdown:t},setup(){return{visible:I(!1)}},template:`
          <k-dropdown hover>
            <k-button class="mr-4">Dropdown HOVER</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
          <k-dropdown click>
            <k-button class="mr-4">Dropdown CLICK</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
          <k-dropdown :visible="visible">
            <k-button @click="visible = !visible">VISIBLE: {{visible}}</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}))))}p(h,"MDXContent");h.isMDXComponent=!0;const b=s.bind({});b.storyName="Default";b.parameters={storySource:{source:`args => ({
  components: {
    KDropdown
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <k-dropdown v-bind="args">
      <k-button>Dropdown</k-button>
      <template #content>
        <k-dropdown-item>Item 1</k-dropdown-item>
        <k-dropdown-item>Item 2</k-dropdown-item>
        <k-dropdown-item>Item 3</k-dropdown-item>
        <k-dropdown-item>
          <k-dropdown hover placement="right-start" submenu>
            <span>Item 4</span>
            <template #content >
              <k-dropdown-item>Item 4</k-dropdown-item>
              <k-dropdown-item>Item 5</k-dropdown-item>
              <k-dropdown-item>Item 6</k-dropdown-item>
            </template>
          </k-dropdown>
        </k-dropdown-item>
      </template>
    </k-dropdown>\`
})`},...n({showPanel:!0})};const u=p(()=>({components:{KDropdown:t},template:`
          <k-dropdown>
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}),"headerFooter");u.storyName="Header/Footer";u.argTypes=d(t,{},!0);u.parameters={storySource:{source:`() => {
  return {
    components: {
      KDropdown
    },
    template: \`
          <k-dropdown>
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        \`
  };
}`},...n({showPanel:!1})};const c=p(()=>({components:{KDropdown:t},template:`
          <k-dropdown height="200">
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
              <k-dropdown-item>Item 4</k-dropdown-item>
              <k-dropdown-item>Item 5</k-dropdown-item>
              <k-dropdown-item>Item 6</k-dropdown-item>
              <k-dropdown-item>Item 7</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}),"height");c.storyName="Height";c.argTypes=d(t,{},!0);c.parameters={storySource:{source:`() => {
  return {
    components: {
      KDropdown
    },
    template: \`
          <k-dropdown height="200">
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
              <k-dropdown-item>Item 4</k-dropdown-item>
              <k-dropdown-item>Item 5</k-dropdown-item>
              <k-dropdown-item>Item 6</k-dropdown-item>
              <k-dropdown-item>Item 7</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        \`
  };
}`},...n({showPanel:!1})};const v=p(()=>({components:{KDropdown:t},setup(){return{visible:I(!1)}},template:`
          <k-dropdown hover>
            <k-button class="mr-4">Dropdown HOVER</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
          <k-dropdown click>
            <k-button class="mr-4">Dropdown CLICK</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
          <k-dropdown :visible="visible">
            <k-button @click="visible = !visible">VISIBLE: {{visible}}</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}),"method");v.storyName="Method";v.argTypes=d(t,{},!0);v.parameters={storySource:{source:`() => {
  return {
    components: {
      KDropdown
    },
    setup() {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
          <k-dropdown hover>
            <k-button class="mr-4">Dropdown HOVER</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
          <k-dropdown click>
            <k-button class="mr-4">Dropdown CLICK</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
          <k-dropdown :visible="visible">
            <k-button @click="visible = !visible">VISIBLE: {{visible}}</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-item>Item 1</k-dropdown-item>
              <k-dropdown-item>Item 2</k-dropdown-item>
              <k-dropdown-item>Item 3</k-dropdown-item>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        \`
  };
}`},...n({showPanel:!1})};const m={title:"Navigation/Dropdown",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:t,argTypes:d(t),includeStories:["defaultStory","headerFooter","height","method"]},F={Default:"defaultStory","Header/Footer":"headerFooter",Height:"height",Method:"method"};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:()=>e(y,{mdxStoryNameToKey:F,mdxComponentAnnotations:m},e(h,null))};const z=["Template","defaultStory","headerFooter","height","method"];export{s as Template,z as __namedExportsOrder,m as default,b as defaultStory,u as headerFooter,c as height,v as method};
//# sourceMappingURL=k-dropdown.story.6f229fcf.js.map
