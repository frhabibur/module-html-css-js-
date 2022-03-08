myObject = { name: 'habibur', profession: 'student', address: 'harinabar', goal: 'web developer' };
// get value like as variable form object 
const { name, profession, address, goal } = myObject;
// console.log(name, address, goal)


const { brand, price } = { brand: 'samsung', size: '12inches', price: 1000, version: 'global' }
// console.log(brand, price)

// destracturing array 

// using variable
const myFirends = ['alamin', 'momin', 'robin', 'rashan', 'ratul', 'bokus'];
const [first, second, third, fourth] = myFirends;
// console.log(first, second, third)
// direcly 
const [f1, f2, f3] = ['asikur', 'mosiur', 'dulal', 'alal']
// console.log(f1, f2, f3)


// optional chaining 

const company = {
    name: 'microsoft',
    employe: 1200,
    income: {
        anual: {
            monthly: 200,
            weekly: {
                day: 100
            },

        }
    },
    country: {
        cun1: 'japan',
        cun2: 'arerica',
        cun3: 'bangladesh'
    }


}
// console.log(company.name.old.new.courrent)
console.log(company.brand?.missing.anual.weekly.day)
// console.log(company.country.cun3)


