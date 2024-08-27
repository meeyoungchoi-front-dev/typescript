interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}


let developer: Developer;
let person: Person;

class Person2 {
    name: string;
    skill: string;
}

developer = new Person2();


let add = function (a: number) {

}

let sum = function (a: number, b: number) {

}

sum = add;

interface Empty<T> {

}

let empty1 = Empty<string>;
let empty2 = Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

let notempty1 = NotEmpty<string>;
let notempty2 = NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;