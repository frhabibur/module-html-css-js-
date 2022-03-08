function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))


}
loadPost()
function displayPost(posts) {
    const postContainer = document.getElementById('post')
    for (const post of posts) {
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}

