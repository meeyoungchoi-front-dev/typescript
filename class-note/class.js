function Person2(name, age) {
    this.name = name;
    this.age = age;
}

let capt = new Person2('캡틴', 100);
console.log(capt);

class Person {
    constructor(name, age) {
        console.log('생성되었습니다');
        this.name = name;
        this.age = age;
    }    
}

let seho = new Person('세호', 30);
console.log(seho);