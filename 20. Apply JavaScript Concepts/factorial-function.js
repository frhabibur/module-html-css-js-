function getFraction(number) {
    var fraction = 1;
    for (let i = 1; i <= number; i++) {
        fraction = fraction * i;
    }
    return fraction;
}
var fraction7 = getFraction(7);
console.log(fraction7)