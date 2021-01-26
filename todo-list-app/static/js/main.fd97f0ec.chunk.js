(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),s=n(11),r=n.n(s),o=n(2),l=n(7),d=n.n(l),j=n(4),u=n(10),b=n(3),O=(n(24),n(14)),h=n(15),p=n(16),v=n(17),m=n(12),f=n(13);var x=function(e){var t=e.globalFunctions,n=e.todoDetails,i=n.id,s=n.name,r=n.description,l=n.startDate,d=n.endDate,j=n.completed,u=n.editMode,b=n.viewState,x=Object(c.useRef)(""),g=Object(c.useRef)(""),N=(new Date).toISOString().split("T")[0],k=N,y=N,D=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(n){case"startDateEl":e.startDate>d&&(e=Object(o.a)(Object(o.a)({},e),{},{endDate:e.startDate}));break;case"endDateEl":e.endDate<l&&(e=Object(o.a)(Object(o.a)({},e),{},{startDate:e.endDate}))}t.app.handleModifyTodo(i,e)};return Object(a.jsxs)("div",{className:"todo ".concat(u?"input":""," ").concat(b?"view":"not-view"),children:[Object(a.jsxs)("div",{className:"todo-content",children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",value:s,readOnly:!u,onChange:function(e){D({name:e.target.value})}})}),Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{type:"textarea",value:r,readOnly:!u,onChange:function(e){D({description:e.target.value})}})}),Object(a.jsxs)("div",{className:"startDateContainer",children:[Object(a.jsx)(m.BsArrow90DegDown,{}),Object(a.jsx)("input",{type:"date",ref:x,min:k,max:"2030-01-01",value:l,readOnly:!u,onChange:function(e){D({startDate:e.target.value},"startDateEl")}})]}),Object(a.jsxs)("div",{className:"endDateContainer",children:[Object(a.jsx)(f.BsArrowReturnRight,{}),Object(a.jsx)("input",{type:"date",ref:g,min:y,max:"2030-01-01",value:d,readOnly:!u,onChange:function(e){D({endDate:e.target.value},"endDateEl")}})]})]}),Object(a.jsxs)("div",{className:"edit-todo-control",children:[Object(a.jsxs)("div",{onClick:function(){b&&t.app.handleToggleTodo(i)},className:"toggle-checked-btn ".concat(!j&&"active"),title:j?"Mark as uncompleted":"Mark as completed",children:[!j&&Object(a.jsx)(O.ImCheckboxUnchecked,{}),j&&Object(a.jsx)(h.FaCheckSquare,{})]}),Object(a.jsxs)("div",{onClick:function(){b&&t.app.handleToggleEditTodo(i)},className:"toggle-edit-btn ".concat(u&&"active"),title:u?"Click to save":"Click to edit",children:[!u&&Object(a.jsx)(p.AiFillEdit,{}),u&&Object(a.jsx)(v.AiFillSave,{})]})]})]})};var g=function(e){var t=e.globalFunctions;return e.todosArr.map((function(e){return Object(a.jsx)(x,{globalFunctions:t,todoDetails:e},e.id)}))};var N=function(e){var t=e.globalFunctions,n=(new Date).toISOString().split("T")[0],i=Object(c.useState)(""),s=Object(b.a)(i,2),r=s[0],o=s[1],l=Object(c.useState)(""),d=Object(b.a)(l,2),j=d[0],u=d[1],O=Object(c.useState)(n),h=Object(b.a)(O,2),p=h[0],v=h[1],m=Object(c.useState)(n),f=Object(b.a)(m,2),x=f[0],g=f[1],N=Object(c.useRef)(""),k=Object(c.useRef)(""),y=n,D=n;return Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==r){var a=""===j?"No description given":j,c=""===p?(new Date).toISOString().substring(0,10):p,i=""===x?(new Date).toISOString().substring(0,10):x;u(a),v(c),g(i),t.app.handleAddTodo(r,a,c,i,false,false,true),o(""),u(""),v(n),g(n)}},className:"add-todo-form",children:[Object(a.jsx)("div",{className:"controls-header",children:"Add a new item"}),Object(a.jsx)("div",{className:"controls-wrapper",children:Object(a.jsx)("div",{className:"todo input",children:Object(a.jsxs)("div",{className:"todo-content",children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",placeholder:"Task - name",value:r,onChange:function(e){o(e.target.value)},required:!0})}),Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{type:"textarea",placeholder:"Description",value:j,onChange:function(e){u(e.target.value)}})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("label",{children:"From:"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{ref:N,id:"start-date",type:"date",min:y,max:"2030-01-01",value:p,onChange:function(e){e.target.value>k.current.value&&g(e.target.value),v(e.target.value)}})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("label",{children:"To:"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{ref:k,id:"end-date",type:"date",min:D,max:"2030-01-01",value:x,onChange:function(e){e.target.value<N.current.value&&v(e.target.value),g(e.target.value)}})})]})]})})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"submit",value:"Add a task",className:"btn-type-1",title:"Add a new task to your list"})})]})},k=n(27);var y=function(e){var t=e.details,n=t.width,c=t.fill,i=t.outerClassName,s=t.innerClassName,r=t.height;return Object(a.jsx)("div",{className:i,style:{width:n,height:r,display:"inline-block",backgroundColor:"red",position:"relative"},children:Object(a.jsx)("div",{className:s,style:{width:c,height:"100%",display:"inline-block",backgroundColor:"green",position:"absolute",top:"0",left:"0",transition:"width .7s ease-out"}})})},D="myTodosApp.todos1.current",S="myTodosApp.todos1.cleared";var w=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),r=Object(b.a)(s,2),l=r[0],O=r[1],h=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(j.a)(n),(c=a.find((function(e){return e.id===t}))).completed=!c.completed,i(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=Object(j.a)(n)).sort((function(e,t){return!1===e.completed&&!0===t.completed?-1:!0===e.completed&&!1===t.completed?1:0})),i(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(D));e&&i(e);var t=JSON.parse(localStorage.getItem(S));t&&O(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(D,JSON.stringify(n))}),[n]),Object(c.useEffect)((function(){localStorage.setItem(S,JSON.stringify(l))}),[l]);var v={app:{handleToggleTodo:h,handleAddTodo:function(e,t,a,c,s,r,o){var l={id:Object(k.a)(),name:e,description:t,startDate:a,endDate:c,completed:s,editMode:r,viewState:o};i([l].concat(Object(j.a)(n)))},handleToggleEditTodo:function(e){var t=Object(j.a)(n),a=t.find((function(t){return t.id===e}));a.editMode=!a.editMode,i(t)},handleModifyTodo:function(e,t){var a=n.filter((function(t){return t.id!==e})),c=n.find((function(t){return t.id===e})),s=n.findIndex((function(t){return t.id===e}));t=Object(o.a)(Object(o.a)({},c),t),a.splice(s,0,t),i(a)}}};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"main-container",children:[Object(a.jsxs)("div",{className:"todos-container",children:[Object(a.jsxs)("div",{className:"todos-header",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[n.filter((function(e){return!e.completed})).length,"/",n.length," tasks left"]}),Object(a.jsx)(y,{details:{width:"100%",height:".5rem",fill:"".concat(n.length<1?"100":n.filter((function(e){return e.completed})).length/n.length*100,"%"),outerClassName:"progress-bar-outer",innerClassName:"progress-bar-inner"}})]}),Object(a.jsx)("h1",{className:"title-myTodoList",children:"My Task List"})]}),Object(a.jsxs)("div",{className:"current-todos",children:[0===n.length&&Object(a.jsx)("h1",{children:"..."}),Object(a.jsx)(g,{globalFunctions:v,todosArr:n})]}),Object(a.jsxs)("div",{className:"quick-controls-container",children:[Object(a.jsx)("button",{onClick:p,className:"btn-type-1",title:"Put uncompleted task at the top",children:"Refresh"}),Object(a.jsx)("button",{onClick:function(){var e;n.length<1||(e=!0===n[0].completed?n.map((function(e){return e.completed=!1,e})):n.map((function(e){return e.completed=!0,e})),i(e))},className:"btn-type-1",title:"Mark as as completed or uncompleted",children:"Toggle all as completed"}),Object(a.jsx)("button",{onClick:function(){if(!(n.length<1)){var e=n.filter((function(e){return e.completed})).map((function(e){return Object(o.a)(Object(o.a)(Object(o.a)({},e),{viewState:!1}),{editMode:!1})}));O((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e))}));var t=n.filter((function(e){return!e.completed}));i(t)}},className:"btn-type-1",title:"Put completed tasks in an archive",children:"Archive completed tasks"})]})]}),Object(a.jsxs)("div",{className:"side-container",children:[Object(a.jsx)("div",{className:"controls-container",children:Object(a.jsx)(N,{globalFunctions:v})}),Object(a.jsxs)("div",{className:"cleared-todos-container",children:[Object(a.jsxs)("div",{className:"cleared-todos-header",children:[Object(a.jsxs)("span",{children:["Archived Tasks(",l.length,")"]}),Object(a.jsx)("button",{onClick:function(){l.length<1||O([])},className:"btn-type-1",title:"Delete all tasks in archive",children:"Delete all"})]}),Object(a.jsx)("div",{className:"cleared-todos-wrapper",children:Object(a.jsx)(g,{todosArr:l})})]})]})]})})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.fd97f0ec.chunk.js.map