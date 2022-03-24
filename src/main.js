import Vue from "vue";
import App from "./App.vue";

//三级联动组件---全局
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false;

import router from "@/router";
import store from "@/store";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
