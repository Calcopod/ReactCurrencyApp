(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),u=n.n(r),o=n(6),s=n(1);n(12);function l(e){var t=e.currencyOptions,n=e.selectedCurrency,a=e.onChange,r=e.amount,u=e.onChangeAmount;return c.a.createElement("div",{className:"Main"},c.a.createElement("input",{value:r,onChange:u,className:"inp",type:"number",placeholder:"Enter a number"}),c.a.createElement("select",{className:"select",value:n,onChange:a},t.map((function(e){return c.a.createElement("option",{value:e,key:e},e)}))))}n(13);var i="https://api.exchangeratesapi.io/latest";var m=function(){var e,t,n=Object(a.useState)([]),r=Object(s.a)(n,2),u=r[0],m=r[1],b=Object(a.useState)(),f=Object(s.a)(b,2),h=f[0],O=f[1],j=Object(a.useState)(),p=Object(s.a)(j,2),v=p[0],y=p[1],E=Object(a.useState)(),g=Object(s.a)(E,2),d=g[0],C=g[1],S=Object(a.useState)(!0),k=Object(s.a)(S,2),N=k[0],A=k[1],w=Object(a.useState)(1),x=Object(s.a)(w,2),J=x[0],M=x[1];return N?(t=J,e=J*d):(e=J,t=J/d),Object(a.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];m([e.base].concat(Object(o.a)(Object.keys(e.rates)))),O(e.base),y(t),C(e.rates[t])}))}),[]),Object(a.useEffect)((function(){void 0!=h&&void 0!=v&&fetch("".concat(i,"?base=").concat(h,"&symbols=").concat(v)).then((function(e){return e.json()})).then((function(e){return C(e.rates[v])}))}),[h,v]),c.a.createElement("div",{className:"main"},c.a.createElement("h1",null,"Currency convertor"),c.a.createElement(l,{currencyOptions:u,selectedCurrency:h,onChange:function(e){return O(e.target.value)},amount:t,onChangeAmount:function(e){M(e.target.value),A(!0)}}),c.a.createElement("h2",null,"="),c.a.createElement(l,{currencyOptions:u,selectedCurrency:v,onChange:function(e){return y(e.target.value)},amount:e,onChangeAmount:function(e){M(e.target.value),A(!1)}}))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a1717644.chunk.js.map