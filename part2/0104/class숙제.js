{
    var User_1 = /** @class */ (function () {
        function User() {
            this.z = 30;
        }
        User.x = 10;
        User.y = 20;
        return User;
    }());
}
//일단 static이 붙으면 인스턴스 말고 class
// User.x 이런 식으로만 접근해서 쓸 수 있습니다.
//User의 자식들은 x와 y를 쓸 수 없습니다.
//private은 클래스 내부에서 수정 가능이고 public은 상관없다.
//protected는 extends로 복사한 클래스 내부에서도 사용 가능하다.
{
    var User_2 = /** @class */ (function () {
        function User() {
        }
        User.addOne = function (params) {
            User.x += params;
        };
        User.printX = function () {
            console.log(User.x);
        };
        User.x = 10;
        User.y = 20;
        return User;
    }());
    User_2.addOne(3);
    User_2.addOne(10);
    User_2.printX();
}
{
    var 네모_1 = new Square(30, 30, "red");
    네모_1.draw();
    네모_1.draw();
    네모_1.draw();
    네모_1.draw();
}
