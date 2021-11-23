(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(10),s=c.n(r),o=(c(24),c(25),c(2)),a=c(6),l=(c(26),c(1));function j(){return Object(l.jsxs)("div",{className:"landing",children:[Object(l.jsx)("h1",{className:"title",children:" Countries Web "}),Object(l.jsx)("div",{className:"landingImg",children:Object(l.jsx)(a.b,{to:"/home",style:{textDecoration:"none"},children:Object(l.jsx)("button",{className:"btn-home",children:"  Go to Home "})})})]})}var O=c(4),b=(c(28),"GET_COUNTRIES");function A(e){return e?function(t){return fetch("http://localhost:3001/countries?name="+e).then((function(e){return e.json()})).then((function(e){t({type:b,payload:e})}))}:function(e){return fetch("http://localhost:3001/countries").then((function(e){return e.json()})).then((function(t){e({type:b,payload:t})})).catch(console.warn("server response error"))}}var u=c(8);var h=Object(u.b)(null,(function(e){return{getCountries:function(t){return e(A(t))}}}))((function(e){var t=e.getCountries,c=Object(n.useState)(""),i=Object(O.a)(c,2),r=i[0],s=i[1];return Object(l.jsxs)("form",{className:"input-wrapper",children:[Object(l.jsx)("input",{className:"searc",onChange:function(e){s(e.target.value)},value:r,type:"text",placeholder:"Country"}),Object(l.jsx)("input",{name:"search",onClick:function(e){e.preventDefault(),console.log(r),t(r)},type:"submit",className:"btn",value:"Search"})]})}));c(35);function d(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsxs)("div",{className:"left-nav",children:[Object(l.jsx)("img",{id:"worldIcon",src:"data:image/png;base64,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",width:"30",height:"30",alt:""}),Object(l.jsx)("h2",{className:"title-header",children:"Discover a new country"})]}),Object(l.jsx)(h,{})]})}function x(){return Object(l.jsxs)("div",{className:"left-bar",children:[Object(l.jsxs)("section",{children:[Object(l.jsx)("label",{htmlFor:"alp",children:"Order by Alphabetic"}),Object(l.jsxs)("select",{name:"alp",children:[Object(l.jsx)("option",{selected:!0,disabled:!0,children:"Select"}),Object(l.jsx)("option",{value:"asc",children:"A to Z"}),Object(l.jsx)("option",{value:"desc",children:"Z to A"})]})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)("label",{htmlFor:"pop",children:"Order by Population"}),Object(l.jsxs)("select",{name:"pop",children:[Object(l.jsx)("option",{selected:!0,disabled:!0,children:"Select"}),Object(l.jsx)("option",{value:"Pasc",children:"Population asc"}),Object(l.jsx)("option",{value:"Pdesc",children:"Population desc"})]})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)("label",{htmlFor:"act",children:"Order by Activity"}),Object(l.jsxs)("select",{name:"act",children:[Object(l.jsx)("option",{selected:!0,disabled:!0,children:"Select "}),Object(l.jsx)("option",{value:"summer",children:"Summer "}),Object(l.jsx)("option",{value:"spring",children:"Spring"}),Object(l.jsx)("option",{value:"autumn",children:"Autumn"}),Object(l.jsx)("option",{value:"winter",children:"Winter"})]})]}),Object(l.jsxs)("section",{children:[Object(l.jsx)("label",{htmlFor:"cont",children:"Order by Continent "}),Object(l.jsxs)("select",{name:"cont",children:[Object(l.jsx)("option",{selected:!0,disabled:!0,children:"Select"}),Object(l.jsx)("option",{value:"Africa",children:"Africa "}),Object(l.jsx)("option",{value:"Europe",children:"Europe"}),Object(l.jsx)("option",{value:"North America",children:"North America"}),Object(l.jsx)("option",{value:"South America",children:"South America"}),Object(l.jsx)("option",{value:"Oceania",children:"Oceania"}),Object(l.jsx)("option",{value:"Asia",children:"Asia"}),Object(l.jsx)("option",{value:"Antarctica",children:"Antarctica"})]})]}),Object(l.jsx)("button",{className:"reset",children:"Reset"})]})}var g=c(13),p=c.n(g),v=c(17);c(37);function f(e){var t=e.name,c=e.continent,n=e.flagImage,i=e.id;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:n,alt:""}),Object(l.jsx)("h4",{children:t}),Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{className:"spn",children:"Continent:  "}),Object(l.jsx)("div",{children:c})]}),Object(l.jsx)(a.b,{to:"/home/"+i,style:{textDecoration:"none"},children:Object(l.jsx)("button",{className:"btn",children:"More Info"})})]},i.toString())}c(38);var C=Object(u.b)((function(e){return{country:e.countryDetail,countries:e.countries}}),(function(e){return{getCountries:function(t){return e(A(t))}}}))((function(e){var t=e.countries;e.getCountries,Object(n.useEffect)(Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),[]);for(var c=Object(n.useState)(1),i=Object(O.a)(c,2),r=i[0],s=i[1],o=Object(n.useState)(9),a=Object(O.a)(o,2),j=a[0],b=(a[1],Object(n.useState)(5)),A=Object(O.a)(b,2),u=A[0],h=(A[1],Object(n.useState)(5)),d=Object(O.a)(h,2),x=d[0],g=d[1],C=Object(n.useState)(0),m=Object(O.a)(C,2),w=m[0],E=m[1],H=[],B=1;B<=Math.ceil(t.length/j);B++)H.push(B);var N=r*j,S=N-j,y=t.slice(S,N);r>y&&s(1);var D=function(e){s(Number(e.target.id))};function R(e){if(r===H[H.length-1])return 0;s(r+1),r+1>x&&(g(x+u),E(w+u))}function F(e){if(r==H[0])return 0;s(r-1),(r-1)%u==0&&(g(x-u),E(w-u))}var L=H.map((function(e){return e<x+1&&e>w?Object(l.jsx)("li",{id:e,onClick:D,className:e==r?"active":null,children:e},e):null})),I=null;H.length>x&&(I=Object(l.jsx)("li",{onClick:R,children:"\u2026"}));var P=null;return H.length>x&&(P=Object(l.jsx)("li",{onClick:F,children:"\u2026"})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("ul",{className:"pageNumbers",children:[Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:F,children:"Prev"})}),P,L,I,Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:R,children:"Next"})})]},"numberList"),null===y||void 0===y?void 0:y.map((function(e){return Object(l.jsx)(f,{name:e.name,continent:e.continent,flagImage:e.flagImage,ANID:e.ID,id:e.id})}))]})}));c(39);function m(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("aside",{children:[" ",Object(l.jsx)(x,{})," "]}),Object(l.jsxs)("section",{children:[Object(l.jsx)(C,{})," "]})]})]})}var w=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",element:Object(l.jsx)(j,{})}),Object(l.jsx)(o.a,{path:"/home",element:Object(l.jsx)(m,{})})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))},H=c(14),B=c(19),N=c(15),S={countries:[],countryDetail:{}};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type===b?(console.log(t.payload),Object(N.a)(Object(N.a)({},e),{},{countries:Object(B.a)(t.payload)})):e},D=c(18),R=Object(H.b)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(H.a)(D.a));s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u.a,{store:R,children:Object(l.jsx)(a.a,{children:Object(l.jsx)(w,{})})})}),document.getElementById("root")),E()}},[[40,1,2]]]);
//# sourceMappingURL=main.aa16ffe1.chunk.js.map