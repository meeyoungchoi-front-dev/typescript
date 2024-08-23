function logText(text) {
    console.log(text);
    return text;
}

logText(10); // 숫자 10
logText('하이'); // 문자열 하이
logText(true); // 진위값 true


function logText2<T>(text2: T):T {
    console.log(text2);
    return text2;
}

logText2<number>(10); // 숫자 10
logText2<string>('하이'); // 문자열 하이
logText2<boolean>(true); // 진위값 true

function logText3(text:string) {
    console.log(text);
    text.split('').reverse().join('');
    return text;
}

function logNumber(text:number) {
    console.log(text);
    return text;
}

function logBoolean(text: boolean) {
    console.log(Boolean);
    return text;
}
logNumber(10); // 숫자 10
logText3('하이'); // 문자열 하이
logBoolean(true); // 진위값 true

function logText4(text:string | number) {
    console.log(text);
    return text;
}

const a = logText4('하이'); // 문자열 하이
const b = logText4(10); // 숫자 10




function logText5<T>(text: T): T {
    console.log(text);
    return text;
}

const c = logText5<string>('하이'); 
c.split('');
const d = logText5<number>(10); 
const login = logText5<boolean>(true); 

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
    value: string;
    selected: boolean;
}

const obj: Dropdown = {value: 'abc', selected: false};

interface Drowpdown2<T> {
    value: T;
    lselected: boolean;
}

const obj2: Drowpdown2<string> = {value:'abc', lselected: false};

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    text.forEach(function(text){
        console.log(text);
    })
    return text;
}    

logTextLength<string>(['hi']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length
    return text;
} 

logTextLength2('a');
logTextLength2({length: 10})