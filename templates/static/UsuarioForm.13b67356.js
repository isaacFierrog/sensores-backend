import{_ as x,B as C,g as _,m as S,o as u,c as n,f as s,x as t,y as i,C as b,F as f,h as v,t as y,z as g,q as k,p as B,e as z}from"./index.82fadee2.js";import{u as I}from"./ListadoView.a281c7b9.js";const M={props:{mostrarForm:{type:Boolean,default:!1}},setup(l,{emit:r}){const{mostrarForm:d}=C(l),a=_({correo:"",nombre:"",apellido:"",password:"",mina:"",area:""}),p=_(""),m=()=>{a.value.correo="",a.value.nombre="",a.value.apellido="",a.value.password="",a.value.mina="",a.value.area=""},o=()=>r("actualizarUsuarios"),w=()=>r("ocultarFormulario"),U=async()=>{try{const c=await I.create(a.value),{data:V}=await c.data;console.log(V),m(),o()}catch(c){console.log(c)}},F=S(()=>({"ocultar-layout":d.value}));return{usuario:a,password2:p,ocultarForm:F,crearUsuario:U,ocultarFormulario:w}}},e=l=>(B("data-v-8b40c2db"),l=l(),z(),l),A=e(()=>s("h2",{class:"txt-upper blanco-a titulo-usuario"},"Crear usuario",-1)),D=e(()=>s("p",{class:"blanco-a form__label"},"Correo",-1)),N=e(()=>s("p",{class:"blanco-a form__label"},"Nombre",-1)),h=e(()=>s("p",{class:"blanco-a form__label"},"Apellido",-1)),q=e(()=>s("p",{class:"blanco-a form__label"},"Contrase\xF1a",-1)),E=e(()=>s("p",{class:"blanco-a form__label"},"Verifica password",-1)),G=e(()=>s("p",{class:"blanco-a form__label"},"Mina",-1)),L=["value"],R=e(()=>s("p",{class:"blanco-a form__label"},"Area",-1)),T=["value"],j=e(()=>s("input",{type:"submit",class:"boton-crear boton-usuario blanco-a txt-upper",value:"Guardar"},null,-1));function H(l,r,d,a,p,m){return u(),n("div",{class:k(["layout-usuario-form",a.ocultarForm])},[s("button",{class:"txt-upper blanco-a titulo-usuario boton-cerrar",onClick:r[0]||(r[0]=(...o)=>a.ocultarFormulario&&a.ocultarFormulario(...o))},"x"),A,s("form",{class:"form",onSubmit:r[8]||(r[8]=g((...o)=>a.crearUsuario&&a.crearUsuario(...o),["prevent"]))},[D,t(s("input",{type:"email",class:"form__input","onUpdate:modelValue":r[1]||(r[1]=o=>a.usuario.correo=o)},null,512),[[i,a.usuario.correo]]),N,t(s("input",{type:"text",class:"form__input","onUpdate:modelValue":r[2]||(r[2]=o=>a.usuario.nombre=o)},null,512),[[i,a.usuario.nombre]]),h,t(s("input",{type:"text",class:"form__input","onUpdate:modelValue":r[3]||(r[3]=o=>a.usuario.apellido=o)},null,512),[[i,a.usuario.apellido]]),q,t(s("input",{type:"password",class:"form__input","onUpdate:modelValue":r[4]||(r[4]=o=>a.usuario.password=o)},null,512),[[i,a.usuario.password]]),E,t(s("input",{type:"password",class:"form__input","onUpdate:modelValue":r[5]||(r[5]=o=>a.password2=o)},null,512),[[i,a.password2]]),G,t(s("select",{class:"form__input","onUpdate:modelValue":r[6]||(r[6]=o=>a.usuario.mina=o)},[(u(!0),n(f,null,v(l.minas,o=>(u(),n("option",{key:o,value:o},y(o),9,L))),128))],512),[[b,a.usuario.mina]]),R,t(s("select",{class:"form__input","onUpdate:modelValue":r[7]||(r[7]=o=>l.area=o)},[(u(!0),n(f,null,v(l.areas,o=>(u(),n("option",{key:o,value:o},y(o),9,T))),128))],512),[[b,l.area]]),j],32)],2)}const O=x(M,[["render",H],["__scopeId","data-v-8b40c2db"]]);export{O as default};