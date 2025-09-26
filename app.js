// we declare and define variables
/* let x = 5;
x = 6; */
/* const x = 5;
x = 6;
console.log(x);
 */
// strings represent names,characters letters etc
/* const x = "Ian";

//intergers/numbers
const y = 12345;

//boolean or true/false
const citizen = true;

//null is the absence of value
let name = null;

//undefined 
let z;
 */
//functions are input/output machines
//functions accept inputs or parameters
//declaring an defining functions
/* function add(x, y) {
  //console.log(x + y)
  console.log(x + y);
  return x + y;
}
//run the function
const bill = add(9, 8);
console.log(bill); */
/* const x = 7;

function returnThing() {
  const x = 8;
  console.log(x);
}
returnThing();
//template literals
const name = "nelson";
console.log("fsf ${name}");

console.log(5 % 2);
 */
/* function rocket(P, B, D) {
    const bages = Math.floor(P/B);
    const leftover = P%B;
    const money = ;badges *D + leftover;
    console.log(money);
}
 */
/* const age = 18
if (age >= 18){
  console.log("vote");
} else {
  console.log("no vote")
}

const temp = 32
if (temp >= 212){
  console.log("boil");
} else if (temp <= 32) {
  console.log("frozen")
} else {
  console.log("water")
} */
// 3= compare and evaluate, 2= evaluate and ignore
// or is ||
/*   const age = 35;
  const citizen = true;

  if 1 == "1"

  if (age === true && citizen === true) {
    console.log("can run for pres");
  } */
/*  function enterCastle(hasKey, hasMagic, isBanned){
  if (hasKey === true || hasMagic  && !isBanned) {
    console.log("can enter castle");
  } else {
    console.log("cannot enter");
  }
 }
 enterCastle(true, true, true); */
/* function findMiddle(x, y, z) {
  if ((x >= y && x <= z) || (x <= y && x >= z)) {
    console.log(x);
  } else if ((y >= z && y <= x) || (x <= y && x >= z)) {
    console.log(y);
  } else {
    console.log(z);
  }
}
findMiddle(8, 10, 5);
 */
function findTele(w, x, y, z) {
  if (w === 8 || (w === 9 && z === 8) || (z === 9 && x === y)) {
    console.log("ignore");
  } else {
    console.log("answer");
  }
}
findTele(9, 5, 6, 8);
