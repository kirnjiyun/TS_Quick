function 함수(x: number): number {
    return 2 * x;
}
함수(35);
함수("6");
function 함수2(x: number): void {
    1 + 1;
}
function name(params?: number): void {}
name();
function name2(params: number | undefined): void {}
name2();

function sayHi(x?: string): void {
    if (x) {
        console.log("안녕하세요 " + x);
    } else {
        console.log("이름이없는뎁쇼");
    }
}
function 자릿수세기(x: number | string): number {
    return x.toString().length;
}
function 결혼가능확률(월소득: number, 집보유여부: boolean, 매력점수: string) {
    let 점수 = 월소득 * 1 + (집보유여부 ? 500 : 0);

    if (매력점수 === "상") {
        점수 += 100;
    }

    if (점수 >= 600) {
        return "결혼가능";
    }
}
