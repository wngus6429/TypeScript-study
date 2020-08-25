/** @format */
function Total(ressult) {
    if (ressult.final) {
        return ressult.a + ressult.b + ressult.final;
    }
    else {
        return ressult.a + ressult.b;
    }
}
var ressult = {
    a: 32,
    b: 58
};
console.log(Total(ressult));
//인터페이스의 속성은 함수의 인수와 마찬가지로 옵션이 될수 있음.
//이 경우 속성 이름에 ? 를 붙여준다.
