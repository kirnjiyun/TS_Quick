{
    class User {
        public name: string;

        constructor() {
            this.name = "kim";
        }
    }

    let 유저1 = new User();
    유저1.name = "park"; //가능
}
{
    class User {
        public name: string;
        private familyName: string;

        constructor() {
            this.name = "kim";
            let hello = this.familyName + "안뇽"; //가능
        }
    }

    let 유저1 = new User();
    유저1.name = "jijijiji"; //가능
    //   유저1.familyName = 456; //에러남
}
{
    class User {
        public name: string;
        private familyName: string;

        constructor() {
            this.name = "kim";
            let hello = this.familyName + "안뇽";
        }
        changeSecret() {
            this.familyName = "park";
        }
    }

    let 유저1 = new User();
    유저1.familyName = "park"; //에러남
    유저1.changeSecret(); //가능
}
