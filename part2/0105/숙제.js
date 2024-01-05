{
    var arr_1 = ["동서녹차", 4000, true, false, true, true, false, true];
}
{
    function 함수() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    함수("ㅁ", true, 4, 1, 34, 2, "2123");
}
{
    function 함수() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var result = [[], []];
        rest.forEach(function (a) {
            typeof a === "string" ? result[0].push(a) : result[1].push(a);
        });
        return result;
    }
    함수("b", 5, 6, 8, "a");
}
