function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const amountValue = parseFloat(inputText);
    inputId.value = ""
    return amountValue;
}
function updateTotalField(totalFieldId, depositAmount) {
    debugger;
    const depositTotal = document.getElementById(totalFieldId);
    const depositTotalText = depositTotal.innerText;
    const previeousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previeousDepositTotal + depositAmount

}
document.getElementById('deposit-button').addEventListener('click', function () {
    // get current deposit
    const depositAmount = getInputValue('deposit-input')

    // // const depositTotal = document.getElementById('deposit-total');
    // // const depositTotalText = depositTotal.innerText;
    // // const previeousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previeousDepositTotal + depositAmount
    updateTotalField('deposit-total', depositAmount)
    // update balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previeousBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previeousBalanceTotal + depositAmount;

})

// handel withdraw button 

document.getElementById('withdraw-button').addEventListener("click", function () {
    const withdrawAmount = getInputValue('withdraw-input')

    // // get current withdraw 
    // // const withdrawTotal = document.getElementById('widthdraw-total');
    // // const withdrawTotalText = withdrawTotal.innerText;
    // // const previeouswithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previeouswithdrawTotal + withdrawAmount
    updateTotalField('widthdraw-total', withdrawAmount)
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previeousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previeousBalanceTotal - withdrawAmount

    // clear depoist input 

})