const depositInput = document.getElementById('deposit-input')
const depositButton = document.getElementById('deposit-button')
const withdrawInput = document.getElementById('withdraw-input')
const withdrawButton = document.getElementById('withdraw-button')
const depositTotal = document.getElementById('deposit-total')
const withdrawTotal = document.getElementById('withdraw-total')
const balanceTotal = document.getElementById('balance-total')

// deposit event handelar
depositButton.addEventListener("click", function () {
    let depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText)
    const depositTotalText = depositTotal.innerText;
    let depositTotalAmout = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmout + depositInputAmount
    //    update balance 
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositInputAmount

})
// withdraw event handelar
withdrawButton.addEventListener("click", function () {
    let withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText)
    const withdrawTotalText = withdrawTotal.innerText;
    let withdrawTotalAmout = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmout + withdrawInputAmount


    //    update balance 
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount
}) 