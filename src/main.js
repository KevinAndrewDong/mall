import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import { Button, MessageBox } from "element-ui";

Vue.component(Button.name, Button);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//三级联动组件---全局
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);

//轮播图
import Carousel from "@/components/Carousel";
Vue.component(Carousel.name, Carousel);

//分页器
import Pagination from "@/components/Pagination";
Vue.component(Pagination.name, Pagination);

Vue.config.productionTip = false;

import "@/mock/mockServe";
//引入swiper样式
import "swiper/css/swiper.css";
import * as API from "@/api";

import VueLazyload from "vue-lazyload";
import atm from "@/assets/images/loading.png";
Vue.use(VueLazyload, {
  loading: atm,
});

new Vue({
  render: (h) => h(App),
  //全局总线$bus设置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount("#app");
