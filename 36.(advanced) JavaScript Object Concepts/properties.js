const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleand: true
}
// getting all properties name 
const keys = Object.keys(bottle)
// console.log(keys)

// getting all properties valus
const value = Object.values(bottle);
const pairs = Object.entries(bottle)
// Object.seal(bottle)
Object.freeze(bottle)
bottle.price = 100
delete bottle.isCleand
console.log(bottle)