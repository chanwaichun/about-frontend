/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums.slice(0, i).indexOf(nums[i]) > -1 ) {
      nums.splice(i, 1);
      i--;
    } else {
      i++;
    }
  }
  console.log(nums);
  return nums;
};
const res = removeDuplicates([1, 1, 2]);
console.log(res)