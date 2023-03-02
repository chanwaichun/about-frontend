/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let currentString = ''
  let stringArr = []
  function filterZero(string) {
    let flag = false
    let index = 0
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '0' && !flag) {
        continue;
      }
      flag = true
      index = i
      break;
    }
    return string.slice(index, string.length)
  }
  function checkNumber(number) {
    return !isNaN(Number(number))
  }
  function setStringArr(string, arr) {
    if (string && !arr.includes(filterZero(string))) {
      arr.push(filterZero(string))
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (i === word.length - 1) {
      if (checkNumber(word[i])) {
        currentString += word[i]
      }

      setStringArr(currentString, stringArr)
      continue;
    }
    if (!checkNumber(word[i])) {
      setStringArr(currentString, stringArr)
      currentString = ''
      continue;
    }
    currentString += word[i]
  }
  console.log(stringArr)
  return stringArr.length

};
console.log(numDifferentIntegers('ubhb4xkon7yxlr0007c'))