let a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

interface Dropwdown2<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropwdown2<K> {
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'abcde',
    tag: 'e'

}

let shoppingItme: Dropwdown2<string> = {
    value: 'apple',
    title: 'hello'
}

let arr = [1,2,true, true, 'a'];
