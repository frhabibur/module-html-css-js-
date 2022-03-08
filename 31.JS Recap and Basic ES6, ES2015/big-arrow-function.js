const add = (num1, num2) => num1 + num2
const number = add(10, 20)
console.log(`two number ${number}`)

const add3 = (num1, num2, num3) => num1 + num2 + num3;
const resutlAdd3 = add3(10, 20, 30)
console.log(`add 3 ${resutlAdd3}`);

// one parementer 
const oneValue = (one) => one * 5
const oneNumber = oneValue(10)
console.log(oneNumber)

const oneValue2 = one => one * 10
const oneNumber2 = oneValue2(10)
console.log(oneNumber2)

// no paremeter 
const getName = () => 'Habibur';
console.log('name is ', getName())

// multiple work 

const multiple = (num1, num2) => {
    const add = num1 + num2;
    const mytiply = add * 10;
    const devide = mytiply / 5;
    return devide;
}

console.log(multiple(50, 80))