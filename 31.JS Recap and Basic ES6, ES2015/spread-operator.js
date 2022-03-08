const array = [1, 3, 6, 30, 438, 834]
// console.log(...array)
// max 
const max = Math.max(...array)
// console.log(max)

// two dymentional array 

const numbers = [33, 66, 654, 32, 24]
// console.log('privious array ', newNumbers)

// two dymentional array using spread operator 
const newNumbers = [...numbers]
// console.log('spread array', newNumbers)

// add new element 
const addnew = [20, ...numbers, 30]
numbers.push(100)
addnew.push(66)
console.log('number ', numbers)
console.log('spread number', addnew)



