{
    var Car = /** @class */ (function () {
        function Car(a, b) {
            var _this = this;
            this.tax = function () {
                return _this.price / 10;
            };
            this.model = a;
            this.price = b;
        }
        return Car;
    }());
    var car1 = new Car("비틀", 8930);
    console.log(car1);
}
{
    var Word = /** @class */ (function () {
        function Word() {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            var _this = this;
            this.num = [];
            this.str = [];
            x.forEach(function (i) {
                if (typeof i === "string") {
                    _this.str.push(i);
                }
                else {
                    _this.num.push(i);
                }
            });
        }
        return Word;
    }());
    var object = new Word("qery", 232, "vbjkas");
    console.log(object.num);
    console.log(object.str);
}
