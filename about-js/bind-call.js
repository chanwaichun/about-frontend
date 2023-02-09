/*
 * @Author: chanwaichun
 * @Date: 2022-12-26 15:06:25
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-01-11 15:54:55
 * @FilePath: \about-frontend\about-js\bind.js
 * @Description:
 *
 * Copyright (c) 2023 by chanwaichun chanwaichuncc@163.com, All Rights Reserved.
 */
// function bind(context)
// {

// }
Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  const symbolKey = Symbol();
  context[symbolKey] = this;
  const res = context[symbolKey](...args);
  delete context[symbolKey];
  return res;
};

Function.prototype.myBind = function () {
  const args = Array.prototype.slice.call(arguments);
  const t = args.shift();
  const self = this;
  return function () {
    return self.myCall(t, ...args);
  };
};

let o = {
  a: 1,
};
// function o1(){
//   this.a = 1;
// }

function test(a, b, c) {
  console.log(a, b, c);
  console.log(this.a);
}
const func = test.myBind(o, 1, 2, 2);
console.log(func);
func();
