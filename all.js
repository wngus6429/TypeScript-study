/** @format */
var UserModule;
(function (UserModule) {
    UserModule.name = "taguchi";
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "111-1111";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
/** @format */
/// <reference path="./module2.ts"/>
console.log(UserModule.name);
var addr = UserModule.AddressModule;
console.log(addr.zip);
