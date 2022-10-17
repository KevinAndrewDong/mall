技术架构为：Vue + ES6 + Webpack + Axios。实现搜索、购物车、用户登陆等多个子模块。
* 对 axios 进行二次包装来与后端进行数据交互，实现前后端分离开发
* 利用 Vuex 的 actions 搭配 forEach 去重并过滤空字符串，实现商品搜寻的功能，方便顾客查找需要的商品
* 调用 nextTick() 延迟到界面更新后创建 swiper 对象
* 通过懒加载和 Vue Router 的动态导入，将加载时间 load 从1.2s降低到320ms左右

