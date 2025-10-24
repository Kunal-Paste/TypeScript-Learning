// generic function :

// function jinko ke arguments me ham kuch bhi pass kar sakte haib like we can pass any type without defining.

function log<T>(arg:T){
   console.log(arg);
}

log("Hey");
log(7);
log(true);

// generic interface :

interface Halwua<T> {
    name:string,
    age:number,
    key:T
}

function abcd(obj:Halwua<string>){
}

abcd({name:"Kunal",age:28,key:"dkdkdk"});


//generic class :

class Bottlemaker <T>{
     constructor(public key:T){}
}

let b1 = new Bottlemaker("b");
let b2 = new Bottlemaker(2);

//file or function ko import , export karne ko modules khete hai.
  // export & import modules.
  // export default : only one file will be export