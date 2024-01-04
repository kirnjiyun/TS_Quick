{
    class User {
        x = 10;
    }

    class NewUser extends User {}
    let 사람 = new NewUser();
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
    class User {
        protected x = 10;
    }

    class NewUser extends User {
        doThis() {
            this.x = 20;
        }
    }
}
{
    class User {
        static x: 10; //자식이 물려받지 못함 부모만
        y: 20;
    }
    let 자식 = new User();
    console.log(User.x);
    console.log(자식.y);
    console.log(자식.x);
    console.log(User.y);
}
{
    class User {
        private static x: 10;
        y: 20;
    }
    let 자식 = new User();
    // console.log(User.x);
    // console.log(자식.y);
    // console.log(자식.x);
    // console.log(User.y);
}
// public private protected + static 가능

{
    class User {
        intro: " 전문가입니다.";
    }
    let 철수 = new User();
    console.log(철수);
}
{
    class User {
        skill = "js";
        intro = this.skill + "전문가입니다.";
    }
    let 철수 = new User();
    console.log(철수);
}
{
    class User {
        static skill = "js";
        intro = User.skill + "전문가입니다";
    }

    let 철수 = new User();
    console.log(철수);

    User.skill = "python";
    var 민수 = new User();
    console.log(민수);
}
