"use strict";
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    great() {
        console.log(`hi ${this.name}`);
    }
}
const obj1 = new person("anirud", 21);
const obj9 = new person("Ram", 222);
console.log(obj1);
console.log(obj9);
console.log(obj1.name);
console.log(obj1.great());
//private public protected
class customer {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
}
const p1 = new customer("anirudh", 21, 2000000);
console.log(p1);
class employee extends customer {
    constructor(salary, age, name, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
}
const p2 = new employee(200000, 31, "anirudh", 20099999900);
//generic: templete
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("anirudh"));
console.log(value([10, 20, 30, 40]));
