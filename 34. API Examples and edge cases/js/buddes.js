const loadData = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => showBuddy(data))
}
loadData()
const showBuddy = data => {
    const buddies = data.results;
    const buddyContainer = document.getElementById('buddy-container')
    for (const buddy of buddies) {
        // console.log(buddy)
        const img = document.createElement('img');
        // console.log(b)
        img.setAttribute('src', buddy.picture.thumbnail)
        buddyContainer.appendChild(img)
        const name = buddy.name;
        const p = document.createElement('p');
        p.innerHTML = `
        <h3> Name: ${name.title} ${name.first} ${name.last} </h3>
        <h5>Email: ${buddy.email}</h5>
        <p>Phone: ${buddy.phone}</p>
        <p>Location: ${buddy.location.city} ${buddy.location.state} ${buddy.location.postcode}</p>
        `
        buddyContainer.appendChild(p)

    }
}