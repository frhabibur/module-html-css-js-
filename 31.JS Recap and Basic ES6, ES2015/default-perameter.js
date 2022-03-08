// function addNumbers(num1, num2) {
//     // option 1
//     // if (numb2 == undefined) {
//     //     numb2 = 0
//     // }

//     // option 2
//     // num2 = num2 || 0

//     const result = num1 + num2;
//     return result;
// }

// const number = addNumbers(12, 20);
// console.log(number)

function sum(number1, number2 = 0) {
    const total = number1 + number2;
    return total
}
console.log(sum(20))

function getFullName(first, last, middle = '',) {
    const fullName = first + last + middle;
    return fullName;
}
console.log(getFullName('lal ', 'mia '))