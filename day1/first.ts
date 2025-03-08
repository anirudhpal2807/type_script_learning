let num:number=10;
let b:string="ram";
let c:number=100;
c=200;
c="rohit";
let val:unknown;
val=100;
val="syam";
//non primitive
let arr:number[]=[2,3,4,5,5,6];
let arr2=[3,4,5,2,4];
let arr3:(string|number)[]=["rohit","pal",30,50];
arr3.push(19);
let arr4:(number|string|boolean)[]=["pal",false,20];
//tuple is fixed type array
let tuple:[string,number,boolean]=["pal",13,false];

//object
//inline
let obj1:{name:string,age:number,gender:string}={
    name:"anirudh",
    age:21,
    gender:"male"

}
 
let person:{name:string,age:number,balance:number}
person={
    name:"anirudh",
    age:21,
    balance:200000000

};
type customer={
    name:string,
    age:number,
    id:number
}
let c1:customer={
    name:"anirudh",
    age:21,
    id:1
}

interface admin{
    name:string,
    age:number,
    balance:number
}
let obj3: admin={
    name:"rohit",
    age:31,
    balance:30000000
}


//interface vs type
//classes
//function
