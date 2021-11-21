const fetch = require("cross-fetch"); //uso cross-fetch que me permite usar el fetch
const { Country } = require("./src/db");

//bajar todo de la api para la base de datos
async function saveInDatabase(country) {
  await Country.create({
    name: country.name.official,
    ID: country.cca3,
    flagImage: country.flags[1],
    continent: country.continents[0],
    capital: country.capital && country.capital[0],
    area: country.area,
    subregion: country.subregion,
    population_Size: country.population,
  });
}

const urlRC = "https://restcountries.com/v3/all";

  fetch(urlRC)
    .then((res) => res.json())
    .then((data) => {
      let i = 0;
      // 249 countries in the other api
      while (i < 249) {
        saveInDatabase(data[i]);
        i++;
      }
    })
    .catch((err) => console.log(err));

