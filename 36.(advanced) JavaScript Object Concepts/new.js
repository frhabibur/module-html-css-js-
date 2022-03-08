const load = () => {
    fetch('https://api.jumpseller.com/v1/products.json')
        .then(res => res.json())
        .then(json => console.log(json))

}
load()
console.log('hello world') //?