function setPlayerStyle(player) {
    player.style.border = '2px solid goldenrod'
    player.style.padding = '15px';
    player.style.margin = '10px';
    player.style.borderRadius = '10px'
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player)

}
function addPlayer() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player')
    player.innerHTML = `
    <div class="player-name">
    <h2>player 1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem pariatur repellendus incidunt
        temporibus nemo libero tempora est, assumenda odio architecto ratione in ipsam fuga necessitatibus
        voluptatibus. Modi suscipit, optio quaerat repellat neque laboriosam perferendis? Ea quidem
        consequuntur reprehenderit nisi commodi nemo nesciunt dolores repudiandae itaque qui. Unde libero
        est ullam!</p>
    </div>
    `
    playerContainer.appendChild(player)
    setPlayerStyle(player)
    player.addEventListener('click', function () {
        player.style.backgroundColor = 'yellow'
    })
    // console.log(player)

}

// event bubble 
document.getElementById('players').addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() == 'div') {
        e.target.style.backgroundColor = 'yellow'

    }
    else {
        e.target.parentNode.style.backgroundColor = 'yellow'
        console.log(e.target.parentNode)
    }
})