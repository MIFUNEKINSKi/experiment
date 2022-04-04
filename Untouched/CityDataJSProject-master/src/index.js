import Data from "./scripts/data";
import Map from "./scripts/map";


document.addEventListener("DOMContentLoaded", () => {
  new Map();
  new Data.countryComparison();
  const fullDataset = organizeData();
  renderMap(fullDataset);
  renderChart("create", fullDataset[2018]["United States"]);
  stateYearlyChart("create", "United States");
});
// need a city class that will take in input from user and query the api for that city
// globe class
// tooltip class.

d3.select('h1').style('color','red');


function myFunction(city) {
const getData = async () => {
  const data = [];

  const f1_data = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/scores/`)
    .then(response => response.json())
    .then(data => data.teleport_city_score);
    data.push(f1_data)

  console.log(data);
};

getData();
}

// teleport_city_score
// categories[0].name
// score_out_of_10
