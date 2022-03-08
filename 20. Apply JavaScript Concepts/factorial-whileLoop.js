// function factorial(number) {
//     var factorialVale = 1;
//     i = 1
//     while (i <= number) {
//         factorialVale = factorialVale * i;
//         i++;


//     }
//     return factorialVale;
// }
// var getFactorialValue = factorial(5);
// console.log(getFactorialValue);

// reverse way

function factorial(number) {
    var factorialValue = 1;

    let i = number;
    while (i >= 1) {
        factorialValue = factorialValue * i;
        i--
    }
    return factorialValue

}
var factorialResult = factorial(5);
console.log(factorialResult)