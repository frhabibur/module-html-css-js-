function time() {
    console.log('Hi guys how are you all , i am from function')
}
setTimeout(() => {
    console.log('iam the second , but callsed after 5 second')
}, 5000)
console.log('i am first person')
setTimeout(time, 2000)

setTimeout(function () {
    console.log('i am called after 3 second')
}, 3000)
// time()
console.log('i am second person')
console.log('i am third person')
