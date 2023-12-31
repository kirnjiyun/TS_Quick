function 함수(x) {
    return 2 * x;
}
함수(35);
함수("6");
function 함수2(x) {
    1 + 1;
}
function name(params) { }
name();
function name2(params) { }
name2();
function sayHi(x) {
    if (x) {
        console.log("안녕하세요 " + x);
    }
    else {
        console.log("이름이없는뎁쇼");
    }
}
function 자릿수세기(x) {
    return x.toString().length;
}
function 결혼가능확률(월소득, 집보유여부, 매력점수) {
    var 점수 = 월소득 * 1 + (집보유여부 ? 500 : 0);
    if (매력점수 === "상") {
        점수 += 100;
    }
    if (점수 >= 600) {
        return "결혼가능";
    }
}
