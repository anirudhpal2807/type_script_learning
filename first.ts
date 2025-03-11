const num:number=20;
interface person{
    name:string,
    age:number,
    salary:number,
    id:number,
    gender:string,
    adhaar?:number
    //?question mark lagane se optional ho jata h

}
const obj:person={
    name:"anirudh",
    age:21,
    salary:2000000,
    id:31,
    gender:"male"
}


//new example
interface customer{
    name:string,
    age:number,
    gender:string,
    balance:number
}
 const obj2:Partial<customer>={
    name:"Anirudh",
    age:21,
    gender:"male",
    
 }

 interface peaple{
    name:string,
    age:number
 }
 const obj3:peaple[]=[
    {name:"anirudh",age:21},{name:"pandit",age:31}]
 

    //function in ts
    function greet(a:number):number{
        console.log(a);
        return a+5;
    }
  console.log(greet(20));

  function meet(msg:string,val:number):void{
    console.log(msg,val);
  };
  meet("hello ani",10);

  function jeet(msg:string="ram"){
    console.log(msg);
  }
  jeet("shyam");

    //optional parameter
     function gate(person?:string){
        console.log(person||"anirudh");
     }
     gate();
     gate("rammanohar");
     

     //array function
     const sum=(a:number,b:number):number=>{
        return a+b;
     }
     console.log(sum(10,20));


     //callback function




     //rest parameter

     function total(...arr:number[]){
        let ans=0;
        arr.forEach((val)=>ans=ans+val);
        console.log(ans);
     }
     total(1,2,3,4,5,6,7,7);


     interface human{
      name:string,
      age:number
     };

     interface teacher extends human{
      salary:number,
      id:string
     }
     const obj8:teacher={
      name:"Anirudh",
      age:31,
      salary:53000,
      id:"first"
     }
     console.log(obj8);