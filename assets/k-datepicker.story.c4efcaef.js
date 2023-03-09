var N=Object.defineProperty;var i=(n,l)=>N(n,"name",{value:l,configurable:!0});import"./jsx-runtime.c3971440.js";import{aL as e,aM as v,aN as p,aO as d,aP as z,aQ as P}from"./Props.6869cc77.js";import"./iframe.cc1b565c.js";import{r as t,a as r,H as w}from"./s-head.a4dc320c.js";import{p as s}from"./vue.esm-bundler.5c09a9bb.js";import{K as a}from"./k-datepicker.b3033c98.js";import"./string.bc4ce337.js";import"./es.map.constructor.976a65f8.js";import"./es.number.to-fixed.50bac931.js";import"./index.cb7c6d4d.js";import"./chance.4dc9e851.js";import"./+plugin-vue+export-helper.ed6a1c48.js";function m(){return m=Object.assign?Object.assign.bind():function(n){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var k in c)Object.prototype.hasOwnProperty.call(c,k)&&(n[k]=c[k])}return n},m.apply(this,arguments)}i(m,"_extends");const u=i(n=>({components:{KDatepicker:a},setup(){return{args:n}},template:'<k-card><k-datepicker v-bind="args"></k-datepicker></k-card>'}),"Template"),j={Template:u},R="wrapper";function C({components:n,...l}){return e(R,m({},j,l,{components:n,mdxType:"MDXLayout"}),e(P,{title:"Data Entry/Datepicker",component:a,argTypes:r(a),decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],mdxType:"Meta"}),e(w,{image:"https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e47k3mnhrb7yc36brvbtq2tz34x1c5odz3ckvei9tmc&rid=giphy.gif&ct=g",mdxType:"SHead"},"\u{1F4C6} KDatepicker"),e("h1",null,"KDatepicker"),e("p",null,"Con el componente ",e("inlineCode",{parentName:"p"},"k-datepicker")," puedes seleccionar una fecha o un rango de ellas."),e(d,{name:"Default",parameters:t({showPanel:!0}),mdxType:"Story"},u.bind({})),e(z,{story:"Default",mdxType:"ArgsTable"}),e("h2",null,e("strong",{parentName:"h2"},"Hora")),e("p",null,"Si necesitas especificar una hora aplica el atributo ",e("inlineCode",{parentName:"p"},"time")," a true."),e(p,{mdxType:"Canvas"},e(d,{name:"Time",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card>
            <k-datepicker time>Time mode</k-datepicker>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Rango")),e("p",null,"Puedes definir un rango de fechas activando la propiedad ",e("inlineCode",{parentName:"p"},"range"),"."),e("p",null,"Tambien puedes especificar un numero m\xEDnimo y m\xE1ximo de d\xEDas con las propiedades ",e("inlineCode",{parentName:"p"},"minRange")," y ",e("inlineCode",{parentName:"p"},"maxRange"),"."),e(p,{mdxType:"Canvas"},e(d,{name:"Range",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker class="mr-4">Sin Rango</k-datepicker>
            <k-datepicker range>Con Rango</k-datepicker>
            <k-datepicker range min-range="3">Con Rango <sup>(M\xEDnimo 3 dias)</sup></k-datepicker>
            <k-datepicker range max-range="5">Con Rango <sup>(M\xE1ximo 5 dias)</sup></k-datepicker>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Multi Calendario")),e("p",null,"Al establecer la propiedad ",e("inlineCode",{parentName:"p"},"multi")," a true se a\xF1aden dos calendarios. \xDAtil para el modo rango de fechas."),e(p,{mdxType:"Canvas"},e(d,{name:"Multi",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},template:`
          <k-card>
            <k-datepicker multi>Multi mode</k-datepicker>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Fechas Fijas")),e("p",null,"Puedes fijar la fecha de inicio o de fin con las propiedades ",e("inlineCode",{parentName:"p"},"fixedStart")," y ",e("inlineCode",{parentName:"p"},"fixedEnd"),"."),e(p,{mdxType:"Canvas"},e(d,{name:"Fixed Dates",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},setup(){return{dates:s(["2023-02-01","2023-02-20"])}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker v-model="dates" range fixed-start :clearable="false">Inicio fijo</k-datepicker>
            <k-datepicker v-model="dates" range fixed-start :clearable="false">Inicio fijo</k-datepicker>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Fechas M\xEDnimas/M\xE1ximas")),e("p",null,"Puedes fijar la fecha de inicio o de fin con las propiedades ",e("inlineCode",{parentName:"p"},"fixedStart")," y ",e("inlineCode",{parentName:"p"},"fixedEnd"),"."),e(p,{mdxType:"Canvas"},e(d,{name:"Min/Max",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},setup(){return{dates:s(["2023-02-01","2023-02-20"])}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker v-model="dates" range min-range="">Inicio fijo</k-datepicker>
            <k-datepicker v-model="dates" range fixed-start :clearable="false">Inicio fijo</k-datepicker>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Inline")),e("p",null,"Elimina el input y muestra el calendario en linea con la propiedad ",e("inlineCode",{parentName:"p"},"inline")),e(p,{mdxType:"Canvas"},e(d,{name:"Inline",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card>
            <k-datepicker inline></k-datepicker>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Estado")),e("p",null,"Puedes modificar el color del componente con la propiedad ",e("inlineCode",{parentName:"p"},"color")),e(p,{mdxType:"Canvas"},e(d,{name:"Status",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker status="danger" class="mr-4" fieldset>Danger</k-datepicker>
            <k-datepicker status="warning" class="mr-4" fieldset>Warning</k-datepicker>
            <k-datepicker status="success" class="mr-4" fieldset>Success</k-datepicker>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Errors")),e("p",null,"Define una lista de errores del input. Se mostrar\xE1 un icono de alerta con el primer error."),e(p,{mdxType:"Canvas"},e(d,{name:"Errors",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card class="flex flex-col gap-12">
            <k-datepicker :errors="errors">Label MD</k-datepicker>
            <k-datepicker fieldset :errors="errors">Label MD</k-datepicker>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Sizes")),e("p",null,"Puedes establecer distintos tama\xF1os que van desde ",e("inlineCode",{parentName:"p"},"xs")," hasta ",e("inlineCode",{parentName:"p"},"lg"),"."),e(p,{mdxType:"Canvas"},e(d,{name:"Sizes",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker size="xs" class="mr-4" >Label XS</k-datepicker>
            <k-datepicker size="sm" class="mr-4" >Label SM</k-datepicker>
            <k-datepicker size="md" class="mr-4" >Label MD</k-datepicker>
            <k-datepicker size="lg">Label LG</k-textarea>
          </k-card>
        `}))),e("h2",null,e("strong",{parentName:"h2"},"Fieldset")),e("p",null,"Aplica el estilo de los inputs con la propiedad ",e("inlineCode",{parentName:"p"},"fieldset")),e(p,{mdxType:"Canvas"},e(d,{name:"Fieldset",argTypes:r(a,{},!0),parameters:t({showPanel:!1}),mdxType:"Story"},()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker size="xs" class="mr-4" fieldset >Label XS</k-datepicker>
            <k-datepicker size="sm" class="mr-4" fieldset>Label SM</k-datepicker>
            <k-datepicker size="md" class="mr-4" fieldset>Label MD</k-datepicker>
            <k-datepicker size="lg" fieldset>Label LG</k-textarea>
          </k-card>
        `}))))}i(C,"MDXContent");C.isMDXComponent=!0;const L=u.bind({});L.storyName="Default";L.parameters={storySource:{source:`args => ({
  components: {
    KDatepicker
  },
  setup() {
    return {
      args
    };
  },
  template: '<k-card><k-datepicker v-bind="args"></k-datepicker></k-card>'
})`},...t({showPanel:!0})};const f=i(()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card>
            <k-datepicker time>Time mode</k-datepicker>
          </k-card>
        `}),"time");f.storyName="Time";f.argTypes=r(a,{},!0);f.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    setup() {
      const data = ref(0);
      return {
        data
      };
    },
    template: \`
          <k-card>
            <k-datepicker time>Time mode</k-datepicker>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const g=i(()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker class="mr-4">Sin Rango</k-datepicker>
            <k-datepicker range>Con Rango</k-datepicker>
            <k-datepicker range min-range="3">Con Rango <sup>(M\xEDnimo 3 dias)</sup></k-datepicker>
            <k-datepicker range max-range="5">Con Rango <sup>(M\xE1ximo 5 dias)</sup></k-datepicker>
          </k-card>
        `}),"range");g.storyName="Range";g.argTypes=r(a,{},!0);g.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    setup() {
      const data = ref(0);
      return {
        data
      };
    },
    template: \`
          <k-card class="flex flex-col gap-8">
            <k-datepicker class="mr-4">Sin Rango</k-datepicker>
            <k-datepicker range>Con Rango</k-datepicker>
            <k-datepicker range min-range="3">Con Rango <sup>(M\xEDnimo 3 dias)</sup></k-datepicker>
            <k-datepicker range max-range="5">Con Rango <sup>(M\xE1ximo 5 dias)</sup></k-datepicker>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const x=i(()=>({components:{KDatepicker:a},template:`
          <k-card>
            <k-datepicker multi>Multi mode</k-datepicker>
          </k-card>
        `}),"multi");x.storyName="Multi";x.argTypes=r(a,{},!0);x.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    template: \`
          <k-card>
            <k-datepicker multi>Multi mode</k-datepicker>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const y=i(()=>({components:{KDatepicker:a},setup(){return{dates:s(["2023-02-01","2023-02-20"])}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker v-model="dates" range fixed-start :clearable="false">Inicio fijo</k-datepicker>
            <k-datepicker v-model="dates" range fixed-start :clearable="false">Inicio fijo</k-datepicker>
          </k-card>
        `}),"fixedDates");y.storyName="Fixed Dates";y.argTypes=r(a,{},!0);y.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    setup() {
      const dates = ref(['2023-02-01', '2023-02-20']);
      {/* const startDate = new Date();
       const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
       date.value = [startDate, endDate]; */}
      return {
        dates
      };
    },
    template: \`
          <k-card class="flex flex-col gap-8">
            <k-datepicker v-model="dates" range fixed-start :clearable="false">Inicio fijo</k-datepicker>
            <k-datepicker v-model="dates" range fixed-start :clearable="false">Inicio fijo</k-datepicker>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const D=i(()=>({components:{KDatepicker:a},setup(){return{dates:s(["2023-02-01","2023-02-20"])}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker v-model="dates" range min-range="">Inicio fijo</k-datepicker>
            <k-datepicker v-model="dates" range fixed-start :clearable="false">Inicio fijo</k-datepicker>
          </k-card>
        `}),"minMax");D.storyName="Min/Max";D.argTypes=r(a,{},!0);D.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    setup() {
      const dates = ref(['2023-02-01', '2023-02-20']);
      return {
        dates
      };
    },
    template: \`
          <k-card class="flex flex-col gap-8">
            <k-datepicker v-model="dates" range min-range="">Inicio fijo</k-datepicker>
            <k-datepicker v-model="dates" range fixed-start :clearable="false">Inicio fijo</k-datepicker>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const S=i(()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card>
            <k-datepicker inline></k-datepicker>
          </k-card>
        `}),"inline");S.storyName="Inline";S.argTypes=r(a,{},!0);S.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    setup() {
      const data = ref(0);
      return {
        data
      };
    },
    template: \`
          <k-card>
            <k-datepicker inline></k-datepicker>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const T=i(()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker status="danger" class="mr-4" fieldset>Danger</k-datepicker>
            <k-datepicker status="warning" class="mr-4" fieldset>Warning</k-datepicker>
            <k-datepicker status="success" class="mr-4" fieldset>Success</k-datepicker>
          </k-card>
        `}),"status");T.storyName="Status";T.argTypes=r(a,{},!0);T.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    setup() {
      const data = ref(0);
      return {
        data
      };
    },
    template: \`
          <k-card class="flex flex-col gap-8">
            <k-datepicker status="danger" class="mr-4" fieldset>Danger</k-datepicker>
            <k-datepicker status="warning" class="mr-4" fieldset>Warning</k-datepicker>
            <k-datepicker status="success" class="mr-4" fieldset>Success</k-datepicker>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const h=i(()=>({components:{KDatepicker:a},setup(){return{errors:[{$message:"Lorem ipsum dolor sit"}]}},template:`
          <k-card class="flex flex-col gap-12">
            <k-datepicker :errors="errors">Label MD</k-datepicker>
            <k-datepicker fieldset :errors="errors">Label MD</k-datepicker>
          </k-card>
        `}),"errors");h.storyName="Errors";h.argTypes=r(a,{},!0);h.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    setup() {
      return {
        errors: [{
          $message: 'Lorem ipsum dolor sit'
        }]
      };
    },
    template: \`
          <k-card class="flex flex-col gap-12">
            <k-datepicker :errors="errors">Label MD</k-datepicker>
            <k-datepicker fieldset :errors="errors">Label MD</k-datepicker>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const b=i(()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker size="xs" class="mr-4" >Label XS</k-datepicker>
            <k-datepicker size="sm" class="mr-4" >Label SM</k-datepicker>
            <k-datepicker size="md" class="mr-4" >Label MD</k-datepicker>
            <k-datepicker size="lg">Label LG</k-textarea>
          </k-card>
        `}),"sizes");b.storyName="Sizes";b.argTypes=r(a,{},!0);b.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    setup() {
      const data = ref(0);
      return {
        data
      };
    },
    template: \`
          <k-card class="flex flex-col gap-8">
            <k-datepicker size="xs" class="mr-4" >Label XS</k-datepicker>
            <k-datepicker size="sm" class="mr-4" >Label SM</k-datepicker>
            <k-datepicker size="md" class="mr-4" >Label MD</k-datepicker>
            <k-datepicker size="lg">Label LG</k-textarea>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const M=i(()=>({components:{KDatepicker:a},setup(){return{data:s(0)}},template:`
          <k-card class="flex flex-col gap-8">
            <k-datepicker size="xs" class="mr-4" fieldset >Label XS</k-datepicker>
            <k-datepicker size="sm" class="mr-4" fieldset>Label SM</k-datepicker>
            <k-datepicker size="md" class="mr-4" fieldset>Label MD</k-datepicker>
            <k-datepicker size="lg" fieldset>Label LG</k-textarea>
          </k-card>
        `}),"fieldset");M.storyName="Fieldset";M.argTypes=r(a,{},!0);M.parameters={storySource:{source:`() => {
  return {
    components: {
      KDatepicker
    },
    setup() {
      const data = ref(0);
      return {
        data
      };
    },
    template: \`
          <k-card class="flex flex-col gap-8">
            <k-datepicker size="xs" class="mr-4" fieldset >Label XS</k-datepicker>
            <k-datepicker size="sm" class="mr-4" fieldset>Label SM</k-datepicker>
            <k-datepicker size="md" class="mr-4" fieldset>Label MD</k-datepicker>
            <k-datepicker size="lg" fieldset>Label LG</k-textarea>
          </k-card>
        \`
  };
}`},...t({showPanel:!1})};const o={title:"Data Entry/Datepicker",decorators:[()=>({template:'<div class="flex items-center justify-center p-10"><story /></div>'})],component:a,argTypes:r(a),includeStories:["defaultStory","time","range","multi","fixedDates","minMax","inline","status","errors","sizes","fieldset"]},I={Default:"defaultStory",Time:"time",Range:"range",Multi:"multi","Fixed Dates":"fixedDates","Min/Max":"minMax",Inline:"inline",Status:"status",Errors:"errors",Sizes:"sizes",Fieldset:"fieldset"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(v,{mdxStoryNameToKey:I,mdxComponentAnnotations:o},e(C,null))};const Q=["Template","defaultStory","time","range","multi","fixedDates","minMax","inline","status","errors","sizes","fieldset"];export{u as Template,Q as __namedExportsOrder,o as default,L as defaultStory,h as errors,M as fieldset,y as fixedDates,S as inline,D as minMax,x as multi,g as range,b as sizes,T as status,f as time};
//# sourceMappingURL=k-datepicker.story.c4efcaef.js.map
