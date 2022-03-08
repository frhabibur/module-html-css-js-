const products = [
    { name: 'iphone 14', price: 140000 },
    { name: 'samsung s22', price: 100000 },
    { name: 'acer laptop', price: 14000 },
    { name: 'apple watch', price: 150000 },
    { name: 'hp laptop', price: 10000 },
    { name: 'samsung watch', price: 80000 },
    { name: 'mi watch', price: 40000 },
    { name: 'lenovo laptop', price: 18000 },
    { name: 'waltor laptop', price: 9000 },

]

for (let product of products) {
    if (product.price < 100000) {
        break;
    }
    console.log('break the loop ', product)
}
for (let product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log('continew', product)
}