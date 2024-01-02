interface Square {
    color: string;
    width: number;
}

let 네모: Square = { color: "red", width: 100 };
interface Student {
    name: string;
}
interface Teacher {
    name: string;
    age: number;
}
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
{
    interface Animal {
        name: string;
    }
    interface Cat extends Animal {
        legs: number;
    }
}
{
    type Animal = {
        name: string;
    };
    type Cat = Animal & { legs: number };
}
{
    interface Student {
        name: string;
    }
    interface Teacher {
        age: number;
    }

    let 변수: Student & Teacher = { name: "kim", age: 90 };
}

interface Student {
    name: string;
}
interface Student {
    score: number;
}
//interface 유연하다 중복선언가능!
{
    interface Animal {
        name: string;
    }
    interface Dog {
        name: number;
    }

    // let 변수: Dog & Animal = { name: "멍멍" };
}
