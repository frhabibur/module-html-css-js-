const first = { a: 1, b: 2 }
const second = { a: 1, b: 2 }
const third = first
if (third === first) {
    console.log('same')
}
// if (first == third) {
//     console.log('both are same')
// }
// else {
//     console.log('here is defferient')
// }
const first2 = { a: 1, b: 2 }
const second2 = { b: 2, a: 1 }
// console.log(JSON.stringify(first2))
// console.log(JSON.stringify(second2))

// if (JSON.stringify(first2) === JSON.stringify(second2)) {
//     console.log('both are same')
// }
// else {
//     console.log('there not same')
// }


function compairObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj1[prop]) {
            return false
        }
    }
    return true
}
const cObject = compairObject(first2, second2)
console.log(cObject)

