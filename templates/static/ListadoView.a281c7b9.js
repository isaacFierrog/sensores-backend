import{A as g,_ as k,d as p,g as n,r as v,o as _,c as b,f as e,F as y,h as E,i as I,b as V,a as f,j as L,p as C,e as w,k as B}from"./index.82fadee2.js";const F="usuarios/",O={list(){return g.get(F,{headers:{Authorization:`Bearer ${localStorage.getItem("access")}`}})},create(a){return g.post(F,a,{headers:{Authorization:`Bearer ${localStorage.getItem("access")}`}})}};const x={components:{UsuarioForm:p(()=>f(()=>import("./UsuarioForm.13b67356.js"),["static/UsuarioForm.13b67356.js","static/UsuarioForm.525fff5d.css","static/index.82fadee2.js","static/index.64017e9b.css"])),Usuario:p(()=>f(()=>import("./UsuarioComponent.0c92d5a0.js"),["static/UsuarioComponent.0c92d5a0.js","static/UsuarioComponent.2f6afb87.css","static/index.82fadee2.js","static/index.64017e9b.css"]))},setup(){const a=n(null),r=n(!0),u=n(null),o=n(null),c=n(null),m=i=>{console.log("Listado",i),u.value=a.value.filter(l=>l.id===i),console.log(u.value),r.value=!0},t=async()=>{try{const l=await(await O.list()).data,{results:h,previous:P,next:S}=l;a.value=h,o.value=!!P,c.value=!!S,console.log(l)}catch(i){console.log(i)}},d=()=>r.value=!r.value,s=()=>{t()},A=()=>{t()};return t(),{usuarios:a,mostrarForm:r,usuarioEditar:u,paginaAnterior:o,paginaSiguiente:c,editarUsuario:m,mostrarFormulario:d,cambiarPagina:s,regresarPagina:A}}},U=a=>(C("data-v-f5509c90"),a=a(),w(),a),z=U(()=>e("h1",null,"Usuarios",-1)),N=U(()=>e("i",{class:"fa-solid fa-plus"},null,-1)),T=B(" Crear usuario "),j=[N,T],D={class:"botones"},R=["disabled"],M=["disabled"];function q(a,r,u,o,c,m){const t=v("Usuario"),d=v("UsuarioForm");return _(),b("div",null,[z,e("button",{class:"boton-crear blanco-a",onClick:r[0]||(r[0]=(...s)=>o.mostrarFormulario&&o.mostrarFormulario(...s))},j),o.usuarios?(_(!0),b(y,{key:0},E(o.usuarios,s=>(_(),L(t,{usuario:s,key:s,onEditarUsuario:o.editarUsuario},null,8,["usuario","onEditarUsuario"]))),128)):I("",!0),V(d,{mostrarForm:o.mostrarForm,usuario:o.usuarioEditar,onOcultarFormulario:o.mostrarFormulario,onActualizarUsuarios:a.mostrarUsuarios},null,8,["mostrarForm","usuario","onOcultarFormulario","onActualizarUsuarios"]),e("section",D,[e("button",{disabled:!o.paginaAnterior,class:"boton",onClick:r[1]||(r[1]=(...s)=>o.regresarPagina&&o.regresarPagina(...s))}," Anterior ",8,R),e("button",{disabled:!o.paginaSiguiente,class:"boton",onClick:r[2]||(r[2]=(...s)=>o.cambiarPagina&&o.cambiarPagina(...s))}," Siguiente ",8,M)])])}const G=k(x,[["render",q],["__scopeId","data-v-f5509c90"]]),J=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{J as L,O as u};