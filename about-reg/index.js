// let reg = /\d{1,2}/g
// let reg = /^([\?|\&])([\d\D]+)\=([\d\D]+)$/g
let reg = /(\w+)(=)(\w+)/ig
const str = '?rsv_spt=1&rsv_spt=1&rsv_iqid=0xcde3fe99000f1dae&issp=1&f=8&rsv_bp=1&rsv_idx=2' 

// RegExp() 类型
// const result = reg.test('ddddd');
// const result = reg.exec('d12333ddd');

// String() 类型
const result = str.match(reg);
// const result = str
console.log(result)
