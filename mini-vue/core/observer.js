/*
 * @Author: chanwaichun
 * @Date: 2023-01-09 14:58:14
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-01-09 16:04:15
 * @FilePath: \about-frontend\mini-vue\core\observer.js
 * @Description:
 *
 * Copyright (c) 2023 by chanwaichun chanwaichuncc@163.com, All Rights Reserved.
 */
class Observer {
  constructor(data) {
    this.walker(data);
  }
  walker(data) {
    if (!data || typeof data !== "object") {
      return;
    }
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
    });
  }
  defineReactive(data, key, val) {
    this.walker(val);
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get() {
        debugger;
        return val;
      },
      set(newValue) {
        if (newValue === data[key]) {
          return;
        }
        this.walker(val);
        val = newValue;
      },
    });
  }
}
