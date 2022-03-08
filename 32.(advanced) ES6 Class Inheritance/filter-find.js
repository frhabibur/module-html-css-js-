const numbers = [3, 9, 3, 6, 76, 28, 54, 64, 34, 90, 53];
const getUpper30 = numbers.filter(number => number > 30);
const getLess10 = numbers.filter(number => number < 10)
// console.log(getLess10)



const products = [
    { name: 'keybord', brand: 'waltor', price: 1000, color: 'white' },
    { name: 'mouse', brand: 'a4 tech', price: 250, color: 'black' },
    { name: 'monitor', brand: 'gigasonic', price: 5000, color: 'black' },
    { name: 'procesor', brand: 'intel', price: 10000, color: 'silver' },
    { name: 'speacker', brand: 'micromax', price: 500, color: 'black' },
]

// const expensive = products.filter(product => product.price > 500)
const black = products.filter(product => product.color = 'black')
// console.log(products)


// find 
const white = products.find(product => product.color = 'white');
const smallNumbers = numbers.find(number => number < 10);
// console.log(smallNumbers)
console.log(white)
