{
    function 함수(...a: (string | boolean | number)[]) {
        console.log(a);
    }
    함수(134, 5345, true, "qweiowerui");

    let arr = [1, 2, 3];
    let arr2 = [5, 23];
    let arr3 = [...arr, ...arr2];

    console.log(arr3);

    {
        let [hi, iam, jiyun] = ["안녕", "나는", "지유니야"];

        console.log(hi);
        console.log(iam);
        console.log(jiyun);
    }
}
{
    let { 학생: student, 나이: age } = { 학생: true, 나이: 20 };

    let object = { student: true, age: 20 };

    function 함수({ student, age }) {
        console.log(student, age);
    }

    함수({ student: true, age: 20 });
}
