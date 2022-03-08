// sort single numbers 
const numbers = [9, 2, 8, 6, 4, 5, 1, 7, 3, 2, 3, 0]
const sorting = numbers.sort();
// console.log(sorting)

// sort alphabat 
const friend = ['fallu', 'ballu', 'kallu', 'allu', 'chall', 'dulu',]
const friendSort = friend.sort();
// console.log(friendSort)

// sort dual digit numbert 

const dualNumbers = [5, 15, 32, 89, 65, 3, 6, 77, 11, 22, 54]
const numberSort = dualNumbers.sort(function (a, b) {
    return a - b
})
// console.log(numberSort)


// reverse 

const numbersReverse = numbers.reverse()
// console.log(numbersReverse)

const friendReverse = friend.reverse()
console.log(friendReverse)