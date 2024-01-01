function 내함수(x: number | string) {
    return x + 1;
}

내함수(123);

function 내함수1(x: number | string) {
    if (typeof x === "string") {
        return x + 1;
    } else {
        return x + 1;
    }
}

function myfunc(x: number | string) {
    let array: number[] = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    // else {
    // } 끝까지 써야 안전하다!!!!!
}

myfunc(123);
