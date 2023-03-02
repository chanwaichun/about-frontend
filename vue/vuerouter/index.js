/*
 * @Author: chanwaichun
 * @Date: 2023-01-09 12:04:30
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-01-09 14:54:07
 * @FilePath: \about-frontend\vue\vuerouter\index.js
 * @Description:
 *
 * Copyright (c) 2023 by chanwaichun chanwaichuncc@163.com, All Rights Reserved.
 */
let _Vue = null;
export default class VueRouter {
  static install(Vue) {
    if (VueRouter.install.installed) {
      return;
    }
    VueRouter.install.installed = true;
    _Vue = Vue;
    // mixins混入生命周期
    Vue.mixins({
      beforeCreate() {
        if (this.$option.router) {
          _Vue.prototype.$router = this.$option.router;
        }
      },
    });
  }
  constructor(options) {
    this.options = options;
    this.routeMap = {};
    // 响应式
    this.data = _Vue.observable({
      current: "/",
    });
  }
  init() {
    this.createRouteMap()
    this.initComponent()
  }
  initComponent() {
    // 声明组件
    _Vue.component("router-link");
    //  声明routerView的组件
    _Vue.component("router-view");
  }
  createRouteMap() {
    this.options.routes.forEach((item) => {
      this.routeMap[route.path] = route.component;
    });
  }
  initEvent()
  {
    window.addEventListener('pushState',()=>{
      this.data.current = window.location.pathname
    })
  }
}
