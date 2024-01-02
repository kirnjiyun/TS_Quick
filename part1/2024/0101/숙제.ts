type Members = {
    name: string;
    age?: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};

let 회원정보야: Members = {
    name: "gong",
    plusOne(a) {
        return a + 1;
    },
    changeName: () => {
        console.log("안녕");
    },
};

회원정보야.plusOne(1);

// type CutType = (x: string) => string;

// let cutZero: CutType = function (x) {
//     let result = x.replace(/^0+/, "");
//     return result;
// };
// function removeDash(x: string): number {
//     let result = x.replace(/-/g, "");
//     return Number(result);
// }

// type 컷제로 = (a: string) => string;
// type 리무브대쉬 = (a: string) => number;
// type OrganizeData = (
//     x: string,
//     cutZero: 컷제로,
//     removeDash: 리무브대쉬
// ) => void;
// let 만들함수: OrganizeData = function (x, cutZero, removeDash) {
//     let firstResult = cutZero(x);
//     let secondResult = removeDash(firstResult);
//     console.log(secondResult);
// };

// 이건 모범답안인데요

type CutType = (x: string) => string;
type 컷제로 = (a: string) => string;
type 리무브대쉬 = (a: string) => number;

const cutZero: CutType = (x) => {
    let result = x.replace(/^0+/, "");
    return result;
};

const removeDash: 리무브대쉬 = (x) => {
    let result = x.replace(/-/g, "");
    return Number(result);
};

type OrganizeData = (
    x: string,
    cutZero: 컷제로,
    removeDash: 리무브대쉬
) => void;

const 만들함수: OrganizeData = (x, cutZero, removeDash) => {
    let firstResult = cutZero(x);
    let secondResult = removeDash(firstResult);
    console.log(secondResult);
};
