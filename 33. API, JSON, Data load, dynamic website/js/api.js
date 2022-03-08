function onLoad() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUser(json))
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}

function displayUser(data) {
    const ul = document.getElementById('user-list')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = `Id: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li)
    }
}