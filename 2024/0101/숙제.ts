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

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x: string): number {
    let result = x.replace(/-/g, "");
    return Number(result);
}

type 컷제로 = (a: string) => string;
type 리무브대쉬 = (a: string) => number;
type OrganizeData = (
    x: string,
    cutZero: 컷제로,
    removeDash: 리무브대쉬
) => void;
let 만들함수: OrganizeData = function (
    x: string,
    cutZero: 컷제로,
    removeDash: 리무브대쉬
) {
    let firstResult = cutZero(x);
    let secondResult = removeDash(firstResult);
    console.log(secondResult);
};
