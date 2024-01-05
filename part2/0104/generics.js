{
    function 함수(x) {
        return x[0];
    }
    var a = 함수([5, 4, 7, 2]);
    console.log(a + 1);
}
//이거 안된다.
{
    function 함수(x) {
        return x[0];
    }
    var a = 함수([4, 123, 56]);
    var b = 함수(["756", "123"]);
    console.log(a);
}
//generic 장점: 매번 다른 타입 출력 가능
{
    function 빼기일(x) {
        // return x - 1;
    }
    var a = 빼기일(101);
}
