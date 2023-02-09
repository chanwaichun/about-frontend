/*
 * @Author: chanwaichun
 * @Date: 2023-01-13 22:05:30
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-01-17 14:57:02
 * @FilePath: \about-frontend\about-js\deepClone.js
 * @Description:
 *
 * Copyright (c) 2023 by chanwaichun chanwaichuncc@163.com, All Rights Reserved.
 */
const obj = {
  a: {
    a: {
      a: 1,
      b: 1,
    },
  },
  b: {
    1: 1,
    2: {
      2: 1,
      a: 1,
    },
  },
};

// const deepClone = (target, weakMap = new WeakMap()) => {
//   let cloneTarget = Array.isArray(target) ? [] : {};
//   for (key in target) {
   
//     if (typeof target[key] === "object") {
//       weakMap.set(key, target[key]);
//       cloneTarget[key] = weakMap.get(key);
//       return deepClone(cloneTarget, weakMap);
//     } else if (
//       Object.prototype.toString.call(target[key]) === "[object Object]"
//     ) {
//       cloneTarget[key] = weakMap.get(key);
//       return deepClone(cloneTarget, weakMap);
//     } else {
//       return target[key];
//     }
//   }
// };

// const arr = [1, 2, 3, 4];

// const arr1 = [...arr];
// const obj1 = { a: 1, b: { a: 1 } };
// const obj2 = {...obj1};
// obj2.a = 23;

// arr1[0] = 22;
// console.log(arr, arr1);
// console.log(obj1, obj2);
function deepClone (origin, weakMap = new WeakMap()) {
  if (origin == undefined || typeof origin != 'object') {
    return origin
  }
  if (origin instanceof Date) {
    return new Date(origin)
  }
  if (origin instanceof RegExp) {
    return new RegExp(origin)
  }
  const val = weakMap.get(origin)
  if (val) return val
  const target = new origin.constructor()
  weakMap.set(origin, target)
  for (let k in origin) {
    target[k] = deepClone(origin[k], weakMap)
  }
  return target
}
const newObj = deepClone(obj);
console.log(newObj);