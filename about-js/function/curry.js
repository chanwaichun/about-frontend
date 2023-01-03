/*
 * @Author: chanwaichun
 * @Date: 2022-11-27 16:37:11
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2022-11-27 21:11:05
 * @FilePath: \about-frontend\about-js\function\curry.js
 * @Description: 
 * 
 * Copyright (c) 2022 by chanwaichun chanwaichuncc@163.com, All Rights Reserved. 
 */

function sum(a, b) {
  return a + b;
}
function curry(func) {
  console.log(func)
  return function curried(...args) {
    // 参数长度大于函数长度
    console.log(args)

    console.log(func.length,"func.length")
    // 如果参数大于等于目标函数的长度
    if (args.length >= func.length) {
      // 函数
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
let curriedSum = curry(sum);
const num = curriedSum(1)(2);
console.log(num);
