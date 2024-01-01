{
    var Person = /** @class */ (function () {
        function Person() {
            this.name = "jiyunee";
        }
        return Person;
    }());
    var 사람1 = new Person();
    var 사람2 = new Person();
    console.log(사람1);
    var Pet = /** @class */ (function () {
        function Pet(a, b) {
            this.name = a;
            this.age = b;
        }
        Pet.prototype.먹이기 = function (a) {
            console.log("냠냠+a+먹기");
        };
        return Pet;
    }());
    Pet.prototype.먹이기 = function () { };
    var 고양이 = new Pet("푸딩이", 1123);
    console.log(고양이);
    고양이.먹이기("츄르");
}
