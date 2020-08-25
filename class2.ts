/** @format */

class User {
  constructor(private _name: string) {}

  public sayHi(): void {
    console.log("hi I am " + this._name);
  }
  get name() {
    return this._name;
  }
  set name(newValue: string) {
    this._name = newValue;
  }
}

var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();
