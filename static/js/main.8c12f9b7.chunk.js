(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,r=n(4),c=n.n(r),o=n(5),i=n(6),a=n(8),l=n(7),u=n(1),b=n(2),j=n.n(b),h=(n(13),n(14),n(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function p(t,e){var n=e.sortType,s=e.isReversed,r=Object(u.a)(t);switch(!0===s&&r.reverse(),n){case 0:r=Object(u.a)(t);break;case 1:r=Object(u.a)(t).filter((function(t,e){return t.localeCompare(e.toString())}));break;case 2:r=Object(u.a)(t).filter((function(t,e){return t.length-e.toString().length}))}return console.log(n,s),r.map((function(t){return Object(h.jsx)("li",{"data-cy":"Good",children:t})}))}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var f=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortType:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:"button is-info is-light",onClick:function(){return t.setState({sortType:1})},children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"button is-success is-light",onClick:function(){return t.setState({sortType:2})},children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:"button is-warning is-light",onClick:function(){return t.setState({isReversed:!0})},children:"Reverse"}),Object(h.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.setState({sortType:0})},children:"Reset"})]}),Object(h.jsx)("ul",{children:Object(h.jsx)("ul",{children:p(d,this.state)})})]})}}]),n}(j.a.Component);c.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8c12f9b7.chunk.js.map