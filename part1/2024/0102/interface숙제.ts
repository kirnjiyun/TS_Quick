{
    {
        let 상품 = {
            brand: "Samsung",
            serialNumber: 1360,
            model: ["TV", "phone"],
        };
    }
    {
        interface Product {
            brand: string;
            serialNumber: number;
            model: string[];
        }

        let 상품: Product = {
            brand: "Samsung",
            serialNumber: 1360,
            model: ["TV", "phone"],
        };
    }
}
{
    interface Cart {
        product: string;
        price: number;
    }

    let 장바구니: Cart[] = [
        { product: "청소기", price: 7000 },
        { product: "삼다수", price: 800 },
    ];
}
{
    interface Cart {
        product: string;
        price: number;
    }

    interface NewCart extends Cart {
        card: boolean;
    }
}
{
    interface MathObj {
        plus: (a: number, b: number) => number;
        minus: (a: number, b: number) => number;
    }

    let 오브젝트: MathObj = {
        plus(a, b) {
            return a + b;
        },
        minus(a, b) {
            return a - b;
        },
    };
}
