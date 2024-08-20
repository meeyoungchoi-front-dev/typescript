enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike;
console.log(myShoes);  // 나이키

let myShoes2 = Shoes.Adidas;
console.log(myShoes2); // 아디다스

enum Answer {
    Yes = 'Y',
    No = 'N',
}



function askQuestion(answer: Answer) {
    if (Answer.Yes === answer) {
        console.log('정답입니다');
    }

    if (Answer.No  === answer) {
        console.log('오답입니다');
    }
}

askQuestion(Answer.Yes);