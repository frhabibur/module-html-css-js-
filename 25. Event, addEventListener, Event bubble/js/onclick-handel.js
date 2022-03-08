function bgBlack() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white'
}
// violet btn
const violetBtn = document.getElementById('violet-btn');
violetBtn.onclick = violetBg
function violetBg() {
    document.body.style.backgroundColor = '#332211'
}

// blue bg 
const blueBtn = document.getElementById('blue-btn');
blueBtn.onclick = function blueBg() {
    document.body.style.backgroundColor = 'blue'
}

// golden bg
const goldenBtn = document.getElementById('golden-btn');
goldenBtn.addEventListener('click', goldenBg)
function goldenBg() {
    document.body.style.backgroundColor = 'Aqua'
}
// goldenBtn.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'Aquamarine'
// })


// direct event listener
document.getElementById('DeepPink-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'DeepPink'
})

