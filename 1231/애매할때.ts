let 회원: (number | string)[] = [1, "22", 3];
let 오브젝트: { a: string | number } = { a: "123" };

let 저녁: any;
//타입 shield해제
저녁 = 123;
저녁 = true;
저녁 = "chicken";

let 모야이건: unknown;
모야이건 = 123;
모야이건 = {};

// let 다른변수: string = 저녁;

모야이건 - 1;

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 유미: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
    score: number[] | boolean;
    teacher: string;
    friend: string | string[];
} = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
