/*
 * @Author: chanwaichun
 * @Date: 2022-11-13 18:19:34
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-01-09 15:53:31
 * @FilePath: \about-frontend\mini-vue\core\vue.js
 * @Description:
 *
 * Copyright (c) 2023 by chanwaichun chanwaichuncc@163.com, All Rights Reserved.
 */
class Vue {
  constructor(options) {
    this.$options = options || {};
    this.$data = options.data || {};
    this.$el =
      typeof options.el === "string"
        ? document.querySelector(option.el)
        : options.el;
    this.proxyData(this.$data);
    new Observer(this.$data);
  }
  proxyData(data) {
    Object.keys(data).forEach((key) => {
      console.log(this);
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newValue) {
          if (newValue === data[key]) {
            return;
          }
          data[key] = newValue;
        },
      });
    });
  }
}
