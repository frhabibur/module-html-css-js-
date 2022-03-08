// You have a home work please watch the video again 
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    input.value = ''
    return inputValue
}
function getInnerTextValue(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldIdText = field.innerText;
    const fieldValue = parseFloat(fieldIdText);
    return fieldValue;
}
function updateTotal(totalId, inputAmount) {
    const previousTotal = getInnerTextValue(totalId);
    const newTotal = previousTotal + inputAmount;
    document.getElementById(totalId).innerText = newTotal
}
function updateBalance(inputAmount, isadding) {
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isadding) {
        newBalance = previousBalance + inputAmount
    }
    else {
        newBalance = previousBalance - inputAmount

    }
    document.getElementById('balance-total').innerText = newBalance
    return newBalance

}
document.getElementById('deposit-button').addEventListener('click', function () {
    const inputAmount = getInputValue('deposit-input')
    if (inputAmount > 0) {
        updateTotal('deposit-total', inputAmount)
        updateBalance(inputAmount, true)
    }

})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputAmount = getInputValue('withdraw-input');
    const totalBalance = getInnerTextValue('balance-total')
    if (inputAmount > 0 && inputAmount <= totalBalance) {
        updateTotal('withdraw-total', inputAmount)
        updateBalance(inputAmount, false)
    }


})