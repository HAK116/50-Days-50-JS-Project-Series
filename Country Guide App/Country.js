//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen
let userInput = document.querySelector('.container .search-box input');
let infoBox = document.querySelector('.container .info-box');

let getCountryDetails = (country) => {
        let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
        fetch(url).then(res => res.json()).then(data => {
                infoBox.innerHTML = `<div class="country-flag-name">
                           <div class="image">
                             <img src="${data[0].flags.svg}" alt="">   
                           </div>
                           <h3 class="country-name">${data[0].name.common}</h3>
                       </div>
                       <div class="other-info">
                         <h5>Capital: <span>${data[0].capital}</span></h5>
                         <h5>Continent: <span>${data[0].continents}</span></h5>
                         <h5>Population: <span>${data[0].population}</span></h5>
                         <h5>Currency: <span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name} (${data[0].currencies[Object.keys(data[0].currencies)].symbol})</span></h5>
                         <h5>Common Languages: <span>${Object.values(data[0].languages).join(",")}</span></h5>
                       </div>`;
                console.log(data)
        }).catch(() => {
                infoBox.innerHTML = '<h3 class="invalid-name-message">Please enter valid country name! </h3>'
        });
};

userInput.addEventListener('keyup', (e) => {
        if (e.key == "Enter" && userInput.value != '') {
                getCountryDetails(userInput.value);
        }
});

getCountryDetails('India');
