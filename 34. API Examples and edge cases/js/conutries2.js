const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => showCountries(data))
}


const showCountries = countries => {
    const countriesContainer = document.getElementById('countries-container')
    for (const country of countries) {
        const countryName = country.name
        const div = document.createElement('div')

        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="countryByName(${country.capital})">Details</button>
            `
        // const h3 = document.createElement('h3')
        // const p = document.createElement('p')

        // h3.innerText = country.name
        // div.appendChild(h3)
        // p.innerText = country.capital
        // div.appendChild(p)
        div.classList.add('country-style')
        countriesContainer.appendChild(div)
    }

}

const countryByName = name => {
    console.log(name)
}