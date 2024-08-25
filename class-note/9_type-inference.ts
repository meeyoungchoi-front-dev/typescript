let a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

interface Dropwdown2<T> {
    value: T;
    title: string;
}

let shoppingItme: Dropwdown2<string> = {
    value: 'apple',
    title: 'hello'
}