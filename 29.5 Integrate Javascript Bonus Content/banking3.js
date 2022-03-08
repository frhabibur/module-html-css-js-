
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
function updateBalance() {
    console.log(updateTotal('deposit-total', getInputValue('deposit-input')))
    const totalDepositAmount = updateTotal('deposit-total', getInputValue('deposit-input'))
    const totalWithdrawAmount = updateTotal('withdraw-total', getInputValue('withdraw-input'))


    // document.getElementById('balance-total').innerText = newBalance
    // return newBalance
    // console.log(depositTotal)

}
// events 
document.getElementById('deposit-button').addEventListener('click', function () {
    updateBalance()
    const inputAmount = getInputValue('deposit-input')
    const depositTotal = getInnerTextValue('deposit-total')
    // console.log('deposit', depositTotal)
    if (inputAmount > 0) {
        updateTotal('deposit-total', inputAmount)
        updateBalance(depositTotal, true)
    }

})
document.getElementById('withdraw-button').addEventListener('click', function () {

    const inputAmount = getInputValue('withdraw-input');
    const totalBalance = getInnerTextValue('balance-total')
    const widthdraswTotal = getInnerTextValue('withdraw-total')
    // console.log('withdraw', widthdraswTotal)
    if (inputAmount > 0 && inputAmount <= totalBalance) {
        updateTotal('withdraw-total', inputAmount)
        updateBalance(widthdraswTotal, false)
    }


})