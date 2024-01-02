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
    function 함수() {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        console.log(a);
    }
    함수(134, 5345, true, "qweiowerui");
    var arr = [1, 2, 3];
    var arr2 = [5, 23];
    var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
    console.log(arr3);
    {
        var _a = ["안녕", "나는", "지유니야"], hi = _a[0], iam = _a[1], jiyun = _a[2];
        console.log(hi);
        console.log(iam);
        console.log(jiyun);
    }
}
{
    var _b = { 학생: true, 나이: 20 }, student = _b.학생, age_1 = _b.나이;
    var object = { student: true, age: 20 };
    function 함수(_a) {
        var student = _a.student, age = _a.age;
        console.log(student, age);
    }
    함수({ student: true, age: 20 });
}
