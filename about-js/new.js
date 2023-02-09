/*
 * @Author: chanwaichun
 * @Date: 2023-01-11 16:00:57
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-01-26 11:25:23
 * @FilePath: \about-frontend\about-js\new.js
 * @Description: 
 * 
 * Copyright (c) 2023 by chanwaichun chanwaichuncc@163.com, All Rights Reserved. 
 */
function myNew(target, ...args) {
  const obj = Object.create(target.prototype);
  const func = target.call(obj, ...args);
  return typeof target === "function" ? obj : func;
}
function test() {
  this.a = 1;
  this.b = 1;
}
const test1 = myNew(test);
console.log(test1);
