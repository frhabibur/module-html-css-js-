const numbers = [1, "remove-start", 3, 1, 4, 9, 8, 'remove', 2, 5, 52, 5, 56]
// const slice = numbers.slice(3, 8)
const slice = numbers.slice()
// console.log(slice)

// remover 3 disit from array 
const splice = numbers.splice(10, 3)

// add elemetn in array 
const addSplice = numbers.splice(2, 5, 'add', 1654165, 15641, 51641, 15456, 'add -end')
console.log(addSplice)
console.log(numbers)