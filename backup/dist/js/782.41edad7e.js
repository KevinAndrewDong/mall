"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[782],{782:function(t,s,a){a.r(s),a.d(s,{default:function(){return n}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cart-complete-wrap"},[a("div",{staticClass:"cart-complete"},[a("h3",[t._v("商品已成功加入购物车！")]),a("div",{staticClass:"goods"},[a("div",{staticClass:"left-good"},[a("div",{staticClass:"left-pic"},[a("img",{attrs:{src:t.skuInfo.skuDefaultImg}})]),a("div",{staticClass:"right-info"},[a("p",{staticClass:"title"},[t._v(t._s(t.skuInfo.skuName))]),a("p",{staticClass:"attr"},[t._v(" "+t._s(t.skuInfo.skuDesc)+" 数量："+t._s(t.$route.query.skuNum)+" ")])])]),a("div",{staticClass:"right-gocart"},[a("router-link",{staticClass:"sui-btn btn-xlarge",attrs:{to:"/detail/"+t.skuInfo.id}},[t._v("查看商品详情")]),a("router-link",{attrs:{to:"/shopcart"}},[t._v("去购物车结算 > ")])],1)])])])},i=[],r={name:"AddCartSuccess",computed:{skuInfo(){return JSON.parse(sessionStorage.getItem("SKUINFO"))}}},c=r,u=a(1001),l=(0,u.Z)(c,e,i,!1,null,"c7cd83b8",null),n=l.exports}}]);