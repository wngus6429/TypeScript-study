/** @format */

function add(a: number, b: number): number {
  return a + b;
} //  여기에 뭘 넣을지 모르겟으면 void
console.log(add(5, 3));

//console.log(add(5, 3));
// function add(a: number, b?: number): number {
//   if (b) {
//     return a + b;
//   } else {
//     return a + a;
//   }
// }

// function add(a: number, b: number = 10): number {
//   return a + b; // b에 아무것도 안들어오면 10 초기치
// }
// console.log(add(5)); // 5나옴
