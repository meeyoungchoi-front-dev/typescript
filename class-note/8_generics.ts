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

