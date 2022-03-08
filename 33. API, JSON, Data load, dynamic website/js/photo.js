function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(Response => Response.json())
        .then(data => showImage(data))
}
loadPhoto()
function showImage(images) {
    const imageBox = document.getElementById('image-box');
    for (const image of images) {
        const img = document.createElement('img');
        img.setAttribute('src', image.url)
        img.classList.add('img-fluid');
        img.classList.add('col-md-3')
        img.classList.add('col-sm-6')
        img.classList.add('g-3')
        img.classList.add('shadow')
        imageBox.appendChild(img)
    }
}