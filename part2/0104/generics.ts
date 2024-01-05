{
    function 함수(x: unknown[]) {
        return x[0];
    }
    let a = 함수([5, 4, 7, 2]);
    console.log(a + 1);
}
//이거 안된다.
{
    function 함수<MyType>(x: MyType[]): MyType {
        return x[0];
    }
    let a = 함수<number>([4, 123, 56]);
    let b = 함수<string>(["756", "123"]);
    console.log(a);
}
//generic 장점: 매번 다른 타입 출력 가능
{
    function 빼기일<MyType extends>(x: MyType) {
        // return x - 1;
    }
    let a = 빼기일<number>(101);
}
