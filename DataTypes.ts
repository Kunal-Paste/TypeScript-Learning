//Basic types:

//Primitive types (number,string,boolean);   // dont have [],{},()  // can copy them easily

//referance type:                            // have [],{},()      // can't copy them
//array
//tuples
//enums
//Any, Unknown, Void, Null, Undefined, Never


//Array:

let arr = [1,2,3,4,5,];

//Tuple:  // in this we predefine the type.

let arr2 : [number,string] = [18,"Kunal"];

//Enums:

enum userRoles{
    ADMIN = "admin",
    GUEST = "guest",
    USER = "user"
}

userRoles.ADMIN;

enum statusCode{
    ABONDEND = "status code for abondend is 501",
    SERVER_ERROR = "status code for server error is 400"
}

statusCode.SERVER_ERROR;


// type inference : here we predefine the type before giving a value.

let d:number | boolean

// type annotation: predefining the type of variables that are in the parameter of a function also we define the type of function.

function abcd(a:number, b:boolean):void {

}