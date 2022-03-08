const back = () => {
    window.history.back()
    location.href = 'https://www.google.com/'
    console.log('back')
}
const forward = () => {
    window.history.forward()
    console.log('forward')
}