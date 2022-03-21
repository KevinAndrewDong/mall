import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
//三级联动组件---全局
import TypeNav from "@/pages/Home/TypeNav";
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false;

import { reqCategoryList } from "@/api";
reqCategoryList();

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
