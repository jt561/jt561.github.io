(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{40:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(7),i=n.n(s),o=(n(40),n(2)),l=n(21),d=n(22),u=n(24),j=n(23),O=n(25),b=n(26),p=n(4);var m=function(e){var t=e.todoDetails,n=t.id,r=t.name,s=t.description,i=t.startDate,m=t.endDate,h=t.completed,v=t.editMode,f=t.viewState,x=Object(p.b)(),g=Object(c.useRef)(""),D=Object(c.useRef)(""),y=(new Date).toISOString().split("T")[0],N=y,T=y,C=n.length/4,E=new RegExp(".{1,".concat(C,"}"),"g"),k=n.match(E),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(t){case"startDateEl":e.startDate>m&&(e=Object(o.a)(Object(o.a)({},e),{},{endDate:e.startDate}));break;case"endDateEl":e.endDate<i&&(e=Object(o.a)(Object(o.a)({},e),{},{startDate:e.endDate}))}x({type:"MODIFY_TODO",payload:{id:n,newPropsObj:e}})};return Object(a.jsxs)("div",{className:"todo ".concat(v?"input":""," ").concat(f?"view":"not-view"," ").concat(h?"completed":"uncompleted"),children:[Object(a.jsxs)("div",{className:"todo-content",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:n+k[0],className:"no-display-form-label",children:"Task name"}),Object(a.jsx)("input",{id:n+k[0],type:"text",value:r,readOnly:!v,onChange:function(e){S({name:e.target.value})}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:n+k[1],className:"no-display-form-label",children:"Description"}),Object(a.jsx)("textarea",{id:n+k[1],type:"textarea",value:s,readOnly:!v,onChange:function(e){S({description:e.target.value})}})]}),Object(a.jsxs)("div",{className:"startDateContainer",children:[Object(a.jsx)("label",{htmlFor:n+k[2],className:"no-display-form-label",children:"Start date"}),Object(a.jsx)(l.BsArrow90DegDown,{}),Object(a.jsx)("input",{id:n+k[2],type:"date",ref:g,min:N,max:"2030-01-01",value:i,readOnly:!v,onChange:function(e){S({startDate:e.target.value},"startDateEl")}})]}),Object(a.jsxs)("div",{className:"endDateContainer",children:[Object(a.jsx)("label",{htmlFor:n+k[3],className:"no-display-form-label",children:"End date"}),Object(a.jsx)(d.BsArrowReturnRight,{}),Object(a.jsx)("input",{id:n+k[3],type:"date",ref:D,min:T,max:"2030-01-01",value:m,readOnly:!v,onChange:function(e){S({endDate:e.target.value},"endDateEl")}})]})]}),Object(a.jsxs)("div",{className:"edit-todo-control",children:[Object(a.jsxs)("div",{onClick:function(){f&&x({type:"TOGGLE_TODO",payload:{id:n}})},className:"toggle-checked-btn ".concat(!h&&"active"),title:h?"Mark as uncompleted":"Mark as completed",children:[!h&&Object(a.jsx)(j.CgRadioCheck,{}),h&&Object(a.jsx)(u.FiCheckCircle,{})]}),Object(a.jsxs)("div",{onClick:function(){f&&x({type:"TOGGLE_EDIT_TODO",payload:{id:n}})},className:"toggle-edit-btn ".concat(v&&"active"),title:v?"Click to save":"Click to edit",children:[!v&&Object(a.jsx)(O.GrEdit,{}),v&&Object(a.jsx)(b.AiOutlineSave,{})]})]})]})},h=n(27);var v=function(e){var t=e.todosArr,n=e.component,c=e.componentClassName,r=t.map((function(e){return Object(a.jsx)(m,{todoDetails:e},e.id)}));return Object(a.jsxs)(h.CSSTransitionGroup,{component:n,className:c,transitionName:"items-list",transitionEnter:!0,transitionLeave:!0,transitionEnterTimeout:500,transitionLeaveTimeout:600,transitionAppear:!0,transitionAppearTimeout:500,children:[r,r.length<1&&Object(a.jsx)("h3",{children:"..."})]})},f=n(9),x=n(28),g=n(60);var D=function(){var e=Object(p.b)(),t="formDescriptionInput1",n=(new Date).toISOString().split("T")[0],r=Object(c.useState)(""),s=Object(f.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(""),d=Object(f.a)(l,2),u=d[0],j=d[1],O=Object(c.useState)(n),b=Object(f.a)(O,2),m=b[0],h=b[1],v=Object(c.useState)(n),D=Object(f.a)(v,2),y=D[0],N=D[1],T=Object(c.useRef)(""),C=Object(c.useRef)(""),E=Object(c.useRef)(),k=n,S=n;return Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==i){var a=""===u?"No description given":u,c=""===m?(new Date).toISOString().substring(0,10):m,r=""===y?(new Date).toISOString().substring(0,10):y;j(a),h(c),N(r);var s={id:Object(g.a)(),name:i,description:a,startDate:c,endDate:r,completed:false,editMode:false,viewState:true};e({type:"ADD_TODO",payload:{newTodo:s}}),o(""),j(""),h(n),N(n),E.current.classList.add("pulse-active"),setTimeout((function(){return E.current.classList.remove("pulse-active")}),700)}},className:"add-todo-form",children:[Object(a.jsx)("div",{className:"controls-header",children:"Add a new item"}),Object(a.jsx)("div",{className:"controls-wrapper",children:Object(a.jsx)("div",{className:"todo input",children:Object(a.jsxs)("div",{className:"todo-content",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("label",{htmlFor:"taskName1",className:"",children:"Task name"})}),Object(a.jsx)("input",{id:"taskName1",type:"text",value:i,onChange:function(e){o(e.target.value)},required:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("label",{htmlFor:t,className:"",children:"Description"})}),Object(a.jsx)("textarea",{id:t,type:"textarea",value:u,onChange:function(e){j(e.target.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("label",{htmlFor:"start-date",children:"From:"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{ref:T,id:"start-date",type:"date",min:k,max:"2030-01-01",value:m,onChange:function(e){e.target.value>C.current.value&&N(e.target.value),h(e.target.value)}})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("label",{htmlFor:"end-date",children:"To:"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{ref:C,id:"end-date",type:"date",min:S,max:"2030-01-01",value:y,onChange:function(e){e.target.value<T.current.value&&h(e.target.value),N(e.target.value)}})})]})]})})}),Object(a.jsxs)("button",{ref:E,type:"submit",title:"Add a new task to your list",className:"btn-type-1",children:[Object(a.jsx)(x.GrAddCircle,{}),"Add task"]})]})};var y=function(e){var t=e.details,n=t.width,c=t.fill,r=t.outerClassName,s=t.innerClassName,i=t.height;return Object(a.jsx)("div",{className:r,style:{width:n,height:i,display:"inline-block",backgroundColor:"red",position:"relative"},children:Object(a.jsx)("div",{className:s,style:{width:c,height:"130%",display:"inline-block",backgroundColor:"rgba(31, 164, 226)",position:"absolute",top:"-1px",left:"0px",transition:"width .2s ease-out"}})})},N=n(30),T=n(31),C=n(32),E=n(34),k=n(33),S=n(29),w="myTaskListApp.todos.current",A="myTaskListApp.todos.archived";var L=function(){var e=Object(p.c)((function(e){var t=e.todos;return{currentTodos:t.current,archivedTodos:t.archived}})),t=e.currentTodos,n=e.archivedTodos,r=Object(p.b)(),s=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(w));e&&r({type:"SET_CURRENT",payload:e});var t=JSON.parse(localStorage.getItem(A));t&&r({type:"SET_ARCHIVED",payload:t})}),[r]),Object(c.useEffect)((function(){localStorage.setItem(w,JSON.stringify(t))}),[t]),Object(c.useEffect)((function(){localStorage.setItem(A,JSON.stringify(n))}),[n]),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"main-container",children:[Object(a.jsxs)("div",{className:"todos-container",children:[Object(a.jsxs)("div",{className:"todos-header",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[t.filter((function(e){return!e.completed})).length,"/",t.length," tasks left"]}),Object(a.jsx)(y,{details:{width:"100%",height:".5rem",fill:"".concat(t.length<1?"100":t.filter((function(e){return e.completed})).length/t.length*100,"%"),outerClassName:"progress-bar-outer",innerClassName:"progress-bar-inner"}})]}),Object(a.jsx)("h1",{className:"title-myTodoList",children:"My Task List"})]}),Object(a.jsx)(v,{todosArr:t,component:"div",componentClassName:"current-todos"}),Object(a.jsx)("div",{className:"toggle-side-view-container open",children:Object(a.jsxs)("button",{className:"btn-type-1",onClick:function(){s(document.getElementsByClassName("side-container")[0],"show")},title:"add a new item/view archived tasks",children:[Object(a.jsx)(S.RiMenuAddFill,{}),"Menu"]})}),Object(a.jsxs)("div",{className:"quick-controls-container",children:[Object(a.jsxs)("button",{onClick:function(){return r({type:"REFRESH_TODOS"})},className:"btn-type-1",title:"Put uncompleted and due tasks at the top",children:[Object(a.jsx)(N.BiRefresh,{}),"Refresh"]}),Object(a.jsxs)("button",{onClick:function(){return r({type:"TOGGLE_ALL_COMPLETED"})},className:"btn-type-1",title:"Mark as as completed or uncompleted",children:[Object(a.jsx)(T.BsToggles,{}),"Toggle all as completed"]}),Object(a.jsxs)("button",{onClick:function(){return r({type:"ARCHIVE_COMPLETED"})},className:"btn-type-1",title:"Put completed tasks in an archive",children:[Object(a.jsx)(C.BiArchive,{}),"Archive completed tasks"]})]})]}),Object(a.jsxs)("div",{className:"side-container",children:[Object(a.jsx)("div",{className:"toggle-side-view-container close",children:Object(a.jsxs)("button",{className:"btn-type-1",onClick:function(){s(document.getElementsByClassName("side-container")[0],"show")},children:[Object(a.jsx)(k.AiOutlineCloseCircle,{}),"Close"]})}),Object(a.jsx)("div",{className:"controls-container",children:Object(a.jsx)(D,{})}),Object(a.jsxs)("div",{className:"cleared-todos-container",children:[Object(a.jsxs)("div",{className:"cleared-todos-header",children:[Object(a.jsxs)("span",{children:["Archived Tasks(",n.length,")"]}),Object(a.jsxs)("button",{onClick:function(){return r({type:"DELETE_ARCHIVED_TODOS"})},className:"btn-type-1",title:"Delete all tasks in archive",children:[Object(a.jsx)(E.MdDeleteForever,{}),"Delete all"]})]}),Object(a.jsx)(v,{todosArr:n,component:"div",componentClassName:"cleared-todos-wrapper"})]})]})]})})},R=n(5),_=n(11),I=function(e,t){return{current:t.payload,archived:e.archived}},M=function(e,t){return{current:e.current,archived:t.payload}},F=function(e,t){var n=Object(o.a)({},e),a=n.current.find((function(e){return e.id===t.payload.id}));return a.completed=!a.completed,n},G=function(e){var t=Object(o.a)({},e);return t.current.sort((function(e,t){return(""+e.endDate).localeCompare(t.endDate)})),t.current.sort((function(e,t){return!1===e.completed&&!0===t.completed?-1:!0===e.completed&&!1===t.completed?1:0})),t},B=function(e,t){var n=Object(o.a)({},e),a=n.current.find((function(e){return e.id===t.payload.id}));return a.editMode=!a.editMode,n},H=function(e,t){var n=Object(o.a)({},e);return n={current:[t.payload.newTodo].concat(Object(_.a)(n.current)),archived:n.archived}},P=function(e,t){var n=Object(o.a)({},e),a=n.current.filter((function(e){return e.id!==t.payload.id})),c=n.current.find((function(e){return e.id===t.payload.id})),r=n.current.findIndex((function(e){return e.id===t.payload.id})),s=Object(o.a)(Object(o.a)({},c),t.payload.newPropsObj);return a.splice(r,0,s),n.current=a,n},J=function(e){if(e.current.length<1)return e;var t=Object(o.a)({},e),n=t.current.filter((function(e){return e.completed})).map((function(e){return Object(o.a)(Object(o.a)(Object(o.a)({},e),{viewState:!1}),{editMode:!1})})),a=t.current.filter((function(e){return!e.completed}));return t.archived=[].concat(Object(_.a)(n),Object(_.a)(t.archived)),t.current=a,t},V=function(e){if(e.current.length<1)return e;var t,n=Object(o.a)({},e);return t=!0===n.current[0].completed?n.current.map((function(e){return e.completed=!1,e})):n.current.map((function(e){return e.completed=!0,e})),n.current=t,n},q=function(e){if(e.archived.length<1)return e;var t=Object(o.a)({},e);return t.archived=[],t},U=Object(R.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:[],archived:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT":return I(e,t);case"SET_ARCHIVED":return M(e,t);case"TOGGLE_TODO":return F(e,t);case"REFRESH_TODOS":return G(e);case"TOGGLE_EDIT_TODO":return B(e,t);case"ADD_TODO":return H(e,t);case"MODIFY_TODO":return P(e,t);case"ARCHIVE_COMPLETED":return J(e);case"TOGGLE_ALL_COMPLETED":return V(e);case"DELETE_ARCHIVED_TODOS":return q(e);default:return e}}}),Y=Object(R.c)(U);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p.a,{store:Y,children:Object(a.jsx)(L,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.36739f28.chunk.js.map