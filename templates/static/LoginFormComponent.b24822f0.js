import{u as V,s as g,g as l,v as w,m as v,_ as I,d as A,a as x,r as L,o as d,c as p,j as k,i as _,f as r,x as f,y as b,q as C,z as R,p as S,e as E}from"./index.82fadee2.js";const B=()=>{V();const a=g(),e=l(""),t=l(""),o=l(!1),n=l(!1),{errorAutenticacion:i}=w(a),{autenticarUsuario:c}=a,s=()=>{e.value="",t.value=""},h=()=>{if(n.value=!1,o.value=!1,m.value){o.value=!0;return}c({correo:e.value,password:t.value}),s(),i.value&&(n.value=!0)},m=v(()=>!e.value.length||!t.value.length),y=v(()=>({"form__input--vacio":o.value}));return{correo:e,password:t,mostrarAlertas:o,credencialesInvalidas:n,camposVacios:m,inputVacio:y,autenticar:h}};const O={components:{Loader:A(()=>x(()=>import("./LoaderComponent.402c5523.js"),["static/LoaderComponent.402c5523.js","static/LoaderComponent.0652eac2.css","static/index.82fadee2.js","static/index.64017e9b.css"]))},setup(){const{correo:a,password:e,mostrarAlertas:t,mostrarCarga:o,credencialesInvalidas:n,camposVacios:i,inputVacio:c,autenticar:s}=B();return{correo:a,password:e,mostrarAlertas:t,mostrarCarga:o,credencialesInvalidas:n,camposVacios:i,inputVacio:c,autenticar:s}}},u=a=>(S("data-v-b48264de"),a=a(),E(),a),T={class:"layout-login"},j=u(()=>r("h2",{class:"titulo-vista blanco-a"},"Inicio de sesion",-1)),D=u(()=>r("p",{class:"blanco-a form__label"},"CORREO",-1)),M=u(()=>r("p",{class:"blanco-a form__label"},"CONTRASE\xD1A",-1)),N=u(()=>r("input",{type:"submit",value:"Ingresar",class:"form__submit blanco-a txt-upper"},null,-1)),P={key:0,class:"mensaje--error"},U={key:1,class:"mensaje--error"};function z(a,e,t,o,n,i){const c=L("Loader");return d(),p("div",T,[o.mostrarCarga?(d(),k(c,{key:0})):_("",!0),j,r("form",{onSubmit:e[2]||(e[2]=R((...s)=>o.autenticar&&o.autenticar(...s),["prevent"])),class:"form"},[D,f(r("input",{type:"text",placeholder:"Correo de usuario","onUpdate:modelValue":e[0]||(e[0]=s=>o.correo=s),class:C(["form__input",o.inputVacio])},null,2),[[b,o.correo]]),M,f(r("input",{type:"password",placeholder:"Password de usuario","onUpdate:modelValue":e[1]||(e[1]=s=>o.password=s),class:C(["form__input",o.inputVacio])},null,2),[[b,o.password]]),N,o.mostrarAlertas?(d(),p("p",P," Debe de llenar todos los campos ")):_("",!0),o.credencialesInvalidas?(d(),p("p",U," Las credencias son invalidas ")):_("",!0)],32)])}const q=I(O,[["render",z],["__scopeId","data-v-b48264de"]]);export{q as default};
