test();
function test() {
  console.log(2);
}

var test = function () {
  test();
  console.log(1);
};

function Parent(name, age) {
  // this.name = name;
  this.age = age;
  console.log(this);
  this.getName = function () {
    console.log("构造函数内");
  };
}
Parent.prototype.getName = function () {
  console.log(this.name);
};
// 直接给原型上面的name赋值
Parent.prototype.name = "hahahha";
const Ababa = new Parent("Ababa", "22");
// 若构造函数中没有name则将会到原型上面去找name的属性
console.log(Ababa.name);
// 若构造函数中有age则会使用构造函数的属性
console.log(Ababa.age);
console.log(Ababa);
console.log(Parent.prototype);
