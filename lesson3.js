//const students = ["Charlie", "Olivia", "Rodney", "Bill", "London"];

/* function printAll(list) {
  for (let i = 0; i < students.length; i++) {
    console.log(list[i]);
  }
}
printAll(students);
function add1(a, b) {
  return a + b;
}

console.log(add1(3, 4));
const add2 = (a, b) => {
  return a + b;
};

console.log(add2(3, 4));

students.forEach((student) => console.log(student));
 */

/* const found = students.find((student) => student == "Olivia");
console.log(found); */
/* numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbs.filter((el) => el % 2 == 0);
console.log(even);
 */

//While Loops
/* let number = 5;

while (number > 0) {
  console.log("Countdown: " + number);
  number--; // subtract 1 each time
}
console.log("Blast off!");

let answer = "";
while (answer !== "yes") {
  answer = prompt("Do you want to play? (type yes to start)");
}
console.log("Game starting...");
//challenge get GCF
//get max of a set of numbers
// get factorials of a number
function getGCF(x, y) {
  let num = Math.min(x, y);
  let factor = 0;
  for (let i = 2; i < num; i++) {
    if (x % i === 0 && y % i === 0) {
      factor = i;
    }
  }
  return factor;
}
console.log(getGCF(12, 15)); */

/* const sentence =
  "The red cat sat on the mat. Why are you so sad cat? Don't ask that.";
function lang(sentence) {
  let s = 0;
  let t = 0;
  for (let i = 0; i < sentence.length, i++) {
    if(sentence[i] === "S" || sentence[i] === "s"){
      s++;
    } else if (sentence[i] === "T" || sentence[i] === "t"){
      t++;
    }
  }
  if (s >= t) {
    console.log("french")
  } else {
    console.log("english")
  }
}
lang(sentence); */

/* const day1 = "CC..C";
const day2 = ".CC..";

function occupied(day1, day2) {
  let space = [0];
  for (let i = 0; i < day1.length; i++) {
    if (day1[i] === "C" && day2[i] === "C") {
      space.push(i);
    }
  }
  if (space.length > 0) {
    console.log(space.length + " space occupied for both days");
  } else {
    console.log("no space occupied for both days");
  }
}
occupied(day1, day2);
 */

/* function occupied(y,t) {
  for (let i = 0; i < y.length; i++) {
    console.log(y[i], t[i]);
    if (y[i] === "c" && t[i] === "c")
  }
}
occupied("CCC...", "CCCC.C") */
/* const me = {
  firstName: "Owen",
  lastName: "Chen",
};

console.log(me.lastName);
 */
/* guys = ["A", "B", "C", "D", "E"];
function dueling(list) {}
 */
/* const books = [
  {
    title: "The Silent Forest",
    author: "Emily Harper",
    year: 2015,
    genre: "Fiction",
    price: 12.99,
    stock: 8,
  },
  {
    title: "Digital Dreams",
    author: "Michael Chen",
    year: 2019,
    genre: "Science Fiction",
    price: 15.5,
    stock: 12,
  },
  {
    title: "Cooking with Love",
    author: "Sophia Martinez",
    year: 2020,
    genre: "Cooking",
    price: 22.0,
    stock: 5,
  },
  {
    title: "History of Time",
    author: "Dr. Alan Stone",
    year: 2010,
    genre: "History",
    price: 18.75,
    stock: 7,
  },
  {
    title: "Ocean Tales",
    author: "Liam Carter",
    year: 2018,
    genre: "Adventure",
    price: 11.99,
    stock: 14,
  },
  {
    title: "Mind Over Matter",
    author: "Rachel Kim",
    year: 2021,
    genre: "Self-Help",
    price: 14.25,
    stock: 9,
  },
  {
    title: "The Last Kingdom",
    author: "David Johnson",
    year: 2013,
    genre: "Fantasy",
    price: 16.4,
    stock: 10,
  },
  {
    title: "Code Masters",
    author: "Olivia Brown",
    year: 2022,
    genre: "Technology",
    price: 25.0,
    stock: 6,
  },
  {
    title: "Poetry of Stars",
    author: "Noah Wilson",
    year: 2017,
    genre: "Poetry",
    price: 9.99,
    stock: 20,
  },
  {
    title: "Secrets of the Mind",
    author: "Hannah Lee",
    year: 2016,
    genre: "Psychology",
    price: 19.99,
    stock: 11,
  },
  {
    title: "Into the Desert",
    author: "Ethan White",
    year: 2014,
    genre: "Adventure",
    price: 13.5,
    stock: 13,
  },
  {
    title: "World of Wonders",
    author: "Charlotte Green",
    year: 2023,
    genre: "Science",
    price: 27.8,
    stock: 4,
  },
  {
    title: "Legends Untold",
    author: "Daniel Wright",
    year: 2011,
    genre: "Fantasy",
    price: 15.2,
    stock: 8,
  },
  {
    title: "Journey to Space",
    author: "Amelia Young",
    year: 2020,
    genre: "Science Fiction",
    price: 21.0,
    stock: 7,
  },
  {
    title: "Life Lessons",
    author: "Benjamin Scott",
    year: 2019,
    genre: "Non-Fiction",
    price: 17.25,
    stock: 15,
  },
  {
    title: "Garden Magic",
    author: "Isabella Adams",
    year: 2012,
    genre: "Lifestyle",
    price: 12.0,
    stock: 9,
  },
  {
    title: "Haunted Nights",
    author: "Lucas King",
    year: 2021,
    genre: "Horror",
    price: 14.99,
    stock: 8,
  },
  {
    title: "Music of the Soul",
    author: "Grace Baker",
    year: 2017,
    genre: "Music",
    price: 23.5,
    stock: 6,
  },
  {
    title: "Ancient Civilizations",
    author: "Christopher Hall",
    year: 2010,
    genre: "History",
    price: 20.75,
    stock: 10,
  },
  {
    title: "Bright Futures",
    author: "Natalie Moore",
    year: 2022,
    genre: "Education",
    price: 18.0,
    stock: 12,
  },
];
 */
/* books.forEach((title) => {
  console.log(title.title);
});
 */
/* books
.filter((book) => book.year <2020)
.forEach((book) => console.log(book.title)) */
const btn = document.querySelector(".btn");
//console.log(btn);

//console.log(event, event.target);
function getRGB() {
  const box = document.querySelector(".box");
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  /*     document
      .querySelector(".container"); 
      .insertAdjacentHTML("afterbegin", `<h1></h1>`); */
  document.querySelector("h1").textContent;
}
btn.addEventListener("click", getRGB);
