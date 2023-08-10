var f=Object.defineProperty;var m=(o,r)=>f(o,"name",{value:r,configurable:!0});import"./jsx-runtime.5230863f.js";import{aL as e,aM as y,aQ as w,aN as u,aP as b,aO as D}from"./Props.3d43f305.js";import"./iframe.b502473d.js";import{r as I}from"./vue.esm-bundler.3fc53486.js";import{a as n}from"./k-dropdown.71f1f518.js";import{r as t,a as d,H}from"./s-head.5f39cb3b.js";import"./string.404bb550.js";import"./es.map.constructor.26a5de70.js";import"./es.number.to-fixed.3e646e7f.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function k(){return k=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(o[l]=a[l])}return o},k.apply(this,arguments)}m(k,"_extends");const s=m(o=>({components:{KDropdown:n},setup(){return{args:o}},template:`
    <k-dropdown v-bind="args">
      <k-button>Dropdown</k-button>
      <template #content>
        <k-dropdown-menu>Item 1</k-dropdown-menu>
        <k-dropdown-menu>Item 2</k-dropdown-menu>
        <k-dropdown-menu @click="click">Item 3</k-dropdown-menu>
        <k-dropdown-submenu>
            <span>Item 4</span>
            <template #content>
              <k-dropdown-menu>Item 5</k-dropdown-menu>
              <k-dropdown-menu>Item 6</k-dropdown-menu>
              <k-dropdown-menu>Item 7</k-dropdown-menu>
            </template>
        </k-dropdown-submenu>
      </template>
    </k-dropdown>`}),"Template"),T={Template:s},x="wrapper";function h({components:o,...r}){return e(x,k({},T,r,{components:o,mdxType:"MDXLayout"}),e(D,{title:"Navigation/Dropdown",component:n,argTypes:d(n),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(H,{image:"https://media1.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif?cid=ecf05e47g15et0uaf8y7xuy046e30du8emzh7a0fzses5mo2&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u2753 KDropdown"),e("h1",null,"KDropdown"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-dropdown")," puedes crear menus flotantes para tus aplicaciones."),e(u,{name:"Default",parameters:t({showPanel:!0}),mdxType:"Story"},s.bind({})),e(b,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Header/Footer")),e("p",null,"Puedes a\xF1adir un ",e("inlineCode",{parentName:"p"},"header")," y un ",e("inlineCode",{parentName:"p"},"footer")," a tu dropdown con los slots correspondientes."),e(w,{mdxType:"Canvas"},e(u,{name:"Header/Footer",argTypes:d(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDropdown:n},template:`
          <k-dropdown>
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Altura")),e("p",null,"Puedes definir una altura fija para el dropdown con ",e("inlineCode",{parentName:"p"},"height")),e(w,{mdxType:"Canvas"},e(u,{name:"Height",argTypes:d(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDropdown:n},template:`
          <k-dropdown :maxHeight="200">
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
              <k-dropdown-menu>Item 4</k-dropdown-menu>
              <k-dropdown-menu>Item 5</k-dropdown-menu>
              <k-dropdown-menu>Item 6</k-dropdown-menu>
              <k-dropdown-menu>Item 7</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Click/Hover")),e("p",null,"Es posible modificar el compartamiento del dropdown para que se habra con ",e("inlineCode",{parentName:"p"},"click"),", ",e("inlineCode",{parentName:"p"},"hover")," o forzandolo con la propiedad ",e("inlineCode",{parentName:"p"},"visible")),e(w,{mdxType:"Canvas"},e(u,{name:"Method",argTypes:d(n,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDropdown:n},setup(){return{visible:I(!1)}},template:`
          <k-dropdown trigger="mouseenter">
            <k-button class="mr-4">Dropdown HOVER</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
          <k-dropdown trigger="click">
            <k-button class="mr-4">Dropdown CLICK</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}))))}m(h,"MDXContent");h.isMDXComponent=!0;const g=s.bind({});g.storyName="Default";g.parameters={storySource:{source:`args => ({
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
        <k-dropdown-menu>Item 1</k-dropdown-menu>
        <k-dropdown-menu>Item 2</k-dropdown-menu>
        <k-dropdown-menu @click="click">Item 3</k-dropdown-menu>
        <k-dropdown-submenu>
            <span>Item 4</span>
            <template #content>
              <k-dropdown-menu>Item 5</k-dropdown-menu>
              <k-dropdown-menu>Item 6</k-dropdown-menu>
              <k-dropdown-menu>Item 7</k-dropdown-menu>
            </template>
        </k-dropdown-submenu>
      </template>
    </k-dropdown>\`
})`},...t({showPanel:!0})};const i=m(()=>({components:{KDropdown:n},template:`
          <k-dropdown>
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}),"headerFooter");i.storyName="Header/Footer";i.argTypes=d(n,{},!0);i.parameters={storySource:{source:`() => {
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
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        \`
  };
}`},...t({showPanel:!1})};const c=m(()=>({components:{KDropdown:n},template:`
          <k-dropdown :maxHeight="200">
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
              <k-dropdown-menu>Item 4</k-dropdown-menu>
              <k-dropdown-menu>Item 5</k-dropdown-menu>
              <k-dropdown-menu>Item 6</k-dropdown-menu>
              <k-dropdown-menu>Item 7</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}),"height");c.storyName="Height";c.argTypes=d(n,{},!0);c.parameters={storySource:{source:`() => {
  return {
    components: {
      KDropdown
    },
    template: \`
          <k-dropdown :maxHeight="200">
            <k-button>Dropdown</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
              <k-dropdown-menu>Item 4</k-dropdown-menu>
              <k-dropdown-menu>Item 5</k-dropdown-menu>
              <k-dropdown-menu>Item 6</k-dropdown-menu>
              <k-dropdown-menu>Item 7</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        \`
  };
}`},...t({showPanel:!1})};const v=m(()=>({components:{KDropdown:n},setup(){return{visible:I(!1)}},template:`
          <k-dropdown trigger="mouseenter">
            <k-button class="mr-4">Dropdown HOVER</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
          <k-dropdown trigger="click">
            <k-button class="mr-4">Dropdown CLICK</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        `}),"method");v.storyName="Method";v.argTypes=d(n,{},!0);v.parameters={storySource:{source:`() => {
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
          <k-dropdown trigger="mouseenter">
            <k-button class="mr-4">Dropdown HOVER</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
          <k-dropdown trigger="click">
            <k-button class="mr-4">Dropdown CLICK</k-button>
            <template #header>
              <div>Header</div>
            </template>
            <template #content>
              <k-dropdown-menu>Item 1</k-dropdown-menu>
              <k-dropdown-menu>Item 2</k-dropdown-menu>
              <k-dropdown-menu>Item 3</k-dropdown-menu>
            </template>
            <template #footer>
              <div>Footer</div>
            </template>
          </k-dropdown>
        \`
  };
}`},...t({showPanel:!1})};const p={title:"Navigation/Dropdown",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:n,argTypes:d(n),includeStories:["defaultStory","headerFooter","height","method"]},C={Default:"defaultStory","Header/Footer":"headerFooter",Height:"height",Method:"method"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>e(y,{mdxStoryNameToKey:C,mdxComponentAnnotations:p},e(h,null))};const X=["Template","defaultStory","headerFooter","height","method"];export{s as Template,X as __namedExportsOrder,p as default,g as defaultStory,i as headerFooter,c as height,v as method};
//# sourceMappingURL=k-dropdown.story.7772b2ab.js.map
