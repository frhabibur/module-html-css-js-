// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
/* 3rd = 2nd + 1st;
4 th = 3rd +2nd
nth = n-1 + n-2 */






// let fibo = [0, 1]
// for (let i = 2; i < 10000; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];

// }
// console.log(fibo)


// function fiboSeries(number) {
//     let fibo = [0, 1]
//     for (let i = 2; i < number; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// let fiboResult = fiboSeries(10);
// console.log(fiboResult)

// function fiboSeries(number) {
//     if (typeof number != 'number') {
//         return 'Pleaase give number'
//     }
//     else if (number < 2) {
//         return 'please give me value up of 1'
//     }
//     let fibo = [0, 1];
//     for (i = 2; i < number; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo
// }
// const getFibo = fiboSeries(-2);
// console.log(getFibo)

function add(a, b) {
    return a + b;
}
console.log(add("adam" + "eve"))
