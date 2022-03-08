const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = countries => {
    const contriesContainer = document.getElementById('contries-container');
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('countries')
        // const text = 'hello'
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;

        contriesContainer.appendChild(div)

    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
        .then(respose => respose.json())
        .then(data => displayCountryDetail(data[0]))
    // console.log(url)

    // console.log(name)
}
const displayCountryDetail = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
        <h4>${country.name}</h4>
        <img width="200px"src="${country.flags.png}">

    `
}