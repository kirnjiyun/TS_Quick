{
    type Arr = [string, number, ...boolean[]];
    let arr: Arr = ["동서녹차", 4000, true, false, true, true, false, true];
}
{
    type a = [string, boolean, ...(number | string)[]];
    function 함수(...args: a) {}
    함수("ㅁ", true, 4, 1, 34, 2, "2123");
}
{
    function 함수(...rest: (string | number)[]) {
        let result: [string[], number[]] = [[], []];
        rest.forEach((a) => {
            typeof a === "string" ? result[0].push(a) : result[1].push(a);
        });
        return result;
    }
    함수("b", 5, 6, 8, "a");
}
