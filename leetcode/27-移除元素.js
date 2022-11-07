/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      console.log(nums);
      i--;
    } else {
      i++;
    }
  }
  console.log(nums);
  return nums.length;
};
const res = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
