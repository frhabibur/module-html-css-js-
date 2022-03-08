// 1. object literal   
const student = { name: 'habibur', job: 'Programmer' }
// console.log(student)

// 2. using constructor 
const person = new Object() // pass a variable or object 
// person.name = 'Raju'
// person.job = 'Freelancer'
// console.log(person)


// 3. using object.create()
const human = Object.create(null); //pass a variable or object untill null
human.name = 'people'
human.total = '20core'
// console.log(human)
// const human = Object.create(student); //pass a variable or object untill null
// // human.name = 'people'
// // human.total = '20core'

// console.log(human.name)


// 4. using class 
class People {
    constructor(name, title) {
        this.name = name // 'Habibur'
        this.title = title
    }
}
const Peop = new People('Rashidul', 'islam');
const habibur = new People('Habibur', 'Rahman');
// console.log(Peop)
// console.log(habibur)


// 5. using function 
function manush(name, title, age) {
    this.name = name;
    this.title = title;
    this.age = age
}
const man = new manush('kader', 'molla', 90);
console.log(man)