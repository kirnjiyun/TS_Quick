function 함수(a: "hello"): 1 | 0 {
    return 1;
}
함수("hello");

function 가위바위보(
    params: "가위" | "바위" | "보"
): ("가위" | "바위" | "보")[] {
    return ["보"];
}

let 난데요: "대학생" | "프로맛집탐방러";
난데요 = "대학생";

//literal type은 const 변수와 유사하게 사용가능

//literal type의 문제점
var 자료 = { name: "kim" };
자료.name;
function 내함수우(a: "kim") {}
내함수우(자료.name);
//타입이 kim이라는 말이다. kim이라는 자료가 아니고~~
//이런걸 해결하고 싶으면

//1. object 만들 때 타입을 잘 미리 정하든가
//2. 예전에 배웠던 assertion을 쓰시든가 (as 'kim' 이런걸 붙이는 겁니다)
//3. 아니면 as const 라는걸 애초에 object 자료에 붙일 수 있습니다.
