const addToStorage = () => {
    const inputId = document.getElementById('storage-Id')
    const id = inputId.value;
    const inputValue = document.getElementById('storage-Value')
    const value = inputValue.value;
    localStorage.setItem(id, value);


    // add an array  
    const myFriends = ['rahim', 'karim', 'ratul', 'badsha']
    // localStorage.setItem('myFriends', myFriends)
    // add an object 


    const myPhone = { model: 'redmi7', brand: 'redmi', price: 12000, ram: '2gb' }
    const phoneStringified = JSON.stringify(myPhone)
    localStorage.setItem('myPhone', phoneStringified)

    // read data from localStorage  

    const getPhone = localStorage.getItem('myPhone')
    const phoneObj = JSON.parse(getPhone)
    console.log(phoneObj)


}