(this["webpackJsonptext-next"]=this["webpackJsonptext-next"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},25:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(5),l=c.n(s),r=(c(21),c(7)),i=c(2),o=c(4),u=(c(22),c(11)),j=c.n(u),d=c(14),b=c(1),h=a.a.createContext(),O=function(e){var t=e.children,c=Object(n.useState)(!1),a=Object(i.a)(c,2),s=a[0],l=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),u=o[0],O=o[1],x=Object(n.useCallback)(Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,fetch("".concat("https://api.spacexdata.com/v3/launches"));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,O(c),l(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),l(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])}))));return Object(n.useEffect)((function(){x()}),[]),Object(b.jsx)(h.Provider,{value:{loading:s,setLoading:l,articles:u},children:t})},x=c(16),p=c(15),f=(c(25),function(e){for(var t=e.postPerPage,c=e.totalArticle,n=e.paginate,a=e.currentPage,s=[],l=1;l<=Math.ceil(c/t);l++)s.push(l);return Object(b.jsx)("div",{className:"pagination",children:Object(b.jsx)("ul",{children:s.map((function(e,t){return Object(b.jsx)("li",{className:"".concat(e===a?"active":null),children:Object(b.jsx)("span",{onClick:function(){return n(e)},children:e})},t)}))})})}),m={option:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{color:t.isSelected?"white":"grey",width:"auto"})},dropdownIndicator:function(e){return Object(o.a)({},e)},control:function(){return{display:"flex",border:"1px solid rgb(109, 109, 109)",borderRadius:"30px"}},menu:function(e){return Object(o.a)(Object(o.a)({},e),{},{width:"250px",right:"0"})}},v=function(){var e=Object(n.useContext)(h),t=e.articles,c=e.loading,a=Object(n.useState)(t),s=Object(i.a)(a,2),l=s[0],o=s[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),d=j[0],O=j[1],v=Object(n.useState)([]),g=Object(i.a)(v,2),N=g[0],y=g[1],k=Object(n.useState)(null),_=Object(i.a)(k,2),w=_[0],S=_[1],C=Object(n.useState)(1),L=Object(i.a)(C,2),P=L[0],E=L[1],F=Object(n.useState)(10),A=Object(i.a)(F,2),D=A[0],I=(A[1],P*D),J=I-D,M=l.slice(J,I),R=Object(n.useRef)(null);Object(n.useEffect)((function(){o(t);var e=Object(r.a)(t.reduce((function(e,t){return e.set(t.launch_year,t)}),new Map).values()).map((function(e){return{value:"".concat(e.launch_year),label:"".concat(e.launch_year),type:"year"}}));y([{label:"all",value:"all",type:"all"},{label:"Years",options:e},{label:"Launch Success",options:[{value:!0,label:"success",type:"success"},{value:!1,label:"failed",type:"success"}]}]),E(1)}),[c]),Object(n.useEffect)((function(){w&&("all"===w.value&&o(t),"year"===w.type&&o(t.filter((function(e){return e.launch_year===w.value}))),"success"===w.type&&o(t.filter((function(e){return e.launch_success===w.value}))))}),[w]);return c?Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("h2",{className:"h2",children:"loading..."})}):t.length<1?Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("h2",{className:"h2",children:"Failed to Fetch Data."})}):Object(b.jsxs)("div",{className:"cartlist-contaier section",children:[Object(b.jsx)("h2",{className:"heading",children:"Flights"}),Object(b.jsxs)("div",{className:"cardList-heading",children:[Object(b.jsx)("div",{className:"filter",children:Object(b.jsx)(p.a,{menuPlacement:"auto",menuPosition:"fixed",dropdownIndicator:"none",className:"custom-select",style:m,options:N,placeholder:"filter",value:w,onChange:function(e){return function(e){S(e),E(1)}(e)}})}),Object(b.jsx)("div",{className:"card-search",children:Object(b.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var c=t.filter((function(e){return e.rocket.rocket_name.toLowerCase().includes(d.toLocaleLowerCase())}));o(t.filter((function(e){return e.rocket.rocket_name.toLowerCase().includes(d.toLocaleLowerCase())}))),O(""),c.length<1?R.current.style.display="block":R.current.style.display="none",E(1)}(e)},children:[Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){return O(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)(x.a,{})})]})})]}),Object(b.jsx)("div",{style:{display:"none"},ref:R,children:Object(b.jsx)("h2",{className:"h2",children:"No match found"})}),Object(b.jsx)("div",{className:"cartList",children:l&&M.map((function(e,t){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{src:e.links.mission_patch_small?e.links.mission_patch_small:"https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767_960_720.png",alt:""})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"flight-status",children:[Object(b.jsx)("span",{className:"rocket-name",children:e.rocket.rocket_name}),Object(b.jsx)("span",{className:"success-btn ".concat(e.launch_success?"success":"failed"),children:e.launch_success?"success":"failed"})]}),Object(b.jsx)("span",{className:"date",children:e.launch_year}),Object(b.jsx)("h2",{children:e.mission_name}),Object(b.jsxs)("p",{children:[e.details&&e.details.replace(/^(.{20}[^\s]*).*/,"$1")+"",e.details?"...":null]}),Object(b.jsx)("a",{href:"".concat(e.links.article_link),target:"_blank",className:"btn",children:"Details"})]})]},t)}))}),Object(b.jsx)("div",{className:"pagination",children:Object(b.jsx)(f,{postPerPage:D,totalArticle:l.length,paginate:function(e){E(e)},currentPage:P})})]})},g=(c(42),function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{children:Object(b.jsx)("div",{className:"logo",children:Object(b.jsxs)("a",{href:"/",children:["Tech",Object(b.jsx)("span",{children:"Next"})]})})})})});var N=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{}),Object(b.jsx)(v,{})]})};l.a.render(Object(b.jsx)(a.a.Fragment,{children:Object(b.jsx)(O,{children:Object(b.jsx)(N,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7a2a3d01.chunk.js.map