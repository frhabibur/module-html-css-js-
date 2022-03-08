const numbers = [2, 4, 6, 8, 10];
// dubble it 

// method 1
/* const output = []
for (const number of numbers) {
    const result = number * 2;
    output.push(result)
}
console.log(output) */

// method 2 

const output = []
// function dubbleIt(number) {
//     const result = number * 2;
//     output.push(result)
// }

const dubbleIt = number => number * 2;


for (const number of numbers) {
    const result = dubbleIt(number)
    output.push(result)
}
console.log(output)