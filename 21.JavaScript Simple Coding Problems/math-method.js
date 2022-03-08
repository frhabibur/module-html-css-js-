// neagative to positive
const number = -3;
var positive = Math.abs(number);
// console.log(positive)

// converted to nearest upper value in intiger
const value = 5.22;
var intiger = Math.ceil(value)
// console.log(" converted to ceil", intiger)


// converted to nearest lower value in intiger
const floatValue = 5.49;
// var lowerInt = Math.floor(floatValue);
// console.log('conveted to lower intiger value using fllor()', lowerInt)

// var roundValue = Math.round(floatValue);
// console.log(roundValue)

const randomValue = Math.random() * 10
// console.log(randomValue)

// get random valu using loop
for (i = 2; i <= 10; i++) {
    var random = Math.random() * i
    var roundValue2 = Math.round(random)
    console.log(roundValue2)
}




