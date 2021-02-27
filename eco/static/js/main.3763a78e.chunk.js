(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{40:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(21),i=c.n(a),r=(c(40),c(6)),l=c(1),o=function(){var e=Object(n.useRef)();return Object(l.jsxs)("div",{ref:e,className:"burger",onClick:function(){e.current.classList.toggle("active");var t=document.querySelector(".side");if(null===t||void 0===t||t.classList.toggle("active"),window.matchMedia("(max-width: 1024px)").matches){var c=document.querySelector("body");(null===t||void 0===t?void 0:t.classList.contains("active"))?c.style.overflow="hidden":c.style.overflow=""}},children:[Object(l.jsx)("div",{className:"line line1"}),Object(l.jsx)("div",{className:"line line2"}),Object(l.jsx)("div",{className:"line line3"})]})},j=c(11),d=c(15),b=c(29),u=function(){var e=Object(r.g)();return Object(l.jsx)("header",{className:"main-header",children:Object(l.jsx)("nav",{className:"main-nav",children:Object(l.jsxs)("ul",{className:"main-nav-list",children:[Object(l.jsx)("li",{children:Object(l.jsx)(o,{})}),Object(l.jsx)("li",{children:Object(l.jsxs)(j.b,{to:"".concat(e.url,"eco/home"),className:"btn-type-1-ignore",children:[Object(l.jsx)(b.a,{}),Object(l.jsx)("span",{className:"app-name",children:"ECO"})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(j.b,{to:"".concat(e.url,"eco/user-account"),className:"btn-type-1",children:[Object(l.jsx)(d.a,{}),Object(l.jsx)("span",{className:"medium-type large-type",children:"Profile"})]})})]})})})},h=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{children:Object(l.jsx)("h2",{children:"Home"})}),Object(l.jsx)("article",{children:Object(l.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, provident facere doloribus magnam eum aliquam."})})]})},p=c(14),m=function(){var e=Object(p.c)((function(e){return e.user})),t=e.logout,c=e.user;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h2",{children:"User account"}),Object(l.jsxs)("div",{className:"logout-container",children:[Object(l.jsx)("button",{className:"btn-type-3 logout-btn",onClick:t,children:"Logout"}),Object(l.jsx)("span",{children:c.displayName?c.displayName:null===c||void 0===c?void 0:c.email})]})]}),Object(l.jsx)("section",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora a hic libero possimus sint. Facere laboriosam, adipisci blanditiis, quas, maxime corrupti fuga doloribus accusantium officiis totam neque velit voluptatibus corporis?"})]})},O=c(32),x=c(31),v=function(){var e=Object(r.g)(),t=function(){if(window.matchMedia("(max-width: 1024px)").matches){var e=document.querySelector(".burger");(null===e||void 0===e?void 0:e.classList.contains("active"))&&(null===e||void 0===e||e.click())}};return Object(l.jsx)("aside",{className:"side",children:Object(l.jsx)("nav",{className:"side-nav",children:Object(l.jsxs)("ul",{className:"side-nav-list",children:[Object(l.jsx)("li",{className:"item-container",children:Object(l.jsxs)(j.b,{to:"".concat(e.url,"eco/home"),onClick:t,className:"item btn-type-2",children:[Object(l.jsx)(d.b,{}),Object(l.jsx)("span",{className:"name",children:"Home"})]})}),Object(l.jsx)("li",{className:"item-container",children:Object(l.jsxs)(j.b,{to:"".concat(e.url,"eco/user-account"),onClick:t,className:"item btn-type-2",children:[Object(l.jsx)(d.a,{}),Object(l.jsx)("span",{className:"name",children:"Profile"})]})}),Object(l.jsx)("li",{className:"item-container",children:Object(l.jsxs)(j.b,{to:"".concat(e.url,"eco/settings"),onClick:t,className:"item btn-type-2",children:[Object(l.jsx)(d.c,{}),Object(l.jsx)("span",{className:"name",children:"Settings"})]})}),Object(l.jsx)("li",{className:"item-container",children:Object(l.jsxs)(j.b,{to:"".concat(e.url,"eco/tasks"),onClick:t,className:"item btn-type-2",children:[Object(l.jsx)(x.a,{}),Object(l.jsxs)("span",{className:"name",children:["Tasks\xa0",Object(l.jsx)("span",{className:"active-nav-view",children:"List"})]})]})}),Object(l.jsx)("li",{className:"item-container",children:Object(l.jsxs)(j.b,{to:"".concat(e.url,"eco/expenses"),onClick:t,className:"item btn-type-2",children:[Object(l.jsx)(O.a,{}),Object(l.jsxs)("span",{className:"name",children:["Expense\xa0",Object(l.jsx)("span",{className:"active-nav-view",children:"Tracker"})]})]})})]})})})},g=function(){var e=Object(p.c)((function(e){return e.app})).theme,t=Object(p.b)(),c={position:"absolute",cursor:"pointer",top:"0",left:"0",right:"0",bottom:"0",border:"1px solid var(--primary-clr-3)",backgroundColor:"var(--clr-blue-8)",WebkitTransition:".4s",transition:".4s",borderRadius:"25%"};"App--light"===e&&(c.backgroundColor="#ccc");return Object(l.jsxs)("label",{className:"switch",style:{position:"relative",display:"inline-block",width:"40px",height:"20px"},children:[Object(l.jsx)("input",{style:{opacity:"0",width:"0",height:"0"},type:"checkbox",checked:"App--light"===e,onChange:function(){t({type:"APP_SWITCH_THEME"})}}),Object(l.jsx)("span",{style:c,className:"slider"})]})},f=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{children:Object(l.jsx)("h2",{children:"Settings"})}),Object(l.jsxs)("section",{className:"change-theme-container",children:[Object(l.jsx)("span",{children:"Theme Settings:"}),Object(l.jsxs)("div",{style:{display:"inline-block"},className:"change-theme-wrapper",children:[Object(l.jsx)("span",{children:"Default"}),Object(l.jsx)(g,{}),Object(l.jsx)("span",{children:"Light"})]})]})]})},N=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{children:Object(l.jsx)("h2",{children:"Tasks"})}),Object(l.jsx)("article",{children:Object(l.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, provident facere doloribus magnam eum aliquam."})})]})},E=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{children:Object(l.jsx)("h2",{children:"Expenses"})}),Object(l.jsx)("article",{children:Object(l.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, provident facere doloribus magnam eum aliquam."})})]})},y=c(33),_=c.n(y),S=function(e){var t=e.firebase,c={signInFlow:"popup",signInOptions:[{provider:t.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!1},{provider:t.auth.GoogleAuthProvider.PROVIDER_ID}],signInSuccessUrl:"/eco/",callbacks:{signInSuccessWithAuthResult:function(){return!1}}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"signin-or-register-text",children:Object(l.jsx)("h1",{children:"Sign in/Register"})}),Object(l.jsx)(_.a,{uiConfig:c,firebaseAuth:t.auth()})]})},T=c(3),I=(c(28),{apiKey:"AIzaSyDfkSp8I-2CEUK4sLxaRyQdsNPxde1cUmU",authDomain:"".concat("ecof-e6db1",".firebaseapp.com"),projectId:"ecof-e6db1"});T.a.apps.length||T.a.initializeApp(I);var k=c(35);var w=function(){var e=Object(r.g)(),t=Object(p.c)((function(e){return{app:e.app,user:e.user}})),c=t.app,s=t.user,a=Object(p.b)();return Object(n.useEffect)((function(){a({type:"USER_SET_FIREBASE_LOGOUT_FUNCTION",payload:function(){return T.a.auth().signOut()}});var e=T.a.auth().onIdTokenChanged((function(e){a({type:"USER_SET_USER",payload:e}),a({type:"USER_SET_LOADING",payload:!1})}));return function(){return e()}}),[a]),Object(n.useEffect)((function(){var e=localStorage.getItem("THEME_OPTION");a(e?{type:"APP_SET_THEME",payload:e}:{type:"APP_SET_THEME",payload:"none"})}),[a]),Object(l.jsxs)("div",{className:"App ".concat("App--light"===c.theme?"App--light":""),children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(v,{}),Object(l.jsx)("main",{className:"main-content",children:s.user?Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{exact:!0,path:"".concat(e.path,"(eco)?/(home)"),component:h}),Object(l.jsx)(r.b,{exact:!0,path:"".concat(e.path,"(eco)?/(home)"),component:h}),Object(l.jsx)(r.b,{exact:!0,path:"".concat(e.path,"(eco)?/user-account"),component:m}),Object(l.jsx)(r.b,{exact:!0,path:"".concat(e.path,"(eco)?/settings"),component:f}),Object(l.jsx)(r.b,{exact:!0,path:"".concat(e.path,"(eco)?/tasks"),component:N}),Object(l.jsx)(r.b,{exact:!0,path:"".concat(e.path,"(eco)?/expenses"),component:E}),Object(l.jsx)(r.b,{path:"",render:function(){return Object(l.jsx)(r.a,{to:"".concat(e.url,"eco/home")})}})]}):s.loading?Object(l.jsx)(k.a,{className:"loading-svg"}):Object(l.jsx)(S,{firebase:T.a})})]})]})},A=c(18),C=c(16),R="THEME_OPTION",P=function(e,t){var c=Object(C.a)({},e);return c.theme=t.payload,localStorage.setItem(R,t.payload),c},U=function(e){var t=Object(C.a)({},e);return"App--light"===t.theme?t.theme="none":t.theme="App--light",localStorage.setItem(R,t.theme),t},L=function(e,t){var c=Object(C.a)({},e);return c.logout=t.payload,c},D=function(e,t){var c=Object(C.a)({},e);return c.user=t.payload,c},H=function(e,t){var c=Object(C.a)({},e);return c.loading=t.payload,c},M=Object(A.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"none"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_SET_THEME":return P(e,t);case"APP_SWITCH_THEME":return U(e);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null,loading:!0,logout:function(){}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SET_FIREBASE_LOGOUT_FUNCTION":return L(e,t);case"USER_SET_USER":return D(e,t);case"USER_SET_LOADING":return H(e,t);default:return e}}}),q=Object(A.c)(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p.a,{store:q,children:Object(l.jsx)(j.a,{children:Object(l.jsx)(w,{})})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.3763a78e.chunk.js.map