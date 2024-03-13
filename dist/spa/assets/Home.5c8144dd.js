import{Q as H,a as $,b as S,c as q}from"./QSpace.0a28db51.js";import{Q as b,a as d}from"./QItem.6e91d9d5.js";import{d as O,r as C,s as R,c as V,w as N,_ as D,u as L,o as n,a as f,b as o,e as r,Q as g,F as _,f as h,g as p,h as T,i as k,j as w,k as Q,l as B,t as x,m as F,n as U,p as A,R as j}from"./index.f603e444.js";import{Q as z}from"./QList.65ba2180.js";import{Q as E}from"./QPageContainer.65582b99.js";import{Q as P}from"./QLayout.337e4fdc.js";import{u as W}from"./use-quasar.7736967f.js";import{Q as G}from"./QToolbar.158d6054.js";import"./QResizeObserver.fe5a1657.js";import"./selection.1946e002.js";const I=O("ui",()=>{const e=C(!1);function a(){e.value=!e.value}function s(){e.value=!1}return{isDrawerOpen:e,toggleDrawer:a,forceToggleDrawer:s}});function y(){const e=I(),a=W(),{isDrawerOpen:s}=R(e),{toggleDrawer:t,forceToggleDrawer:u}=e,m=V(()=>a.screen.width);return N(m,(i,c)=>{i>=600&&u()}),{toggleDrawer:t,isDrawerOpen:s}}const J={setup(){const{toggleDrawer:e}=y(),a=L(),s=t=>{a.push({name:t})};return{toggleDrawer:e,model:C("one"),goLink:s,options:[{label:"Contacto",value:"contacto"},{label:"Nosotros",value:"nosotros"},{label:"login",value:"login"},{label:"Registrarse",value:"registrarse"}]}}},K={class:"q-pa-sm bg-turquoise"};function M(e,a,s,t,u,m){return n(),f("div",K,[o(G,{class:"bg-turquoise text-white"},{default:r(()=>[o(g,{flat:"",round:"",dense:"",label:"OneLoop",class:"q-mr-sm",onClick:a[0]||(a[0]=i=>t.goLink("home"))}),o(H),(n(!0),f(_,null,h(t.options,(i,c)=>(n(),p(g,{color:"turquoise",class:"list-items-navbar",unelevated:"",key:c,label:i.label,onClick:l=>t.goLink(i.value)},null,8,["label","onClick"]))),128)),o(g,{flat:"",round:"",dense:"",icon:"menu",class:"icon",onClick:t.toggleDrawer},null,8,["onClick"])]),_:1})])}var X=D(J,[["render",M],["__scopeId","data-v-3ac996ee"]]);const Y=[{icon:"inbox",label:"Contacto",value:"contacto",separator:!0},{icon:"send",label:"Nosotros",value:"nosotros",separator:!1},{icon:"delete",label:"Login",value:"login",separator:!1},{icon:"person_add",label:"Registrarse",value:"registrarse",separator:!1}],Z=T({name:"HomeLayout",components:{HeaderHome:X},setup(){const{isDrawerOpen:e,toggleDrawer:a}=y(),s=L();return{toggleDrawer:a,isDrawerOpen:e,menuList:Y,goLink:u=>{s.push({name:u})}}}});function ee(e,a,s,t,u,m){const i=k("HeaderHome"),c=k("router-view");return n(),p(P,{view:"lHr Lpr lFf"},{default:r(()=>[o($,null,{default:r(()=>[o(i)]),_:1}),o(q,{modelValue:e.isDrawerOpen,"onUpdate:modelValue":a[0]||(a[0]=l=>e.isDrawerOpen=l),side:"right",width:200,breakpoint:1200,overlay:"",bordered:"",class:A(e.$q.dark.isActive?"bg-grey-9":"bg-grey-3")},{default:r(()=>[o(S,{class:"fit"},{default:r(()=>[o(z,null,{default:r(()=>[o(b,null,{default:r(()=>[o(d,null,{default:r(()=>[w(" Close ")]),_:1}),o(d,{avatar:"",onClick:e.toggleDrawer},{default:r(()=>[o(Q,{name:"close",style:{color:"rgb(233, 29, 29)"}})]),_:1},8,["onClick"])]),_:1}),(n(!0),f(_,null,h(e.menuList,(l,v)=>(n(),f(_,{key:v},[B((n(),p(b,{clickable:"",active:l.label==="Outbox",onClick:oe=>e.goLink(l.value)},{default:r(()=>[o(d,{avatar:""},{default:r(()=>[o(Q,{name:l.icon},null,8,["name"])]),_:2},1024),o(d,null,{default:r(()=>[w(x(l.label),1)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[j]]),l.separator?(n(),p(F,{key:"sep"+v})):U("",!0)],64))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","class"]),o(E,null,{default:r(()=>[o(c)]),_:1})]),_:1})}var pe=D(Z,[["render",ee]]);export{pe as default};