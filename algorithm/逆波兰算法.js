/*
 * @Author: your name
 * @Date: 2021-07-31 14:07:47
 * @LastEditTime: 2021-07-31 14:27:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \一些原理\算法\逆波兰算法.js
 */
function niBoLanSuanFa(array) {
  let calculateRegArr = ["-", "+"];
  let stack = [];
  function calculateNumber(left, right, reg) {
    stack.push(Number(left) + Number(right));
  }
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (calculateRegArr.includes(item)) {
      let right = stack.pop();
      let left = stack.pop();
      calculateNumber(left, right, item);
    } else {
      stack.push(item);
    }
  }
  return stack[0];
}
console.log(niBoLanSuanFa([1, 4, 5, "+", "+"]));
