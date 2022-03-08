// handel deposit button handel event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amout of deposit
    let depositInput = document.getElementById('deposit-input')
    let newDepositText = depositInput.value
    let newDepositAmount = parseInt(newDepositText)
    // console.log(depositAmount)

    let depositTotal = document.getElementById('deposit-total');
    const previewsDepositText = depositTotal.innerText;
    const previewsDepositTotal = parseInt(previewsDepositText);
    const newDepositTotal = previewsDepositTotal + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // updae balance
    const balanceTotal = document.getElementById('balance-total');
    const previewsBalanceText = balanceTotal.innerText;
    const previewsBalanceTotal = parseInt(previewsBalanceText);
    console.log(previewsBalanceTotal)
    const newBalanceTotal = previewsBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear depoist input field
    depositInput.value = ""
})

// withdraw button handle
document.getElementById('withdraw-button').addEventListener("click", function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmout = parseInt(newWithdrawText)

    // withdraw amount
    const widthdrawTotal = document.getElementById('widthdraw-total');
    const widthdrawTotalText = widthdrawTotal.innerText;
    const previewsWidthdrawTotal = parseInt(widthdrawTotalText)
    const newWithdrawTotal = previewsWidthdrawTotal + newWithdrawAmout;
    widthdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previewsBalanceText = balanceTotal.innerText;
    const previewsBalanceTotal = parseInt(previewsBalanceText);
    console.log(previewsBalanceTotal)
    const newBalanceTotal = previewsBalanceTotal - newWithdrawAmout;
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';
})