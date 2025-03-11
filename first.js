"use strict";
const num = 20;
const obj = {
    name: "anirudh",
    age: 21,
    salary: 2000000,
    id: 31,
    gender: "male"
};
const obj2 = {
    name: "Anirudh",
    age: 21,
    gender: "male",
};
const obj3 = [
    { name: "anirudh", age: 21 }, { name: "pandit", age: 31 }
];
//function in ts
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(20));
function meet(msg, val) {
    console.log(msg, val);
}
;
meet("hello ani", 10);
function jeet(msg = "ram") {
    console.log(msg);
}
jeet("shyam");
//optional parameter
function gate(person) {
    console.log(person || "anirudh");
}
gate();
gate("rammanohar");
//array function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 20));
//callback function
//rest parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(1, 2, 3, 4, 5, 6, 7, 7);
;
const obj8 = {
    name: "Anirudh",
    age: 31,
    salary: 53000,
    id: "first"
};
console.log(obj8);
