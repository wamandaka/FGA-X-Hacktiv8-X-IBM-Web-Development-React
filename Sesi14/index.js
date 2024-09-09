function capitalizer(str) {
  var carName = 'Volvo'
  return str.toUpperCase();
}

const capitalizerArrow = capitalizer('daka');

console.log(capitalizerArrow);

// console.log(carName);

// anonymouse function
const myFunc = function () {
  console.log('hello anonymouse function');
}

myFunc();


// arrow function
const myFuncArrow = () => {
  console.log('hello arrow function');
}

myFuncArrow();



// Chellange 2

const evaluatePassenger = (passenger) => {
  const { id, name, temperature, travelHistory } = passenger;
  
  const highRiskCountries = ['China', 'Japan', 'Korea', 'Singapore'];

  const hasVisitedHighRiskCountry = travelHistory.some(country =>
    highRiskCountries.includes(country)
  );

  let status;

  if (temperature > 35 && hasVisitedHighRiskCountry) {
    status = "Suspect";
  } else if (temperature <= 35 && hasVisitedHighRiskCountry) {
    status = "Potential Carrier";
  } else if (temperature > 35 && !hasVisitedHighRiskCountry) {
    status = "Sick";
  } else {
    status = "Healthy";
  }

  return `Passenger ${id} ${name} ${status}`;
};

// Contoh penggunaan
// contoh suspect
const passenger1 = {
  id: 50,
  name: 'Budi',
  temperature: 40,
  travelHistory: ['Russia', 'Japan']
};

// contoh potential carrier
const passenger2 = {
  id: 10,
  name: 'Tono',
  temperature: 40,
  travelHistory: ['Morocoo', 'France', 'Burma']
};

// contoh healthy
const passenger3 = {
  id: 15,
  name: 'Tsubasa',
  temperature: 30,
  travelHistory: ['Brazil']
};

// contoh sick
const passenger4 = {
  id: 104,
  name: 'Eren',
  temperature: 31.8,
  travelHistory: ['Japan']
};

console.log(evaluatePassenger(passenger1)); // Output: "Passenger 101 John Doe Suspect"
console.log(evaluatePassenger(passenger2)); // Output: "Passenger 102 Jane Smith Potential Carrier"
console.log(evaluatePassenger(passenger3)); // Output: "Passenger 103 Bob Johnson Healthy"
console.log(evaluatePassenger(passenger4)); // Output: "Passenger 104 Sarah Lee Sick"

