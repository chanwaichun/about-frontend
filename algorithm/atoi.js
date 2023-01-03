// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) {
    return s;
  }
  let arr = new Array();
  arr.length = numRows;
  arr.fill(0);
  arr = arr.map(() => []);
  let veticalIndex = 0;
  let horizontalIndex = 0;
  let positive = true;
  for (let i = 0; i < s.length; i++) {
    const flag = i % (numRows - 1);
    arr[veticalIndex].push(s[i]);

    if (flag === 0 && i !== 0) {
      positive = !positive;
    }
    // 如果是正向的
    if (positive) {
      veticalIndex++;
    } else {
      // 反向
      veticalIndex--;
      horizontalIndex++;
    }
  }

  const str = arr.map((item) => item.join("")).join("");
  return str;
};

console.log(convert("PAYPALISHIRING", 3))

