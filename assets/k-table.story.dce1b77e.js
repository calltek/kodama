var f=Object.defineProperty;var l=(a,t)=>f(a,"name",{value:t,configurable:!0});import"./jsx-runtime.16ab2025.js";import{aL as e,aM as x,aN as y,aO as g}from"./Props.30841ac8.js";import"./iframe.a35a8173.js";import{K as i}from"./k-table.bb0dd514.js";import{r as d,a as c,H as h}from"./s-head.d1492433.js";import"./string.7d939798.js";import"./es.map.constructor.30452445.js";import"./es.number.to-fixed.2dd6f236.js";import"./vue.esm-bundler.40c2ec29.js";import"./query.afc86d46.js";import"./index.c3db7e2f.js";import"./chance.4dc9e851.js";import"./+plugin-vue+export-helper.ed6a1c48.js";import"./medium-zoom.esm.33ca94a8.js";import"./k-badge.bf8b5d05.js";import"./utils.afff62ba.js";const b=[{title:"ID",index:"id",order:!0,search:!0,align:"left",width:"100px",filter:{type:"number"}},{title:"Fecha",index:"date",order:!0,search:!1,align:"left",filter:{type:"date",min:"2020-01-01",max:"2050-01-01"},makeup:"date"},{title:"Cliente",index:"client_name",order:!1,search:!0,align:"left",slot:"client",filter:{type:"text"}},{title:"Tel\xE9fono",index:"client_phone",order:!1,search:!0,align:"left"},{title:"Transportista",index:"carrier",order:!0,search:!1,align:"left",filter:{type:"select",options:[{title:"Env\xEDo a domicilio",value:0,icon:"far fa-truck-fast"},{title:"Env\xEDo a centro",value:1,icon:"far fa-building-flag"}]}},{title:"Estado",index:"status",order:!0,search:!1,align:"center",filter:{type:"select",options:[{title:"Pagado",value:0},{title:"No pagado",value:1}]}},{title:"Importe",index:"price",order:!0,search:!1,align:"right",filter:{type:"range",min:0,max:40},makeup:"price"}],v=[{id:1,date:"2022-05-22 05:46:42",client_name:"Benedicte Vanden Berghe",client_phone:"666 123 000",carrier:0,status:1,price:18.9},{id:2,date:"2022-06-22 01:46:42",client_name:"Jhon Doe",client_phone:"666 123 000",carrier:0,status:1,price:38.9},{id:3,date:"2022-07-22 02:46:42",client_name:"Ava Din Yang",client_phone:"666 123 000",carrier:1,status:0,price:28.9},{id:4,date:"2022-08-21 03:46:42",client_name:"Jeremiah Lacalle",client_phone:"666 123 000",carrier:0,status:0,price:38.9},{id:5,date:"2022-09-22 09:46:42",client_name:"Pedro Morate",client_phone:"666 123 000",carrier:1,status:1,price:88.9}];function s(){return s=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(a[o]=n[o])}return a},s.apply(this,arguments)}l(s,"_extends");const p=l(a=>({components:{KTable:i},setup(){const t={index:"id",store:"table_example",columns:b,data:v,total:10,requiredFilters:{shop:{$in:"1,4,7,8"}},cards:!1},n=[];return{props:{...a,...t},selected:n}},template:`
        <div class="w-full">
            <k-table v-bind="props" :selected="selected">
                <template #client="{value}">
                    {{value}}
                </template>
                <template #card="{row}">
                    <div class="card mb-2">
                        {{ row.client_name }}
                    </div>
                </template>
            </k-table>
        </div>
    `}),"Template"),D={Template:p},_="wrapper";function m({components:a,...t}){return e(_,s({},D,t,{components:a,mdxType:"MDXLayout"}),e(g,{title:"Data Display/Table \u{1F31F}",component:i,argTypes:c(i),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(h,{image:"https://media0.giphy.com/media/sRFEa8lbeC7zbcIZZR/giphy.gif?cid=ecf05e47jh6eiz069xt4uoftz1vd8b3a7o84onzel84em9hf&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F4CB} KTable"),e("h1",null,"KTable"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-table")," puedes renderizar una tabla completa con paginaci\xF3n, ordenamiento, b\xFAsqueda y filtros predefinidos para los datos."),e("p",null,"Las columnas pueden ser inteligentes o personalizadas, y se pueden modificar tantos sus datos como su estilo."),e("p",null,"Existe una modo ",e("inlineCode",{parentName:"p"},"mobile")," que permite dise\xF1ar la vista de cada registro de forma manual para mas comodidad."),e(y,{name:"Default",parameters:d({showPanel:!0}),mdxType:"Story"},p.bind({})))}l(m,"MDXContent");m.isMDXComponent=!0;const u=p.bind({});u.storyName="Default";u.parameters={storySource:{source:`args => ({
  components: {
    KTable
  },
  setup() {
    const fixedProps = {
      index: 'id',
      store: 'table_example',
      columns: exampleColumns,
      data: exampleData,
      total: 10,
      requiredFilters: {
        shop: {
          $in: '1,4,7,8'
        }
      },
      cards: false
    };
    const selected = [];
    const props = {
      ...args,
      ...fixedProps
    };
    return {
      props,
      selected
    };
  },
  template: \`
        <div class="w-full">
            <k-table v-bind="props" :selected="selected">
                <template #client="{value}">
                    {{value}}
                </template>
                <template #card="{row}">
                    <div class="card mb-2">
                        {{ row.client_name }}
                    </div>
                </template>
            </k-table>
        </div>
    \`
})`},...d({showPanel:!0})};const r={title:"Data Display/Table \u{1F31F}",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:i,argTypes:c(i),includeStories:["defaultStory"]},T={Default:"defaultStory"};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>e(x,{mdxStoryNameToKey:T,mdxComponentAnnotations:r},e(m,null))};const B=["Template","defaultStory"];export{p as Template,B as __namedExportsOrder,r as default,u as defaultStory};
//# sourceMappingURL=k-table.story.dce1b77e.js.map
