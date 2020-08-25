/** @format */
var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
    }
    User.prototype.sayHi = function () {
        console.log("hi I am " + this._name);
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();
