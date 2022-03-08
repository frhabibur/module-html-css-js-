function getInputValue(inputFieldId) {
    const inputId = document.getElementById(inputFieldId);
    const inputIdText = inputId.value;
    const inputIdValue = parseFloat(inputIdText);
    inputId.value = ''
    return inputIdValue
}
function getInnerTextValue(fieldId) {

    const fieldTag = document.getElementById(fieldId);
    const fieldTagText = fieldTag.innerText
    const value = parseFloat(fieldTagText)
    return value
}
function updateTotal(totalPlace, amount) {
    // const totalId = document.getElementById(totalPlace);
    // const totalIdText = totalId.innerText;
    // const previousTotal = parseFloat(totalIdText);
    const previousTotal = getInnerTextValue(totalPlace)
    const newTotal = previousTotal + amount
    document.getElementById(totalPlace).innerText = newTotal
}

function updateBalance(amount, isadding) {
    // const balanceId = document.getElementById('balance-total');
    // const balanceIdText = balanceId.innerText;
    // const previousBalance = parseFloat(balanceIdText);
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isadding) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;


}
// handel deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input')

    if (amount > 0) {
        updateTotal('deposit-total', amount)
        updateBalance(amount, true)
    }

})

// handel withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount)
        updateBalance(amount, false)
    }
})
