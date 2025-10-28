// type assertion : 

let a : any = 12;

(a as string)
// (<number>a)  also like this.


// and this is type casting 

let b = Number("12");

console.log(b);

let c = "d";
console.log('make it end');

// changed my user.email it was causing a problem 

function changEmail(email:string){
    email="paste@gmail.com"
}
