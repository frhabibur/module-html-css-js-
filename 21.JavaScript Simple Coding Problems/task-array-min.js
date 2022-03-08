function getMin(ages) {
    let minAge = ages[0];
    for (i = 0; i < ages.length; i++) {
        let ageValue = ages[i];
        if (minAge > ageValue) {
            minAge = ageValue;
        }

    }
    return minAge;
}
var ages = [23, -33, 31, 11, 52, 1];
const lowestAge = getMin(ages);
console.log(lowestAge)

