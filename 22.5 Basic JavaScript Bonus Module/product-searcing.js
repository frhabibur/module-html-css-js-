/* const products = [
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

function findingProduct(products, searchName) {
    let searchItem = []

    for (const product of products) {
        if (product.name.includes(searchName)) {
            searchItem.push(product)
        }

    }
    return searchItem
}
var search = (findingProduct(products, 'watch'));

console.log(search) */



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

function search(products) {
    const searchRsult = [];
    for (i = 0; i < products.length; i++) {
        const product = products[i]
        if (product.name.includes('watch')) {
            searchRsult.push(product)
        }
    }
    return searchRsult;
}
console.log(search(products));