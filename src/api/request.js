import axios from "axios";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    console.log("响应失败" + error);
    return Promise.reject(new Error("fail"));
  }
);

export default requests;
