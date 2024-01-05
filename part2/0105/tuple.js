var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    var puppy = [true, "dog", "dog2"];
    //순서까지 타입지정하고싶다. 튜플타입 만들기
    var meow = ["cat", false];
    var jiyunee = ["human", true];
    {
        //rest는 []에 파라미터 전부 담겨옴
        function 함수() {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            console.log(x);
        }
        함수(111, "string");
        function 함수2(a, b) {
            console.log([a, b]);
        }
        함수2(84, "string");
    }
}
var arr = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr, true);
console.log(arr2);
