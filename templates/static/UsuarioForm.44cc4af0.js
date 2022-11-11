import{u as h}from"./ListadoView.b8ff64b8.js";import{_ as w,o as n,c as p,f as a,q as i,v as c,u as d,F as _,h as b,t as f,s as y,n as v,p as U,e as x}from"./index.4c77faae.js";const F={props:{mostrarForm:{type:Boolean},usuario:{type:Object,required:!1}},data(){return{correo:"",nombre:"",apellido:"",password:"",password2:"",mina:"",area:"",ocultar:!0,minas:["HERMOSILLO","CANANEA"],areas:["A","B","C","D"]}},methods:{async crearUsuario(){try{const t={correo:this.correo,nombre:this.nombre,apellido:this.apellido,password:this.password,mina:this.mina,area:this.area},s=await h.post(t),m=await s.data,{status:u,statusText:r}=s;if(u<200||u>299)throw{status:u,statusText:r};this.reiniciarCampos(),this.actualizarUsuarios()}catch({status:t,statusText:s}){console.log({mensaje:s||"Ocurrio un error",status:t})}},ocultarFormulario(){this.$emit("ocultarFormulario")},actualizarUsuarios(){this.$emit("actualizarUsuarios")},reiniciarCampos(){this.correo="",this.nombre="",this.apellido="",this.password="",this.password2="",this.mina="",this.area=""}},computed:{ocultarForm(){return{"ocultar-layout":this.mostrarForm}}},watch:{usuario(t,s){const{correo:m,nombre:u,apellido:r,mina:l,area:o}=t;this.correo=m,this.nombre=u,this.apellido=r,this.mina=l,this.area=o}}},e=t=>(U("data-v-5175c480"),t=t(),x(),t),C=e(()=>a("h2",{class:"txt-upper blanco-a titulo-usuario"},"Crear usuario",-1)),V=e(()=>a("p",{class:"blanco-a form__label"},"Correo",-1)),S=e(()=>a("p",{class:"blanco-a form__label"},"Nombre",-1)),A=e(()=>a("p",{class:"blanco-a form__label"},"Apellido",-1)),k=e(()=>a("p",{class:"blanco-a form__label"},"Contrase\xF1a",-1)),B=e(()=>a("p",{class:"blanco-a form__label"},"Verifica password",-1)),I=e(()=>a("p",{class:"blanco-a form__label"},"Mina",-1)),M=["value"],g=e(()=>a("p",{class:"blanco-a form__label"},"Area",-1)),z=["value"],N=e(()=>a("input",{type:"submit",class:"boton-crear boton-usuario blanco-a txt-upper",value:"Guardar"},null,-1));function O(t,s,m,u,r,l){return n(),p("div",{class:v(["layout-usuario-form",l.ocultarForm])},[a("button",{class:"txt-upper blanco-a titulo-usuario boton-cerrar",onClick:s[0]||(s[0]=(...o)=>l.ocultarFormulario&&l.ocultarFormulario(...o))},"x"),C,a("form",{class:"form",onSubmit:s[8]||(s[8]=y((...o)=>l.crearUsuario&&l.crearUsuario(...o),["prevent"]))},[V,i(a("input",{type:"email",class:"form__input","onUpdate:modelValue":s[1]||(s[1]=o=>r.correo=o)},null,512),[[c,r.correo]]),S,i(a("input",{type:"text",class:"form__input","onUpdate:modelValue":s[2]||(s[2]=o=>r.nombre=o)},null,512),[[c,r.nombre]]),A,i(a("input",{type:"text",class:"form__input","onUpdate:modelValue":s[3]||(s[3]=o=>r.apellido=o)},null,512),[[c,r.apellido]]),k,i(a("input",{type:"password",class:"form__input","onUpdate:modelValue":s[4]||(s[4]=o=>r.password=o)},null,512),[[c,r.password]]),B,i(a("input",{type:"password",class:"form__input","onUpdate:modelValue":s[5]||(s[5]=o=>r.password2=o)},null,512),[[c,r.password2]]),I,i(a("select",{class:"form__input","onUpdate:modelValue":s[6]||(s[6]=o=>r.mina=o)},[(n(!0),p(_,null,b(r.minas,o=>(n(),p("option",{key:o,value:o},f(o),9,M))),128))],512),[[d,r.mina]]),g,i(a("select",{class:"form__input","onUpdate:modelValue":s[7]||(s[7]=o=>r.area=o)},[(n(!0),p(_,null,b(r.areas,o=>(n(),p("option",{key:o,value:o},f(o),9,z))),128))],512),[[d,r.area]]),N],32)],2)}const E=w(F,[["render",O],["__scopeId","data-v-5175c480"]]);export{E as default};
