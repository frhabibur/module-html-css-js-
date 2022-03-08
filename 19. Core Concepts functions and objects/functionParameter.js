function byeBook() {
    console.log("I have", inPocket, "Taka");
    console.log("1 Pics book price 100 taka");
    var bookQuantity = inPocket / 100;
    // console.log(bookQuantity)
    return inPocket;

}
var inPocket = 300;
byeBook(inPocket);