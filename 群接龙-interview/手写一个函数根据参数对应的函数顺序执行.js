const combo = (...func) => {
  // TODO: 请在此处完善代码
  let funcLength = func.length - 1;

  function execAll(result, index) {
    if (index == -1) {
       console.log(result)
      return result;
    }
   
    // console.log(func[0](result));
    return execAll(func[index](result), index - 1)

  }
  return function (result) {
    return execAll(result, funcLength)
  }
}

/* 以下为测试代码 */
const addOne = (a) => a + 1
const multiTwo = (a) => a * 2
const divThree = (a) => a / 3
const toString = (a) => a + ''
const split = (a) => a.split('')

split(toString(addOne(multiTwo(divThree(666)))))
// => ["4", "4", "5"]

const testForCombo = combo(split, toString, addOne, multiTwo, divThree)
testForCombo(666)