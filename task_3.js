let carManufacturers = [];

function initTask3() {
    fetchCarManufacturers();
}

async function fetchCarManufacturers() {
    let url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
    let response = await fetch(url);
    carManufacturers = await response.json();
    console.log(carManufacturers)
}