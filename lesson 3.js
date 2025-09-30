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

const day1 = "CC..C"
const day2 = ".CC.."

function occupied(day1, day2) {
  let space = {0}
  for (let i = 0; i < day1.length; i++) {
    if (day1[i] === "C" && day2[i] === "C"){
      space.push(i);
    }
  }
  if (space.length > 0);
    console.log(space.length+"space occupied for both days")
  }else {
    console.log("no space occupied for both days")
  }
}
