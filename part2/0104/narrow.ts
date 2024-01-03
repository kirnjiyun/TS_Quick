function 함수(a: string | undefined) {
    if (a && typeof a === "string") {
    }
}
// a 가 undefined면 if문 실행 안 된다.
// a 가 string이면 if문 실행 된다.

type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
    // animal.swim 안된다.
    if ("swim" in animal) {
        animal.swim;
    }
}
function printAll(strs: string | undefined) {
    if (strs && typeof strs === "string") {
        console.log(st);
    }
}
type Car = { wheel: "4개"; color: string };
type Bike = { wheel: "2개"; color: string };

function 함수(x: Car | Bike) {
    if (x.wheel === "4개") {
        console.log("x는 Car타입이에요");
    }
}
