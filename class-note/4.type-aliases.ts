// interface Persons {
//     name: string;
//     age:number;
// }


// 타입은 확장이 되지 않는다
type Persons = {
    name: string;
    age:number;
}

let hong: Persons = {
    name: 'hong',
    age: 30
}

type MyString = string;
let str: MyString = 'hello';

type Todo = {id: string; title: string; done: boolean};
function getTodo(Todo: Todo) {

}