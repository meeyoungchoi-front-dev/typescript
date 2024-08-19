function logMessage(value: any) {
    console.log(value);
    // any를 쓰게 되면 구체적으로 어떤 타입인지 추론할 수 없게 된다
}

logMessage('hello');
logMessage(100);
logMessage(false)


// 유니온 타입 : 파라미터나 변수에 한가지 이상의 타입을 쓰고 싶을때 (타입 가드)
let sahoo: string | number | boolean;
function logMessage2(value: string | number) {
    if (typeof value === 'number' ) {
        value.toLocaleString();
    }

    if (typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
};

logMessage2('hello');
logMessage2(100);

// 유니온 타입의 특징
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer  | Person) {
   // 실제적으로 Developer와 Person이 공통으로 갖고 있는 속성만 접근할 수 있게 된다
   // 타입 검증없이 skill이나 age를 쓰면 에러가 발생될 수 있다
   // 타입가드에 대한 추가 적인 처리가 필요하다
   // 타입가드는 추후에 배움
}

let sahoow : string | number | boolean;
let capton : string & number & boolean; // 인터섹션 타입 :  3개의 타입을 모두 만복해야 한다 (string, number, boolean)

function askSomeone2(someone: Developer & Person) { // Developer가 갖고 있는 name과 skill 그리고 Person이 갖고 있는 모든 name과 age를 포함한 3개의 속성을 갖는 타입을 전부 만족하기 때문에 쓸수 있다
    someone.age
    someone.name
    someone.skill

}