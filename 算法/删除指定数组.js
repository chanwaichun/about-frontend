let array = [2, 2, 3, 7, 9, 6, 54]
let target = 2

function filter(array,target) {
  let showIndex = 0
  for (let i = 0; i <= array.length - 1; i++) {
      if(array[i] != target)
      {
        array[showIndex++] = array[i]
      }
  }
  console.log(showIndex)
}
filter(array,target);
console.log(array.length)