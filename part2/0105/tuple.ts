{
    let puppy: (string | boolean)[] = [true, "dog", "dog2"];

    //순서까지 타입지정하고싶다. 튜플타입 만들기
    let meow: [string, boolean] = ["cat", false];

    let jiyunee: [string, boolean, number?] = ["human", true];
    {
        //rest는 []에 파라미터 전부 담겨옴
        function 함수(...x: [number, string]) {
            console.log(x);
        }

        함수(111, "string");

        function 함수2(a: number, b: string) {
            console.log([a, b]);
        }

        함수2(84, "string");
    }
}
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];
console.log(arr2);
