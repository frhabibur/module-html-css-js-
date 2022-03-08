function updateProductNumber(product, price, isIncrising) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value
    if (isIncrising == true) {
        productNumber = parseInt(productNumber) + 1;

    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price
    getCalculateTotal()

}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber
}
function getCalculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal;
    // tax 
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // update subtotal 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;

}

// phone incrise decrise 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})


// case incrise decrise 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
})
// case incrise decrise 
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})

// case minus handeler


getCalculateTotal()