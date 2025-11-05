/* const books = [
  {
    title: "The Hidden Forest",
    author: "Ava Green",
    genre: "Fantasy",
    year: 2018,
  },
  {
    title: "Code Runner",
    author: "Liam Sparks",
    genre: "Science Fiction",
    year: 2021,
  },
  {
    title: "Echoes of Time",
    author: "Nora Quinn",
    genre: "Historical Fiction",
    year: 2015,
  },
  {
    title: "The Quantum Key",
    author: "Ethan Blake",
    genre: "Thriller",
    year: 2022,
  },
  {
    title: "Hearts in Bloom",
    author: "Sophie Wells",
    genre: "Romance",
    year: 2017,
  },
  {
    title: "The Last Outpost",
    author: "Jackson Cole",
    genre: "Adventure",
    year: 2020,
  },
  {
    title: "Shadows of the Mind",
    author: "Olivia Frost",
    genre: "Mystery",
    year: 2019,
  },
  {
    title: "Digital Dreams",
    author: "Leo Hart",
    genre: "Cyberpunk",
    year: 2023,
  },
  {
    title: "Cooking with Fire",
    author: "Grace Turner",
    genre: "Non-Fiction",
    year: 2016,
  },
  { title: "Into the Stars", author: "Maya Lin", genre: "Sci-Fi", year: 2024 },
];

function filterByGenre(genre) {
  let display = document.querySelector("#card-display");
  display.innerHTML = "";
  const filteredBooks = books.filter();
}
filterByGenre("Mystery");
 */

const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 },
];
function applyDiscount(list) {
  let total = [];
  list.forEach((item) => {
    if (item.price < 5) {
      total += item.price * item.quantity * 0.95;
    } else {
      total += item.price * item.quantity;
    }
  });
  if (total > 100) {
    total += total * 0.9;
  }
  return total;
}
console.log(cartCount);
