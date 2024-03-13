import{Q as I}from"./QColor.4a999a30.js";import{Q as z}from"./QMenu.b9a8767e.js";import{_ as V,av as P,r as v,aR as D,c as U,w as T,T as A,o as R,a as x,b as e,e as n,Q as h,aS as L,j as k,as as N,ap as b,aT as B,l as F,ay as j,az as E,ar as u}from"./index.f603e444.js";import{Q as $}from"./QToolbar.158d6054.js";import{Q as M,a as O,b as q}from"./QFab.13fa20d6.js";import{Q as G}from"./QTooltip.8d1993a0.js";import{Q as K}from"./QPageSticky.118496c4.js";import{C as W}from"./ClosePopup.06611898.js";import{u as H}from"./useShared.1eaddee4.js";import{S as J}from"./signature_pad.b2981795.js";import{u as X}from"./useArchivo.a1848793.js";import"./QResizeObserver.fe5a1657.js";import"./selection.1946e002.js";import"./position-engine.71c32519.js";import"./QItem.6e91d9d5.js";import"./use-quasar.7736967f.js";const Y={setup(){const{userInfo:a}=P(),{uploadUpdatePlantilla:i}=H(),{saveImageSignature:_,getSharedPlantilla:o}=X(),p=v(null);let l=v("");const s=D(),w=v(!1);let S;const g=U(()=>s.params.uid);return T(g,async(t,r)=>{if(!t)return;console.log("que pasa");const{msg:d,ok:c}=await o(t);c?l.value=d.contenido:l.value="<h4>No se encontr\xF3 plantilla con el Id, crea una nueva</h4>"}),A(async()=>{const{msg:t,ok:r}=await o(g.value);r?l.value=t.contenido:l.value="<h4>No se encontr\xF3 plantilla con el Id, crea una nueva</h4>"}),{alert:w,pdf:async()=>{const t=l.value;var r={margin:[15,15],filename:"pdfFileName.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:1,letterRendering:!0,useCORS:!0},jsPDF:{unit:"pt",format:"letter",orientation:"portrait"},pagebreak:{mode:["avoid-all","css","legacy","whiteline"]}};await html2pdf().from(t).set(r).save()},hex:p,qeditor:l,escogerColor(){document.queryCommandEnabled("foreColor")?(document.execCommand("styleWithCSS",!1,!0),document.execCommand("foreColor",!1,p.value)):console.log("El navegador no admite cambiar el color del texto seleccionado.")},showDialog:()=>{w.value=!0,setTimeout(()=>{const t=document.querySelector(".canvas-signature");console.log(t),S=new J(t)},100)},sendImageSignature:()=>{function t(r){for(var d=r.split(";base64,"),c=d[0].split(":")[1],m=window.atob(d[1]),C=m.length,y=new Uint8Array(C),f=0;f<C;++f)y[f]=m.charCodeAt(f);return new Blob([y],{type:c})}setTimeout(async()=>{const r=S.toDataURL();var d=t(r);console.log(r,"signature");const{msg:c,ok:m}=await _(a.value.uid,d);m&&(l.value+=`<img src = ${c.urlImage} />`)},100)},sendUpdatePlantilla:async()=>{if(l.value){const t=l.value;await i(g.value,t)}}}}},Q=a=>(j("data-v-d511750c"),a=a(),E(),a),Z={class:"q-pa-md"},ee=Q(()=>u("div",{class:"text-h6"},"Firmar el documento",-1)),ae=Q(()=>u("div",{id:"signature-pad",class:"signature-pad"},[u("div",{class:"signature-pad--body row justify-center"},[u("canvas",{class:"canvas-signature bg-deep-purple-2",width:"300",height:"200"})]),u("div",{class:"signature-pad--footer"})],-1));function oe(a,i,_,o,p,l){return R(),x("div",Z,[e($,{class:"bg-indigo-1 text-white"},{default:n(()=>[e(h,{size:"0.8rem",color:"orange"},{default:n(()=>[e(z,null,{default:n(()=>[e(I,{modelValue:o.hex,"onUpdate:modelValue":i[0]||(i[0]=s=>o.hex=s),"no-footer":"","no-header":"",onClick:o.escogerColor},null,8,["modelValue","onClick"])]),_:1})]),_:1})]),_:1}),e(M,{id:"editor",modelValue:o.qeditor,"onUpdate:modelValue":i[1]||(i[1]=s=>o.qeditor=s),dense:a.$q.screen.lt.md,"toolbar-bg":"indigo-1",toolbar:[[{label:a.$q.lang.editor.align,icon:a.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:a.$q.lang.editor.align,icon:a.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:a.$q.lang.editor.formatting,icon:a.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:a.$q.lang.editor.fontSize,icon:a.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:a.$q.lang.editor.defaultFont,icon:a.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["modelValue","dense","toolbar"]),e(h,{class:"q-mt-md",color:"red-13",size:"md",label:"Descargar Archivo",onClick:o.pdf},null,8,["onClick"]),e(K,{position:"bottom-right",offset:[50,18]},{default:n(()=>[e(O,{icon:"keyboard_arrow_up",direction:"up",color:"red-13"},{default:n(()=>[e(q,{onClick:o.showDialog,color:"teal-5",icon:"edit",label:"firmar"},null,8,["onClick"]),e(q,{onClick:o.sendUpdatePlantilla,color:"teal-5",icon:"done_all",label:"Enviar y finalizar"},null,8,["onClick"])]),_:1}),e(G,{anchor:"center left",self:"center right"},{default:n(()=>[k(" Desplegar ")]),_:1})]),_:1}),e(L,{modelValue:o.alert,"onUpdate:modelValue":i[2]||(i[2]=s=>o.alert=s)},{default:n(()=>[e(N,{class:"my_card"},{default:n(()=>[e(b,null,{default:n(()=>[ee]),_:1}),e(b,{class:"q-pt-none"},{default:n(()=>[k(" Revisa el archivo que se a Descargado(abierto) antes de firmar ")]),_:1}),e(b,null,{default:n(()=>[ae]),_:1}),e(B,{align:"right"},{default:n(()=>[F(e(h,{flat:"",label:"OK",color:"primary",onClick:o.sendImageSignature},null,8,["onClick"]),[[W]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var ye=V(Y,[["render",oe],["__scopeId","data-v-d511750c"]]);export{ye as default};