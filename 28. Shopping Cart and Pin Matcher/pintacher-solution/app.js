function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }
    else {
        // console.log('letss value is', pin)
        return getPin()
    }
}
function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
}

// get button value 
document.getElementById('key-pad').addEventListener('click', function (e) {
    const calcInput = document.getElementById('typed-numbers');

    const number = e.target.innerText
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }

    }
    else {

        const previousNumber = calcInput.value
        const newNuber = previousNumber + number;
        calcInput.value = newNuber
    }


})



// maching pin 


function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const rightMessage = document.getElementById('right-message')
    const wrongMessage = document.getElementById('wrong-message')
    if (pin == typedNumber) {


        rightMessage.style.display = 'block'
        wrongMessage.style.display = 'none'
    }
    else {

        wrongMessage.style.display = 'block'
        rightMessage.style.display = 'none'
    }

}