class person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    great():void{
        console.log(`hi ${this.name}`);
    }
}

const obj1= new person("anirud",21);
const obj9= new person("Ram",222);
console.log(obj1);
console.log(obj9);
console.log(obj1.name);
console.log(obj1.great());


//private public protected
class customer{
    public name:string;
   private age:number;
  protected balance:number;

    constructor(name:string,age:number,balance:number){
        this.name=name;
        this.age=age;
        this.balance=balance;
    }
}
const p1=new customer("anirudh",21,2000000);
console.log(p1);

class employee extends customer{
    salary:number;
    constructor(salary:number,age:number,name:string,balance:number){
        super(name,age,balance)
        this.salary=salary;
    }
}

const p2=new employee(200000,31,"anirudh",20099999900);


//generic: templete
function value<T>(a:T):T{
    return a;
}

console.log(value<number>(10));
console.log(value<string>("anirudh"));
console.log(value([10,20,30,40]));