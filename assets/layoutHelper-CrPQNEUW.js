import{d as i,A as l,f as r}from"./modules/vue-C_1R1hF5.js";import{t as c}from"./index-BMT14FXp.js";const d=i({__name:"LightOrDark",setup(e){return(s,o)=>l(c)?r(s.$slots,"dark",{key:0}):r(s.$slots,"light",{key:1})}}),_="/talk-sfcon-2024-vienna-gotenberg/assets/sensiolabs_dark.webp",g="/talk-sfcon-2024-vienna-gotenberg/assets/sensiolabs.webp";function a(e){return e.startsWith("/")?"/talk-sfcon-2024-vienna-gotenberg/"+e.slice(1):e}function m(e,s=!1,o="cover"){const t=e&&(e[0]==="#"||e.startsWith("rgb")),n={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${a(e)})`:`url("${a(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:o};return n.background||delete n.background,n}export{_,g as a,d as b,m as h};