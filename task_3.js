let carManufacturers = [];
let carManufacturersWithMoreVehicleTypes = [];

async function initTask3() {
    await fetchCarManufacturers();
    extractByVehicleTypes(3);
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

function extractByVehicleTypes(a) { // a = minimum amount of vehicle types 
    for (let i = 0; i < carManufacturers.Results.length; i++) {
        const carManufacturer = carManufacturers.Results[i];
        if (carManufacturer.VehicleTypes.length >= a) {
            carManufacturersWithMoreVehicleTypes.push(carManufacturer)
        }
    }
    console.log(carManufacturersWithMoreVehicleTypes);
}