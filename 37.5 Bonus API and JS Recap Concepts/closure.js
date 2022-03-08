// const bank = (name) => {
//     let balance = 0
//     return amount => {
//         balance = balance + amount
//         return balance;
//     }
// }
// const output = bank()
// console.log(output(10))
// console.log(output(10))

const bank = name => {
    let balance = 0;
    return {
        deposit: amount => {
            balance = balance + amount;
            return balance;
        },
        withdraw: amount => {
            balance = balance - amount;
            return balance;
        }
    }
}
const hafiz = bank('hafiz');
console.log(hafiz.deposit(10))
console.log(hafiz.deposit(10))
console.log(hafiz.withdraw(10))
console.log(hafiz.withdraw(10))
// console.log(hafiz.deposit(10))
// console.log(hafiz.deposit(10))
// console.log(bank('hafiz').deposit(20))
// console.log(bank('hafiz').deposit(20))