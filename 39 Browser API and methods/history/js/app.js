// get input value and some eror handaling 
const search = (quantity, searchNo) => {
    document.getElementById('spiner').style.display = 'block';
    if (searchNo === 1) {
        document.getElementById('search-item-container').innerHTML = ''
        document.getElementById('detailsRow').innerHTML = ''
        document.getElementById('detailsRow').style.display = 'none'
        document.getElementById('see-more').style.display = 'none'
        document.getElementById('see-more').removeAttribute('disabled')
        document.getElementById('detailsRow').innerHTML = ''
    }
    if (searchNo === 2) {
        document.getElementById('see-more').setAttribute('disabled', true)

    }
    else if (document.getElementById('search-input').value === '') {
        document.getElementById('error-messege').style.display = "block"
        document.getElementById('spiner').style.display = 'none';

        return false
    }
    else if (document.getElementById('search-input').value !== '') {
        document.getElementById('error-messege').style.display = "none"

    }



    else {

    }
    // fetching api and get data  
    const searchItemContainer = document.getElementById('search-item-container')
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status !== false) {
                const first20 = data.data.slice(0, quantity)
                showSearch(first20)
                document.getElementById('spiner').style.display = 'none';
            }
            else {
                document.getElementById('error-messege').style.display = 'block'
                document.getElementById('spiner').style.display = 'none';
            }


        })


}
// show searchs result  
const showSearch = phones => {
    const searchItemContainer = document.getElementById('search-item-container')
    for (const phone of phones) {
        document.getElementById('error-messege').style.display = 'none'
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `  
            <div class="card shadow p-3 border-0">
                <img src="${phone.image}" class="card-img-top img-fluid w-50 mx-auto mb-2 phone-image" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <h6 class="text-warning "> ${phone.brand}</h6>
                   
                        <button onClick="getDetails('${phone.slug}')" class="btn btn-outline-success btn-sm my-2"><a href="#container">Details</a></button>
                </div>
            </div>   
           
           `
        searchItemContainer.appendChild(div)
        document.getElementById("see-more").style.display = 'block'

    }

}

// show details 
const getDetails = (id) => {
    document.body.scroll = 0;
    document.getElementById('detailsRow').style.display = 'flex'
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(response => response.json())
        .then(data => showDetails(data.data))
}
// show detals image and basic features in table 
const showDetails = (data) => {
    const detailsRow = document.getElementById('detailsRow')
    detailsRow.classList.add('shadow')
    detailsRow.innerHTML = `
    <div class="col-md-6 d-flex justify-content-center">
        <img id="details-image" src="${data.image}" class="" alt="">
    </div>
    <div class="col-md-6">
        <h3 class="text-center mt-2">${data.name}</h3>
        <table class="table table-bordered">
            <tr>
                <td>Model </td>
                <td>${data.name}</td>
            </tr>
            <tr>
                <td>Brand </td>
                <td>${data.brand}</td>
            </tr>
            <tr>
                <td>Id </td>
                <td>${data.slug}</td>
            </tr>
            <tr>
                <td>Storage </td>
                <td>${data.mainFeatures.storage}</td>
            </tr>
            <tr>
                <td>Display </td>
                <td>${data.mainFeatures.displaySize}</td>
            </tr>
            <tr>
                <td>ChipSet </td>
                <td>${data.mainFeatures.chipSet}</td>
            </tr>
            <tr>
                <td>Memory </td>
                <td>${data.mainFeatures.memory}</td>
            </tr>
            <tr>
                <td>ReleaseDate </td>
                <td id="release-date">${data.releaseDate}</td>
            </tr>
        </table>
        <h4 class="text-center my-3">Sensors </h4>
        <ul id="sensor-conteiner">
            
        </ul>
       
        <ul id="others-container">
        
        </ul>
    `;
    // get release and show release data  
    if (data.releaseDate === '') {
        const releaseDate = document.getElementById('release-date')
        releaseDate.innerText = 'resease data not found'
    }
    // get and show sersors  
    const sensorContainer = document.getElementById('sensor-conteiner')
    for (const sensor of data?.mainFeatures.sensors) {
        const li = document.createElement('li')
        li.innerText = sensor
        sensorContainer.appendChild(li)

    }

    // create other header  
    const othersContainer = document.getElementById('others-container')
    if (data.others) {
        const div = document.createElement('div')
        div.innerHTML = `
         <h4 class="text-center my-3">others </h4>
         `
        othersContainer.appendChild(div)
    }

    // get and show Others Components  
    for (const property in data?.others) {
        const otherCompontnts = (`${property}: ${data.others[property]}`)
        const li = document.createElement('li')
        li.innerText = otherCompontnts
        othersContainer.appendChild(li)

    }

}
