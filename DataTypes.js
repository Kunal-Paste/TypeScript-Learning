"use strict";
//Basic types:
Object.defineProperty(exports, "__esModule", { value: true });
//Primitive types (number,string,boolean);   // dont have [],{},()  // can copy them easily
//referance type:                            // have [],{},()      // can't copy them
//array
//tuples
//enums
//Any, Unknown, Void, Null, Undefined, Never
//Array:
let arr = [1, 2, 3, 4, 5];
//Tuple:  // in this we predefine the type.
let arr2 = [18, "Kunal"];
//Enums:
var userRoles;
(function (userRoles) {
  userRoles["ADMIN"] = "admin";
  userRoles["GUEST"] = "guest";
  userRoles["USER"] = "user";
})(userRoles || (userRoles = {}));
userRoles.ADMIN;
var statusCode;
(function (statusCode) {
  statusCode["ABONDEND"] = "status code for abondend is 501";
  statusCode["SERVER_ERROR"] = "status code for server error is 400";
})(statusCode || (statusCode = {}));
statusCode.SERVER_ERROR;
//# sourceMappingURL=DataTypes.js.map
