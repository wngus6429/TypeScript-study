/** @format */
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

class User {
  constructor(public name: string) {}

  public sayHi(): void {
    console.log("hi I am " + this.name);
  }
}

var tom = new User("Tom");
console.log(tom.name);
tom.sayHi();

//이러한 변수나 메소드에는 접근 제어자(수식자)를 붙이는게 가능함. 디폴트 public
//アクセス修飾子をつけることができます。
//public, private, protected
