const image = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg'

]
let imageIndex = 0
const slider = document.getElementById('slider-img')
const changeImg = (direction) => {
    if (direction === 'next') {
        imageIndex++;
    }
    else {
        imageIndex--;
    }
    const imgSrc = image[imageIndex]
    slider.setAttribute('src', imgSrc)

}