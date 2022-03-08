function numbers(num) {
    // const pick = arguments[4];

    // const result = arguments[0] + pick;
    let addition = 0;
    for (const part of arguments) {
        addition = addition + part
    }
    return addition
}

// console.log(numbers(10, 30, 40, 34, 454))



function names(firstName, lastName) {
    // const concatName = firstName + " " + lastName
    let concatName = ''
    for (name of arguments) {
        concatName = concatName + " " + name
    }
    return concatName
}
const firstName = 'Habibur';
const lastName = 'Rahman'
const nameAdd = names('habibur', 'rahman', 'khan', 'dan', 'dana', 'dan')
console.log(nameAdd)