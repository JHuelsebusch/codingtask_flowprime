let carManufacturers = [];

function initTask3() {
    fetchCarManufacturers();
}

async function fetchCarManufacturers() {
    let url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
    carManufacturers = await fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('No data found');
    });
    console.log(carManufacturers)
}