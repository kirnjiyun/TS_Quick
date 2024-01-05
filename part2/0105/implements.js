// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻입니다. class에다가 타입을 할당하고 변형시키는 키워드는 아닙니다.
{
    var Car = /** @class */ (function () {
        function Car(a) {
            this.price = 1000;
            this.model = a;
        }
        return Car;
    }());
    var 붕붕이 = new Car("morning");
}
{
    var Car = /** @class */ (function () {
        function Car(a) {
            this.price = 1000;
            this.model = a;
        }
        return Car;
    }());
    var 붕붕이 = new Car("morning");
}
