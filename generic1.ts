/** @format */

//제네릭은 추상화된 데이터 형이라는 것임.

// function getStringArray(value: string): string[] {
//   return [value, value, value];
// }

// function getNumberArray(value: number): number[] {
//   return [value, value, value];
// }

//관습적으로 타입의 T를 씀
function getArray<T>(value: T): T[] {
  return [value, value, value];
}
//<T>를 붙임으로 인해 실행시에 어떤 형태에 의해 처리를 행할지 지정할 수 있다.

console.log(getArray<number>(3));

console.log(getArray<string>("hello"));
