var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var User_1 = /** @class */ (function () {
        function User() {
            this.x = 10;
        }
        return User;
    }());
    var NewUser = /** @class */ (function (_super) {
        __extends(NewUser, _super);
        function NewUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return NewUser;
    }(User_1));
    var 사람 = new NewUser();
    console.log(사람);
}
{
    // class User {
    //     private x = 10;
    // }
    // class NewUser extends User {
    //     x;
    // }
}
{
    var User_2 = /** @class */ (function () {
        function User() {
            this.x = 10;
        }
        return User;
    }());
    var NewUser = /** @class */ (function (_super) {
        __extends(NewUser, _super);
        function NewUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewUser.prototype.doThis = function () {
            this.x = 20;
        };
        return NewUser;
    }(User_2));
}
{
    var User_3 = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var 자식 = new User_3();
    console.log(User_3.x);
    console.log(자식.y);
    console.log(자식.x);
    console.log(User_3.y);
}
{
    var User_4 = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var 자식 = new User_4();
    // console.log(User.x);
    // console.log(자식.y);
    // console.log(자식.x);
    // console.log(User.y);
}
// public private protected + static 가능
{
    var User_5 = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var 철수_1 = new User_5();
    console.log(철수_1);
}
{
    var User_6 = /** @class */ (function () {
        function User() {
            this.skill = "js";
            this.intro = this.skill + "전문가입니다.";
        }
        return User;
    }());
    var 철수_2 = new User_6();
    console.log(철수_2);
}
{
    var User_7 = /** @class */ (function () {
        function User() {
            this.intro = User.skill + "전문가입니다";
        }
        User.skill = "js";
        return User;
    }());
    var 철수_3 = new User_7();
    console.log(철수_3);
    User_7.skill = "python";
    var 민수 = new User_7();
    console.log(민수);
}
