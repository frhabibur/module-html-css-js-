function arraylarge(ages) {
    let largest = ages[0];
    for (let i = 0; i < ages.length; i++) {
        let arrayElement = ages[i]
        if (arrayElement > largest) {
            largest = arrayElement;
        }

    }
    return largest
}


var ages = [12, 24, 13, 11, 80, 90];
let largeValue = arraylarge(ages);
let largeValue2 = arraylarge([-2, -5, -10, -30, -.1 - 0.001])
let largeValue3 = arraylarge([-66, -545, -534, 0.1, -.5, -3]);
console.log(largeValue3)
