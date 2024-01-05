{
    type Age<T> = T extends string ? string : unknown;
    let a: Age<string>;
    let b: Age<number>;
}
{
    type FirstItem<T> = T extends any[] ? T[0] : any;

    let age1: FirstItem<string[]>;
    let age2: FirstItem<number>;
}
{
    type Person<T> = T extends infer R ? R : unknown;
    type 새타입 = Person<string>; // 새타입은 string 타입입니다
}
// 1. infer 키워드는 조건문 안에서만 사용가능합니다.
// 2. infer 우측에 자유롭게 작명해주면 타입을 T에서 유추해서 R이라는 변수에 집어넣어라~ 라는 뜻입니다.
// 그래서 위의 예제에서 <string> 이렇게 타입파라미터자리에 string 집어넣으면 R은 string이 됩니다.
// 3. R을 조건식 안에서 맘대로 사용가능합니다.
// 이런 식으로 타입파라미터에서 타입을 추출해서 쓰고싶을 때 쓰는 키워드라고 보시면 됩니다.
{
    type 타입추출<T> = T extends (infer R)[] ? R : unknown;
    type a = 타입추출<string[]>;
}
{
    type 타입추출<T> = T extends () => infer R ? R : unknown;
    type a = 타입추출<() => void>;
    type b = ReturnType<() => void>;
}
