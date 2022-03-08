const phones = [
    { name: 'samsung', price: 8000, camera: 20, storage: 8 },
    { name: 'xioami', price: 18000, camera: 20, storage: 8 },
    { name: 'nokia', price: 15000, camera: 20, storage: 8 },
    { name: 'itel', price: 100, camera: 20, storage: 8 },
    { name: 'oppo', price: 3000, camera: 20, storage: 8 },
]
let chip = phones[0]
for (const phone of phones) {
    if (phone.price < chip.price) {
        chip = phone
    }
}
console.log(chip)