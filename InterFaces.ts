// Interfaces and Type Aliases
// defining interfaces
// using interfaces to define object shapes
// extending interfaces 
// type aliases
// intersection types

interface User {
    name:string,
    email:string,
    password:string
    gender?:string  // optional we can take if we want
}

// we can say its a face of object

function getUserData(obj:User){
 
}

getUserData({name:"Kunal",email:"paste7@gmail.com",password:"123"});


// extending the interfaces

interface parent{
    name:string,
    email:string,
    gender:string
}

interface child extends parent{   // it will have all the properties of parent like name,email and gender
    isChild: boolean
}

//note : two interfaces of same name gets merge , they do not override each other.

function family(obj:child) {

}


//type aliases

type myCustomType = string | number | null

function xyz(a:myCustomType) {

}


// intersection types

type A = {
    name:string,
    email:string
}

type B = A & {
    getData(user:string): void
}

function abc(a:B){
   // now a will have both the properties of A and B .
}

// Type aliases does not get merge like interfaces
// the work of interface is to shape the object


