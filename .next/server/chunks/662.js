exports.id=662,exports.ids=[662],exports.modules={3800:(e,n,t)=>{Promise.resolve().then(t.bind(t,7401)),Promise.resolve().then(t.bind(t,5279))},3433:(e,n,t)=>{Promise.resolve().then(t.t.bind(t,9918,23)),Promise.resolve().then(t.t.bind(t,2057,23)),Promise.resolve().then(t.t.bind(t,6148,23)),Promise.resolve().then(t.t.bind(t,8359,23)),Promise.resolve().then(t.t.bind(t,1860,23)),Promise.resolve().then(t.t.bind(t,2427,23))},7401:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>z});var r=t(80),s=t(9885),o=t.n(s),i=t(3455),a=t.n(i),l=t(8401),c=t.n(l),h=t(7555),d=t.n(h),m=t(5279);let _={light:"Claro",dark:"Escuro",sky:"Moderno",pastel:"Pastel",choco:"Chocolate",ocean:"Oceano",florest:"Floresta",sunset:"P\xf4r do Sol"},u=function({theme:e,onClick:n}){let{openThemes:t}=(0,m.useApi)(),s=t?`${d().container} ${d().open}`:d().container;return r.jsx("button",{className:`${s} ${d()[e]}`,onClick:n,"aria-label":`escolher tema ${e}`,children:(0,r.jsxs)("div",{className:d().theme_container,children:[r.jsx("span",{className:d().theme,children:_[e]}),(0,r.jsxs)("div",{className:d().colors,children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]})})},x=function(){let{handleClickSetTime:e,openThemes:n}=(0,m.useApi)(),t=n?`${c().container} ${c().open}`:c().container;return r.jsx("div",{className:t,children:["light","dark","sky","pastel","choco","ocean","florest","sunset"].map(n=>r.jsx(u,{theme:n,onClick:()=>e(n)},n))})};var p=t(7841),j=t.n(p),f=t(2451),v=t.n(f),b=t(1440),g=t.n(b),k=t(1509),N=t.n(k);let P=function(){return(0,r.jsxs)(g(),{href:"/",className:N().container,title:"Pagina Principal",children:[r.jsx(v(),{src:"/perfil.png",alt:"perfil",width:48,height:48,priority:!0}),r.jsx("span",{children:"JR"}),r.jsx(v(),{src:"/verificado.png",alt:"verificado",width:22,height:22,priority:!0})]})};var y=t(5492),C=t.n(y),$=t(8862),A=t.n($),S=t(6082);let T=function(){let{handleClickOpenThemes:e}=(0,m.useApi)();return r.jsx("button",{className:A().container,onClick:e,"aria-label":"Abrir temas",children:r.jsx(S.Xqi,{})})};var E=t(5915),w=t.n(E);let O=function(){let{openMenu:e,handleClickOpenMenu:n}=(0,m.useApi)(),t=e?`${w().container} ${w().open}`:w().container;return(0,r.jsxs)("button",{className:t,onClick:n,"aria-label":"Abrir menu",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})},X=function(){let{openMenu:e}=(0,m.useApi)(),n=e?`${C().menu_list} ${C().open}`:C().menu_list;return(0,r.jsxs)("div",{className:C().container,children:[r.jsx(T,{}),r.jsx(O,{}),(0,r.jsxs)("ul",{className:n,children:[r.jsx("li",{className:C().menu_item,children:r.jsx(g(),{href:"/sobre",className:C().menu_link,children:"Sobre"})}),r.jsx("li",{className:C().menu_item,children:r.jsx(g(),{href:"/certificados",className:C().menu_link,children:"Certificados"})}),r.jsx("li",{className:C().menu_item,children:r.jsx(g(),{href:"/projetos",className:C().menu_link,children:"Projetos"})}),r.jsx("li",{className:C().menu_contacts,children:r.jsx(g(),{href:"#contatos",className:C().menu_link,children:"Contatos"})})]})]})},J=function(){return(0,r.jsxs)("nav",{className:j().container,children:[r.jsx(P,{}),r.jsx(X,{})]})};var F=t(9290),Q=t(6619),q=t(6861);let z=function(){let{scrollY:e}=(0,F.v)(),[n,t]=o().useState(!1);return(0,Q.W)(e,"change",n=>{let r=e.getPrevious();n>r&&n>150?t(!0):t(!1)}),(0,r.jsxs)(q.E.header,{className:a().container,variants:{visible:{y:0},hidden:{y:"-100%"}},initial:"hidden",animate:n?"hidden":"visible",transition:{duration:.3,ease:"easeInOut"},children:[r.jsx(x,{}),r.jsx(J,{})]})}},5279:(e,n,t)=>{"use strict";t.r(n),t.d(n,{PortfolioProvider:()=>i,useApi:()=>a});var r=t(80),s=t(9885);let o=(0,s.createContext)({}),i=({children:e})=>{let[n,t]=(0,s.useState)("light"),[i,a]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=localStorage.getItem("theme");e&&"light"!==e&&t(e);let r=document.getElementsByTagName("html")[0];r.className=n},[n]),r.jsx(o.Provider,{value:{handleClickSetTime:e=>{t(e),localStorage.setItem("theme",e)},actualTheme:n,handleClickOpenMenu:()=>{a(!i),l&&c(!1)},openMenu:i,handleClickOpenThemes:()=>{c(!l)},openThemes:l},children:e})},a=()=>(0,s.useContext)(o)},7555:e=>{e.exports={container:"theme_container__oKZQh",light:"theme_light__6NX0j",theme_container:"theme_theme_container__Xdqgy",theme:"theme_theme__QTty_",colors:"theme_colors__VXLkn",dark:"theme_dark__QZNEO",sky:"theme_sky__C7mll",pastel:"theme_pastel__6ZOmA",choco:"theme_choco__Jjg_r",ocean:"theme_ocean__bf8wK",florest:"theme_florest__nnnY4",sunset:"theme_sunset__Aw1WJ"}},5915:e=>{e.exports={container:"btn_container__4XmOZ",open:"btn_open__3Abdq"}},8862:e=>{e.exports={container:"btn_container__rlJik"}},7775:e=>{e.exports={footer:"footer_footer__uyyvk"}},3455:e=>{e.exports={container:"header_container__zLBWP"}},1509:e=>{e.exports={container:"logo_container__eBFzR"}},5492:e=>{e.exports={container:"menu_container__Qvba4",menu_list:"menu_menu_list__ME2Xq",open:"menu_open__zTLLS",menu_link:"menu_menu_link__uTtfF"}},7841:e=>{e.exports={container:"navigation_container__cQVlz"}},8401:e=>{e.exports={container:"themes_container__y96wX",open:"themes_open__Bkgf6"}},9826:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>f,metadata:()=>j});var r=t(8144);t(3830);var s=t(7775),o=t.n(s);let i=function(){return r.jsx("footer",{className:o().footer,children:"Todos os direitos reservados \xa9 2023 para Herbert Junior"})};var a=t(7536);let l=(0,a.createProxy)(String.raw`/home/herbert/Área de Trabalho/portfoliovone/app/components/header/index.tsx`),{__esModule:c,$$typeof:h}=l,d=l.default,m=(0,a.createProxy)(String.raw`/home/herbert/Área de Trabalho/portfoliovone/app/context/porfolioContext/index.tsx`),{__esModule:_,$$typeof:u}=m;m.default;let x=m.PortfolioProvider;m.useApi;let p=({children:e})=>r.jsx(x,{children:e});t(3440);let j={title:"Herbert Junior | Desenvolvedor Front-End React",description:"Desenvolvedor Front-End, apaixonado por tecnologia e inova\xe7\xe3o."};function f({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{children:(0,r.jsxs)(p,{children:[r.jsx(d,{}),e,r.jsx(i,{})]})})})}},3440:()=>{}};