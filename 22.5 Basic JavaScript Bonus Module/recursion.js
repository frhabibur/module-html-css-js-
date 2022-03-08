
// function sum(i) {
//     console.log(i)
//     if (i == 1) {
//         return 1;
//     }
//     return i + sum(--i)
// }
// console.log(sum(5))

















function upSum(i) {
    console.log(i)

    if (i == 10) {
        return 1;
    }
    return i + upSum(++i)
}
console.log(upSum(1))
