// const name = 'habibur'
// throw 'throw an error'
// try {
//     name = 'rahman'
// } catch (error) {
//     console.log('Give me eroor', error)
// }
// console.log(name)



const numbers = [1, 8, 9, 3, 5, "string"]
function handedEror(numbers) {
    let output = [];
    for (const number of numbers) {
        if (isNaN(number)) {
            throw "It's Not a number";
        }
        output.push(number)

    }
    return output

}
console.log(handedEror(numbers))

