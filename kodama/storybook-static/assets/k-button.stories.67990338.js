import{d as Er,q as ee,o as Tr,D as xt,H as Pe,A as Me,E as de,C as Dr,K as Re,G as Br,x as At}from"./vue.esm-bundler.308b1b96.js";import{_ as Lr,r as Cr}from"./storybook.65b5688a.js";var V="top",K="bottom",q="right",H="left",xe="auto",Nt=[V,K,q,H],Et="start",Vt="end",kr="clippingParents",Ze="viewport",$t="popper",Pr="reference",$e=Nt.reduce(function(t,e){return t.concat([e+"-"+Et,e+"-"+Vt])},[]),tr=[].concat(Nt,[xe]).reduce(function(t,e){return t.concat([e,e+"-"+Et,e+"-"+Vt])},[]),Mr="beforeRead",Rr="read",$r="afterRead",Ir="beforeMain",Wr="main",jr="afterMain",Vr="beforeWrite",Hr="write",Nr="afterWrite",Fr=[Mr,Rr,$r,Ir,Wr,jr,Vr,Hr,Nr];function et(t){return t?(t.nodeName||"").toLowerCase():null}function _(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function gt(t){var e=_(t).Element;return t instanceof e||t instanceof Element}function U(t){var e=_(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ae(t){if(typeof ShadowRoot>"u")return!1;var e=_(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function zr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},i=e.attributes[r]||{},s=e.elements[r];!U(s)||!et(s)||(Object.assign(s.style,n),Object.keys(i).forEach(function(l){var u=i[l];u===!1?s.removeAttribute(l):s.setAttribute(l,u===!0?"":u)}))})}function Ur(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var i=e.elements[n],s=e.attributes[n]||{},l=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),u=l.reduce(function(c,f){return c[f]="",c},{});!U(i)||!et(i)||(Object.assign(i.style,u),Object.keys(s).forEach(function(c){i.removeAttribute(c)}))})}}const er={name:"applyStyles",enabled:!0,phase:"write",fn:zr,effect:Ur,requires:["computeStyles"]};function tt(t){return t.split("-")[0]}var mt=Math.max,ie=Math.min,Tt=Math.round;function ye(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function rr(){return!/^((?!chrome|android).)*safari/i.test(ye())}function Dt(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),i=1,s=1;e&&U(t)&&(i=t.offsetWidth>0&&Tt(n.width)/t.offsetWidth||1,s=t.offsetHeight>0&&Tt(n.height)/t.offsetHeight||1);var l=gt(t)?_(t):window,u=l.visualViewport,c=!rr()&&r,f=(n.left+(c&&u?u.offsetLeft:0))/i,p=(n.top+(c&&u?u.offsetTop:0))/s,b=n.width/i,x=n.height/s;return{width:b,height:x,top:p,right:f+b,bottom:p+x,left:f,x:f,y:p}}function Se(t){var e=Dt(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function nr(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Ae(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function at(t){return _(t).getComputedStyle(t)}function Kr(t){return["table","td","th"].indexOf(et(t))>=0}function lt(t){return((gt(t)?t.ownerDocument:t.document)||window.document).documentElement}function ce(t){return et(t)==="html"?t:t.assignedSlot||t.parentNode||(Ae(t)?t.host:null)||lt(t)}function Ie(t){return!U(t)||at(t).position==="fixed"?null:t.offsetParent}function qr(t){var e=/firefox/i.test(ye()),r=/Trident/i.test(ye());if(r&&U(t)){var n=at(t);if(n.position==="fixed")return null}var i=ce(t);for(Ae(i)&&(i=i.host);U(i)&&["html","body"].indexOf(et(i))<0;){var s=at(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Ft(t){for(var e=_(t),r=Ie(t);r&&Kr(r)&&at(r).position==="static";)r=Ie(r);return r&&(et(r)==="html"||et(r)==="body"&&at(r).position==="static")?e:r||qr(t)||e}function Ee(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function It(t,e,r){return mt(t,ie(e,r))}function _r(t,e,r){var n=It(t,e,r);return n>r?r:n}function or(){return{top:0,right:0,bottom:0,left:0}}function ir(t){return Object.assign({},or(),t)}function ar(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var Xr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,ir(typeof e!="number"?e:ar(e,Nt))};function Yr(t){var e,r=t.state,n=t.name,i=t.options,s=r.elements.arrow,l=r.modifiersData.popperOffsets,u=tt(r.placement),c=Ee(u),f=[H,q].indexOf(u)>=0,p=f?"height":"width";if(!(!s||!l)){var b=Xr(i.padding,r),x=Se(s),g=c==="y"?V:H,w=c==="y"?K:q,h=r.rects.reference[p]+r.rects.reference[c]-l[c]-r.rects.popper[p],y=l[c]-r.rects.reference[c],S=Ft(s),T=S?c==="y"?S.clientHeight||0:S.clientWidth||0:0,B=h/2-y/2,o=b[g],A=T-x[p]-b[w],v=T/2-x[p]/2+B,D=It(o,v,A),M=c;r.modifiersData[n]=(e={},e[M]=D,e.centerOffset=D-v,e)}}function Gr(t){var e=t.state,r=t.options,n=r.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!nr(e.elements.popper,i)||(e.elements.arrow=i))}const Jr={name:"arrow",enabled:!0,phase:"main",fn:Yr,effect:Gr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Bt(t){return t.split("-")[1]}var Qr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Zr(t){var e=t.x,r=t.y,n=window,i=n.devicePixelRatio||1;return{x:Tt(e*i)/i||0,y:Tt(r*i)/i||0}}function We(t){var e,r=t.popper,n=t.popperRect,i=t.placement,s=t.variation,l=t.offsets,u=t.position,c=t.gpuAcceleration,f=t.adaptive,p=t.roundOffsets,b=t.isFixed,x=l.x,g=x===void 0?0:x,w=l.y,h=w===void 0?0:w,y=typeof p=="function"?p({x:g,y:h}):{x:g,y:h};g=y.x,h=y.y;var S=l.hasOwnProperty("x"),T=l.hasOwnProperty("y"),B=H,o=V,A=window;if(f){var v=Ft(r),D="clientHeight",M="clientWidth";if(v===_(r)&&(v=lt(r),at(v).position!=="static"&&u==="absolute"&&(D="scrollHeight",M="scrollWidth")),v=v,i===V||(i===H||i===q)&&s===Vt){o=K;var P=b&&v===A&&A.visualViewport?A.visualViewport.height:v[D];h-=P-n.height,h*=c?1:-1}if(i===H||(i===V||i===K)&&s===Vt){B=q;var C=b&&v===A&&A.visualViewport?A.visualViewport.width:v[M];g-=C-n.width,g*=c?1:-1}}var R=Object.assign({position:u},f&&Qr),k=p===!0?Zr({x:g,y:h}):{x:g,y:h};if(g=k.x,h=k.y,c){var L;return Object.assign({},R,(L={},L[o]=T?"0":"",L[B]=S?"0":"",L.transform=(A.devicePixelRatio||1)<=1?"translate("+g+"px, "+h+"px)":"translate3d("+g+"px, "+h+"px, 0)",L))}return Object.assign({},R,(e={},e[o]=T?h+"px":"",e[B]=S?g+"px":"",e.transform="",e))}function tn(t){var e=t.state,r=t.options,n=r.gpuAcceleration,i=n===void 0?!0:n,s=r.adaptive,l=s===void 0?!0:s,u=r.roundOffsets,c=u===void 0?!0:u,f={placement:tt(e.placement),variation:Bt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,We(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:l,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,We(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const en={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:tn,data:{}};var re={passive:!0};function rn(t){var e=t.state,r=t.instance,n=t.options,i=n.scroll,s=i===void 0?!0:i,l=n.resize,u=l===void 0?!0:l,c=_(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&f.forEach(function(p){p.addEventListener("scroll",r.update,re)}),u&&c.addEventListener("resize",r.update,re),function(){s&&f.forEach(function(p){p.removeEventListener("scroll",r.update,re)}),u&&c.removeEventListener("resize",r.update,re)}}const nn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:rn,data:{}};var on={left:"right",right:"left",bottom:"top",top:"bottom"};function oe(t){return t.replace(/left|right|bottom|top/g,function(e){return on[e]})}var an={start:"end",end:"start"};function je(t){return t.replace(/start|end/g,function(e){return an[e]})}function Te(t){var e=_(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function De(t){return Dt(lt(t)).left+Te(t).scrollLeft}function sn(t,e){var r=_(t),n=lt(t),i=r.visualViewport,s=n.clientWidth,l=n.clientHeight,u=0,c=0;if(i){s=i.width,l=i.height;var f=rr();(f||!f&&e==="fixed")&&(u=i.offsetLeft,c=i.offsetTop)}return{width:s,height:l,x:u+De(t),y:c}}function cn(t){var e,r=lt(t),n=Te(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=mt(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=mt(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),u=-n.scrollLeft+De(t),c=-n.scrollTop;return at(i||r).direction==="rtl"&&(u+=mt(r.clientWidth,i?i.clientWidth:0)-s),{width:s,height:l,x:u,y:c}}function Be(t){var e=at(t),r=e.overflow,n=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function sr(t){return["html","body","#document"].indexOf(et(t))>=0?t.ownerDocument.body:U(t)&&Be(t)?t:sr(ce(t))}function Wt(t,e){var r;e===void 0&&(e=[]);var n=sr(t),i=n===((r=t.ownerDocument)==null?void 0:r.body),s=_(n),l=i?[s].concat(s.visualViewport||[],Be(n)?n:[]):n,u=e.concat(l);return i?u:u.concat(Wt(ce(l)))}function be(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ln(t,e){var r=Dt(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Ve(t,e,r){return e===Ze?be(sn(t,r)):gt(e)?ln(e,r):be(cn(lt(t)))}function un(t){var e=Wt(ce(t)),r=["absolute","fixed"].indexOf(at(t).position)>=0,n=r&&U(t)?Ft(t):t;return gt(n)?e.filter(function(i){return gt(i)&&nr(i,n)&&et(i)!=="body"}):[]}function pn(t,e,r,n){var i=e==="clippingParents"?un(t):[].concat(e),s=[].concat(i,[r]),l=s[0],u=s.reduce(function(c,f){var p=Ve(t,f,n);return c.top=mt(p.top,c.top),c.right=ie(p.right,c.right),c.bottom=ie(p.bottom,c.bottom),c.left=mt(p.left,c.left),c},Ve(t,l,n));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function cr(t){var e=t.reference,r=t.element,n=t.placement,i=n?tt(n):null,s=n?Bt(n):null,l=e.x+e.width/2-r.width/2,u=e.y+e.height/2-r.height/2,c;switch(i){case V:c={x:l,y:e.y-r.height};break;case K:c={x:l,y:e.y+e.height};break;case q:c={x:e.x+e.width,y:u};break;case H:c={x:e.x-r.width,y:u};break;default:c={x:e.x,y:e.y}}var f=i?Ee(i):null;if(f!=null){var p=f==="y"?"height":"width";switch(s){case Et:c[f]=c[f]-(e[p]/2-r[p]/2);break;case Vt:c[f]=c[f]+(e[p]/2-r[p]/2);break}}return c}function Ht(t,e){e===void 0&&(e={});var r=e,n=r.placement,i=n===void 0?t.placement:n,s=r.strategy,l=s===void 0?t.strategy:s,u=r.boundary,c=u===void 0?kr:u,f=r.rootBoundary,p=f===void 0?Ze:f,b=r.elementContext,x=b===void 0?$t:b,g=r.altBoundary,w=g===void 0?!1:g,h=r.padding,y=h===void 0?0:h,S=ir(typeof y!="number"?y:ar(y,Nt)),T=x===$t?Pr:$t,B=t.rects.popper,o=t.elements[w?T:x],A=pn(gt(o)?o:o.contextElement||lt(t.elements.popper),c,p,l),v=Dt(t.elements.reference),D=cr({reference:v,element:B,strategy:"absolute",placement:i}),M=be(Object.assign({},B,D)),P=x===$t?M:v,C={top:A.top-P.top+S.top,bottom:P.bottom-A.bottom+S.bottom,left:A.left-P.left+S.left,right:P.right-A.right+S.right},R=t.modifiersData.offset;if(x===$t&&R){var k=R[i];Object.keys(C).forEach(function(L){var N=[q,K].indexOf(L)>=0?1:-1,F=[V,K].indexOf(L)>=0?"y":"x";C[L]+=k[F]*N})}return C}function fn(t,e){e===void 0&&(e={});var r=e,n=r.placement,i=r.boundary,s=r.rootBoundary,l=r.padding,u=r.flipVariations,c=r.allowedAutoPlacements,f=c===void 0?tr:c,p=Bt(n),b=p?u?$e:$e.filter(function(w){return Bt(w)===p}):Nt,x=b.filter(function(w){return f.indexOf(w)>=0});x.length===0&&(x=b);var g=x.reduce(function(w,h){return w[h]=Ht(t,{placement:h,boundary:i,rootBoundary:s,padding:l})[tt(h)],w},{});return Object.keys(g).sort(function(w,h){return g[w]-g[h]})}function dn(t){if(tt(t)===xe)return[];var e=oe(t);return[je(t),e,je(e)]}function vn(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var i=r.mainAxis,s=i===void 0?!0:i,l=r.altAxis,u=l===void 0?!0:l,c=r.fallbackPlacements,f=r.padding,p=r.boundary,b=r.rootBoundary,x=r.altBoundary,g=r.flipVariations,w=g===void 0?!0:g,h=r.allowedAutoPlacements,y=e.options.placement,S=tt(y),T=S===y,B=c||(T||!w?[oe(y)]:dn(y)),o=[y].concat(B).reduce(function(rt,X){return rt.concat(tt(X)===xe?fn(e,{placement:X,boundary:p,rootBoundary:b,padding:f,flipVariations:w,allowedAutoPlacements:h}):X)},[]),A=e.rects.reference,v=e.rects.popper,D=new Map,M=!0,P=o[0],C=0;C<o.length;C++){var R=o[C],k=tt(R),L=Bt(R)===Et,N=[V,K].indexOf(k)>=0,F=N?"width":"height",I=Ht(e,{placement:R,boundary:p,rootBoundary:b,altBoundary:x,padding:f}),W=N?L?q:H:L?K:V;A[F]>v[F]&&(W=oe(W));var $=oe(W),G=[];if(s&&G.push(I[k]<=0),u&&G.push(I[W]<=0,I[$]<=0),G.every(function(rt){return rt})){P=R,M=!1;break}D.set(R,G)}if(M)for(var J=w?3:1,ut=function(X){var nt=o.find(function(ht){var ot=D.get(ht);if(ot)return ot.slice(0,X).every(function(yt){return yt})});if(nt)return P=nt,"break"},Q=J;Q>0;Q--){var pt=ut(Q);if(pt==="break")break}e.placement!==P&&(e.modifiersData[n]._skip=!0,e.placement=P,e.reset=!0)}}const mn={name:"flip",enabled:!0,phase:"main",fn:vn,requiresIfExists:["offset"],data:{_skip:!1}};function He(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Ne(t){return[V,q,K,H].some(function(e){return t[e]>=0})}function gn(t){var e=t.state,r=t.name,n=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,l=Ht(e,{elementContext:"reference"}),u=Ht(e,{altBoundary:!0}),c=He(l,n),f=He(u,i,s),p=Ne(c),b=Ne(f);e.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:p,hasPopperEscaped:b},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":b})}const hn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:gn};function yn(t,e,r){var n=tt(t),i=[H,V].indexOf(n)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,l=s[0],u=s[1];return l=l||0,u=(u||0)*i,[H,q].indexOf(n)>=0?{x:u,y:l}:{x:l,y:u}}function bn(t){var e=t.state,r=t.options,n=t.name,i=r.offset,s=i===void 0?[0,0]:i,l=tr.reduce(function(p,b){return p[b]=yn(b,e.rects,s),p},{}),u=l[e.placement],c=u.x,f=u.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=f),e.modifiersData[n]=l}const wn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:bn};function On(t){var e=t.state,r=t.name;e.modifiersData[r]=cr({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const xn={name:"popperOffsets",enabled:!0,phase:"read",fn:On,data:{}};function An(t){return t==="x"?"y":"x"}function Sn(t){var e=t.state,r=t.options,n=t.name,i=r.mainAxis,s=i===void 0?!0:i,l=r.altAxis,u=l===void 0?!1:l,c=r.boundary,f=r.rootBoundary,p=r.altBoundary,b=r.padding,x=r.tether,g=x===void 0?!0:x,w=r.tetherOffset,h=w===void 0?0:w,y=Ht(e,{boundary:c,rootBoundary:f,padding:b,altBoundary:p}),S=tt(e.placement),T=Bt(e.placement),B=!T,o=Ee(S),A=An(o),v=e.modifiersData.popperOffsets,D=e.rects.reference,M=e.rects.popper,P=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,C=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),R=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(!!v){if(s){var L,N=o==="y"?V:H,F=o==="y"?K:q,I=o==="y"?"height":"width",W=v[o],$=W+y[N],G=W-y[F],J=g?-M[I]/2:0,ut=T===Et?D[I]:M[I],Q=T===Et?-M[I]:-D[I],pt=e.elements.arrow,rt=g&&pt?Se(pt):{width:0,height:0},X=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:or(),nt=X[N],ht=X[F],ot=It(0,D[I],rt[I]),yt=B?D[I]/2-J-ot-nt-C.mainAxis:ut-ot-nt-C.mainAxis,st=B?-D[I]/2+J+ot+ht+C.mainAxis:Q+ot+ht+C.mainAxis,bt=e.elements.arrow&&Ft(e.elements.arrow),Ut=bt?o==="y"?bt.clientTop||0:bt.clientLeft||0:0,Ct=(L=R==null?void 0:R[o])!=null?L:0,Kt=W+yt-Ct-Ut,qt=W+st-Ct,kt=It(g?ie($,Kt):$,W,g?mt(G,qt):G);v[o]=kt,k[o]=kt-W}if(u){var Pt,_t=o==="x"?V:H,Xt=o==="x"?K:q,it=v[A],ct=A==="y"?"height":"width",Mt=it+y[_t],ft=it-y[Xt],Rt=[V,H].indexOf(S)!==-1,Yt=(Pt=R==null?void 0:R[A])!=null?Pt:0,Gt=Rt?Mt:it-D[ct]-M[ct]-Yt+C.altAxis,Jt=Rt?it+D[ct]+M[ct]-Yt-C.altAxis:ft,Qt=g&&Rt?_r(Gt,it,Jt):It(g?Gt:Mt,it,g?Jt:ft);v[A]=Qt,k[A]=Qt-it}e.modifiersData[n]=k}}const En={name:"preventOverflow",enabled:!0,phase:"main",fn:Sn,requiresIfExists:["offset"]};function Tn(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Dn(t){return t===_(t)||!U(t)?Te(t):Tn(t)}function Bn(t){var e=t.getBoundingClientRect(),r=Tt(e.width)/t.offsetWidth||1,n=Tt(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Ln(t,e,r){r===void 0&&(r=!1);var n=U(e),i=U(e)&&Bn(e),s=lt(e),l=Dt(t,i,r),u={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!r)&&((et(e)!=="body"||Be(s))&&(u=Dn(e)),U(e)?(c=Dt(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=De(s))),{x:l.left+u.scrollLeft-c.x,y:l.top+u.scrollTop-c.y,width:l.width,height:l.height}}function Cn(t){var e=new Map,r=new Set,n=[];t.forEach(function(s){e.set(s.name,s)});function i(s){r.add(s.name);var l=[].concat(s.requires||[],s.requiresIfExists||[]);l.forEach(function(u){if(!r.has(u)){var c=e.get(u);c&&i(c)}}),n.push(s)}return t.forEach(function(s){r.has(s.name)||i(s)}),n}function kn(t){var e=Cn(t);return Fr.reduce(function(r,n){return r.concat(e.filter(function(i){return i.phase===n}))},[])}function Pn(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Mn(t){var e=t.reduce(function(r,n){var i=r[n.name];return r[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Fe={placement:"bottom",modifiers:[],strategy:"absolute"};function ze(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Rn(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,i=e.defaultOptions,s=i===void 0?Fe:i;return function(u,c,f){f===void 0&&(f=s);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Fe,s),modifiersData:{},elements:{reference:u,popper:c},attributes:{},styles:{}},b=[],x=!1,g={state:p,setOptions:function(S){var T=typeof S=="function"?S(p.options):S;h(),p.options=Object.assign({},s,p.options,T),p.scrollParents={reference:gt(u)?Wt(u):u.contextElement?Wt(u.contextElement):[],popper:Wt(c)};var B=kn(Mn([].concat(n,p.options.modifiers)));return p.orderedModifiers=B.filter(function(o){return o.enabled}),w(),g.update()},forceUpdate:function(){if(!x){var S=p.elements,T=S.reference,B=S.popper;if(!!ze(T,B)){p.rects={reference:Ln(T,Ft(B),p.options.strategy==="fixed"),popper:Se(B)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(C){return p.modifiersData[C.name]=Object.assign({},C.data)});for(var o=0;o<p.orderedModifiers.length;o++){if(p.reset===!0){p.reset=!1,o=-1;continue}var A=p.orderedModifiers[o],v=A.fn,D=A.options,M=D===void 0?{}:D,P=A.name;typeof v=="function"&&(p=v({state:p,options:M,name:P,instance:g})||p)}}}},update:Pn(function(){return new Promise(function(y){g.forceUpdate(),y(p)})}),destroy:function(){h(),x=!0}};if(!ze(u,c))return g;g.setOptions(f).then(function(y){!x&&f.onFirstUpdate&&f.onFirstUpdate(y)});function w(){p.orderedModifiers.forEach(function(y){var S=y.name,T=y.options,B=T===void 0?{}:T,o=y.effect;if(typeof o=="function"){var A=o({state:p,name:S,instance:g,options:B}),v=function(){};b.push(A||v)}})}function h(){b.forEach(function(y){return y()}),b=[]}return g}}var $n=[nn,xn,en,er,wn,mn,En,Jr,hn],In=Rn({defaultModifiers:$n}),Wn="tippy-box",lr="tippy-content",jn="tippy-backdrop",ur="tippy-arrow",pr="tippy-svg-arrow",vt={passive:!0,capture:!0},fr=function(){return document.body};function ve(t,e,r){if(Array.isArray(t)){var n=t[e];return n==null?Array.isArray(r)?r[e]:r:n}return t}function Le(t,e){var r={}.toString.call(t);return r.indexOf("[object")===0&&r.indexOf(e+"]")>-1}function dr(t,e){return typeof t=="function"?t.apply(void 0,e):t}function Ue(t,e){if(e===0)return t;var r;return function(n){clearTimeout(r),r=setTimeout(function(){t(n)},e)}}function Vn(t){return t.split(/\s+/).filter(Boolean)}function St(t){return[].concat(t)}function Ke(t,e){t.indexOf(e)===-1&&t.push(e)}function Hn(t){return t.filter(function(e,r){return t.indexOf(e)===r})}function Nn(t){return t.split("-")[0]}function ae(t){return[].slice.call(t)}function qe(t){return Object.keys(t).reduce(function(e,r){return t[r]!==void 0&&(e[r]=t[r]),e},{})}function jt(){return document.createElement("div")}function le(t){return["Element","Fragment"].some(function(e){return Le(t,e)})}function Fn(t){return Le(t,"NodeList")}function zn(t){return Le(t,"MouseEvent")}function Un(t){return!!(t&&t._tippy&&t._tippy.reference===t)}function Kn(t){return le(t)?[t]:Fn(t)?ae(t):Array.isArray(t)?t:ae(document.querySelectorAll(t))}function me(t,e){t.forEach(function(r){r&&(r.style.transitionDuration=e+"ms")})}function _e(t,e){t.forEach(function(r){r&&r.setAttribute("data-state",e)})}function qn(t){var e,r=St(t),n=r[0];return n!=null&&(e=n.ownerDocument)!=null&&e.body?n.ownerDocument:document}function _n(t,e){var r=e.clientX,n=e.clientY;return t.every(function(i){var s=i.popperRect,l=i.popperState,u=i.props,c=u.interactiveBorder,f=Nn(l.placement),p=l.modifiersData.offset;if(!p)return!0;var b=f==="bottom"?p.top.y:0,x=f==="top"?p.bottom.y:0,g=f==="right"?p.left.x:0,w=f==="left"?p.right.x:0,h=s.top-n+b>c,y=n-s.bottom-x>c,S=s.left-r+g>c,T=r-s.right-w>c;return h||y||S||T})}function ge(t,e,r){var n=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(i){t[n](i,r)})}function Xe(t,e){for(var r=e;r;){var n;if(t.contains(r))return!0;r=r.getRootNode==null||(n=r.getRootNode())==null?void 0:n.host}return!1}var Z={isTouch:!1},Ye=0;function Xn(){Z.isTouch||(Z.isTouch=!0,window.performance&&document.addEventListener("mousemove",vr))}function vr(){var t=performance.now();t-Ye<20&&(Z.isTouch=!1,document.removeEventListener("mousemove",vr)),Ye=t}function Yn(){var t=document.activeElement;if(Un(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}function Gn(){document.addEventListener("touchstart",Xn,vt),window.addEventListener("blur",Yn)}var Jn=typeof window<"u"&&typeof document<"u",Qn=Jn?!!window.msCrypto:!1,Zn={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},to={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Y=Object.assign({appendTo:fr,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Zn,to),eo=Object.keys(Y),ro=function(e){var r=Object.keys(e);r.forEach(function(n){Y[n]=e[n]})};function mr(t){var e=t.plugins||[],r=e.reduce(function(n,i){var s=i.name,l=i.defaultValue;if(s){var u;n[s]=t[s]!==void 0?t[s]:(u=Y[s])!=null?u:l}return n},{});return Object.assign({},t,r)}function no(t,e){var r=e?Object.keys(mr(Object.assign({},Y,{plugins:e}))):eo,n=r.reduce(function(i,s){var l=(t.getAttribute("data-tippy-"+s)||"").trim();if(!l)return i;if(s==="content")i[s]=l;else try{i[s]=JSON.parse(l)}catch{i[s]=l}return i},{});return n}function Ge(t,e){var r=Object.assign({},e,{content:dr(e.content,[t])},e.ignoreAttributes?{}:no(t,e.plugins));return r.aria=Object.assign({},Y.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?e.interactive:r.aria.expanded,content:r.aria.content==="auto"?e.interactive?null:"describedby":r.aria.content},r}var oo=function(){return"innerHTML"};function we(t,e){t[oo()]=e}function Je(t){var e=jt();return t===!0?e.className=ur:(e.className=pr,le(t)?e.appendChild(t):we(e,t)),e}function Qe(t,e){le(e.content)?(we(t,""),t.appendChild(e.content)):typeof e.content!="function"&&(e.allowHTML?we(t,e.content):t.textContent=e.content)}function Oe(t){var e=t.firstElementChild,r=ae(e.children);return{box:e,content:r.find(function(n){return n.classList.contains(lr)}),arrow:r.find(function(n){return n.classList.contains(ur)||n.classList.contains(pr)}),backdrop:r.find(function(n){return n.classList.contains(jn)})}}function gr(t){var e=jt(),r=jt();r.className=Wn,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var n=jt();n.className=lr,n.setAttribute("data-state","hidden"),Qe(n,t.props),e.appendChild(r),r.appendChild(n),i(t.props,t.props);function i(s,l){var u=Oe(e),c=u.box,f=u.content,p=u.arrow;l.theme?c.setAttribute("data-theme",l.theme):c.removeAttribute("data-theme"),typeof l.animation=="string"?c.setAttribute("data-animation",l.animation):c.removeAttribute("data-animation"),l.inertia?c.setAttribute("data-inertia",""):c.removeAttribute("data-inertia"),c.style.maxWidth=typeof l.maxWidth=="number"?l.maxWidth+"px":l.maxWidth,l.role?c.setAttribute("role",l.role):c.removeAttribute("role"),(s.content!==l.content||s.allowHTML!==l.allowHTML)&&Qe(f,t.props),l.arrow?p?s.arrow!==l.arrow&&(c.removeChild(p),c.appendChild(Je(l.arrow))):c.appendChild(Je(l.arrow)):p&&c.removeChild(p)}return{popper:e,onUpdate:i}}gr.$$tippy=!0;var io=1,ne=[],he=[];function ao(t,e){var r=Ge(t,Object.assign({},Y,mr(qe(e)))),n,i,s,l=!1,u=!1,c=!1,f=!1,p,b,x,g=[],w=Ue(Kt,r.interactiveDebounce),h,y=io++,S=null,T=Hn(r.plugins),B={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},o={id:y,reference:t,popper:jt(),popperInstance:S,props:r,state:B,plugins:T,clearDelayTimeouts:Gt,setProps:Jt,setContent:Qt,show:br,hide:wr,hideWithInteractivity:Or,enable:Rt,disable:Yt,unmount:xr,destroy:Ar};if(!r.render)return o;var A=r.render(o),v=A.popper,D=A.onUpdate;v.setAttribute("data-tippy-root",""),v.id="tippy-"+o.id,o.popper=v,t._tippy=o,v._tippy=o;var M=T.map(function(a){return a.fn(o)}),P=t.hasAttribute("aria-expanded");return bt(),J(),W(),$("onCreate",[o]),r.showOnCreate&&Mt(),v.addEventListener("mouseenter",function(){o.props.interactive&&o.state.isVisible&&o.clearDelayTimeouts()}),v.addEventListener("mouseleave",function(){o.props.interactive&&o.props.trigger.indexOf("mouseenter")>=0&&N().addEventListener("mousemove",w)}),o;function C(){var a=o.props.touch;return Array.isArray(a)?a:[a,0]}function R(){return C()[0]==="hold"}function k(){var a;return!!((a=o.props.render)!=null&&a.$$tippy)}function L(){return h||t}function N(){var a=L().parentNode;return a?qn(a):document}function F(){return Oe(v)}function I(a){return o.state.isMounted&&!o.state.isVisible||Z.isTouch||p&&p.type==="focus"?0:ve(o.props.delay,a?0:1,Y.delay)}function W(a){a===void 0&&(a=!1),v.style.pointerEvents=o.props.interactive&&!a?"":"none",v.style.zIndex=""+o.props.zIndex}function $(a,d,m){if(m===void 0&&(m=!0),M.forEach(function(O){O[a]&&O[a].apply(O,d)}),m){var E;(E=o.props)[a].apply(E,d)}}function G(){var a=o.props.aria;if(!!a.content){var d="aria-"+a.content,m=v.id,E=St(o.props.triggerTarget||t);E.forEach(function(O){var j=O.getAttribute(d);if(o.state.isVisible)O.setAttribute(d,j?j+" "+m:m);else{var z=j&&j.replace(m,"").trim();z?O.setAttribute(d,z):O.removeAttribute(d)}})}}function J(){if(!(P||!o.props.aria.expanded)){var a=St(o.props.triggerTarget||t);a.forEach(function(d){o.props.interactive?d.setAttribute("aria-expanded",o.state.isVisible&&d===L()?"true":"false"):d.removeAttribute("aria-expanded")})}}function ut(){N().removeEventListener("mousemove",w),ne=ne.filter(function(a){return a!==w})}function Q(a){if(!(Z.isTouch&&(c||a.type==="mousedown"))){var d=a.composedPath&&a.composedPath()[0]||a.target;if(!(o.props.interactive&&Xe(v,d))){if(St(o.props.triggerTarget||t).some(function(m){return Xe(m,d)})){if(Z.isTouch||o.state.isVisible&&o.props.trigger.indexOf("click")>=0)return}else $("onClickOutside",[o,a]);o.props.hideOnClick===!0&&(o.clearDelayTimeouts(),o.hide(),u=!0,setTimeout(function(){u=!1}),o.state.isMounted||nt())}}}function pt(){c=!0}function rt(){c=!1}function X(){var a=N();a.addEventListener("mousedown",Q,!0),a.addEventListener("touchend",Q,vt),a.addEventListener("touchstart",rt,vt),a.addEventListener("touchmove",pt,vt)}function nt(){var a=N();a.removeEventListener("mousedown",Q,!0),a.removeEventListener("touchend",Q,vt),a.removeEventListener("touchstart",rt,vt),a.removeEventListener("touchmove",pt,vt)}function ht(a,d){yt(a,function(){!o.state.isVisible&&v.parentNode&&v.parentNode.contains(v)&&d()})}function ot(a,d){yt(a,d)}function yt(a,d){var m=F().box;function E(O){O.target===m&&(ge(m,"remove",E),d())}if(a===0)return d();ge(m,"remove",b),ge(m,"add",E),b=E}function st(a,d,m){m===void 0&&(m=!1);var E=St(o.props.triggerTarget||t);E.forEach(function(O){O.addEventListener(a,d,m),g.push({node:O,eventType:a,handler:d,options:m})})}function bt(){R()&&(st("touchstart",Ct,{passive:!0}),st("touchend",qt,{passive:!0})),Vn(o.props.trigger).forEach(function(a){if(a!=="manual")switch(st(a,Ct),a){case"mouseenter":st("mouseleave",qt);break;case"focus":st(Qn?"focusout":"blur",kt);break;case"focusin":st("focusout",kt);break}})}function Ut(){g.forEach(function(a){var d=a.node,m=a.eventType,E=a.handler,O=a.options;d.removeEventListener(m,E,O)}),g=[]}function Ct(a){var d,m=!1;if(!(!o.state.isEnabled||Pt(a)||u)){var E=((d=p)==null?void 0:d.type)==="focus";p=a,h=a.currentTarget,J(),!o.state.isVisible&&zn(a)&&ne.forEach(function(O){return O(a)}),a.type==="click"&&(o.props.trigger.indexOf("mouseenter")<0||l)&&o.props.hideOnClick!==!1&&o.state.isVisible?m=!0:Mt(a),a.type==="click"&&(l=!m),m&&!E&&ft(a)}}function Kt(a){var d=a.target,m=L().contains(d)||v.contains(d);if(!(a.type==="mousemove"&&m)){var E=ct().concat(v).map(function(O){var j,z=O._tippy,wt=(j=z.popperInstance)==null?void 0:j.state;return wt?{popperRect:O.getBoundingClientRect(),popperState:wt,props:r}:null}).filter(Boolean);_n(E,a)&&(ut(),ft(a))}}function qt(a){var d=Pt(a)||o.props.trigger.indexOf("click")>=0&&l;if(!d){if(o.props.interactive){o.hideWithInteractivity(a);return}ft(a)}}function kt(a){o.props.trigger.indexOf("focusin")<0&&a.target!==L()||o.props.interactive&&a.relatedTarget&&v.contains(a.relatedTarget)||ft(a)}function Pt(a){return Z.isTouch?R()!==a.type.indexOf("touch")>=0:!1}function _t(){Xt();var a=o.props,d=a.popperOptions,m=a.placement,E=a.offset,O=a.getReferenceClientRect,j=a.moveTransition,z=k()?Oe(v).arrow:null,wt=O?{getBoundingClientRect:O,contextElement:O.contextElement||L()}:t,ke={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(Zt){var Ot=Zt.state;if(k()){var Sr=F(),fe=Sr.box;["placement","reference-hidden","escaped"].forEach(function(te){te==="placement"?fe.setAttribute("data-placement",Ot.placement):Ot.attributes.popper["data-popper-"+te]?fe.setAttribute("data-"+te,""):fe.removeAttribute("data-"+te)}),Ot.attributes.popper={}}}},dt=[{name:"offset",options:{offset:E}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!j}},ke];k()&&z&&dt.push({name:"arrow",options:{element:z,padding:3}}),dt.push.apply(dt,(d==null?void 0:d.modifiers)||[]),o.popperInstance=In(wt,v,Object.assign({},d,{placement:m,onFirstUpdate:x,modifiers:dt}))}function Xt(){o.popperInstance&&(o.popperInstance.destroy(),o.popperInstance=null)}function it(){var a=o.props.appendTo,d,m=L();o.props.interactive&&a===fr||a==="parent"?d=m.parentNode:d=dr(a,[m]),d.contains(v)||d.appendChild(v),o.state.isMounted=!0,_t()}function ct(){return ae(v.querySelectorAll("[data-tippy-root]"))}function Mt(a){o.clearDelayTimeouts(),a&&$("onTrigger",[o,a]),X();var d=I(!0),m=C(),E=m[0],O=m[1];Z.isTouch&&E==="hold"&&O&&(d=O),d?n=setTimeout(function(){o.show()},d):o.show()}function ft(a){if(o.clearDelayTimeouts(),$("onUntrigger",[o,a]),!o.state.isVisible){nt();return}if(!(o.props.trigger.indexOf("mouseenter")>=0&&o.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(a.type)>=0&&l)){var d=I(!1);d?i=setTimeout(function(){o.state.isVisible&&o.hide()},d):s=requestAnimationFrame(function(){o.hide()})}}function Rt(){o.state.isEnabled=!0}function Yt(){o.hide(),o.state.isEnabled=!1}function Gt(){clearTimeout(n),clearTimeout(i),cancelAnimationFrame(s)}function Jt(a){if(!o.state.isDestroyed){$("onBeforeUpdate",[o,a]),Ut();var d=o.props,m=Ge(t,Object.assign({},d,qe(a),{ignoreAttributes:!0}));o.props=m,bt(),d.interactiveDebounce!==m.interactiveDebounce&&(ut(),w=Ue(Kt,m.interactiveDebounce)),d.triggerTarget&&!m.triggerTarget?St(d.triggerTarget).forEach(function(E){E.removeAttribute("aria-expanded")}):m.triggerTarget&&t.removeAttribute("aria-expanded"),J(),W(),D&&D(d,m),o.popperInstance&&(_t(),ct().forEach(function(E){requestAnimationFrame(E._tippy.popperInstance.forceUpdate)})),$("onAfterUpdate",[o,a])}}function Qt(a){o.setProps({content:a})}function br(){var a=o.state.isVisible,d=o.state.isDestroyed,m=!o.state.isEnabled,E=Z.isTouch&&!o.props.touch,O=ve(o.props.duration,0,Y.duration);if(!(a||d||m||E)&&!L().hasAttribute("disabled")&&($("onShow",[o],!1),o.props.onShow(o)!==!1)){if(o.state.isVisible=!0,k()&&(v.style.visibility="visible"),W(),X(),o.state.isMounted||(v.style.transition="none"),k()){var j=F(),z=j.box,wt=j.content;me([z,wt],0)}x=function(){var dt;if(!(!o.state.isVisible||f)){if(f=!0,v.offsetHeight,v.style.transition=o.props.moveTransition,k()&&o.props.animation){var pe=F(),Zt=pe.box,Ot=pe.content;me([Zt,Ot],O),_e([Zt,Ot],"visible")}G(),J(),Ke(he,o),(dt=o.popperInstance)==null||dt.forceUpdate(),$("onMount",[o]),o.props.animation&&k()&&ot(O,function(){o.state.isShown=!0,$("onShown",[o])})}},it()}}function wr(){var a=!o.state.isVisible,d=o.state.isDestroyed,m=!o.state.isEnabled,E=ve(o.props.duration,1,Y.duration);if(!(a||d||m)&&($("onHide",[o],!1),o.props.onHide(o)!==!1)){if(o.state.isVisible=!1,o.state.isShown=!1,f=!1,l=!1,k()&&(v.style.visibility="hidden"),ut(),nt(),W(!0),k()){var O=F(),j=O.box,z=O.content;o.props.animation&&(me([j,z],E),_e([j,z],"hidden"))}G(),J(),o.props.animation?k()&&ht(E,o.unmount):o.unmount()}}function Or(a){N().addEventListener("mousemove",w),Ke(ne,w),w(a)}function xr(){o.state.isVisible&&o.hide(),o.state.isMounted&&(Xt(),ct().forEach(function(a){a._tippy.unmount()}),v.parentNode&&v.parentNode.removeChild(v),he=he.filter(function(a){return a!==o}),o.state.isMounted=!1,$("onHidden",[o]))}function Ar(){o.state.isDestroyed||(o.clearDelayTimeouts(),o.unmount(),Ut(),delete t._tippy,o.state.isDestroyed=!0,$("onDestroy",[o]))}}function zt(t,e){e===void 0&&(e={});var r=Y.plugins.concat(e.plugins||[]);Gn();var n=Object.assign({},e,{plugins:r}),i=Kn(t),s=i.reduce(function(l,u){var c=u&&ao(u,n);return c&&l.push(c),l},[]);return le(t)?s[0]:s}zt.defaultProps=Y;zt.setDefaultProps=ro;zt.currentInput=Z;Object.assign({},er,{effect:function(e){var r=e.state,n={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,n.popper),r.styles=n,r.elements.arrow&&Object.assign(r.elements.arrow.style,n.arrow)}});zt.setDefaultProps({render:gr});const so=()=>(Date.now()+Math.random()).toString(36).replace(".",""),se=["primary","secondary","dark","white","light","success","warning","danger","info"],hr={id:{type:String,default:()=>so(),description:"ID \xFAnico"},submit:{type:Boolean,default:!1,description:"Habilita el modo `submit`"},loading:{type:[Boolean,String],default:!1,description:"Habilita el modo `loading` y deshabilita el bot\xF3n"},disabled:{type:Boolean,default:!1,description:"Deshabilita el bot\xF3n"},size:{type:String,options:["sm","md","lg"],validator:t=>["sm","md","lg"].includes(t),default:"md",description:"Tama\xF1o del bot\xF3n"},color:{type:String,options:se,validator:t=>se.includes(t),default:"primary",description:"Color del bot\xF3n"},light:{type:Boolean,default:!1,description:"Establece el modo suave del `color` escogido"},outline:{type:Boolean,default:!1,description:"Elimina el fondo del bot\xF3n y establece un borde"},active:{type:Boolean,default:!1,description:"Aplica el estilo `hover` permanentemente al bot\xF3n"},icon:{type:[Array,String],default:"",description:'Renderiza un icono de <a href="https://fontawesome.com/search?q=" target="_blank" title="Ir a FontAwesome"><b>Fontawesome</b></a>'},title:{type:String,default:"",description:"Visualiza el t\xEDtulo del bot\xF3n al pasar por encima"}},co=(t,e)=>{const r=p=>!!e[p],n=["btn user-select-none d-inline-flex align-items-center"],i=[],s=t.outline,l=t.icon,u=t.disabled;let c=t.active,f=t.light;return s&&(c=!0,f=!0),se.includes(t.color)&&!s?i.push(`btn-${t.color}`):se.includes(t.color)&&s&&i.push(`btn-outline btn-outline-dashed btn-outline-${t.color}`),c&&!f?i.push(`btn-active-${t.color}`):c&&f?i.push(`btn-active-light-${t.color}`):!c&&f&&i.push(`btn-light-${t.color}`),l&&!r("default")&&i.push("btn-icon"),t.loading?i.push("cursor-pointer"):u?i.push("cursor-not-allowed","opacity-40"):i.push("cursor-pointer"),t.size&&i.push("btn-"+t.size),n.concat(i)},lo=(t,e)=>{const r=i=>!!e[i],n=[];if(typeof t.icon=="string")n.push("fs-3","fad",`fa-${t.icon}`),r("default")&&n.push("me-2");else if(Array.isArray(t.icon)){const i=t.icon[1].includes("fa-")?t.icon[1]:"fa-"+t.icon[1];n.push("fs-3",t.icon[0],i),r("default")&&n.push("me-2")}return n},yr=Er({name:"KButton",autoload:!0,props:hr,emits:["click"],setup(t,e){const r=c=>!!e.slots[c],n=ee(()=>co(t,e.slots)),i=ee(()=>lo(t,e.slots)),s=ee(()=>t.submit?"submit":"button"),l=ee(()=>typeof t.loading=="string"&&t.loading!==""?!0:t.loading),u=c=>{console.log(t.disabled),t.disabled===!1&&t.loading===!1?e.emit("click"):c.preventDefault()};return Tr(()=>{t.title&&zt("#"+t.id,{content:t.title})}),{buttonClasses:n,type:s,isLoading:l,hasSlot:r,iconClasses:i,click:u}}}),uo=["id"],po={key:0,class:"ms-3"},fo={key:1,class:"ms-3"};function vo(t,e,r,n,i,s){return At(),xt("button",{id:t.id,class:de(t.buttonClasses),onClick:e[0]||(e[0]=(...l)=>t.click&&t.click(...l))},[t.isLoading?(At(),xt(Pe,{key:0},[Me("i",{class:de(["p-0",["far","fa-spinner","fa-spin"]])}),typeof t.loading=="string"?(At(),xt("span",po,Dr(t.loading),1)):(At(),xt("span",fo,[Re(t.$slots,"default")]))],64)):(At(),xt(Pe,{key:1},[t.icon?(At(),xt("i",{key:0,class:de(t.iconClasses)},null,2)):Br("",!0),Me("span",null,[Re(t.$slots,"default")])],64))],10,uo)}const Ce=Lr(yr,[["render",vo]]);yr.__docgenInfo={displayName:"KButton",exportName:"default",description:"",tags:{},events:[{name:"click"}],slots:[{name:"default"}]};const ho={title:"User Actions/Button",component:Ce,argTypes:Cr(hr),parameters:{storySource:{source:`import KButton from './k-button.vue'\r
import KButtonProps from './k-button.props'\r
import { Meta, Story } from '@storybook/vue3'\r
import { renderArgs } from '../../../helpers/storybook'\r
\r
export default {\r
    title: 'User Actions/Button',\r
    component: KButton,\r
    argTypes: renderArgs(KButtonProps),\r
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
interface KodamaComponent {\r
    slot?: string | null\r
    props: Record<string, any>\r
}\r
\r
const KButtonStory = (args: any, customArgs?: any) => {\r
    const props = { ...customArgs, ...args }\r
\r
    return {\r
        parameters: {\r
            docs: {\r
                description: {\r
                    story: 'Some story **markdown**'\r
                }\r
            }\r
        },\r
        components: { KButton },\r
        setup() {\r
            return { props }\r
        },\r
        template: \`<k-button v-bind="props">Button</k-button>\`\r
    }\r
}\r
\r
const KButtonStories = (components: KodamaComponent[]) => {\r
    return {\r
        components: { KButton },\r
        setup() {\r
            return { components }\r
        },\r
        template: \`\r
            <template v-for="(c,i) in components">\r
                <k-button v-if="c.slot === null" v-bind="c.props" class="me-2" />\r
                <k-button v-else v-bind="c.props" class="me-2">{{c.slot || 'Button'}}</k-button>\r
            </template>\r
        \`\r
    }\r
}\r
\r
export const Default: Story = (args) => KButtonStory(args)\r
\r
export const Color: Story = () =>\r
    KButtonStories([\r
        {\r
            slot: 'Primary',\r
            props: { color: 'primary' }\r
        },\r
        {\r
            slot: 'Secondary',\r
            props: { color: 'secondary' }\r
        },\r
        {\r
            slot: 'Dark',\r
            props: { color: 'dark' }\r
        },\r
        {\r
            slot: 'White',\r
            props: { color: 'white' }\r
        },\r
        {\r
            slot: 'Light',\r
            props: { color: 'light' }\r
        },\r
        {\r
            slot: 'Success',\r
            props: { color: 'success' }\r
        },\r
        {\r
            slot: 'Warning',\r
            props: { color: 'warning' }\r
        },\r
        {\r
            slot: 'Danger',\r
            props: { color: 'danger' }\r
        },\r
        {\r
            slot: 'Info',\r
            props: { color: 'info' }\r
        }\r
    ])\r
\r
export const Light: Story = () =>\r
    KButtonStories([\r
        {\r
            slot: 'Primary',\r
            props: { color: 'primary', light: true }\r
        },\r
        {\r
            slot: 'Secondary',\r
            props: { color: 'secondary', light: true }\r
        },\r
        {\r
            slot: 'Dark',\r
            props: { color: 'dark', light: true }\r
        },\r
        {\r
            slot: 'White',\r
            props: { color: 'white', light: true }\r
        },\r
        {\r
            slot: 'Light',\r
            props: { color: 'light', light: true }\r
        },\r
        {\r
            slot: 'Success',\r
            props: { color: 'success', light: true }\r
        },\r
        {\r
            slot: 'Warning',\r
            props: { color: 'warning', light: true }\r
        },\r
        {\r
            slot: 'Danger',\r
            props: { color: 'danger', light: true }\r
        },\r
        {\r
            slot: 'Info',\r
            props: { color: 'info', light: true }\r
        }\r
    ])\r
\r
export const Outline: Story = () =>\r
    KButtonStories([\r
        {\r
            slot: 'Primary',\r
            props: { color: 'primary', outline: true }\r
        },\r
        {\r
            slot: 'Secondary',\r
            props: { color: 'secondary', outline: true }\r
        },\r
        {\r
            slot: 'Dark',\r
            props: { color: 'dark', outline: true }\r
        },\r
        {\r
            slot: 'White',\r
            props: { color: 'white', outline: true }\r
        },\r
        {\r
            slot: 'Light',\r
            props: { color: 'light', outline: true }\r
        },\r
        {\r
            slot: 'Success',\r
            props: { color: 'success', outline: true }\r
        },\r
        {\r
            slot: 'Warning',\r
            props: { color: 'warning', outline: true }\r
        },\r
        {\r
            slot: 'Danger',\r
            props: { color: 'danger', outline: true }\r
        },\r
        {\r
            slot: 'Info',\r
            props: { color: 'info', outline: true }\r
        }\r
    ])\r
\r
export const Active: Story = () =>\r
    KButtonStories([\r
        {\r
            slot: 'Primary',\r
            props: { color: 'primary', active: true }\r
        },\r
        {\r
            slot: 'Secondary',\r
            props: { color: 'secondary', active: true }\r
        },\r
        {\r
            slot: 'Dark',\r
            props: { color: 'dark', active: true }\r
        },\r
        {\r
            slot: 'White',\r
            props: { color: 'white', active: true }\r
        },\r
        {\r
            slot: 'Light',\r
            props: { color: 'light', active: true }\r
        },\r
        {\r
            slot: 'Success',\r
            props: { color: 'success', active: true }\r
        },\r
        {\r
            slot: 'Warning',\r
            props: { color: 'warning', active: true }\r
        },\r
        {\r
            slot: 'Danger',\r
            props: { color: 'danger', active: true }\r
        },\r
        {\r
            slot: 'Info',\r
            props: { color: 'info', active: true }\r
        }\r
    ])\r
\r
export const Size: Story = () =>\r
    KButtonStories([\r
        {\r
            props: {\r
                size: 'sm'\r
            }\r
        },\r
        {\r
            props: {\r
                size: 'md'\r
            }\r
        },\r
        {\r
            props: {\r
                size: 'lg'\r
            }\r
        }\r
    ])\r
\r
export const Loading: Story = (args) => KButtonStory(args, { loading: true })\r
\r
export const Disabled: Story = (args) => KButtonStory(args, { disabled: true })\r
\r
export const Icon: Story = () =>\r
    KButtonStories([\r
        {\r
            slot: 'unicorn',\r
            props: {\r
                icon: ['fal', 'unicorn']\r
            }\r
        },\r
        {\r
            slot: null,\r
            props: {\r
                icon: ['fal', 'unicorn'],\r
                size: 'sm'\r
            }\r
        },\r
        {\r
            slot: null,\r
            props: {\r
                icon: ['fal', 'unicorn']\r
            }\r
        },\r
\r
        {\r
            slot: null,\r
            props: {\r
                icon: ['fal', 'unicorn'],\r
                size: 'lg'\r
            }\r
        }\r
    ])\r
\r
export const Title: Story = (args) =>\r
    KButtonStory(args, { title: 'Lorem ipsum dolor sit' })\r
`,locationsMap:{default:{startLoc:{col:30,line:59},endLoc:{col:58,line:59},startBody:{col:30,line:59},endBody:{col:58,line:59}},color:{startLoc:{col:28,line:61},endLoc:{col:6,line:99},startBody:{col:28,line:61},endBody:{col:6,line:99}},light:{startLoc:{col:28,line:101},endLoc:{col:6,line:139},startBody:{col:28,line:101},endBody:{col:6,line:139}},outline:{startLoc:{col:30,line:141},endLoc:{col:6,line:179},startBody:{col:30,line:141},endBody:{col:6,line:179}},active:{startLoc:{col:29,line:181},endLoc:{col:6,line:219},startBody:{col:29,line:181},endBody:{col:6,line:219}},size:{startLoc:{col:27,line:221},endLoc:{col:6,line:238},startBody:{col:27,line:221},endBody:{col:6,line:238}},loading:{startLoc:{col:30,line:240},endLoc:{col:77,line:240},startBody:{col:30,line:240},endBody:{col:77,line:240}},disabled:{startLoc:{col:31,line:242},endLoc:{col:79,line:242},startBody:{col:31,line:242},endBody:{col:79,line:242}},icon:{startLoc:{col:27,line:244},endLoc:{col:6,line:273},startBody:{col:27,line:244},endBody:{col:6,line:273}},title:{startLoc:{col:28,line:275},endLoc:{col:58,line:276},startBody:{col:28,line:275},endBody:{col:58,line:276}}}},layout:"centered",docs:{description:{component:"Some component _markdown_"}}}},ue=(t,e)=>{const r={...e,...t};return{parameters:{docs:{description:{story:"Some story **markdown**"}}},components:{KButton:Ce},setup(){return{props:r}},template:'<k-button v-bind="props">Button</k-button>'}},Lt=t=>({components:{KButton:Ce},setup(){return{components:t}},template:`
            <template v-for="(c,i) in components">
                <k-button v-if="c.slot === null" v-bind="c.props" class="me-2" />
                <k-button v-else v-bind="c.props" class="me-2">{{c.slot || 'Button'}}</k-button>
            </template>
        `}),yo=t=>ue(t),bo=()=>Lt([{slot:"Primary",props:{color:"primary"}},{slot:"Secondary",props:{color:"secondary"}},{slot:"Dark",props:{color:"dark"}},{slot:"White",props:{color:"white"}},{slot:"Light",props:{color:"light"}},{slot:"Success",props:{color:"success"}},{slot:"Warning",props:{color:"warning"}},{slot:"Danger",props:{color:"danger"}},{slot:"Info",props:{color:"info"}}]),wo=()=>Lt([{slot:"Primary",props:{color:"primary",light:!0}},{slot:"Secondary",props:{color:"secondary",light:!0}},{slot:"Dark",props:{color:"dark",light:!0}},{slot:"White",props:{color:"white",light:!0}},{slot:"Light",props:{color:"light",light:!0}},{slot:"Success",props:{color:"success",light:!0}},{slot:"Warning",props:{color:"warning",light:!0}},{slot:"Danger",props:{color:"danger",light:!0}},{slot:"Info",props:{color:"info",light:!0}}]),Oo=()=>Lt([{slot:"Primary",props:{color:"primary",outline:!0}},{slot:"Secondary",props:{color:"secondary",outline:!0}},{slot:"Dark",props:{color:"dark",outline:!0}},{slot:"White",props:{color:"white",outline:!0}},{slot:"Light",props:{color:"light",outline:!0}},{slot:"Success",props:{color:"success",outline:!0}},{slot:"Warning",props:{color:"warning",outline:!0}},{slot:"Danger",props:{color:"danger",outline:!0}},{slot:"Info",props:{color:"info",outline:!0}}]),xo=()=>Lt([{slot:"Primary",props:{color:"primary",active:!0}},{slot:"Secondary",props:{color:"secondary",active:!0}},{slot:"Dark",props:{color:"dark",active:!0}},{slot:"White",props:{color:"white",active:!0}},{slot:"Light",props:{color:"light",active:!0}},{slot:"Success",props:{color:"success",active:!0}},{slot:"Warning",props:{color:"warning",active:!0}},{slot:"Danger",props:{color:"danger",active:!0}},{slot:"Info",props:{color:"info",active:!0}}]),Ao=()=>Lt([{props:{size:"sm"}},{props:{size:"md"}},{props:{size:"lg"}}]),So=t=>ue(t,{loading:!0}),Eo=t=>ue(t,{disabled:!0}),To=()=>Lt([{slot:"unicorn",props:{icon:["fal","unicorn"]}},{slot:null,props:{icon:["fal","unicorn"],size:"sm"}},{slot:null,props:{icon:["fal","unicorn"]}},{slot:null,props:{icon:["fal","unicorn"],size:"lg"}}]),Do=t=>ue(t,{title:"Lorem ipsum dolor sit"}),Bo=["Default","Color","Light","Outline","Active","Size","Loading","Disabled","Icon","Title"];export{xo as Active,bo as Color,yo as Default,Eo as Disabled,To as Icon,wo as Light,So as Loading,Oo as Outline,Ao as Size,Do as Title,Bo as __namedExportsOrder,ho as default};
//# sourceMappingURL=k-button.stories.67990338.js.map
