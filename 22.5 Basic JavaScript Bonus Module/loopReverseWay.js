function consoleNumber(i) {
    if (i > 10) {
        return;
    }
    console.log(i)
    consoleNumber(++i)

}
consoleNumber(1)