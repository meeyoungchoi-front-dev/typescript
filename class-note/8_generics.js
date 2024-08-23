function logText(text) {
    console.log(text);
    return text;
}
logText(10); // 숫자 10
logText('하이'); // 문자열 하이
logText(true); // 진위값 true
function logText2(text2) {
    console.log(text2);
    return text2;
}
logText2(10); // 숫자 10
logText2('하이'); // 문자열 하이
logText2(true); // 진위값 true
function logText3(text) {
    console.log(text);
    text.split('').reverse().join('');
    return text;
}
function logNumber(text) {
    console.log(text);
    return text;
}
function logBoolean(text) {
    console.log(Boolean);
    return text;
}
logNumber(10); // 숫자 10
logText3('하이'); // 문자열 하이
logBoolean(true); // 진위값 true
function logText4(text) {
    console.log(text);
    return text;
}
var a = logText4('하이'); // 문자열 하이
var b = logText4(10); // 숫자 10
function logText5(text) {
    console.log(text);
    return text;
}
var c = logText5('하이');
c.split('');
var d = logText5(10);
var login = logText5(true);
var obj = { value: 'abc', selected: false };
var obj2 = { value: 'abc', lselected: false };
// 제네릭의 타입 제한
function logTextLength(text) {
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}
logTextLength(['hi']);
function logTextLength2(text) {
    text.length;
    return text;
}
logTextLength2('a');
logTextLength2({ length: 10 });
