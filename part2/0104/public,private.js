{
    var User_1 = /** @class */ (function () {
        function User() {
            this.name = "kim";
        }
        return User;
    }());
    var 유저1 = new User_1();
    유저1.name = "park"; //가능
}
{
    var User_2 = /** @class */ (function () {
        function User() {
            this.name = "kim";
            var hello = this.familyName + "안뇽"; //가능
        }
        return User;
    }());
    var 유저1 = new User_2();
    유저1.name = "jijijiji"; //가능
    //   유저1.familyName = 456; //에러남
}
{
    var User_3 = /** @class */ (function () {
        function User() {
            this.name = "kim";
            var hello = this.familyName + "안뇽";
        }
        User.prototype.changeSecret = function () {
            this.familyName = "park";
        };
        return User;
    }());
    var 유저1 = new User_3();
    유저1.familyName = "park"; //에러남
    유저1.changeSecret(); //가능
}
