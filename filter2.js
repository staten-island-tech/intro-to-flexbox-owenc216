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

/* function applyDiscount(list) {
  let total = 0;
  list.forEach((item) => {
    if (item.price < 5) {
      total += item.price * item.quantity * 0.95;
    } else {
      total += item.price * item.quantity;
    }
  });
  if (total > 100) {
    total = total * 0.9;
  }
  return total;
}
console.log(applyDiscount(cart)); */
const dnsRecords = [
  { address: "amazon.com", dns: "205.251.242.103" },
  { address: "apple.com", dns: "17.253.144.10" },
  { address: "bbc.com", dns: "151.101.64.81" },
  { address: "chat.openai.com", dns: "104.18.12.123" },
  { address: "cnn.com", dns: "151.101.1.67" },
  { address: "discord.com", dns: "162.159.137.232" },
  { address: "github.com", dns: "140.82.113.3" },
  { address: "google.com", dns: "142.250.72.14" },
  { address: "instagram.com", dns: "157.240.229.174" },
  { address: "microsoft.com", dns: "40.113.200.201" },
  { address: "netflix.com", dns: "52.41.250.12" },
  { address: "nasa.gov", dns: "198.49.245.141" },
  { address: "nytimes.com", dns: "151.101.1.164" },
  { address: "reddit.com", dns: "151.101.1.140" },
  { address: "roblox.com", dns: "128.116.114.3" },
  { address: "stanford.edu", dns: "171.67.215.200" },
  { address: "youtube.com", dns: "142.250.190.46" },
];

function findDns(list) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midAdress = records[mid].address;

    if (midAddress === target) {
      return records[mid].dns;
    } else if (midAdress > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return "DNS not found";
}
