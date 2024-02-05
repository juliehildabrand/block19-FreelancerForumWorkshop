const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let averagePrice = 0;
//create an averagePrice function that tells the code to display the average price of all listed prices in the table under Available Freelancers

function render(){
  const root = document.getElementById("root");
  const h1 = document.createElement("h1");
  h1.textContent = "Freelancer Forum";
  const average = document.createElement("p");
  average.textContent = `The average starting price is ${averagePrice}`;
  const h2 = document.createElement("h2");
  h2.textContent = "Available Freelancers";
  const freelancersList = document.createElement("p")
  freelancers.forEach(freelancer => {
    const f1 = document.createElement("li");
    f1.textContent = `${freelancer.name} ${freelancer.price} ${freelancer.occupation}`;
    freelancersList.append(f1);
  })
  root.append(h1, average, h2);
}

render()

//create a p function for each freelancer with li elements below listing their occupation and starting price

//