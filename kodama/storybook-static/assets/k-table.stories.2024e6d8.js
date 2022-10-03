import{q as $,r as re,d as R,v as D,x as h,y as B,z as Ne,A as v,B as fe,C as K,o as pe,D as k,E as oe,a as Oe,w as He,F as De,G as M,H as J,I as te,J as ne,K as de,L as Ke,M as Pe,N as Me,O as Be}from"./vue.esm-bundler.308b1b96.js";import{c as Re,h as ce}from"./notyf.0ec25036.js";import{_ as q,r as qe}from"./storybook.65b5688a.js";import"./iframe.d03685e1.js";import"apexcharts";const ge={index:{type:String,required:!0,description:"Clave primaria de la tabla"},columns:{type:Object,required:!0,description:"Array con las columnas a mostrar"},data:{type:Array,default:()=>[],description:"Array con los datos a mostrar"},total:{type:Number,default:()=>0,description:"Total de registros"},loading:{type:Boolean,default:!1,description:"Indica si se estan cargando los datos"},selected:{type:Array,required:!1,description:"Indica si se muestra la columna de checkbox y que items estan seleccionados"},height:{type:Number,default:300,description:"Altura m\xEDnima de la tabla"}};function Ve(e,t){const r=$(()=>{const i=e.columns,p=[];return i==null||i.forEach(a=>{let c=a.width||"auto";a.slot==="_image"&&(c="5rem"),a.slot&&["header","footer","content"].includes(a.slot)&&(a.slot="");const m={title:a.title,index:a.index||"",order:a.order||!1,search:a.search||!1,nowrap:a.nowrap||!0,width:c,align:a.align||"left",slot:a.slot||"",makeup:a.makeup||void 0,filter:a.filter||[],style:{}};m.nowrap&&(m.style["white-space"]="nowrap"),m.align&&(m.style["text-align"]=m.align),m.width&&(m.style.width=m.width),a.style&&(m.style={...m.style,...a.style}),p.push(m)}),p}),d=$(()=>{let i=1;return e.selected!==void 0&&i++,i+=r.value.length,i});return{cols:r,colLength:d}}function je(e){const t=a=>{if(e.selected){const c=e.index||"id",m=e.selected.findIndex(z=>z[c]===e.data[a][c]);m>-1?e.selected.splice(m,1):e.selected.push(e.data[a])}},r=$(()=>{const a=e.index||"id";return e.data.map(c=>!!(e.selected&&e.selected.findIndex(z=>z[a]===c[a])>-1))}),d=()=>{if(e.selected)if(e.selected.length>=e.data.length)e.selected.splice(0,e.selected.length);else{e.selected.splice(0,e.selected.length);for(let c=0;c<e.data.length;c++)e.selected.push(e.data[c])}},i=()=>{if(e.selected){const a=e.index||"id";for(let c=0;c<e.selected.length;c++){const m=e.selected[c],z=e.data.findIndex(A=>A[a]===m[c][a]);z===-1&&e.selected.splice(z,1)}}},p=$(()=>!!(e.selected&&e.selected.length>=e.data.length));return{toggleCheck:t,isRowChecked:r,toggleGlobalCheck:d,populateChecks:i,isCheckedAll:p}}function Fe(e){const t=re([]);return{isRowOpen:$(()=>e.data.map((i,p)=>t.value.includes(p))),toggleRow:i=>{t.value.includes(i)?t.value=t.value.filter(p=>p!==i):t.value.push(i)}}}const Ye={ucfirst(e){return e.charAt(0).toUpperCase()+e.slice(1)},seed(e,t){return new Re.exports.Chance(t).shuffle(e)}},he=R({name:"KTableDate",props:{value:{type:String,default:""}},setup(e){const t=$(()=>ce(e.value).format("LL")),r=$(()=>Ye.ucfirst(ce(e.value).fromNow()));return{props:e,text:t,from:r}}}),Ge={class:"badge badge-light-primary"},Je={class:"d-flex flex-row align-items-center"},Ze=v("i",{class:"fad fa-clock me-2 fs-3"},null,-1),Ue={class:"text-start"},We=v("br",null,null,-1),Xe={class:"opacity-40"};function Qe(e,t,r,d,i,p){const a=D("tippy");return h(),B(a,{content:e.value},{default:Ne(()=>[v("span",Ge,[v("div",Je,[Ze,v("div",Ue,[fe(K(e.text)+" ",1),We,v("span",Xe,K(e.from),1)])])])]),_:1},8,["content"])}const et=q(he,[["render",Qe]]);he.__docgenInfo={displayName:"KTableDate",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(e[d]=r[d])}return e},Z=function(t){return t.tagName==="IMG"},tt=function(t){return NodeList.prototype.isPrototypeOf(t)},U=function(t){return t&&t.nodeType===1},ue=function(t){var r=t.currentSrc||t.src;return r.substr(-4).toLowerCase()===".svg"},me=function(t){try{return Array.isArray(t)?t.filter(Z):tt(t)?[].slice.call(t).filter(Z):U(t)?[t].filter(Z):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(Z):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},nt=function(t){var r=document.createElement("div");return r.classList.add("medium-zoom-overlay"),r.style.background=t,r},rt=function(t){var r=t.getBoundingClientRect(),d=r.top,i=r.left,p=r.width,a=r.height,c=t.cloneNode(),m=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,z=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return c.removeAttribute("id"),c.style.position="absolute",c.style.top=d+m+"px",c.style.left=i+z+"px",c.style.width=p+"px",c.style.height=a+"px",c.style.transform="",c},H=function(t,r){var d=I({bubbles:!1,cancelable:!1,detail:void 0},r);if(typeof window.CustomEvent=="function")return new CustomEvent(t,d);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,d.bubbles,d.cancelable,d.detail),i},ot=function e(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=window.Promise||function(o){function l(){}o(l,l)},i=function(o){var l=o.target;if(l===Y){x();return}T.indexOf(l)!==-1&&V({target:l})},p=function(){if(!(N||!n.original)){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(ae-o)>u.scrollOffset&&setTimeout(x,150)}},a=function(o){var l=o.key||o.keyCode;(l==="Escape"||l==="Esc"||l===27)&&x()},c=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=o;if(o.background&&(Y.style.background=o.background),o.container&&o.container instanceof Object&&(l.container=I({},u.container,o.container)),o.template){var f=U(o.template)?o.template:document.querySelector(o.template);l.template=f}return u=I({},u,l),T.forEach(function(y){y.dispatchEvent(H("medium-zoom:update",{detail:{zoom:_}}))}),_},m=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(I({},u,o))},z=function(){for(var o=arguments.length,l=Array(o),f=0;f<o;f++)l[f]=arguments[f];var y=l.reduce(function(s,C){return[].concat(s,me(C))},[]);return y.filter(function(s){return T.indexOf(s)===-1}).forEach(function(s){T.push(s),s.classList.add("medium-zoom-image")}),F.forEach(function(s){var C=s.type,L=s.listener,O=s.options;y.forEach(function(S){S.addEventListener(C,L,O)})}),_},A=function(){for(var o=arguments.length,l=Array(o),f=0;f<o;f++)l[f]=arguments[f];n.zoomed&&x();var y=l.length>0?l.reduce(function(s,C){return[].concat(s,me(C))},[]):T;return y.forEach(function(s){s.classList.remove("medium-zoom-image"),s.dispatchEvent(H("medium-zoom:detach",{detail:{zoom:_}}))}),T=T.filter(function(s){return y.indexOf(s)===-1}),_},b=function(o,l){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return T.forEach(function(y){y.addEventListener("medium-zoom:"+o,l,f)}),F.push({type:"medium-zoom:"+o,listener:l,options:f}),_},E=function(o,l){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return T.forEach(function(y){y.removeEventListener("medium-zoom:"+o,l,f)}),F=F.filter(function(y){return!(y.type==="medium-zoom:"+o&&y.listener.toString()===l.toString())}),_},g=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=o.target,f=function(){var s={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},C=void 0,L=void 0;if(u.container)if(u.container instanceof Object)s=I({},s,u.container),C=s.width-s.left-s.right-u.margin*2,L=s.height-s.top-s.bottom-u.margin*2;else{var O=U(u.container)?u.container:document.querySelector(u.container),S=O.getBoundingClientRect(),Q=S.width,ze=S.height,we=S.left,Ce=S.top;s=I({},s,{width:Q,height:ze,left:we,top:Ce})}C=C||s.width-u.margin*2,L=L||s.height-u.margin*2;var P=n.zoomedHd||n.original,Ee=ue(P)?C:P.naturalWidth||C,xe=ue(P)?L:P.naturalHeight||L,G=P.getBoundingClientRect(),Te=G.top,$e=G.left,ie=G.width,le=G.height,Le=Math.min(Ee,C)/ie,Se=Math.min(xe,L)/le,ee=Math.min(Le,Se),Ae=(-$e+(C-ie)/2+u.margin+s.left)/ee,Ie=(-Te+(L-le)/2+u.margin+s.top)/ee,se="scale("+ee+") translate3d("+Ae+"px, "+Ie+"px, 0)";n.zoomed.style.transform=se,n.zoomedHd&&(n.zoomedHd.style.transform=se)};return new d(function(y){if(l&&T.indexOf(l)===-1){y(_);return}var s=function Q(){N=!1,n.zoomed.removeEventListener("transitionend",Q),n.original.dispatchEvent(H("medium-zoom:opened",{detail:{zoom:_}})),y(_)};if(n.zoomed){y(_);return}if(l)n.original=l;else if(T.length>0){var C=T;n.original=C[0]}else{y(_);return}if(n.original.dispatchEvent(H("medium-zoom:open",{detail:{zoom:_}})),ae=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,N=!0,n.zoomed=rt(n.original),document.body.appendChild(Y),u.template){var L=U(u.template)?u.template:document.querySelector(u.template);n.template=document.createElement("div"),n.template.appendChild(L.content.cloneNode(!0)),document.body.appendChild(n.template)}if(document.body.appendChild(n.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),n.original.classList.add("medium-zoom-image--hidden"),n.zoomed.classList.add("medium-zoom-image--opened"),n.zoomed.addEventListener("click",x),n.zoomed.addEventListener("transitionend",s),n.original.getAttribute("data-zoom-src")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("srcset"),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.src=n.zoomed.getAttribute("data-zoom-src"),n.zoomedHd.onerror=function(){clearInterval(O),console.warn("Unable to reach the zoom image target "+n.zoomedHd.src),n.zoomedHd=null,f()};var O=setInterval(function(){n.zoomedHd.complete&&(clearInterval(O),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",x),document.body.appendChild(n.zoomedHd),f())},10)}else if(n.original.hasAttribute("srcset")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading");var S=n.zoomedHd.addEventListener("load",function(){n.zoomedHd.removeEventListener("load",S),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",x),document.body.appendChild(n.zoomedHd),f()})}else f()})},x=function(){return new d(function(o){if(N||!n.original){o(_);return}var l=function f(){n.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(n.zoomed),n.zoomedHd&&document.body.removeChild(n.zoomedHd),document.body.removeChild(Y),n.zoomed.classList.remove("medium-zoom-image--opened"),n.template&&document.body.removeChild(n.template),N=!1,n.zoomed.removeEventListener("transitionend",f),n.original.dispatchEvent(H("medium-zoom:closed",{detail:{zoom:_}})),n.original=null,n.zoomed=null,n.zoomedHd=null,n.template=null,o(_)};N=!0,document.body.classList.remove("medium-zoom--opened"),n.zoomed.style.transform="",n.zoomedHd&&(n.zoomedHd.style.transform=""),n.template&&(n.template.style.transition="opacity 150ms",n.template.style.opacity=0),n.original.dispatchEvent(H("medium-zoom:close",{detail:{zoom:_}})),n.zoomed.addEventListener("transitionend",l)})},V=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=o.target;return n.original?x():g({target:l})},W=function(){return u},j=function(){return T},X=function(){return n.original},T=[],F=[],N=!1,ae=0,u=r,n={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?u=t:(t||typeof t=="string")&&z(t),u=I({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},u);var Y=nt(u.background);document.addEventListener("click",i),document.addEventListener("keyup",a),document.addEventListener("scroll",p),window.addEventListener("resize",x);var _={open:g,close:x,toggle:V,update:c,clone:m,attach:z,detach:A,on:b,off:E,getOptions:W,getImages:j,getZoomedImage:X};return _};function at(e,t){t===void 0&&(t={});var r=t.insertAt;if(!(!e||typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",r==="top"&&d.firstChild?d.insertBefore(i,d.firstChild):d.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var it=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";at(it);const lt=ot,ve=R({name:"KTableImage",props:{value:{type:String,default:""}},setup(e){const t=re();return pe(()=>{lt(t.value)}),{props:e,img:t}}}),st="_image_1skvg_1",dt={image:st},ct=["src"];function ut(e,t,r,d,i,p){return h(),k("div",{class:oe(["rounded-4",e.$style.image])},[v("img",{ref:"img",src:e.value,"data-zoom":""},null,8,ct)],2)}const mt={$style:dt},ft=q(ve,[["render",ut],["__cssModules",mt]]);ve.__docgenInfo={displayName:"KTableImage",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const ye=R({name:"KTableStatus",props:{value:{type:[String,Boolean,Number],default:""}},setup(e){const t=$(()=>typeof e.value=="string"?e.value!=="0":typeof e.value=="boolean"?e.value:typeof e.value=="number"?!!e.value:!1);return{props:e,status:t}}}),pt={class:"badge badge-success"};function gt(e,t,r,d,i,p){return h(),k("span",pt,[v("i",{class:oe(["fad me-2",[e.status?"fa-check":"fa-times"]])},null,2),fe(" "+K(e.status?"Activo":"Inactivo"),1)])}const ht=q(ye,[["render",gt]]);ye.__docgenInfo={displayName:"KTableStatus",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"string|boolean|number"},defaultValue:{func:!1,value:"''"}}]};const be=R({name:"KTablePrice",props:{value:{type:[String,Number],default:""}},setup(e){return{price:$(()=>{let r=e.value;return typeof r=="string"&&(r=parseFloat(r)),r.toFixed(2).replace(".",",")})}}}),vt={class:"price"};function yt(e,t,r,d,i,p){return h(),k("span",vt,K(e.price)+" \u20AC",1)}const bt=q(be,[["render",yt]]);be.__docgenInfo={displayName:"KTablePrice",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}}]};const _e=R({name:"KTable",autoload:!0,components:{KTableDate:et,KTableImage:ft,KTableStatus:ht,KTablePrice:bt},props:ge,emits:["fetch","filter"],setup(e,t){const r=X=>!!t.slots[X],{isRowOpen:d,toggleRow:i}=Fe(e),p=Oe({page:1,order:void 0,filter:void 0,reset:!0}),{cols:a,colLength:c}=Ve(e,t.slots),{toggleCheck:m,isRowChecked:z,toggleGlobalCheck:A,populateChecks:b,isCheckedAll:E}=je(e),g=re(!1),x=$(()=>!!(e.loading||e.data.length>=e.total)),V=()=>{j.value&&(p.page+=1,p.reset=!1,t.emit("fetch",p))},W=$(()=>e.data),j=$(()=>e.data.length<e.total);return He(W,b,{deep:!0}),b(),pe(()=>{g.value=!0,t.emit("fetch",p)}),{hasSlot:r,cols:a,fetch,colLength:c,toggleCheck:m,isRowChecked:z,toggleGlobalCheck:A,busy:x,enable404:g,isCheckedAll:E,isMore:j,loadMore:V,isRowOpen:d,toggleRow:i}}}),_t={class:"table-responsive position-relative"},kt={class:"fw-bolder text-muted"},zt={key:0,class:"w-25px"},wt={class:"form-check form-check-sm form-check-custom form-check-solid"},Ct=["checked"],Et={key:0},xt={class:"form-check form-check-sm form-check-custom form-check-solid"},Tt=["checked","onChange"],$t={key:5},Lt={key:1,align:"right"},St=["onClick"],At={key:0},It=["colspan"],Nt={key:0,class:"text-center"};function Ot(e,t,r,d,i,p){const a=D("loading"),c=D("k-table-date"),m=D("k-table-image"),z=D("k-table-status"),A=D("k-table-price");return h(),k("div",_t,[De(a,{active:e.loading,"can-cancel":!1,"is-full-page":!1,loader:"bars",color:"#000","z-index":99},null,8,["active"]),v("table",{class:"table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 mb-0",style:ne({"min-height":`${e.height}px`})},[v("thead",null,[v("tr",kt,[e.selected?(h(),k("th",zt,[v("div",wt,[v("input",{class:"form-check-input",type:"checkbox",checked:e.isCheckedAll,onChange:t[0]||(t[0]=(...b)=>e.toggleGlobalCheck&&e.toggleGlobalCheck(...b))},null,40,Ct)])])):M("",!0),(h(!0),k(J,null,te(e.cols,(b,E)=>(h(),k("th",{key:E,style:ne(b.style)},K(b.title),5))),128))])]),v("tbody",null,[(h(!0),k(J,null,te(e.data,(b,E)=>(h(),k(J,{key:E},[v("tr",null,[e.selected?(h(),k("td",Et,[v("div",xt,[v("input",{checked:e.isRowChecked[E],class:"form-check-input widget-13-check",type:"checkbox",onChange:g=>e.toggleCheck(E)},null,40,Tt)])])):M("",!0),(h(!0),k(J,null,te(e.cols,(g,x)=>(h(),k("td",{key:x,style:ne(g.style)},[g.makeup==="date"?(h(),B(c,{key:0,value:b[g.index]},null,8,["value"])):g.makeup==="image"?(h(),B(m,{key:1,value:b[g.index]},null,8,["value"])):g.makeup==="status"?(h(),B(z,{key:2,value:b[g.index]},null,8,["value"])):g.makeup==="price"?(h(),B(A,{key:3,value:b[g.index]},null,8,["value"])):g.slot?de(e.$slots,g.slot,Ke(Pe({key:4},{row:b,value:b[g.index],index:E}))):(h(),k("div",$t,K(b[g.index]),1))],4))),128)),e.hasSlot("content")?(h(),k("td",Lt,[v("a",{class:"btn btn-icon btn-light cursor-pointer",onClick:g=>e.toggleRow(E)},[v("i",{class:oe([e.isRowOpen[E]?"fa-chevron-up":"fa-chevron-down","fas"])},null,2)],8,St)])):M("",!0)]),e.hasSlot("content")?Me((h(),k("tr",At,[v("td",{colspan:e.colLength},[de(e.$slots,"content",{row:b,index:E})],8,It)],512)),[[Be,e.isRowOpen[E]]]):M("",!0)],64))),128))])],4),e.isMore?(h(),k("div",Nt,[v("button",{type:"button",class:"btn btn-primary fs-6 px-8 py-4",onClick:t[1]||(t[1]=b=>e.loadMore())}," Cargar m\xE1s ")])):M("",!0)])}const ke=q(_e,[["render",Ot]]);_e.__docgenInfo={displayName:"KTable",exportName:"default",description:"",tags:{},events:[{name:"fetch"},{name:"filter"}],slots:[{name:"default",scoped:!0,description:"Slots personalizados",bindings:[{name:"row",title:"binding"},{name:"value",title:"binding"},{name:"index",title:"binding"},{name:"name",title:"binding"}]},{name:"content",scoped:!0,description:"Contenido adicional de la fila",tags:{mock:[{description:"Click me",title:"mock"}]},bindings:[{name:"row",title:"binding"},{name:"index",title:"binding"}]}]};const Vt={title:"Data Display/Table",component:ke,argTypes:qe(ge),parameters:{storySource:{source:`import { Meta, Story } from '@storybook/vue3'\r
import { action } from '@storybook/addon-actions'\r
\r
import KTable from './k-table.vue'\r
import KTableProps from './k-table.props'\r
import { renderArgs } from '../../../helpers/storybook'\r
import { KTableColumn } from './k-table.types'\r
\r
export default {\r
    title: 'Data Display/Table',\r
    component: KTable,\r
    argTypes: renderArgs(KTableProps),\r
    parameters: {\r
        layout: 'centered',\r
        docs: {\r
            description: {\r
                component: 'Some component _markdown_'\r
            }\r
        }\r
    }\r
} as Meta\r
\r
const exampleColumns: KTableColumn[] = [\r
    {\r
        title: 'ID',\r
        index: 'id',\r
        order: true,\r
        search: true,\r
        align: 'left',\r
        width: '100px'\r
    },\r
    {\r
        title: 'Fecha',\r
        index: 'date',\r
        order: true,\r
        search: false,\r
        align: 'left',\r
        filter: 'date',\r
        makeup: 'date'\r
    },\r
    {\r
        title: 'Cliente',\r
        index: 'client_name',\r
        order: false,\r
        search: true,\r
        align: 'left',\r
        slot: 'client'\r
    },\r
    {\r
        title: 'Tel\xE9fono',\r
        index: 'client_phone',\r
        order: false,\r
        search: true,\r
        align: 'left'\r
    },\r
    {\r
        title: 'Transportista',\r
        index: 'carrier',\r
        order: true,\r
        search: false,\r
        align: 'left',\r
        filter: [\r
            {\r
                title: 'Env\xEDo a domicilio',\r
                value: 0\r
            },\r
            {\r
                title: 'Env\xEDo a centro',\r
                value: 0\r
            }\r
        ]\r
    },\r
    {\r
        title: 'Estado',\r
        index: 'status',\r
        order: true,\r
        search: false,\r
        align: 'center',\r
        filter: [\r
            {\r
                title: 'Pagado',\r
                value: 0\r
            },\r
            {\r
                title: 'No pagado',\r
                value: 0\r
            }\r
        ]\r
    },\r
    {\r
        title: 'Importe',\r
        index: 'price',\r
        order: true,\r
        search: false,\r
        align: 'center',\r
        filter: 'price',\r
        makeup: 'price'\r
    }\r
]\r
\r
const exampleData = [\r
    {\r
        id: 1,\r
        date: '2022-05-22 05:46:42',\r
        client_name: 'Benedicte Vanden Berghe',\r
        client_phone: '666 123 000',\r
        carrier: 0,\r
        status: 1,\r
        price: 18.9\r
    },\r
    {\r
        id: 2,\r
        date: '2022-06-22 01:46:42',\r
        client_name: 'Jhon Doe',\r
        client_phone: '666 123 000',\r
        carrier: 0,\r
        status: 1,\r
        price: 38.9\r
    },\r
    {\r
        id: 3,\r
        date: '2022-07-22 02:46:42',\r
        client_name: 'Ava Din Yang',\r
        client_phone: '666 123 000',\r
        carrier: 1,\r
        status: 0,\r
        price: 28.9\r
    },\r
    {\r
        id: 4,\r
        date: '2022-08-21 03:46:42',\r
        client_name: 'Jeremiah Lacalle',\r
        client_phone: '666 123 000',\r
        carrier: 0,\r
        status: 0,\r
        price: 38.9\r
    },\r
    {\r
        id: 5,\r
        date: '2022-09-22 09:46:42',\r
        client_name: 'Pedro Morate',\r
        client_phone: '666 123 000',\r
        carrier: 1,\r
        status: 1,\r
        price: 88.9\r
    }\r
]\r
\r
const KTableStory = (args: any, customArgs?: any) => {\r
    const fixedProps = { columns: exampleColumns, data: exampleData }\r
\r
    const props = {\r
        ...customArgs,\r
        ...args,\r
        ...fixedProps\r
    }\r
\r
    return {\r
        components: { KTable },\r
        setup() {\r
            return { props }\r
        },\r
        template: \`\r
        <k-table v-bind="props">\r
            <template #client="{value}">\r
                {{value}}\r
            </template>\r
        </k-table>\`\r
    }\r
}\r
\r
export const Default: Story = (args) => KTableStory(args)\r
`,locationsMap:{default:{startLoc:{col:30,line:172},endLoc:{col:57,line:172},startBody:{col:30,line:172},endBody:{col:57,line:172}}}},layout:"centered",docs:{description:{component:"Some component _markdown_"}}}},Ht=[{title:"ID",index:"id",order:!0,search:!0,align:"left",width:"100px"},{title:"Fecha",index:"date",order:!0,search:!1,align:"left",filter:"date",makeup:"date"},{title:"Cliente",index:"client_name",order:!1,search:!0,align:"left",slot:"client"},{title:"Tel\xE9fono",index:"client_phone",order:!1,search:!0,align:"left"},{title:"Transportista",index:"carrier",order:!0,search:!1,align:"left",filter:[{title:"Env\xEDo a domicilio",value:0},{title:"Env\xEDo a centro",value:0}]},{title:"Estado",index:"status",order:!0,search:!1,align:"center",filter:[{title:"Pagado",value:0},{title:"No pagado",value:0}]},{title:"Importe",index:"price",order:!0,search:!1,align:"center",filter:"price",makeup:"price"}],Dt=[{id:1,date:"2022-05-22 05:46:42",client_name:"Benedicte Vanden Berghe",client_phone:"666 123 000",carrier:0,status:1,price:18.9},{id:2,date:"2022-06-22 01:46:42",client_name:"Jhon Doe",client_phone:"666 123 000",carrier:0,status:1,price:38.9},{id:3,date:"2022-07-22 02:46:42",client_name:"Ava Din Yang",client_phone:"666 123 000",carrier:1,status:0,price:28.9},{id:4,date:"2022-08-21 03:46:42",client_name:"Jeremiah Lacalle",client_phone:"666 123 000",carrier:0,status:0,price:38.9},{id:5,date:"2022-09-22 09:46:42",client_name:"Pedro Morate",client_phone:"666 123 000",carrier:1,status:1,price:88.9}],Kt=(e,t)=>{const d={...t,...e,...{columns:Ht,data:Dt}};return{components:{KTable:ke},setup(){return{props:d}},template:`
        <k-table v-bind="props">
            <template #client="{value}">
                {{value}}
            </template>
        </k-table>`}},jt=e=>Kt(e),Ft=["Default"];export{jt as Default,Ft as __namedExportsOrder,Vt as default};
//# sourceMappingURL=k-table.stories.2024e6d8.js.map
