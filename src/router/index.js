import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";

Vue.use(VueRouter);

//重写VueRouter原型对象的push
let originPush = VueRouter.prototype.push;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

//重写replace
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

let router = new VueRouter({
  routes,
  scrollBehavior() {
    return { y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  next();
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    if (to.path == "/login") {
      next("/home");
    } else {
      if (name) {
        next();
      } else {
        //登陆了没有用户信息 -路由跳转前获取用户信息,放行
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          // token过期 -重新登陆
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    let toPath = to.path;
    if (
      // 未登陆跳转
      toPath.indexOf("/trade") !== -1 ||
      toPath.indexOf("/pay") !== -1 ||
      toPath.indexOf("/center") !== -1
    ) {
      next("/login?redirect=" + toPath);
    } else {
      next();
    }
  }
});

export default router;
