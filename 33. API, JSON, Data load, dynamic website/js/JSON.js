// javascript object Notification
// JSON 

// convert js object to JSON object 
const user = { id: 2122, name: 'gorob amir', job: 'actor' }
const stringify = JSON.stringify(user)
// console.log(user)
// console.log(stringify)


const shoop =
{
    name: 'habibur stor',
    address: 'harinabar',
    profit: 20000,
    products: ['laptop', 'mobile', 'television', 'coumputer'],
    owener: {
        name: 'habibur',
        profession: 'web Developre'
    },
    isExpensive: true
}

const shoopStringified = JSON.stringify(shoop)

console.log(shoopStringified)

// convert JSON to javascript object 
const JsonToObject = JSON.parse(shoopStringified)
console.log(JsonToObject)
