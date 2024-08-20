var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "\uB098\uC774\uD0A4";
    Shoes["Adidas"] = "\uC544\uB514\uB2E4\uC2A4";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키
var myShoes2 = Shoes.Adidas;
console.log(myShoes2); // 아디다스
var Answer;
(function (Answer) {
    Answer["Yes"] = "Y";
    Answer["No"] = "N";
})(Answer || (Answer = {}));
function askQuestion(answer) {
    if (Answer.Yes === answer) {
        console.log('정답입니다');
    }
    if (Answer.No === answer) {
        console.log('오답입니다');
    }
}
askQuestion(Answer.Yes);
