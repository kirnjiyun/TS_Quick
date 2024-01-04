function 함수() { }
//void와 유사
// 조건 1) 절대 return을 하지 않아야하고
// 조건 2) 함수 실행이 끝나지 않아야합니다 (전문용어로 endpoint가 없어야합니다)
function 함수() {
    while (true) {
        console.log(123);
    }
}
function 함수() {
    throw new Error("에러메세지");
}
// 무언가를 return하고싶지 않을 경우 그냥 void 타입을 이용
// 배우는 이유는 가끔 코드 이상하게 짜다보면 자동으로 등장하기 때문
