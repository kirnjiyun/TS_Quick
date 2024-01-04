// {
//     type Dog = string;
//     interface Dog {
//         name: string;
//     }

//     let dog1: Dog = "bark";
//     let dog2: Dog = { name: "paw" };
// }
namespace GoodDog {
    export type Dog = string;
}
namespace BadDog {
    export interface Dog {
        name: string;
    }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };
