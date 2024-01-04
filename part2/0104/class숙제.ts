{
    class User {
        private static x = 10;
        public static y = 20;
        protected z = 30;
    }
}
//일단 static이 붙으면 인스턴스 말고 class
// User.x 이런 식으로만 접근해서 쓸 수 있습니다.
//User의 자식들은 x와 y를 쓸 수 없습니다.
//private은 클래스 내부에서 수정 가능이고 public은 상관없다.
//protected는 extends로 복사한 클래스 내부에서도 사용 가능하다.
{
    class User {
        private static x = 10;
        public static y = 20;

        static addOne(params: number) {
            User.x += params;
        }

        static printX() {
            console.log(User.x);
        }
    }
    User.addOne(3);
    User.addOne(10);
    User.printX();
}
{
    let 네모 = new Square(30, 30, "red");
    네모.draw();
    네모.draw();
    네모.draw();
    네모.draw();
}
