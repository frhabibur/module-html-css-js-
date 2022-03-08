var myPhone = {
    brand: 'xioami',
    price: 12000,
    storage: "16gb",
    ram: '2gb',
    color: 'blue'
}
// console.log(myPhone)
// first way to get and set value


// console.log(myPhone.price);
// var phonePrice = myPhone.price;
// myPhone.price = 15000;
// console.log(myPhone)





// second way to  get and set velue

var phoneBrand = myPhone['brand']
// console.log(myPhone['brand']);
// console.log(phoneBrand)


// third way to get and set value
// myPhone['ram'] = '5gb';
var phoneRam = 'ram'
myPhone[phoneRam] = '10gb'
console.log(myPhone)