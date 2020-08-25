/** @format */

//클래스의 상속과 protected 에 대해 알아보자 (継承)
class Game {
  constructor(protected _name: string) {}
  public sayHi(): void {
    console.log("hi I am " + this._name);
  }
}

class AdminUser extends Game {
  private _age: number;
  constructor(_name: string, _age: number) {
    //생성자
    super(_name); //부모클래스의 설정을 사용
    this._age = _age;
  }
  public sayHi(): void {
    console.log("My age:" + this._age);
    console.log("My name:" + this._name);
    super.sayHi();
  }
}
var bob = new AdminUser("Bob", 23);
bob.sayHi();

//protected 이것은 자신의 클래스 및 상속하는 클래스 내에서만 사용가능
