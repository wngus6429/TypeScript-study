/** @format */
var Users = /** @class */ (function () {
    function Users(name) {
        this.score = 0;
    }
    Users.prototype.sayHi = function () {
        console.log("hi I am " + this.name);
    };
    Users.prototype.showScore = function () {
        console.log("score " + this.score);
    };
    return Users;
}());
