const deepGet = (obj, prop) => {
  // TODO: 在此处完善代码
  const newObj = JSON.parse(JSON.stringify(obj));
  const propArr = prop.split('.');
  const reg = /\[(\d)\]/
  return propArr.reduce((prev, current) => {
    if (prev) {
      if (reg.test(current)) {
        const currentKey = current.split('[')[0]
        const [currentIndexStr] = current.match(reg);
        const arrIndex = currentIndexStr[1]
        return prev[currentKey][arrIndex]
      }
      return prev[current]
    }
    return undefined

  }, newObj)
}

/** 以下为测试代码 */
deepGet({
  school: {
    student: {
      name: 'Tomy'
    },
  },
}, 'school.student.name') // => 'Tomy'

deepGet({
  school: {
    students: [{
        name: 'Tomy'
      },
      {
        name: 'Lucy'
      },
    ],
  }
}, 'school.students[1].name') // => 'Lucy'

// 对于不存在的属性，返回 undefined
deepGet({
  user: {
    name: 'Tomy'
  }
}, 'user.age') // => undefined
deepGet({
  user: {
    name: 'Tomy'
  }
}, 'school.user.age') // => undefined
console.log(deepGet({
  user: {
    name: 'Tomy'
  }
}, 'user.age'))
console.log(deepGet({
  school: {
    students: [{
        name: 'Tomy'
      },
      {
        name: 'Lucy'
      },
    ],
  }
}, 'school.students[1].name') )