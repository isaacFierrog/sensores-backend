import{_ as p,k as d,m as u,o as m,c as _,f as s,l as c,v as n,q as h,p as f,e as w}from"./index.0cec3709.js";const l=localStorage,b={data(){return{correo:"",password:""}},methods:{guardarTokens({access:e,refresh:o}){l.setItem("access",e),l.setItem("refresh",o)},reiniciarCampos(){this.correo="",this.password=""},autenticarUsuario(){if(this.campoCorreoVacio||this.campoPasswordVacio){console.log("Debes de llenar todos los campos para ingresar");return}this.autenticar({correo:this.correo,password:this.password}),this.reiniciarCampos(),this.redireccionar()},redireccionar(){this.estaAutenticado&&(console.log("Hola"),this.$router.push({name:"usuarios-listar"}))},...d({autenticar:"autenticarUsuario"})},computed:{campoCorreoVacio(){return this.correo.length===0},campoPasswordVacio(){return this.password.length===0},...u(["estaAutenticado"])}},a=e=>(f("data-v-45dc4c6b"),e=e(),w(),e),g={class:"layout-login"},v=a(()=>s("h2",{class:"titulo-vista blanco-a"},"Inicio de sesion",-1)),C=a(()=>s("p",{class:"blanco-a form__label"},"CORREO",-1)),I=a(()=>s("p",{class:"blanco-a form__label"},"CONTRASE\xD1A",-1)),x=a(()=>s("input",{type:"submit",value:"Ingresar",class:"form__submit blanco-a txt-upper"},null,-1));function V(e,o,y,S,r,i){return m(),_("div",g,[v,s("form",{onSubmit:o[2]||(o[2]=h((...t)=>i.autenticarUsuario&&i.autenticarUsuario(...t),["prevent"])),class:"form"},[C,c(s("input",{type:"text",placeholder:"Correo de usuario","onUpdate:modelValue":o[0]||(o[0]=t=>r.correo=t),class:"form__input"},null,512),[[n,r.correo]]),I,c(s("input",{type:"password",placeholder:"Password de usuario","onUpdate:modelValue":o[1]||(o[1]=t=>r.password=t),class:"form__input"},null,512),[[n,r.password]]),x],32)])}const A=p(b,[["render",V],["__scopeId","data-v-45dc4c6b"]]);export{A as default};
