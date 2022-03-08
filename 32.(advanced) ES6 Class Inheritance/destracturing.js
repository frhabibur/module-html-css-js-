// const phone = { brand: 'xioami', ram: '2gb', storage: '32gb', price: 10000 };

// console.log(phone.price);
// console.log(phone.ram);
// console.log(phone.storage);
// console.log(phone.brand)

// destracturing
// const { brand, ram, storage, price } = phone;
// sent value in array 

// const phoneSpec = [brand, ram, storage, price];


const iam = {
    name: 'habibur rahman',
    profession: 'student',
    address: {
        vill: 'harinabari',
        ps: 'palashbari',
        dist: 'gaibandha'
    }
}

// const vill = iam.address.vill;
const dist = iam.address.dist

const { name, address } = iam;
const { vill } = iam.address;
console.log(vill)
console.log(name, address)