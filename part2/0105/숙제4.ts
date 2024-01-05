{
    type Age<T> = T extends [string, ...any] ? T[0] : unknown;
    let age1: Age<[string, number]>;
    let age2: Age<[boolean, number]>;
}
{
    type 타입뽑기<T> = T extends (x: infer R) => void ? R : any;

    type NumberParam = 타입뽑기<(x: number) => void>;
    type StringParam = 타입뽑기<(x: string) => void>;
}
