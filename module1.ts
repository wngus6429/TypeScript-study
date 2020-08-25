/** @format */

/// <reference path="./module2.ts"/>

console.log(UserModule.name);

import addr = UserModule.AddressModule;
console.log(addr.zip);
