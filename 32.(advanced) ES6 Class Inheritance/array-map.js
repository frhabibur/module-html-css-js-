const numbers = [2, 4, 6, 8, 10];
// const dubbleIt = x => x * 2
function dubbleIt(x) {
    return x * 2
}
const mapOutput = numbers.map(dubbleIt)
// console.log(mapOutput)


const mapping = numbers.map(dubble = x => x * 4);
console.log(mapping)