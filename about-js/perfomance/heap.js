/*
 * @Author: chanwaichun
 * @Date: 2023-01-04 21:26:42
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-01-05 15:12:02
 * @FilePath: \about-frontend\about-js\perfomance\heap.js
 * @Description:
 *
 * Copyright (c) 2023 by chanwaichun chanwaichuncc@163.com, All Rights Reserved.
 */
let obj1 = { a: 1 };
// obj1: 0x000 {a:1}
let obj2 = obj1;
// obj2 : 0x000
obj2.a = obj1 = { b: 1 };
// obj2 {a:0x001 b:1}}
// obj1 0x001
console.log(obj2, obj1);
// obj2 {a:{b:1}} {b:1}
obj1.b = { 1: 1 };
// obj2 {a:{b:{1:1}}} {b:{1:1}}
console.log(obj2, obj1);
var b = 1;
var b = function () {
  console.log(1);
  b = 2;
  console.log(b);
};
let b1 = 1;
function b() {
  b = 2;
  b1 = 3;
}
console.log(b);
b();
