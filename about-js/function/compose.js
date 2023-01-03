/*
 * @Author: chanwaichun
 * @Date: 2022-11-27 16:21:23
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2022-11-27 21:14:01
 * @FilePath: \about-frontend\about-js\function\compose.js
 * @Description: 
 * 
 * Copyright (c) 2022 by chanwaichun chanwaichuncc@163.com, All Rights Reserved. 
 */
// 组合函数 
function two(a) {
  return a + 1;
}
function one(a) {
  return a * 2;
}

const compose = function () {
  console.log(arguments);
  const functionArgs = [].slice.call(arguments);
  console.log(functionArgs);
  return function (x) {
    return functionArgs.reduce((prev, current, index) => {
      return current(prev);
    }, x);
  };
};
const calculate = compose(one, two);
calculate(1, 2);
console.log(calculate(1, 2));
