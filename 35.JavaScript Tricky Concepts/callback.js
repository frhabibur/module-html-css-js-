function wellcomeMessage(name, greetHandler) {
    greetHandler(name)

}
function greetmorning(name) {
    console.log('Good morning', name)
}
function goodAterNoon(name) {
    console.log('Good morning', name)
}
wellcomeMessage('Habibur', greetmorning)
wellcomeMessage('sakil', goodAterNoon)

function buttonEvent() {
    console.log('button clickd')
}
document.getElementById('button').addEventListener('click', buttonEvent)
document.getElementById('button').addEventListener('click', function () {
    console.log('hello')
})