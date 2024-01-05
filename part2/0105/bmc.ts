{
    type 타입추출<T> = T extends (infer R)[] ? R : unknown;

    type a = 타입추출<string[]>;
}
{
    type 타입추출<T> = T extends (infer R)[] ? R[] : unknown;

    type a = 타입추출<{ color: string }>;
}
{
    type 타입추출<T> = T extends (infer R)[] ? R[] : unknown;

    type Car = {
        color: boolean;
        model: boolean;
        price: boolean | number;
    };

    type a = 타입추출<Car>;
}

{
    type 타입추출<T> = T extends (infer R)[] ? R : unknown;

    type Car = {
        color: boolean;
        model: boolean;
        price: boolean | number;
    };

    type a = 타입추출<Car[]>;
}
{
    type Car = {
        color: boolean;
        model: boolean;
        price: boolean | number;
    };

    type keyOfCar = keyof Car;
    const keyCar: keyOfCar = "color";
}
{
    interface Person {
        age: number;
        name: string;
    }

    type TypeChanger<MyType> = {
        [key in keyof MyType]: string;
    };

    type 새로운타입1 = TypeChanger<Car>;
    type 새로운타입2 = TypeChanger<Person>;
    type 새로운타입3 = TypeChanger<string>;
}
