// let heightMark, heightJohn, massMark, massJohn;
// heightMark = 1.69;
// heightJohn = 1.95;
// massMark = 78;
// massJohn = 92;

// CHALLENGE 1
/*
function BMI(heightMark, massMark, heightJohn, massJohn) {
  let bmiMark = Math.round(massMark / heightMark ** 2);
  let bmiJohn = Math.round(massJohn / heightJohn ** 2);
  const bmiCombine = bmiMark > bmiJohn;
  console.log(
    `Mark BMI is: ${bmiMark}.\n\John BMI is: ${bmiJohn}.
    Mark is bigger than John: ${bmiCombine}.`
  );
}
return BMI(1.69, 78, 1.95, 92);
*/

// //let BMI = mass / height ** 2;
// //console.log(BMI);

// //console.log(78 / 1.69 ** 2);
// //console.log(78 / (169 * 169));

// const BMIMark = Math.round(massMark / heightMark ** 2);
// const BMIJohn = Math.round(massJohn / heightJohn ** 2);

// //let BMIround = Math.round(BMIMark, BMIJohn);

// console.log(BMIMark, BMIJohn, BMIMark > BMIJohn);

// CHALLENGE 2

// let firstName = "Piano";
// let job = "Coder";

// const jonas = `I'm ${firstName}, a ${job}!`;
// console.log(jonas);

// //I'm Piano, a Coder!

// // Multiples
// console.log(`String with\n\multiple\n\ lines`);
// console.log(`String
// multiple
// lines`);
/*
String with
multiple
 lines
String
multiple
lines
*/

/*
So let's say it that we want to write a program which checks whether a person is allowed to start taking a driver's license or not. 
And if she is, then it will print that to the console. And if not, it will print how many years are left until the person can start taking the driver's license.
*/
/* FP
function age(a) {
  if (a >= 18) {
    console.log(`Age is: ${a}.\n\Allowed to take a driver's license.`);
  } else {
    console.log(`Age is: ${a}.
    Not allowed to take a driver's license.`);
  }
}
return age(22);
*/

// CHALLENGE 2
/*
function BMI(heightMark, massMark, heightJohn, massJohn) {
  BMIMark = Math.ceil(massMark / heightMark ** 2);
  BMIJohn = Math.ceil(massJohn / (heightJohn * heightJohn));
  const markHigherBMI = BMIMark > BMIJohn;
  if (markHigherBMI == true) {
    console.log(`Mark IBM : ${BMIMark} is higher than BMIJohn: ${BMIJohn}`);
  } else {
    console.log(`Mark IBM : ${BMIMark} is lower than BMIJohn: ${BMIJohn}`);
  }
}

return BMI(1.69, 78, 1.88, 95);
*/

/* Show Popup
const popup = prompt(`Input something in here:`);
console.log(popup);
*/

// CHALLENGE 3

/* Test FP
function dolphins(a, b, c) {
  for (let i = 0; i < 3; i+=) {
    console.log(i / 3);
  }
}

let dolphinsPoints = dolphins(96, 108, 89);
console.log(dolphinsPoints);
97.6;
*/

// const dolphins = [96, 108, 89];
// const koalas = [88, 91, 110];

// const dolphinsPoints = Math.round((97 + 112 + 101) / 3);
// const koalasPoints = Math.round((109 + 95 + 106) / 3);

// const dolphinsPoints = Math.round((97 + 112 + 101) / 3);
// const koalasPoints = Math.round((109 + 95 + 123) / 3); // 109

// if (dolphinsPoints > koalasPoints && dolphinsPoints >= 100) {
//   console.log("Dolphin Team is win");
// } else if (dolphinsPoints < koalasPoints && koalasPoints >= 100) {
//   console.log(`Koalas Team: \"${koalasPoints} points\" is win`);
// } else if (dolphinsPoints === koalasPoints && koalasPoints >= 100) {
//   console.log(`Both Teams are draw: \"${koalasPoints} points\"`);
// } else {
//   console.log(`No team wins the trophy :(`);
// }

/*
let day = "wednesday";

if (day == `monday`) {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === `tuesday`) {
  console.log(`Prepare theory videos`);
} else if (day === "wednesday" || day === `thursday`) {
  console.log(`Write code examples`);
} else if (day === `friday`) {
  console.log(`Record videos`);
} else if (day === "saturday" || day === `sunday`) {
  console.log(`Enjoy the weekend 😎`);
} else {
  console.log(`not a day`);
}
*/

// console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);

/* testing
function tipCalculator(bill){
  if (bill >= 50 && bill <= 300){
    // let tip = bill % 15;
    console.log(`tip is: ${bill % 15;} dollars`)
  }
  else {
    console.log(`tip is: ${bill % 20;} dollars`)
  }
}
 return tipCalculator(55);
 */

// CHALLENGE 4

/*
const bill = 60;

console.log(
  `The bill was: ${bill}, the tip was; ${
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  }, and total value  💲`
);
*/

`use strick`;

/*
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);

const orangeJuice = fruitProcessor(1, 8);
console.log(orangeJuice);
*/
/*
// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
// Arrow function
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
*/

//CHALLENGE 2.1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoresDolphins = calcAverage(44, 23, 71);
const scoresKoalas = calcAverage(65, 54, 49);

// const scoresDolphins = calcAverage(85, 54, 41);
// const scoresKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphin win: ${avgDolphins} vs. ${avgKoalas} 🐬`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win: ${avgKoalas} vs. ${avgDolphins} 🐨`);
  } else {
    console.log(`No team win.`);
  }
  // return checkWinner();
};

checkWinner(scoresDolphins, scoresKoalas);
*/

/*
const friends = ["Michael", "Steven", "Peter", "Jay"];
friends.pop(); //Last
const popped = friends.pop();
console.log(popped); // Peter
console.log(friends); // [ 'Michael', 'Steven' ]
*/

// CHALLENGE 2.2
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// calcTip(100);
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Total`, total);
/*
/*
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
*/
/*
const jonas = {
  firstName: "Jonas",
  friends: ["Michael", "Peter", "Piano"],
};

// let popup = prompt("put something here");
// console.log(popup);

const username = jonas.firstName;
const userFriends = jonas.friends.length;
const userRelationship = jonas.friends[0];

console.log(
  `${username} has ${userFriends}, and his best friends is ${userRelationship}.`
);
*/

// CHALLENGE 2.3
/*
const bmi = {
  firstName: ["Mark", "John"],
  lastName: ["Miller", "Smith"],
  mass: [78, 92, 99],
  height: [1.69, 1.95, 1.85],
  calcBMI: function () {
    for (i = 0; i < this.mass.length; i++) {
      this.bmiMark = Math.trunc(this.mass[i] / this.height[i] ** 2);
      // this.bmiJohn = Math.trunc(this.mass[i] / this.height[i] ** 2);
      this.bmiResult.push(this.bmiMark);
    }
    return this.bmiResult;
  },
  bmiResult: [],
  */
// Fixme
// getSummary: function () {
//   this.bmiSummary = `${this.firstName[0]}'s BMI: ${this.bmiMark[i]}, is ${
//     this.bmiMark > this.bmiJohn ? "higher" : "lower"
//   } than ${this.firstName[1]}'s BMI: ${Math.floor(this.bmiResult[i++])}.`;
//   return this.bmiSummary;
// },
// sortBMI: function () {
//   if (this.bmiResult[i] > this.bmiResult[i]) {
//     ketQua.unshift(this.bmiResult);
//   }
//   return;
// },
// };
// let ketQua = [];
// console.log(ketQua);
// bmi.mass.pop();
// bmi.mass.push(10);

// bmi.calcBMI();
// bmi.getSummary();

// console.log(bmi.bmiResult);
// console.log(bmi.bmiSummary);

// bmi.mass.pop();
// bmi.mass.push(130);
// bmi.height.push(1.3);
// console.log(bmi.mass);

// console.log(bmi.calcBMI());

// CHALLENGE 2.4
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bills[0]);

let tips = [];
let totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  // console.log(bills[i]);
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
// calcTip();
console.log(`Bill: ${bills}\nTip: ${tips}\nTotals: ${totals}`);

// Bonus:
// let arr = [];
const calcAverage = function (arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
*/

/*
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "string") continue;

  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
*/
/*
let counter = 3;
function myDay() {
  // console.log('Morning');
  // console.log('Afternoon');
  // console.log('Evening');
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  myDay();
}
myDay(); // 3 2 1
*/

/*
function addTwoNumbs(a, b) {
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
  return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNumbs(getNumber(), getNumber());
*/

function meal(animal) {
  animal.food = animal.food + 10;
}

const dog = {
  food: 10,
};
meal(dog);
meal(dog);

console.log(dog.food);
//30
