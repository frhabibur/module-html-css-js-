const product = {
    name: 'phone',
    ram: '4gb',
    rom: '128gb',
    price: 10000,
    brand: 'samsung',
    ishighestPrice: false
}
// console.log(product)

// get all properties 
const keys = Object.keys(product)
// console.log(keys)

// get all properties value  
const values = Object.values(product)
// console.log(values)

// get propety and value pair /
const pair = Object.entries(product)
console.log('Got pair ', pair)

// seal propery /
Object.seal(product)

// freeze property /
Object.freeze(product)

// change property value /
product.brand = 'nokia'

// delete property 
delete product.ishighestPrice
console.log(product)