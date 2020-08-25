/** @format */

//Interface -> Class
//인터페이스와 클래스를 결합하는 방법
//인터페이스는 클래스와 합치면 [ 인터페이스의 안의 프로퍼티를 반드시 클래스의
//쪽에서 실장해주세요] 라는 의미 이다.

interface GameUser {
  score: number;
  showScore(): void;
}

class Users implements GameUser {
  //implements 이거 쓰면 Users 클래스는 반드시 위에 score랑 showScore가 있어야함
  name: string;
  score: number = 0;
  constructor(name: string) {}

  sayHi(): void {
    console.log("hi I am " + this.name);
  }
  showScore(): void {
    console.log("score " + this.score);
  }
}

//클래스 계승과는 다르게 복수의 인터페이스의 실장을 약속 시키는것도 가능함
//이경우에는 implements 뒤에 interface를 복수로 , 로 구분해서 연결하면됨.
