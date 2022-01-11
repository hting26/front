(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{a434:function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),c=r("23cb"),i=r("5926"),u=r("07fa"),o=r("7b0b"),s=r("65f0"),l=r("8418"),d=r("1dde"),p=d("splice"),f=a.TypeError,m=Math.max,h=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var r,n,a,d,p,k,w=o(this),g=u(w),x=c(e,g),y=arguments.length;if(0===y?r=n=0:1===y?(r=0,n=g-x):(r=y-2,n=h(m(i(t),0),g-x)),g+r-n>b)throw f(v);for(a=s(w,n),d=0;d<n;d++)p=x+d,p in w&&l(a,d,w[p]);if(a.length=n,r<n){for(d=x;d<g-n;d++)p=d+n,k=d+r,p in w?w[k]=w[p]:delete w[k];for(d=g;d>g-n+r;d--)delete w[d-1]}else if(r>n)for(d=g-n;d>x;d--)p=d+n-1,k=d+r-1,p in w?w[k]=w[p]:delete w[k];for(d=0;d<r;d++)w[d+x]=arguments[d+2];return w.length=g-n+r,a}})},b789:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"cart"}},[r("p",{staticClass:"text-center"},[e._v("總金額 "+e._s(e.total))]),r("b-btn",{attrs:{variant:"success",block:"",disabled:0===e.products.length},on:{click:e.checkout}},[e._v("結帳")]),r("b-table",{attrs:{items:e.products,fields:e.fields,"tbody-tr-class":e.rowClass},scopedSlots:e._u([{key:"cell(image)",fn:function(t){return[t.item.product.image?r("img",{staticStyle:{height:"50px"},attrs:{src:t.item.product.image}}):e._e()]}},{key:"cell(name)",fn:function(t){return[e._v(e._s(t.item.product.name))]}},{key:"cell(price)",fn:function(t){return[e._v(e._s(t.item.product.price))]}},{key:"cell(action)",fn:function(t){return[r("b-form-spinbutton",{attrs:{min:"1",inline:""},on:{input:function(r){return e.updateCart(t.index,t.item.quantity)}},model:{value:t.item.quantity,callback:function(r){e.$set(t.item,"quantity",r)},expression:"data.item.quantity"}}),e._v(" "),r("b-btn",{attrs:{variant:"danger"},on:{click:function(r){return e.updateCart(t.index,0)}}},[e._v("X")])]}}])})],1)},a=[],c=r("1da1"),i=(r("96cf"),r("a434"),r("d3b7"),{data:function(){return{products:[],fields:[{key:"image",label:"圖片"},{key:"name",label:"名稱"},{key:"price",label:"價格"},{key:"action",label:"操作"}]}},methods:{updateCart:function(e,t){var r=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.api.patch("/users/me/cart",{product:r.products[e].product._id,quantity:t},{headers:{authorization:"Bearer "+r.user.token}});case 3:0===t&&(r.products.splice(e,1),r.$store.commit("user/updateCart",r.user.cart-1)),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),r.$swal({icon:"error",title:"失敗",text:"修改購物車失敗"});case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},checkout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.post("/orders",{},{headers:{authorization:"Bearer "+e.user.token}});case 3:e.$router.push("/orders"),e.$store.commit("user/updateCart",0),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"結帳失敗"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},rowClass:function(e,t){if(e&&"row"===t)return e.product.sell?"":"bg-danger"}},computed:{total:function(){return this.products.reduce((function(e,t){return e+t.quantity*t.product.price}),0)}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/users/me/cart",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,n=r.data,e.products=n.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得購物車失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),u=i,o=r("2877"),s=Object(o["a"])(u,n,a,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=cart.127914e3.js.map