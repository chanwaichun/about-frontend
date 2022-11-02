class People {
  constructor(name) {
    this.name = name;
    this.eventQueue = [];
  }

  // TODO: 请在此处完善代码
  emits(taskName, ...args) {
    this.eventQueue.forEach((item) => item.name === taskName && item.funcKey === item.func.toString() && item.func && item.func(...args));
  }
  on(taskName, func) {
    this.eventQueue.push({ name: taskName, func, funcKey: func.toString()});
  }
  off(taskName) {
    const currentIndex = this.eventQueue.findIndex(
      (item) => item.name === taskName && item.funcKey === item.func.toString()
    );
    this.eventQueue.splice(currentIndex, 1);
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
}
const say1 = (greeting) => {
  console.log(`${greeting}, nice meeting you.`);
};

const say2 = (greeting) => {
  console.log(`${greeting}, nice meeting you, too.`);
};

const jerry = new People("Jerry");
jerry.sayHi();
jerry.on("greeting", say1);
jerry.on("greeting", say2);
jerry.emits("greeting", "hi");
jerry.off("greeting", say2);
jerry.emits("greeting", "hi");
