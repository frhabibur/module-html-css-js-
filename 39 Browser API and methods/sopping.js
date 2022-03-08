const displayLocalStorageCart = () => {
    const cart = getCart()
    for (const name in cart) {
        displayProduct(name)
    }
}
const addItem = () => {
    const name = document.getElementById('product-name').value;
    if (!name) {
        return;
    }
    displayProduct(name)
    addProductToCart(name)

}
const displayProduct = name => {
    const products = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = name
    products.appendChild(li)
}
const getCart = () => {
    let cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {}
    }
    return cartObj;
}
const addProductToCart = (name) => {
    const cart = getCart()
    if (cart[name]) {
        cart[name] += 1;
    }
    else {
        cart[name] = 1
    }

    const cartStringfied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfied)

}
displayLocalStorageCart()

const placeOrder = () => {
    document.getElementById('products').innerText = ''
    localStorage.removeItem('cart')
}