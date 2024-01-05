{
    type Bus = {
        color: string;
        model: boolean;
        price: number;
    };

    type TypeChanger<MyType> = {
        [key in keyof MyType]: string | number;
    };
    type NewBus = TypeChanger<Bus>;
    const newBusInstance: NewBus = {
        color: "red",
        model: "gogogo",
        price: 10000,
    };
    console.log(newBusInstance);
}
{
    type Bus = {
        color: string;
        model: boolean;
        price: number;
    };

    type TypeChanger<MyType, T> = {
        [key in keyof MyType]: T;
    };

    type NewBus = TypeChanger<Bus, boolean>;
    type NewBus2 = TypeChanger<Bus, string[]>;
}
