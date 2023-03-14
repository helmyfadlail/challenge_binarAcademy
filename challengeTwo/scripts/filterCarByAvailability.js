function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available === true) {
      result.push(cars[i]);
    }
  }
  console.log(result);

  // Tulis code-mu disini

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
filterCarByAvailability([
  {
    name: "Honda",
    available: true,
  },
  {
    name: "Yamaha",
    available: false,
  },
  {
    name: "Suzuki",
    available: true,
  },
  {
    name: "Toyota",
    available: false,
  },
]);
