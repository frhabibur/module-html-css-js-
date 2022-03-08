const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleand: true,
    value: null,
}

// console.log(bottle['color'])
// for(i =0 i<10; i++) //Regular
// for(const element of array) // for array
// for(const element in object) // for object


// 1. using for in loop /
for (const properties in bottle) {
    // console.log(typeof properties, typeof bottle[properties])
    // console.log(properties, bottle[properties])
}

// 2.using Onject.key and forloop /
const keys = Object.keys(bottle)
for (const key of keys) {
    // console.log(key, bottle[key])
}


// 3. using for loop /
for (const [property, value] of Object.entries(bottle)) {
    console.log(property, value)
}



