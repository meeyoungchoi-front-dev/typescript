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

