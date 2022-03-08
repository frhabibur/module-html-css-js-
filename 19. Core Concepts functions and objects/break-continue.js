// var i = 0;
// while (i < 10) {
//     console.log(i)
//     if (i == 3) {
//         break;
//     }
//     i++;
// }

// for (i = 0; i < 10; i++) {
//     console.log(i)
//     if (i == 5) {
//         break;
//     }
// }

var array = [1, 2, 3, 4, 5, 6, 7, 80, 90, 100];
// for (i = 0; i < array.length; i++) {
//     var arrayItems = array[i]
//     if (arrayItems == 80) {
//         console.log('80 breakpont')
//         break;

//     }
//     console.log(arrayItems);
// }


// continew
for (i = 0; i < array.length; i++) {
    var arrayItems = array[i];
    console.log(arrayItems)
    if (arrayItems == 80) {
        console.log("80 is coninew point")
        continue;
    }
}