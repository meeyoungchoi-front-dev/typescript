var Shoes;
(function (Shoes) {
    Shoes[Shoes["Nike"] = 0] = "Nike";
    Shoes[Shoes["Adidas"] = 1] = "Adidas";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes); // 0 (별도의 값을 지정하지 않으면 전부다 숫자인 0으로 취급하게 된다)
var myShoes2 = Shoes.Adidas;
console.log(myShoes2); // 1 (별도의 값을 지정하지 않으면 전부다 숫자인 1로 취급하게 된다)
