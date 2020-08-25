/** @format */
//TypeScript는 인수와 반환 값이 다른 동일한 이름의 함수를 선언 할 수 있습니다.
//function add(a: number, b: number): number;
// 이러한 引数と返り値は シグネチャと呼びます。
//function add(a: string, b: string): string;
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}
//console.log(add(5, 3));
console.log(add("hello", 3));
