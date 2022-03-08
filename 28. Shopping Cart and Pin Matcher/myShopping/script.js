function updateProductNumber(product, price, isIncrising) {

    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrising == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = parseInt(productNumber);
    const productTotalInput = document.getElementById(product + '-total');
    productTotalInput.innerText = productNumber * price;

    // get and subtotal 



}

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)


})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})
