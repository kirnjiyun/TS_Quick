{
    interface Person {
        age: number;
        name: string;
    }
    type PersonKeys = keyof Person; //"age" | "name" 타입됩니다
    let a: PersonKeys = "age"; //가능
    // let b: PersonKeys = "ageeee"; //불가능
}
{
    type Car = {
        color: boolean;
        model: boolean;
        price: boolean | number;
    };

    type TypeChanger<MyType> = {
        [key in keyof MyType]: string;
    };

    type 새로운타입 = TypeChanger<Car>;

    let obj: 새로운타입 = {
        color: "red",
        model: "kia",
        price: "300",
    };
    //[ 자유작명 in keyof 타입파라미터 ] : 원하는 타입
    //     in 키워드는 왼쪽이 오른쪽에 들어있냐라는 뜻이고
    // keyof는 오브젝트 타입에서 key값만 union type으로 뽑아주는 역할이라 머리쓰면 이해는 될듯요
}
