/*
 * @Author: chanwaichun
 * @Date: 2023-02-15 23:47:17
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @LastEditTime: 2023-02-16 00:01:18
 * @FilePath: \about-frontend\algorithm\1672.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
var maximumWealth = function (accounts) {
  let cIndex = 0;
  let bIndex = 0;
  let maxNumber = 0;
  while (cIndex < accounts.length) {
    console.log(accounts[cIndex])
    let maxMoney = 0
    while (bIndex < accounts[cIndex].length) {
      maxMoney += accounts[cIndex][bIndex]
      bIndex++
    }
    if (maxMoney > maxNumber) {
      maxNumber = maxMoney
    }
    bIndex = 0
    cIndex++;
  }
  console.log(maxNumber)
};
const arr = [[], []];
maximumWealth(arr)