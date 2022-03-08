const friends = ['rahim', 'karim,', 'kalam', 'balam', 'angur', 'lal mia '];
// get string length in an array 
const friendLength = friends.map(friend => friend.length);
// console.log(friendLength)


const products = [
    { name: 'keybord', brand: 'waltor', price: 1000, color: 'white' },
    { name: 'mouse', brand: 'a4 tech', price: 250, color: 'black' },
    { name: 'monitor', brand: 'gigasonic', price: 5000, color: 'black' },
    { name: 'procesor', brand: 'intel', price: 10000, color: 'silver' },
    { name: 'speacker', brand: 'micromax', price: 500, color: 'black' },
]
const productName = products.map(product => product.name)
const pdBrand = products.map(product => product.brand)

// products.map(product => console.log(product.price))

// console.log(addition)

// for each
products.forEach(product => console.log(product.price))