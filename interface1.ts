/** @format */

//타입스크립트 에서는 構造的部分型 를 사용하고 있다.
//밑에 result에 c를 string가지고 있다 해도 Result형태로 간주
interface Result {
  a: number;
  b: number;
}

function getTotal(result: Result) {
  return result.a + result.b;
}

var result = {
  a: 32,
  b: 58,
  c: "hello",
};

console.log(getTotal(result));
