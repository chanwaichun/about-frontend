function* foo() {
  console.log("start");
  try {
    const res = yield "start";
    const res2 = yield "start2";
    const res3 = yield new Promise((resolve) => {
      resolve(2222222222);
    });
    console.log(res3)
  } catch (e) {
    console.log(e);
  }
}
function loop(generator) {
  const fn = generator();
  function handleResult(next) {
    if (next.done) return;
    if (next.value instanceof Promise) {
      next.value.then(
        (data) => {
          console.log(data)
          handleResult(fn.next(data));
        },
        (error) => {
          fn.throw(error);
        }
      );
    } else {
      const result = fn.next();
      console.log(result);
      handleResult(result);
    }
  }
  handleResult(fn);
}
// const generator = foo();
loop(foo);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
