/*
 * @Author: chanwaichun
 * @Date: 2022-12-22 17:10:17
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-01-03 14:07:06
 * @FilePath: \about-frontend\about-js\promise.js
 * @Description:
 *
 * Copyright (c) 2023 by chanwaichun chanwaichuncc@163.com, All Rights Reserved.
 */

class MyPromise {
  constructor(fun) {
    this.successCallback = [];
    this.failCallback = [];
    this.result = null;
    try {
      fun(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }
  status = "pending";
  resolve = (res) => {
    this.status = "success";
    this.result = res;
    if (this.successCallback.length > 0) {
      this.successCallback.forEach((callFunc) => {
        callFunc(this.result);
      });
    }
  };
  reject = (err) => {
    this.status = "fail";
    console.log(err);
    this.result = err;
  };
  then(successCallback, failCallback) {
    if (this.status === "fail") {
      this.failCallback.forEach((callFunc) => {
        callFunc(this.result);
      });
    } else if (this.status === "success") {
      this.successCallback.forEach((callFunc) => {
        callFunc(this.result);
      });
    } else {
      this.successCallback.push(successCallback);
      this.failCallback.push(failCallback);
    }
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(111);
  }, 2000);
});
p.then(
  (res) => {
    console.log(res, 1);
    // reject(111)
  },
  (err) => {
    console.log(err);
  }
);
p.then((res) => {
  console.log(res, 1);
});
