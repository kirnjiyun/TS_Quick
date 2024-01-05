{
    type Car = {
        [key: string]: number | string;
    };
    let obj = {
        model: "k5",
        brand: "kia",
        price: 6000,
        year: 2030,
        date: "6월",
        percent: "5%",
        dealer: "김차장",
    };
}
{
    interface MyType {
        "font-size": number;
        [key: string]: number | MyType;
    }

    let obj = {
        "font-size": 10,
        secondary: {
            "font-size": 12,
            third: {
                "font-size": 14,
            },
        },
    };
}
