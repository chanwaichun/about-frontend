// function bind(context)
// {

// }
Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  const symbolKey = Symbol();
  context[symbolKey] = this;
  const res = context[symbolKey](...args);
  delete context[symbolKey];
  return res;
};

let o = {
  a: 1,
};

function test() {
  console.log(this.a);
}
test.myCall(o);
