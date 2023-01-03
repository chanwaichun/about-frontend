/*
 * @Author: your name
 * @Date: 2021-07-31 17:33:21
 * @LastEditTime: 2022-12-23 11:55:35
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @Description: In User Settings Edit
 * @FilePath: \about-frontend\algorithm\两数之和.js
 */
function addTwoNumbers(l1, l2) {
  let target;
  let carry = 0;
  let newResult = [];
  l1.length > l2.length ? (target = l1) : (target = l2);
  for (let i = 0; i < target.length; i++) {
    let l1_item = l1[i] ? l1[i] : 0;
    let l2_item = l2[i] ? l2[i] : 0;
    let total = l1_item + l2_item + carry;
    if (total >= 10) {
      carry = total - 10;
      newResult[i] = Math.floor(total / 10);
    } else {
      newResult[i] = total;
    }
  }
  return newResult;
}
const result = addTwoNumbers([1, 8, 3, 4], [9, 2, 3]);
console.log(result);
