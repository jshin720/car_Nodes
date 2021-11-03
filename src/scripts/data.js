



async function getData() {
  const carsInfo = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json')
  
}

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));