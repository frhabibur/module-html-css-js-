const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(respose => respose.json())
        .then(data => displayQtote(data))
}
// loadQuote()

const displayQtote = quote => {
    const quoteDiv = document.getElementById('quote');
    quoteDiv.innerText = quote.quote
}