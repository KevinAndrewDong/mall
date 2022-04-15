// import Home from "@/views/Home";
// import Login from "@/views/Login";
// import Register from "@/views/Register";
// import Search from "@/views/Search";
// import Detail from "@/views/Detail";
// import AddCartSuccess from "@/views/AddCartSuccess";
// import ShopCart from "@/views/ShopCart";
// import Trade from "@/views/Trade";
// import Pay from "@/views/Pay";
// import PaySuccess from "@/views/PaySuccess";
// import Center from "@/views/Center";
// //引入二级路由zujm
// import MyOrder from "@/views/Center/myOrder";
// import GroupOrder from "@/views/Center/groupOrder";

export default [
  {
    path: "/center",
    component: () => import("@/views/Center"),
    meta: { show: true },
    children: [
      {
        path: "myorder",
        component: () => import("@/views/Center/myOrder"),
      },
      {
        path: "grouporder",
        component: () => import("@/views/Center/groupOrder"),
      },
      {
        path: "",
        redirect: "myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    component: () => import("@/views/PaySuccess"),
    meta: { show: true },
  },
  {
    path: "/pay",
    component: () => import("@/views/Pay"),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/trade",
    component: () => import("@/views/Trade"),
    meta: { show: true },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      if (from.path == "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/shopcart",
    component: () => import("@/views/ShopCart"),
    meta: { show: true },
  },
  {
    path: "/addcartsuccess/:skuid",
    name: "addcartsuccess",
    component: () => import("@/views/AddCartSuccess"),
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: () => import("@/views/Detail"),
    meta: { show: true },
  },
  {
    path: "/home",
    component: () => import("@/views/Home"),
    meta: { show: true },
  },
  {
    path: "/login",
    component: () => import("@/views/Login"),
    meta: { show: false },
  },
  {
    path: "/register",
    component: () => import("@/views/Register"),
    meat: { show: false },
  },
  {
    path: "/search/:keyword?",
    component: () => import("@/views/Search"),
    meta: { show: true },
    name: "search",
  },
  {
    path: "*",
    redirect: "/home",
  },
];
