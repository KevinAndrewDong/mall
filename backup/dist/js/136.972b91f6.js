"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[136],{8136:function(e,s,t){t.r(s),t.d(s,{default:function(){return l}});var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"register-container"},[t("div",{staticClass:"register"},[e._m(0),t("div",{staticClass:"content"},[t("label",[e._v("手机号:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入你的手机号"},domProps:{value:e.phone},on:{input:function(s){s.target.composing||(e.phone=s.target.value)}}}),t("span",{staticClass:"error-msg"})]),t("div",{staticClass:"content"},[t("label",[e._v("验证码:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{name:"code",placeholder:"请输入验证码"},domProps:{value:e.code},on:{input:function(s){s.target.composing||(e.code=s.target.value)}}}),t("button",{staticStyle:{width:"70px",height:"38px"},on:{click:e.getCode}},[e._v(" 获取验证码 ")]),t("span",{staticClass:"error-msg"})]),t("div",{staticClass:"content"},[t("label",[e._v("登录密码:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{name:"password",placeholder:"请输入你的登录密码"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),t("span",{staticClass:"error-msg"})]),t("div",{staticClass:"content"},[t("label",[e._v("确认密码:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"}],attrs:{name:"password1",placeholder:"请输入确认密码"},domProps:{value:e.password1},on:{input:function(s){s.target.composing||(e.password1=s.target.value)}}}),t("span",{staticClass:"error-msg"})]),t("div",{staticClass:"controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],attrs:{name:"m1",type:"checkbox"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(s){var t=e.agree,a=s.target,r=!!a.checked;if(Array.isArray(t)){var o=null,n=e._i(t,o);a.checked?n<0&&(e.agree=t.concat([o])):n>-1&&(e.agree=t.slice(0,n).concat(t.slice(n+1)))}else e.agree=r}}}),t("span",[e._v("同意协议并注册《微商城用户协议》")]),t("span",{staticClass:"error-msg"})]),t("div",{staticClass:"btn"},[t("button",{on:{click:e.userRegister}},[e._v("完成注册")])])]),e._m(1)])},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("h3",[e._v(" 注册新用户 "),t("span",{staticClass:"go"},[e._v("我有账号，去 "),t("a",{attrs:{href:"login.html",target:"_blank"}},[e._v("登陆")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"copyright"},[t("ul",[t("li",[e._v("关于我们")]),t("li",[e._v("联系我们")]),t("li",[e._v("联系客服")]),t("li",[e._v("商家入驻")]),t("li",[e._v("营销中心")]),t("li",[e._v("手机微商城")]),t("li",[e._v("销售联盟")]),t("li",[e._v("微商城社区")])])])}],o={name:"Register",data(){return{phone:"",code:"",password:"",password1:"",agree:!0}},methods:{async getCode(){try{const{phone:e}=this;e&&await this.$store.dispatch("getCode",e),this.code=this.$store.state.user.code}catch(e){}},async userRegister(){try{const{phone:e,code:s,password:t,password1:a}=this;e&&s&&t==a&&await this.$store.dispatch("userRegister",{phone:e,code:s,password:t}),this.$router.push("/login")}catch(e){alert(e.message)}}}},n=o,i=t(1001),c=(0,i.Z)(n,a,r,!1,null,"ad18a31a",null),l=c.exports}}]);