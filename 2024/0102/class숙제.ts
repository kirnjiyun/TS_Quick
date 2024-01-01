{
    class Car {
        model: string;
        price: number;
        constructor(a: string, b: number) {
            this.model = a;
            this.price = b;
        }
        tax = (): number => {
            return this.price / 10;
        };
    }

    let car1 = new Car("비틀", 8930);
    console.log(car1);
}

{
    class Word {
        num: number[];
        str: string[];

        constructor(...x: (number | string)[]) {
            this.num = [];
            this.str = [];

            x.forEach((i) => {
                if (typeof i === "string") {
                    this.str.push(i);
                } else {
                    this.num.push(i);
                }
            });
        }
    }

    let object = new Word("qery", 232, "vbjkas");
    console.log(object.num);
    console.log(object.str);
}
