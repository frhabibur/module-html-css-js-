function reverce(text) {
    let reverceCharecter = '';
    for (let charecter of text) {
        reverceCharecter = charecter + reverceCharecter
    }
    return reverceCharecter
}
const text = 'Programming hero';
const reverceText = reverce(text);
console.log(reverceText)
