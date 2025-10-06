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

function family(obj:child) {
    
}


