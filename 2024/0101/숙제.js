var 회원정보야 = {
    name: "gong",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보야.plusOne(1);
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return Number(result);
}
var 만들함수 = function (x, cutZero, removeDash) {
    var firstResult = cutZero(x);
    var secondResult = removeDash(firstResult);
    console.log(secondResult);
};
