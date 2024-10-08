interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt =  {
    age: 100,
    name: '캡틴'

}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
    (a: number, b: number): number;
}

let sum: sumFunction;
sum = function(a: number, b:number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

let obj = {
    // sth: /abc/,
    cssFile: /.js$/,
    jsFile: /.js$/,
}

Object.keys(obj).forEach(function(value) {

})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
    skill: string;
}

let captain: Developer = {
    language: 'TypeScript',
    skill: 'Good',
    name: 'josh',
    age: 100
}
