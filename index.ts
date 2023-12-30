type Name = string | number;

let 이름: Name = "kim";

function 함수(x: number): number {
    return x * 2;
}
함수(123);

type Member = [number, boolean];
let john: Member = [123, true];
// let jessica: Member = ["123", false];

type MyObject = {
    [key: string]: number;
};
let 철수: MyObject = {
    age: 50,
    weight: 100,
};
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
