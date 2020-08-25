/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//클래스의 상속과 protected 에 대해 알아보자 (継承)
var Game = /** @class */ (function () {
    function Game(_name) {
        this._name = _name;
    }
    Game.prototype.sayHi = function () {
        console.log("hi I am " + this._name);
    };
    return Game;
}());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(_name, _age) {
        var _this = 
        //생성자
        _super.call(this, _name) || this;
        _this._age = _age;
        return _this;
    }
    AdminUser.prototype.sayHi = function () {
        console.log("My age:" + this._age);
        console.log("My name:" + this._name);
        _super.prototype.sayHi.call(this);
    };
    return AdminUser;
}(Game));
var bob = new AdminUser("Bob", 23);
bob.sayHi();
//protected 이것은 자신의 클래스 및 상속하는 클래스 내에서만 사용가능
