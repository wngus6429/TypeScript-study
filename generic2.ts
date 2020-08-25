/** @format */

//Generic

//형태를 지정하는 곳이면 함수뿐만 아니라 인터페이스와 클래스
//에서도 사용 할 수 있으므로 유의해야함.

interface Result {
  a: number;
  b: number;
}
interface FinalResult {
  a: number;
  b: number;
  c: string;
}

class MyData<T extends Result> {
  constructor(public value: T) {}
  getsArray(): T[] {
    return [this.value, this.value, this.value];
  }
}

var v4 = new MyData<FinalResult>({ a: 32, b: 16, c: "hello" });
console.log(v4.getsArray());

// var v1 = new MyData<string>("hello");
// console.log(v1.getsArray());
// var v2 = new MyData<number>(234);
// console.log(v2.getsArray());
// 위에 Result를 추가해서 20, 22줄이 Result의 제약이랑 안 맞아서 에러
//var v3 = new MyData<Result>({ a: 32, b: 16 });
//console.log(v3.getsArray());
