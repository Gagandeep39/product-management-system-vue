(function(t){function e(e){for(var n,u,i=e[0],d=e[1],a=e[2],b=0,p=[];b<i.length;b++)u=i[b],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,a||[]),c()}function c(){for(var t,e=0;e<o.length;e++){for(var c=o[e],n=!0,i=1;i<c.length;i++){var d=c[i];0!==r[d]&&(n=!1)}n&&(o.splice(e--,1),t=u(u.s=c[0]))}return t}var n={},r={app:0},o=[];function u(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.m=t,u.c=n,u.d=function(t,e,c){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(c,n,function(e){return t[e]}.bind(null,n));return c},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/product-management-system-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=d;o.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"06c1":function(t,e,c){"use strict";c("ecb0")},2769:function(t,e,c){"use strict";c("ad93")},"38c8":function(t,e,c){"use strict";c("636d")},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r=c("6c02");function o(t,e,c,r,o,u){var i=Object(n["v"])("the-header"),d=Object(n["v"])("router-view");return Object(n["o"])(),Object(n["d"])(n["a"],null,[Object(n["f"])(i),Object(n["f"])(d)],64)}c("a4d3"),c("e01a");var u=Object(n["D"])("data-v-06694716");Object(n["r"])("data-v-06694716");var i=Object(n["e"])("All Products"),d=Object(n["e"])("Add Product");Object(n["p"])();var a=u((function(t,e){var c=Object(n["v"])("router-link");return Object(n["o"])(),Object(n["d"])("header",null,[Object(n["f"])("nav",null,[Object(n["f"])("ul",null,[Object(n["f"])("li",null,[Object(n["f"])(c,{to:"/products"},{default:u((function(){return[i]})),_:1})]),Object(n["f"])("li",null,[Object(n["f"])(c,{to:"/products/add"},{default:u((function(){return[d]})),_:1})])])])])}));c("06c1");const l={};l.render=a,l.__scopeId="data-v-06694716";var b=l,p={components:{TheHeader:b},setup:function(){var t=Object(n["t"])([{id:"p1",title:"A Carpet",description:"A nice looking, maybe a little bit used carpet.",price:15.99},{id:"p2",title:"A Book",description:"You can read it. Maybe you should read it.",price:12.99}]);function e(e){var c={id:(new Date).toISOString(),title:e.title,description:e.description,price:e.price};t.value.push(c)}Object(n["q"])("products",t),Object(n["q"])("addProduct",e)}};c("38c8");p.render=o;var f=p,j=Object(n["D"])("data-v-38ac394e");Object(n["r"])("data-v-38ac394e");var s=Object(n["f"])("h2",null,"All products",-1),O=Object(n["e"])("View Details");Object(n["p"])();var v=j((function(t,e,c,r,o,u){var i=Object(n["v"])("router-link");return Object(n["o"])(),Object(n["d"])("section",null,[s,Object(n["f"])("ul",null,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(r.products,(function(t){return Object(n["o"])(),Object(n["d"])("li",{key:t.id},[Object(n["f"])("h3",null,Object(n["x"])(t.title),1),Object(n["f"])("h4",null,"$"+Object(n["x"])(t.price),1),Object(n["f"])("p",null,Object(n["x"])(t.description),1),Object(n["f"])(i,{to:"/products/".concat(t.id)},{default:j((function(){return[O]})),_:2},1032,["to"])])})),128))])])})),h={setup:function(){var t=Object(n["j"])("products");return{products:t}}};c("2769");h.render=v,h.__scopeId="data-v-38ac394e";var m=h,y=Object(n["D"])("data-v-28bd2ca4"),_=y((function(t,e,c,r,o,u){return Object(n["o"])(),Object(n["d"])("section",null,[Object(n["f"])("h2",null,Object(n["x"])(r.title),1),Object(n["f"])("h3",null,"$"+Object(n["x"])(r.price),1),Object(n["f"])("p",null,Object(n["x"])(r.description),1)])})),P=(c("7db0"),{props:["pid"],setup:function(){var t=Object(n["j"])("products"),e=Object(r["c"])();console.log(e);var c=t.value.find((function(t){return t.id===e.params.pid})),o=Object(n["b"])((function(){return c.title})),u=Object(n["b"])((function(){return c.price})),i=Object(n["b"])((function(){return c.description}));return i.value=c.description,{title:o,price:u,description:i}}});c("ccfd");P.render=_,P.__scopeId="data-v-28bd2ca4";var g=P,w=Object(n["D"])("data-v-28709476");Object(n["r"])("data-v-28709476");var x=Object(n["f"])("h2",null,"Add a products",-1),D=Object(n["f"])("label",{for:"title"},"Title",-1),k=Object(n["f"])("label",{for:"price"},"Price",-1),A=Object(n["f"])("label",{for:"description"},"Description",-1),S=Object(n["f"])("button",null,"Add Product",-1);Object(n["p"])();var T=w((function(t,e,c,r,o,u){return Object(n["o"])(),Object(n["d"])("section",null,[x,Object(n["f"])("form",{onSubmit:e[4]||(e[4]=Object(n["C"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"]))},[Object(n["f"])("div",null,[D,Object(n["B"])(Object(n["f"])("input",{type:"text",id:"title","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.enteredTitle=t})},null,512),[[n["z"],r.enteredTitle]])]),Object(n["f"])("div",null,[k,Object(n["B"])(Object(n["f"])("input",{type:"number",id:"price","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.enteredPrice=t})},null,512),[[n["z"],r.enteredPrice,void 0,{number:!0}]])]),Object(n["f"])("div",null,[A,Object(n["B"])(Object(n["f"])("textarea",{rows:"5",id:"description","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.enteredDescription=t})},null,512),[[n["z"],r.enteredDescription]])]),S],32)])})),I={setup:function(){var t=Object(n["j"])("addProduct"),e=Object(n["t"])(""),c=Object(n["t"])(null),o=Object(n["t"])(""),u=Object(r["d"])();function i(){t({title:e,description:o,price:c}),u.push("/products")}return{enteredTitle:e,enteredPrice:c,enteredDescription:o,submitForm:i}}};c("656a");I.render=T,I.__scopeId="data-v-28709476";var M=I,B=Object(r["a"])({history:Object(r["b"])(),routes:[{path:"/",redirect:"/products"},{path:"/products",component:m},{path:"/products/:pid",component:g,props:!0},{path:"/products/add",component:M}]});Object(n["c"])(f).use(B).mount("#app")},"636d":function(t,e,c){},"656a":function(t,e,c){"use strict";c("bfac")},ad93:function(t,e,c){},bfac:function(t,e,c){},c758:function(t,e,c){},ccfd:function(t,e,c){"use strict";c("c758")},ecb0:function(t,e,c){}});
//# sourceMappingURL=app.37be4392.js.map