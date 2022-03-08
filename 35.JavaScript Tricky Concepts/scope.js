// local scope
function sum(a, b) {
    const result = a + b;
    return result
}
// const add = (10, 30)
// if your display the a,b or result value you will get an error . becuase a is in function and you can't call the value;


// global scope

const global = 33; // it is a global scope variable , you use this variable anywhere

function multiply(x) {
    const mul = x * 2;
    // console.log(mul)
}
multiply(global)


// block scope let and const

function block(number) {
    if (number > 1) {
        let result = number * 2;

    }
    // return result;
}
const blockValue = block(2)
// console.log(blockValue) // if you display result value you will get an eroor, beacuse result is in a block {}. you can't acces it outer of block

// blck scope of var 

function varScope(num) {
    if (num >= 0) {
        var incrise = num * 10; //incrise is a block scope variable. but VAR hositng the variable in function. and you got the value; if you user ler or const replace of var your can't got the value 
    }
    return incrise;
}
const varResult = varScope(2)
console.log(varResult)
