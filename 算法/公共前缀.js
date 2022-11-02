var longestCommonPrefix = function (strs) {
  // 数组第几项
  let wordIndex = 0;
  // 数组里面的str里面第几位
  let charIndex = 0;
  // 公共的字符串
  let charCache = "";
  let commonChar = "";
  while (wordIndex <= strs.length - 1 && charIndex > -1) {
    // 如果找不到说明已经越界了 直接文字下标为-1
    console.log(wordIndex, charIndex);
    if (strs[wordIndex][charIndex] === undefined) {
      charIndex = -1;
    }
    // 如果公共字符串存在且与匹配的文字不相同
    if (charCache && charCache !== strs[wordIndex][charIndex]) {
      // 如果数组是空的
      charCache = "";
    } else {
      charCache = strs[wordIndex][charIndex];
    }
    // 公共字符串继续赋值

    if (wordIndex >= strs.length - 1) {
      wordIndex = 0;
      if (charCache) {
        commonChar = commonChar + charCache;
      }
      charCache = "";
      charIndex++;
    } else {
      wordIndex++;
    }
  }
  console.log(commonChar);
  return commonChar;
};

strs = ["dog", "racecar", "car"];
longestCommonPrefix(strs);
