function removeDuplicate(numbers) {
    let uniqueNumbers = [];
    for (const singleNumber of numbers) {
        if (uniqueNumbers.indexOf(singleNumber) == -1) {
            uniqueNumbers.push(singleNumber);
        }
    }
    return uniqueNumbers;
}

const numbers = [1, 3, 5, 4, 56, 55, 2, 1, 1, 2, 9, 3, 5, 5, 3]
const getUnique = removeDuplicate(numbers);
console.log(getUnique)