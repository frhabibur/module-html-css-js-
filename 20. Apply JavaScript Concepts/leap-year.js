// function isLeapYear(year) {
//     if ((year % 4 == 0) && (year % 400 == 0) && (year % 100 != 0)) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// var myYear = 2000;
// var ItIsLeapYear = isLeapYear(myYear);
// console.log(ItIsLeapYear);


function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
var myYear = 2136;
var itLeapYear = checkLeapYear(myYear);
