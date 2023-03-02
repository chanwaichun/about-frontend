/*
 * @Author: chanwaichun
 * @Date: 2023-01-09 21:58:01
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-01-09 22:03:25
 * @FilePath: \about-frontend\mini-vue\core\dep.js
 * @Description: 
 * 
 * Copyright (c) 2023 by chanwaichun chanwaichuncc@163.com, All Rights Reserved. 
 */
Dep.target = null;
class Dep {
  constructor() {
    this.subs = [];
  }

  addDep(target) {
    this.subs.push(target);
  }
  notify() {}
}
