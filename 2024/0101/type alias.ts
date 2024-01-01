type Animal = string | number | undefined;
let animal: Animal = "나무늘보";

type AnimalInfo = { name: string; age: number };
let 판다: AnimalInfo = { name: "루이바오", age: 0 };
console.log("판다");

const 출생지 = { region: "seoul" };
출생지.region = "busan";

const 애인 = {
    name: "지유니",
};
애인.name = "지유니아님";

// 변경하는걸 막고싶으면;

type GF = {
    readonly name: string;
};
const 여친: GF = {
    name: "지유니",
};
여친.name = "울랄라";

type Girlfriend = {
    name?: string;
};

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type NewPosition = PositionX & PositionY;

let position: NewPosition = { x: 10, y: 20 };

//같은 이름의 타입 변수 재정의 불가능

type NewType = { color?: string; size: Number; readonly position: number[] };
let 히히: NewType = { size: 123, position: [4, 2, 234, 34] };
히히.color = "green";
히히.position = [2, 5, 654, 456, 124];

type SignupInfo = { name: string; phone: number; email: string };
let 가입하자: SignupInfo = {
    name: "지윤이이이이이",
    phone: 34894897347893,
    email: "234534534ㅗㅕㅑㅑㅁㅇ로ㅓ",
};

type Adult = { name: string; phone?: number; email?: string; minor: boolean };
let 고딩: Adult = { name: "고3", minor: false };
