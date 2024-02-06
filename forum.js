// an array of freelancers to start with
const freelancers = [
  {name: 'Alice', price: 30, occupation: 'writer'},
  {name: 'Bob', price: 50, occupation: 'teacher'},
  {name: 'Carol', price: 70, occupation: 'programmer'}
]
// arrays of names and occupations to generate new random freelancers
const nameOptions = ['David', 'Courtney', 'Matthew', 'Lisa', 'Jennifer', 'Matty']
const occupationOptions = ['paleantologist', 'trandspondster', 'masage therapist', 'actor', 'chef', 'barista']


// function to render all the freelancers
function renderFreelancers(){
  // select the freelancersList div by id
  const freelancersList = document.getElementById("freelancersList")
  // create the new table to be displayed in the browser
  const table = document.createElement('table')
  // add a header row to the table
  const headerRow = document.createElement('tr')
  // by using innerHTML instead of textContent, we can add more complex HTML to the body instead of plain strings
  headerRow.innerHTML = `<th>Name</th>
  <th>Occupation</th>
  <th>Starting Price</th>`
  table.append(headerRow)
  freelancers.forEach(freelancer => {
    const tableRow = document.createElement('tr')
    tableRow.innerHTML = `<td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>${freelancer.price}</td>`
    table.append(tableRow)
  })
  // replace the existing contents of the freelancers list with our new table
  freelancersList.replaceChildren(table)
}

// function to calculate and render the average
// renderAverage should:
function renderAverage(){
  // select the averagePrice div
  const averageDiv = document.getElementById("averagePrice")
// calculate the average
// the .reduce() method below is summing the prices
  const average = freelancers.reduce((total, current) => total+current.price, 0)/freelancers.length
// update the averagePrice div to display the new calculated average
  averageDiv.textContent = `$${average.toFixed(2)}`
}


// function to add a new freelancer to the list (should also call the renderFreelancers and renderAverage functions)
// addNewFreelancer should:
function addNewFreelancer(){
// select a name and occupation at random from the arrays at the top
  const randomNameIndex = Math.floor(Math.random()*nameOptions.length)
  const randomOccupationIndex = Math.floor(Math.random()*occupationOptions.length)
// generate a random hourly rate (between 30 and 100)
  const randomPrice = Math.floor(Math.random()*70)+30
// add the new random freelancer to the array
  freelancers.push({
    name: nameOptions[randomNameIndex],
    occupation: occupationOptions[randomOccupationIndex],
    price: randomPrice
  })
// call the renderFreelancers and renderAverage functions to re-render with the new data
  renderFreelancers()
  renderAverage()
}

// call our render functions initially for a first render
renderFreelancers()
renderAverage()
// generate new random freelancers at a pre-set interval
setInterval(addNewFreelancer, 1000)