/** @format */
var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    MyData.prototype.getsArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
var v4 = new MyData({ a: 32, b: 16, c: "hello" });
console.log(v4.getsArray());
// var v1 = new MyData<string>("hello");
// console.log(v1.getsArray());
// var v2 = new MyData<number>(234);
// console.log(v2.getsArray());
// 위에 Result를 추가해서 20, 22줄이 Result의 제약이랑 안 맞아서 에러
//var v3 = new MyData<Result>({ a: 32, b: 16 });
//console.log(v3.getsArray());
