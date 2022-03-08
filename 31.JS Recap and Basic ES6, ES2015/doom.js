document.getElementById('add-border').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.border = '2px solid yellow'
})

function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'skyblue'
    }

}
document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    const friendDiv = document.createElement('div')
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
   <h2 class="friend-name">newFirend</h2>
   Lorem, ipsum.
   `;
    friendContainer.appendChild(friendDiv)

})