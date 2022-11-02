/*
 * @Author: your name
 * @Date: 2021-08-11 19:09:04
 * @LastEditTime: 2021-08-12 17:51:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \一些原理\算法\找出连续最长的字符串.js
 */
var lengthOfLongestSubstring = function (s) {
  let right = -1;
  let left = 0;
  let freMap = {}
  let max = 0
  while (left < s.length) {
    let nextLetter = s[right + 1];
    if (!freMap[nextLetter] && nextLetter !== undefined) {
      freMap[nextLetter] = 1;
      right++
    } else {
      freMap[s[left]] = 0;
      left++;
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}
let result = lengthOfLongestSubstring("pwwkew");
console.log(result);