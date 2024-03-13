import{Q as ne}from"./QResizeObserver.fe5a1657.js";import{q as Z,v as ge,x as F,y as we,r as m,c as o,w as h,z as ce,A as Ae,B as y,C as ve,D as qe,E as _e,G as pe,H as De,I as Le,J as Ve,l as se,K as ie,L as fe,M as Qe,N as We,O as je,P as Fe,S as Ie,T as Re,U as he,V as me,W as Ne,X as Ee}from"./index.f603e444.js";import{a as Ue}from"./QLayout.337e4fdc.js";import{b as D,T as E}from"./QToolbar.158d6054.js";var et=Z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:L,emit:M}){const{proxy:{$q:B}}=ve(),c=ge(we,F);if(c===F)return console.error("QHeader needs to be child of QLayout"),F;const b=m(parseInt(e.heightHint,10)),s=m(!0),a=o(()=>e.reveal===!0||c.view.value.indexOf("H")>-1||B.platform.is.ios&&c.isContainer.value===!0),T=o(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return s.value===!0?b.value:0;const u=b.value-c.scroll.value.position;return u>0?u:0}),Q=o(()=>e.modelValue!==!0||a.value===!0&&s.value!==!0),r=o(()=>e.modelValue===!0&&Q.value===!0&&e.reveal===!0),H=o(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(Q.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=o(()=>{const u=c.rows.value.top,w={};return u[0]==="l"&&c.left.space===!0&&(w[B.lang.rtl===!0?"right":"left"]=`${c.left.size}px`),u[2]==="r"&&c.right.space===!0&&(w[B.lang.rtl===!0?"left":"right"]=`${c.right.size}px`),w});function S(u,w){c.update("header",u,w)}function f(u,w){u.value!==w&&(u.value=w)}function $({height:u}){f(b,u),S("size",u)}function g(u){r.value===!0&&f(s,!0),M("focusin",u)}h(()=>e.modelValue,u=>{S("space",u),f(s,!0),c.animate()}),h(T,u=>{S("offset",u)}),h(()=>e.reveal,u=>{u===!1&&f(s,e.modelValue)}),h(s,u=>{c.animate(),M("reveal",u)}),h(c.scroll,u=>{e.reveal===!0&&f(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const d={};return c.instances.header=d,e.modelValue===!0&&S("size",b.value),S("space",e.modelValue),S("offset",T.value),ce(()=>{c.instances.header===d&&(c.instances.header=void 0,S("size",0),S("offset",0),S("space",!1))}),()=>{const u=Ae(L.default,[]);return e.elevated===!0&&u.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(y(ne,{debounce:0,onResize:$})),y("header",{class:H.value,style:z.value,onFocusin:g},u)}}});const be=["vertical","horizontal"],ue={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ye={prevent:!0,mouse:!0,mouseAllDir:!0},ze=e=>e>=250?50:Math.ceil(e/5);var tt=Z({name:"QScrollArea",props:{...qe,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:L,emit:M}){const B=m(!1),c=m(!1),b=m(!1),s={vertical:m(0),horizontal:m(0)},a={vertical:{ref:m(null),position:m(0),size:m(0)},horizontal:{ref:m(null),position:m(0),size:m(0)}},{proxy:T}=ve(),Q=_e(e,T.$q);let r=null,H;const z=m(null),S=o(()=>"q-scrollarea"+(Q.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=o(()=>{const l=a.vertical.size.value-s.vertical.value;if(l<=0)return 0;const i=D(a.vertical.position.value/l,0,1);return Math.round(i*1e4)/1e4}),a.vertical.thumbHidden=o(()=>(e.visible===null?b.value:e.visible)!==!0&&B.value===!1&&c.value===!1||a.vertical.size.value<=s.vertical.value+1),a.vertical.thumbStart=o(()=>a.vertical.percentage.value*(s.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=o(()=>Math.round(D(s.vertical.value*s.vertical.value/a.vertical.size.value,ze(s.vertical.value),s.vertical.value))),a.vertical.style=o(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=o(()=>{const l=a.horizontal.size.value-s.horizontal.value;if(l<=0)return 0;const i=D(Math.abs(a.horizontal.position.value)/l,0,1);return Math.round(i*1e4)/1e4}),a.horizontal.thumbHidden=o(()=>(e.visible===null?b.value:e.visible)!==!0&&B.value===!1&&c.value===!1||a.horizontal.size.value<=s.horizontal.value+1),a.horizontal.thumbStart=o(()=>a.horizontal.percentage.value*(s.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=o(()=>Math.round(D(s.horizontal.value*s.horizontal.value/a.horizontal.size.value,ze(s.horizontal.value),s.horizontal.value))),a.horizontal.style=o(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[T.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=o(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=o(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const f=o(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),$=[[E,l=>{X(l,"vertical")},void 0,{vertical:!0,...ye}]],g=[[E,l=>{X(l,"horizontal")},void 0,{horizontal:!0,...ye}]];function d(){const l={};return be.forEach(i=>{const v=a[i];l[i+"Position"]=v.position.value,l[i+"Percentage"]=v.percentage.value,l[i+"Size"]=v.size.value,l[i+"ContainerSize"]=s[i].value}),l}const u=pe(()=>{const l=d();l.ref=T,M("scroll",l)},0);function w(l,i,v){if(be.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?fe:ie)(z.value,i,v)}function U({height:l,width:i}){let v=!1;s.vertical.value!==l&&(s.vertical.value=l,v=!0),s.horizontal.value!==i&&(s.horizontal.value=i,v=!0),v===!0&&O()}function I({position:l}){let i=!1;a.vertical.position.value!==l.top&&(a.vertical.position.value=l.top,i=!0),a.horizontal.position.value!==l.left&&(a.horizontal.position.value=l.left,i=!0),i===!0&&O()}function V({height:l,width:i}){a.horizontal.size.value!==i&&(a.horizontal.size.value=i,O()),a.vertical.size.value!==l&&(a.vertical.size.value=l,O())}function X(l,i){const v=a[i];if(l.isFirst===!0){if(v.thumbHidden.value===!0)return;H=v.position.value,c.value=!0}else if(c.value!==!0)return;l.isFinal===!0&&(c.value=!1);const P=ue[i],j=s[i].value,ee=(v.size.value-j)/(j-v.thumbSize.value),J=l.distance[P.dist],te=H+(l.direction===P.dir?1:-1)*J*ee;R(te,i)}function K(l,i){const v=a[i];if(v.thumbHidden.value!==!0){const P=l[ue[i].offset];if(P<v.thumbStart.value||P>v.thumbStart.value+v.thumbSize.value){const j=P-v.thumbSize.value/2;R(j/s[i].value*v.size.value,i)}v.ref.value!==null&&v.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function W(l){K(l,"vertical")}function C(l){K(l,"horizontal")}function O(){B.value=!0,r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,B.value=!1},e.delay),e.onScroll!==void 0&&u()}function R(l,i){z.value[ue[i].scroll]=l}let q=null;function N(){q!==null&&clearTimeout(q),q=setTimeout(()=>{q=null,b.value=!0},T.$q.platform.is.ios?50:0)}function G(){q!==null&&(clearTimeout(q),q=null),b.value=!1}let x=null;return h(()=>T.$q.lang.rtl,l=>{z.value!==null&&ie(z.value,Math.abs(a.horizontal.position.value)*(l===!0?-1:1))}),De(()=>{x={top:a.vertical.position.value,left:a.horizontal.position.value}}),Le(()=>{if(x===null)return;const l=z.value;l!==null&&(ie(l,x.left),fe(l,x.top))}),ce(u.cancel),Object.assign(T,{getScrollTarget:()=>z.value,getScroll:d,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:w,setScrollPercentage(l,i,v){w(l,i*(a[l].size.value-s[l].value)*(l==="horizontal"&&T.$q.lang.rtl===!0?-1:1),v)}}),()=>y("div",{class:S.value,onMouseenter:N,onMouseleave:G},[y("div",{ref:z,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[y("div",{class:"q-scrollarea__content absolute",style:f.value},Ve(L.default,[y(ne,{debounce:0,onResize:V})])),y(Ue,{axis:"both",onScroll:I})]),y(ne,{debounce:0,onResize:U}),y("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:W}),y("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:C}),se(y("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),$),se(y("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),g)])}});const Se=150;var at=Z({name:"QDrawer",inheritAttrs:!1,props:{...Qe,...qe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...We,"onLayout","miniState"],setup(e,{slots:L,emit:M,attrs:B}){const c=ve(),{proxy:{$q:b}}=c,s=_e(e,b),{preventBodyScroll:a}=Ee(),{registerTimeout:T,removeTimeout:Q}=je(),r=ge(we,F);if(r===F)return console.error("QDrawer needs to be child of QLayout"),F;let H,z=null,S;const f=m(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),$=o(()=>e.mini===!0&&f.value!==!0),g=o(()=>$.value===!0?e.miniWidth:e.width),d=m(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),u=o(()=>e.persistent!==!0&&(f.value===!0||P.value===!0));function w(t,n){if(X(),t!==!1&&r.animate(),k(0),f.value===!0){const _=r.instances[x.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),A(1),r.isContainer.value!==!0&&a(!0)}else A(0),t!==!1&&le(!1);T(()=>{t!==!1&&le(!0),n!==!0&&M("show",t)},Se)}function U(t,n){K(),t!==!1&&r.animate(),A(0),k(O.value*g.value),re(),n!==!0?T(()=>{M("hide",t)},Se):Q()}const{show:I,hide:V}=Fe({showing:d,hideOnRouteChange:u,handleShow:w,handleHide:U}),{addToHistory:X,removeFromHistory:K}=Ie(d,V,u),W={belowBreakpoint:f,hide:V},C=o(()=>e.side==="right"),O=o(()=>(b.lang.rtl===!0?-1:1)*(C.value===!0?1:-1)),R=m(0),q=m(!1),N=m(!1),G=m(g.value*O.value),x=o(()=>C.value===!0?"left":"right"),l=o(()=>d.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:g.value:0),i=o(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(C.value?"R":"L")>-1||b.platform.is.ios===!0&&r.isContainer.value===!0),v=o(()=>e.overlay===!1&&d.value===!0&&f.value===!1),P=o(()=>e.overlay===!0&&d.value===!0&&f.value===!1),j=o(()=>"fullscreen q-drawer__backdrop"+(d.value===!1&&q.value===!1?" hidden":"")),ee=o(()=>({backgroundColor:`rgba(0,0,0,${R.value*.4})`})),J=o(()=>C.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),te=o(()=>C.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Te=o(()=>{const t={};return r.header.space===!0&&J.value===!1&&(i.value===!0?t.top=`${r.header.offset}px`:r.header.space===!0&&(t.top=`${r.header.size}px`)),r.footer.space===!0&&te.value===!1&&(i.value===!0?t.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(t.bottom=`${r.footer.size}px`)),t}),Me=o(()=>{const t={width:`${g.value}px`,transform:`translateX(${G.value}px)`};return f.value===!0?t:Object.assign(t,Te.value)}),ke=o(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Be=o(()=>`q-drawer q-drawer--${e.side}`+(N.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(q.value===!0?" no-transition":d.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(i.value===!0||v.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(J.value===!0?" q-drawer--top-padding":""))),Ce=o(()=>{const t=b.lang.rtl===!0?e.side:x.value;return[[E,Pe,void 0,{[t]:!0,mouse:!0}]]}),Oe=o(()=>{const t=b.lang.rtl===!0?x.value:e.side;return[[E,de,void 0,{[t]:!0,mouse:!0}]]}),$e=o(()=>{const t=b.lang.rtl===!0?x.value:e.side;return[[E,de,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ae(){He(f,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}h(f,t=>{t===!0?(H=d.value,d.value===!0&&V(!1)):e.overlay===!1&&e.behavior!=="mobile"&&H!==!1&&(d.value===!0?(k(0),A(0),re()):I(!1))}),h(()=>e.side,(t,n)=>{r.instances[n]===W&&(r.instances[n]=void 0,r[n].space=!1,r[n].offset=0),r.instances[t]=W,r[t].size=g.value,r[t].space=v.value,r[t].offset=l.value}),h(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ae()}),h(()=>e.behavior+e.breakpoint,ae),h(r.isContainer,t=>{d.value===!0&&a(t!==!0),t===!0&&ae()}),h(r.scrollbarWidth,()=>{k(d.value===!0?0:void 0)}),h(l,t=>{p("offset",t)}),h(v,t=>{M("onLayout",t),p("space",t)}),h(C,()=>{k()}),h(g,t=>{k(),oe(e.miniToOverlay,t)}),h(()=>e.miniToOverlay,t=>{oe(t,g.value)}),h(()=>b.lang.rtl,()=>{k()}),h(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(xe(),r.animate())}),h($,t=>{M("miniState",t)});function k(t){t===void 0?he(()=>{t=d.value===!0?0:g.value,k(O.value*t)}):(r.isContainer.value===!0&&C.value===!0&&(f.value===!0||Math.abs(t)===g.value)&&(t+=O.value*r.scrollbarWidth.value),G.value=t)}function A(t){R.value=t}function le(t){const n=t===!0?"remove":r.isContainer.value!==!0?"add":"";n!==""&&document.body.classList[n]("q-body--drawer-toggle")}function xe(){z!==null&&clearTimeout(z),c.proxy&&c.proxy.$el&&c.proxy.$el.classList.add("q-drawer--mini-animate"),N.value=!0,z=setTimeout(()=>{z=null,N.value=!1,c&&c.proxy&&c.proxy.$el&&c.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Pe(t){if(d.value!==!1)return;const n=g.value,_=D(t.distance.x,0,n);if(t.isFinal===!0){_>=Math.min(75,n)===!0?I():(r.animate(),A(0),k(O.value*n)),q.value=!1;return}k((b.lang.rtl===!0?C.value!==!0:C.value)?Math.max(n-_,0):Math.min(0,_-n)),A(D(_/n,0,1)),t.isFirst===!0&&(q.value=!0)}function de(t){if(d.value!==!0)return;const n=g.value,_=t.direction===e.side,Y=(b.lang.rtl===!0?_!==!0:_)?D(t.distance.x,0,n):0;if(t.isFinal===!0){Math.abs(Y)<Math.min(75,n)===!0?(r.animate(),A(1),k(0)):V(),q.value=!1;return}k(O.value*Y),A(D(1-Y/n,0,1)),t.isFirst===!0&&(q.value=!0)}function re(){a(!1),le(!0)}function p(t,n){r.update(e.side,t,n)}function He(t,n){t.value!==n&&(t.value=n)}function oe(t,n){p("size",t===!0?e.miniWidth:n)}return r.instances[e.side]=W,oe(e.miniToOverlay,g.value),p("space",v.value),p("offset",l.value),e.showIfAbove===!0&&e.modelValue!==!0&&d.value===!0&&e["onUpdate:modelValue"]!==void 0&&M("update:modelValue",!0),Re(()=>{M("onLayout",v.value),M("miniState",$.value),H=e.showIfAbove===!0;const t=()=>{(d.value===!0?w:U)(!1,!0)};if(r.totalWidth.value!==0){he(t);return}S=h(r.totalWidth,()=>{S(),S=void 0,d.value===!1&&e.showIfAbove===!0&&f.value===!1?I(!1):t()})}),ce(()=>{S!==void 0&&S(),z!==null&&(clearTimeout(z),z=null),d.value===!0&&re(),r.instances[e.side]===W&&(r.instances[e.side]=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const t=[];f.value===!0&&(e.noSwipeOpen===!1&&t.push(se(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ce.value)),t.push(me("div",{ref:"backdrop",class:j.value,style:ee.value,"aria-hidden":"true",onClick:V},void 0,"backdrop",e.noSwipeBackdrop!==!0&&d.value===!0,()=>$e.value)));const n=$.value===!0&&L.mini!==void 0,_=[y("div",{...B,key:""+n,class:[ke.value,B.class]},n===!0?L.mini():Ne(L.default))];return e.elevated===!0&&d.value===!0&&_.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(me("aside",{ref:"content",class:Be.value,style:Me.value},_,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>Oe.value)),y("div",{class:"q-drawer-container"},t)}}});const Xe=y("div",{class:"q-space"});var lt=Z({name:"QSpace",setup(){return()=>Xe}});export{lt as Q,et as a,tt as b,at as c};
