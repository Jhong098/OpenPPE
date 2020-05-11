const NAMES = [
  "Mask,N95 Masks",
  "Ventilator,Ventilator",
  "Mask,Face Shield",
  "Surgical,Gloves",
  "Surgical,Gown",
];
const SIZES = ["S", "M", "L"];
const REQUESTOR = ["Test"];
const LOCATIONS = [
  "600 University Avenue, Toronto",
  "5141 Broadway New York NY 10034",
  "622 West 168th Street New York NY 10032",
  "525 East 68th Street, 6th Floor New York NY 10065",
];
const STATUS = ["open", "claimed", "canceled"];

const getRandomEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generate = (n) => {
  let requests = [];
  for (let i = 0; i < n; i++) {
    const nameSplit = getRandomEl(NAMES).split(",");
    const location = getRandomEl(LOCATIONS);
    const size = getRandomEl(SIZES);
    const status = getRandomEl(STATUS);

    requests.push({
      name: nameSplit[1],
      requestor: "Test",
      location: location,
      category: nameSplit[0],
      size: size,
      quantity: Math.floor(Math.random() * 100) + 25,
      unit_cost: Math.floor(Math.random() * (1000 - 100) + 100) / 100,
      requested_at: new Date(),
      status: status,
    });
  }
  return requests;
};

console.log(JSON.stringify(generate(10)));
