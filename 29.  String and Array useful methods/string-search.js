const products = [
    'hp hight budute Laptop',
    'asut mobile phone',
    'xiomi gaming Laptop',
    'samsung elictrical car',
    'Del laptop with keypad',
    'hp gamming monitor  LAPTOP',
    'New Mobile Phone'

]

const search = 'Laptop'
const output = []
// index of 

// for (const product of products) {
//     if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
//         output.push(product)
//     }
// }
// console.log(output)

// includes 

// for (const product of products) {
//     if (product.toLowerCase().includes(search.toLowerCase())) {
//         output.push(product)
//     }
// }
// // console.log(output)

// starts with 
// for (const product of products) {
//     if (product.toLowerCase().startsWith(search.toLowerCase())) {
//         output.push(product)
//     }
// }

// console.log(output)

// ends With 
for (const product of products) {
    if (product.toLowerCase().endsWith(search.toLowerCase())) {
        output.push(product)
    }
}
console.log(output)

