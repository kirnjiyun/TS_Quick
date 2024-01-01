{
    class Person {
        name: string;
        constructor() {
            this.name = "jiyunee";
        }
    }
    let 사람1 = new Person();
    let 사람2 = new Person();
    console.log(사람1);

    class Pet {
        name: string;
        age: number;
        constructor(a: string, b: number) {
            this.name = a;
            this.age = b;
        }
        먹이기(a: string) {
            console.log("냠냠+a+먹기");
        }
    }
    Pet.prototype.먹이기 = function () {};
    let 고양이 = new Pet("푸딩이", 1123);
    console.log(고양이);
    고양이.먹이기("츄르");
}
