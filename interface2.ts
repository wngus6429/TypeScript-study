/** @format */

//인터페이스도 계승이 가능하다.
interface SpringResult {
  a: number;
}

interface FallResult {
  b: number;
}

interface FinalResult extends SpringResult, FallResult {
  final?: number;
}

function Total(ressult: FinalResult) {
  if (ressult.final) {
    return ressult.a + ressult.b + ressult.final;
  } else {
    return ressult.a + ressult.b;
  }
}

var ressult = {
  a: 32,
  b: 58,
};

console.log(Total(ressult));

//인터페이스의 속성은 함수의 인수와 마찬가지로 옵션이 될수 있음.
//이 경우 속성 이름에 ? 를 붙여준다.
