import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

//三级联动组件---全局
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);

//轮播图
import Carousel from "@/components/Carousel";
Vue.component(Carousel.name, Carousel);

Vue.config.productionTip = false;

import "@/mock/mockServe";
import "swiper/css/swiper.css";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
