import{aA as V,_ as S,u as h,r as u,o as P,g as Q,e as n,ar as i,b as r,aw as g,ap as v,ax as y,k as c,Q as k,as as q,ay as C,az as I}from"./index.f603e444.js";import{Q as z}from"./QPage.0e9a9602.js";import{u as A}from"./use-quasar.7736967f.js";function B(){async function t({user_nombre:o,user_email:d,user_password:e}){try{const{data:l}=await V.post("/api/usuarios",{nombre:o,email:d,password:e});return{ok:!0,msg:"Se cre\xF3 de manera exitosa su cuenta"}}catch(l){return console.log(l),{ok:!1,msg:"Hubo un error al crear la cuenta"}}}return{newAccount:t}}const E={setup(){const{newAccount:t}=B(),o=A(),d=h(),e=u(null),l=u(null),m=u(null),s=u(null),w=u(""),p=u(""),_=u(!0);return{router:d,newAccount:t,nombre:e,nombreRef:l,nombreRules:[a=>a!==null&&a!==""||"introduzca su Nombre completo",a=>a.length>3||"mayor a 3 caracteres"],email:m,emailRef:s,emailRules:[a=>!!a||"ingrese correo",a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||"Ingresa un correo electr\xF3nico v\xE1lido"],password:w,passwordRef:p,isPwd:_,passwordRules:[a=>a!==null&&a!==""||"introduzca contrase\xF1a",a=>a.length>8||"mayor a 8 caracteres"],async onSubmit(){if(s.value.validate(),p.value.validate(),l.value.validate(),s.value.hasError||p.value.hasError||l.value.hasError)o.notify({color:"negative",message:"complete los campos correctamente"});else{const a=m.value,R=w.value,x=e.value,f=await t({user_nombre:x,user_email:a,user_password:R});f.ok?(o.notify({color:"secondary",message:f.msg,type:"positive"}),d.push({name:"login"})):o.notify({color:"negative",message:f.msg,type:"negative"})}}}}},b=t=>(C("data-v-2d4e7d8b"),t=t(),I(),t),N={class:"q-pa-md row justify-center content-center q-gutter-md container-card"},U=b(()=>i("div",{class:"text-h4 text-center"},"Crear Cuenta",-1)),j=b(()=>i("div",{class:"text-grey-6"},"Ya tengo cuenta",-1)),H=b(()=>i("div",{class:"text-grey-6 volver-home"},"Volver principal",-1));function M(t,o,d,e,l,m){return P(),Q(z,null,{default:n(()=>[i("div",N,[r(q,{class:"my-card text-white shadow-up-10"},{default:n(()=>[i("form",{onSubmit:o[4]||(o[4]=g((...s)=>e.onSubmit&&e.onSubmit(...s),["prevent","stop"])),onReset:o[5]||(o[5]=g((...s)=>t.onReset&&t.onReset(...s),["prevent","stop"]))},[r(v,{class:"bg-deep-purple-7 q-mb-md"},{default:n(()=>[U]),_:1}),r(v,null,{default:n(()=>[r(y,{ref:"nombreRef",modelValue:e.nombre,"onUpdate:modelValue":o[0]||(o[0]=s=>e.nombre=s),rounded:"",outlined:"",label:"nombre completo","lazy-rules":"",rules:e.nombreRules,class:"q-my-md"},{prepend:n(()=>[r(c,{name:"person"})]),_:1},8,["modelValue","rules"]),r(y,{ref:"emailRef",modelValue:e.email,"onUpdate:modelValue":o[1]||(o[1]=s=>e.email=s),rounded:"",outlined:"",label:"su correo *","lazy-rules":"",rules:e.emailRules,class:"q-my-md"},{prepend:n(()=>[r(c,{name:"email"})]),_:1},8,["modelValue","rules"]),r(y,{ref:"passwordRef",modelValue:e.password,"onUpdate:modelValue":o[3]||(o[3]=s=>e.password=s),label:"Password",rounded:"",outlined:"",type:e.isPwd?"password":"text",rules:e.passwordRules,class:"q-my-md"},{prepend:n(()=>[r(c,{name:"lock"})]),append:n(()=>[r(c,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[2]||(o[2]=s=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),r(k,{size:"lg",style:{width:"100%"},label:"Submit",type:"submit",color:"secondary"})]),_:1}),r(v,{class:"text-center q-pa-sm"},{default:n(()=>[j,H]),_:1})],32)]),_:1})])]),_:1})}var G=S(E,[["render",M],["__scopeId","data-v-2d4e7d8b"]]);export{G as default};
