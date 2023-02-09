const obj = {
  store: ["foo", "bar", "baz"],
  [Symbol.iterator]: function () {
    let index = 0;
    let self = this;
    return {
      next: function () {
        const result = {
          value: self.store[index],
          done: index >= self.store.length,
        };
        index++;
        return result;
      },
    };
  },
};
for (const item of obj) {
  console.log(item);
}
