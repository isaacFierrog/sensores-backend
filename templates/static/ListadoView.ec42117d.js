import{A as g,_ as E,d as p,g as n,r as v,o as _,c as b,f as t,F as I,h as y,b as L,a as F,i as V,p as k,e as w,j as B}from"./index.a96a3f0d.js";const f="usuarios/",C={list(){return g.get(f,{headers:{Authorization:`Bearer ${localStorage.getItem("access")}`}})},create(a){return g.post(f,a,{headers:{Authorization:`Bearer ${localStorage.getItem("access")}`}})}};const O={components:{UsuarioForm:p(()=>F(()=>import("./UsuarioForm.0163241f.js"),["static/UsuarioForm.0163241f.js","static/UsuarioForm.525fff5d.css","static/index.a96a3f0d.js","static/index.64017e9b.css"])),Usuario:p(()=>F(()=>import("./UsuarioComponent.7de5eec3.js"),["static/UsuarioComponent.7de5eec3.js","static/UsuarioComponent.2f6afb87.css","static/index.a96a3f0d.js","static/index.64017e9b.css"]))},setup(){const a=n(null),r=n(!0),l=n(null),o=n(null),c=n(null),m=i=>{console.log("Listado",i),l.value=a.value.filter(u=>u.id===i),console.log(l.value),r.value=!0},e=async()=>{try{const u=await(await C.list()).data,{results:h,previous:P,next:S}=u;a.value=h,o.value=!!P,c.value=!!S,console.log(u)}catch(i){console.log(i)}},d=()=>r.value=!r.value,s=()=>{e()},A=()=>{e()};return e(),{usuarios:a,mostrarForm:r,usuarioEditar:l,paginaAnterior:o,paginaSiguiente:c,editarUsuario:m,mostrarFormulario:d,cambiarPagina:s,regresarPagina:A}}},U=a=>(k("data-v-41a789dd"),a=a(),w(),a),x=U(()=>t("h1",null,"Usuarios",-1)),z=U(()=>t("i",{class:"fa-solid fa-plus"},null,-1)),T=B(" Crear usuario "),j=[z,T],N={class:"botones"},D=["disabled"],R=["disabled"];function M(a,r,l,o,c,m){const e=v("Usuario"),d=v("UsuarioForm");return _(),b("div",null,[x,t("button",{class:"boton-crear blanco-a",onClick:r[0]||(r[0]=(...s)=>o.mostrarFormulario&&o.mostrarFormulario(...s))},j),(_(!0),b(I,null,y(o.usuarios,s=>(_(),V(e,{usuario:s,key:s,onEditarUsuario:o.editarUsuario},null,8,["usuario","onEditarUsuario"]))),128)),L(d,{mostrarForm:o.mostrarForm,usuario:o.usuarioEditar,onOcultarFormulario:o.mostrarFormulario,onActualizarUsuarios:a.mostrarUsuarios},null,8,["mostrarForm","usuario","onOcultarFormulario","onActualizarUsuarios"]),t("section",N,[t("button",{disabled:!o.paginaAnterior,class:"boton",onClick:r[1]||(r[1]=(...s)=>o.regresarPagina&&o.regresarPagina(...s))}," Anterior ",8,D),t("button",{disabled:!o.paginaSiguiente,class:"boton",onClick:r[2]||(r[2]=(...s)=>o.cambiarPagina&&o.cambiarPagina(...s))}," Siguiente ",8,R)])])}const q=E(O,[["render",M],["__scopeId","data-v-41a789dd"]]),H=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{H as L,C as u};
