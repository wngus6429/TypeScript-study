/** @format */

//외부 모듈
//Node - CommonJs
//RequireJs - AMD

//외부모듈은 내부모듈과 달리 1파일 1모듈을 넣게됨

//import Users = require("./user_commonjs");
import Users = require("./user_amd");
console.log(Users.name);
