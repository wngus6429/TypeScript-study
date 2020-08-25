/** @format */
//변수라던지 메소드를 구성하는 것을 해당 클래스의 멤버라고 부름
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.count++;
    }
    User.prototype.sayHi = function () {
        console.log("hi I am" + this.name);
    };
    User.showDescription = function () {
        console.log("this class is about users");
    };
    User.count = 0;
    return User;
}());
var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count);
User.showDescription();
//클래스 자체에 만들어진 멤버를 정적 멤버라고 한다.
