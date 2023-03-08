var f=Object.defineProperty;var o=(t,a)=>f(t,"name",{value:a,configurable:!0});import"./jsx-runtime.aedc7a54.js";import{aL as e,aM as x,aO as y,aQ as g}from"./Props.d53d4c1b.js";import"./iframe.74a013c6.js";import{K as r}from"./k-table.aa064a1f.js";import{r as d,a as m,H as h}from"./s-head.19ea8db1.js";import"./string.3efe2e56.js";import"./es.map.constructor.6855a0be.js";import"./es.number.to-fixed.c796804d.js";import"./vue.esm-bundler.5c09a9bb.js";import"./query.d5e34601.js";import"./index.a4ce1e28.js";import"./chance.4dc9e851.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./medium-zoom.esm.33ca94a8.js";import"./k-badge.99ee7de9.js";import"./utils.afff62ba.js";const b=[{title:"ID",index:"id",order:!0,search:!0,align:"left",width:"100px",filter:{type:"number"}},{title:"Fecha",index:"date",order:!0,search:!1,align:"left",filter:{type:"date",min:"2020-01-01",max:"2050-01-01"},makeup:"date"},{title:"Cliente",index:"client_name",order:!1,search:!0,align:"left",slot:"client",filter:{type:"text"}},{title:"Tel\xE9fono",index:"client_phone",order:!1,search:!0,align:"left"},{title:"Transportista",index:"carrier",order:!0,search:!1,align:"left",filter:{type:"select",options:[{title:"Env\xEDo a domicilio",value:0,icon:"far fa-truck-fast"},{title:"Env\xEDo a centro",value:1,icon:"far fa-building-flag"}]}},{title:"Estado",index:"status",order:!0,search:!1,align:"center",filter:{type:"select",options:[{title:"Pagado",value:0},{title:"No pagado",value:1}]}},{title:"Importe",index:"price",order:!0,search:!1,align:"right",filter:{type:"range",min:0,max:40},makeup:"price"}],v=[{id:1,date:"2022-05-22 05:46:42",client_name:"Benedicte Vanden Berghe",client_phone:"666 123 000",carrier:0,status:1,price:18.9},{id:2,date:"2022-06-22 01:46:42",client_name:"Jhon Doe",client_phone:"666 123 000",carrier:0,status:1,price:38.9},{id:3,date:"2022-07-22 02:46:42",client_name:"Ava Din Yang",client_phone:"666 123 000",carrier:1,status:0,price:28.9},{id:4,date:"2022-08-21 03:46:42",client_name:"Jeremiah Lacalle",client_phone:"666 123 000",carrier:0,status:0,price:38.9},{id:5,date:"2022-09-22 09:46:42",client_name:"Pedro Morate",client_phone:"666 123 000",carrier:1,status:1,price:88.9}];function s(){return s=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},s.apply(this,arguments)}o(s,"_extends");const p=o(t=>({components:{KTable:r},setup(){return{props:{...t,...{index:"id",store:"table_example",columns:b,data:v,total:10,requiredFilters:{shop:{$in:"1,4,7,8"}},cards:!1}}}},template:`
        <div class="w-full">
            <k-table v-bind="props">
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
    `}),"Template"),D={Template:p},_="wrapper";function c({components:t,...a}){return e(_,s({},D,a,{components:t,mdxType:"MDXLayout"}),e(g,{title:"Data Display/Table \u{1F31F}",component:r,argTypes:m(r),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(h,{image:"https://media0.giphy.com/media/sRFEa8lbeC7zbcIZZR/giphy.gif?cid=ecf05e47jh6eiz069xt4uoftz1vd8b3a7o84onzel84em9hf&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F4CB} KTable"),e("h1",null,"KTable"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-table")," puedes renderizar una tabla completa con paginaci\xF3n, ordenamiento, b\xFAsqueda y filtros predefinidos para los datos."),e("p",null,"Las columnas pueden ser inteligentes o personalizadas, y se pueden modificar tantos sus datos como su estilo."),e("p",null,"Existe una modo ",e("inlineCode",{parentName:"p"},"mobile")," que permite dise\xF1ar la vista de cada registro de forma manual para mas comodidad."),e(y,{name:"Default",parameters:d({showPanel:!0}),mdxType:"Story"},p.bind({})))}o(c,"MDXContent");c.isMDXComponent=!0;const u=p.bind({});u.storyName="Default";u.parameters={storySource:{source:`args => ({
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
    const props = {
      ...args,
      ...fixedProps
    };
    return {
      props
    };
  },
  template: \`
        <div class="w-full">
            <k-table v-bind="props">
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
})`},...d({showPanel:!0})};const n={title:"Data Display/Table \u{1F31F}",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:r,argTypes:m(r),includeStories:["defaultStory"]},T={Default:"defaultStory"};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(x,{mdxStoryNameToKey:T,mdxComponentAnnotations:n},e(c,null))};const B=["Template","defaultStory"];export{p as Template,B as __namedExportsOrder,n as default,u as defaultStory};
//# sourceMappingURL=k-table.story.49a7e188.js.map
