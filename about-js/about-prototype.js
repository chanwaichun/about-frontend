function Parent(name, age) {
  // this.name = name;
  this.age = age;
  console.log(this)
}
Parent.prototype.getName = function () {
  console.log(this.name);
};
Parent.prototype.name = '2222'
const Ababa = new Parent("Ababa", "22");
console.log(Ababa.name);
console.log(Ababa.age);
Ababa.getName()
console.log(Parent.prototype)
console.log(Parent("Ababa", "22"))