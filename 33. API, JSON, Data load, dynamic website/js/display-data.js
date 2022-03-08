function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userDisplay(data))

}
document.getElementById('click-button').addEventListener('click', loadData)
function userDisplay(data) {
    const ul = document.getElementById('user-list')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li)
    }
}