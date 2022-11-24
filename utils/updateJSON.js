const fs = require('fs')
const path = require('path')
const openCC = require('opencc-js')
const converter = openCC.Converter({ from: 'hk', to: 'cn', })
fs.readFile(
  path.join(__dirname, 'src/locales/common/zh-cn.json'),
  'utf8',
  (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    let newObj = null
    const deepSearch = (item) => {
      if (typeof item !== 'object') {
        // console.log(item, 'item')
        return converter(String(item) || '')
      } else {
        const obj = {}
        Object.keys(item).forEach((key) => {
          console.log(key)
          obj[key] = deepSearch(item[key])
        })
        return obj
      }
    }
    // console.log(newObj)
    newObj = deepSearch(JSON.parse(data))
    console.log(newObj)
    fs.writeFile(path.join(__dirname, 'src/locales/common/zh-cn.json'), JSON.stringify(newObj), 'utf8', (err) => {
      console.log('写入成功', err)
    })
  }
)