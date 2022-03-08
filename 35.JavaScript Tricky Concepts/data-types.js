// js data types 
/* 1. number 
2. string 
3. boolean 
4. null
5. undefined
6. object
7. stymble */

/* এই ডাটা টাইপগুলোকে আবার দুই ভাগে ভাগ করা যায়
1.primitive;
2. non - primitive */

// এদের মধ্যে object , non-primitive data আর বাকি গুলো primitive

let a = 'hello'
let b = a;
console.log(a, b)
a = 'gelo'
console.log(a, b)


let x = { job: 'web developer' }
let y = x
console.log(x, y)
x.job = 'web designer'
console.log(x, y)